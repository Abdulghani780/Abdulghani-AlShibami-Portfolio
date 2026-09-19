# PRE-CLEANUP SNAPSHOT
**Abdulghani Al-Shibami Portfolio**
**Date:** 2026-09-19
**Standard:** Non-Destructive Maintenance & Stabilization

---

## 1. System & Environment Baseline
- **Operating System:** Windows (Shell: PowerShell)
- **Node.js Version:** `v24.15.0`
- **Package Manager:** `pnpm 10.33.3`
- **Next.js Version:** `15.2.0` (Runtime / Build: `15.5.25`)
- **React Version:** `19.0.0`
- **TypeScript Version:** `5.7.3`
- **Branch Created:** `maintenance/cleanup-stabilization`
- **Base Branch:** `main`
- **Base Commit SHA:** `63ce7ecfe19e27cbfd27eb9bbd2a84fb7f0beeb9`
- **Baseline Git Status:** Working tree clean, zero uncommitted changes

---

## 2. Health & Verification Baseline
- **TypeScript Check (`pnpm tsc --noEmit`):** PASS (0 errors)
- **ESLint Check (`pnpm lint`):** PASS (0 errors, 0 warnings)
- **Next.js Production Build (`pnpm build`):** PASS (30/30 static pages generated)
  - `/` (Static redirect)
  - `/[locale]` (`/en`, `/ar`)
  - `/[locale]/projects` (`/en/projects`, `/ar/projects`)
  - `/[locale]/projects/[slug]` (10 SSG routes: 5 projects × 2 locales)
  - `/[locale]/projects/[slug]/demo` (10 SSG routes: 5 projects × 2 locales)
  - `/[locale]/showcase` (`/en/showcase`, `/ar/showcase`)

---

## 3. Current Project Metadata & Demo Routing State
| Project Slug | Title | Demo Type in `projectsData.ts` | Simulation Component in `demos/` | Status in App UI |
| :--- | :--- | :--- | :--- | :--- |
| `cafena` | Cafena Coffee Shop Management | `"real_live"` | `CafenaSimulation.tsx` (1,048 lines) | **SHADOWED** (Renders external link placeholder) |
| `campus-it-tracker` | Campus IT Asset & Ticket Tracker | `"interactive_simulation"` | `CampusITTrackerSimulation.tsx` (485 lines) | **ACTIVE** (Mounts interactive simulation) |
| `gp` | GP Portal — Graduation Projects | `"embedded"` | `GpSimulation.tsx` (422 lines) | **SHADOWED** (Renders mock iframe fallback) |
| `metaalgorithm-lab` | MetaAlgorithm Lab — Algorithm Suite | `"interactive_simulation"` | `MetaAlgorithmLabSimulation.tsx` (768 lines) | **ACTIVE** (Mounts interactive simulation) |
| `novatech` | NovaTech AI Solutions Platform | `"real_live"` | `NovaTechSimulation.tsx` (747 lines) | **SHADOWED** (Renders external link placeholder) |

**Total Shadowed Simulation Code:** 2,217 lines of fully functional interactive React simulation code currently unrendered.

---

## 4. Current Duplicated Component Families
1. **Project Previews (handcrafted SVG mockups):**
   - `components/features/projects/ProjectPreviewGraphic.tsx` (482 lines) — used in `ProjectBentoShowcase.tsx` and `CanonicalProjectsBento.tsx`.
   - `components/reference/ProjectPreviewMockup.tsx` (348 lines) — duplicates the exact same 5 project SVG mockups.
2. **Bento Grid Presentation:**
   - `components/canonical/CanonicalProjectsBento.tsx` (433 lines) — rendered on `app/[locale]/page.tsx` (homepage).
   - `components/features/projects/ProjectBentoShowcase.tsx` (172 lines) — rendered on `app/[locale]/projects/page.tsx` (default bento mode).
   - `components/features/projects/ProjectCard.tsx` (112 lines) — rendered on `app/[locale]/projects/page.tsx` (filtered grid mode).
3. **Footer Architecture:**
   - `components/canonical/CanonicalFooter.tsx` (203 lines) — hardcoded on homepage (`app/[locale]/page.tsx`).
   - `components/layout/Footer.tsx` (125 lines) — rendered via `MainWrapper.tsx` on all other pages.
4. **Nested Semantic Landmark:**
   - `components/layout/MainWrapper.tsx` renders `<main id="main-content" ...>`.
   - `app/[locale]/page.tsx` renders another `<main className="...">` inside `MainWrapper`.

---

## 5. Cleanup Targets & Verification Criteria
1. **Target 1: Demo Restoration (P0)**
   - Align `lib/data/projectsData.ts` so `cafena`, `gp`, and `novatech` use `demoType: "interactive_simulation"`.
   - Ensure all 5 project demo routes load their respective native simulations inside `DemoViewer`.
2. **Target 2: Confirmed Dead Code Purge (P1)**
   - `components/reference/ReferenceLeftColumn.tsx` (370 lines)
   - `components/reference/ReferenceRightColumn.tsx` (433 lines)
   - `components/reference/WireframeGlobe.tsx` (56 lines)
   - `components/ui/GlassPanel.tsx` (52 lines)
3. **Target 3: Asset Cleanup (P1)**
   - Delete root `Abdulghani Alshibami.jpg` (2.78 MB raw JPEG) after verifying `public/images/profile/` WebP usage.
   - Inspect and evaluate `design-references/`.
4. **Target 4: Project Preview Consolidation (P1)**
   - Consolidate to `components/features/projects/ProjectPreviewGraphic.tsx`. Migrate any callers and safely retire `components/reference/ProjectPreviewMockup.tsx`.
5. **Target 5: Bento & Card Harmonization (P1)**
   - Consolidate bento rendering logic to preserve single source of truth without visual regressions.
6. **Target 6: Footer Consolidation (P1)**
   - Unify `CanonicalFooter` and `layout/Footer` into a single canonical footer component rendered predictably through the app shell layout.
7. **Target 7: Semantic Landmark & A11y Fix (P2)**
   - Remove nested `<main>` in `app/[locale]/page.tsx`.
   - Add missing accessible labels and interactive button roles where low-risk.
8. **Target 8: Dictionary Cleanup (P2)**
   - Clean orphaned keys in `lib/i18n/dictionaries.ts` (lines 22–77).

---

## 6. Known Risks & Invariants
- **Do NOT touch Supabase schema or migrations:** `supabase/migrations/20260917000001_initial_schema.sql` stays untouched.
- **Do NOT break simulation engines:** Internals of `demos/simulations/` and shared shell must remain intact.
- **Do NOT break offline fallbacks:** `HybridProjectRepository` fallback must remain functional.
- **Do NOT alter Vercel deployment settings:** Local maintenance branch only.
