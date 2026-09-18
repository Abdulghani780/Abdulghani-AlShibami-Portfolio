# CHANGELOG.md — PROJECT VERSION & RELEASE HISTORY

All notable changes to this project will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

---

## [0.6.0] - 2026-09-18

### Added
- **Internationalization & Theming Final Polish (Phase 10):**
  - Complete bi-directional parity between English (`en`) and Arabic (`ar`) with zero text leaks in kickers, badges, or empty states.
  - Document-level synchronization of `<html lang="..." dir="...">` via `LocaleHtmlSync` and inline script for zero-flash hydration.
  - Deep route preservation in `LanguageSwitcher`, ensuring transitions between English and Arabic retain the active nested route (e.g. `/en/projects/yusra/demo` ↔ `/ar/projects/yusra/demo`).
  - Directional icon mirroring in RTL for back, forward, and workflow sequences with invariant symbol preservation.
  - Created `docs/PHASE_10_I18N_THEME_QA.md` documenting full 8-way matrix verification.

### Changed & Sanitized
- **Fabricated Metadata Cleaned:** Permanently removed GPS coordinates (`LAT: 24.7136° N, LON: 46.6753° E`), arbitrary hardware tags (`SYS_REV: v2.4.0 // ARCH: x64_AVX512`), and arbitrary revision marks (`ARCH_INDEX: SYS-2025-V2`).
- **Verified Flagship Demonstration:** Verified YUSRA C# WinForms enterprise ledger as genuine owner project before connecting to primary homepage CTA.
- **Footer Cleaned:** Replaced pseudo-technical version tags with clean colophon (`Next.js 15 // Tailwind CSS`).

### Verified
- **TypeScript:** 0 errors (`pnpm typecheck`).
- **ESLint:** 0 warnings or errors (`pnpm lint`).
- **Production Build:** 30/30 static pages prerendered (`pnpm build`).
- **Visual Browser QA:** Verified all 8 matrix combinations, deep route switching, and zero horizontal overflow on mobile 393px with recorded WebP artifact (`phase10_qa_matrix_1789755443787.webp`).

---

## [0.5.0] - 2026-09-18

### Added
- **Data Integrity Gate Completed:** Audited and classified all project data into canonical tiers (`VERIFIED_OWNER_DATA`, `USER_PROVIDED_PLACEHOLDER`, `UNVERIFIED_AI_GENERATED_CONTENT`). Created `docs/PROJECT_DATA_AUDIT.md`.
- **Verified Owner Projects:** Realigned primary catalog around genuine owner systems: **YUSRA** (C# WinForms / SQL Server enterprise ledger), **Campus IT Infrastructure Tracker**, **MetaAlgorithm Lab**, and **Nexora Tech**.
- **Fabricated Metrics Neutralization:** Permanently neutralized unverified claims (`145k tx/s`, `0.8ms p99`, `99.999% SLA`, `500,000 txns`), reframing them as honest demonstration targets and `[VERIFIED METRIC REQUIRED]`.
- **Roadmap Phase Numbering Harmonization:** Reconciled phase numbering to the canonical 21-phase master lifecycle (`Phase 09: Interactive Demo System & Sandboxes`), recorded in `docs/34_DECISION_LOG.md` (ADR-005) and synchronized across all governance documents.
- **Scalable Demo Registry:** Built `demos/registry/index.ts` mapping project slugs to canonical demo modes and simulation components.
- **Unified `DemoViewer` Coordinator:** Created `components/features/demos/DemoViewer.tsx` handling all 6 canonical demo modes (`interactive_simulation`, `real_live`, `embedded`, `video`, `repo`, `none`).
- **Reusable Simulation Shell Suite:** Built `DemoShell.tsx`, `DemoDisclosure.tsx`, `DemoToolbar.tsx`, and `DemoStatusBar.tsx`.
- **Interactive Simulation Sandboxes:**
  - **`YusraSimulation.tsx`:** High-fidelity C# WinForms enterprise accounting simulation with real-time double-entry balance validation and customer invoice generation.
  - **`CampusITTrackerSimulation.tsx`:** 3-tier campus network topology monitor with dynamic ICMP latency ping simulation and incident ticketing desk.
  - **`MetaAlgorithmLabSimulation.tsx`:** Real client-side algorithmic benchmark runner and step-by-step sorting visualizer.
  - **`AuraLedgerSimulation.tsx`:** Refactored 5-node distributed Raft consensus state machine simulator with chaos network partition controls.
- **Dynamic Demo Route:** Created `app/[locale]/projects/[slug]/demo/page.tsx` with dynamic metadata and static prerendering for both English and Arabic.
- **Security Audit:** Created `docs/DEMO_SECURITY_REVIEW.md` and `docs/DEMO_COVERAGE_MATRIX.md`.

### Verified
- TypeScript compilation: 0 errors (`pnpm typecheck`).
- ESLint: 0 warnings or errors (`pnpm lint`).
- Static Generation: 30/30 static pages prerendered (`pnpm build`).
- Full Visual Browser QA: Verified YUSRA (Dark, Light, Arabic RTL, Mobile 393px), Campus IT Tracker, MetaAlgorithm Lab, and AuraLedger via Chrome DevTools subagent with recorded WebP session artifact (`demo_system_qa_1789680017131.webp`).


### Added
- **Security & Data Sanitization:** Permanently removed fabricated PGP fingerprint (`0x8F94D29E`) and geographic coordinates (`LAT: 24.7136° N, LON: 46.6753° E`). Replaced with safe system versioning tags (`SYS_REV: v2.4.0`, `ASPECT_RATIO: 1:1`).
- **Decoupled Data Access Layer:** Built `ProjectRepository` in `lib/services/projectRepository.ts` supporting 6 normalized engineering systems across 5 technical categories with local fallback.
- **Unified Homepage Feed:** Connected Homepage Featured Projects directly to `projectRepository.getFeaturedProjects()`.
- **Project Catalog Route (`/[locale]/projects`):** Built catalog derived from References 05, 06, and 12 with category filter pills, keyword search, featured spotlight card, and 3-column responsive systems grid.
- **Modular Case Study Engine (`/[locale]/projects/[slug]`):** Built 7 reusable monograph components (`CaseStudyHero`, `CaseStudyMetrics`, `ProblemSolutionSection`, `ArchitectureTopology`, `SubsystemsGrid`, `ChallengesResultsSection`, `DemoCalloutBanner`) with auto-generated localized SEO metadata and 404 state machine handling.
- **Component Documentation:** Documented all 11 new project and case study components in `docs/10_COMPONENT_ARCHITECTURE.md`.

### Verified
- TypeScript compilation: 0 errors (`pnpm typecheck`).
- ESLint: 0 warnings or errors (`pnpm lint`).
- Static Generation: 24/24 static pages prerendered (`pnpm build`).
- Full Visual Browser QA: Verified Dark/Light, English/Arabic RTL, and Mobile viewports via Chrome DevTools subagent with recorded WebP session artifact.

---

## [0.3.0] - 2026-09-17

### Added
- **Design System Implementation:** Configured exact design tokens in `tailwind.config.ts` and `app/globals.css` with deep Obsidian canvas, surface elevations, Royal Gold accents, and CSS logical properties.
- **Zero-Flash Theming Engine:** Built `ThemeProvider.tsx` supporting Dark and Light modes with localStorage persistence and inline hydration guard.
- **Bilingual i18n & RTL Foundation:** Built English and Arabic dictionaries with automatic layout direction switching (`dir="rtl"` / `dir="ltr"`).
- **Core Atomic UI Components:** Created `Button`, `Badge` (with pulsing live status indicators), `Card` (with architectural gold corner brackets), `Container`, and `SectionHeading`.
- **Global App Shell:** Implemented glassmorphic `Navbar` with mobile slide-out drawer, architectural colophon `Footer` with security fingerprint and honest simulation disclosure, `ThemeToggle`, and `LanguageSwitcher`.
- **Complete Homepage:** Implemented full homepage (`app/[locale]/page.tsx`) with status ticker, un-fabricated `[PROFILE_IMAGE]` placeholder, telemetry HUD, simulation disclosure banner, featured projects, core competencies, and interactive contact inquiry island.
- **Interactive Consensus Simulation Sandbox:** Implemented `app/[locale]/projects/auraledger/demo/page.tsx` reproducing high-throughput Raft consensus with cluster fault injection, split-brain partitioning, and REPL terminal.
- **Internal Component Showcase:** Added `/en/showcase` and `/ar/showcase` checkpoint routes.
- **Component Architecture Catalog:** Created `docs/10_COMPONENT_ARCHITECTURE.md`.

### Verified
- Zero TypeScript errors (`pnpm typecheck`).
- Zero ESLint errors or warnings (`pnpm lint`).
- 100% successful static production build (`pnpm build` prerendered all 10 routes).
- Full browser visual validation via Chrome DevTools / browser subagent across Dark, Light, English, Arabic RTL, and Mobile 393px viewports.

---

## [0.2.0] - 2026-09-17

### Added
- **Visual Design Reference System:** Completed urgent design gate by generating exactly 12 primary visual references via StitchMCP project `1524242436626085687`.
- Stored all 12 reference screenshots, HTML code blueprints, and metadata in `design-references/01` through `12`.
- Created `docs/VISUAL_DESIGN_REFERENCE.md` with complete technical documentation for all 12 references.
- Extracted and codified design tokens into `docs/07_DESIGN_SYSTEM.md`.
- Updated `docs/06_UI_UX_SPECIFICATION.md` and `docs/09_PAGE_SPECIFICATIONS.md`.
- Standardized `[PROFILE_IMAGE]` placeholder and simulation disclosure standards.

---

## [0.1.0] - 2026-09-17

### Added
- Initialized local Git repository for the portfolio platform.
- Created `DISCOVERY_REPORT.md` documenting host OS, Node.js v24.15.0, PNPM 10.33.3, Git 2.54.0, and MCP availability.
- Created `AGENTS.md` specifying autonomous engineering principles, code conventions, security protocols, and 10-step operational loop.
- Created `SKILLS.md` defining 19 modular engineering skills across UI design, Next.js, Supabase, performance, accessibility, and testing.
- Created `MCP.md` establishing tool profiles and execution workflows for StitchMCP, chrome-devtools-mcp, and postman-mcp-server.
- Created `PROMPTS.md` containing operational prompt templates for 10 development stages.
- Created `ROADMAP.md` mapping out all 21 development phases from Discovery to Production Readiness.
- Created `TASKS.md` with granular engineering tasks, definitions of done, and dependencies.
- Created `PROGRESS.md` for live progress tracking.
- Created `IMPLEMENTATION_LOG.md` for historical append-only engineering records.

### Changed
- None (Initial greenfield setup).

### Fixed
- None.

### Security
- Enforced strict secret prevention guidelines in `AGENTS.md` and `DISCOVERY_REPORT.md` prohibiting commit of `.env`, service role keys, and private credentials.

### Database
- Schema design initiated (Phase 05 scheduled).
