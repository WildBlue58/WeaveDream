## Why

当前各组件的属性配置不够完善，缺乏常用的样式和功能属性。需要为每个组件添加更丰富的属性配置，提升编辑器的实用性和灵活性。

## What Changes

- 为 Text 组件添加：字体粗细、文本对齐、行高、文本装饰、字体样式
- 为 Input 组件添加：输入类型、最大长度、清除按钮、前缀后缀
- 为 Image 组件添加：图片适应方式、圆角、边框、阴影
- 为 Card 组件添加：边框显示、悬停效果、尺寸、额外操作区
- 为 Title 组件添加：文本对齐、颜色、字体粗细、省略号
- 为 Container 组件添加：内边距、外边距、背景色、边框、圆角
- 为 Page 组件添加：内边距、外边距、背景色、最小高度
- 为 Divider 组件优化属性编辑器，完善文本编辑

## Impact

- **受影响的功能模块**：所有 Material 组件和属性编辑器
- **受影响的文件**：
  - `src/editor/materials/Text/index.tsx` - Text 组件实现
  - `src/editor/materials/Input/index.tsx` - Input 组件实现
  - `src/editor/materials/Image/index.tsx` - Image 组件实现
  - `src/editor/materials/Card/index.tsx` - Card 组件实现
  - `src/editor/materials/Title/index.tsx` - Title 组件实现
  - `src/editor/materials/Container/index.tsx` - Container 组件实现
  - `src/editor/materials/Page/index.tsx` - Page 组件实现
  - `src/editor/materials/Divider/index.tsx` - Divider 组件实现
  - `src/editor/stores/component-config.tsx` - 组件配置和默认属性
  - `src/editor/components/PropertyEditor/index.tsx` - 属性编辑器
