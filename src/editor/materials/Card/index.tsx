import { Card as AntdCard } from "antd";
import type { CommonComponentProps } from "../../interface";
import { useMaterialDrop } from "../../hooks/useMaterialDrop";

export interface CardProps {
  title?: string;
  bordered?: boolean;
  hoverable?: boolean;
  size?: "default" | "small";
  extra?: string;
}

const Card = ({
  title,
  bordered,
  hoverable,
  size,
  extra,
  children,
  id,
}: CardProps & CommonComponentProps) => {
  const { drop } = useMaterialDrop(
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

  return (
    <div ref={drop as any}>
      <AntdCard
        title={title || "卡片标题"}
        bordered={bordered !== false}
        hoverable={hoverable}
        size={size || "default"}
        extra={extra}
        style={{ width: "100%" }}
      >
        {children}
      </AntdCard>
    </div>
  );
};

export default Card;

