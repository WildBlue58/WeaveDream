import { Input, InputNumber, Select } from "antd";
import type { PropertyEditorProps } from "../types";
import { formItemStyle, labelStyle, labelColorStyle } from "../styles";

export function ContainerEditor({
  currentProps,
  handleChange,
}: PropertyEditorProps) {
  return (
    <div className="space-y-1">
      <div className={formItemStyle}>
        <label className={labelStyle} style={labelColorStyle}>
          排列方向
        </label>
        <Select
          value={currentProps.flexDirection || "column"}
          onChange={(value) => handleChange("flexDirection", value)}
          className="w-full transition-all duration-200"
          options={[
            { label: "纵向（从上到下）", value: "column" },
            { label: "横向（从左到右）", value: "row" },
          ]}
        />
      </div>
      <div className={formItemStyle}>
        <label className={labelStyle} style={labelColorStyle}>
          水平对齐
        </label>
        <Select
          value={currentProps.justifyContent || "flex-start"}
          onChange={(value) => handleChange("justifyContent", value)}
          className="w-full transition-all duration-200"
          options={[
            { label: "左对齐", value: "flex-start" },
            { label: "右对齐", value: "flex-end" },
            { label: "居中", value: "center" },
            { label: "两端对齐", value: "space-between" },
            { label: "环绕", value: "space-around" },
            { label: "等距", value: "space-evenly" },
          ]}
        />
      </div>
      <div className={formItemStyle}>
        <label className={labelStyle} style={labelColorStyle}>
          垂直对齐
        </label>
        <Select
          value={currentProps.alignItems || "stretch"}
          onChange={(value) => handleChange("alignItems", value)}
          className="w-full transition-all duration-200"
          options={[
            { label: "顶部对齐", value: "flex-start" },
            { label: "底部对齐", value: "flex-end" },
            { label: "居中", value: "center" },
            { label: "拉伸", value: "stretch" },
            { label: "基线对齐", value: "baseline" },
          ]}
        />
      </div>
      <div className={formItemStyle}>
        <label className={labelStyle} style={labelColorStyle}>
          间距 (px)
        </label>
        <InputNumber
          value={currentProps.gap || 0}
          onChange={(value) => handleChange("gap", value || 0)}
          min={0}
          max={100}
          className="w-full transition-all duration-200"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className={formItemStyle}>
          <label className={labelStyle} style={labelColorStyle}>
            内边距 (px)
          </label>
          <InputNumber
            value={
              currentProps.padding !== undefined ? currentProps.padding : 16
            }
            onChange={(value) => handleChange("padding", value || 0)}
            min={0}
            max={100}
            className="w-full transition-all duration-200"
          />
        </div>
        <div className={formItemStyle}>
          <label className={labelStyle} style={labelColorStyle}>
            外边距 (px)
          </label>
          <InputNumber
            value={currentProps.margin || 0}
            onChange={(value) => handleChange("margin", value || 0)}
            min={0}
            max={100}
            className="w-full transition-all duration-200"
          />
        </div>
      </div>
      <div className={formItemStyle}>
        <label className={labelStyle} style={labelColorStyle}>
          背景颜色
        </label>
        <Input
          type="color"
          value={currentProps.backgroundColor || "#ffffff"}
          onChange={(e) => handleChange("backgroundColor", e.target.value)}
          className="w-full h-10 rounded-md transition-all duration-200"
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className={formItemStyle}>
          <label className={labelStyle} style={labelColorStyle}>
            圆角 (px)
          </label>
          <InputNumber
            value={
              currentProps.borderRadius !== undefined
                ? currentProps.borderRadius
                : 8
            }
            onChange={(value) => handleChange("borderRadius", value || 0)}
            min={0}
            max={50}
            className="w-full transition-all duration-200"
          />
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
        </div>
      </div>
      {currentProps.border && (
        <div
          className="text-xs mt-1"
          style={{ color: "var(--text-tertiary)" }}
        >
          格式: 宽度 样式 颜色，如 "2px solid #1890ff"
        </div>
      )}
    </div>
  );
}

