## MODIFIED Requirements

### Requirement: 编辑器视觉设计系统
编辑器 SHALL 采用现代化的设计系统，包括统一的颜色、间距、圆角、阴影和动画系统，确保所有组件具有一致的视觉语言和流畅的用户体验。

#### Scenario: 设计系统颜色和变量
- **WHEN** 编辑器渲染任何 UI 组件
- **THEN** 组件使用 CSS 变量系统定义的颜色（主色调、辅助色、语义色）
- **THEN** 组件使用统一的间距系统（基于 4px 基础单位）
- **THEN** 组件使用统一的圆角系统（sm/md/lg/xl 尺寸）
- **THEN** 组件使用统一的阴影系统（xs/sm/md/lg/xl 层次）

#### Scenario: 动画和过渡效果
- **WHEN** 用户与编辑器组件交互（hover、click、focus）
- **THEN** 所有交互具有流畅的过渡动画（200ms/300ms 时长）
- **THEN** 使用统一的缓动函数（ease-out/ease-in-out）
- **THEN** 工具栏和模态框具有出现/消失动画效果

#### Scenario: Header 组件视觉优化
- **WHEN** 用户查看顶部导航栏
- **THEN** Logo 区域具有现代化的渐变背景和阴影
- **THEN** 工具栏按钮具有清晰的分组和间距
- **THEN** 按钮具有 hover/active 状态的视觉反馈
- **THEN** 禁用状态的按钮具有适当的视觉样式

#### Scenario: Material 组件库视觉优化
- **WHEN** 用户查看左侧组件库
- **THEN** 标题栏具有统一的背景和阴影样式
- **THEN** 分类标签使用醒目的字体和颜色
- **THEN** 组件卡片具有现代化的阴影和边框样式
- **THEN** 拖拽时组件具有清晰的视觉反馈（颜色变化、阴影效果）

#### Scenario: EditArea 画布视觉优化
- **WHEN** 用户查看画布区域
- **THEN** 画布背景具有优雅的网格图案
- **THEN** 选中的组件具有醒目的边框和阴影反馈
- **THEN** 空状态具有吸引人的图标和引导文案
- **THEN** 画布容器具有现代化的圆角和阴影

#### Scenario: Setting 属性面板视觉优化
- **WHEN** 用户查看右侧属性面板
- **THEN** 标题栏与组件库保持一致的设计语言
- **THEN** 空状态具有清晰的图标和引导信息
- **THEN** 选中组件信息卡片使用现代化的样式
- **THEN** 表单项具有清晰的视觉层次和间距

#### Scenario: ComponentToolbar 工具栏视觉优化
- **WHEN** 用户选中组件时工具栏出现
- **THEN** 工具栏具有毛玻璃效果（backdrop-filter）
- **THEN** 工具栏具有出现动画（scale-in）
- **THEN** 按钮具有 hover 时的缩放效果
- **THEN** 工具栏按钮具有清晰的图标和间距

#### Scenario: Preview 预览模态框视觉优化
- **WHEN** 用户打开预览模态框
- **THEN** 模态框具有现代化的圆角和阴影
- **THEN** 模态框具有更大的尺寸（95vw）
- **THEN** 预览容器使用统一的背景色

#### Scenario: Material 组件视觉统一
- **WHEN** 用户查看画布中的 Material 组件
- **THEN** Container 组件根据嵌套深度具有不同的视觉层次
- **THEN** Page 组件具有优化的空状态设计
- **THEN** 所有 Material 组件使用统一的设计变量和样式

#### Scenario: 滚动条和细节优化
- **WHEN** 用户滚动可滚动区域
- **THEN** 滚动条具有现代化的样式（圆角、颜色、hover 效果）
- **THEN** 所有可交互元素具有清晰的焦点状态
- **THEN** 颜色对比度符合可访问性标准

