# REPOSITORY_STRUCTURE.md — AUTHORITATIVE REPOSITORY ARCHITECTURE

**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Platform  
**Owner:** عبدالغني الشبامي | Abdulghani Al-Shibami  
**Operating Standard:** Enterprise Production-Grade Autonomous Engineering  
**Version:** 2.0.0 (Phase 02 Architecture Consolidation)  

---

## 1. Directory Purpose & Structure Overview

The repository follows a clean, single-canonical Next.js App Router architecture. Every directory has a strictly defined boundary and responsibility.

```text
Portifilo/
│
├── app/                              # Next.js App Router (Routes & Layouts)
│   ├── [locale]/                     # Bilingual route tree (/en, /ar)
│   │   ├── projects/                 # Project catalog & case studies
│   │   │   ├── [slug]/               # Project detail route
│   │   │   │   └── demo/             # Workstation interactive demo route
│   │   │   └── page.tsx              # Projects catalog page
│   │   ├── credentials/              # Verified credentials & certificates
│   │   ├── showcase/                 # Interactive live demo showroom
│   │   ├── layout.tsx                # Locale-aware layout wrapper
│   │   └── page.tsx                  # Executive modular homepage
│   ├── api/                          # Serverless API endpoints
│   │   └── ai/chat/                  # Autonomous AI chat assistant endpoint
│   ├── globals.css                   # Global CSS tokens, surfaces & animations
│   ├── layout.tsx                    # Root HTML shell & ThemeProvider
│   ├── robots.ts                     # Search engine crawler policy
│   └── sitemap.ts                    # Dynamic XML sitemap generator
│
├── components/                       # Atomic & Feature UI Components
│   ├── ui/                           # Pure presentational atomic elements (Button, Badge, Card)
│   ├── layout/                       # Global shell components (Navbar, Footer, LanguageSwitcher)
│   ├── features/                     # Domain-specific functional systems
│   │   ├── home/                     # Modular homepage sections (10 executive sections)
│   │   ├── projects/                 # Project catalog, card, filters & case study modules
│   │   ├── credentials/              # Certificate viewer, card & modals
│   │   ├── demos/                    # Demo viewer & workstation switcher
│   │   └── ai/                       # AI assistant drawer & floating trigger
│   └── reference/                    # [DEPRECATED] Historical visual reference components
│
├── lib/                              # Business Logic, DAL, Utilities & State
│   ├── data/                         # Authoritative local data sources (projectsData.ts, certificates)
│   ├── services/                     # Data access layer (projectRepository.ts, contactService.ts)
│   ├── i18n/                         # Dictionaries, locale detection & translation helpers
│   ├── theme/                        # ThemeProvider, theme state & zero-flash scripts
│   ├── supabase/                     # Supabase client & server factory instances
│   ├── ai/                           # Local deterministic AI knowledge engine & Gemini client
│   └── utils/                        # Pure utility functions (formatting, classnames, cn)
│
├── demos/                            # Authentic Interactive Demo System
│   ├── registry/                     # Canonical DEMO_REGISTRY definitions
│   └── simulations/                  # 5 authentic browser simulations for verified projects
│
├── public/                           # Static Public Assets (Served at root)
│   ├── images/
│   │   ├── profile/                  # Authentic owner portraits (WebP optimized)
│   │   ├── projects/                 # Verified project preview graphics & cards
│   │   ├── certificates/             # High-res certificate web assets
│   │   └── og/                       # OpenGraph social share previews (1200x630)
│   ├── docs/                         # Official CV PDF download
│   └── fonts/                        # Local webfont fallbacks
│
├── supabase/                         # Database Infrastructure
│   ├── migrations/                   # Idempotent PostgreSQL DDL migrations
│   └── seed/                         # Verified project seed data
│
├── tests/                            # Automated Verification Suites
│   ├── core-domain.test.mjs          # Domain integrity & project catalog assertions
│   └── ...                           # Route, schema & i18n validation suites
│
├── docs/                             # Structured Engineering Documentation
│   ├── architecture/                 # Architecture Decision Records & Structure specs
│   ├── qa/                           # Forensic audits, test reports & evidence
│   └── archive/                      # Quarantined, legacy, or historical work
│
└── config files                      # Root build & tool configurations
    ├── next.config.ts                # Next.js security headers & image domains
    ├── tailwind.config.ts            # Bespoke design tokens & color palettes
    ├── tsconfig.json                 # TypeScript strict compiler options
    └── package.json                  # Dependencies & execution scripts
```

---

## 2. Architectural Boundaries

To prevent regressions, circular dependencies, and split-brain architectures:

1. **Separation of Presentation and Data Access:**
   - UI components (`components/`) must never directly invoke raw database queries or fetch third-party APIs.
   - All data fetching must pass through `lib/services/` (e.g. `projectRepository.ts`).
2. **Server vs. Client Component Boundaries:**
   - Pages in `app/[locale]/` are Server Components by default for maximum performance, SEO, and zero client JS.
   - Client interactivity (`"use client"`) is restricted to leaf elements: ThemeToggle, LanguageSwitcher, interactive modals, and simulation sandboxes.
3. **Data Immutability & Source Truth:**
   - The authoritative project catalog is defined in `lib/data/projectsData.ts` and encapsulated by `lib/services/projectRepository.ts`.
   - Components must not hardcode disparate project lists.

---

## 3. Canonical Components

Every UI role has exactly ONE canonical component:
- **Navigation:** `components/layout/Navbar.tsx`
- **Footer:** `components/layout/Footer.tsx`
- **Language Switcher:** `components/layout/LanguageSwitcher.tsx`
- **Theme Switcher:** `components/layout/ThemeToggle.tsx`
- **Brand Logo:** `components/ui/AsLogo.tsx`
- **Project Card:** `components/features/projects/ProjectCard.tsx`
- **Project Catalog:** `components/features/projects/ProjectCatalogView.tsx`
- **Certificate Card:** `components/features/credentials/CertificateCard.tsx`
- **Demo Runner:** `components/features/demos/DemoViewer.tsx`
- **Live Simulator:** `components/features/demos/LiveDemoStudio.tsx`
- **AI Assistant:** `components/features/ai/AbdulghaniAIModal.tsx`

---

## 4. Canonical Data Sources

1. **Projects:** `lib/data/projectsData.ts` (strictly 5 verified projects: `campus-it-tracker`, `metaalgorithm-lab`, `novatech`, `cafena`, `gp`).
2. **Certificates:** `components/features/credentials/CredentialsCatalogView.tsx` (strictly 5 verified credentials matching `certificates/`).
3. **Owner Profile:** `lib/data/profileData.ts` / `dictionaries.ts` (Bachelor of IT, UMS, Sana'a).
4. **Demos:** `demos/registry/index.ts`.

---

## 5. Canonical Routes

- `/[locale]` — Modular Executive Homepage
- `/[locale]/projects` — Project Catalog with Category Filtering
- `/[locale]/projects/[slug]` — Deep-dive Architectural Case Study
- `/[locale]/projects/[slug]/demo` — Fullscreen Interactive Workstation Simulation
- `/[locale]/credentials` — Verified Credentials & High-Res Document Viewer
- `/[locale]/showcase` — Multi-Sandbox Interactive Workstation Studio
- `/api/ai/chat` — Secure AI Assistant API Endpoint

---

## 6. Canonical Demos

1. **Campus IT Tracker:** `demos/simulations/CampusITTrackerSimulation.tsx` (Topology & ITIL Incident Simulation)
2. **MetaAlgorithm Lab:** `demos/simulations/MetaAlgorithmLabSimulation.tsx` (In-Browser Benchmark & Sorting Visualizer)
3. **NovaTech:** `demos/simulations/NovaTechSimulation.tsx` (Cyber Gadgets Storefront, Cart & Invoice Simulation)
4. **Cafena:** `demos/simulations/CafenaSimulation.tsx` (Artisanal Coffee Cart & Search Simulation)
5. **Graduation Project Portal:** `demos/simulations/GpSimulation.tsx` (Academic Review & Proposal Workflow)

---

## 7. Asset Organization

- **Owner Portraits:** `public/images/profile/` (`abdulghani-profile.webp`, `abdulghani-profile-hero.webp`, `abdulghani-profile-thumb.webp`).
- **Project Previews:** `public/images/projects/` (`campus-card.png`, `meta-card.png`, `novatech-preview.png`, `cafena-preview.png`, `gp-preview.png`).
- **Certificates:** `public/images/certificates/` (5 web-optimized scans matching physical documents).
- **Documents:** `public/docs/Abdulghani_Al-Shibami_CV.pdf`.

---

## 8. Testing Organization

All tests are centralized in `tests/`:
- `tests/core-domain.test.mjs` — Domain assertions, credential verification, and project slug checks.
- Executed via `pnpm test` (`node --test`).

---

## 9. Documentation Organization

- Root Governance Files: `README.md`, `ROADMAP.md`, `TASKS.md`, `PROGRESS.md`, `IMPLEMENTATION_LOG.md`, `CHANGELOG.md`, `AGENTS.md`.
- Technical & Design Specs: `docs/architecture/`, `docs/design/`, `docs/database/`, `docs/qa/`.
- Archive Policy: All superseded, experimental, or quarantined files are stored under `docs/archive/` and never left in the active source tree.
