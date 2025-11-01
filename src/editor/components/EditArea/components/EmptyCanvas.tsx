/**
 * 空画布提示组件
 */
export function EmptyCanvas() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-[500px] transition-all duration-200 fade-in"
      style={{ color: "var(--text-tertiary)" }}
    >
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-all duration-200"
        style={{
          backgroundColor: "var(--bg-secondary)",
          boxShadow: "var(--shadow-md)",
        }}
      >
        <div className="text-4xl">🎨</div>
      </div>
      <div
        className="text-xl font-semibold mb-2 transition-colors duration-200"
        style={{ color: "var(--text-secondary)" }}
      >
        拖拽组件到这里开始构建
      </div>
      <div
        className="text-sm transition-colors duration-200"
        style={{ color: "var(--text-tertiary)" }}
      >
        从左侧组件库中选择组件拖拽到画布
      </div>
    </div>
  );
}

