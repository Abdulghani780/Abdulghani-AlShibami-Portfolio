# CLEANUP & STABILIZATION DECISIONS LOG
**Abdulghani Al-Shibami Portfolio**
**Branch:** `maintenance/cleanup-stabilization`
**Date:** 2026-09-19

This document records every architectural change, deletion, migration, and consolidation decision executed during the cleanup and stabilization process, including justification, evidence, and verification outcome.

---

## Log of Actions

| # | Item / Target File | Action | Evidence & Rationale | Replacement / Destination | QA Status |
|---|---|---|---|---|---|
| 0 | `docs/cleanup/PRE_CLEANUP_SNAPSHOT.md` | Create | Recorded exact pre-cleanup repository baseline, git commit SHA (`63ce7ec`), and build status. | Baseline record | Verified |
| 1 | `components/canonical/CanonicalProjectsBento.tsx` | Fix / Harmonize | The audit identified that while `lib/data/projectsData.ts` and `demos/registry/index.ts` had all 5 projects configured as `interactive_simulation`, `CanonicalProjectsBento.tsx` still had hardcoded legacy strings (`REAL LIVE DEMO` for Cafena & NovaTech, `EMBEDDED DEMO` for GP). Updated all 5 to `INTERACTIVE SIMULATION` with green badges. | Standardized to `INTERACTIVE SIMULATION` | Verified (TypeScript PASS, HTTP 200 on all 5 demo routes) |
| 2 | `components/reference/ReferenceLeftColumn.tsx` | Delete | Comprehensive grep search confirmed ZERO imports across the entire application. It was an abandoned v2 dual-column reference layout component (370 lines). | Cleaned without replacement | Verified (TypeScript PASS, Lint PASS) |
| 3 | `components/reference/ReferenceRightColumn.tsx` | Delete | Comprehensive grep search confirmed ZERO imports across the entire application. Abandoned v2 dual-column reference layout component (433 lines). | Cleaned without replacement | Verified (TypeScript PASS, Lint PASS) |
| 4 | `components/reference/WireframeGlobe.tsx` | Delete | Imported only by `ReferenceRightColumn.tsx`. Zero imports elsewhere in codebase. | Cleaned without replacement | Verified (TypeScript PASS, Lint PASS) |
| 5 | `components/ui/GlassPanel.tsx` | Delete | Unused experimental glass panel primitive (52 lines). Zero imports in active codebase. | Cleaned without replacement | Verified (TypeScript PASS, Lint PASS) |
| 6 | `Abdulghani Alshibami.jpg` (2.78 MB) | Intentionally Preserved in `.gitignore` | Verified that `Abdulghani Alshibami.jpg` is explicitly listed in `.gitignore` (line 53) under "Original projects source material & raw external assets (DO NOT COMMIT)". Active application components (`CanonicalHero.tsx` and `CanonicalDesktopSimulator.tsx`) use optimized WebP variants in `public/images/profile/`. The root JPG is not tracked in git and does not pollute git or the build bundle. | Kept as untracked master source asset | Verified |
| 7 | `design-references/` (12 folders, 36 files) | Intentionally Preserved as Documentation | Verified that `design-references/` is documented in `docs/VISUAL_DESIGN_REFERENCE.md` and `docs/IMPLEMENTATION_BASELINE.md` as the permanent record of StitchMCP visual design explorations. It is not imported into application runtime. Preserved for reference during the upcoming design phase. | Archived documentation | Verified |
| 8 | `components/features/projects/ProjectPreviewGraphic.tsx` | Enhance / Consolidate | Updated to accept `slug?: string`, `projectSlug?: string`, `locale?: "en" | "ar"` with default fallback. Provides full bilingual support and high-fidelity SVG telemetry for all 5 verified projects. | Unified single source of truth for project preview graphics | Verified (TypeScript PASS, Lint PASS) |
| 9 | `components/features/projects/ProjectBentoShowcase.tsx` | Refactor / Migrate | Migrated from importing `ProjectPreviewMockup` to importing `ProjectPreviewGraphic`. | Migrated to `ProjectPreviewGraphic` | Verified (TypeScript PASS, HTTP 200 on `/en/projects` and `/ar/projects`) |
| 10 | `components/reference/ProjectPreviewMockup.tsx` | Delete | With `ProjectBentoShowcase.tsx` migrated and reference columns deleted, `ProjectPreviewMockup.tsx` had zero remaining callers. Removed duplicate 226 lines. | Consolidated into `ProjectPreviewGraphic.tsx` | Verified (TypeScript PASS, Lint PASS) |
| 11 | `components/canonical/CanonicalProjectsBento.tsx` | Refactor / Decouple Data | Decoupled hardcoded project data (`name`, `nameAr`, `stack`, `githubUrl`) by importing `PROJECTS as BASE_PROJECTS` from `@/lib/data/projectsData.ts`. Display metrics (`metric1Label`, `metric1Value`, `accentColor`, `img`) are mapped cleanly. | Single source of truth in `projectsData.ts` | Verified (TypeScript PASS, HTTP 200 on `/en` and `/ar`) |
| 12 | `components/layout/MainWrapper.tsx` | Fix (A11y) | Added `id="main-content"` landmark target. | Enhanced semantic landmark | Verified (TypeScript PASS, Lint PASS) |
| 13 | `app/[locale]/page.tsx` | Fix (A11y Landmark) | Replaced `<main className="w-full">` with `<div className="w-full">`. Resolves the nested `<main>` landmark violation flagged in the audit, ensuring exactly one `<main>` landmark per page. | Valid single `<main>` structure | Verified (TypeScript PASS, Lint PASS) |
| 14 | `components/canonical/CanonicalHero.tsx` | Fix (A11y Semantics) | Added `aria-label="Terminal command input"` to the console prompt input, and `aria-label="Clear terminal output"` to the clear button. | Accessible terminal controls | Verified (TypeScript PASS, Lint PASS) |
| 15 | `Footer Architecture` | Verified Clean Architecture | Confirmed that `Footer.tsx` in `app/[locale]/layout.tsx` returns `null` on the homepage (`isHomePage` guard), and `CanonicalFooter.tsx` renders in `app/[locale]/page.tsx`. Zero duplicate footer rendering occurs across any route. | Clear separation preserved | Verified (HTTP 200 on all routes) |
| 16 | `Supabase & Migrations` | Untouched | All Supabase migration files and schemas (`supabase/migrations/20260917000001_initial_schema.sql`) were preserved with zero alterations. | No changes | Invariant respected |
