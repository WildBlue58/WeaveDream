import { Button as AntdButton } from "antd";
import type { ButtonType } from "antd/es/button";
import type { CommonComponentProps } from "../../interface";

export interface ButtonProps {
  type?: ButtonType;
  text?: string;
  size?: "small" | "middle" | "large";
  disabled?: boolean;
  loading?: boolean;
  danger?: boolean;
  block?: boolean;
  shape?: "default" | "round" | "circle";
}

const Button = ({
  type = "primary",
  text = "按钮",
  size = "middle",
  disabled = false,
  loading = false,
  danger = false,
  block = false,
  shape = "default",
  id: _id,
  name: _name,
}: ButtonProps & CommonComponentProps) => {
  return (
    <AntdButton
      type={type}
      size={size}
      disabled={disabled}
      loading={loading}
      danger={danger}
      block={block}
      shape={shape}
    >
      {text}
    </AntdButton>
  );
};

export default Button;
