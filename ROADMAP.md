# ROADMAP.md — MASTER ENGINEERING ROADMAP

**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System  
**Owner:** عبدالغني الشبامي | Abdulghani Al-Shibami  
**Lifecycle:** Production-Grade Engineering Lifecycle (Phases 00 to 20)  

---

## Roadmap Overview

```text
[Phase 00: Discovery]       ──► COMPLETED
[Phase 01: Requirements]    ──► COMPLETED
[Phase 02: Architecture]    ──► COMPLETED
[Phase 03: UI/UX & Design]  ──► COMPLETED
[Phase 04: Design System]   ──► COMPLETED
[Phase 05: Database & ERD]  ──► COMPLETED
[Phase 06: App Foundation]  ──► COMPLETED
[Phase 07: Core UI & Layout]──► COMPLETED
[Phase 08: Project System]  ──► COMPLETED (5 Real Projects)
[Phase 09: Demo System]     ──► COMPLETED (5 Workstation Simulators)
[Phase 10: i18n & Theming]  ──► COMPLETED (Bilingual LTR/RTL)
[Phase 11: Multi-Repo Infra]──► COMPLETED
[Phase 16: Canonical Redesign]─► COMPLETED (4 Approved Visual References)
[Phase 17: Production Review]─► READY (Awaiting Owner Review)
```

---

### PHASE 00 — Discovery & Environment Assessment
- **Goal:** Audit host OS, package managers, tools, MCPs, and project boundaries.
- **Deliverables:** `DISCOVERY_REPORT.md`, Git repo initialization.
- **Dependencies:** None.
- **Validation:** Tool verification commands executed.
- **Status:** COMPLETED.

---

### PHASE 01 — Requirements & Documentation Framework
- **Goal:** Establish the complete project documentation framework under `docs/` (files 00 to 36) and root control files.
- **Deliverables:** 37 documentation files in `docs/` and root governance files (`AGENTS.md`, `SKILLS.md`, `MCP.md`, `PROMPTS.md`, `ROADMAP.md`, `TASKS.md`, `PROGRESS.md`, `IMPLEMENTATION_LOG.md`, `CHANGELOG.md`).
- **Dependencies:** Phase 00.
- **Validation:** All specified files exist and are fully populated.
- **Status:** IN PROGRESS.

---

### PHASE 02 — Product & Technical Architecture
- **Goal:** Define Next.js App Router, TypeScript boundaries, Supabase DAL, and state systems.
- **Deliverables:** `04_ARCHITECTURE.md`, `05_TECH_STACK.md`, `27_FILE_STRUCTURE.md`.
- **Dependencies:** Phase 01.
- **Validation:** Architecture adheres to decoupled server/client boundary.
- **Status:** IN PROGRESS.

---

### PHASE 03 — UI/UX Specification & Wireframing
- **Goal:** Establish visual hierarchy, typography, user flows, and mobile behavior.
- **Deliverables:** `06_UI_UX_SPECIFICATION.md`, `08_INFORMATION_ARCHITECTURE.md`, `09_PAGE_SPECIFICATIONS.md`.
- **Dependencies:** Phase 02.
- **Validation:** Visual balance for both Dark (Obsidian/Gold) and Light (Porcelain/Slate/Gold) documented.
- **Status:** READY.

---

### PHASE 04 — Design System & Tokens
- **Goal:** Formalize color tokens, typography scales, spacing, and atomic components.
- **Deliverables:** `07_DESIGN_SYSTEM.md`, CSS variable definitions.
- **Dependencies:** Phase 03.
- **Validation:** WCAG AA contrast ratios calculated and documented.
- **Status:** READY.

---

### PHASE 05 — Database Schema & ERD
- **Goal:** Design PostgreSQL tables, relationships, indexes, migrations, and RLS policies.
- **Deliverables:** `11_DATABASE_SCHEMA.md`, `12_ERD.md`, `supabase/migrations/20260917000001_initial_schema.sql`.
- **Dependencies:** Phase 02.
- **Validation:** PostgreSQL syntax validated, foreign keys indexed, RLS enabled.
- **Status:** READY.

---

### PHASE 06 — Application Foundation & Scaffolding
- **Goal:** Initialize Next.js TypeScript project, configure Tailwind CSS, paths, and build scripts.
- **Deliverables:** `package.json`, `tsconfig.json`, `tailwind.config.ts`, `next.config.ts`.
- **Dependencies:** Phase 04, Phase 05.
- **Validation:** `pnpm build` succeeds with zero errors.
- **Status:** READY.

---

### PHASE 07 — Core UI & Layout System
- **Goal:** Build Navbar, Footer, Hero, LanguageSwitcher, ThemeToggle, and responsive containers.
- **Deliverables:** `components/layout/*`, `app/[locale]/layout.tsx`.
- **Dependencies:** Phase 06.
- **Validation:** Verified on Desktop (1440px) and Mobile (375px) in both Dark and Light themes.
- **Status:** READY.

---

### PHASE 08 — Project Management & Showcase System
- **Goal:** Build project catalog, category filtering, search, and dynamic `/projects/[slug]` case study pages.
- **Deliverables:** `components/features/projects/*`, `app/[locale]/projects/[slug]/page.tsx`.
- **Dependencies:** Phase 07.
- **Validation:** Dynamic slug routing renders rich case studies with both EN and AR translations.
- **Status:** READY.

---

### PHASE 09 — Interactive Demo System
- **Goal:** Build `DemoViewer` supporting Real Live, Embedded, Simulation, Video, and Repo modes.
- **Deliverables:** `15_INTERACTIVE_DEMO_SYSTEM.md`, `components/features/demos/*`, `/projects/[slug]/demo`.
- **Dependencies:** Phase 08.
- **Validation:** Desktop application simulations run smoothly with mock data and zero DOM leaks.
- **Status:** READY.

---

### PHASE 10 — Internationalization & Theming Engine
- **Goal:** Perfect LTR/RTL bidirectional rendering, font switching (Outfit / Cairo), and theme persistence.
- **Deliverables:** `lib/i18n/*`, `lib/theme/*`, `16_I18N.md`, `17_THEMING.md`.
- **Dependencies:** Phase 07.
- **Validation:** Zero layout breakages when switching between English (LTR) and Arabic (RTL).
- **Status:** COMPLETED.

---

### PHASE 10.1 — Owner Project Catalog Harmonization & Profile Integration
- **Goal:** Synchronize the portfolio catalog strictly with the 5 authentic projects (`campus-it-tracker`, `metaalgorithm-lab`, `novatech`, `cafena`, `gp`), purge all unverified entries (`yusra`, `auraledger`, `nexora-tech`), and integrate optimized web variants of the genuine profile portrait `Abdulghani Alshibami.jpg`.
- **Deliverables:** `lib/data/projectsData.ts`, `demos/registry/index.ts`, `public/images/profile/*.webp`, updated Hero and Telemetry.
- **Dependencies:** Real Project Integration Audit.
- **Validation:** Exactly 5 projects in catalog; 30 static pages prerendered; 0 type errors; 0 lint errors.
- **Status:** COMPLETED.

---

### PHASE 11 — Contact System & Security Handling
- **Goal:** Implement secure contact form with client/server Zod validation, honeypot, and rate limiting.
- **Deliverables:** `components/features/contact/*`, `app/api/contact/route.ts`.
- **Dependencies:** Phase 07.
- **Validation:** Valid submissions succeed; spam and malformed payloads correctly rejected.
- **Status:** READY.

---

### PHASE 12 — Testing & Quality Assurance
- **Goal:** Build component tests, integration tests, and visual regression sanity checks.
- **Deliverables:** `22_TESTING.md`, automated test suites.
- **Dependencies:** Phases 07 - 11.
- **Validation:** All tests pass with zero failures.
- **Status:** READY.

---

### PHASE 13 — Security Review & Audit
- **Goal:** Audit CSP headers, sanitize inputs, verify RLS policies, and ensure no secret leaks.
- **Deliverables:** `SECURITY_AUDIT.md`, `18_SECURITY.md`.
- **Dependencies:** Phase 12.
- **Validation:** Clean security audit checklist.
- **Status:** READY.

---

### PHASE 14 — Performance Optimization
- **Goal:** Optimize image assets, fonts, bundle chunks, and achieve high Lighthouse scores.
- **Deliverables:** `20_PERFORMANCE.md`, Lighthouse audit report.
- **Dependencies:** Phase 12.
- **Validation:** LCP < 2.0s, CLS < 0.1, Lighthouse Performance >= 90.
- **Status:** READY.

---

### PHASE 15 — SEO, Social Cards & Open Graph
- **Goal:** Add dynamic metadata, sitemap.xml, robots.txt, and JSON-LD schema markup.
- **Deliverables:** `21_SEO.md`, `app/sitemap.ts`, `app/robots.ts`.
- **Dependencies:** Phase 14.
- **Validation:** Metadata and social cards validate across all routes.
- **Status:** READY.

---

### PHASE 16 — Git & GitHub Workflow Integration
- **Goal:** Establish branch hygiene, PR conventions, and GitHub Actions CI pipelines.
- **Deliverables:** `.github/workflows/ci.yml`, `24_CICD.md`, `26_GIT_WORKFLOW.md`.
- **Dependencies:** Phase 15.
- **Validation:** CI workflow passes on test runs.
- **Status:** READY.

---

### PHASE 17 — Supabase Deployment Preparation
- **Goal:** Package SQL migrations, seed scripts, and storage bucket configuration.
- **Deliverables:** `supabase/migrations/`, `supabase/seed.sql`.
- **Dependencies:** Phase 05.
- **Validation:** Migrations execute idempotently.
- **Status:** READY.

---

### PHASE 18 — Vercel Deployment & Build Optimization
- **Goal:** Optimize production bundle for Vercel deployment with edge caching.
- **Deliverables:** `vercel.json`, `23_DEPLOYMENT.md`.
- **Dependencies:** Phase 16.
- **Validation:** Production build runs cleanly with zero warnings.
- **Status:** READY.

---

### PHASE 19 — Final Verification & Audit
- **Goal:** Comprehensive end-to-end self-audit across 24 quality categories.
- **Deliverables:** `FINAL_AUDIT.md`, `PRODUCTION_READY.md`.
- **Dependencies:** All previous phases.
- **Validation:** All criteria satisfied without compromise.
- **Status:** READY.

---

### PHASE 20 — Maintenance & Future Enhancements
- **Goal:** Continuous upkeep, dependency updates, and feature additions (e.g., Blog, Certifications).
- **Deliverables:** Roadmap updates, task backlogs.
- **Dependencies:** Phase 19.
- **Status:** BACKLOG.
