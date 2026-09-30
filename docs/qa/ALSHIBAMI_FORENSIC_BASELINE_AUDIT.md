# ALSHIBAMI FORENSIC BASELINE AUDIT
**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System  
**Repository:** `c:\my projects\Portifilo`  
**Standard:** Enterprise Production-Grade Read-Only Forensic Baseline  
**Date of Execution:** 2026-09-29  
**Audit Mode:** READ-ONLY FORENSIC INVESTIGATION (Zero Source Code Modifications)  
**Report File Authority:** `docs/qa/ALSHIBAMI_FORENSIC_BASELINE_AUDIT.md`  

---

## 47. EXECUTIVE SUMMARY FORMAT

```text
PROJECT:               Abdulghani Al-Shibami Portfolio Platform
CURRENT BRANCH:        main
CURRENT COMMIT:        2969e9d2ac355d8a179546eea6fee2cd9ec69f29
WORKING TREE:          DIRTY / CORRUPTED (6 core files wiped to 0 bytes; 82 modified/deleted files; 17 untracked files/folders)
REMOTE SYNC:           IN SYNC [GIT] [GITHUB] (Local main matches origin/main at commit 2969e9d)
ACTIVE FRONTEND:       UNRESOLVED ARCHITECTURAL FORK (Git HEAD uses components/canonical/; working tree uncommitted edits delete canonical and introduce components/features/home/)
ACTIVE DESIGN:         CONFLICTED (Git HEAD uses Titanium Slate & Electric Indigo/Cyan with tokens mislabeled --gold-*; uncommitted working tree attempted Obsidian & Royal Gold per new_design.png)
PROJECT COUNT:         5 Authentic in Git HEAD (campus-it-tracker, metaalgorithm-lab, novatech, cafena, gp); 6 claimed in uncommitted log (+yusra); 4 featured in untracked home (+yusra, nexora-tech)
DEMO COUNT:            5 Authentic Interactive Simulations in demos/simulations/ (3,714 lines of TypeScript/React); 1 phantom 0-byte simulation (YusraSimulation.tsx); registry wiped to 0 bytes
ROUTE COUNT:           12 Route Templates / 40 SSG static routes in Next.js App Router (28 listed in sitemap.xml)
BUILD STATUS:          FAILED [BUILD] (Exit code 1: File 'app/layout.tsx' is not a module)
TYPECHECK:             FAILED [CODE] (15 TypeScript compilation errors via pnpm tsc --noEmit)
LINT:                  PASS [CODE] (0 ESLint errors; next lint deprecation warning present)
SUPABASE:              CONFIGURED BUT UNSEEDED [SUPABASE] [NETWORK] (Endpoint reachable HTTP 200, 8 tables exist, all 8 tables contain 0 rows)
GITHUB:                SYNCHRONIZED [GITHUB] (All 6 local branches merged into main; remote origin tracked and up to date)
VERCEL:                CONFIGURED [VERCEL] (vercel.json present and valid; live deployment sync NOT VERIFIED without external API access)
CRITICAL ISSUES (P0):  2 Blockers (Catastrophic 0-byte truncation of 6 core files causing 100% build & dev server crash; Massive unstaged working tree desynchronization)
MAJOR ISSUES (P1):     4 High (Project catalog identity contradiction [yusra/nexora reintroduction]; Supabase unseeded database; Missing secrets [GEMINI_API_KEY]; Broken Light Mode with hardcoded dark styles and missing ThemeProvider)
CLEANUP STATUS:        URGENT CLEANUP & CONSOLIDATION REQUIRED BEFORE ANY NEW FEATURE WORK
NEXT PHASE:            CLEANUP & CONSOLIDATION (RESTORATION, CANONICAL UNIFICATION & REBUILD)
```

---

## 48. FINAL TRUTH TABLE

| AREA | ACTUAL STATE | EVIDENCE | CONFIDENCE | ACTION |
| :--- | :--- | :--- | :--- | :--- |
| **Repository** | Git HEAD clean at `2969e9d`, but working tree severely corrupted with 6 truncated 0-byte files | `[GIT]` `[CODE]` `git status`, file length probes | **100%** | Restore 6 core files from Git before any further action |
| **Git** | Clean linear history, all feature branches merged into `main`, perfectly in sync with `origin/main` | `[GIT]` `git branch -a`, `git rev-list`, `git remote show` | **100%** | Maintain branch hygiene; branch off for fixes |
| **Architecture** | Severe fork: `components/canonical/` (Git) vs `components/features/home/` (uncommitted) | `[CODE]` `app/[locale]/page.tsx` diff | **100%** | Consolidate onto ONE unified, authoritative architecture |
| **Frontend** | Broken at runtime. Dev server and production build return HTTP 500 on all UI routes | `[ROUTE]` `[BUILD]` HTTP 500 on `/en`, `/ar`, `/projects`, `/credentials`, `/showcase` | **100%** | Fix root layout module export to restore rendering |
| **Backend** | Single route `/api/ai/chat` functions with offline deterministic fallback; no contact API route | `[ROUTE]` `[TEST]` POST `/api/ai/chat` returns 200 OK | **100%** | Add server-side contact API endpoint |
| **Database** | Supabase PostgreSQL 15+ has 8 tables created via migration, but contains exactly 0 rows | `[SUPABASE]` `[NETWORK]` REST probe returns `[]` across all 8 tables | **100%** | Seed database or formally declare app local-first with mock repository |
| **Projects** | Strictly 5 verified projects exist on disk; 2 unverified projects (`yusra`, `nexora`) re-injected | `[CODE]` `[ASSET]` `Projects/` directories vs `FeaturedProjectsSection.tsx` | **100%** | Re-align catalog strictly to 5 verified projects |
| **Demos** | 5 authentic simulations exist (~3.7k LOC); 1 phantom 0-byte simulation (`YusraSimulation.tsx`); registry 0 bytes | `[CODE]` File lengths in `demos/simulations/` and `demos/registry/index.ts` | **100%** | Restore `demos/registry/index.ts` from Git |
| **Navigation** | Navbar present in `components/layout/Navbar.tsx`; mobile menu and language toggle wired | `[CODE]` `Navbar.tsx` inspect | **95%** | Verify hydration when layout is restored |
| **Theme** | Theme engine broken in working tree: `ThemeProvider` was removed from root layout | `[CODE]` `app/layout.tsx` is 0 bytes, `app/[locale]/layout.tsx` lacks `ThemeProvider` | **100%** | Re-inject `ThemeProvider` in root layout |
| **Light Mode** | Broken/Partial: hardcoded dark classes (`bg-[#0B0B0C]`, `bg-zinc-950`) persist in Footer, case studies, previews | `[CODE]` Grep for `bg-[#0B0B0C]`, `bg-zinc-950` | **100%** | Eliminate hardcoded dark values in light mode |
| **Dark Mode** | Dark mode has color token mismatches: `--gold-*` tokens assigned to Electric Indigo (`#6366F1`) & Cyan (`#06B6D4`) | `[CODE]` `app/globals.css` in Git HEAD | **100%** | Re-align CSS variables to Royal Gold (`#D4AF37`) & Obsidian (`#0B0B0C`) |
| **Typography** | Zero fonts currently loaded at runtime; layout Google font `<link>` tags wiped; system font fallback active | `[CODE]` `app/layout.tsx` is 0 bytes; no `next/font` in locale layout | **100%** | Implement clean `next/font/google` infrastructure |
| **Arabic (i18n)** | Bi-directional dictionary structure complete; `middleware.ts` sets `x-locale`/`x-direction`; HTML sync script present | `[CODE]` `lib/i18n/dictionaries.ts`, `middleware.ts` | **95%** | Verify Arabic rendering once layout compiles |
| **Responsive** | Responsive breakpoint classes (`sm:`, `md:`, `lg:`, `xl:`) implemented across components | `[CODE]` Component inspect | **90%** | Visually verify once server compiles |
| **Accessibility** | ARIA attributes present on modals and toggles; reduced motion CSS query configured; color contrast broken in light mode | `[CODE]` `globals.css`, `CertificateModal.tsx` | **85%** | Audit with Chrome DevTools after restoration |
| **SEO** | Metadata generators, JSON-LD (`Person`, `ProfilePage`, `SoftwareApplication`), robots.txt, sitemap.xml present; og-cover.png 404 | `[ROUTE]` `[CODE]` `/robots.txt` 200, `/sitemap.xml` 200; `og-cover.png` missing | **90%** | Generate missing `public/images/og-cover.png` |
| **Security** | Security headers in `next.config.ts` and `vercel.json`; no secrets leaked in git; 4 postcss vulnerabilities | `[TEST]` `[CODE]` `pnpm audit` (2 high, 2 moderate) | **90%** | Add Content-Security-Policy header; update dependencies |
| **Supabase** | Client configured in `lib/supabase/`; keys present in `.env.local`; all tables empty | `[SUPABASE]` `[NETWORK]` Direct REST API probe | **100%** | Add seed script or keep hybrid fallback |
| **GitHub** | Repository clean, remote origin configured, all branches synchronized | `[GIT]` `[GITHUB]` `git remote show origin` | **100%** | Healthy. Do not touch remote. |
| **Vercel** | `vercel.json` configured for Next.js build and security headers; production deployment state | `[DOCUMENT]` `[VERCEL]` `vercel.json` verified; remote status NOT VERIFIED | **70%** | Verify live Vercel dashboard credentials |
| **Credentials** | All 5 certificates exist as authentic images in `public/images/certificates/` and source docs in `certificates/` | `[ASSET]` `[CODE]` File inspect | **100%** | Healthy. Verified data. |
| **Contact** | Contact links verified (`+967773088202`, `samyemen987@gmail.com`); form submits to Supabase client-side with no email dispatcher | `[CODE]` `ContactForm.tsx`, `ContactToolbar.tsx` | **90%** | Add server-side email dispatch service |
| **AI Assistant** | `/api/ai/chat` functions with deterministic offline fallback; live Gemini disabled (missing `GEMINI_API_KEY`) | `[ROUTE]` `[CODE]` POST probe verified | **100%** | Add `GEMINI_API_KEY` to `.env.local` for live inference |
| **Performance** | Build traces show 195 kB first load JS; unoptimized hero image is 1.92 MB; almost all components are client components | `[CODE]` `[ASSET]` Image sizes in `public/images/` | **85%** | Convert static sections to Server Components; optimize images |
| **Documentation**| 37 foundational specs, 12 historical QA/cleanup reports, 10 root governance files; severe contradictions exist | `[DOCUMENT]` Markdown inventory and authority analysis | **90%** | Reconcile contradictions in PROGRESS.md and TASKS.md |

---

# 1. Executive Summary

A comprehensive, non-destructive, read-only forensic baseline audit was conducted on the **Abdulghani Al-Shibami Portfolio Platform** codebase at `c:\my projects\Portifilo`.

### Core Findings:
1. **The System Is In a State of Post-Crash Corruption [CODE] [BUILD]:**  
   At 2:10:42 PM on September 28, 2026, an autonomous agent session (`feea48e0-dcc3-4143-88f1-3430962a33e0`) was interrupted immediately after attempting to execute a comprehensive visual redesign based on an attached mockup (`new_design.png`) and an untracked prompt (`docs/cleanup/MASTER PROMPT`). An abrupt shutdown or unbuffered file-flush event resulted in **six critical core source files being completely truncated to 0 bytes on disk**:
   - `app/globals.css` (0 bytes)
   - `app/layout.tsx` (0 bytes)
   - `lib/data/projectsData.ts` (0 bytes)
   - `demos/registry/index.ts` (0 bytes)
   - `demos/simulations/YusraSimulation.tsx` (0 bytes)
   - `tailwind.config.ts` (0 bytes)
   
   As a direct consequence:
   - TypeScript compilation (`pnpm tsc --noEmit`) fails with 15 fatal module resolution errors `[CODE]`.
   - Production build (`pnpm build`) crashes on step 1 with exit code 1 (`app/layout.tsx is not a module`) `[BUILD]`.
   - The automated test suite (`pnpm test`) fails with 8 assertion errors because `lib/data/projectsData.ts` is empty `[TEST]`.
   - The Next.js dev server runs on port 3000, but returns **HTTP 500 Internal Server Error** on every single UI route (`/en`, `/ar`, `/en/projects`, `/ar/projects`, `/en/credentials`, `/ar/credentials`, `/en/showcase`, `/ar/showcase`, and `/non-existent-404`) `[ROUTE]`.

2. **The Git History Is Healthy and Fully Synchronized [GIT] [GITHUB]:**  
   Local branch `main` is at commit `2969e9d` (`fix: language switcher, navbar visibility, hero cleanup, project catalog layout, middleware locale redirect`), exactly matching `origin/main`. All 6 historical development and redesign branches (`fix/audit-remediation-and-polish`, `maintenance/cleanup-stabilization`, `redesign/final-liquid-glass-portfolio`, `redesign/final-reference-frontend`, `redesign/obsidian-liquid-glass`, `redesign/reference-faithful-portfolio`) have been cleanly integrated into `main`. The Git repository contains 100% healthy, intact versions of all corrupted files.

3. **Severe Frontend Architectural Fork [CODE] [DOCUMENT]:**  
   The codebase contains two competing frontend architectures:
   - **Architecture A (Git HEAD `2969e9d`):** The "Canonical" system built around `components/canonical/` (`CanonicalHero`, `CanonicalProjectsBento`, `CanonicalDesktopSimulator`, `CanonicalDemoStudio`, `CanonicalFooter`). This architecture used the "Titanium Slate & Electric Indigo/Cyan" visual identity.
   - **Architecture B (Uncommitted Working Tree):** The "10-Section Home" system built around untracked `components/features/home/` (`HeroSection`, `AboutSection`, `AILabSection`, `FeaturedProjectsSection`, `YusraCaseStudySection`, `TechnicalArsenalSection`, `AbdulghaniMethodSection`, `EducationCertificationsSection`, `EngineeringInPublicSection`, `ContactCtaSection`). This architecture attempted to implement `new_design.png` with Obsidian Black and Royal Gold, but also unilaterally re-injected obsolete projects (`Yusra` and `Nexora`).

4. **Authentic Data Foundation Is Solid [ASSET] [CODE]:**  
   Abdulghani Al-Shibami has **exactly 5 authentic software projects** with real source code in `Projects/` (`Cafena`, `Campuse_IT_Tracker`, `Gp`, `MetaAlgorithmLab_Clean_Structure`, `NovaTech`) and **5 authentic interactive simulations** (~3,700 lines of functional code) in `demos/simulations/`. All 5 educational credentials and certifications exist as verified original documents in `certificates/` and high-res web assets in `public/images/certificates/`.

5. **Supabase Is Connected But 100% Unseeded [SUPABASE] [NETWORK]:**  
   The cloud database at `eusqacvumjordvthezen.supabase.co` is live and reachable via REST API (HTTP 200). All 8 tables from migration `20260917000001_initial_schema.sql` exist, but **contain zero rows**. The application operates 100% on local fallback data.

---

# 2. Real Current Repository State

- **Current Working Directory:** `c:\my projects\Portifilo` `[GIT]`
- **Active Branch:** `main` `[GIT]`
- **Head Commit SHA:** `2969e9d2ac355d8a179546eea6fee2cd9ec69f29` `[GIT]`
- **Commit Date:** Mon Sep 21 23:27:39 2026 +0300 `[GIT]`
- **Commit Author:** `Abdulghani780 <samyemen987@gmail.com>` `[GIT]`
- **Working Tree State:** DIRTY (Uncommitted modifications, deletions, untracked files, and 0-byte corruptions) `[GIT]` `[CODE]`
- **File Counts in Working Tree:**
  - Tracked files modified: 24 `[GIT]`
  - Tracked files deleted: 41 (including 5 canonical components, 1 credential component, 24 design-reference files, 5 new concept images, and 6 markdown/metadata files) `[GIT]`
  - Untracked files/directories: 17 `[GIT]`
- **Compilation State:** FAILED (15 TypeScript errors) `[BUILD]`
- **Test State:** FAILED (8 failed tests, 30 passed out of 38) `[TEST]`
- **Dev Server State:** RUNNING on `http://localhost:3000` (Process active, but all UI routes crash with HTTP 500) `[ROUTE]`

---

# 3. Git / Branch State

### Local Branches `[GIT]`:
1. `* main`: HEAD commit `2969e9d` (in sync with `origin/main`).
2. `fix/audit-remediation-and-polish`: HEAD commit `7db5e6a` (0 ahead, 3 behind `main`).
3. `maintenance/cleanup-stabilization`: HEAD commit `4131166` (0 ahead, 11 behind `main`).
4. `redesign/final-liquid-glass-portfolio`: HEAD commit `3fdba37` (0 ahead, 22 behind `main`).
5. `redesign/final-reference-frontend`: HEAD commit `a733a52` (0 ahead, 24 behind `main`).
6. `redesign/obsidian-liquid-glass`: HEAD commit `8650891` (0 ahead, 27 behind `main`).
7. `redesign/reference-faithful-portfolio`: HEAD commit `796e534` (0 ahead, 26 behind `main`).

### Remote Tracking `[GITHUB]`:
- Remote: `origin` (`https://github.com/Abdulghani780/Abdulghani-AlShibami-Portfolio.git`)
- `HEAD branch: main`
- Remote branches tracked and up to date: `main`, `fix/audit-remediation-and-polish`, `redesign/final-liquid-glass-portfolio`, `redesign/final-reference-frontend`, `redesign/reference-faithful-portfolio`.

### Git Stashes `[GIT]`:
- `stash@{0}: On main: pre-redesign-working-tree` (Created prior to earlier redesign experiments).

---

# 4. Shutdown / Interrupted Work Forensics

### Verdict: **C. Confirmed incomplete work** `[CODE]` `[GIT]`

### Forensic Evidence:
1. **Timestamp Cluster of File Truncation:**
   On `9/28/2026` between `2:10:42 PM` and `2:10:43 PM`, exactly 6 core files were truncated to **0 bytes**:
   - `app/globals.css`: Length 0 (was 6,813 bytes in Git)
   - `app/layout.tsx`: Length 0 (was 2,337 bytes in Git)
   - `lib/data/projectsData.ts`: Length 0 (was 44,495 bytes in Git)
   - `demos/registry/index.ts`: Length 0 (was 6,505 bytes in Git)
   - `demos/simulations/YusraSimulation.tsx`: Length 0 (untracked, created as empty file)
   - `tailwind.config.ts`: Length 0 (was 4,238 bytes in Git)

2. **Previous Agent Session Trajectory:**
   In session `feea48e0-dcc3-4143-88f1-3430962a33e0`:
   - Step 450: The agent ran `pnpm build` at 11:06:44Z (`14:06:44+03:00`). The build succeeded in 12.5s compiling 40/40 static pages.
   - Step 458-474: The agent updated `PROGRESS.md`, `TASKS.md`, `CHANGELOG.md`, and `IMPLEMENTATION_LOG.md`.
   - Step 476: The agent ran `git status --short` at 11:09:00Z (`14:09:00+03:00`).
   - Step 478: The agent output its final report at 11:09:01Z (`14:09:01+03:00`) claiming 100% completion and verification.
   - **1 minute and 41 seconds later** (at `14:10:42+03:00`), a process crash or system shutdown occurred while file buffers or editor save queues were in-flight, leaving the 6 open files truncated to 0 bytes.

3. **Untracked Artifacts Left Dangling:**
   - `docs/cleanup/MASTER PROMPT`: The raw prompt text directing the visual rebuild.
   - `docs/yusra_foundation_summary.txt`: Arabic specification for the Yusra project.
   - `new_design.png`: The visual reference image.
   - `abdulghani.png`: High-res original photograph.
   - `components/features/home/`: 10 newly created section components.
   - `components/ui/AsLogo.tsx`: Monogram AS vector component.
   - `public/images/projects/`: 6 card and preview images for Yusra and Nexora.

---

# 5. Documentation History

The repository houses a vast documentation apparatus comprising 49 core documents:
- **10 Root Governance Files:** `README.md`, `AGENTS.md`, `SKILLS.md`, `MCP.md`, `PROMPTS.md`, `ROADMAP.md`, `TASKS.md`, `PROGRESS.md`, `IMPLEMENTATION_LOG.md`, `CHANGELOG.md`.
- **37 Foundational Specifications (`docs/00` to `docs/36`):** Authored in Phase 01, covering vision, requirements, architecture, database schemas, demo system, i18n, theming, security, and deployment.
- **12 Operational & Audit Reports:** `docs/REAL_PROJECTS_AUDIT.md`, `docs/REAL_PROJECT_DEMO_PLAN.md`, `docs/PROJECT_DATA_AUDIT.md`, `docs/PROJECT_STATUS_MASTER_REPORT.md`, `docs/qa/DEEP_ENGINEERING_AUDIT.md`, `docs/qa/COMPREHENSIVE_PORTFOLIO_AUDIT.md`, `docs/cleanup/CLEANUP_STABILIZATION_REPORT.md`, etc.

---

# 6. Documentation Contradictions

| Source A | Source B | Conflict | Actual Evidence | Trustworthy Source | Unknown / Unresolved |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `PROGRESS.md` (Phase 10.1) | `PROGRESS.md` (Phase 24) & `MASTER PROMPT` | Phase 10.1 states: *"Permanently purged unverified records (yusra, auraledger, nexora-tech)... strictly synchronized with exactly 5 authentic projects"*. Phase 24 reintroduces Yusra as "Flagship Project" and Nexora as a featured project. | `Projects/` folder on disk contains only 5 directories (`Cafena`, `Campuse_IT_Tracker`, `Gp`, `MetaAlgorithmLab_Clean_Structure`, `NovaTech`). No code exists for Yusra or Nexora. `[CODE]` `[ASSET]` | Phase 10.1 and `Projects/` filesystem | Whether the owner wishes to showcase Yusra as a purely conceptual UI study or eliminate it entirely |
| `IMPLEMENTATION_LOG.md` (Entry 025) | Local Filesystem & Compiler | Entry 025 claims: *"pnpm tsc --noEmit: 0 errors; pnpm build: 40/40 static routes compiled; COMPLETED & VERIFIED"*. | `app/layout.tsx` and 5 other files are 0 bytes; `pnpm build` fails on step 1; `pnpm test` fails 8 tests. `[BUILD]` `[TEST]` | Compiler and test runner output | None. The claim of verified completion in Entry 025 is false. |
| `AGENTS.md` (Rule 4) | `2969e9d:app/globals.css` & `tailwind.config.ts` | `AGENTS.md` mandates Obsidian Black (`#0B0B0C`, `#121214`) and Royal Gold (`#D4AF37`, `#F3E5AB`). Git HEAD CSS defines `--gold-primary: #6366F1` (Electric Indigo) and `--gold-secondary: #06B6D4` (Cyan). | Git HEAD code in `globals.css` and `tailwind.config.ts` `[CODE]` | `AGENTS.md` is the constitutional standard | Why the team repurposed `--gold-*` tokens for Electric Indigo/Cyan instead of renaming tokens |
| `docs/25_ENVIRONMENT_VARIABLES.md` | `.env.local` | Doc lists `GEMINI_API_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, and `CONTACT_NOTIFICATION_EMAIL` as required for full live functionality. | `.env.local` only defines `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`. All server secrets are missing. `[CODE]` | `.env.local` inspection | Production Vercel environment variable settings |
| `app/[locale]/projects/[slug]/page.tsx` | `public/images/og-cover.png` | Page metadata references `${SITE_URL}/images/og-cover.png`. | `public/images/og-cover.png` does not exist on disk. `[ASSET]` | Filesystem inspection | Intended visual design of the OpenGraph card |

---

# 7. Current Architecture

```mermaid
graph TD
    Client[Browser / Client] --> Middleware[middleware.ts (Locale & Direction Detection)]
    Middleware --> RootLayout[app/layout.tsx (CURRENTLY 0 BYTES - BROKEN)]
    RootLayout --> LocaleLayout[app/[locale]/layout.tsx]
    
    subgraph Layout Shell
        LocaleLayout --> Navbar[components/layout/Navbar.tsx]
        LocaleLayout --> MainWrapper[components/layout/MainWrapper.tsx]
        LocaleLayout --> Footer[components/layout/Footer.tsx]
        LocaleLayout --> AIModal[components/features/ai/AbdulghaniAIModal.tsx]
    end

    subgraph Architectural Fork (Home)
        MainWrapper -.-> CanonicalArch[Architecture A: components/canonical/ (Git HEAD 2969e9d)]
        MainWrapper --> FeatureArch[Architecture B: components/features/home/ (Uncommitted Working Tree)]
    end

    subgraph Subpages
        MainWrapper --> ProjectsPage[app/[locale]/projects/page.tsx]
        MainWrapper --> ProjectDetailPage[app/[locale]/projects/[slug]/page.tsx]
        MainWrapper --> DemoPage[app/[locale]/projects/[slug]/demo/page.tsx]
        MainWrapper --> CredentialsPage[app/[locale]/credentials/page.tsx]
        MainWrapper --> ShowcasePage[app/[locale]/showcase/page.tsx]
    end

    subgraph Data & Services Layer
        ProjectsPage --> ProjectRepo[lib/services/projectRepository.ts]
        ProjectDetailPage --> ProjectRepo
        DemoPage --> DemoViewer[components/features/demos/DemoViewer.tsx]
        DemoViewer --> DemoRegistry[demos/registry/index.ts (CURRENTLY 0 BYTES)]
        DemoRegistry --> Simulations[demos/simulations/* (5 Authentic Simulations)]
        ProjectRepo --> LocalData[lib/data/projectsData.ts (CURRENTLY 0 BYTES)]
        ProjectRepo --> SupabaseClient[lib/supabase/server.ts (Unseeded - 0 Rows)]
        CredentialsPage --> CredData[lib/data/credentials.ts]
    end

    subgraph API Layer
        AIModal --> AIChatRoute[app/api/ai/chat/route.ts]
        AIChatRoute --> OfflineAI[Deterministic Grounded Fallback Engine]
        AIChatRoute -.-> LiveGemini[GoogleGenAI SDK (Disabled: Missing GEMINI_API_KEY)]
    end
```

---

# 8. Directory Audit

| Directory | State | Status | Evidence |
| :--- | :--- | :--- | :--- |
| `app/` | ACTIVE | Core routing and layout apparatus; `layout.tsx` and `globals.css` are 0 bytes | `[CODE]` |
| `components/canonical/` | DELETED IN TREE / ACTIVE IN GIT | Contains 5 canonical components; deleted by previous agent session | `[GIT]` |
| `components/features/home/` | UNTRACKED / ACTIVE IN CODE | 10 new section components implementing `new_design.png` | `[CODE]` |
| `components/features/projects/` | ACTIVE | Catalog views, filters, project cards, and case study sections | `[CODE]` |
| `components/features/credentials/` | ACTIVE | Credential catalog, certificate card, and modal | `[CODE]` |
| `components/features/demos/` | ACTIVE | `DemoViewer.tsx` and `LiveDemoStudio.tsx` | `[CODE]` |
| `components/layout/` | ACTIVE | Global Navbar, Footer, LanguageSwitcher, ThemeToggle | `[CODE]` |
| `components/ui/` | ACTIVE | Buttons, badges, cards, containers, AsLogo | `[CODE]` |
| `components/reference/` | REMOVED | Cleaned up on historical branches; 0 files present in HEAD | `[GIT]` |
| `demos/registry/` | CORRUPTED | `index.ts` is 0 bytes (was 6.5 KB in Git) | `[CODE]` |
| `demos/shared/` | ACTIVE | `DemoShell.tsx`, `DemoToolbar.tsx`, `WorkstationConsole.tsx` | `[CODE]` |
| `demos/simulations/` | ACTIVE / CORRUPTED | 5 authentic simulations healthy (~3.7k LOC); `YusraSimulation.tsx` is 0 bytes | `[CODE]` |
| `lib/data/` | ACTIVE / CORRUPTED | `credentials.ts` and `profile.ts` healthy; `projectsData.ts` is 0 bytes | `[CODE]` |
| `lib/services/` | ACTIVE | `projectRepository.ts` (Hybrid fallback repository) | `[CODE]` |
| `lib/supabase/` | ACTIVE | `client.ts` and `server.ts` | `[CODE]` |
| `lib/theme/` | ACTIVE | `ThemeProvider.tsx` and `themeContext.ts` | `[CODE]` |
| `lib/i18n/` | ACTIVE | `dictionaries.ts` (English & Arabic parity) | `[CODE]` |
| `public/images/` | ACTIVE | Profile, project screenshots, certificate images | `[ASSET]` |
| `public/docs/` | ACTIVE | `Abdulghani_Al-Shibami_CV.pdf` (2.9 KB single page) | `[ASSET]` |
| `certificates/` | ACTIVE | Original credential PNG/JPEG source scans | `[ASSET]` |
| `Projects/` | ACTIVE (IGNORED) | 5 authentic project repositories | `[CODE]` |
| `design-references/` | DEAD | 12 folders of obsolete static HTML/PNG mocks (deleted in working tree) | `[GIT]` |
| `new/` | DEAD | 5 temporary concept renders (deleted in working tree) | `[GIT]` |
| `docs/` | ACTIVE | 37 specifications and 12 audit/qa reports | `[DOCUMENT]` |

---

# 9. Code Audit

- **TypeScript Compilation:** `pnpm tsc --noEmit` exited with code 1 `[BUILD]`.
  - 3 errors in `.next/types/app/layout.ts` (`File 'app/layout.tsx' is not a module`)
  - 1 error in `DemoViewer.tsx` (`File 'demos/registry/index.ts' is not a module`)
  - 1 error in `LiveDemoStudio.tsx` (`File 'demos/simulations/YusraSimulation.tsx' is not a module`)
  - 5 errors in `demos/simulations/*.tsx` (`File 'demos/registry/index.ts' is not a module`)
  - 5 errors in `lib/services/projectRepository.ts` (`File 'lib/data/projectsData.ts' is not a module`)
- **Automated Test Suite:** `pnpm test` exited with code 1 `[TEST]`.
  - 30 passed, 8 failed (all 8 failures caused by `projectsData.ts` being 0 bytes).
  - `tests/offline-ai.test.mjs` passed 7/7 tests (100%).
- **Linter:** `pnpm lint` passed with 0 errors and 0 warnings `[CODE]`.

---

# 10. Dead Code Forensics

### Confirmed Dead Code Candidates:
1. `design-references/` (12 folders): 107 KB of static HTML mockups and JSON files generated in Phase 02. Never imported in application code. Safe for permanent deletion `[GIT]`.
2. `new/` (5 files): Concepts presentation and 4 JPG renders. Unused in application code. Safe for deletion `[GIT]`.
3. `demos/simulations/YusraSimulation.tsx`: 0-byte untracked file. Safe for deletion `[CODE]`.
4. `public/images/projects/nexora-card.png`, `yusra-arch.png`, `yusra-card.png`, `yusra-screens.png`: Untracked PNG assets for obsolete projects. Safe for deletion if projects remain excluded `[ASSET]`.
5. `public/images/hero/hero-abstract-core.jpg` (920 KB): Superseded by authentic profile assets `[ASSET]`.
6. `components/canonical/` (if Architecture B is adopted): 5 components (~107 KB) duplicating home sections `[CODE]`.

---

# 11. Duplication Audit

| Feature | Implementation A | Implementation B | Similarity | Active Users | Recommended Canonical Candidate |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero** | `components/canonical/CanonicalHero.tsx` | `components/features/home/HeroSection.tsx` | 75% | Git HEAD uses A; Working tree uses B | `components/features/home/HeroSection.tsx` (matches `new_design.png` & authentic photo) |
| **Projects Showcase** | `components/canonical/CanonicalProjectsBento.tsx` | `components/features/home/FeaturedProjectsSection.tsx` | 70% | Git HEAD uses A; Working tree uses B | Harmonize into `FeaturedProjectsSection.tsx` backed by `projectRepository` |
| **Footer** | `components/canonical/CanonicalFooter.tsx` | `components/layout/Footer.tsx` | 80% | Git HEAD renders CanonicalFooter on home; layout renders Footer | Single global `components/layout/Footer.tsx` |
| **Demo Studio** | `components/canonical/CanonicalDemoStudio.tsx` | `components/features/demos/LiveDemoStudio.tsx` | 85% | Canonical on home; LiveDemoStudio on `/showcase` | Single `components/features/demos/LiveDemoStudio.tsx` |
| **Academic Credentials** | `components/features/credentials/AcademicProfileSection.tsx` | `components/features/home/EducationCertificationsSection.tsx` | 65% | A in Git; B in working tree | `EducationCertificationsSection.tsx` for Home; `CredentialsCatalogView.tsx` for `/credentials` |
| **Project Preview Graphic**| `components/features/projects/ProjectPreviewGraphic.tsx` | Inline card previews in `FeaturedProjectsSection.tsx` | 60% | `/projects` uses graphic; home uses static PNG | Reusable `ProjectPreviewGraphic.tsx` |

---

# 12. Route Inventory & Forensics

| URL | Source File | Component | Lang | Expected Status | Actual Status | Active? | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `/` | `app/page.tsx` | RootPage | All | 307 Redirect | 307 -> `/en` | YES | Redirects to default locale `[ROUTE]` |
| `/en` | `app/[locale]/page.tsx` | HomePage | EN | 200 OK | **500 Error** | YES | Fails: `layout.tsx` is not a module `[ROUTE]` |
| `/ar` | `app/[locale]/page.tsx` | HomePage | AR | 200 OK | **500 Error** | YES | Fails: `layout.tsx` is not a module `[ROUTE]` |
| `/en/projects` | `app/[locale]/projects/page.tsx` | ProjectsPage | EN | 200 OK | **500 Error** | YES | Fails: `layout.tsx` is not a module `[ROUTE]` |
| `/ar/projects` | `app/[locale]/projects/page.tsx` | ProjectsPage | AR | 200 OK | **500 Error** | YES | Fails: `layout.tsx` is not a module `[ROUTE]` |
| `/en/credentials` | `app/[locale]/credentials/page.tsx` | CredentialsPage | EN | 200 OK | **500 Error** | YES | Fails: `layout.tsx` is not a module `[ROUTE]` |
| `/ar/credentials` | `app/[locale]/credentials/page.tsx` | CredentialsPage | AR | 200 OK | **500 Error** | YES | Fails: `layout.tsx` is not a module `[ROUTE]` |
| `/en/showcase` | `app/[locale]/showcase/page.tsx` | ShowcasePage | EN | 200 OK | **500 Error** | YES | Fails: `layout.tsx` is not a module `[ROUTE]` |
| `/ar/showcase` | `app/[locale]/showcase/page.tsx` | ShowcasePage | AR | 200 OK | **500 Error** | YES | Fails: `layout.tsx` is not a module `[ROUTE]` |
| `/en/projects/campus-it-tracker` | `app/[locale]/projects/[slug]/page.tsx` | ProjectDetailPage | EN | 200 OK | **500 Error** | YES | Fails: `layout.tsx` is not a module `[ROUTE]` |
| `/en/projects/metaalgorithm-lab` | `app/[locale]/projects/[slug]/page.tsx` | ProjectDetailPage | EN | 200 OK | **500 Error** | YES | Fails: `layout.tsx` is not a module `[ROUTE]` |
| `/en/projects/cafena` | `app/[locale]/projects/[slug]/page.tsx` | ProjectDetailPage | EN | 200 OK | **500 Error** | YES | Fails: `layout.tsx` is not a module `[ROUTE]` |
| `/en/projects/novatech` | `app/[locale]/projects/[slug]/page.tsx` | ProjectDetailPage | EN | 200 OK | **500 Error** | YES | Fails: `layout.tsx` is not a module `[ROUTE]` |
| `/en/projects/gp` | `app/[locale]/projects/[slug]/page.tsx` | ProjectDetailPage | EN | 200 OK | **500 Error** | YES | Fails: `layout.tsx` is not a module `[ROUTE]` |
| `/en/projects/*/demo` (5 routes) | `app/[locale]/projects/[slug]/demo/page.tsx` | ProjectDemoPage | EN | 200 OK | **500 Error** | YES | Fails: `layout.tsx` is not a module `[ROUTE]` |
| `/ar/projects/*/demo` (5 routes) | `app/[locale]/projects/[slug]/demo/page.tsx` | ProjectDemoPage | AR | 200 OK | **500 Error** | YES | Fails: `layout.tsx` is not a module `[ROUTE]` |
| `/api/ai/chat` | `app/api/ai/chat/route.ts` | Route Handler | All | 200 OK | **200 OK** | YES | Fully functional with offline deterministic fallback `[ROUTE]` |
| `/robots.txt` | `app/robots.ts` | RobotsHandler | All | 200 OK | **200 OK** | YES | Valid robots.txt output `[ROUTE]` |
| `/sitemap.xml` | `app/sitemap.ts` | SitemapHandler | All | 200 OK | **200 OK** | YES | Valid XML sitemap indexing 28 URLs `[ROUTE]` |
| `/non-existent` | `app/not-found.tsx` | NotFound | All | 404 | **500 Error** | YES | Global layout crash intercepts 404 `[ROUTE]` |

---

# 13. Browser Verification

- Dev server launched on `http://localhost:3000` via task daemon `[ROUTE]`.
- Direct HTTP probes verified:
  - `GET /robots.txt`: 200 OK (Disallows `/api/`, references sitemap) `[ROUTE]`.
  - `GET /sitemap.xml`: 200 OK (Lists 28 bilingual canonical URLs) `[ROUTE]`.
  - `POST /api/ai/chat`: 200 OK (Responds with grounded offline assistant responses in English and Arabic) `[ROUTE]`.
  - `GET /en`, `GET /ar`: 500 Internal Server Error (`[Error: The default export is not a React Component in "/[locale]/layout"]`) `[ROUTE]`.
- Network traces confirm that static assets in `public/` are served cleanly by Next.js engine `[ROUTE]`.

---

# 14. Visual Audit

Because all UI routes return HTTP 500 at runtime due to the 0-byte `app/layout.tsx`, visual rendering in the browser currently produces the Next.js internal 500 error overlay `[BROWSER]`.

From forensic inspection of the underlying component code and design assets:
1. **Target Visual Standard (`new_design.png`) [ASSET]:**
   - High-contrast Obsidian Black (`#0B0B0C`, `#121214`) with Royal Gold accents (`#D4AF37`, `#F3E5AB`).
   - Clean technical typography: Sans-serif display headings, monospace metadata tags, and warm metallic borders.
   - Circuit traces, geometric grid nodes, and Shibam skyscraper skyline silhouette.
2. **Current Component Implementation [CODE]:**
   - Untracked components in `components/features/home/` adhere tightly to the layout structure of `new_design.png` (Hero, About, AI Lab, Featured Projects, Case Study, Arsenal, Method, Education, Public Activity, Contact).
   - However, styling is inconsistent: several sections use inline arbitrary hex codes (`bg-[#FAF9F6]`, `bg-[#0B0B0C]`, `bg-[#0E0E10]`) instead of centralized semantic design tokens.

---

# 15. Light Mode Deep Forensics

### Verdict: **BROKEN / PARTIAL LIGHT MODE** `[CODE]`

1. **Missing Theme Context:**
   `ThemeProvider` was located inside `app/layout.tsx`. Because `app/layout.tsx` was wiped to 0 bytes, `useTheme()` throws when called by any client component, and the `.dark` class toggle on `<html>` cannot operate.
2. **Hardcoded Dark Assumptions in Components:**
   - `components/layout/Footer.tsx` (line 10): `<footer className="w-full bg-[#0B0B0C] text-white py-12...">` (Hardcoded pitch black in Light Mode).
   - `components/features/home/YusraCaseStudySection.tsx` (line 55): `bg-[#0B0B0C] text-white` (Hardcoded pitch black in Light Mode).
   - `components/features/projects/ProjectPreviewGraphic.tsx`: `bg-zinc-950 dark:bg-[#0E0E10]` (Hardcoded dark black/slate container in Light Mode).
   - Multiple modal backdrops use `bg-black/80` without light-mode porcelain/acrylic styling.

---

# 16. Dark Mode Regression

### Verdict: **TOKEN MISMATCH / REGRESSION** `[CODE]`

1. In Git HEAD `2969e9d:app/globals.css`, Dark Mode defines:
   - `--canvas-bg: #0B1120` (Titanium Navy from Option 1, NOT Obsidian Black `#0B0B0C`).
   - `--gold-primary: #6366F1` (Electric Indigo, NOT Royal Gold `#D4AF37`).
   - `--gold-secondary: #06B6D4` (Electric Cyan).
2. The working tree uncommitted edits attempted to introduce `#0B0B0C` and `#D4AF37`, but did so via inline classes (`text-[#0B0B0C]`, `selection:bg-gold-primary/30`), leaving the token definitions broken.
3. Neon glow classes (`.electric-glow-pulse`, `.cyan-glow-pulse`) from Milestone 19 remain in CSS files.

---

# 17. Typography Forensics

1. **Font Loading Failure [CODE]:**
   - In Git HEAD `2969e9d:app/layout.tsx`, fonts were loaded via external Google Fonts `<link>` (`Geist`, `JetBrains Mono`, `Noto Kufi Arabic`, `Playfair Display`).
   - In uncommitted `app/[locale]/layout.tsx`, no fonts are imported from `next/font/google`.
   - Because `app/layout.tsx` is 0 bytes, the browser currently loads **zero custom fonts**, falling back to system defaults (`Times New Roman`, `Arial`).
2. **Font Family Mismatches:**
   - `tailwind.config.ts` in Git HEAD references `Playfair Display` for serif and `Geist` for sans.
   - `IMPLEMENTATION_LOG.md` claimed adoption of `Outfit` and `Cairo`.
   - Component classes frequently use `font-sans` and `font-mono` interchangeably without font variables loaded.

---

# 18. Design System Forensics

### Verdict: **TWO COEXISTING DESIGN SYSTEMS** `[CODE]`

1. **System 1 (Git HEAD — Titanium Slate & Electric Indigo):**
   - Palette: `#0B1120`, `#0F172A`, `#6366F1`, `#06B6D4`.
   - Aesthetic: Modern linear/developer aesthetic, high saturation cybernetic accents.
   - Used by: `components/canonical/*`, `CaseStudyHero.tsx`, `ProjectCatalogView.tsx`.
2. **System 2 (Uncommitted Working Tree — Obsidian & Royal Gold):**
   - Palette: `#0B0B0C`, `#121214`, `#D4AF37`, `#F3E5AB`.
   - Aesthetic: Executive luxury, warm gold metallic borders, Shibam architectural motifs.
   - Used by: `components/features/home/*`, `components/ui/AsLogo.tsx`.

---

# 19. Project Data Forensics

### The 5 Authoritative Owner Projects `[CODE]` `[ASSET]`:
1. **Campus IT Tracker (`campus-it-tracker`):**
   - Tech: C# WinForms, .NET 4.8, Oracle Database (10g/XE), ITIL incident management.
   - Repo: `Projects/Campuse_IT_Tracker` (Authentic original source repository on disk).
   - Demo: `demos/simulations/CampusITTrackerSimulation.tsx` (751 lines, interactive topology & incident simulator).
2. **MetaAlgorithm Lab (`metaalgorithm-lab`):**
   - Tech: Python 3.11, PyQt6, algorithmic complexity benchmarking, statistical regression.
   - Repo: `Projects/MetaAlgorithmLab_Clean_Structure` (Authentic source on disk).
   - Demo: `demos/simulations/MetaAlgorithmLabSimulation.tsx` (731 lines, interactive sorting visualizer & benchmark runner).
3. **Cafena Specialty Coffee (`cafena`):**
   - Tech: HTML5, CSS3, Vanilla ES6, Arabic typography, dynamic cart arithmetic.
   - Repo: `Projects/Cafena` (Authentic source on disk).
   - Demo: `demos/simulations/CafenaSimulation.tsx` (799 lines, interactive Arabic storefront & cart).
4. **NovaTech Electronics (`novatech`):**
   - Tech: C# WinForms, Oracle Database, enterprise warehouse/POS & e-commerce simulation.
   - Repo: `Projects/NovaTech` (Authentic source on disk).
   - Demo: `demos/simulations/NovaTechSimulation.tsx` (777 lines, interactive catalog & checkout).
5. **Graduation Projects Portal (`gp`):**
   - Tech: PHP 8, MySQL 8, academic proposal lifecycle management, role-based committee review.
   - Repo: `Projects/Gp` (Authentic source on disk).
   - Demo: `demos/simulations/GpSimulation.tsx` (656 lines, interactive proposal workflow).

### Stale / Unverified References:
- **YUSRA (`yusra`):** Reintroduced in uncommitted files (`FeaturedProjectsSection.tsx`, `YusraCaseStudySection.tsx`, `tests/core-domain.test.mjs`). No repository exists in `Projects/`.
- **Nexora Tech (`nexora-tech`):** Hardcoded in `FeaturedProjectsSection.tsx` linking to `/projects/novatech`.
- **AuraLedger (`auraledger`):** Purged from code; referenced only in historical documentation.

---

# 20. Demo System Forensics

- **Simulation Codebase Health [CODE]:**
  The repository possesses **3,714 lines** of production-grade, highly interactive client-side simulation code in `demos/simulations/`:
  - `CampusITTrackerSimulation.tsx`: 751 lines (Interactive search, asset inspection, ticket creation, topology map).
  - `MetaAlgorithmLabSimulation.tsx`: 731 lines (Live algorithm visualization, comparison/swap counters, speed controls).
  - `CafenaSimulation.tsx`: 799 lines (Interactive menu, cart drawer, pricing arithmetic, receipt modal).
  - `NovaTechSimulation.tsx`: 777 lines (Product cards, quick-view modal, live cart, shipping estimates).
  - `GpSimulation.tsx`: 656 lines (Student submission form, status filtering, committee approval).
- **Current Runtime Failure [CODE]:**
  Because `demos/registry/index.ts` is 0 bytes on disk, `DEMO_REGISTRY` cannot be imported, rendering all demo routes non-functional.

---

# 21. Demo Shadowing Audit

1. **No Iframe Shadowing Found [CODE]:**
   `DemoViewer.tsx` correctly checks `if (demoType === "interactive_simulation")` and mounts the local component directly. Demos are NOT replaced with generic iframes or empty links.
2. **Workstation Shadowing in Showcase [CODE]:**
   `LiveDemoStudio.tsx` in the uncommitted tree imported `YusraSimulation` (0 bytes), which caused compilation to fail. When `layoutMode === "yusra"` is clicked, it attempts to mount an empty component.
3. **Disclosures Present [CODE]:**
   Each simulation incorporates clear disclosures stating that the browser interface is an authentic simulation of the owner's desktop/backend logic and does not falsely claim native browser execution of WinForms/Oracle binaries.

---

# 22. Profile / Credentials Audit

- **Profile Image Assets [ASSET]:**
  - High-res original: `abdulghani.png` (1.92 MB).
  - Optimized WebP variants present in `public/images/profile/`:
    - `abdulghani-profile-hero.webp` (163 KB)
    - `abdulghani-profile-thumb.webp` (22 KB)
    - `abdulghani-profile.webp` (110 KB)
    - `abdulghani-portrait.webp` (163 KB)
  - No fabricated or synthetic profile photos exist.
- **Certificate Assets [ASSET]:**
  - Original document scans verified in `certificates/`: `1.png`, `2.jpeg`, `3.jpeg`, `4.jpeg`, `5.png`.
  - Web delivery assets verified in `public/images/certificates/`:
    - `tot-ibct-novice-trainer.png` (737 KB) — IBCT Certified Novice Trainer
    - `ums-innovation-award.jpg` (92 KB) — UMS Innovation & Entrepreneurship Award (2nd Place)
    - `ums-web-dev-ai-workshop.jpg` (93 KB) — Web Dev & AI Workshop
    - `yemen-ai-summit-2026.png` (215 KB) — Yemen AI Summit 2026
    - `yali-english-proficiency.jpg` (226 KB) — YALI Advanced English Proficiency
- **CV Asset [ASSET]:**
  - `public/docs/Abdulghani_Al-Shibami_CV.pdf`: Valid PDF-1.4 file (2,961 bytes, single page).

---

# 23. Contact Audit

- **Contact Channels [CODE]:**
  - Phone: `+967773088202` (Formatted: `+967 773 088 202`)
  - WhatsApp: Direct link with pre-filled message `https://wa.me/967773088202?...`
  - Email: `samyemen987@gmail.com`
  - LinkedIn: `https://linkedin.com/in/abdulghani-al-shibami-94b4a3204`
  - GitHub: `https://github.com/Abdulghani780`
- **Contact Form [CODE]:**
  - Implemented in `components/features/ContactForm.tsx`.
  - Client-side validation: Custom regex and length bounds (Name: 2-100, Email: valid format, Subject: 3-150, Message: 10-2000).
  - Transmission: Direct client-side insert to Supabase table `contact_messages` via `getSupabaseBrowserClient()`.
  - **Defect:** No server-side API route exists (`/api/contact`). If Supabase is unreachable or unseeded, the form silently fails to persist messages while falsely displaying a success confirmation screen to the visitor.

---

# 24. Supabase Forensics

- **Host:** `eusqacvumjordvthezen.supabase.co` `[SUPABASE]` `[NETWORK]`
- **Connection Status:** CONNECTED & REACHABLE (HTTP 200 via REST endpoint) `[SUPABASE]`
- **Database Schema [CODE]:**
  Migration `supabase/migrations/20260917000001_initial_schema.sql` defines 8 tables:
  `profiles`, `project_categories`, `technologies`, `projects`, `project_technologies`, `skills`, `experiences`, `contact_messages`.
- **Live Row Count Probe [SUPABASE] [NETWORK]:**
  - `profiles`: **0 rows**
  - `project_categories`: **0 rows**
  - `technologies`: **0 rows**
  - `projects`: **0 rows**
  - `project_technologies`: **0 rows**
  - `skills`: **0 rows**
  - `experiences`: **0 rows**
  - `contact_messages`: **0 rows**
- **Architecture Reality:** The database has the correct DDL applied, but is **completely empty (unseeded)**. The entire application functions via the `HybridProjectRepository` local fallback in TypeScript.

---

# 25. Environment / Secrets Audit

| Variable Name | Required | Status | Scope | Exposure Risk |
| :--- | :--- | :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | YES | DEFAULTED (`https://abdulghani.dev`) | Client & Server | SAFE (Public) |
| `NEXT_PUBLIC_DEFAULT_LOCALE` | NO | DEFAULTED (`en`) | Client & Server | SAFE (Public) |
| `NEXT_PUBLIC_SUPABASE_URL` | YES | **PRESENT** in `.env.local` | Client & Server | SAFE (Public) |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | YES | **PRESENT** in `.env.local` | Client & Server | SAFE (Public) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | NO | MISSING (Handled via publishable key) | Client & Server | SAFE |
| `SUPABASE_SERVICE_ROLE_KEY` | NO | **MISSING** in `.env.local` | Server Only | SAFE (Not committed) |
| `GEMINI_API_KEY` | OPTIONAL | **MISSING** in `.env.local` | Server Only | SAFE (Causes offline AI fallback) |
| `CONTACT_NOTIFICATION_EMAIL` | OPTIONAL | **MISSING** in `.env.local` | Server Only | SAFE |

- **Git Secret Scan [GIT]:** Zero unencrypted secrets or private API keys were found committed to Git history. `.env.local` is properly excluded by `.gitignore`.

---

# 26. APIs

- **Active API Endpoints [ROUTE] [CODE]:**
  - `POST /api/ai/chat`:
    - File: `app/api/ai/chat/route.ts`
    - Input: JSON `{ message: string, locale?: "en" | "ar", history?: [...] }` validated with Zod.
    - Rate Limit: In-memory sliding window (20 requests per minute per IP).
    - Logic: Checks `GEMINI_API_KEY`. Because the key is missing in `.env.local`, it executes `generateOfflineResponse()` which provides deterministic, grounded answers regarding Abdulghani's background, education, and 5 verified projects.
    - Live Test: Successfully returned HTTP 200 with accurate JSON reply `[TEST]`.
- **Missing API Endpoints [CODE]:**
  - No `POST /api/contact` endpoint exists. Contact form writes directly to Supabase from the client.

---

# 27. Security Forensics

1. **Security Headers [CODE]:**
   Configured in `next.config.ts` and `vercel.json` (`HSTS`, `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `X-XSS-Protection: 1; mode=block`, `Referrer-Policy: origin-when-cross-origin`).
2. **Missing CSP [CODE]:**
   Neither `next.config.ts` nor `vercel.json` enforces a `Content-Security-Policy` header, leaving client-side script injection unconstrained.
3. **Client-Side Database Mutations [CODE]:**
   The browser client inserts directly into the `contact_messages` table using anonymous public credentials. While RLS allows INSERT, rate-limiting is not enforced at the database level.
4. **Dependency Vulnerabilities [TEST]:**
   `pnpm audit` reports 4 vulnerabilities (2 high, 2 moderate) in `postcss` via Next.js dependencies.

---

# 28. Accessibility Forensics

1. **Keyboard & Focus States [CODE]:**
   Focus indicators (`:focus-visible`) configured in CSS with gold outlines. Modal dialogs trap focus and support Escape-to-close.
2. **ARIA Landmarks & Semantics [CODE]:**
   `<main>`, `<nav>`, `<header>`, `<footer>` landmarks used properly. Modals use `role="dialog"` and `aria-modal="true"`.
3. **Color Contrast Deficiencies [CODE]:**
   In Light Mode, hardcoded dark containers (`Footer`, `YusraCaseStudySection`, `ProjectPreviewGraphic`) create mixed-mode contrast failures where light-mode text tokens clash against dark backgrounds.

---

# 29. Performance Forensics

1. **Client Component Bloat [CODE]:**
   All 10 section components in `components/features/home/` include `"use client";`, forcing Next.js to bundle entire landing page structures into client JS chunks (First Load JS ~195 kB).
2. **Heavy Image Assets [ASSET]:**
   `public/images/profile/abdulghani-hero.png` is 1.92 MB and uncompressed. Must be replaced with the existing WebP variant (`abdulghani-profile-hero.webp`, 163 KB).
3. **Render-Blocking Fonts [CODE]:**
   Previous implementation loaded Google Fonts via blocking `<link>` tags in `<head>`. Needs modernization with zero-layout-shift `next/font/google`.

---

# 30. SEO Forensics

1. **Robots & Sitemap [ROUTE]:**
   - `/robots.txt` returns HTTP 200 with clean crawler directives.
   - `/sitemap.xml` returns HTTP 200 with 28 bilingual static routes.
2. **Structured Data (JSON-LD) [CODE]:**
   - `app/[locale]/layout.tsx` injects valid Schema.org `Person` and `ProfilePage` JSON-LD.
   - `app/[locale]/projects/[slug]/page.tsx` injects valid Schema.org `SoftwareApplication` JSON-LD.
3. **Missing OpenGraph Image Asset [ASSET]:**
   Metadata references `${SITE_URL}/images/og-cover.png`, but `og-cover.png` is missing from `public/images/` (causes 404 for social crawlers).

---

# 31. Content Forensics

1. **Authentic Profile Baseline [CODE]:**
   - Student at University of Modern Sciences, Sana'a, Yemen (3rd Year IT).
   - Core technical competencies: C# .NET, Oracle, Python, ITIL, SQL, systems analysis.
   - Verified awards: UMS Innovation Award (2nd place), IBCT Novice Trainer certification.
2. **Discrepancies to Cleanse [DOCUMENT] [CODE]:**
   - Remove hyperbolic claims of being an "Autonomous Systems Architect" or building "low-latency state machines".
   - Eliminate references to "Nexora Tech" as an authentic project (it is NovaTech).
   - Resolve "Yusra" status: Either formally clarify it as an academic concept / UI prototype or remove it from the primary featured showcase.

---

# 32. Quality of User Experience (UX)

- **What Works:** The interactive simulations (`CampusITTrackerSimulation`, `MetaAlgorithmLabSimulation`, `CafenaSimulation`, `NovaTechSimulation`, `GpSimulation`) are exceptionally well-engineered with rich interactive controls, telemetry, and authentic Arabic/English support `[CODE]`.
- **What Breaks:** The homepage and all subpages currently crash with HTTP 500 at runtime `[ROUTE]`.
- **What Confuses:** Mismatched project names (e.g. Nexora vs NovaTech), missing dark/light theme persistence, and non-functional contact submission feedback `[CODE]`.

---

# 33. Product Improvement Discovery (Proposals Only)

1. **Unify Project Identity:**
   - *Current:* Discrepancy between NovaTech and Nexora; confusion over Yusra.
   - *Proposed:* Establish the 5 authentic projects (`Cafena`, `Campus IT Tracker`, `GP`, `MetaAlgorithmLab`, `NovaTech`) as the primary portfolio showcases. Feature Yusra clearly labeled as an "Academic AI Concept Study".
   - *Value:* High | *Effort:* Low | *Priority:* P1.
2. **Server-Side Contact Dispatch:**
   - *Current:* ContactForm inserts client-side to Supabase; no email notification to owner.
   - *Proposed:* Build `/api/contact` route handler integrating Resend or Nodemailer to deliver messages directly to `samyemen987@gmail.com`.
   - *Value:* High | *Effort:* Medium | *Priority:* P1.
3. **True Dual-Theme Engine:**
   - *Current:* Mislabeled `--gold-*` tokens, hardcoded dark classes in footer.
   - *Proposed:* Pure Obsidian Black (`#0B0B0C`) for Dark Mode; warm porcelain (`#FAF9F6`) with dark slate typography and gold accents for Light Mode.
   - *Value:* High | *Effort:* Medium | *Priority:* P1.

---

# 34. "Wow Factor" Analysis

1. **Interactive Workstation Sandboxes:** The existing 5 simulations in `demos/simulations/` are genuine engineering achievements that provide tangible proof of technical competence. Elevating them with smooth mounting and live terminal telemetry will create an immediate positive impression for technical recruiters and clients.
2. **Bilingual RTL Polish:** The Arabic layout mirror, Cairo/Amiri typography, and culturally resonant Shibam architectural motifs provide authentic regional distinctiveness without compromising international engineering standards.
3. **Grounded AI Concierge:** Upgrading `/api/ai/chat` with an active Gemini 2.5 Flash API key while retaining the deterministic offline fallback provides a responsive interactive portfolio assistant.

---

# 35. Cleanup Candidates

| Action | Target Item | Path | Evidence |
| :--- | :--- | :--- | :--- |
| **RESTORE** | 6 Truncated Core Files | `app/layout.tsx`, `app/globals.css`, `lib/data/projectsData.ts`, `demos/registry/index.ts`, `tailwind.config.ts` | Truncated to 0 bytes; clean versions exist in Git commit `2969e9d` `[GIT]` `[CODE]` |
| **REMOVE** | Phantom Yusra Simulation | `demos/simulations/YusraSimulation.tsx` | 0-byte file causing compilation errors `[CODE]` |
| **REMOVE** | Obsolete Design References | `design-references/` (12 folders) | Static HTML/JSON/PNG mockups; unreferenced in code `[GIT]` |
| **REMOVE** | Obsolete Concept Renders | `new/` (5 files) | Unused image renders `[GIT]` |
| **ARCHIVE** | Prompt & Design Mockup | `docs/cleanup/MASTER PROMPT`, `new_design.png`, `abdulghani.png` | Move from project root to `docs/design/` or `docs/archive/` `[ASSET]` |
| **REMOVE** | Unverified Project Cards | `public/images/projects/nexora-card.png`, `yusra-*` | Remove or relocate if projects remain excluded `[ASSET]` |
| **CONSOLIDATE**| Canonical vs Home Sections | `components/canonical/` vs `components/features/home/` | Resolve architectural duplication `[CODE]` |

---

# 36. Master Issue Registry

### P0 — BLOCKER:
- **ISSUE-01: Catastrophic 0-Byte Core File Truncation**
  - *Area:* Compiler / Runtime / Build
  - *Files:* `app/layout.tsx`, `app/globals.css`, `lib/data/projectsData.ts`, `demos/registry/index.ts`, `demos/simulations/YusraSimulation.tsx`, `tailwind.config.ts`.
  - *Evidence:* Length 0 bytes on disk; `pnpm build` fails; all HTTP routes return 500 `[BUILD]` `[ROUTE]`.
  - *Action:* Restore the 5 tracked files from Git commit `2969e9d` and delete the empty `YusraSimulation.tsx`.
- **ISSUE-02: Working Tree Corruption and Desynchronization**
  - *Area:* Version Control
  - *Evidence:* 82 files modified/deleted, 17 untracked items dangling `[GIT]`.
  - *Action:* Reconcile uncommitted changes cleanly after report review.

### P1 — HIGH:
- **ISSUE-03: Project Catalog Contradiction (Yusra & Nexora vs 5 Verified Projects)**
  - *Area:* Domain Data / Content
  - *Files:* `components/features/home/FeaturedProjectsSection.tsx`, `tests/core-domain.test.mjs`.
  - *Evidence:* Hardcoded arrays referencing non-existent repositories `[CODE]`.
  - *Action:* Re-align catalog strictly to the 5 verified projects.
- **ISSUE-04: Supabase Database Unseeded**
  - *Area:* Database
  - *Evidence:* REST probe returns 0 rows across all 8 tables `[SUPABASE]`.
  - *Action:* Seed database or formally confirm local-first architecture.
- **ISSUE-05: Broken Light Mode & Missing ThemeProvider**
  - *Area:* Theming / UI
  - *Files:* `components/layout/Footer.tsx`, `components/features/home/YusraCaseStudySection.tsx`, `app/layout.tsx`.
  - *Evidence:* Hardcoded `bg-[#0B0B0C]`; missing `ThemeProvider` in layout `[CODE]`.
  - *Action:* Re-inject `ThemeProvider` and eliminate hardcoded dark backgrounds.
- **ISSUE-06: Missing Environment Secrets**
  - *Area:* Environment
  - *Files:* `.env.local`.
  - *Evidence:* `GEMINI_API_KEY` missing; AI chat forced into offline fallback `[CODE]`.
  - *Action:* Supply API keys in `.env.local`.

### P2 — MEDIUM:
- **ISSUE-07: Semantic Color Token Misalignment**
  - *Area:* Design System
  - *Files:* `app/globals.css`, `tailwind.config.ts`.
  - *Evidence:* `--gold-primary` set to `#6366F1` (Indigo); `--gold-secondary` set to `#06B6D4` (Cyan) `[CODE]`.
  - *Action:* Map `--gold-*` variables to authentic Royal Gold (`#D4AF37`).
- **ISSUE-08: Missing OpenGraph Cover Image**
  - *Area:* SEO / Assets
  - *Files:* `public/images/og-cover.png`.
  - *Evidence:* File does not exist; social crawlers receive 404 `[ASSET]`.
  - *Action:* Generate or copy a high-resolution 1200x630 `og-cover.png`.
- **ISSUE-09: Unoptimized Hero Image**
  - *Area:* Performance
  - *Files:* `public/images/profile/abdulghani-hero.png` (1.92 MB).
  - *Evidence:* Raw uncompressed PNG `[ASSET]`.
  - *Action:* Use existing WebP asset (`abdulghani-profile-hero.webp`, 163 KB).
- **ISSUE-10: Dependency Vulnerabilities in PostCSS**
  - *Area:* Security
  - *Evidence:* `pnpm audit` reports 2 high and 2 moderate vulnerabilities in `postcss` `[TEST]`.
  - *Action:* Update Next.js or add pnpm override for `postcss >= 8.5.23`.

### P3 — LOW:
- **ISSUE-11: Deprecated `next lint` Command**
  - *Area:* Tooling
  - *Evidence:* Next.js 15.5 warns `next lint` will be removed in Next.js 16 `[CODE]`.
  - *Action:* Migrate to standard ESLint CLI `eslint .`.

---

# 37. Contradiction Register

| Contradiction ID | Source A | Source B | Factual Finding | Trust Assessment |
| :--- | :--- | :--- | :--- | :--- |
| **CONTRA-01** | `PROGRESS.md` Phase 10.1 (Yusra Purged) | `PROGRESS.md` Phase 24 & `MASTER PROMPT` (Yusra Flagship) | The filesystem in `Projects/` contains only 5 verified repositories. Yusra has no source codebase, only an Arabic conceptual document `docs/yusra_foundation_summary.txt`. | Phase 10.1 reflects authentic engineering reality. Phase 24 was an unverified attempt to match visual mockup `new_design.png`. |
| **CONTRA-02** | `IMPLEMENTATION_LOG.md` Entry 025 (Build Verified) | Actual CLI output (`pnpm build` & `pnpm tsc`) | The build fails immediately with exit code 1 because 6 core files are 0 bytes. | CLI compiler output is absolute ground truth. Entry 025 was logged prematurely prior to system crash. |
| **CONTRA-03** | `AGENTS.md` (Obsidian & Royal Gold) | `2969e9d:app/globals.css` (Titanium & Electric Indigo) | The active Git HEAD CSS uses Electric Indigo `#6366F1` under the variable name `--gold-primary`. | `AGENTS.md` is the governing standard; CSS reflects a temporary Option 1 redesign that was never re-tokenized. |
| **CONTRA-04** | `FeaturedProjectsSection.tsx` ("Nexora Tech") | `lib/data/projectsData.ts` and `Projects/NovaTech` | The project is named NovaTech (C# WinForms ERP). Nexora was a conceptual name variant from early design mockups. | `Projects/NovaTech` is the authentic source. |
| **CONTRA-05** | `app/layout.tsx` metadata ("Autonomous Systems Architect") | `lib/data/profile.ts` and `certificates/` | Abdulghani is a 3rd-year IT student with solid C#, Oracle, Python, and web development skills. | `lib/data/profile.ts` and authentic certificates are trustworthy. |

---

# 38. Final Pre-Cleanup Map

```text
PRE-CLEANUP CLASSIFICATION MATRIX:

[A. MUST PRESERVE — HEALTHY CORE ASSETS]
├── Projects/ (All 5 original standalone repositories)
│   ├── Cafena/
│   ├── Campuse_IT_Tracker/
│   ├── Gp/
│   ├── MetaAlgorithmLab_Clean_Structure/
│   └── NovaTech/
├── demos/simulations/ (All 5 authentic interactive simulations)
│   ├── CafenaSimulation.tsx (799 lines)
│   ├── CampusITTrackerSimulation.tsx (751 lines)
│   ├── GpSimulation.tsx (656 lines)
│   ├── MetaAlgorithmLabSimulation.tsx (731 lines)
│   └── NovaTechSimulation.tsx (777 lines)
├── lib/data/credentials.ts (Verified certifications and awards)
├── lib/data/profile.ts (Verified biographical and contact data)
├── certificates/ (Original source document scans: 1.png, 2.jpeg, 3.jpeg, 4.jpeg, 5.png)
├── public/images/certificates/ (High-res certificate web delivery assets)
├── public/images/profile/ (Optimized WebP portrait assets)
├── app/api/ai/chat/route.ts (Rate-limited AI handler with offline fallback)
└── Git Commit 2969e9d (Clean, compilable baseline commit on main)

[B. MUST INVESTIGATE — DESIGN & DOMAIN DECISIONS]
├── Choice of Landing Page Architecture:
│   ├── Option 1: Restore components/canonical/ from Git HEAD
│   └── Option 2: Stabilize components/features/home/ (new_design.png layout)
└── Yusra Project Status:
    ├── Option A: Completely purge per Phase 10.1
    └── Option B: Feature in a dedicated "Academic Research & Conceptual AI" section

[C. SAFE CANDIDATES FOR CLEANUP — IMMEDIATE REMOVAL]
├── design-references/ (12 folders of obsolete static HTML/PNG mocks, 107+ KB)
├── new/ (5 temporary concept renders)
├── demos/simulations/YusraSimulation.tsx (0-byte corrupted file)
├── public/images/projects/nexora-card.png (Unverified asset)
├── public/images/projects/yusra-* (Unverified assets)
└── Untracked root files: "docs/cleanup/MASTER PROMPT", docs/yusra_foundation_summary.txt

[D. HIGH-RISK CLEANUP — REQUIRE CAREFUL CODE RECONCILIATION]
├── Restoring the 6 truncated 0-byte files from Git commit 2969e9d
└── Resolving token collision between Electric Indigo and Royal Gold

[E. BROKEN FUNCTIONALITY TO REPAIR]
├── Missing module exports in app/layout.tsx and app/globals.css
├── Truncated demos/registry/index.ts and lib/data/projectsData.ts
├── Missing ThemeProvider in component hierarchy
├── Hardcoded dark styles in Footer and case study sections
└── Missing public/images/og-cover.png
```

---

# 39. Recommended Next Phase

### **CLEANUP & CONSOLIDATION (RESTORATION, CANONICAL UNIFICATION & REBUILD)**

The next engineering phase must NOT attempt new feature additions or visual experimentation. It must execute this strict 4-step stabilization sequence:

1. **Step 1: Emergency File Restoration (Restore Health):**
   - Restore the 5 tracked truncated files (`app/layout.tsx`, `app/globals.css`, `lib/data/projectsData.ts`, `demos/registry/index.ts`, `tailwind.config.ts`) directly from clean Git commit `2969e9d`.
   - Delete the 0-byte untracked file `demos/simulations/YusraSimulation.tsx`.
   - Verify that `pnpm tsc --noEmit`, `pnpm test`, and `pnpm build` compile with 0 errors.

2. **Step 2: Architectural Decision & Home Unification:**
   - Align with the owner on whether to retain the Git HEAD canonical structure or adopt the 10-section layout from `new_design.png`.
   - If adopting the 10-section layout: convert sections into clean Server Components, purge obsolete references to Yusra/Nexora, and bind data directly to `lib/services/projectRepository.ts`.

3. **Step 3: Dual-Theme Harmonization:**
   - Normalize CSS variables in `app/globals.css` so that `--gold-primary` represents genuine Royal Gold (`#D4AF37`) and `--canvas-bg` represents pure Obsidian Black (`#0B0B0C`).
   - Implement authentic Light Mode with off-white porcelain surfaces (`#FAF9F6`), eliminating all hardcoded pitch-black containers in `Footer` and case study components.
   - Verify `ThemeProvider` is mounted at root.

4. **Step 4: Quality & Asset Polish:**
   - Generate `public/images/og-cover.png` (1200x630) to eliminate 404 OpenGraph errors.
   - Replace uncompressed 1.92 MB portrait with optimized WebP variant.
   - Run automated unit, integration, and a11y test suites before formal commit.

---
**Audit Completed By:** Antigravity Autonomous Agent  
**Audit Output Location:** `docs/qa/ALSHIBAMI_FORENSIC_BASELINE_AUDIT.md`  
**Execution Timestamp:** 2026-09-29T10:19:34+03:00  
**Status:** FORENSIC BASELINE ESTABLISHED — AWAITING OWNER REVIEW
