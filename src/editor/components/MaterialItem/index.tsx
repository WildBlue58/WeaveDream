import { useDrag } from "react-dnd";
import { useRef } from "react";

export interface MaterialItemProps {
  name: string;
}

// 组件图标映射
const componentIcons: { [key: string]: string } = {
  Page: "📄",
  Container: "📦",
  Card: "🃏",
  Button: "🔘",
  Text: "📝",
  Title: "📌",
  Input: "📥",
  Image: "🖼️",
  Divider: "➖",
};

export function MaterialItem(props: MaterialItemProps) {
  const { name } = props;
  const ref = useRef<HTMLDivElement>(null);
  const [collected, drag] = useDrag({
    type: name,
    // 数据项
    item: {
      type: name,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(ref);

  const icon = componentIcons[name] || "📦";

  return (
    <div
      ref={ref}
      className={`
        w-full
        rounded-lg
        p-3
        cursor-move
        transition-all
        duration-200
        hover-lift
        active:scale-[0.98]
        ${collected.isDragging ? "opacity-50" : "opacity-100"}
      `}
      style={{
        backgroundColor: collected.isDragging
          ? "var(--primary-light)"
          : "var(--bg-primary)",
        border: `1px solid ${
          collected.isDragging
            ? "var(--primary-color)"
            : "var(--border-color-light)"
        }`,
        borderRadius: "var(--radius-md)",
        boxShadow: collected.isDragging
          ? "var(--shadow-primary)"
          : "var(--shadow-sm)",
      }}
    >
      <div className="flex items-center gap-3">
        <div
          className="w-8 h-8 rounded-md flex items-center justify-center transition-all duration-200"
          style={{
            backgroundColor: "var(--primary-light)",
          }}
        >
          <span className="text-base">{icon}</span>
        </div>
        <span
          className="text-sm font-medium transition-colors duration-200"
          style={{
            color: collected.isDragging
              ? "var(--primary-color)"
              : "var(--text-primary)",
          }}
        >
          {name}
        </span>
      </div>
    </div>
  );
}
