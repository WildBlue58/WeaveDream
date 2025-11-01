import { useEffect, useState, useRef } from "react";
import { getComponentById } from "../../../stores/components";
import type { Component } from "../../../stores/components";

interface ToolbarPosition {
  top: number;
  left: number;
}

interface UseToolbarPositionProps {
  selectedComponentId: number | null;
  components: Component[];
}

/**
 * 计算工具栏位置的 Hook
 */
export function useToolbarPosition({
  selectedComponentId,
  components,
}: UseToolbarPositionProps) {
  const [toolbarPosition, setToolbarPosition] =
    useState<ToolbarPosition | null>(null);
  const componentRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  useEffect(() => {
    if (!selectedComponentId) {
      setToolbarPosition(null);
      return;
    }

    const selectedComponent = getComponentById(selectedComponentId, components);
    if (!selectedComponent || selectedComponent.name === "Page") {
      setToolbarPosition(null);
      return;
    }

    const element = componentRefs.current.get(selectedComponentId);
    if (!element) {
      setToolbarPosition(null);
      return;
    }

    const rect = element.getBoundingClientRect();
    const canvasElement = element.closest(
      ".relative.min-h-full"
    ) as HTMLElement;

    if (canvasElement) {
      const canvasRect = canvasElement.getBoundingClientRect();

      // 计算组件相对于画布的顶部位置
      const componentTop = rect.top - canvasRect.top;

      // 工具栏高度约 40px，间距 5px
      const toolbarHeight = 45;
      const toolbarWidth = 200; // 工具栏宽度约200px

      // 判断是否在顶部（距离顶部小于 80px 时，工具栏显示在下方）
      const showBelow = componentTop < 80;

      // 计算垂直位置
      let top: number;
      if (showBelow) {
        // 显示在组件下方
        top = componentTop + rect.height + 5;
      } else {
        // 显示在组件上方
        top = componentTop - toolbarHeight;
      }

      // 计算水平位置（居中显示）
      let left =
        rect.left - canvasRect.left + rect.width / 2 - toolbarWidth / 2;

      // 边界检测：确保工具栏不超出画布
      const minLeft = 0;
      const maxLeft = canvasRect.width - toolbarWidth;
      left = Math.max(minLeft, Math.min(left, maxLeft));

      // 检查垂直边界
      const minTop = 0;
      const maxTop = canvasRect.height - toolbarHeight;
      if (top < minTop) {
        // 如果上方空间不足，强制显示在下方
        top = componentTop + rect.height + 5;
      }
      if (top > maxTop) {
        // 如果下方空间不足，强制显示在上方
        top = componentTop - toolbarHeight;
        // 如果上方也超出，至少保证顶部可见
        if (top < 0) {
          top = 5;
        }
      }

      setToolbarPosition({
        top,
        left,
      });
    }
  }, [selectedComponentId, components]);

  return { toolbarPosition, componentRefs };
}
