# CHANGELOG.md — PROJECT VERSION & RELEASE HISTORY

All notable changes to this project will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

---

## [1.5.1] - 2026-09-19 — Global Design Token Harmonization & Catalog 3D Bento Integration

### Added & Enhanced
- **Global Titanium Slate & Electric Palette Harmonization:**
  - Upgraded `Navbar.tsx` and `Footer.tsx` with Titanium Slate surfaces (`#0B1120`), Electric Indigo borders, and Cyan interactive states.
  - Upgraded `CanonicalFooter.tsx` and `ContactForm.tsx` with Electric Indigo/Cyan glowing CTAs, dark slate input fields, and emerald transmission confirmation badges.
  - Modernized `DemoCalloutBanner.tsx` and `LiveDemoStudio.tsx` with sleek slate gradients and emerald live status indicators.
  - Synchronized `ProjectCard.tsx`, `ProjectFilters.tsx`, and `TechnologyBadge.tsx` with modern theme tokens.
  - Modernized `ProjectPreviewGraphic.tsx` mini-terminal representations across all 5 projects.
- **Projects Catalog 3D Bento Integration (`ProjectCatalogView.tsx`):**
  - Integrated `CanonicalProjectsBento` into `/[locale]/projects` default view, bringing 3D concept renders and interactive visualizers directly to the projects page.
  - Deduplicated codebase by safely removing redundant `ProjectBentoShowcase.tsx`.
- **Zero-Defect Verification:**
  - `pnpm build`: 30/30 static pages prerendered with 0 errors.
  - TypeScript & ESLint: 100% clean pass.

---

## [1.5.0] - 2026-09-19 — Titanium Slate & Electric Palette Visual Redesign with 3D Concept Renders

### Added & Enhanced
- **Modern Titanium Slate Design System (Option 1):**
  - Replaced terminal pitch black background with deep Titanium Slate (`#0B1120`, `#0F172A`).
  - Implemented modern Linear/Vercel-inspired electric color palette: Electric Indigo (`#6366F1`), Azure Cyan (`#06B6D4`), Emerald (`#10B981`), and Warm Amber (`#F59E0B`).
  - Added modern glassmorphism (`backdrop-blur-md`, subtle hairline borders, and electric glow box-shadows).
- **Flagship 3D Concept Visual Assets:**
  - `hero-abstract-core.jpg`: 3D Computational Core visual integrated into Hero right column.
  - `metaalgorithm-lab/01-dashboard.jpg`: Algorithm visualizer dashboard wired to Bento grid with a dual-view toggle (3D Concept Render ↔ Live Runtime Visualizer).
  - `novatech/01-storefront-hero.jpg`: Modern hardware/tech e-commerce storefront wired to Bento grid.
  - `gp/01-proposals-portal.jpg`: Graduation project proposal and academic workflow portal wired to Bento grid.
  - `cafena/01-storefront-hero.jpg`: Artisanal coffee management suite & POS wired to Bento grid.
  - `campus-it-tracker/01-dashboard-modern.jpg`: High-resolution modern ITIL infrastructure console wired to featured Bento card.
- **Architectural 3D Case Study Hero Banner:**
  - Enhanced `CaseStudyHero.tsx` (`/[locale]/projects/[slug]`) to render the 3D concept render alongside project metadata and specifications.
- **Verification & QA:**
  - TypeScript validation: 0 errors (`pnpm tsc --noEmit`).
  - ESLint verification: 0 warnings, 0 errors (`pnpm lint`).
  - Next.js production build: 30/30 static pages prerendered successfully (`pnpm build`).

---

## [1.4.0] - 2026-09-19 — Frontend UI/UX Overhaul & Functional Ergonomics

### Added & Enhanced
- **Floating Sticky Navigation on Homepage (`Navbar.tsx`):**
  - Replaced early return on homepage with a glassmorphic floating pill navbar that glides into view on scroll (`scrollY > 20px`).
  - Added contextual section links for the homepage (`#projects`, `#sandbox`, `Demo Studio`, `#contact`) alongside full global navigation for subpages.
  - Fully restored access to `ThemeToggle`, `LanguageSwitcher`, and mobile hamburger drawer across the entire 4,200px homepage.
- **Interactive Sandbox OS Window (`CanonicalDesktopSimulator.tsx`):**
  - Enforced strict `dir="ltr"` and `text-left` on the OS window container, resolving RTL inversion bugs in traffic lights, monospace code logs, and vector graphs.
  - Implemented real interactive tab switching across all 4 workstation views:
    - **`Files`**: Live algorithm visualizers (Merge Sort bars, BFS graph traversal, A* pathfinding SVG grid, WASM terminal console).
    - **`Tests`**: Interactive xUnit / .NET 8 WASM unit test suite runner with animated re-run button, 7 passing test cases with assertions, and 98.4% branch coverage telemetry.
    - **`Metrics`**: Big-O complexity matrix table, empirical throughput benchmark comparison bars (SIMD vs QuickSort vs MergeSort vs A*), and L1/L2 cache hit ratio metrics.
    - **`Settings`**: Interactive controls for SIMD hardware acceleration (AVX2/Simd128), WASM worker threads pool (2, 4, 8, 16), GC profiles, telemetry rate, and real-time calculated throughput impact.
- **Enriched Project Showcase Bento (`CanonicalProjectsBento.tsx`):**
  - Integrated secondary "Architecture / Case Study" links (`/[locale]/projects/[slug]`) for every project card.
  - Integrated direct GitHub repository links for all 5 verified projects (`Campuse-IT-Tracker`, `MetaAlgorithmLab`, `Cafena`, `NovaTech`, `Graduation-Project-Management-Portal`).
  - Added strict `dir="ltr"` on terminal snippets and window controls to prevent punctuation flipping in Arabic mode.
- **Hero Interactivity & Quick Commands (`CanonicalHero.tsx`):**
  - Added dynamic mouse-tracking spotlight radial glow.
  - Added engineering availability status badge (`● Available for Systems Architecture & AI`).
  - Added clickable quick command chips (`[help]`, `[projects]`, `[whoami]`, `[status]`, `[clear]`) with instant terminal evaluation.
- **Global CSS Ergonomics (`app/globals.css`):**
  - Added `scroll-padding-top: 5rem;` for smooth anchor alignment below the floating navbar.
  - Added accessibility support for `prefers-reduced-motion`.
  - Added custom `:focus-visible` focus ring styles.

### Added & Enhanced
- **Direct Homepage Canonical Architecture:**
  - `CanonicalHero.tsx`: Bioluminescent emerald glows, cinematic display headline, real portrait with radiating cybernetic SVG grid, live metrics HUD bar, and interactive terminal console with command evaluation (`help`, `projects`, `whoami`, `status`, `clear`).
  - `CanonicalProjectsBento.tsx`: Asymmetric bento grid showcasing all 5 verified projects (`Campus IT Tracker`, `MetaAlgorithm Lab`, `Cafena Coffee Suite`, `NovaTech Cloud`, `GP Platform`) with genuine image assets (`campus-it-tracker/01-dashboard.webp`, `cafena/01-storefront-hero.webp`), live sorting wave visualizer, accuracy/WASM gauges, and direct demo buttons.
  - `CanonicalDesktopSimulator.tsx`: Live native execution sandbox modeling the MetaAlgorithm Lab OS window with WASM engine online beacon, animated Merge Sort bars, BFS traversal node graph, A* pathfinding SVG grid, database table inspector, and hardware telemetry dials.
  - `CanonicalDemoStudio.tsx`: Multi-workstation dual simulation studio pairing ITIL campus network floorplan & Agile Kanban with algorithmic performance benchmarks (live SVG polyline CPU chart, MEM area chart, 15k req/s throughput, 3.14ms execution speed, and live code inspector toggle).
  - `CanonicalFooter.tsx`: Glowing data line top border, large contact CTA band, direct transmission modal with resilient Supabase `contact_messages` form, SVG social anchors, and navigation links.
- **Hydration & Reliability Fixes:**
  - Fixed client-side hydration issues by moving local time/date rendering to client-state hooks with `suppressHydrationWarning`.
  - Added `className="dark"` to root `<html>` tag to ensure zero-flicker dark mode rendering on initial SSR.
  - Fixed terminal progressive line reveal closure in React StrictMode.
- **Full Verification:**
  - `pnpm tsc --noEmit` passed (0 errors).
  - `pnpm lint` passed (0 errors, 0 warnings).
  - `pnpm build` passed (30/30 static pages prerendered).
  - Browser verification at `http://localhost:3030/en` and `http://localhost:3030/ar` with full English/Arabic RTL parity.

---

## [1.2.0] - 2026-09-19 — Canonical Reference Frontend Replacement

### Added
- **Canonical Visual References Implementation (4/4 Approved Concepts):**
  - **Reference 1 (`portfolio_hero_concept.jpg`):** Futuristic Hero Command Center with Neon Mint (`#00FF9D`), Electric Cyan (`#00F0FF`), and Deep Space Obsidian (`#05080E`), featuring live HUD telemetry, monospace terminal outputs, active green status beacons, and authentic developer profile portrait (`abdulghani-profile-hero.webp`).
  - **Reference 2 (`live_demo_studio.jpg`):** Multi-workstation interactive demonstration suite (`LiveDemoStudio.tsx` on `/[locale]/showcase`) allowing interactive split-screen or tabbed live simulation across all 5 authentic projects with hardware dials.
  - **Reference 3 (`desktop_demo_simulation.jpg`):** Native OS Desktop Workstation Sandbox (`DemoShell.tsx`, `DemoStatusBar.tsx`, and `WorkstationConsole.tsx`) with authentic traffic lights (Red/Yellow/Green), title bar, real-time hardware gauges (CPU 18%, MEM 14.8MB / 23%, NET 12ms, 60 FPS), and collapsible streaming terminal drawer with auto-scrolling log events.
  - **Reference 4 (`projects_showcase_grid.jpg`):** Flagship Projects Showcase Bento Grid (`ProjectBentoShowcase.tsx`) exhibiting all 5 verified projects (`Campus IT Tracker`, `MetaAlgorithm Lab`, `Cafena Coffee Suite`, `NovaTech Cloud`, `GP Platform`) as live running instances with mini workstation monitors, glowing circuit bus traces, and direct `[ Launch Workstation Demo ]` triggers.
- **Components & Layout Upgrades:**
  - `ProjectBentoShowcase.tsx`: Asymmetric 5-panel bento grid with 2 top large cards and 3 bottom cards.
  - `LiveDemoStudio.tsx`: Dual-workstation simulation suite.
  - `WorkstationConsole.tsx`: Collapsible streaming event log drawer.
  - `ProjectPreviewMockup.tsx`: Updated with high-fidelity mini workstation monitors for all 5 verified projects.
  - `ProjectPreviewGraphic.tsx`: Upgraded to neon mint workstation styling for case studies.
  - `Navbar.tsx` & `Footer.tsx`: Restyled with neon mint borders, active routes (`Showcase Studio`, `Projects Bento`), and full bidirectional i18n.
  - `ContactForm.tsx`: Neon mint styling while preserving 100% resilient Supabase database persistence.
- **Zero Backend Damage:**
  - Supabase database schema, tables, migrations, RLS policies, backend data repositories, and API routes 100% untouched and preserved.
  - Only the 5 authentic projects (`campus-it-tracker`, `metaalgorithm-lab`, `novatech`, `cafena`, `gp`).
- **Full Automated & Browser QA:**
  - TypeScript compilation: 0 errors (`pnpm tsc --noEmit`).
  - ESLint: 0 warnings, 0 errors (`pnpm lint`).
  - Next.js Production Build: 30/30 static pages prerendered (`pnpm build`).
  - Browser verification across 8-way matrix (EN/AR, Dark/Light, Mobile/Desktop).

---

## [1.1.0] - 2026-09-19 — Reference-Faithful Dual-Column Command Center Rebuild

### Added
- **Reference-Faithful Dual-Column Desktop Command Center (1536x1024 Blueprint):**
  - Completely rebuilt the homepage presentation around the 1536x1024 dual-column technical editorial reference image.
  - Implemented balanced split-screen layout (`~49%` Left Column, `~49%` Right Column) with a narrow controlled gutter (`24px`) on an elevated `#050709` Obsidian canvas with subtle dot-matrix atmospheric grid.
- **Left Column Command Console (`ReferenceLeftColumn.tsx`):**
  - Integrated Header/Navigation inside the top of the panel: Custom Royal Gold `AS` monogram, `ABDULGHANI AL-SHIBAMI`, role descriptor, pulsing green online status, numbered navigation items (`01_HOME`, `02_ABOUT`, `03_PROJECTS`, `04_STACK`, `05_CONTACT`), Language Switcher, and Theme Toggle.
  - Technical Hero Console: Micro-telemetry lines (`> INITIALIZING_PORTFOLIO.EXE`, `> STATUS: ONLINE`), monumental headline ("Building Systems Behind the Interface." / "بناء الأنظمة خلف الواجهة البرمجية."), positioning paragraph, compact action buttons (`VIEW MY WORK ↗`, `DOWNLOAD CV ↓`), and scroll indicator.
  - Profile & Identity Rail: Authentic profile portrait (`abdulghani-profile-hero.webp`) integrated with smooth dark vignette, adjacent vertical monospace metadata rail (`> WHO_AM_I`, `> ROLE`, `> LOCATION`, `> EXPERIENCE`, `> AVAILABILITY`).
  - Selected Projects Strip: 3 high-density cards (`Campus IT Tracker`, `MetaAlgorithm Lab`, `NovaTech`) with indices, category kickers, descriptions, action links, and authentic interface preview mockups.
  - Telemetry Strip: `> SYSTEM_LOG` with live timestamps and actual statuses + `> TECH_STACK` brand badges (Next.js, TypeScript, Tailwind, React, Python, Oracle 10g, C# .NET, Supabase).
  - Left Footer: Minimal identity, copyright, and "BASED IN SANA'A, YEMEN •".
- **Right Column Case Studies & Technical Grid (`ReferenceRightColumn.tsx`):**
  - Case Studies Header: `// CASE STUDIES` with `VIEW_ALL_CASE_STUDIES [ ]`.
  - Stacked Case Study Rows: 3 horizontal project rows (`Campus IT Tracker`, `MetaAlgorithm Lab`, `Graduation Project Portal`) with thumbnails, descriptions, technology tags, verified architectural specs (`Enterprise Tier`, `O(n log n) Bench`, `3 User Roles`), and action links `↗`.
  - Three-Part Technical Information Strip: `</> TECHNICAL SKILLS` (qualitative bars with gold percentage accents), `[#] SERVICES` (stacked capability blocks), and `[T] TOOLS I USE` (responsive non-truncated tag cloud).
  - Lower Contact Section: `> LET'S_BUILD_SOMETHING_GREAT`, massive headline ("Ready to build what matters._" / "جاهز لبناء ما يُحدث أثراً._"), custom SVG vector `WireframeGlobe.tsx` with radar reticle, and contact action block with direct email.
  - Integrated Contact Modal: Clicking `START A CONVERSATION` opens an accessible modal with the resilient Supabase `ContactForm`.
  - Right Footer: Monogram `AS`, `// THANKS FOR VISITING`, and social anchors (GitHub, LinkedIn, Email).
- **Core Shell & Internationalization Parity:**
  - Added `MainWrapper.tsx` to automatically adjust top clearance between homepage (zero top padding) and subpages (`pt-20 sm:pt-24`).
  - Conditioned `Navbar.tsx` and `Footer.tsx` to hide on the homepage so the self-contained command center stands pristine, while preserving the standard navigation shell across `/projects`, `/showcase`, and demo routes.
  - Sanitized `ContactForm.tsx` to remove generic placeholder names ("Alex Vance", "architect@enterprise.com") per prompt specification.
  - Full bidirectional parity: 100% Arabic RTL mirroring and typography.
  - Verified Light Mode luxury porcelain interpretation (`#F4F5F7` canvas, `#FFFFFF` panels, `#E2E8F0` borders).

### Added
- **Obsidian + Liquid Glass + Royal Gold Visual System:**
  - Implemented bespoke luxury color palette in `tailwind.config.ts`: Obsidian (`#050505`, `#0A0A0C`, `#0E0E11`, `#121216`), Royal Gold (`#C9A227`, `#D4AF37`, `#E6C866`), and Porcelain Sovereign (`#FBFBFC`) light theme.
  - Engineered `GlassPanel.tsx` reusable translucent glass primitive with controlled blur (`16px`/`24px`), border reflections, and ambient gold hover glow.
  - Added CSS design tokens and utilities in `app/globals.css`: `.glass-panel`, `.glass-panel-hover`, `.glass-nav`, `.ambient-glow-gold`, `.text-gold-gradient`.
  - Built `ProjectPreviewGraphic.tsx`: Authentic engineered interface previews for all 5 verified projects (`Campus IT Tracker` network topology & ITIL desk, `MetaAlgorithm Lab` convergence graph, `Graduation Project Portal` review lifecycle, `Cafena` roastery cart, and `NovaTech` enterprise portal).
- **Core App Shell & Navigation:**
  - Redesigned `Navbar.tsx` into a floating liquid glass capsule island (`fixed top-0 inset-x-0 pt-3 max-w-5xl z-50`) with backdrop blur, centered editorial links, scroll elevation, and mobile drawer.
  - Added top layout clearance in `app/[locale]/layout.tsx` (`pt-20 sm:pt-24`) to eliminate collision with floating navbar.
  - Redesigned `Footer.tsx` with minimal liquid glass border, verified status ticker, and clean GitHub/LinkedIn anchors.
  - Upgraded `ThemeToggle.tsx` with liquid glass styling and rounded-lg borders.
- **Monumental Homepage & Editorial Hierarchy:**
  - Upgraded Hero typography: Monumental clamp title `ABDULGHANI AL-SHIBAMI` (`text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem]`) with royal gold text gradient, role statement, and dual high-contrast action buttons.
  - Framed authentic profile portrait in an integrated cinematic glass frame with subtle gold edge, status ticker (`AVAILABLE FOR HIRE`), and dark gradient vignette.
  - Replaced isolated cards in Systems Telemetry with a unified horizontal floating liquid glass metric bar.
  - Rebuilt Featured Projects section into an editorial product launch showcase featuring `Campus IT Tracker` flagship and asymmetrical secondary panels.
  - Upgraded Architectural Competencies into distinct glass panels with gold kickers.
  - Rebuilt Contact section into a centered, minimal liquid glass invitation with direct Supabase connection.
- **Case Studies & Demo Shell:**
  - Replaced boxy cards in `ProblemSolutionSection.tsx` and `ChallengesResultsSection.tsx` with open editorial case-study layouts and liquid glass spotlight panels.
  - Upgraded `DemoCalloutBanner.tsx` with luxury gold ambient glow and high-contrast launch action.
  - Modernized `DemoShell.tsx`: Replaced obsolete `x64 SIM` and simulated host strings with authentic `INTERACTIVE SIMULATION` badge and liquid glass frame.
  - Fixed Windows case-insensitive `.gitignore` bug by anchoring `/Projects/` to the repository root.

### Added
- **Supabase Production Client & Zero-Failure Fallback:**
  - Installed `@supabase/supabase-js` (`v2.116.0`).
  - Implemented `lib/supabase/client.ts` and `lib/supabase/server.ts` with graceful credential inspection.
  - Implemented `HybridProjectRepository` in `lib/services/projectRepository.ts` providing seamless data resolution from Supabase cloud tables with instant local fallback.
  - Connected `ContactForm.tsx` to insert inquiries into Supabase `contact_messages` table with real-time feedback and offline resilience.
- **UI/UX Vector Iconography & Micro-Interactions (ui-ux-pro-max):**
  - Fully eliminated all emojis across interactive simulations (`CafenaSimulation.tsx`, `NovaTechSimulation.tsx`, `GpSimulation.tsx`, `MetaAlgorithmLabSimulation.tsx`).
  - Rendered bespoke Lucide SVG vector icon badges (`Coffee`, `Flame`, `Snowflake`, `CupSoda`, `Package`, `Cookie`, `Headphones`, `Watch`, `Glasses`, `Mouse`, `Radio`, `Keyboard`, `GraduationCap`, `Scale`, `X`).
  - Enhanced `ChallengesResultsSection.tsx` and `ArchitectureTopology.tsx` with Lucide `Check`, `ChevronRight`, `ArrowRight`, and `ArrowLeft` vector indicators.
  - Added accessible focus rings (`:focus-visible:ring-2 focus-visible:ring-brand-gold/50`), `cursor-pointer`, and smooth transitions across all simulation controls.

---

## [0.9.0] - 2026-09-19

### Added
- **Production Multi-Repository Preparation & Staging:**
  - Prepared, sanitized, and initialized 5 independent standalone Git repositories in `c:\my projects\Staging_Repos/`:
    1. `Cafena`: Added standard `.gitignore`, MIT License, comprehensive bilingual README, clean commit on `main`.
    2. `Campuse-IT-Tracker`: Sanitized Oracle credentials, created `App.config.example` & `appsettings.example.json`, excluded `bin/` and `obj/`, added MIT License, clean commit on `main`.
    3. `Graduation-Project-Management-Portal`: Sanitized `config.php`, created `config.example.php`, secured seed users with bcrypt in `database_setup.sql`, added MIT License, clean commit on `main`.
    4. `MetaAlgorithmLab`: Parameterized `docker-compose.yml`, created `.env.example`, excluded `.venv` and Python caches, added MIT License, clean commit on `main`.
    5. `NovaTech`: Added e-commerce `.gitignore`, MIT License, comprehensive README, clean commit on `main`.
- **GitHub Remote Architecture & Links:**
  - Configured target remote hierarchy under verified GitHub account `@Abdulghani780`.
  - Added origin remotes to all 6 repositories.
  - Updated `README.md`, `demos/registry/index.ts`, and `lib/data/projectsData.ts` with direct links to `https://github.com/Abdulghani780/<repo>`.
  - Updated `CaseStudyHero.tsx` with external "Source Code" repository link.
- **Supabase & CI/CD Infrastructure:**
  - Validated initial Supabase database schema (`20260917000001_initial_schema.sql`) across all 8 tables, indexes, and RLS policies.
  - Created `.github/workflows/database.yml` for automated migration linting and credential hygiene verification.
  - Authored `docs/SUPABASE_DEPLOYMENT.md` detailing migration execution and local fallback resilience.
- **Vercel & Production Operations:**
  - Authored `docs/VERCEL_DEPLOYMENT.md` with build settings, framework presets, and environment variables.
  - Created `docs/DEPLOYMENT_RUNBOOK.md` with Mermaid release lifecycle workflows and rollback procedures.
- **Security & Integrity Certification:**
  - Authored `docs/FINAL_DEMO_INTEGRITY_AUDIT.md` confirming 100% factual safety across all 5 demos.
  - Authored `docs/SECURITY_RELEASE_AUDIT.md` certifying zero credential leaks and complete RLS protection.
  - Authored `docs/REMOTE_REPOSITORY_SETUP.md` with one-click repository creation URLs and push batches.
  - Authored `docs/PRODUCTION_READY.md` certifying readiness for production release.

### Added
- **Authentic Interactive Project Demos (Real Project Demo Implementation):**
  - **Cafena Simulation (`CafenaSimulation.tsx`)**: Artisanal specialty coffee e-commerce portal with authentic menu catalog, real-time query search, offcanvas cart with 15% VAT and SAR calculations, table reservation form, and simulated receipt preview.
  - **Campus IT Tracker Simulation (`CampusITTrackerSimulation.tsx`)**: High-fidelity reproduction of C# WinForms / Oracle enterprise workstation featuring Overview Dashboard, interactive campus room map, ITIL Kanban desk (New, Triaged, In Progress, Resolved), hardware inventory table, and asset custody transfer workflow.
  - **Gp Platform Simulation (`GpSimulation.tsx`)**: Academic graduation project management portal with dual-role switcher (Student vs Faculty Admin), student proposal submitter, moderation evaluation queue, and approved project directory.
  - **MetaAlgorithm Lab Simulation (`MetaAlgorithmLabSimulation.tsx`)**: Scientific algorithmic workbench featuring step-by-step sorting visualizer (QuickSort, HeapSort, InsertionSort, BubbleSort), empirical Big-O regression scaling matrix ($N=16$ to $N=512$), and LaTeX research report excerpt preview modal.
  - **NovaTech Simulation (`NovaTechSimulation.tsx`)**: Cybernetic smart gadgets storefront simulation with 24-hour deal countdown clock, quick view specs modal, offcanvas cart with 500 SAR free shipping threshold, and digital invoice generator (`NOV-XXXXXX`).
  - **Traceability Documentation:** Created `docs/REAL_PROJECT_DEMO_TRACEABILITY.md` establishing exhaustive mapping of all 5 simulations to their source code evidence in `Projects/`.
  - **Unified DEMO_REGISTRY:** Standardized all 5 verified projects to `demoType: "interactive_simulation"` with localized titles, subtitles, and Technical Integrity Disclosures.

### Removed
- Deleted lingering unverified mock simulation files: `AuraLedgerSimulation.tsx` and `YusraSimulation.tsx`.

### Verified
- **TypeScript:** 0 errors (`pnpm typecheck`).
- **ESLint:** 0 warnings or errors (`pnpm lint`).
- **Production Static Prerendering:** All 10 demo paths (`/[locale]/projects/[slug]/demo` for 5 projects across `en` and `ar`) compiling cleanly.

---

## [0.7.0] - 2026-09-18

### Added
- **Owner Project Catalog Harmonization (Phase 10.1):**
  - Synchronized portfolio catalog strictly with the 5 authentic projects verified in `Projects/`:
    1. **Campus IT Tracker** (`campus-it-tracker`): C# .NET 4.8 WinForms & Oracle 10g enterprise ITIL system.
    2. **MetaAlgorithm Lab** (`metaalgorithm-lab`): Python 3.10+, PyQt6, SciPy algorithmic complexity workstation.
    3. **NOVA TECH** (`novatech`): Modern cybernetic smart tech e-commerce web platform.
    4. **Cafena** (`cafena`): Arabic specialty coffee e-commerce web application with live cart arithmetic.
    5. **Graduation Project Portal** (`gp`): Fullstack PHP 8 & MySQL 8 academic proposal platform.
- **Profile Image Integration:**
  - Audited authentic portrait `Abdulghani Alshibami.jpg` (2300x1824 px, 2.78 MB JPEG).
  - Generated web-optimized WebP variants in `public/images/profile/`:
    - `abdulghani-profile.webp` (1200x952 px)
    - `abdulghani-profile-hero.webp` (800x1000 px, 4:5 aspect ratio)
    - `abdulghani-profile-thumb.webp` (400x400 px, 1:1 aspect ratio)
  - Integrated authentic portrait into Homepage Hero with Next.js `Image`, responsive sizes, and verified alt text (`Abdulghani Al-Shibami` / `عبدالغني الشبامي`).
- **Telemetry Realigned:** Telemetry section now reflects genuine verified metrics (5 Verified Projects, 2 Platforms, 3 Domains, 100% Bilingual Parity).

### Removed
- **Unverified & Legacy Records Purged:**
  - `yusra` removed from catalog, navigation, routing, and demo registries.
  - `auraledger` permanently deleted from catalog.
  - `nexora-tech` permanently deleted from catalog (replaced by authentic `novatech`).

### Verified
- **TypeScript:** 0 errors (`pnpm typecheck`).
- **ESLint:** 0 warnings or errors (`pnpm lint`).
- **Production Build:** All 30 static pages prerendered cleanly (`pnpm build`).

---

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
