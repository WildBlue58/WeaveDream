# PropertyEditor 组件结构说明

> 📖 详细文档请参考：[组件文档](../../../../../docs/components/PropertyEditor.md)

## 目录结构

```text
PropertyEditor/
├── index.tsx              # 主入口，负责路由到具体编辑器
├── editorRegistry.tsx      # 编辑器组件注册表
├── types.ts               # 类型定义
├── styles.ts              # 通用样式常量
└── editors/               # 各组件属性编辑器
    ├── index.ts           # 统一导出
    ├── TextEditor.tsx
    ├── InputEditor.tsx
    ├── ImageEditor.tsx
    ├── ButtonEditor.tsx
    ├── TitleEditor.tsx
    ├── CardEditor.tsx
    ├── ContainerEditor.tsx
    ├── PageEditor.tsx
    └── DividerEditor.tsx
```

## 设计理念

- **单一职责**：每个编辑器组件只负责一个组件类型的属性编辑
- **可扩展性**：新增组件编辑器只需在 `editors/` 目录下添加新文件并在 `editorRegistry.tsx` 中注册
- **类型安全**：通过 TypeScript 类型定义确保编辑器接口一致性

## 使用方式

主 `PropertyEditor` 组件会自动根据传入的组件类型选择对应的编辑器。如需添加新组件编辑器：

1. 在 `editors/` 目录创建新编辑器组件
2. 在 `editorRegistry.tsx` 中注册
3. 在 `editors/index.ts` 中导出
