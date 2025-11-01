import { useComponentsStore, getComponentById } from "../../stores/components";
import { PropertyEditor } from "../PropertyEditor";

export function Setting() {
  const { components, selectedComponentId } = useComponentsStore();

  const selectedComponent = selectedComponentId
    ? getComponentById(selectedComponentId, components)
    : null;

  return (
    <div
      className="h-full flex flex-col transition-all duration-200"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      {/* 标题栏 */}
      <div
        className="px-4 py-4 border-b transition-all duration-200"
        style={{
          backgroundColor: "var(--bg-secondary)",
          borderColor: "var(--border-color-light)",
          boxShadow: "var(--shadow-xs)",
        }}
      >
        <h2
          className="text-base font-semibold transition-colors duration-200"
          style={{ color: "var(--text-primary)" }}
        >
          属性配置
        </h2>
      </div>

      {/* 内容区域 */}
      <div
        className="flex-1 overflow-y-auto p-4 transition-all duration-200"
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        {!selectedComponent ? (
          <div
            className="flex flex-col items-center justify-center h-full transition-all duration-200 fade-in"
            style={{ color: "var(--text-tertiary)" }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-200"
              style={{
                backgroundColor: "var(--bg-secondary)",
                boxShadow: "var(--shadow-md)",
              }}
            >
              <div className="text-3xl">⚙️</div>
            </div>
            <div
              className="text-sm text-center transition-colors duration-200"
              style={{ color: "var(--text-secondary)" }}
            >
              <div className="mb-1 font-medium">暂无选中组件</div>
              <div
                className="text-xs transition-colors duration-200"
                style={{ color: "var(--text-tertiary)" }}
              >
                在画布中点击组件查看和编辑属性
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {/* 组件信息 */}
            <div
              className="rounded-lg p-4 transition-all duration-200 hover-lift"
              style={{
                backgroundColor: "var(--primary-light)",
                border: "1px solid var(--primary-color)",
                borderRadius: "var(--radius-lg)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div>
                <div
                  className="text-xs font-semibold mb-2 uppercase tracking-wide transition-colors duration-200"
                  style={{ color: "var(--primary-color)" }}
                >
                  当前选中
                </div>
                <div
                  className="text-base font-bold transition-colors duration-200"
                  style={{ color: "var(--text-primary)" }}
                >
                  {selectedComponent.name}
                </div>
              </div>
            </div>

            {/* 属性编辑器 */}
            <div
              className="rounded-lg p-5 transition-all duration-200"
              style={{
                backgroundColor: "var(--bg-secondary)",
                borderRadius: "var(--radius-lg)",
                boxShadow: "var(--shadow-xs)",
              }}
            >
              <div
                className="text-sm font-semibold mb-5 transition-colors duration-200"
                style={{ color: "var(--text-primary)" }}
              >
                组件属性
              </div>
              <PropertyEditor component={selectedComponent} />
            </div>

            {/* JSON 结构（折叠） */}
            <details
              className="rounded-lg transition-all duration-200"
              style={{
                backgroundColor: "var(--bg-secondary)",
                borderRadius: "var(--radius-lg)",
                boxShadow: "var(--shadow-xs)",
              }}
            >
              <summary
                className="text-xs font-medium cursor-pointer p-4 transition-colors duration-200"
                style={{ color: "var(--text-secondary)" }}
              >
                查看 JSON 结构
              </summary>
              <pre
                className="text-xs p-4 rounded overflow-auto mt-2 transition-all duration-200"
                style={{
                  backgroundColor: "var(--bg-primary)",
                  border: "1px solid var(--border-color-light)",
                  borderRadius: "var(--radius-md)",
                  color: "var(--text-secondary)",
                }}
              >
                {JSON.stringify(selectedComponent, null, 2)}
              </pre>
            </details>
          </div>
        )}
      </div>
    </div>
  );
}
