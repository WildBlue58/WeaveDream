import { Input, InputNumber, Select } from "antd";
import type { PropertyEditorProps } from "../types";
import { formItemStyle, labelStyle, labelColorStyle } from "../styles";

export function TitleEditor({
  currentProps,
  handleChange,
}: PropertyEditorProps) {
  return (
    <div className="space-y-1">
      <div className={formItemStyle}>
        <label className={labelStyle} style={labelColorStyle}>
          标题内容
        </label>
        <Input
          value={currentProps.text || ""}
          onChange={(e) => handleChange("text", e.target.value)}
          placeholder="请输入标题内容"
          className="transition-all duration-200"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className={formItemStyle}>
          <label className={labelStyle} style={labelColorStyle}>
            标题级别
          </label>
          <InputNumber
            value={currentProps.level || 1}
            onChange={(value) => handleChange("level", value)}
            min={1}
            max={5}
            className="w-full transition-all duration-200"
          />
          <div
            className="text-xs mt-1"
            style={{ color: "var(--text-tertiary)" }}
          >
            级别1最大，级别5最小
          </div>
        </div>
        <div className={formItemStyle}>
          <label className={labelStyle} style={labelColorStyle}>
            文本对齐
          </label>
          <Select
            value={currentProps.textAlign || "left"}
            onChange={(value) => handleChange("textAlign", value)}
            className="w-full transition-all duration-200"
            options={[
              { label: "左对齐 (left)", value: "left" },
              { label: "居中 (center)", value: "center" },
              { label: "右对齐 (right)", value: "right" },
            ]}
          />
        </div>
      </div>
      <div className={formItemStyle}>
        <label className={labelStyle} style={labelColorStyle}>
          文字颜色
        </label>
        <Input
          type="color"
          value={currentProps.color || "#000000"}
          onChange={(e) => handleChange("color", e.target.value)}
          className="w-full h-10 rounded-md transition-all duration-200"
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className={formItemStyle}>
          <label className={labelStyle} style={labelColorStyle}>
            字体粗细
          </label>
          <Select
            value={currentProps.fontWeight || "normal"}
            onChange={(value) => handleChange("fontWeight", value)}
            className="w-full transition-all duration-200"
            options={[
              { label: "正常 (normal)", value: "normal" },
              { label: "加粗 (bold)", value: "bold" },
              { label: "600", value: "600" },
              { label: "700", value: "700" },
            ]}
          />
        </div>
        <div className={formItemStyle}>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={currentProps.ellipsis || false}
              onChange={(e) => handleChange("ellipsis", e.target.checked)}
              className="w-4 h-4 transition-all duration-200"
            />
            <span className={labelStyle} style={labelColorStyle}>
              省略号
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}

