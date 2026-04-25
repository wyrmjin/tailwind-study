# Tailwind CSS 学习项目

基于 React 18 + Vite + TailwindCSS v4 的 Tailwind CSS 系统学习项目，包含分阶段教程和配套练习。

## 学习进度

| 阶段 | 内容 | 状态 |
|------|------|------|
| 1 | 基础概念 | 已完成 |
| 2 | 布局核心 | 已完成 |
| 3 | 排版与视觉 | 已完成 |
| 4 | 交互与状态 | 已完成 |
| 5 | 实战组件 | 已完成 |
| 6 | 进阶技巧 | 进行中 |

## 练习组件

各阶段练习产出分布在 `src/components/` 下：

| 组件 | 覆盖知识点 |
|------|-----------|
| `TailwindLab.tsx` | 基础概念：utility-first、间距、颜色 |
| `LayoutLab.tsx` | Flexbox、Grid、响应式、定位 |
| `TypographyLab.tsx` | 排版：字体、行高、字距 |
| `BorderLab.tsx` | 边框、圆角、分割线 |
| `ShadowLab.tsx` | 阴影、透明度、ring |
| `BackgroundLab.tsx` | 渐变背景、背景尺寸 |
| `Gallery/` | Group/Peer 交互、hover 动画、dark mode |
| `Modal.tsx` | 遮罩层、居中定位、过渡动画 |
| `Dropdown.tsx` | 定位、hover/click 交互 |
| `Toast.tsx` | 固定定位、进入/退出动画、Context |
| `ContactForm.tsx` | 表单校验样式、focus 状态 |
| `DataTable.tsx` | 斑马纹、排序图标、响应式表格 |
| `Avatar/` | 头像组件 + 测试用例 |

## 技术栈

- **React 18** + **TypeScript** + **Vite 5** (SWC)
- **TailwindCSS v4** — CSS-first 配置（`@theme` 指令，无 `tailwind.config.js`）
- **Vitest** + **Testing Library** — 组件测试
- **ESLint** + **Prettier** — 代码规范（自动排序 Tailwind 类名）

## 开始使用

```bash
pnpm install
pnpm dev          # http://localhost:5173
```

## 常用命令

| 命令 | 说明 |
|------|------|
| `pnpm dev` | 启动开发服务器 |
| `pnpm build` | 构建生产版本 |
| `pnpm test` | 运行测试 |
| `pnpm test:ui` | 测试 UI 界面 |
| `pnpm lint` | 代码检查 |
| `pnpm typecheck` | 类型检查 |

## 学习教程

本项目内置了 Tailwind CSS 分阶段学习 skill，通过 Claude Code 使用：

> 告诉 Claude「开始学习 Tailwind」即可获得对应阶段的教程和练习

教程覆盖：基础概念 → 布局核心 → 排版与视觉 → 交互与状态 → 实战组件 → 进阶技巧（`@theme` 自定义配置、`@apply` 提取样式、性能优化）

## License

MIT
