# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

React 18 SPA boilerplate using TypeScript, Vite 5 (with SWC), TailwindCSS 4 (with `@tailwindcss/vite`), Vitest, and Testing Library. Package manager is pnpm.

## Commands

| Action | Command |
|--------|---------|
| Install | `pnpm install` |
| Dev server | `pnpm dev` (localhost:5173) |
| Build | `pnpm build` (runs `tsc` then `vite build`) |
| Lint | `pnpm lint` (zero warnings policy) |
| Type-check | `pnpm typecheck` |
| Run all tests | `pnpm test` |
| Single test file | `pnpm test -- src/components/App/test.tsx` |
| Test UI | `pnpm test:ui` |

## Architecture

**Path aliases:** tsconfig `baseUrl` is `./src`, resolved by `vite-tsconfig-paths`. Import as `import X from 'components/Foo'` instead of relative paths.

**Component pattern:** Each component lives under `src/components/` — either as a single file (`App.tsx`) or a folder (`Avatar/index.tsx`). Tests are co-located as `test.tsx` alongside the component. Vitest discovers files matching `**/test.{ts,tsx}`.

**Styling:** TailwindCSS v4 with `@tailwindcss/vite`, configured via `src/app.css` (`@import 'tailwindcss'` + `@custom-variant dark`). No `tailwind.config.js`. Dark mode uses class-based toggle (`.dark` on ancestor). Note v4 class name changes: `bg-linear-to-*` instead of `bg-gradient-to-*`, `shadow-xs/sm` scale shifted. Conditional classes use `classNames` helper at `src/utils/index.ts`. Prettier auto-sorts Tailwind classes via `prettier-plugin-tailwindcss`.

**Vitest config:** globals enabled (no need to import `describe`/`it`/`expect`), happy-dom environment, setup file at `.vitest/setup.ts` imports `@testing-library/jest-dom/vitest` matchers.

## Code Style

Prettier: no semicolons, single quotes, no trailing commas. ESLint enforces React hooks rules and Tailwind class order (warns on misordered classes).
