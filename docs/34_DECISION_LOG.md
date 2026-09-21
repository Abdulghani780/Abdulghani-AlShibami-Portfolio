# 34 — ARCHITECTURAL DECISION LOG (ADR)

**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System  

---

## Decision 001: Next.js App Router with TypeScript as Core Framework
- **Decision ID:** `ADR-001`
- **Date:** 2026-09-17
- **Decision:** Select Next.js (App Router, React, TypeScript) as the primary platform framework over ASP.NET or plain static HTML.
- **Context:** The portfolio must deploy seamlessly to Vercel, achieve top-tier Lighthouse scores, support dynamic bilingual routing (`/en`, `/ar`), and provide interactive project simulations.
- **Options:**
  1. ASP.NET Core MVC / Blazor (Heavy server overhead, less natural on Vercel edge).
  2. Vanilla HTML/JS (Hard to maintain bilingual routes and isolated dynamic simulations).
  3. Next.js App Router (Selected).
- **Selected Approach:** Next.js App Router with React Server Components.
- **Reason:** First-class Vercel edge deployment, native image/font optimization, superior SEO via SSR, and modular component architecture.
- **Trade-offs:** Requires learning Next.js App Router paradigms for future maintainers.
- **Impact:** Unified full-stack TypeScript architecture.
- **Affected Files:** `package.json`, `app/*`, `components/*`.
- **Affected Systems:** Entire web application.

---

## Decision 002: Obsidian Black, Royal Gold, and White Visual Identity
- **Decision ID:** `ADR-002`
- **Date:** 2026-09-17
- **Decision:** Establish bespoke color triad: Obsidian Black (`#0B0B0C`), Royal Gold (`#D4AF37`), and Pure White (`#FFFFFF`), with custom Light Mode balance.
- **Context:** The owner requires a luxury, authoritative, engineering-grade visual aesthetic, rejecting generic templates and rainbow gaming themes.
- **Options:**
  1. Default Tailwind slate/blue theme (Generic).
  2. Neon cyber theme (Too informal, visually fatiguing).
  3. Bespoke Obsidian Black & Royal Gold (Selected).
- **Selected Approach:** Tailored design tokens with HSL CSS custom properties.
- **Reason:** Reflects prestige, precision, and executive software engineering competence.
- **Trade-offs:** Light mode requires careful contrast tuning to prevent gold from washing out against white surfaces (solved using `#997A15` for light mode text).
- **Impact:** Unmatched brand distinction.
- **Affected Files:** `docs/07_DESIGN_SYSTEM.md`, `app/globals.css`, `tailwind.config.ts`.
- **Affected Systems:** Global UI layer.

---

## Decision 003: Truthful Desktop Project Demonstration Architecture
- **Decision ID:** `ADR-003`
- **Date:** 2026-09-17
- **Decision:** For C# WinForms/WPF and Python desktop projects, implement "Interactive Web Simulations" with mock data rather than claiming native browser execution.
- **Context:** Desktop executables cannot run natively in a standard web browser without heavy, fragile WebAssembly containerization or misleading claims.
- **Options:**
  1. Screenshots only (Passive, unconvincing).
  2. Falsely claim real binary execution (Untruthful).
  3. Interactive Web Simulation prominently labeled (Selected).
- **Selected Approach:** Reusable `DemoViewer` with sandboxed interactive desktop simulations.
- **Reason:** Demonstrates UI design, business logic flow, and data handling truthfully and interactively.
- **Trade-offs:** Requires writing browser simulation views for featured desktop projects.
- **Impact:** High visitor engagement without sacrificing technical credibility.
- **Affected Files:** `docs/15_INTERACTIVE_DEMO_SYSTEM.md`, `components/features/demos/*`.
- **Affected Systems:** Project showcase and demo engine.

---

## Decision 004: Resilient Dual-Layer Data Access Layer (DAL)
- **Decision ID:** `ADR-004`
- **Date:** 2026-09-17
- **Decision:** Implement a resilient DAL combining Supabase PostgreSQL querying with an automatic static mock-data fallback.
- **Context:** The website must operate flawlessly in all environments, including offline local development or when cloud credentials are temporarily unavailable.
- **Options:**
  1. Hardcode all content in JSX (Inflexible, poor separation of concerns).
  2. Require live Supabase connection (Crashes if credentials missing).
  3. Dual-layer DAL with graceful offline fallback (Selected).
- **Selected Approach:** `lib/services/projectService.ts` queries Supabase when keys exist; otherwise falls back to typed records in `lib/data/projectsData.ts`.
- **Reason:** 100% uptime, zero crashes, easy local testing, seamless cloud deployment.
- **Trade-offs:** Requires maintaining local data models alongside database schema.
- **Impact:** Unbreakable application stability.
- **Affected Files:** `lib/services/*`, `lib/data/*`.
- **Affected Systems:** Data persistence layer.

---

## Decision 005: Canonical Roadmap Phase Numbering Harmonization
- **Decision ID:** `ADR-005`
- **Date:** 2026-09-18
- **Decision:** Establish the master 21-phase lifecycle (`Phase 00` through `Phase 20`) as the single canonical engineering phase numbering system across all governance documents (`ROADMAP.md`, `docs/32_ROADMAP.md`, `TASKS.md`, `PROGRESS.md`, `docs/36_PROJECT_STATUS.md`).
- **Context:** During post-design implementation, prompt sequences referred to milestones as "Phase 04 (Project System)" and "Phase 05 (Demo System)", whereas the master engineering roadmap designated them as "Phase 08 (Project System)" and "Phase 09 (Interactive Demo System)". This caused cross-document phase numbering divergence.
- **Resolution:**
  - Canonical Lifecycle Phase 08 is **Project Management & Showcase System** (Completed).
  - Canonical Lifecycle Phase 09 is **Interactive Demo System & Sandboxes** (Active / Current).
  - Sub-milestone references in execution logs will explicitly clarify: `Lifecycle Phase 09 (Milestone 05)`.
- **Reason:** Eliminates confusion, preserves historical tracking consistency, and aligns task matrices with the complete 21-phase master architecture.
- **Affected Files:** `ROADMAP.md`, `docs/32_ROADMAP.md`, `TASKS.md`, `PROGRESS.md`, `docs/36_PROJECT_STATUS.md`.
- **Affected Systems:** Engineering governance and roadmap reporting.

---

## Decision 006: Authentic Original Certificate Preservation, Interactive Zoom & Aspect Integrity
- **Decision ID:** `ADR-006`
- **Date:** 2026-09-20
- **Decision:** Treat all 5 user certificates as immutable source documents; prohibit HTML reconstructions or AI alterations; enforce aspect-ratio preservation (`object-fit: contain`) with client-side interactive zoom (+25% increments, reset to 100%, Escape key dismiss) and decoupled non-overlapping metadata drawer.
- **Context:** Credentials must provide incontrovertible, verifiable proof of qualifications (IBCT, Yemen AI Summit, UMS, YALI) to employers and international reviewers. Reconstructing certificates in HTML or retouching stamps degrades authenticity.
- **Options:**
  1. Reconstruct certificates as stylized HTML/CSS cards (High risk of perceived falsification).
  2. Display basic static images without zoom (Hard to inspect seals, signatures, and QR codes).
  3. Original document preservation with high-resolution web delivery, interactive zoom modal, and isolated metadata drawer (Selected).
- **Reason:** Guarantees absolute legal/academic authenticity, prevents distortion on all screens, and enables deep inspection of security markers.
- **Affected Files:** `lib/data/credentials.ts`, `components/features/credentials/CertificateModal.tsx`, `app/[locale]/credentials/page.tsx`, `lib/ai/knowledge.ts`.
- **Affected Systems:** Credentials showcase, presentation modals, AI grounding.


