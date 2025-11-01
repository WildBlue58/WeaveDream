## Why

当前编辑器的样式较为基础，缺乏现代化的视觉设计和流畅的用户体验。需要进行全面的样式优化，提升专业性和用户满意度。

## What Changes

- 升级设计系统：现代化配色方案、统一的间距和圆角系统、丰富的阴影层次
- 优化所有组件视觉样式：Header、Material、EditArea、Setting、ComponentToolbar、Preview
- 添加流畅的动画和过渡效果，提升交互体验
- 统一视觉语言，确保各组件风格一致
- 改进可访问性和响应式设计

## Impact

- **受影响的功能模块**：所有 UI 组件和样式系统
- **受影响的文件**：
  - `src/index.css` - 全局样式和设计系统
  - `src/editor/components/Header/index.tsx` - 顶部导航栏
  - `src/editor/components/Material/index.tsx` - 组件库侧边栏
  - `src/editor/components/MaterialItem/index.tsx` - 组件卡片
  - `src/editor/components/EditArea/index.tsx` - 画布区域
  - `src/editor/components/Setting/index.tsx` - 属性面板
  - `src/editor/components/PropertyEditor/index.tsx` - 属性编辑器
  - `src/editor/components/ComponentToolbar/index.tsx` - 工具栏
  - `src/editor/components/Preview/index.tsx` - 预览模态框
  - 所有 Material 组件文件
