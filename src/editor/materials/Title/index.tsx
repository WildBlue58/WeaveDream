import { Typography } from "antd";
import type { CommonComponentProps } from "../../interface";

const { Title: AntdTitle } = Typography;

export interface TitleProps {
  level?: 1 | 2 | 3 | 4 | 5;
  text?: string;
  textAlign?: "left" | "center" | "right";
  color?: string;
  fontWeight?: string | number;
  ellipsis?: boolean;
}

const Title = ({
  level,
  text,
  textAlign,
  color,
  fontWeight,
  ellipsis,
  id: _id,
  name: _name,
}: TitleProps & CommonComponentProps) => {
  const style: React.CSSProperties = {};
  if (textAlign) {
    style.textAlign = textAlign;
  }
  if (color) {
    style.color = color;
  }
  if (fontWeight) {
    style.fontWeight = fontWeight;
  }

  return (
    <AntdTitle
      level={level || 1}
      style={style}
      ellipsis={ellipsis}
    >
      {text || "标题"}
    </AntdTitle>
  );
};

export default Title;

