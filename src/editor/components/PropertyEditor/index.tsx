import { useComponentsStore } from "../../stores/components";
import { useComponentConfigStore } from "../../stores/component-config";
import type { Component } from "../../stores/components";
import { getEditor } from "./editorRegistry";

interface PropertyEditorProps {
  component: Component;
}

export function PropertyEditor({ component }: PropertyEditorProps) {
  const { updateComponentProps } = useComponentsStore();
  const { componentConfig } = useComponentConfigStore();
  const config = componentConfig[component.name];
  const defaultProps = config?.defaultProps || {};
  const currentProps = { ...defaultProps, ...component.props };

  const handleChange = (field: string, value: any) => {
    updateComponentProps(component.id, { [field]: value });
  };

  // 获取对应的编辑器组件
  const EditorComponent = getEditor(component.name);

  if (EditorComponent) {
    return (
      <EditorComponent
        component={component}
        currentProps={currentProps}
        handleChange={handleChange}
      />
    );
  }

  // 默认显示 JSON 编辑器
  return (
    <div>
      <div className="text-sm text-gray-500 mb-2">组件属性</div>
      <pre className="text-xs bg-gray-50 p-3 rounded border border-gray-200 overflow-auto">
        {JSON.stringify(currentProps, null, 2)}
      </pre>
    </div>
  );
}
