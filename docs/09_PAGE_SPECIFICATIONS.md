# 09 — PAGE SPECIFICATIONS (MAPPED TO CANONICAL VISUAL REFERENCES)

**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System  
**Owner:** عبدالغني الشبامي | Abdulghani Al-Shibami  
**Canonical Visual References:**  
1. `portfolio_hero_concept.jpg` — Hero Command Center
2. `live_demo_studio.jpg` — Live Interactive Demo Studio
3. `desktop_demo_simulation.jpg` — Desktop OS Workstation Sandbox
4. `projects_showcase_grid.jpg` — Flagship Projects Showcase Bento Grid
**Status:** Canonical Page Structure Authority  
**Date:** September 19, 2026  

---

## 1. Page: Home Command Center (`/[locale]/page.tsx`)
- **Mapped Reference:** `portfolio_hero_concept.jpg`
- **Render Mode:** Next.js App Router (Self-contained Dual-Column Command Center on Desktop, Stacked on Mobile).
- **Core Modules & Layout:**
  1. **Integrated Left Column Command Deck (`ReferenceLeftColumn.tsx`):**
     - Top Navigation Header: Royal Gold / Emerald `AS` monogram, `ABDULGHANI AL-SHIBAMI`, role subtitle, pulsing green online status beacon, numbered navigation items (`01_HOME`, `02_ABOUT`, `03_PROJECTS`, `04_STACK`, `05_CONTACT`), Language Switcher (`EN | AR`), and Theme Toggle.
     - Technical Hero Console: Monospace telemetry feed (`> INITIALIZING_PORTFOLIO.EXE`, `> STATUS: ONLINE`), monumental headline ("Building Systems Behind the Interface." / "بناء الأنظمة خلف الواجهة البرمجية."), positioning narrative, compact action buttons (`VIEW MY WORK ↗`, `DOWNLOAD CV ↓`), and scroll indicator.
     - Profile & Identity Rail: Authentic profile portrait (`abdulghani-profile-hero.webp`) integrated with smooth dark vignette, adjacent vertical monospace metadata rail (`> WHO_AM_I`, `> ROLE`, `> LOCATION`, `> EXPERIENCE`, `> AVAILABILITY`).
     - Selected Projects Strip: 3 high-density cards (`Campus IT Tracker`, `MetaAlgorithm Lab`, `NovaTech`) with category kickers, descriptions, action links, and authentic interface preview mockups.
     - Telemetry Strip: `> SYSTEM_LOG` with live timestamps and actual statuses + `> TECH_STACK` brand badges (Next.js, TypeScript, Tailwind, React, Python, Oracle 10g, C# .NET, Supabase).
     - Left Footer: Minimal identity, copyright, and "BASED IN SANA'A, YEMEN •".
  2. **Right Column Case Studies & Technical Grid (`ReferenceRightColumn.tsx`):**
     - Case Studies Header: `// CASE STUDIES` with `VIEW_ALL_CASE_STUDIES [ ]`.
     - Stacked Case Study Rows: 3 horizontal project rows (`Campus IT Tracker`, `MetaAlgorithm Lab`, `Graduation Project Portal`) with thumbnails, descriptions, technology tags, verified architectural specs (`Enterprise Tier`, `O(n log n) Bench`, `3 User Roles`), and action links `↗`.
     - Three-Part Technical Information Strip: `</> TECHNICAL SKILLS` (qualitative bars with gold percentage accents), `[#] SERVICES` (stacked capability blocks), and `[T] TOOLS I USE` (responsive non-truncated tag cloud).
     - Lower Contact Section: `> LET'S_BUILD_SOMETHING_GREAT`, massive headline ("Ready to build what matters._" / "جاهز لبناء ما يُحدث أثراً._"), custom SVG vector `WireframeGlobe.tsx` with radar reticle, and contact action block with direct email.
     - Integrated Contact Modal: Clicking `START A CONVERSATION` opens an accessible modal with the resilient Supabase `ContactForm`.
     - Right Footer: Monogram `AS`, `// THANKS FOR VISITING`, and social anchors (GitHub, LinkedIn, Email).

---

## 2. Page: Flagship Projects Showcase Bento Grid (`/[locale]/projects/page.tsx`)
- **Mapped Reference:** `projects_showcase_grid.jpg`
- **Render Mode:** Server Component parent + Client `ProjectCatalogView` & `ProjectBentoShowcase`.
- **Core Modules & Layout:**
  1. **Bento Header & Filter Deck:**
     - Title: "FLAGSHIP SYSTEMS // BENTO SHOWCASE"
     - Subtitle: "Live instances of mission-critical systems and workstations running in verified sandbox environments."
     - Domain & Status Filters: All, Enterprise IT, Algorithms & AI, Cloud & E-Commerce, Academic.
     - View Mode Switcher: Bento Grid View vs Classic Dossier View.
  2. **Asymmetric 5-Project Bento Grid (`ProjectBentoShowcase.tsx`):**
     - **Top Left (Flagship Large):** `Campus IT Tracker` — Campus facility floorplan, network asset map, live ITIL ticket queue, execution telemetry.
     - **Top Right (Flagship Large):** `MetaAlgorithm Lab` — Real-time complexity benchmark curves ($O(n \log n)$ vs $O(n^2)$), sorting visualizer canvas, live array size dials.
     - **Bottom Left:** `Cafena Coffee Suite` — Roastery order queue, POS receipt generator, inventory tracking.
     - **Bottom Middle:** `NovaTech Cloud` — Cloud infrastructure monitor, latency gauges, cluster node telemetry.
     - **Bottom Right:** `GP Graduation Platform` — Multi-role academic evaluation portal, milestone timeline, defense moderation.
  3. **Workstation Monitor Cards:**
     - Traffic light controls (Red, Yellow, Green).
     - Live Instance Badge (`INST_01: ONLINE`, `INST_02: BENCHMARKING`, etc.).
     - Glowing circuit bus trace connecting cards to system backplane.
     - Direct `[ Launch Workstation Demo ]` button.

---

## 3. Page: Live Interactive Demo Studio (`/[locale]/showcase/page.tsx`)
- **Mapped Reference:** `live_demo_studio.jpg`
- **Render Mode:** Interactive Client Studio (`LiveDemoStudio.tsx`).
- **Core Modules & Layout:**
  1. **Dual Workstation Control Deck:**
     - Top workstation selector allowing switching between all 5 projects.
     - Mode toggle: Single Workstation vs Dual Split-Screen Simulation.
     - Live execution heartbeat, active FPS counter, and network throughput dials.
  2. **Embedded Workstation Environments:**
     - Native OS window frames with traffic light headers.
     - Real-time interactive canvas (Campus room inspector, Algorithm sorting visualizer, Cafena POS, etc.).
     - Shared command terminal streaming real-time simulation events.

---

## 4. Page: Project Case Study (`/[locale]/projects/[slug]/page.tsx`)
- **Render Mode:** Dynamic Server Component with static parameter pre-generation and metadata optimization.
- **Core Modules & Layout:**
  1. **Case Study Hero (`CaseStudyHero.tsx`):**
     - Breadcrumb navigation, verified project title, architecture subtitle, substrate tags.
     - Direct action triggers: `[ ⚡ Launch Workstation Demo ]` and `View GitHub Repository`.
  2. **Technical Preview Panel (`ProjectPreviewGraphic.tsx`):**
     - High-fidelity neon mint workstation monitor illustrating real project data and architecture.
  3. **Problem & Solution Breakdown:**
     - Detailed engineering constraints, bottlenecks, and architectural solutions.
  4. **Demo Callout Banner (`DemoCalloutBanner.tsx`):**
     - Workstation-framed invitation card with traffic lights and direct demo launch action.

---

## 5. Page: Desktop OS Workstation Sandbox (`/[locale]/projects/[slug]/demo/page.tsx`)
- **Mapped Reference:** `desktop_demo_simulation.jpg`
- **Render Mode:** High-performance Client Component (`DemoShell.tsx`).
- **Core Modules & Layout:**
  1. **Native OS Window Header:**
     - Traffic light buttons (`#FF5F56`, `#FFBD2E`, `#27C93F`).
     - Monospace title bar: `[PROJECT_NAME] v2.4 — Live Native Execution Sandbox`.
     - Live status badge (`● ONLINE`, `● SIMULATING`).
  2. **Interactive Simulation Canvas:**
     - The authentic project simulation UI (Campus IT map, MetaAlgorithm sorter, Cafena POS, NovaTech store, GP portal).
  3. **Real-Time Telemetry Bar (`DemoStatusBar.tsx`):**
     - Live hardware dials: CPU Usage (18%), Memory Usage (14.8MB / 23%), Network Latency (12ms), Frame Rate (60 FPS).
     - Direct toggle button for streaming terminal console.
  4. **Streaming Terminal Drawer (`WorkstationConsole.tsx`):**
     - Collapsible bottom drawer streaming execution logs with live timestamps and colored levels.
     - Auto-scroll lock and clear logs triggers.
