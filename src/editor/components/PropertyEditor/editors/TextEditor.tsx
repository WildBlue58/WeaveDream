import { Input, InputNumber, Select } from "antd";
import type { PropertyEditorProps } from "../types";
import { formItemStyle, labelStyle, labelColorStyle } from "../styles";

export function TextEditor({
  currentProps,
  handleChange,
}: PropertyEditorProps) {
  return (
    <div className="space-y-1">
      <div className={formItemStyle}>
        <label className={labelStyle} style={labelColorStyle}>
          文本内容
        </label>
        <Input
          value={currentProps.content || ""}
          onChange={(e) => handleChange("content", e.target.value)}
          placeholder="请输入文本内容"
          className="transition-all duration-200"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className={formItemStyle}>
          <label className={labelStyle} style={labelColorStyle}>
            字体大小 (px)
          </label>
          <InputNumber
            value={currentProps.fontSize || 14}
            onChange={(value) => handleChange("fontSize", value)}
            min={10}
            max={100}
            className="w-full transition-all duration-200"
          />
        </div>
        <div className={formItemStyle}>
          <label className={labelStyle} style={labelColorStyle}>
            行高
          </label>
          <InputNumber
            value={
              typeof currentProps.lineHeight === "number"
                ? currentProps.lineHeight
                : parseFloat(currentProps.lineHeight) || 1.5
            }
            onChange={(value) => handleChange("lineHeight", value)}
            min={0.5}
            max={5}
            step={0.1}
            className="w-full transition-all duration-200"
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
              { label: "100", value: "100" },
              { label: "200", value: "200" },
              { label: "300", value: "300" },
              { label: "400", value: "400" },
              { label: "500", value: "500" },
              { label: "600", value: "600" },
              { label: "700", value: "700" },
              { label: "800", value: "800" },
              { label: "900", value: "900" },
            ]}
          />
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
              { label: "两端对齐 (justify)", value: "justify" },
            ]}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className={formItemStyle}>
          <label className={labelStyle} style={labelColorStyle}>
            文本装饰
          </label>
          <Select
            value={currentProps.textDecoration || "none"}
            onChange={(value) => handleChange("textDecoration", value)}
            className="w-full transition-all duration-200"
            options={[
              { label: "无 (none)", value: "none" },
              { label: "下划线 (underline)", value: "underline" },
              { label: "删除线 (line-through)", value: "line-through" },
            ]}
          />
        </div>
        <div className={formItemStyle}>
          <label className={labelStyle} style={labelColorStyle}>
            字体样式
          </label>
          <Select
            value={currentProps.fontStyle || "normal"}
            onChange={(value) => handleChange("fontStyle", value)}
            className="w-full transition-all duration-200"
            options={[
              { label: "正常 (normal)", value: "normal" },
              { label: "斜体 (italic)", value: "italic" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
