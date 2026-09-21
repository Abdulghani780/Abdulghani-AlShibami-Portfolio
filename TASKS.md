# TASKS.md — MASTER ENGINEERING TASK TRACKER

**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System  
**Current Phase:** PHASE 01 — Documentation & Technical Architecture  
**Status Standard:** Never mark COMPLETED unless definition of done is met.

---

## Task Matrix

### PHASE 00 — Discovery
- **ID:** `TSK-001`
- **TITLE:** Environment and System Discovery
- **PHASE:** 00
- **PRIORITY:** P0
- **STATUS:** COMPLETED
- **DESCRIPTION:** Inspect OS, Node, Git, Package Managers, toolsets, and MCPs.
- **DEPENDENCIES:** None
- **FILES:** `DISCOVERY_REPORT.md`
- **DATABASE IMPACT:** None
- **TESTS:** CLI execution verification (`node -v`, `git --version`, `pnpm -v`).
- **DEFINITION OF DONE:** `DISCOVERY_REPORT.md` created, git repository initialized.

---

### PHASE 01 — Documentation Framework
- **ID:** `TSK-010`
- **TITLE:** Root Governance Files Generation
- **PHASE:** 01
- **PRIORITY:** P0
- **STATUS:** COMPLETED
- **DESCRIPTION:** Create root governance files (`README.md`, `AGENTS.md`, `SKILLS.md`, `MCP.md`, `PROMPTS.md`, `ROADMAP.md`, `TASKS.md`, `PROGRESS.md`, `IMPLEMENTATION_LOG.md`, `CHANGELOG.md`).
- **DEPENDENCIES:** TSK-001
- **FILES:** Root directory Markdown files
- **DATABASE IMPACT:** None
- **TESTS:** Verification of file existence and complete content.
- **DEFINITION OF DONE:** All 10 root files created with full enterprise specifications.

- **ID:** `TSK-011`
- **TITLE:** Comprehensive `docs/` Specification System
- **PHASE:** 01
- **PRIORITY:** P0
- **STATUS:** COMPLETED
- **DESCRIPTION:** Create the 37 canonical documentation files in `docs/` (00 to 36).
- **DEPENDENCIES:** TSK-010
- **FILES:** `docs/*`
- **DATABASE IMPACT:** None
- **TESTS:** Integrity check of links and markdown structure.
- **DEFINITION OF DONE:** All 37 documentation files present and populated.

---

### PHASE 02 — Visual Design References & Design Tokens (URGENT DESIGN GATE)
- **ID:** `TSK-025`
- **TITLE:** Visual Design Reference Generation Gate (12/12 Completed)
- **PHASE:** 02
- **PRIORITY:** P0
- **STATUS:** COMPLETED
- **DESCRIPTION:** Generate exactly 12 primary visual references via StitchMCP, store screenshots, HTML blueprints, and meta.json in `design-references/01` to `12`, document in `docs/VISUAL_DESIGN_REFERENCE.md`, and extract tokens into `docs/07_DESIGN_SYSTEM.md`, `docs/06_UI_UX_SPECIFICATION.md`, and `docs/09_PAGE_SPECIFICATIONS.md`.
- **DEPENDENCIES:** TSK-011
- **FILES:** `design-references/*`, `docs/VISUAL_DESIGN_REFERENCE.md`, `docs/07_DESIGN_SYSTEM.md`, `docs/06_UI_UX_SPECIFICATION.md`, `docs/09_PAGE_SPECIFICATIONS.md`
- **DATABASE IMPACT:** None
- **TESTS:** Verification of 36 files across 12 directories, WCAG contrast checks, RTL layout checks, Stitch screen IDs verification.
- **DEFINITION OF DONE:** Exactly 12 references generated, stored, documented, and design tokens extracted.

---

### PHASE 03 — Technical & Product Architecture
- **ID:** `TSK-020`
- **TITLE:** Architecture & Tech Stack Specifications
- **PHASE:** 02
- **PRIORITY:** P0
- **STATUS:** READY
- **DESCRIPTION:** Document Next.js App Router, RSC, Supabase data access layer, and component hierarchy.
- **DEPENDENCIES:** TSK-011
- **FILES:** `docs/04_ARCHITECTURE.md`, `docs/05_TECH_STACK.md`, `docs/27_FILE_STRUCTURE.md`
- **DATABASE IMPACT:** None
- **TESTS:** Architecture review against project non-negotiables.
- **DEFINITION OF DONE:** Clear separation of concerns documented.

---

### PHASE 03 & 04 — UI/UX Design System
- **ID:** `TSK-030`
- **TITLE:** Design Tokens & Dual-Theme Specification
- **PHASE:** 04
- **PRIORITY:** P0
- **STATUS:** COMPLETED
- **DESCRIPTION:** Define Obsidian Black, Royal Gold, White color tokens, typography scales, and WCAG contrast.
- **DEPENDENCIES:** TSK-020
- **FILES:** `docs/06_UI_UX_SPECIFICATION.md`, `docs/07_DESIGN_SYSTEM.md`, `docs/17_THEMING.md`
- **DATABASE IMPACT:** None
- **TESTS:** Contrast ratio calculations for Dark and Light themes.
- **DEFINITION OF DONE:** Comprehensive token tables and component states documented.

---

### PHASE 05 — Database & Data Model
- **ID:** `TSK-050`
- **TITLE:** Database Schema & ERD Architecture
- **PHASE:** 05
- **PRIORITY:** P0
- **STATUS:** READY
- **DESCRIPTION:** Design normalized schema for projects, categories, technologies, profile, experience, contact.
- **DEPENDENCIES:** TSK-020
- **FILES:** `docs/11_DATABASE_SCHEMA.md`, `docs/12_ERD.md`, `supabase/migrations/20260917000001_initial_schema.sql`
- **DATABASE IMPACT:** Initial schema creation with RLS policies and indexes.
- **TESTS:** SQL linting and migration parsing.
- **DEFINITION OF DONE:** SQL migration written with idempotent guards and RLS policies.

---

### PHASE 06 — Application Scaffolding
- **ID:** `TSK-060`
- **TITLE:** Next.js Application Initialization with TypeScript & Tailwind CSS
- **PHASE:** 06
- **PRIORITY:** P0
- **STATUS:** COMPLETED
- **DESCRIPTION:** Scaffold Next.js project with PNPM, configure Tailwind CSS with custom tokens, Lucide icons, and strict TypeScript.
- **DEPENDENCIES:** TSK-030, TSK-050
- **FILES:** `package.json`, `tsconfig.json`, `tailwind.config.ts`, `next.config.ts`, `app/*`
- **DATABASE IMPACT:** None
- **TESTS:** `pnpm build` passes with zero errors.
- **DEFINITION OF DONE:** App builds cleanly and outputs production artifacts.

---

### PHASE 07 — Core UI & Layout System
- **ID:** `TSK-070`
- **TITLE:** Core Navigation, Hero, and Responsive Layout
- **PHASE:** 07
- **PRIORITY:** P0
- **STATUS:** COMPLETED
- **DESCRIPTION:** Build Navbar with mobile drawer, Luxury Hero with profile placeholder, Footer, ThemeToggle, and LanguageSwitcher.
- **DEPENDENCIES:** TSK-060
- **FILES:** `components/layout/*`, `components/ui/*`, `app/[locale]/page.tsx`
- **DATABASE IMPACT:** None
- **TESTS:** Responsive inspection at 375px and 1440px, LTR and RTL validation.
- **DEFINITION OF DONE:** Visually stunning Hero and navigation functioning in both languages and themes.

---

### PHASE 08 — Project Showcase & Case Studies
- **ID:** `TSK-080`
- **TITLE:** Project Catalog & Dynamic Case Study Route
- **PHASE:** 08
- **PRIORITY:** P0
- **STATUS:** COMPLETED
- **DESCRIPTION:** Build ProjectCard, filterable ProjectGrid, search, and dynamic `/projects/[slug]` case study renderer.
- **DEPENDENCIES:** TSK-070
- **FILES:** `components/features/projects/*`, `app/[locale]/projects/[slug]/page.tsx`, `lib/data/*`
- **DATABASE IMPACT:** Connects to DAL with local fallback data.
- **TESTS:** Slug routing, category filtering test, responsive reflow, and dark/light verification.
- **DEFINITION OF DONE:** Catalog and case study routes fully operational, 24 static routes prerendered, and browser QA verified.

---

### PHASE 09 — Interactive Demo System
- **ID:** `TSK-090`
- **TITLE:** Sandboxed Interactive Demo System & Data Integrity Gate
- **PHASE:** 09
- **PRIORITY:** P0
- **STATUS:** COMPLETED
- **DESCRIPTION:** Build `DemoViewer` supporting Real Live, Embedded, and Interactive Web Simulations (for C# / Python desktop apps).
- **DEPENDENCIES:** TSK-080
- **FILES:** `components/features/demos/*`, `app/[locale]/projects/[slug]/demo/page.tsx`, `demos/*`
- **DATABASE IMPACT:** None
- **TESTS:** Simulation state transitions, double-entry ledger balance validation, and sandbox isolation.
- **DEFINITION OF DONE:** Interactive demo loaded with clear simulation labeling, honest data disclosures, and functional UI flows.

---

### PHASE 10 — Internationalization & Theming Final Polish
- **ID:** `TSK-100`
- **TITLE:** Full LTR/RTL and Dark/Light Mode Engine Final Polish
- **PHASE:** 10
- **PRIORITY:** P0
- **STATUS:** COMPLETED
- **DESCRIPTION:** Implement dictionary-based i18n for English and Arabic, CSS logical properties, directional icon mirroring, root html lang/dir synchronization, and flash-free theme provider.
- **DEPENDENCIES:** TSK-070, TSK-090
- **FILES:** `lib/i18n/*`, `lib/theme/*`, `components/layout/LocaleHtmlSync.tsx`, `docs/PHASE_10_I18N_THEME_QA.md`
- **DATABASE IMPACT:** None
- **TESTS:** 8-way matrix verified via Chrome DevTools (EN/AR x LTR/RTL x Dark/Light x Mobile/Desktop); deep route preservation verified (`/projects/yusra/demo`).
- **DEFINITION OF DONE:** Zero layout shift, zero horizontal overflow (`scrollWidth <= clientWidth`), zero FOUC, no fabricated metadata, and 100% bilingual parity.

---

### REAL PROJECT INTEGRATION AUDIT — Read-Only Source Analysis & Planning
- **ID:** `TSK-105`
- **TITLE:** Authentic Projects Deep Audit & Integration Architecture
- **PHASE:** Post-Phase 10 Integration Gate
- **PRIORITY:** P0
- **STATUS:** COMPLETED
- **DESCRIPTION:** Conduct exhaustive read-only inspection of 5 authentic projects (`Cafena`, `Campuse_IT_Tracker`, `Gp`, `MetaAlgorithmLab_Clean_Structure`, `NovaTech`) and personal portrait `Abdulghani Alshibami.jpg`. Verify stack, features, databases, runnability, UI screens, security, and demo feasibility. Create master documentation suite.
- **DEPENDENCIES:** TSK-100
- **FILES:** `docs/REAL_PROJECTS_AUDIT.md`, `docs/REAL_PROJECT_DEMO_PLAN.md`, `docs/REAL_PROJECT_SOURCE_MANIFEST.md`, `docs/GITHUB_PROJECT_MAPPING.md`
- **DATABASE IMPACT:** None. Zero database connections made to original databases.
- **TESTS:** Read-only verification, zero file modifications in `Projects/`, profile image inspection (2300x1824 px).
- **DEFINITION OF DONE:** All 5 projects fully audited, profile image verified, master documentation generated, and Section 28 final audit report delivered.

---

### PHASE 10.1 — Owner Project Catalog Harmonization & Profile Integration
- **ID:** `TSK-106`
- **TITLE:** Synchronize Catalog with 5 Verified Projects & Profile WebP Integration
- **PHASE:** 10.1
- **PRIORITY:** P0
- **STATUS:** COMPLETED
- **DESCRIPTION:** Purge unverified project entries (`yusra`, `auraledger`, `nexora-tech`) from active catalog, metadata, and routing. Add/verify 5 authentic projects (`campus-it-tracker`, `metaalgorithm-lab`, `novatech`, `cafena`, `gp`). Generate optimized WebP profile assets from `Abdulghani Alshibami.jpg` and integrate into Hero. Update demo registry, categories, technologies, and telemetry.
- **DEPENDENCIES:** TSK-105
- **FILES:** `lib/data/projectsData.ts`, `demos/registry/index.ts`, `app/[locale]/page.tsx`, `components/layout/Navbar.tsx`, `components/features/projects/case-study/DemoCalloutBanner.tsx`, `lib/i18n/dictionaries.ts`, `public/images/profile/*.webp`
- **DATABASE IMPACT:** None.
- **TESTS:** `pnpm typecheck` (0 errors), `pnpm lint` (0 errors/warnings), `pnpm build` (30/30 static pages prerendered).
- **DEFINITION OF DONE:** Exactly 5 projects in catalog, zero unverified projects exposed, profile WebP integrated, all static pages generated successfully.

---

### REAL PROJECT DEMO IMPLEMENTATION — Authentic Sandbox Simulations
- **ID:** `TSK-107`
- **TITLE:** Build Authentic Interactive Demos for the 5 Verified Portfolio Projects
- **PHASE:** Real Project Demo Phase
- **PRIORITY:** P0
- **STATUS:** COMPLETED
- **DESCRIPTION:** Build high-fidelity interactive browser simulations for all 5 verified projects (`CafenaSimulation`, `CampusITTrackerSimulation`, `GpSimulation`, `MetaAlgorithmLabSimulation`, `NovaTechSimulation`). Wire into `DEMO_REGISTRY` with `demoType: "interactive_simulation"`. Remove mock simulations (`AuraLedgerSimulation`, `YusraSimulation`). Create `docs/REAL_PROJECT_DEMO_TRACEABILITY.md` mapping all screens and workflows to source evidence in `Projects/`.
- **DEPENDENCIES:** TSK-106
- **FILES:** `demos/simulations/CafenaSimulation.tsx`, `demos/simulations/CampusITTrackerSimulation.tsx`, `demos/simulations/GpSimulation.tsx`, `demos/simulations/MetaAlgorithmLabSimulation.tsx`, `demos/simulations/NovaTechSimulation.tsx`, `demos/registry/index.ts`, `docs/REAL_PROJECT_DEMO_TRACEABILITY.md`, `docs/DEMO_COVERAGE_MATRIX.md`
- **DATABASE IMPACT:** None. Zero external database connections; 100% client-side state.
- **TESTS:** `pnpm typecheck` (0 errors), `pnpm lint` (0 errors), `pnpm build` (30/30 static pages prerendered), responsive & theme verification.
- **DEFINITION OF DONE:** All 5 authentic simulations operational, zero mock records, traceability documented, builds passing cleanly.

### REMOTE REPOSITORY SYNCHRONIZATION + SUPABASE + VERCEL — Production Infrastructure
- **ID:** `TSK-108`
- **TITLE:** Remote Multi-Repository Preparation, Supabase CI/CD, and Vercel Runbooks
- **PHASE:** Remote Synchronization Phase
- **PRIORITY:** P0
- **STATUS:** COMPLETED
- **DESCRIPTION:** Execute controlled 8-gate production rollout: Gate 01 Factual Demo Integrity Audit, Gate 02 Multi-Repository Sanitization & Staging (`Cafena`, `Campuse-IT-Tracker`, `Graduation-Project-Management-Portal`, `MetaAlgorithmLab`, `NovaTech`), Gate 03 GitHub Remote Configuration under `@Abdulghani780`, Gate 04 Supabase Portfolio Database & RLS architecture, Gate 05 GitHub Actions CI & Database CI (`database.yml`), Gate 06/07 Vercel Deployment Runbook, Gate 08 Security Release Audit.
- **DEPENDENCIES:** TSK-107
- **FILES:** `docs/FINAL_DEMO_INTEGRITY_AUDIT.md`, `docs/SUPABASE_DEPLOYMENT.md`, `docs/VERCEL_DEPLOYMENT.md`, `docs/DEPLOYMENT_RUNBOOK.md`, `docs/SECURITY_RELEASE_AUDIT.md`, `docs/REMOTE_REPOSITORY_SETUP.md`, `docs/PRODUCTION_READY.md`, `docs/GITHUB_PROJECT_MAPPING.md`, `README.md`, `.github/workflows/database.yml`, `lib/data/projectsData.ts`, `demos/registry/index.ts`
- **DATABASE IMPACT:** Supabase initial schema migration validated with RLS policies across all 8 tables.
- **TESTS:** `pnpm typecheck` (0 errors), `pnpm lint` (0 errors), `pnpm build` (30/30 static pages), security secret scan passed.
- **DEFINITION OF DONE:** All 5 standalone project repositories prepared, documented, and sanitized in staging; portfolio connected to remote; documentation and runbooks complete; builds and tests passing.

---

### PHASE 11 — Contact System & Security
- **ID:** `TSK-110`
- **TITLE:** Contact Form with Supabase Persistence & Security Sanitization
- **PHASE:** 11
- **PRIORITY:** P0
- **STATUS:** IN_PROGRESS
- **DESCRIPTION:** Connected ContactForm to Supabase `contact_messages` table with zero-failure local fallback, sanitization, loading states, and verified feedback.
- **DEPENDENCIES:** TSK-070
- **FILES:** `components/features/ContactForm.tsx`, `lib/supabase/client.ts`, `lib/supabase/server.ts`
- **DATABASE IMPACT:** Direct persistence in `contact_messages` with RLS protection.
- **TESTS:** Submission success state, offline fallback graceful handling, TypeScript validation, linting.
- **DEFINITION OF DONE:** Form safely processes submissions with accessible feedback states and cloud persistence.

---

### PHASE 12 — Testing & QA
- **ID:** `TSK-120`
- **TITLE:** Automated Testing & QA Suite
- **PHASE:** 12
- **PRIORITY:** P1
- **STATUS:** READY
- **DESCRIPTION:** Setup Vitest / Testing Library, write component and utility tests.
- **DEPENDENCIES:** TSK-070 through TSK-110
- **FILES:** `tests/*`, `vitest.config.ts`
- **DATABASE IMPACT:** None
- **TESTS:** Run all unit and integration tests.
- **DEFINITION OF DONE:** All test suites pass.

---

### PHASE 13 — Security Audit
- **ID:** `TSK-130`
- **TITLE:** Comprehensive Security Audit & Header Hardening
- **PHASE:** 13
- **PRIORITY:** P0
- **STATUS:** READY
- **DESCRIPTION:** Add security headers (CSP, HSTS, X-Frame-Options), audit secrets, verify RLS.
- **DEPENDENCIES:** TSK-110
- **FILES:** `SECURITY_AUDIT.md`, `next.config.ts`
- **DATABASE IMPACT:** None
- **TESTS:** Security scan and header verification.
- **DEFINITION OF DONE:** `SECURITY_AUDIT.md` passed with 0 high/critical issues.

---

### PHASE 14 — Performance Optimization
- **ID:** `TSK-140`
- **TITLE:** Core Web Vitals & Asset Optimization
- **PHASE:** 14
- **PRIORITY:** P1
- **STATUS:** READY
- **DESCRIPTION:** Optimize fonts (next/font), image formats (WebP/AVIF), and lazy loading.
- **DEPENDENCIES:** TSK-070 through TSK-090
- **FILES:** `docs/20_PERFORMANCE.md`
- **DATABASE IMPACT:** None
- **TESTS:** Chrome DevTools performance trace.
- **DEFINITION OF DONE:** LCP < 2.0s, Lighthouse score >= 90.

---

### PHASE 15 — SEO & Social Metadata
- **ID:** `TSK-150`
- **TITLE:** SEO, Dynamic Open Graph, and Structured Data
- **PHASE:** 15
- **PRIORITY:** P1
- **STATUS:** READY
- **DESCRIPTION:** Configure `generateMetadata`, `sitemap.ts`, `robots.ts`, and JSON-LD schema.
- **DEPENDENCIES:** TSK-080
- **FILES:** `app/sitemap.ts`, `app/robots.ts`, `docs/21_SEO.md`
- **DATABASE IMPACT:** None
- **TESTS:** Validate metadata tags and sitemap structure.
- **DEFINITION OF DONE:** Search engine crawler ready with dual-language indexing.

---

### PHASE 16 — CI/CD Automation
- **ID:** `TSK-160`
- **TITLE:** GitHub Actions CI/CD Workflows
- **PHASE:** 16
- **PRIORITY:** P1
- **STATUS:** READY
- **DESCRIPTION:** Build automated workflow for linting, typechecking, testing, and building.
- **DEPENDENCIES:** TSK-120
- **FILES:** `.github/workflows/ci.yml`
- **DATABASE IMPACT:** None
- **TESTS:** Workflow syntax validation.
- **DEFINITION OF DONE:** CI workflow file committed and valid.

---

### PHASE 17 & 18 — Deployment Architecture
- **ID:** `TSK-170`
- **TITLE:** Supabase & Vercel Deployment Configuration
- **PHASE:** 17, 18
- **PRIORITY:** P0
- **STATUS:** READY
- **DESCRIPTION:** Configure `vercel.json`, migration runbooks, and environment variable documentation.
- **DEPENDENCIES:** TSK-060
- **FILES:** `vercel.json`, `docs/23_DEPLOYMENT.md`, `docs/25_ENVIRONMENT_VARIABLES.md`
- **DATABASE IMPACT:** None
- **TESTS:** Local production build simulation (`pnpm build && pnpm start`).
- **DEFINITION OF DONE:** Production bundle ready for zero-downtime deployment.

---

### PHASE 19 — Production Readiness Verification
- **ID:** `TSK-190`
- **TITLE:** Production Readiness Audit & Delivery
- **PHASE:** 19
- **PRIORITY:** P0
- **STATUS:** READY
- **DESCRIPTION:** Execute full self-audit across all 24 criteria, compile `FINAL_AUDIT.md` and `PRODUCTION_READY.md`.
- **DEPENDENCIES:** All tasks
- **FILES:** `FINAL_AUDIT.md`, `PRODUCTION_READY.md`
- **DATABASE IMPACT:** None
- **TESTS:** Full end-to-end verification.
- **DEFINITION OF DONE:** System declared Production Ready with documented proof.

---

### PHASE 16 (REVISION) — Canonical Reference Frontend Replacement
- **ID:** `TSK-165`
- **TITLE:** Canonical Reference Frontend Replacement from 4 Approved Images
- **PHASE:** 16
- **PRIORITY:** P0
- **STATUS:** COMPLETED
- **DESCRIPTION:** Fully replace the frontend presentation from the 4 approved visual references: Hero Command Center (Reference 1), Live Demo Studio (Reference 2), Desktop OS Workstation Sandbox with traffic lights & terminal drawer (Reference 3), and Flagship Projects Showcase Bento Grid (Reference 4).
- **DEPENDENCIES:** TSK-080, TSK-090
- **FILES:** `app/globals.css`, `tailwind.config.ts`, `components/features/projects/ProjectBentoShowcase.tsx`, `components/features/demos/LiveDemoStudio.tsx`, `demos/shared/WorkstationConsole.tsx`, `demos/shared/DemoShell.tsx`, `demos/shared/DemoStatusBar.tsx`, `components/reference/ProjectPreviewMockup.tsx`
- **DATABASE IMPACT:** None (Supabase schema and data 100% untouched).
- **TESTS:** `pnpm tsc --noEmit`, `pnpm lint`, `pnpm build` (30/30 static routes), and visual browser inspection across 8-way matrix.
- **DEFINITION OF DONE:** All 4 references fully realized, 0 errors, branch `redesign/final-reference-frontend` committed.

---

### PHASE 19 — Titanium Slate & Electric Palette Visual Redesign (Option 1) with 3D Concept Renders
- **ID:** `TSK-170`
- **TITLE:** Titanium Slate & Electric Palette Visual Redesign with 3D Concept Renders
- **PHASE:** 19
- **PRIORITY:** P0
- **STATUS:** COMPLETED
- **DESCRIPTION:** Implement approved Option 1 visual design system transitioning away from pitch black terminal to modern Titanium Slate (`#0B1120`, `#0F172A`) with Electric Indigo (`#6366F1`), Azure Cyan (`#06B6D4`), and Emerald (`#10B981`) accents. Generate and install 6 high-resolution 3D concept renders, wire them to Bento grid and CaseStudyHero, and verify clean production build.
- **DEPENDENCIES:** TSK-165
- **FILES:** `tailwind.config.ts`, `app/globals.css`, `app/[locale]/page.tsx`, `components/canonical/CanonicalHero.tsx`, `components/canonical/CanonicalProjectsBento.tsx`, `components/canonical/CanonicalDemoStudio.tsx`, `components/canonical/CanonicalDesktopSimulator.tsx`, `components/features/projects/case-study/CaseStudyHero.tsx`, `public/images/**`
- **DATABASE IMPACT:** None (Supabase schema and data 100% untouched).
- **TESTS:** `pnpm tsc --noEmit` (0 errors), `pnpm lint` (0 errors), `pnpm build` (30/30 static pages prerendered).
- **DEFINITION OF DONE:** Design tokens updated, all 6 3D assets wired, 0 errors, production build verified.

---

### PHASE 20 — Global Design Token Harmonization & Catalog 3D Bento Integration
- **ID:** `TSK-171`
- **TITLE:** Global Design Token Harmonization & Catalog 3D Bento Integration
- **PHASE:** 20
- **PRIORITY:** P0
- **STATUS:** COMPLETED
- **DESCRIPTION:** Harmonize all remaining UI components (Navbar, Footers, ContactForm, DemoCalloutBanner, ProjectCard, ProjectFilters, TechnologyBadge, ProjectPreviewGraphic) to the Titanium Slate & Electric Indigo/Cyan theme. Wire 3D Bento grid into ProjectCatalogView and safely remove duplicate ProjectBentoShowcase.
- **DEPENDENCIES:** TSK-170
- **FILES:** `components/layout/Navbar.tsx`, `components/layout/Footer.tsx`, `components/canonical/CanonicalFooter.tsx`, `components/features/ContactForm.tsx`, `components/features/projects/ProjectCard.tsx`, `components/features/projects/ProjectCatalogView.tsx`, `components/features/projects/ProjectFilters.tsx`, `components/features/projects/ProjectPreviewGraphic.tsx`, `components/features/projects/TechnologyBadge.tsx`, `components/features/projects/case-study/DemoCalloutBanner.tsx`, `components/features/demos/LiveDemoStudio.tsx`
- **DATABASE IMPACT:** None.
- **TESTS:** `pnpm build` passes with 30/30 static pages prerendered.
- **DEFINITION OF DONE:** Complete color token consistency across all pages, 0 duplicate components, 0 build errors.

---

### PHASE 21 — Functional Stabilization, Verified Academic Profile & Gemini AI Integration
- **ID:** `TSK-180`
- **TITLE:** Functional Audit Bug Fixes & Metadata Generation
- **PHASE:** 21
- **PRIORITY:** P0
- **STATUS:** COMPLETED
- **DESCRIPTION:** Fix P0/P1 defects from `docs/qa/FUNCTIONAL_AUDIT_REPORT.md` (contact info drift, missing metadata assets, residual mint hexes, untranslated Arabic strings in Section 04 Demo Studio). Generate `public/favicon.ico`, `app/robots.ts`, and `app/sitemap.ts`.
- **DEPENDENCIES:** TSK-171
- **FILES:** `components/canonical/CanonicalFooter.tsx`, `components/layout/Footer.tsx`, `components/canonical/CanonicalDemoStudio.tsx`, `app/[locale]/showcase/page.tsx`, `public/favicon.ico`, `app/robots.ts`, `app/sitemap.ts`
- **TESTS:** All routes tested with 200 OK.

- **ID:** `TSK-181`
- **TITLE:** Verified Academic Profile, Credentials, Awards & CV Integration
- **PHASE:** 21
- **PRIORITY:** P0
- **STATUS:** COMPLETED
- **DESCRIPTION:** Establish decoupled data models in `lib/data/` for authentic profile, credentials, and skills. Build Section 05 Academic Credentials & Honors (`AcademicProfileSection.tsx`) showcasing 3rd-Year IT status, 2nd Place UMS Award, UMS/YALI trainings, IBCT TOT Certificate with interactive lightbox viewer (`CertificateViewer.tsx`, `CertificateModal.tsx`), and official PDF CV (`public/docs/Abdulghani_Al-Shibami_CV.pdf`) with View and Download actions.
- **DEPENDENCIES:** TSK-180
- **FILES:** `lib/data/profile.ts`, `lib/data/credentials.ts`, `lib/data/skills.ts`, `components/features/credentials/*`, `public/images/credentials/*`, `public/docs/*`
- **TESTS:** Direct download, view, and modal tests verified.

- **ID:** `TSK-182`
- **TITLE:** Server-Side Gemini AI Concierge ("Abdulghani AI") & Floating UI
- **PHASE:** 21
- **PRIORITY:** P0
- **STATUS:** COMPLETED
- **DESCRIPTION:** Implement server-side route `app/api/ai/chat/route.ts` powered by `@google/genai` (v2.23.0) with strictly server-held `GEMINI_API_KEY`, Zod schema validation, sliding-window IP rate limiting, factual grounding system prompt (`lib/ai/knowledge.ts`), and deterministic offline fallback. Mount floating client concierge (`AbdulghaniAIModal.tsx`) with bilingual chips, minimize, clear, and error handling.
- **DEPENDENCIES:** TSK-181
- **FILES:** `app/api/ai/chat/route.ts`, `lib/ai/knowledge.ts`, `components/features/ai/AbdulghaniAIModal.tsx`, `app/[locale]/layout.tsx`, `.env.example`
- **TESTS:** Verified 200 OK for grounded English and Arabic prompts, 400 for empty payloads, and full Next.js build.

---

### PHASE 23 — Authentic Credentials & Certifications Integration
- **ID:** `TSK-190`
- **TITLE:** Authentic Credentials Archive, Interactive Zoom Viewer & Dedicated Catalog
- **PHASE:** 23
- **PRIORITY:** P0
- **STATUS:** COMPLETED
- **DESCRIPTION:** Integrate all 5 authentic certificate images (IBCT Novice Trainer TOT, Yemen AI Summit 2026, UMS AI Web Development Workshop, UMS Innovation Award, YALI English Language Proficiency) without website redesign. Create high-resolution web assets under `public/images/certificates/`, establish typed single source of truth in `lib/data/credentials.ts`, implement accessible `CertificateModal.tsx` with zoom controls (+25%, -25%, reset), aspect ratio preservation (`object-fit: contain`), Escape key dismiss, and separate metadata drawer. Build Section 05 showcase on homepage and dedicated route `/[locale]/credentials` with category filters and SSG. Ground Gemini AI assistant in all 5 verified certificates.
- **DEPENDENCIES:** TSK-181, TSK-182
- **FILES:** `lib/data/credentials.ts`, `components/features/credentials/*`, `app/[locale]/credentials/page.tsx`, `app/sitemap.ts`, `lib/ai/knowledge.ts`, `app/api/ai/chat/route.ts`, `docs/credentials/CREDENTIALS_INTEGRATION_REPORT.md`
- **TESTS:** Browser automation (`credentials_qa_1789889465165.webp`), `pnpm tsc --noEmit` (0 errors), `pnpm lint` (0 errors), `pnpm build` (36 static/dynamic routes prerendered).
- **DEFINITION OF DONE:** All 5 authentic certificates integrated with zero fabrication, zoom viewer fully functional, dedicated catalog route live, AI assistant answers verified, build green.

---

### PHASE 24 — Comprehensive Audit Remediation, Harmonization & Polish
- **ID:** `TSK-200`
- **TITLE:** Genuine Dual-Theme Light Mode System & Token Harmonization
- **PHASE:** 24
- **PRIORITY:** P0
- **STATUS:** COMPLETED
- **DESCRIPTION:** Implement semantic dual-theme tokens for porcelain light mode surfaces and crisp typography without altering the approved dark mode palette. Refactor all components bypassing tokens (`CertificateModal`, `AbdulghaniAIModal`, `CaseStudyHero`, `ProjectCard`, `ProjectPreviewGraphic`, `LiveDemoStudio`, `CredentialsCatalogView`). Purge obsolete `#00FF9D` neon mint in favor of emerald `#10B981`.
- **DEPENDENCIES:** TSK-190
- **FILES:** `components/features/*`, `components/canonical/*`, `demos/shared/*`, `app/globals.css`
- **TESTS:** Verified in Chrome DevTools across Light and Dark themes.

- **ID:** `TSK-201`
- **TITLE:** Server-Side Arabic HTML Language & Direction Synchronization
- **PHASE:** 24
- **PRIORITY:** P0
- **STATUS:** COMPLETED
- **DESCRIPTION:** Configure Next.js middleware and root layout to emit `<html lang="ar" dir="rtl">` on `/ar` and `<html lang="en" dir="ltr">` on `/en` directly in the server rendered output.
- **DEPENDENCIES:** TSK-200
- **FILES:** `middleware.ts`, `app/layout.tsx`
- **TESTS:** Verified via curl and server stream inspection.

- **ID:** `TSK-202`
- **TITLE:** OpenGraph, Canonical URLs, Showcase Semantics & Accessibility
- **PHASE:** 24
- **PRIORITY:** P1
- **STATUS:** COMPLETED
- **DESCRIPTION:** Add complete `generateMetadata` (canonical self-references, language alternates, OpenGraph 1200x630 card, Twitter summary card) across all core pages. Add semantic `<h1 className="sr-only">` and top breadcrumbs to `/showcase`. Apply `motion-safe:` to pulsing animations.
- **DEPENDENCIES:** TSK-201
- **FILES:** `app/[locale]/page.tsx`, `app/[locale]/projects/page.tsx`, `app/[locale]/credentials/page.tsx`, `app/[locale]/showcase/page.tsx`
- **TESTS:** Evaluated metadata output in production build and browser.

- **ID:** `TSK-203`
- **TITLE:** Contact Input Validation & Remediation Reporting
- **PHASE:** 24
- **PRIORITY:** P2
- **STATUS:** COMPLETED
- **DESCRIPTION:** Implement client-side schema validation (RFC5322 regex, character length bounds, XSS sanitization) on `ContactForm.tsx`. Generate master report `docs/qa/REMEDIATION_REPORT.md` answering all 22 required items. Run end-to-end browser QA.
- **DEPENDENCIES:** TSK-202
- **FILES:** `components/features/ContactForm.tsx`, `docs/qa/REMEDIATION_REPORT.md`
- **TESTS:** `pnpm tsc --noEmit` (0 errors), `pnpm lint` (0 errors), `pnpm build` (36 routes compiled, exit code 0).





