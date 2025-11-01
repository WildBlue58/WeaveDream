import type { CommonComponentProps } from "../../interface";
import { useMaterialDrop } from "../../hooks/useMaterialDrop";

export interface ContainerProps {
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
  depth?: number; // 嵌套深度
  padding?: number;
  margin?: number;
  backgroundColor?: string;
  border?: string;
  borderRadius?: number;
}

const Container = ({
  children,
  id,
  flexDirection,
  justifyContent,
  alignItems,
  gap,
  depth = 0,
  padding,
  margin,
  backgroundColor,
  border,
  borderRadius,
}: ContainerProps & CommonComponentProps) => {
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

  // 根据嵌套深度动态调整阴影和边框样式
  const depthMultiplier = depth > 0 ? depth : 1;
  const shadowIntensity = Math.min(0.1 + depth * 0.05, 0.3);
  const shadowY = depthMultiplier * 2;
  const shadowBlur = depthMultiplier * 4;
  const borderWidth = depth > 0 ? 2 + depth * 0.5 : 2;

  const style: React.CSSProperties = {
    display: "flex",
    flexDirection: flexDirection || "column",
    justifyContent: justifyContent || "flex-start",
    alignItems: alignItems || "stretch",
    gap: gap ? `${gap}px` : undefined,
    boxShadow: canDrop
      ? `0 ${shadowY}px ${shadowBlur}px rgba(59, 130, 246, 0.3)`
      : `0 ${shadowY}px ${shadowBlur}px rgba(0, 0, 0, ${shadowIntensity})`,
    borderWidth: `${borderWidth}px`,
  };

  // 根据深度和拖拽状态确定样式
  const getContainerStyles = () => {
    if (canDrop) {
      return {
        borderColor: "var(--primary-color)",
        backgroundColor: "var(--primary-light)",
      };
    }

    switch (depth) {
      case 0:
        return {
          borderColor: "var(--border-color)",
          backgroundColor: "var(--bg-primary)",
        };
      case 1:
        return {
          borderColor: "var(--border-color-dark)",
          backgroundColor: "var(--bg-secondary)",
        };
      default:
        return {
          borderColor: "var(--border-color-dark)",
          backgroundColor: "var(--bg-secondary)",
        };
    }
  };

  const containerStyles = getContainerStyles();

  // 合并样式，用户自定义样式优先级更高
  const finalStyle: React.CSSProperties = {
    ...style,
    minHeight: "100px",
    padding: padding !== undefined ? `${padding}px` : "var(--spacing-lg)",
    margin: margin !== undefined ? `${margin}px` : undefined,
    borderRadius:
      borderRadius !== undefined ? `${borderRadius}px` : "var(--radius-md)",
    borderStyle: "dashed",
    borderWidth: `${borderWidth}px`,
    transition: "all var(--duration-normal) var(--ease-out)",
    ...containerStyles,
  };

  if (backgroundColor) {
    finalStyle.backgroundColor = backgroundColor;
  }

  if (border) {
    finalStyle.border = border;
    finalStyle.borderStyle = undefined;
    finalStyle.borderWidth = undefined;
  }

  return (
    <div
      ref={drop as any}
      style={finalStyle}
      className="hover:shadow-md transition-shadow duration-200"
    >
      {children || (
        <div
          className="flex items-center justify-center h-20 text-sm w-full transition-colors duration-200"
          style={{ color: "var(--text-tertiary)" }}
        >
          拖拽组件到这里
        </div>
      )}
    </div>
  );
};

export default Container;
