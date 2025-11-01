import { Typography } from "antd";
import type { CommonComponentProps } from "../../interface";

const { Text: AntdText } = Typography;

export interface TextProps {
  content?: string;
  fontSize?: number;
  color?: string;
  fontWeight?: string | number;
  textAlign?: "left" | "center" | "right" | "justify";
  lineHeight?: number | string;
  textDecoration?: "none" | "underline" | "line-through";
  fontStyle?: "normal" | "italic";
}

const Text = ({
  content,
  fontSize,
  color,
  fontWeight,
  textAlign,
  lineHeight,
  textDecoration,
  fontStyle,
  id: _id,
  name: _name,
}: TextProps & CommonComponentProps) => {
  const style: React.CSSProperties = {};
  if (fontSize) {
    style.fontSize = `${fontSize}px`;
  }
  if (color) {
    style.color = color;
  }
  if (fontWeight) {
    style.fontWeight = fontWeight;
  }
  if (textAlign) {
    style.textAlign = textAlign;
  }
  if (lineHeight) {
    style.lineHeight =
      typeof lineHeight === "number" ? `${lineHeight}px` : lineHeight;
  }
  if (textDecoration) {
    style.textDecoration = textDecoration;
  }
  if (fontStyle) {
    style.fontStyle = fontStyle;
  }

  return <AntdText style={style}>{content || "文本内容"}</AntdText>;
};

export default Text;
