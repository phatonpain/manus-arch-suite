# AGENTS.md — Directives for Autonomous AI Agents (Manus, Claude, Antigravity)

This repository serves as the architecture, design system, and component core for luxury architectural web platforms, high-end landing pages, and interactive digital experiences.

## 1. System Philosophy & Reference Mapping
All generated screens and architectures MUST draw patterns strictly from these reference domains:
- **Framer (S26 Template Suite & Real Estate)**: 12-column Bento Grid layouts, micro-interactions, subtle glassmorphic surfaces (`border-white/10`, `backdrop-blur-md`), and typography hierarchies.
- **Spline**: Interactive 3D Canvas scenes embedded via `@splinetool/react-spline` with mandatory React 19 `<Suspense>` boundaries.
- **Redraw**: Architecture AI comparison sliders (`BeforeAfter.tsx`) comparing floor plans or raw structures with photorealistic AI renders.
- **Figma & Canva**: Architectural color palette (Zinc 950 base with bronze `--color-brand-accent` highlights) defined in `@theme` of Tailwind CSS v4.

## 2. Mandatory Tech Stack
- **Framework**: React 19 + TypeScript 5+ + Vite 6+
- **Styling**: Tailwind CSS v4 (configured via `@import "tailwindcss";` and `@theme` in `src/index.css`)
- **Linter**: `oxlint` (strictly do NOT use or introduce ESLint configs)
- **Testing**: `vitest` + `@testing-library/react` + `jsdom`
- **Icons**: `lucide-react`

## 3. Strict Development Rules
1. **Never use `dangerouslySetInnerHTML`**: All content and SVGs must be rendered safely.
2. **Performance Isolation**: 
   - 3D Spline canvases MUST be lazy-loaded and wrapped in `<Suspense>`.
   - Never commit raw 3D binaries (`.spline`, `.blend`, `.obj`) into the Git repository. Load them through Spline Cloud / CDN URLs.
   - Interactive touch/drag events (e.g. before-after slider) must not conflict with page scrolling or 3D orbital controls.
3. **Commit Standards**:
   - Write all Git commits in English using Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`, `refactor:`).
4. **Code Quality**:
   - Write code comments in English.
   - Run `npx oxlint` and `npx vitest run` before pushing changes.
