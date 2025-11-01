import { useEffect } from "react";

interface UseKeyboardShortcutsProps {
  selectedComponentId: number | null;
  undo: () => void;
  redo: () => void;
  copyComponent: (id: number) => void;
  pasteComponent: (parentId?: number) => void;
  selectComponent: (id: number | null) => void;
}

/**
 * 键盘快捷键处理 Hook
 */
export function useKeyboardShortcuts({
  selectedComponentId,
  undo,
  redo,
  copyComponent,
  pasteComponent,
  selectComponent,
}: UseKeyboardShortcutsProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 检查是否在可编辑元素中（input、textarea、contenteditable）
      const target = e.target as HTMLElement;
      const isEditableElement =
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("[contenteditable='true']");

      // Ctrl+Z 撤销（不在输入框中时才执行）
      if (e.ctrlKey && e.key === "z" && !e.shiftKey) {
        if (!isEditableElement) {
          e.preventDefault();
          undo();
        }
        return;
      }

      // Ctrl+Y 或 Ctrl+Shift+Z 重做（不在输入框中时才执行）
      if (
        (e.ctrlKey && e.key === "y") ||
        (e.ctrlKey && e.shiftKey && e.key === "z")
      ) {
        if (!isEditableElement) {
          e.preventDefault();
          redo();
        }
        return;
      }

      // Ctrl+C 复制（不在输入框中时才执行）
      if (e.ctrlKey && e.key === "c") {
        if (!isEditableElement && selectedComponentId) {
          e.preventDefault();
          copyComponent(selectedComponentId);
        }
        return;
      }

      // Ctrl+V 粘贴
      if (e.ctrlKey && e.key === "v") {
        // 如果 focus 在输入框中，允许默认粘贴行为
        if (isEditableElement) {
          return; // 不阻止默认粘贴行为
        }
        // 否则执行组件粘贴
        e.preventDefault();
        pasteComponent(selectedComponentId || undefined);
        return;
      }

      // ESC 键取消选中
      if (e.key === "Escape") {
        selectComponent(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    selectedComponentId,
    selectComponent,
    undo,
    redo,
    copyComponent,
    pasteComponent,
  ]);
}
