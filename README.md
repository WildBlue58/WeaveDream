# 🎨 织梦 (WeaveDream)

> 一个可视化低代码页面构建工具，支持拖拽式组件编排、实时属性配置和 JSON 数据驱动渲染。

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?logo=vite)](https://vitejs.dev/)
[![Zustand](https://img.shields.io/badge/Zustand-5.0.8-FF6B6B)](https://zustand-demo.pmnd.rs/)
[![在线演示](https://img.shields.io/badge/在线演示-WeaveDream-00D4AA?logo=vercel)](https://weave-dream.vercel.app/)

🌐 **在线演示**: [https://weave-dream.vercel.app/](https://weave-dream.vercel.app/)

## 📋 项目简介

织梦（WeaveDream）是一个企业级可视化低代码编辑器，允许用户通过直观的拖拽界面快速构建页面结构。编辑器采用 JSON 数据驱动架构，支持组件树管理、实时预览、历史记录等核心功能，适用于快速原型开发、页面配置化生成等场景。如同编织梦想，让创意在画布上自由绽放。

### 核心价值

- 🚀 **提升开发效率**：通过可视化编辑替代传统手写代码，大幅缩短页面开发周期
- 📦 **JSON 数据驱动**：编辑结果导出为标准 JSON 格式，易于存储、传输和渲染
- 🔧 **高度可扩展**：基于注册表模式的插件化架构，支持轻松扩展组件和功能
- 💎 **类型安全**：完整的 TypeScript 类型系统，保障开发体验和代码质量

## ✨ 核心功能

### 1. 可视化拖拽编辑

- 支持从组件库拖拽组件到画布
- 实时可视化反馈，所见即所得
- 支持嵌套组件结构，灵活构建复杂页面

### 2. 实时属性配置

- 选中组件后实时编辑属性
- 9 种基础组件类型，每种都有专属属性编辑器
- 属性变更即时生效，无需手动刷新

### 3. 组件树管理

- 可视化组件树结构
- 支持组件选择、删除、移动操作
- 智能工具栏定位，提供快捷操作入口

### 4. 撤销/重做历史

- 完整的历史记录管理（最多 50 步）
- 支持撤销/重做操作，快速回退错误编辑
- 键盘快捷键支持（Ctrl+Z / Ctrl+Y）

### 5. 复制/粘贴功能

- 支持组件及其子树的复制粘贴
- 智能 ID 生成，确保数据结构完整性
- 键盘快捷键支持（Ctrl+C / Ctrl+V）

### 6. 实时预览

- 一键预览最终渲染效果
- 模态窗口展示，不影响编辑流程
- 基于实际组件树数据渲染

### 7. JSON 数据导出

- 一键导出完整的组件树 JSON 数据
- 标准格式，易于集成到后端系统
- 自动生成带时间戳的文件名

### 8. 键盘快捷键

- `Ctrl+Z` / `Ctrl+Y`：撤销/重做
- `Ctrl+C` / `Ctrl+V`：复制/粘贴组件
- `Delete`：删除选中组件

## 🏗️ 技术架构

### 技术栈

| 分类 | 技术 | 版本 | 用途 |
|------|------|------|------|
| **前端框架** | React | 19.1.1 | UI 框架 |
| **类型系统** | TypeScript | 5.8.3 | 类型安全 |
| **构建工具** | Vite | 7.1.2 | 构建和开发服务器 |
| **样式方案** | TailwindCSS | 4.1.13 | 原子化 CSS 框架 |
| **状态管理** | Zustand | 5.0.8 | 轻量级状态管理 |
| **拖拽功能** | React DnD | 16.0.1 | 拖拽交互实现 |
| **布局组件** | Allotment | 1.20.4 | 可调整大小的分栏布局 |
| **UI 组件** | Ant Design | 5.27.3 | 企业级 UI 组件库 |

### 架构设计

```text
┌─────────────────────────────────────────────────────────────┐
│                        应用层 (App)                          │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │  Header  │  │ Material │  │ EditArea │  │ Setting  │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
├─────────────────────────────────────────────────────────────┤
│                     状态管理层 (Store)                        │
│  ┌────────────────────┐  ┌────────────────────┐            │
│  │  components.tsx    │  │ component-config   │            │
│  │  (组件树状态)       │  │ (组件配置注册)      │            │
│  └────────────────────┘  └────────────────────┘            │
├─────────────────────────────────────────────────────────────┤
│                     物料组件层 (Materials)                    │
│  Page │ Container │ Button │ Text │ Input │ Image │ ...   │
├─────────────────────────────────────────────────────────────┤
│                     属性编辑器层 (PropertyEditor)             │
│  注册表模式 │ 编辑器映射 │ 类型定义 │ 统一接口              │
└─────────────────────────────────────────────────────────────┘
```

### 数据流

1. **组件注册**：物料组件通过 `component-config.tsx` 注册到系统
2. **拖拽添加**：用户拖拽组件 → 触发 `addComponent` → 更新组件树
3. **属性编辑**：选择组件 → 路由到对应编辑器 → 更新组件属性
4. **状态同步**：所有变更通过 Zustand Store 统一管理
5. **数据导出**：组件树序列化为 JSON 格式导出

## 💡 技术亮点

### 1. 模块化架构设计

- **清晰的分层架构**：UI 层、物料层、状态层、工具层职责分明
- **组件化开发**：每个功能模块独立封装，低耦合高内聚
- **插件化扩展**：基于注册表模式，支持组件和编辑器动态注册

```typescript
// 组件注册示例
registerComponent('Button', {
  name: 'Button',
  defaultProps: { text: '按钮', type: 'primary' },
  component: Button
});
```

### 2. 状态管理方案

- **Zustand 轻量级状态管理**：相比 Redux 更简洁，性能优异
- **JSON 数据驱动**：编辑器的本质是编辑 JSON 数据
- **历史记录管理**：自动保存编辑历史，支持撤销/重做
- **类型安全**：完整的 TypeScript 类型定义，编译时检查

### 3. 代码质量保障

- **文件行数限制**：单个文件不超过 300 行，组件文件不超过 200 行
- **单一职责原则**：每个文件只负责一个功能
- **代码重构成果**：PropertyEditor 从 1036 行重构为模块化结构（主文件约 50 行）
- **ESLint 规范**：严格的代码检查，保障代码质量

### 4. 可扩展性设计

- **注册表模式**：组件和编辑器通过注册表统一管理
- **编辑器路由**：自动根据组件类型路由到对应编辑器
- **类型安全扩展**：通过 TypeScript 接口约束，确保扩展的一致性

```typescript
// 编辑器注册表
const editorRegistry: EditorRegistry = {
  'Button': ButtonEditor,
  'Text': TextEditor,
  // ... 更多编辑器
};
```

### 5. 用户体验优化

- **实时反馈**：属性变更即时生效，无需手动刷新
- **键盘快捷键**：完整的快捷键支持，提升操作效率
- **智能工具栏**：自动定位到选中组件，提供快捷操作
- **空状态处理**：友好的空画布提示

## 🚀 快速开始

### 环境要求

- Node.js >= 16.0.0
- pnpm >= 8.0.0（推荐使用 pnpm，也可使用 npm 或 yarn）

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

访问 `http://localhost:5173` 即可使用编辑器。

### 构建生产版本

```bash
pnpm build
```

构建产物将输出到 `dist/` 目录。

### 代码检查

```bash
pnpm lint
```

### 部署到 Vercel

项目已配置好 Vercel 部署，可以通过以下方式部署：

#### 方式一：通过 Vercel Dashboard

1. 将项目推送到 GitHub/GitLab/Bitbucket
2. 访问 [Vercel](https://vercel.com)
3. 导入项目，Vercel 会自动检测到 Vite 项目
4. 部署即可（Vercel 会自动运行 `pnpm install` 和 `pnpm build`）

#### 方式二：通过 Vercel CLI

```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署
vercel

# 生产环境部署
vercel --prod
```

项目已包含 `vercel.json` 配置文件，支持 SPA 路由重写，可直接部署使用。

## 📁 项目结构

```text
weavedream-editor/
├── src/
│   ├── editor/                    # 编辑器核心模块
│   │   ├── components/            # UI 组件
│   │   │   ├── Header/           # 顶部工具栏
│   │   │   ├── Material/         # 组件库面板
│   │   │   ├── EditArea/         # 画布编辑区域
│   │   │   │   ├── hooks/       # 自定义 Hooks
│   │   │   │   ├── utils/        # 工具函数
│   │   │   │   └── components/   # 子组件
│   │   │   ├── Setting/          # 配置面板
│   │   │   └── PropertyEditor/   # 属性编辑器
│   │   │       ├── editors/      # 各组件属性编辑器
│   │   │       └── editorRegistry.tsx  # 编辑器注册表
│   │   ├── materials/            # 物料组件（9 种基础组件）
│   │   ├── stores/               # Zustand 状态管理
│   │   └── hooks/                 # 全局 Hooks
│   └── main.tsx                  # 应用入口
├── docs/                         # 项目文档
│   ├── architecture/             # 架构文档
│   ├── development/              # 开发指南
│   ├── components/               # 组件文档
│   └── agents/                   # AI 代理说明
├── openspec/                     # OpenSpec 规范
└── README.md                     # 项目说明
```

### 物料组件

项目内置 9 种基础组件：

- **Page**：页面容器组件
- **Container**：布局容器组件
- **Card**：卡片组件
- **Button**：按钮组件
- **Text**：文本组件
- **Title**：标题组件
- **Input**：输入框组件
- **Image**：图片组件
- **Divider**：分割线组件

## 📚 项目文档

完整的项目文档位于 [docs/](./docs/) 目录：

- 📖 [架构文档](./docs/architecture/) - 系统架构和目录结构详解
- 🛠️ [开发指南](./docs/development/) - 代码规范和开发流程
- 🧩 [组件文档](./docs/components/) - 组件使用说明
- 🤖 [AI 代理说明](./docs/agents/) - AI 代理配置和使用

详细文档索引请查看 [文档索引](./docs/INDEX.md)。

## 🔧 开发规范

项目遵循严格的开发规范，保障代码质量：

- ✅ **TypeScript 类型安全**：完整的类型定义，避免运行时错误
- ✅ **ESLint 代码检查**：统一的代码风格和质量标准
- ✅ **文件行数限制**：单个文件不超过 300 行，保持代码可读性
- ✅ **单一职责原则**：每个模块职责清晰，易于维护
- ✅ **中文注释规范**：所有注释使用简体中文

更多开发规范请参考 [代码规范文档](./docs/development/CODING_STANDARDS.md)。

## 🎯 适用场景

- **快速原型开发**：快速搭建页面原型，验证产品思路
- **页面配置化生成**：通过 JSON 配置动态生成页面
- **低代码平台**：作为低代码平台的核心编辑器模块
- **CMS 内容管理**：可视化的内容编辑和管理工具
- **教学演示**：前端工程化、架构设计的教学案例

## 🔄 OpenSpec 规范驱动开发

项目采用 OpenSpec 进行规范驱动的开发：

- 📋 [OpenSpec 项目配置](./openspec/project.md) - 项目上下文和技术栈
- 📝 [变更记录](./openspec/changes/) - 所有功能变更提案
- 🤖 [OpenSpec 代理指南](./docs/agents/OPENSPEC_AGENTS.md) - 规范驱动开发流程

## 🤝 贡献指南

欢迎贡献代码！在开始之前，请先阅读：

1. [开发指南](./docs/development/README.md) - 了解开发流程
2. [代码规范](./docs/development/CODING_STANDARDS.md) - 遵循代码标准
3. [组件开发指南](./docs/development/COMPONENT_DEVELOPMENT.md) - 如何添加新组件

## 📄 许可证

本项目采用 [MIT 许可证](./LICENSE)。详见 LICENSE 文件。

---

<div align="center">

**⭐ 如果这个项目对你有帮助，欢迎 Star！**

Made with ❤️ by [WildBlue58]

</div>
