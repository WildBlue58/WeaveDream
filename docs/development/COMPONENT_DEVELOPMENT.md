# 组件开发指南

## 添加新组件

### 1. 创建物料组件

在 `src/editor/materials/` 目录下创建新组件：

```typescript
// src/editor/materials/MyComponent/index.tsx
import type { CommonComponentProps } from "../../interface";

export interface MyComponentProps {
  // 组件属性定义
}

const MyComponent = ({
  // props
  id: _id,
  name: _name,
}: MyComponentProps & CommonComponentProps) => {
  return <div>My Component</div>;
};

export default MyComponent;
```

### 2. 注册组件配置

在 `src/editor/stores/component-config.tsx` 中注册：

```typescript
MyComponent: {
  name: "MyComponent",
  defaultProps: {
    // 默认属性
  },
  component: MyComponent,
},
```

### 3. 创建属性编辑器

在 `src/editor/components/PropertyEditor/editors/` 创建编辑器：

```typescript
// MyComponentEditor.tsx
import type { PropertyEditorProps } from "../types";
import { formItemStyle, labelStyle, labelColorStyle } from "../styles";

export function MyComponentEditor({
  currentProps,
  handleChange,
}: PropertyEditorProps) {
  return (
    <div className="space-y-1">
      {/* 属性编辑表单 */}
    </div>
  );
}
```

### 4. 注册编辑器

在 `src/editor/components/PropertyEditor/editorRegistry.tsx` 中注册：

```typescript
import { MyComponentEditor } from "./editors";

const editorMap: Record<string, EditorComponent> = {
  // ...
  MyComponent: MyComponentEditor,
};
```

### 5. 添加到组件库

在 `src/editor/components/Material/index.tsx` 中添加组件项。

## 组件设计原则

1. **单一职责**：每个组件只负责一个功能
2. **可复用性**：组件应该是可配置和可复用的
3. **类型安全**：使用 TypeScript 确保类型安全
4. **可访问性**：考虑无障碍访问需求

## 最佳实践

- 组件属性应该有合理的默认值
- 使用 CSS 变量保持样式一致性
- 支持拖拽的子组件需要使用 `useMaterialDrop` Hook
- 复杂的样式逻辑应该提取到独立的样式文件
