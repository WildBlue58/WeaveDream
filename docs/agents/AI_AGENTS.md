# AI 代理配置

本文件用于配置 Cursor AI 代理的行为和规则。

> 注意：根目录的 `AGENTS.md` 文件包含 OpenSpec 指令，请勿删除或修改其管理块。

## 项目规则

根据 `AGENTS.md` 和项目配置，AI 代理应遵循以下规则：

1. **语言设置**：所有 AI 生成的内容（包括提交信息、代码注释等）都应使用简体中文
2. **提交信息**：必须使用简体中文，格式为动词开头，描述所做的更改
3. **代码注释**：使用简体中文，保持简洁明了

## OpenSpec 工作流

当用户请求涉及规划、提案或架构变更时：

1. 首先查看 `@/openspec/AGENTS.md` 了解 OpenSpec 工作流程
2. 创建或参考相关的变更提案
3. 在实施前获取提案批准

## 相关文档

- [OpenSpec 代理指南](./OPENSPEC_AGENTS.md) - OpenSpec 详细工作流程
- [OpenSpec 项目配置](../../openspec/project.md) - 项目配置信息
