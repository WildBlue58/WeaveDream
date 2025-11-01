/**
 * 组件树状态管理 Store
 *
 * 编辑区域的数据由 store 管理，使用 parentId + children 构建树形结构
 */
import { create } from "zustand";
import { getComponentById as getComponentByIdUtil } from "./utils";

/**
 * 组件接口
 *
 * parentId + children 可以构建出一个完整的树结构
 */
export interface Component {
  id: number;
  name: string;
  props: any;
  children?: Component[];
  parentId?: number;
}

// 导出工具函数（保持向后兼容）
export { getComponentById, getComponentDepth } from "./utils";

/**
 * Store 状态接口
 */
interface State {
  components: Component[]; // 组件树根节点数组
  selectedComponentId: number | null; // 当前选中的组件 ID
  history: Component[][]; // 历史记录数组（最多保存 50 步）
  historyIndex: number; // 当前历史记录索引
  copiedComponent: Component | null; // 复制的组件（支持粘贴）
}

/**
 * Store 操作接口
 *
 * store 主要提供 State & Actions，使用交叉类型组合
 */
interface Action {
  addComponent: (component: Component, parentId?: number) => void;
  deleteComponent: (componentId: number) => void;
  updateComponentProps: (componentId: number, props: any) => void;
  selectComponent: (componentId: number | null) => void;
  undo: () => void;
  redo: () => void;
  copyComponent: (componentId: number) => void;
  pasteComponent: (parentId?: number) => void;
  moveComponentUp: (componentId: number) => void;
  moveComponentDown: (componentId: number) => void;
  saveToHistory: () => void; // 保存当前状态到历史记录
}

/**
 * 历史记录最大步数
 */
const MAX_HISTORY = 50;

export const useComponentsStore = create<State & Action>((set, get) => ({
  components: [
    {
      id: 1,
      name: "Page",
      props: {},
      desc: "页面",
    },
  ],
  selectedComponentId: null,
  history: [],
  historyIndex: -1,
  copiedComponent: null,

  saveToHistory: () => {
    const state = get();
    const newHistory = state.history.slice(0, state.historyIndex + 1);
    newHistory.push(JSON.parse(JSON.stringify(state.components)));
    if (newHistory.length > MAX_HISTORY) {
      newHistory.shift();
    }
    set({
      history: newHistory,
      historyIndex: newHistory.length - 1,
    });
  },

  undo: () => {
    const state = get();
    if (state.historyIndex > 0) {
      const newIndex = state.historyIndex - 1;
      set({
        components: JSON.parse(JSON.stringify(state.history[newIndex])),
        historyIndex: newIndex,
        selectedComponentId: null,
      });
    }
  },

  redo: () => {
    const state = get();
    if (state.historyIndex < state.history.length - 1) {
      const newIndex = state.historyIndex + 1;
      set({
        components: JSON.parse(JSON.stringify(state.history[newIndex])),
        historyIndex: newIndex,
        selectedComponentId: null,
      });
    }
  },

  copyComponent: (componentId) => {
    const state = get();
    const component = getComponentByIdUtil(componentId, state.components);
    if (component) {
      set({ copiedComponent: JSON.parse(JSON.stringify(component)) });
    }
  },

  pasteComponent: (parentId) => {
    const state = get();
    if (!state.copiedComponent) return;

    get().saveToHistory();

    let idCounter = new Date().getTime();
    const generateNewIds = (
      comp: Component,
      currentParentId?: number
    ): Component => {
      const newId = idCounter++;
      const newComponent: Component = {
        ...comp,
        id: newId,
        parentId: currentParentId || parentId || undefined,
      };
      if (comp.children && comp.children.length > 0) {
        newComponent.children = comp.children.map((child) =>
          generateNewIds(child, newId)
        );
      }
      return newComponent;
    };

    const newComponent = generateNewIds(state.copiedComponent, parentId);

    if (parentId) {
      const parentComponent = getComponentByIdUtil(parentId, state.components);
      if (parentComponent) {
        const updatedComponents = [...state.components];
        const updateParent = (components: Component[]): Component[] => {
          return components.map((comp) => {
            if (comp.id === parentId) {
              return {
                ...comp,
                children: [...(comp.children || []), newComponent],
              };
            }
            if (comp.children && comp.children.length > 0) {
              return {
                ...comp,
                children: updateParent(comp.children),
              };
            }
            return comp;
          });
        };
        set({
          components: updateParent(updatedComponents),
          selectedComponentId: newComponent.id,
        });
      }
    } else {
      set({
        components: [...state.components, newComponent],
        selectedComponentId: newComponent.id,
      });
    }
  },

  selectComponent: (componentId) => set({ selectedComponentId: componentId }),
  addComponent: (component, parentId) => {
    get().saveToHistory();
    set((state) => {
      if (parentId) {
        // 需要深度复制整个树结构，更新父组件的children
        const updateParent = (components: Component[]): Component[] => {
          return components.map((comp) => {
            if (comp.id === parentId) {
              return {
                ...comp,
                children: [...(comp.children || []), component],
              };
            }
            if (comp.children && comp.children.length > 0) {
              return {
                ...comp,
                children: updateParent(comp.children),
              };
            }
            return comp;
          });
        };

        component.parentId = parentId;
        return {
          components: updateParent(state.components),
        };
      }
      return {
        components: [...state.components, component],
      };
    });
  },
  deleteComponent: (componentId) => {
    if (!componentId) return;
    const state = get();
    const component = getComponentByIdUtil(componentId, state.components);
    if (!component) return;

    // 不允许删除Page组件
    if (component.name === "Page") return;

    get().saveToHistory();

    // 使用深拷贝确保完全新的引用
    const componentsCopy = JSON.parse(JSON.stringify(state.components));

    // 递归删除目标组件
    const removeComponent = (components: Component[]): Component[] => {
      return components.filter((comp) => {
        if (comp.id === componentId) {
          return false; // 过滤掉要删除的组件
        }
        // 递归处理子组件
        if (comp.children && comp.children.length > 0) {
          comp.children = removeComponent(comp.children);
        }
        return true;
      });
    };

    const newComponents = removeComponent(componentsCopy);

    set({
      components: newComponents,
      selectedComponentId:
        state.selectedComponentId === componentId
          ? null
          : state.selectedComponentId,
    });
  },
  updateComponentProps: (componentId: number, props: any) => {
    const updateComponentInTree = (components: Component[]): Component[] => {
      return components.map((component) => {
        if (component.id === componentId) {
          return { ...component, props: { ...component.props, ...props } };
        }
        if (component.children && component.children.length > 0) {
          return {
            ...component,
            children: updateComponentInTree(component.children),
          };
        }
        return component;
      });
    };
    // 属性更新不保存历史，避免历史记录过多
    set({ components: updateComponentInTree(get().components) });
  },

  moveComponentUp: (componentId) => {
    const state = get();
    const component = getComponentByIdUtil(componentId, state.components);
    if (!component) return;

    get().saveToHistory();

    const moveInArray = (components: Component[]): Component[] => {
      const index = components.findIndex((c) => c.id === componentId);
      if (index <= 0) return components; // 已经在最前面

      const newComponents = [...components];
      [newComponents[index - 1], newComponents[index]] = [
        newComponents[index],
        newComponents[index - 1],
      ];
      return newComponents;
    };

    const moveInChildren = (components: Component[]): Component[] => {
      return components.map((comp) => {
        if (comp.children && comp.children.length > 0) {
          const childIndex = comp.children.findIndex(
            (c) => c.id === componentId
          );
          if (childIndex > 0) {
            const newChildren = [...comp.children];
            [newChildren[childIndex - 1], newChildren[childIndex]] = [
              newChildren[childIndex],
              newChildren[childIndex - 1],
            ];
            return { ...comp, children: newChildren };
          }
          return {
            ...comp,
            children: moveInChildren(comp.children),
          };
        }
        return comp;
      });
    };

    if (!component.parentId) {
      // 顶级组件
      set({ components: moveInArray(state.components) });
    } else {
      // 子组件
      set({ components: moveInChildren(state.components) });
    }
  },

  moveComponentDown: (componentId) => {
    const state = get();
    const component = getComponentByIdUtil(componentId, state.components);
    if (!component) return;

    get().saveToHistory();

    const moveInArray = (components: Component[]): Component[] => {
      const index = components.findIndex((c) => c.id === componentId);
      if (index < 0 || index >= components.length - 1) return components; // 已经在最后面

      const newComponents = [...components];
      [newComponents[index], newComponents[index + 1]] = [
        newComponents[index + 1],
        newComponents[index],
      ];
      return newComponents;
    };

    const moveInChildren = (components: Component[]): Component[] => {
      return components.map((comp) => {
        if (comp.children && comp.children.length > 0) {
          const childIndex = comp.children.findIndex(
            (c) => c.id === componentId
          );
          if (childIndex >= 0 && childIndex < comp.children.length - 1) {
            const newChildren = [...comp.children];
            [newChildren[childIndex], newChildren[childIndex + 1]] = [
              newChildren[childIndex + 1],
              newChildren[childIndex],
            ];
            return { ...comp, children: newChildren };
          }
          return {
            ...comp,
            children: moveInChildren(comp.children),
          };
        }
        return comp;
      });
    };

    if (!component.parentId) {
      // 顶级组件
      set({ components: moveInArray(state.components) });
    } else {
      // 子组件
      set({ components: moveInChildren(state.components) });
    }
  },
}));
