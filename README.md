# ArchStudio — Luxury Architectural & AI Suite

Design system and web application suite merging **Framer S26 Bento Grids**, **Spline 3D Environments**, **Redraw AI Architectural Comparisons**, and **Figma/Canva Design Tokens**.

## Stack
- **Frontend**: React 19, TypeScript, Vite, Tailwind CSS v4
- **Linter**: `oxlint`
- **Testing**: `vitest` + `@testing-library/react`
- **Agent Governance**: `MANUS.md` and `AGENTS.md`

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run oxlint (zero ESLint)
npm run lint

# Run Vitest test suite
npm run test

# Production build
npm run build
```

## Structure
- `src/components/3d/SplineHero.tsx`: Embedded Spline 3D canvas with React 19 `<Suspense>`.
- `src/components/arch/BeforeAfter.tsx`: Interactive touch/mouse divider slider (Redraw pattern).
- `src/components/landing/BentoGrid.tsx`: 12-column architectural bento grid (Framer S26 pattern).
- `src/components/landing/Navbar.tsx`: Floating glassmorphism navigation.
- `AGENTS.md` & `MANUS.md`: Strict agent guidelines and anti-hallucination shield.
- `docs/fusion-spec.md`: Design and architecture fusion specification.
