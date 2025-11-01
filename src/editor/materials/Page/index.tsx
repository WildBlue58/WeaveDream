import type { CommonComponentProps } from "../../interface";
import { useMaterialDrop } from "../../hooks/useMaterialDrop";

export interface PageProps {
  flexDirection?: "row" | "column";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  gap?: number;
  padding?: number;
  margin?: number;
  backgroundColor?: string;
  minHeight?: number;
}

function Page({
  id,
  children,
  flexDirection,
  justifyContent,
  alignItems,
  gap,
  padding,
  margin,
  backgroundColor,
  minHeight,
}: PageProps & CommonComponentProps) {
  const { drop, canDrop } = useMaterialDrop(
    [
      "Button",
      "Container",
      "Text",
      "Input",
      "Image",
      "Card",
      "Divider",
      "Title",
    ],
    id
  );

  const style: React.CSSProperties = {
    display: "flex",
    flexDirection: flexDirection || "column",
    justifyContent: justifyContent || "flex-start",
    alignItems: alignItems || "stretch",
    gap: gap ? `${gap}px` : undefined,
  };

  const finalStyle: React.CSSProperties = {
    ...style,
    padding: padding !== undefined ? `${padding}px` : "var(--spacing-xl)",
    margin: margin !== undefined ? `${margin}px` : undefined,
    minHeight: minHeight !== undefined ? `${minHeight}px` : "600px",
    borderRadius: "var(--radius-lg)",
    transition: "all var(--duration-normal) var(--ease-out)",
    backgroundColor:
      backgroundColor ||
      (canDrop ? "var(--primary-light)" : "var(--bg-primary)"),
    border: canDrop
      ? "2px dashed var(--primary-color)"
      : "1px solid var(--border-color-light)",
    boxShadow: canDrop ? "var(--shadow-primary)" : "var(--shadow-sm)",
  };

  return (
    <div ref={drop as any} style={finalStyle}>
      {children || (
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
            <div className="text-3xl">📄</div>
          </div>
          <div
            className="text-sm font-medium transition-colors duration-200"
            style={{ color: "var(--text-secondary)" }}
          >
            拖拽组件到页面开始构建
          </div>
        </div>
      )}
    </div>
  );
}
export default Page;
