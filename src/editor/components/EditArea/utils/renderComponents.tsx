import React from "react";
import type { Component } from "../../../stores/components";
import type { ComponentConfig } from "../../../stores/component-config";

interface RenderComponentsProps {
  components: Component[];
  componentConfig: Record<string, ComponentConfig>;
  selectedComponentId: number | null;
  parentDepth?: number;
  componentRefs: React.MutableRefObject<Map<number, HTMLDivElement>>;
  onSelectComponent: (id: number) => void;
}

/**
 * 递归渲染组件树
 */
export function renderComponents({
  components,
  componentConfig,
  selectedComponentId,
  parentDepth = 0,
  componentRefs,
  onSelectComponent,
}: RenderComponentsProps): React.ReactNode {
  return components.map((component: Component) => {
    const config = componentConfig?.[component.name];
    if (!config?.component) {
      return null;
    }
    const isSelected = selectedComponentId === component.id;
    // 计算当前组件的深度（Page 组件深度为 0）
    const currentDepth = component.name === "Page" ? 0 : parentDepth + 1;

    return (
      <div
        key={component.id}
        ref={(el) => {
          if (el) {
            componentRefs.current.set(component.id, el);
          } else {
            componentRefs.current.delete(component.id);
          }
        }}
        onClick={(e) => {
          e.stopPropagation();
          onSelectComponent(component.id);
        }}
        className={`
          transition-all duration-200
          ${isSelected ? "ring-2 ring-offset-2 ring-blue-500" : ""}
          ${component.name !== "Page" ? "cursor-pointer hover:opacity-90" : ""}
          inline-block
          ${component.name === "Page" ? "w-full" : ""}
        `}
        style={
          isSelected
            ? ({
                boxShadow: "var(--shadow-primary)",
              } as React.CSSProperties)
            : {}
        }
      >
        {React.createElement(
          config.component,
          {
            id: component.id,
            depth: currentDepth,
            ...config.defaultProps,
            ...component.props,
          },
          renderComponents({
            components: component.children || [],
            componentConfig,
            selectedComponentId,
            parentDepth: currentDepth,
            componentRefs,
            onSelectComponent,
          })
        )}
      </div>
    );
  });
}
