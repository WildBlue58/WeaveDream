import { useState } from "react";
import { Button, message } from "antd";
import {
  SaveOutlined,
  EyeOutlined,
  UndoOutlined,
  RedoOutlined,
} from "@ant-design/icons";
import { useComponentsStore } from "../../stores/components";
import { Preview } from "../Preview";

export function Header() {
  const { components, undo, redo, history, historyIndex } =
    useComponentsStore();
  const [previewOpen, setPreviewOpen] = useState(false);

  const canUndo = historyIndex > 0;
  const canRedo = historyIndex < history.length - 1;

  const handleSave = () => {
    try {
      const jsonData = JSON.stringify(components, null, 2);
      const blob = new Blob([jsonData], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      const timestamp = new Date()
        .toISOString()
        .replace(/[:.]/g, "-")
        .slice(0, -5);
      link.download = `weavedream-editor-${timestamp}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      message.success("保存成功！");
    } catch (error) {
      message.error("保存失败，请重试");
      console.error("Save error:", error);
    }
  };

  const handlePreview = () => {
    setPreviewOpen(true);
  };

  return (
    <div
      className="h-[64px] flex items-center justify-between px-6 border-b transition-all duration-200"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderColor: "var(--border-color-light)",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      {/* Logo 和标题 */}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 hover-lift"
          style={{
            background: "var(--gradient-primary)",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          <span className="text-xl font-bold" style={{ color: "#667EEA" }}>
            织
          </span>
        </div>
        <h1
          className="text-xl font-bold transition-colors duration-200"
          style={{ color: "var(--text-primary)" }}
        >
          织梦
        </h1>
      </div>

      {/* 工具栏 */}
      <div className="flex items-center gap-2">
        {/* 历史操作组 */}
        <div className="flex items-center gap-2 px-2 py-1 rounded-lg transition-all duration-200 hover:bg-gray-50">
          <Button
            type="default"
            icon={<UndoOutlined />}
            onClick={undo}
            disabled={!canUndo}
            title="撤销 (Ctrl+Z)"
            className="transition-all duration-200"
            style={{
              borderColor: canUndo
                ? "var(--border-color)"
                : "var(--border-color-light)",
            }}
          >
            撤销
          </Button>
          <Button
            type="default"
            icon={<RedoOutlined />}
            onClick={redo}
            disabled={!canRedo}
            title="重做 (Ctrl+Y)"
            className="transition-all duration-200"
            style={{
              borderColor: canRedo
                ? "var(--border-color)"
                : "var(--border-color-light)",
            }}
          >
            重做
          </Button>
        </div>

        {/* 分隔线 */}
        <div
          className="w-px h-8 mx-2 transition-colors duration-200"
          style={{ backgroundColor: "var(--border-color-light)" }}
        />

        {/* 操作按钮组 */}
        <div className="flex items-center gap-2">
          <Button
            type="primary"
            icon={<SaveOutlined />}
            onClick={handleSave}
            className="transition-all duration-200 hover-lift"
          >
            保存
          </Button>
          <Button
            type="default"
            icon={<EyeOutlined />}
            onClick={handlePreview}
            className="transition-all duration-200 hover-lift"
          >
            预览
          </Button>
        </div>
      </div>
      <Preview open={previewOpen} onClose={() => setPreviewOpen(false)} />
    </div>
  );
}
