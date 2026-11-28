# Motion & Luxury Consistency Pass — Design Doc

**Date:** 2026-11-24
**Status:** Awaiting approval
**Scope decision:** تنسيق + حركة (formatting + motion) — no content rewrite, no page re-architecture.

## Intent

The portfolio already has a strong motion foundation (Lenis, MagneticCursor, ScrollReveal, TiltCard, CountUp, Hero3DCanvas, gold keyframes) and a clean token system. The home page is well-animated; secondary pages (projects catalog, case study, credentials, showcase) are static, and visual treatment is inconsistent across sections. This pass makes the whole site feel like one luxury product: unified section rhythm, unified card treatment, comprehensive (but tasteful) motion, and a clearer dark mode.

## Goals

1. **Unified section system** — every section across all pages uses the same heading anatomy (eyebrow/kicker + serif/display title + gold hairline rule), same vertical rhythm, same container width.
2. **Unified card treatment** — cards share one anatomy: hairline gold-tinted border, glass surface, hover lift + spotlight (reuse existing `TiltCard`/`ScrollReveal` primitives — no new animation library).
3. **Motion coverage** — every page gets scroll reveals, staggered entrances, and micro-interactions; all gated behind `prefers-reduced-motion`.
4. **Clearer dark mode** — raise surface contrast slightly (hero experience stays dark, but cards/panels read more clearly against the canvas), keep the royal gold identity.
5. **Signature luxury details** — gold shimmer sweep on section titles, scroll progress hairline, magnetic primary buttons, preloader, subtle ambient grain.

## Non-goals

- No content/copy rewrites, no new pages, no data-layer changes.
- No new heavy dependencies (no GSAP/framer-motion — CSS + existing primitives only).
- No restructuring of `[locale]` routing or i18n dictionaries.

## Constraints

- Next.js 15 App Router, React 19, Tailwind 3, TypeScript strict.
- Must respect RTL (`dir="rtl"`, logical properties) and both locales `en`/`ar`.
- Must respect `prefers-reduced-motion` (already handled via `useReducedMotion` hook — reuse it).
- Decoupled data layer stays untouched; UI-only change.
- WCAG AA contrast in both themes.

## Approaches considered

| Approach | Trade-off | Verdict |
|---|---|---|
| A. Full redesign / restructure | High risk, large diff, breaks working system | Rejected by user scope |
| B. Polish pass on existing structure (chosen) | Safe, consistent, shippable incrementally | **Chosen** |
| C. Motion-only additions | Leaves visual inconsistency | Rejected — user asked for تنسيق too |

## Design decisions (my calls — correct me if wrong)

- **Design tokens:** keep existing CSS variables; adjust dark `--surface-card`/`--surface-elevated` one step lighter (`#121214` → `#16161A`-ish) and hairlines slightly more visible for clarity. Tune, don't redesign tokens.
- **Section heading component:** extend existing `SectionHeading` into the single canonical pattern; retrofit the few sections that hand-roll headings.
- **New primitives (small, in `components/ui/`):**
  - `GoldShimmerTitle` — one-shot clipped gold sweep on reveal (CSS only).
  - `ScrollProgressBar` — 2px gold hairline fixed top, scaleX driven by scroll.
  - `MagneticButton` wrapper or `data-magnetic` handling in `MagneticCursor` (it already detects `[data-magnetic]`) — implement actual pull via transform on the element.
  - `PageFade` — route-change fade/slide via `usePathname` effect.
  - `Preloader` — gold "A" stroke draw + name reveal, sessionStorage-gated so it shows once per session (or first visit).
  - `AmbientGrain` — ultra-subtle noise overlay + faint floating gold particles in hero only.
- **Case study page:** wrap each of the 8 sections in `ScrollReveal`, add `gold-flow`/`data-flow` animation to `ArchitectureTopology` connectors, `CountUp` on `CaseStudyMetrics` values.
- **Projects catalog:** staggered `ScrollReveal` on `ProjectCard` grid (idx * 80ms), TiltCard hover already available via card — verify and unify.
- **Credentials/showcase pages:** apply same section + card treatment.
- **Navbar:** scroll-aware — transparent → glass on scroll, subtle shrink; keep mobile menu animation, polish it.
- **Footer:** gold hairline top border, gentle reveal.

## What's left to the builder

- Exact easing/duration values within the established `cubic-bezier(0.16, 1, 0.3, 1)` family.
- Exact surface hex nudges within "one step lighter" guidance.
- Stagger delays within 60–120ms steps.

## Verification

- `pnpm typecheck`, `pnpm lint`, `pnpm build` clean.
- Manual/browser check: `/en`, `/ar`, `/en/projects`, a project detail page, `/en/credentials` — dark + light, desktop + mobile width.
- Reduced-motion emulation: all reveals render final state immediately.
