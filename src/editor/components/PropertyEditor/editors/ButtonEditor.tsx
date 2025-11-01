import { Input, Select } from "antd";
import type { PropertyEditorProps } from "../types";
import { formItemStyle, labelStyle, labelColorStyle } from "../styles";

export function ButtonEditor({
  currentProps,
  handleChange,
}: PropertyEditorProps) {
  return (
    <div className="space-y-1">
      <div className={formItemStyle}>
        <label className={labelStyle} style={labelColorStyle}>
          按钮文本
        </label>
        <Input
          value={currentProps.text || ""}
          onChange={(e) => handleChange("text", e.target.value)}
          placeholder="请输入按钮文本"
          className="transition-all duration-200"
        />
      </div>
      <div className={formItemStyle}>
        <label className={labelStyle} style={labelColorStyle}>
          按钮类型
        </label>
        <Select
          value={currentProps.type || "primary"}
          onChange={(value) => handleChange("type", value)}
          className="w-full transition-all duration-200"
          options={[
            { label: "主要按钮 (primary)", value: "primary" },
            { label: "默认按钮 (default)", value: "default" },
            { label: "文本按钮 (text)", value: "text" },
            { label: "虚线按钮 (dashed)", value: "dashed" },
            { label: "链接按钮 (link)", value: "link" },
          ]}
        />
      </div>
      <div className={formItemStyle}>
        <label className={labelStyle} style={labelColorStyle}>
          按钮大小
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
      <div className={formItemStyle}>
        <label className={labelStyle} style={labelColorStyle}>
          按钮形状
        </label>
        <Select
          value={currentProps.shape || "default"}
          onChange={(value) => handleChange("shape", value)}
          className="w-full transition-all duration-200"
          options={[
            { label: "默认 (default)", value: "default" },
            { label: "圆角 (round)", value: "round" },
            { label: "圆形 (circle)", value: "circle" },
          ]}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
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
        <div className={formItemStyle}>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={currentProps.loading || false}
              onChange={(e) => handleChange("loading", e.target.checked)}
              className="w-4 h-4 transition-all duration-200"
            />
            <span className={labelStyle} style={labelColorStyle}>
              加载中
            </span>
          </label>
        </div>
        <div className={formItemStyle}>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={currentProps.danger || false}
              onChange={(e) => handleChange("danger", e.target.checked)}
              className="w-4 h-4 transition-all duration-200"
            />
            <span className={labelStyle} style={labelColorStyle}>
              危险按钮
            </span>
          </label>
        </div>
        <div className={formItemStyle}>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={currentProps.block || false}
              onChange={(e) => handleChange("block", e.target.checked)}
              className="w-4 h-4 transition-all duration-200"
            />
            <span className={labelStyle} style={labelColorStyle}>
              块级按钮
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}
