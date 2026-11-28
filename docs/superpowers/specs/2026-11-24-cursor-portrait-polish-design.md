# Cursor, Portrait & Motion Polish — Design

**Date:** 2026-11-24 · **Status:** Approved by owner

## Intent
Second polish pass after the Motion & Luxury Consistency Pass. Owner request: more professional/exquisite site, more professional cursor, faster-feeling page entry, dark mode as default (already true), and fix the hero portrait appearing cropped in dark mode.

## Scope (approved)

1. **Hero portrait dark-mode crop fix** — `components/features/home/HeroSection.tsx`
   - Root cause hypothesis: `abdulghani-portrait.webp` alpha bbox touches left/right/bottom frame edges; the 82%→100% bottom mask + near-black dark backplate makes the silhouette read as a hard crop.
   - Fix: composite mask — vertical fade starting slightly earlier (~78%) intersected with a ~3% horizontal edge feather, so cutout edges dissolve instead of cutting. Applied symmetrically (theme-agnostic, subtle in light mode too).

2. **MagneticCursor refinement** — `components/ui/MagneticCursor.tsx` + `app/globals.css`
   - Hide the native OS cursor while the custom cursor is active (currently both render → unprofessional double cursor). Add `custom-cursor-active` class on `<html>`; CSS `cursor: none` under `@media (pointer:fine)`, excluding text-entry fields.
   - Visual cleanup: aura 400px → ~200px with lower alpha; ring slimmer (w-10 → w-9 base, thinner border opacity); keep dot + `data-cursor-text` badge mechanism.

3. **Page-enter transition** — `app/globals.css`
   - Faster, more responsive: 0.55s → 0.38s, curve `cubic-bezier(0.22, 1, 0.36, 1)`, add subtle `scale(0.985) → 1`. Keep `backwards` fill (required — `both` broke fixed-position CertificateModal).

4. **Global polish** — `app/globals.css`, `app/layout.tsx`
   - `color-scheme: light` on `:root`, `color-scheme: dark` under `.dark` (dark scrollbars/form controls).
   - Firefox scrollbar: `scrollbar-width: thin` + `scrollbar-color` gold.
   - Selection/focus already gold — verify only.

## Non-goals
No content/restructure changes, no new dependencies, no lens-mode cursor, light `:root` tokens untouched, all motion still honors `prefers-reduced-motion`.

## Verification
`pnpm typecheck`, `pnpm lint`, `pnpm test`, `pnpm build`; visual check of hero in both themes; push to `main`.
