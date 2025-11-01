import { Input, InputNumber, Select } from "antd";
import type { PropertyEditorProps } from "../types";
import { formItemStyle, labelStyle, labelColorStyle } from "../styles";

export function ImageEditor({
  currentProps,
  handleChange,
}: PropertyEditorProps) {
  return (
    <div className="space-y-1">
      <div className={formItemStyle}>
        <label className={labelStyle} style={labelColorStyle}>
          图片URL
        </label>
        <Input
          value={currentProps.src || ""}
          onChange={(e) => handleChange("src", e.target.value)}
          placeholder="请输入图片URL"
          className="transition-all duration-200"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className={formItemStyle}>
          <label className={labelStyle} style={labelColorStyle}>
            宽度 (px)
          </label>
          <InputNumber
            value={currentProps.width || 300}
            onChange={(value) => handleChange("width", value)}
            min={50}
            max={1000}
            className="w-full transition-all duration-200"
          />
        </div>
        <div className={formItemStyle}>
          <label className={labelStyle} style={labelColorStyle}>
            高度 (px)
          </label>
          <InputNumber
            value={currentProps.height || 200}
            onChange={(value) => handleChange("height", value)}
            min={50}
            max={1000}
            className="w-full transition-all duration-200"
          />
        </div>
      </div>
      <div className={formItemStyle}>
        <label className={labelStyle} style={labelColorStyle}>
          替代文本 (alt)
        </label>
        <Input
          value={currentProps.alt || ""}
          onChange={(e) => handleChange("alt", e.target.value)}
          placeholder="请输入替代文本"
          className="transition-all duration-200"
        />
      </div>
      <div className={formItemStyle}>
        <label className={labelStyle} style={labelColorStyle}>
          图片适应方式
        </label>
        <Select
          value={currentProps.objectFit || "cover"}
          onChange={(value) => handleChange("objectFit", value)}
          className="w-full transition-all duration-200"
          options={[
            { label: "填充 (fill)", value: "fill" },
            { label: "包含 (contain)", value: "contain" },
            { label: "覆盖 (cover)", value: "cover" },
            { label: "无 (none)", value: "none" },
            { label: "缩放 (scale-down)", value: "scale-down" },
          ]}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className={formItemStyle}>
          <label className={labelStyle} style={labelColorStyle}>
            圆角 (px)
          </label>
          <InputNumber
            value={currentProps.borderRadius || 0}
            onChange={(value) => handleChange("borderRadius", value || 0)}
            min={0}
            max={50}
            className="w-full transition-all duration-200"
          />
        </div>
        <div className={formItemStyle}>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={currentProps.shadow || false}
              onChange={(e) => handleChange("shadow", e.target.checked)}
              className="w-4 h-4 transition-all duration-200"
            />
            <span className={labelStyle} style={labelColorStyle}>
              阴影
            </span>
          </label>
        </div>
      </div>
      <div className={formItemStyle}>
        <label className={labelStyle} style={labelColorStyle}>
          边框样式
        </label>
        <Input
          value={currentProps.border || ""}
          onChange={(e) => handleChange("border", e.target.value)}
          placeholder="例如: 1px solid #ccc"
          className="transition-all duration-200"
        />
        <div
          className="text-xs mt-1"
          style={{ color: "var(--text-tertiary)" }}
        >
          格式: 宽度 样式 颜色，如 "2px solid #1890ff"
        </div>
      </div>
    </div>
  );
}

