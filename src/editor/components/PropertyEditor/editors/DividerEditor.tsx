import { Input, Select } from "antd";
import type { PropertyEditorProps } from "../types";
import { formItemStyle, labelStyle, labelColorStyle } from "../styles";

export function DividerEditor({
  currentProps,
  handleChange,
}: PropertyEditorProps) {
  return (
    <div className="space-y-1">
      <div className={formItemStyle}>
        <label className={labelStyle} style={labelColorStyle}>
          分割线文本
        </label>
        <Input
          value={currentProps.text || ""}
          onChange={(e) => handleChange("text", e.target.value)}
          placeholder="请输入分割线文本（留空则不显示文本）"
          className="transition-all duration-200"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className={formItemStyle}>
          <label className={labelStyle} style={labelColorStyle}>
            分割线方向
          </label>
          <Select
            value={currentProps.type || "horizontal"}
            onChange={(value) => handleChange("type", value)}
            className="w-full transition-all duration-200"
            options={[
              { label: "水平 (horizontal)", value: "horizontal" },
              { label: "垂直 (vertical)", value: "vertical" },
            ]}
          />
        </div>
        <div className={formItemStyle}>
          <label className={labelStyle} style={labelColorStyle}>
            文本对齐
          </label>
          <Select
            value={currentProps.orientation || "center"}
            onChange={(value) => handleChange("orientation", value)}
            className="w-full transition-all duration-200"
            options={[
              { label: "居中 (center)", value: "center" },
              { label: "左对齐 (left)", value: "left" },
              { label: "右对齐 (right)", value: "right" },
            ]}
          />
        </div>
      </div>
      <div className={formItemStyle}>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={currentProps.plain !== false}
            onChange={(e) => handleChange("plain", e.target.checked)}
            className="w-4 h-4 transition-all duration-200"
          />
          <span className={labelStyle} style={labelColorStyle}>
            简约模式（无文字时隐藏边框）
          </span>
        </label>
      </div>
    </div>
  );
}

