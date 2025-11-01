import { useComponentsStore } from "../../stores/components";
import { useComponentConfigStore } from "../../stores/component-config";
import { ComponentToolbar } from "../ComponentToolbar";
import { useKeyboardShortcuts } from "./hooks/useKeyboardShortcuts";
import { useToolbarPosition } from "./hooks/useToolbarPosition";
import { renderComponents } from "./utils/renderComponents";
import { EmptyCanvas } from "./components/EmptyCanvas";

export function EditArea() {
  const {
    components,
    selectedComponentId,
    selectComponent,
    undo,
    redo,
    copyComponent,
    pasteComponent,
  } = useComponentsStore();
  const { componentConfig } = useComponentConfigStore();

  // 键盘快捷键支持
  useKeyboardShortcuts({
    selectedComponentId,
    undo,
    redo,
    copyComponent,
    pasteComponent,
    selectComponent,
  });

  // 计算工具栏位置
  const { toolbarPosition, componentRefs } = useToolbarPosition({
    selectedComponentId,
    components,
  });

  return (
    <div
      className="h-full w-full overflow-auto transition-all duration-200"
      style={{
        backgroundColor: "var(--bg-tertiary)",
        backgroundImage: `
          linear-gradient(to right, var(--border-color-light) 1px, transparent 1px),
          linear-gradient(to bottom, var(--border-color-light) 1px, transparent 1px)
        `,
        backgroundSize: "20px 20px",
      }}
      onClick={() => selectComponent(null)}
    >
      {/* 画布区域 */}
      <div className="min-h-full flex items-start justify-center p-8">
        <div
          className="w-full max-w-5xl rounded-xl p-8 min-h-[600px] transition-all duration-200 hover-lift"
          style={{
            backgroundColor: "var(--bg-primary)",
            boxShadow: "var(--shadow-lg)",
            borderRadius: "var(--radius-xl)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* 画布内容 */}
          <div className="relative min-h-full">
            {components.length > 0 ? (
              renderComponents({
                components,
                componentConfig,
                selectedComponentId,
                componentRefs,
                onSelectComponent: selectComponent,
              })
            ) : (
              <EmptyCanvas />
            )}
            {toolbarPosition && selectedComponentId && (
              <ComponentToolbar
                componentId={selectedComponentId}
                position={toolbarPosition}
                onClose={() => selectComponent(null)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
