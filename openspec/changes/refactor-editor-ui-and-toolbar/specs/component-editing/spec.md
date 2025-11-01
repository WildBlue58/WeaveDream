## REMOVED Requirements

### Requirement: 独立删除功能入口

**Reason**: 与撤销/重做功能重复，用户可以通过撤销操作实现删除效果，简化界面
**Migration**: 用户应使用撤销/重做功能或组件操作工具栏来管理组件

#### Scenario: 删除功能入口移除

- **WHEN** 用户在属性配置面板查看组件
- **THEN** 不再显示删除按钮
- **WHEN** 用户在编辑区域选中组件后按下 Delete 键
- **THEN** 不触发删除操作

### Requirement: 清空画布功能

**Reason**: 与撤销/重做功能重复，用户可以通过撤销操作清空画布，简化界面
**Migration**: 用户应使用撤销功能来清空画布，或手动删除所有组件

#### Scenario: 清空功能移除

- **WHEN** 用户查看 Header 工具栏
- **THEN** 不再显示清空按钮

## MODIFIED Requirements

### Requirement: Container 组件视觉分层

Container 组件 SHALL 根据嵌套深度显示不同的视觉样式，使层级关系清晰可见。

#### Scenario: 浅层 Container 显示

- **WHEN** Container 组件位于第一层（直接子组件）
- **THEN** 显示轻微的阴影和标准边框样式

#### Scenario: 深层 Container 显示

- **WHEN** Container 组件位于第二层或更深
- **THEN** 显示更强的阴影效果，阴影深度随层级递增

#### Scenario: 分层视觉区分

- **WHEN** 多个 Container 嵌套显示
- **THEN** 用户能够通过视觉差异清晰区分不同层级

## ADDED Requirements

### Requirement: 组件操作工具栏

编辑器 SHALL 在组件被选中时显示浮动工具栏，提供快速操作入口。

#### Scenario: 工具栏显示

- **WHEN** 用户点击选中一个组件（Page 组件除外）
- **THEN** 在组件附近显示浮动工具栏
- **THEN** 工具栏包含删除、复制、上移、下移按钮

#### Scenario: 工具栏隐藏

- **WHEN** 用户取消选中组件（点击空白区域或按 ESC 键）
- **THEN** 工具栏自动隐藏

#### Scenario: 工具栏定位

- **WHEN** 组件被选中
- **THEN** 工具栏显示在组件上方或下方合适位置
- **THEN** 工具栏不超出视窗边界

### Requirement: 组件顺序调整

编辑器 SHALL 支持调整同级组件在父组件中的显示顺序。

#### Scenario: 组件上移

- **WHEN** 用户点击工具栏的上移按钮
- **THEN** 组件在父组件的 children 数组中向前移动一位
- **THEN** 组件在画布上的显示顺序相应调整
- **THEN** 操作保存到历史记录，支持撤销

#### Scenario: 组件下移

- **WHEN** 用户点击工具栏的下移按钮
- **THEN** 组件在父组件的 children 数组中向后移动一位
- **THEN** 组件在画布上的显示顺序相应调整
- **THEN** 操作保存到历史记录，支持撤销

#### Scenario: 边界处理

- **WHEN** 组件已是父组件中第一个元素，用户点击上移
- **THEN** 按钮禁用或提示已到顶部
- **WHEN** 组件已是父组件中最后一个元素，用户点击下移
- **THEN** 按钮禁用或提示已到底部
