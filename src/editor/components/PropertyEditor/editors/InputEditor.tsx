import { Input, InputNumber, Select } from "antd";
import type { PropertyEditorProps } from "../types";
import { formItemStyle, labelStyle, labelColorStyle } from "../styles";

export function InputEditor({
  currentProps,
  handleChange,
}: PropertyEditorProps) {
  return (
    <div className="space-y-1">
      <div className={formItemStyle}>
        <label className={labelStyle} style={labelColorStyle}>
          占位符文本
        </label>
        <Input
          value={currentProps.placeholder || ""}
          onChange={(e) => handleChange("placeholder", e.target.value)}
          placeholder="请输入占位符文本"
          className="transition-all duration-200"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className={formItemStyle}>
          <label className={labelStyle} style={labelColorStyle}>
            输入类型
          </label>
          <Select
            value={currentProps.type || "text"}
            onChange={(value) => handleChange("type", value)}
            className="w-full transition-all duration-200"
            options={[
              { label: "文本 (text)", value: "text" },
              { label: "密码 (password)", value: "password" },
              { label: "邮箱 (email)", value: "email" },
              { label: "数字 (number)", value: "number" },
              { label: "电话 (tel)", value: "tel" },
              { label: "网址 (url)", value: "url" },
            ]}
          />
        </div>
        <div className={formItemStyle}>
          <label className={labelStyle} style={labelColorStyle}>
            输入框大小
          </label>
          <Select
            value={currentProps.size || "middle"}
            onChange={(value) => handleChange("size", value)}
            className="w-full transition-all duration-200"
            options={[
              { label: "小 (small)", value: "small" },
              { label: "中 (middle)", value: "middle" },
              { label: "大 (large)", value: "large" },
            ]}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className={formItemStyle}>
          <label className={labelStyle} style={labelColorStyle}>
            最大长度
          </label>
          <InputNumber
            value={currentProps.maxLength}
            onChange={(value) => handleChange("maxLength", value || undefined)}
            min={1}
            max={1000}
            className="w-full transition-all duration-200"
            placeholder="不限制"
          />
        </div>
        <div className={formItemStyle}>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={currentProps.allowClear || false}
              onChange={(e) => handleChange("allowClear", e.target.checked)}
              className="w-4 h-4 transition-all duration-200"
            />
            <span className={labelStyle} style={labelColorStyle}>
              清除按钮
            </span>
          </label>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className={formItemStyle}>
          <label className={labelStyle} style={labelColorStyle}>
            前缀文本
          </label>
          <Input
            value={currentProps.prefix || ""}
            onChange={(e) => handleChange("prefix", e.target.value)}
            placeholder="请输入前缀文本"
            className="transition-all duration-200"
          />
        </div>
        <div className={formItemStyle}>
          <label className={labelStyle} style={labelColorStyle}>
            后缀文本
          </label>
          <Input
            value={currentProps.suffix || ""}
            onChange={(e) => handleChange("suffix", e.target.value)}
            placeholder="请输入后缀文本"
            className="transition-all duration-200"
          />
        </div>
      </div>
      <div className={formItemStyle}>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={currentProps.disabled || false}
            onChange={(e) => handleChange("disabled", e.target.checked)}
            className="w-4 h-4 transition-all duration-200"
          />
          <span className={labelStyle} style={labelColorStyle}>
            禁用
          </span>
        </label>
      </div>
    </div>
  );
}
