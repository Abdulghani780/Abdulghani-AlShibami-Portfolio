# 22 — TESTING & QUALITY ASSURANCE SPECIFICATION

**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System  

---

## 1. Multi-Tiered Testing Strategy

```text
┌────────────────────────────────────────────────────────┐
│             Tier 4: Visual & A11y Auditing             │
│   - Chrome DevTools MCP (Lighthouse, LCP, RTL check)   │
└───────────────────────────▲────────────────────────────┘
                            │
┌───────────────────────────┴────────────────────────────┐
│             Tier 3: End-to-End & Integration           │
│   - Page routing, filter interactions, form submission │
└───────────────────────────▲────────────────────────────┘
                            │
┌───────────────────────────┴────────────────────────────┐
│                 Tier 2: Component Tests                │
│   - React Testing Library (ThemeToggle, ProjectCard)   │
└───────────────────────────▲────────────────────────────┘
                            │
┌───────────────────────────┴────────────────────────────┐
│            Tier 1: Static Analysis & Unit Tests        │
│   - TypeScript compiler (tsc --noEmit), ESLint, Vitest │
└────────────────────────────────────────────────────────┘
```

---

## 2. Test Suites & Coverage Focus
1. **Internationalization Tests:** Verify that switching between `/en` and `/ar` updates the `dir` attribute and translates UI strings.
2. **Theme State Tests:** Verify that toggling theme modifies the `dark` class on `document.documentElement` and persists to `localStorage`.
3. **Project Filtering Tests:** Verify search query and category pill selections filter project cards accurately.
4. **Contact Form Validation Tests:** Verify empty inputs, malformed email addresses, and honeypot field traps are rejected with proper accessible error states.
5. **Interactive Demo Sandbox Tests:** Verify that simulations initialize with default mock data and reset without state leakage.

---

## 3. Automated Command Pipeline
- `pnpm test` : Runs unit and integration suites via Vitest.
- `pnpm lint` : Executes ESLint check across all TSX and TS files.
- `pnpm typecheck` : Runs `tsc --noEmit` to verify type safety.
- `pnpm build` : Compiles production distribution bundle.
