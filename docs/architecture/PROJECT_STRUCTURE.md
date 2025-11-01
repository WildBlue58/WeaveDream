# 项目结构说明

## 目录结构

```
src/
├── editor/                          # 编辑器核心模块
│   ├── components/                  # UI 组件
│   │   ├── ComponentToolbar/       # 组件操作工具栏
│   │   ├── EditArea/                # 画布编辑区域
│   │   │   ├── hooks/               # 自定义 Hooks
│   │   │   │   ├── useKeyboardShortcuts.ts   # 键盘快捷键处理
│   │   │   │   └── useToolbarPosition.ts      # 工具栏位置计算
│   │   │   ├── utils/               # 工具函数
│   │   │   │   └── renderComponents.tsx       # 组件渲染逻辑
│   │   │   ├── components/          # 子组件
│   │   │   │   └── EmptyCanvas.tsx  # 空画布提示
│   │   │   └── index.tsx            # 主组件
│   │   ├── Header/                  # 顶部工具栏
│   │   ├── Material/                # 组件库面板
│   │   ├── MaterialItem/            # 组件库项
│   │   ├── Preview/                 # 预览组件
│   │   ├── PropertyEditor/          # 属性编辑器
│   │   │   ├── editors/             # 各组件属性编辑器
│   │   │   │   ├── TextEditor.tsx
│   │   │   │   ├── InputEditor.tsx
│   │   │   │   ├── ImageEditor.tsx
│   │   │   │   ├── ButtonEditor.tsx
│   │   │   │   ├── TitleEditor.tsx
│   │   │   │   ├── CardEditor.tsx
│   │   │   │   ├── ContainerEditor.tsx
│   │   │   │   ├── PageEditor.tsx
│   │   │   │   ├── DividerEditor.tsx
│   │   │   │   └── index.ts         # 统一导出
│   │   │   ├── editorRegistry.tsx   # 编辑器注册表
│   │   │   ├── types.ts              # 类型定义
│   │   │   ├── styles.ts             # 样式常量
│   │   │   └── index.tsx             # 主组件
│   │   └── Setting/                 # 设置面板
│   ├── hooks/                        # 全局 Hooks
│   │   └── useMaterialDrop.ts       # 拖拽处理
│   ├── materials/                    # 物料组件
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Container/
│   │   ├── Divider/
│   │   ├── Image/
│   │   ├── Input/
│   │   ├── Page/
│   │   ├── Text/
│   │   └── Title/
│   ├── stores/                       # 状态管理
│   │   ├── components.tsx            # 组件树状态管理
│   │   ├── component-config.tsx     # 组件配置注册
│   │   └── utils.ts                  # 工具函数
│   ├── interface.ts                    # 类型定义
│   └── index.tsx                     # 编辑器入口
├── assets/                            # 静态资源
├── App.tsx                            # 应用入口
├── main.tsx                           # 主入口
└── index.css                          # 全局样式
```

## 重构说明

### 1. PropertyEditor 重构 (1036行 → ~50行主文件)

**原问题**：

- 单一文件包含所有组件编辑器，超过 1000 行
- 难以维护和扩展

**重构方案**：

- 拆分为独立的编辑器组件（每个约 100-150 行）
- 提取通用样式和类型定义
- 使用注册表模式管理编辑器映射

**文件结构**：

- `index.tsx`: 主入口，负责路由（~50 行）
- `editorRegistry.tsx`: 编辑器注册表（~30 行）
- `editors/`: 各组件编辑器（每个 ~100-150 行）
- `styles.ts`: 通用样式常量（~5 行）
- `types.ts`: 类型定义（~8 行）

### 2. components.tsx 优化

**优化内容**：

- 提取工具函数到 `stores/utils.ts`
- 保持向后兼容的导出
- 减少主文件复杂度

### 3. EditArea 优化 (325行 → ~80行主文件)

**优化内容**：

- 提取键盘快捷键逻辑到 `hooks/useKeyboardShortcuts.ts`
- 提取工具栏位置计算到 `hooks/useToolbarPosition.ts`
- 提取组件渲染逻辑到 `utils/renderComponents.tsx`
- 提取空画布组件到 `components/EmptyCanvas.tsx`

## 设计原则

1. **单一职责原则**：每个文件只负责一个功能
2. **可扩展性**：新组件编辑器易于添加
3. **可维护性**：代码结构清晰，易于理解和修改
4. **类型安全**：完整的 TypeScript 类型定义

## 文件行数限制

- 单个文件建议不超过 300 行
- 组件文件建议不超过 200 行
- 复杂逻辑拆分为多个文件或 Hook

## 下一步优化建议

1. 考虑将 `components.tsx` 进一步拆分（历史管理、复制粘贴等功能可独立）
2. 考虑提取通用表单组件（减少编辑器代码重复）
3. 考虑使用 Context API 优化组件配置传递
