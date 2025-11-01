import { Image as AntdImage } from "antd";
import type { CommonComponentProps } from "../../interface";

export interface ImageProps {
  src?: string;
  width?: number | string;
  height?: number | string;
  alt?: string;
  objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down";
  borderRadius?: number;
  border?: string;
  shadow?: boolean;
}

const Image = ({
  src,
  width,
  height,
  alt,
  objectFit,
  borderRadius,
  border,
  shadow,
  id: _id,
  name: _name,
}: ImageProps & CommonComponentProps) => {
  const style: React.CSSProperties = {
    objectFit: objectFit || "cover",
  };

  if (borderRadius !== undefined) {
    style.borderRadius = `${borderRadius}px`;
  }

  if (border) {
    style.border = border;
  }

  if (shadow) {
    style.boxShadow = "var(--shadow-md)";
  }

  return (
    <AntdImage
      src={src || "https://via.placeholder.com/300x200?text=请设置图片URL"}
      width={width || 300}
      height={height || 200}
      alt={alt || "图片"}
      preview={false}
      style={style}
    />
  );
};

export default Image;
