# 代码规范

## 文件组织

### 文件大小限制

- 单个文件建议不超过 **300 行**
- 组件文件建议不超过 **200 行**
- 复杂逻辑应拆分为多个文件或 Hook

### 目录结构

- `components/` - UI 组件
- `hooks/` - 自定义 Hooks
- `utils/` - 工具函数
- `stores/` - 状态管理
- `types.ts` - 类型定义

## 命名规范

### 文件和目录

- 组件目录使用 PascalCase: `PropertyEditor/`
- 工具文件使用 camelCase: `useKeyboardShortcuts.ts`
- 类型文件使用 camelCase: `types.ts`

### 组件和函数

- React 组件使用 PascalCase: `PropertyEditor`
- Hook 以 `use` 开头: `useKeyboardShortcuts`
- 工具函数使用 camelCase: `getComponentById`

## 代码风格

### TypeScript

- 使用明确的类型定义
- 避免使用 `any`，优先使用具体类型或 `unknown`
- 导出类型使用 `export type`

### React

- 使用函数组件和 Hooks
- 提取重复逻辑到自定义 Hooks
- 保持组件单一职责

### 导入顺序

1. React 相关
2. 第三方库
3. 内部工具和类型
4. 相对路径导入

## 文档注释

- 公共 API 必须有 JSDoc 注释
- 复杂逻辑需要注释说明
- 使用简体中文编写注释和文档
