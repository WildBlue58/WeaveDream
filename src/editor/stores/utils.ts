// 组件工具函数
import type { Component } from "./components";

/**
 * 根据 ID 查找组件（递归查找）
 */
export function getComponentById(
  id: number | null,
  components: Component[]
): Component | null {
  if (!id) return null;

  for (const component of components) {
    if (component.id === id) {
      return component;
    }
    if (component.children && component.children.length > 0) {
      const found = getComponentById(id, component.children);
      if (found) {
        return found;
      }
    }
  }
  return null;
}

/**
 * 计算组件的嵌套深度
 */
export function getComponentDepth(
  componentId: number,
  components: Component[],
  currentDepth: number = 0
): number {
  for (const component of components) {
    if (component.id === componentId) {
      return currentDepth;
    }
    if (component.children && component.children.length > 0) {
      const depth = getComponentDepth(
        componentId,
        component.children,
        currentDepth + 1
      );
      if (depth >= 0) {
        return depth;
      }
    }
  }
  return -1;
}

