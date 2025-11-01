## Why

当前编辑器存在以下问题：

1. 删除和清空功能重复，用户可以通过撤销/重做功能实现相同效果
2. Container 组件嵌套时视觉分层不明显，影响用户体验
3. 缺少统一的组件操作工具栏，用户操作不够便捷

## What Changes

- **移除独立删除和清空功能**：删除 Setting 面板的删除按钮、Header 的清空按钮，以及 Delete 键快捷键，改为通过撤销/重做实现
- **优化 Container 分层显示**：根据嵌套深度动态调整阴影和边框样式，使层级关系更清晰
- **创建组件操作工具栏**：在选中组件时显示浮动工具栏，提供删除、复制、上移、下移功能
- **实现组件移动功能**：在 store 中添加 moveComponentUp 和 moveComponentDown 函数，支持调整组件顺序

## Impact

- **受影响的功能模块**：组件编辑功能
- **受影响的文件**：
  - `src/editor/components/Setting/index.tsx` - 移除删除按钮
  - `src/editor/components/Header/index.tsx` - 移除清空按钮
  - `src/editor/components/EditArea/index.tsx` - 移除删除快捷键，集成工具栏
  - `src/editor/materials/Container/index.tsx` - 优化分层显示
  - `src/editor/stores/components.tsx` - 添加组件移动函数
  - `src/editor/components/ComponentToolbar/index.tsx` - 新建工具栏组件
