# MANUS.md — Mandatory Directives & Anti-Hallucination Shield

> **ATTENTION MANUS:** You are operating on a production architectural design system. Follow these rules with zero exceptions.

---

## 🚫 NEGATIVE CONSTRAINTS (STRICTLY FORBIDDEN)

1. **NO Generic AI Clichés:**
   - NEVER use purple/blue neon gradients (`from-purple-600 to-blue-500`). This is a LUXURY ARCHITECTURE system, not a generic SaaS wrapper.
   - NEVER use placeholder marketing text ("Soluções inovadoras", "Transforme seu negócio", "Lorem Ipsum"). Use realistic architectural and real estate specifications (m², typology, bioclimatic metrics, structural CAD/BIM definitions).

2. **NO Outdated or Incompatible Libraries:**
   - DO NOT install legacy `framer-motion` versions incompatible with React 19. Use native Tailwind CSS v4 transitions or lightweight `motion/react`.
   - DO NOT install ESLint. Only `oxlint` is permitted (`npm run lint`).
   - DO NOT use `dangerouslySetInnerHTML`.

3. **NO Destructive File Rewrites:**
   - Do NOT regenerate existing working components from scratch when adding features. Perform surgical edits.
   - Never commit raw 3D binaries (`.spline`, `.blend`, `.obj`) into Git.

---

## 💎 POSITIVE CONSTRAINTS (MANDATORY PATTERNS)

### 1. Palette & Typography (Figma / Canva Tokens)
- **Background**: Deep Obsidian `#09090b` (`bg-brand-dark`)
- **Card Surface**: Glassmorphic `#121216` (`bg-brand-card/60 backdrop-blur-xl border border-white/10`)
- **Accent**: Brushed Bronze `#c69b6d` (`text-brand-accent`, `bg-brand-accent`)
- **Hierarchy**: Asymmetrical 12-column Bento Grid (columns spanning 8+4 or 6+6, never uniform repeated boxes).

### 2. Interactive 3D (Spline Pattern)
- Every Spline scene in `src/components/3d/` MUST be wrapped in React 19 `<Suspense>` with a fallback skeleton.
- Use public `.splinecode` CDN URLs.
- Always add `pointer-events-none` on informational overlay layers so orbit/drag gestures are not hijacked.

### 3. Architecture AI Comparison (Redraw Pattern)
- All before/after comparisons must use `src/components/arch/BeforeAfter.tsx`.
- Contrast technical CAD blueprints, wireframes, or sketches with photorealistic AI neural renders.

---

## 🛠 VERIFICATION PROTOCOL (RUN BEFORE SAYING TASK IS COMPLETE)
Manus MUST execute and show proof of:
```bash
npm run lint     # Must output: Found 0 warnings and 0 errors
npm run test     # Must pass all Vitest tests
npm run build    # Must output: ✓ built in Xs
```
If any of these commands fail, Manus must fix the code before responding.
