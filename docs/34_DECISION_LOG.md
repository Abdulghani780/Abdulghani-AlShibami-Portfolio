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
