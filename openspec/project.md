# 项目上下文

## 项目目的

织梦（WeaveDream）是一个可视化低代码编辑器，允许用户通过拖拽方式快速创建和配置页面组件。项目的核心目标是：

- 提供直观的可视化编辑界面
- 支持组件拖拽和属性配置
- 将编辑结果导出为 JSON 数据格式
- 通过 JSON 数据渲染完整的页面

## 技术栈

### 前端框架

- **React** 19.1.1 - UI 框架
- **TypeScript** ~5.8.3 - 类型系统
- **Vite** ^7.1.2 - 构建工具

### UI 和样式

- **TailwindCSS** ^4.1.13 - CSS 框架（通过 @tailwindcss/vite 集成）
- **Allotment** ^1.20.4 - 可调整大小的分栏布局组件

### 状态管理

- **Zustand** ^5.0.8 - 轻量级状态管理库

### 拖拽功能

- **react-dnd** ^16.0.1 - React 拖拽库
- **react-dnd-html5-backend** ^16.0.1 - HTML5 拖拽后端

### 开发工具

- **ESLint** ^9.33.0 - 代码检查
- **TypeScript ESLint** ^8.39.1 - TypeScript 代码检查
- **typescript-eslint** ^8.39.1 - TypeScript ESLint 插件

## 项目约定

### 代码风格

- 使用 **TypeScript** 进行类型标注
- 遵循 **ESLint** 推荐配置
- 使用 **React Hooks** 进行组件开发
- 组件文件使用大驼峰命名（PascalCase），如 `MaterialItem.tsx`
- 函数和变量使用小驼峰命名（camelCase）
- 代码注释使用**简体中文**

### 架构模式

#### 模块化开发

项目采用模块化架构，主要目录结构：

```text
src/editor/
├── components/        # UI 组件
│   ├── Header/       # 顶部导航栏
│   ├── Material/     # 左侧物料区（组件库）
│   ├── EditArea/     # 中间编辑区（画布）
│   └── Setting/      # 右侧配置区（属性面板）
├── stores/           # Zustand 状态管理
│   ├── components.tsx        # 组件树状态
│   └── component-config.tsx  # 组件配置注册
├── materials/        # 物料组件（可拖拽的组件）
│   ├── Page/         # 页面组件
│   ├── Container/    # 容器组件
│   └── Button/       # 按钮组件
└── hooks/            # 自定义 Hooks
```

#### 状态管理r

- 使用 **Zustand** 进行全局状态管理
- Store 结构：`State & Action` 交叉类型
- 核心数据模型：
  - `Component` - 组件树结构（支持父子关系）
  - `ComponentConfig` - 组件配置（名称、默认属性、组件实例）

#### 数据流

- 编辑区域的数据通过 Store 管理
- 使用 `parentId + children` 构建树形结构
- 核心操作：添加组件、删除组件、更新组件属性

#### 布局结构

使用 Allotment 实现三栏布局：

- **左侧（Material）**：物料区域，默认宽度 240px，范围 200-300px
- **中间（EditArea）**：编辑区域，自适应大小
- **右侧（Setting）**：配置区域，默认宽度 300px，范围 300-500px

### 测试策略

- 当前项目尚未配置测试框架
- 未来可考虑添加单元测试和集成测试

### Git 工作流

- 提交信息必须使用**简体中文**
- 提交信息格式：使用动词开头，描述所做的更改
- 提交信息必须使用 UTF-8 编码

## 领域上下文

### 织梦核心概念

1. **组件树（Component Tree）**
   - 使用树形结构组织组件
   - 每个组件包含：id、name、props、children、parentId

2. **物料组件（Material Components）**
   - 可拖拽到画布的基础组件
   - 通过 `useComponentConfigStore` 注册和管理
   - 每个物料包含：name、defaultProps、component

3. **JSON 数据驱动**
   - 编辑器的本质是编辑 JSON 数据
   - 通过 JSON 数据可以完整还原页面结构
   - 组件树状态存储在 Zustand Store 中

4. **拖拽交互**
   - 使用 React DnD 实现拖拽功能
   - 从物料区拖拽到编辑区
   - 支持嵌套组件结构

### 核心功能模块

- **Header**：顶部工具栏，提供保存、预览等功能入口
- **Material**：组件库展示，显示所有可用的物料组件
- **EditArea**：画布区域，展示和编辑组件树
- **Setting**：属性配置面板，编辑选中组件的属性

## 重要约束

- 所有 AI 生成的内容（包括提交信息、代码注释等）都应使用**简体中文**
- 代码注释使用简体中文，保持简洁明了
- 组件必须通过 `registerComponent` 注册才能使用
- 组件树必须保持有效的父子关系

## 外部依赖

- **Allotment**：分栏布局组件，支持拖拽调整大小
- **React DnD**：拖拽功能库，提供 HTML5 后端实现
- **Zustand**：轻量级状态管理，替代 Redux 的简单方案
- **TailwindCSS**：实用优先的 CSS 框架
- **Vite**：快速的构建工具和开发服务器
