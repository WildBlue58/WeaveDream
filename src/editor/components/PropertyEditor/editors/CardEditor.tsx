import { Input, Select } from "antd";
import type { PropertyEditorProps } from "../types";
import { formItemStyle, labelStyle, labelColorStyle } from "../styles";

export function CardEditor({
  currentProps,
  handleChange,
}: PropertyEditorProps) {
  return (
    <div className="space-y-1">
      <div className={formItemStyle}>
        <label className={labelStyle} style={labelColorStyle}>
          卡片标题
        </label>
        <Input
          value={currentProps.title || ""}
          onChange={(e) => handleChange("title", e.target.value)}
          placeholder="请输入卡片标题"
          className="transition-all duration-200"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className={formItemStyle}>
          <label className={labelStyle} style={labelColorStyle}>
            卡片尺寸
          </label>
          <Select
            value={currentProps.size || "default"}
            onChange={(value) => handleChange("size", value)}
            className="w-full transition-all duration-200"
            options={[
              { label: "默认 (default)", value: "default" },
              { label: "小 (small)", value: "small" },
            ]}
          />
        </div>
        <div className={formItemStyle}>
          <label className={labelStyle} style={labelColorStyle}>
            额外操作区
          </label>
          <Input
            value={currentProps.extra || ""}
            onChange={(e) => handleChange("extra", e.target.value)}
            placeholder="请输入额外操作区文本"
            className="transition-all duration-200"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className={formItemStyle}>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={currentProps.bordered !== false}
              onChange={(e) => handleChange("bordered", e.target.checked)}
              className="w-4 h-4 transition-all duration-200"
            />
            <span className={labelStyle} style={labelColorStyle}>
              显示边框
            </span>
          </label>
        </div>
        <div className={formItemStyle}>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={currentProps.hoverable || false}
              onChange={(e) => handleChange("hoverable", e.target.checked)}
              className="w-4 h-4 transition-all duration-200"
            />
            <span className={labelStyle} style={labelColorStyle}>
              悬停效果
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}

