import { Input as AntdInput } from "antd";
import type { CommonComponentProps } from "../../interface";

export interface InputProps {
  placeholder?: string;
  size?: "small" | "middle" | "large";
  disabled?: boolean;
  value?: string;
  type?: "text" | "password" | "email" | "number" | "tel" | "url";
  maxLength?: number;
  allowClear?: boolean;
  prefix?: string;
  suffix?: string;
}

const Input = ({
  placeholder,
  size,
  disabled,
  value,
  type,
  maxLength,
  allowClear,
  prefix,
  suffix,
  id: _id,
  name: _name,
}: InputProps & CommonComponentProps) => {
  return (
    <AntdInput
      placeholder={placeholder || "请输入内容"}
      size={size || "middle"}
      disabled={disabled}
      value={value}
      type={type || "text"}
      maxLength={maxLength}
      allowClear={allowClear}
      prefix={prefix}
      suffix={suffix}
    />
  );
};

export default Input;
