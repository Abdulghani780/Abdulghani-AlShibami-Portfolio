# Visual Design Reference Specification (Design Source of Truth)

**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System  
**Owner:** عبدالغني الشبامي | Abdulghani Al-Shibami  
**Repository:** `c:\my projects\Portifilo`  
**Tooling Engine:** StitchMCP (`Project ID: 1524242436626085687`)  
**Design Gate Status:** `COMPLETED (12/12 PRIMARY VISUAL REFERENCES)`  
**Date:** September 17, 2026  

---

## Executive Overview

This document constitutes the binding **Visual Source of Truth** for the entire frontend application of Abdulghani Al-Shibami's personal engineering platform. Full UI implementation was frozen under an **Urgent Design Gate** until exactly **12 Primary Visual References** were synthesized, verified, downloaded, and documented.

All 12 visual references were generated via StitchMCP into project `1524242436626085687`, and their corresponding high-resolution screenshots, production HTML blueprints, and metadata descriptors are permanently saved in the local repository under `design-references/`.

### Canonical Visual Identity
- **Primary Color Palette:** Obsidian Black (`#0B0B0C`, `#121214`), Royal Gold (`#D4AF37`, `#F2CA50`, `#997A15`), Crisp Pure White (`#FFFFFF`, `#F8FAFC`).
- **Dual-Theme Discipline:** Dark Mode is the authoritative hero experience (Obsidian & Gilded Precision). Light Mode is an intentionally designed porcelain/ivory aesthetic (`#FBFBFD`, `#FFFFFF`, `#0F172A`, `#997A15`) — never a naive raw inversion of dark values.
- **Bilingual Typographic Architecture:**
  - Latin Display: *Playfair Display* / *Noto Serif* (monumental editorial presence)
  - Latin Interface & Body: *Geist* / *Noto Sans* (high-clarity engineering prose)
  - Technical Telemetry & Code: *JetBrains Mono* (instrument-grade monospace figures)
  - Arabic Typography: *Noto Kufi Arabic* / *Noto Sans Arabic* (balanced RTL ascenders/descenders, logical margins)
- **Profile Image Standard:** Clearly defined geometric placeholder `[PROFILE_IMAGE]` with luxury gold hairline borders and corner coordinate brackets (`LAT: 24.7136° N, LON: 46.6753° E`). Never fabricate human photographic likenesses.
- **Simulation Transparency Standard:** Browser demos of native desktop or backend engines (e.g., C#/.NET Core, WPF, Python) are explicitly labeled **"Interactive Web Simulation"** with clear disclaimers that native compiled binaries do not execute in the browser.

---

## The 12 Primary Visual References Matrix

| Ref # | Name | Viewport | Theme | Lang | Dir | Stitch Screen ID | Local Folder |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **01** | Home — Desktop — Dark — English | Desktop (1440px+) | Dark | English | LTR | `241e915ad6754b6099cfc14bd95c0492` | `design-references/01-home-dark-en/` |
| **02** | Home — Desktop — Light — English | Desktop (1440px+) | Light | English | LTR | `17202556a5ce4788a4ae611fcbe0981b` | `design-references/02-home-light-en/` |
| **03** | Home — Desktop — Dark — Arabic RTL | Desktop (1440px+) | Dark | Arabic | RTL | `c019545ba72443f4bd5dc8f39d3159c7` | `design-references/03-home-dark-ar/` |
| **04** | Home — Desktop — Light — Arabic RTL | Desktop (1440px+) | Light | Arabic | RTL | `275b7c9604e2407eb58c177148540c0d` | `design-references/04-home-light-ar/` |
| **05** | Projects — Desktop — Dark — English | Desktop (1440px+) | Dark | English | LTR | `9f3d34af5da14376b0822cb8e074ea48` | `design-references/05-projects-dark-en/` |
| **06** | Projects — Desktop — Light — English | Desktop (1440px+) | Light | English | LTR | `fc69e78410764249a879581b35af926b` | `design-references/06-projects-light-en/` |
| **07** | Project Details — Desktop — Dark — English | Desktop (1440px+) | Dark | English | LTR | `b35dc110bf394dd0b43750d8fe23d9ea` | `design-references/07-project-detail-dark-en/` |
| **08** | Project Details — Desktop — Light — English | Desktop (1440px+) | Light | English | LTR | `3346ffd53da34ef887d2f4308e85333d` | `design-references/08-project-detail-light-en/` |
| **09** | Interactive Demo — Desktop — Dark — English | Desktop (1440px+) | Dark | English | LTR | `d81ec38783e847c79c94554d8be25d43` | `design-references/09-demo-dark-en/` |
| **10** | Interactive Demo — Desktop — Light — English | Desktop (1440px+) | Light | English | LTR | `13ed3a87a3004998b139161c0b9926bb` | `design-references/10-demo-light-en/` |
| **11** | Mobile Experience — Home — Dark + Light | Mobile (393px) | Dual-Theme | English | LTR | `68b19ce9cc794e1b90dc025d0cd874e0` | `design-references/11-mobile-home/` |
| **12** | Mobile Experience — Projects & Details | Mobile (393px) | Dual-Theme | English | LTR | `02463be13de7475fad14878f8b672fdc` | `design-references/12-mobile-projects-details/` |

---

## Detailed Specifications per Reference

### REFERENCE 01: Home — Desktop — Dark — English
- **Reference Number:** 01
- **Reference Name:** `01-home-dark-en`
- **Purpose:** Primary homepage marquee establishing executive engineering authority, personal brand presence, flagship project previews, live telemetry stats, and conversion funnels.
- **Viewport:** Desktop (`1440px` grid width, responsive to `2560px`).
- **Theme:** Dark Mode (`Obsidian & Gilded Precision`).
- **Language & Direction:** English (`en`), LTR (`dir="ltr"`).
- **Sections:**
  1. Executive Sticky Navbar (Glassmorphic obsidian backdrop, monogram logo, navigation links, EN/AR switcher, Dark/Light toggle, Resume CTA).
  2. Hero Section with split layout: Left editorial headline, introduction, and CTA button group; Right geometric `[PROFILE_IMAGE]` frame with coordinates.
  3. Key Systems Telemetry Ribbon (Throughput, Uptime SLA, Ops/day, Invariant verification).
  4. Flagship Projects Showcase (AuraLedger, NeuroScribe, OmniTrader).
  5. Architecture & Core Competencies Matrix (Distributed Computing, Autonomous AI, Low-Latency C#, Cloud-Native Infrastructure).
  6. Technical Publications / Research Papers Preview.
  7. Technical Colophon & Footer with PGP Key and social channels.
- **Components:** Primary Obsidian/Gold button, Ghost Outline button, `[PROFILE_IMAGE]` placeholder box, Telemetry HUD pills, Project cards with corner brackets, Language/Theme switchers.
- **Visual Notes:** Pure obsidian canvas (`#0B0B0C`), 1px gold hairline borders (`rgba(212, 175, 55, 0.25)`), radiant gold specular hover effects, zero border-radius (`roundedness: 0`).
- **Interaction Notes:** Hovering over project cards triggers a 150ms border shift to `#D4AF37` and localized subtle gold glow. Navbar locks with backdrop-blur.
- **Responsive Notes:** Reflows from 12 columns to 4 columns on mobile viewports; buttons stack vertically.
- **Design Decisions:** Rejected standard developer neon/blue glow in favor of bespoke haute-horlogerie gold accents.
- **Stitch Screen ID:** `241e915ad6754b6099cfc14bd95c0492`

---

### REFERENCE 02: Home — Desktop — Light — English
- **Reference Name:** `02-home-light-en`
- **Purpose:** Intentionally crafted luxury Light Theme equivalent of the homepage, projecting the prestige of an architectural monograph or sovereign institution.
- **Viewport:** Desktop (`1440px`).
- **Theme:** Light Mode (`Porcelain Sovereign / Architectural Prestige`).
- **Language & Direction:** English (`en`), LTR (`dir="ltr"`).
- **Sections:** Matches Reference 01 structure in an ivory/porcelain palette.
- **Components:** Midnight slate (`#0F172A`) executive buttons, white elevated cards (`#FFFFFF`) with Champagne Sand hairlines (`#E2D9C8`), burnished gold badges (`#997A15`).
- **Visual Notes:** High-luminance mineral background (`#FBFBFD`). Dark text (`#0F172A`, `#334155`) with AAA contrast ratio (>10:1). Gold accents shift to deeper antique ochre (`#997A15`, `#B48C1C`) to maintain legibility.
- **Interaction Notes:** Subtle ambient occlusion drop shadows (`0 4px 20px -2px rgba(15, 23, 42, 0.03)`) instead of specular glow.
- **Responsive Notes:** Identical 12-column architectural grid scaling to tablet (8 col) and mobile (4 col).
- **Design Decisions:** Explicitly avoided naive color inversion; surfaces use warm ivory rather than clinical `#FFFFFF` to reduce eye strain.
- **Stitch Screen ID:** `17202556a5ce4788a4ae611fcbe0981b`

---

### REFERENCE 03: Home — Desktop — Dark — Arabic RTL
- **Reference Name:** `03-home-dark-ar`
- **Purpose:** Executive Arabic homepage establishing native cultural and linguistic authority for Gulf, Middle Eastern, and international sovereign enterprise audiences.
- **Viewport:** Desktop (`1440px`).
- **Theme:** Dark Mode (`Obsidian & Gilded Precision`).
- **Language & Direction:** Arabic (`ar`), RTL (`dir="rtl"`).
- **Sections:**
  1. RTL Navigation Bar (Right-aligned brand "عبدالغني الشبامي // مهندس أنظمة", Arabic links, left-aligned actions and switchers).
  2. RTL Hero Section (Right-aligned headline: "هندسة الذكاء المستقل والأنظمة الموزعة فائقة الموثوقية", left-positioned `[صورة_الملف_الشخصي]` frame).
  3. Arabic Systems Telemetry HUD ("١٤٥ ألف عملية/ثانية", "٩٩.٩٩٩٪ موثوقية تشغيلية").
  4. Flagship Projects Grid with Arabic technical copy and mirrored action buttons.
  5. Core Competencies & Arabic Colophon Footer.
- **Components:** Arabic RTL Navbar, Mirrored Action Buttons (trailing chevron points left `←`), Arabic Telemetry Pills, Right-anchored Timeline and cards.
- **Visual Notes:** Uses *Noto Kufi Arabic* and *Noto Sans Arabic* with expanded line-height (1.75x) to accommodate calligraphic ascenders.
- **Interaction Notes:** All directional animations and micro-interactions originate from the right.
- **Responsive Notes:** Mirrored padding using CSS logical properties (`padding-inline-start`, `margin-inline-end`).
- **Design Decisions:** Native right-to-left layout without duplicated JSX templates; clean logical CSS token integration.
- **Stitch Screen ID:** `c019545ba72443f4bd5dc8f39d3159c7`

---

### REFERENCE 04: Home — Desktop — Light — Arabic RTL
- **Reference Name:** `04-home-light-ar`
- **Purpose:** Native Arabic RTL homepage in luxury Light Theme, delivering high-end editorial clarity for formal enterprise evaluation.
- **Viewport:** Desktop (`1440px`).
- **Theme:** Light Mode (`Porcelain Sovereign`).
- **Language & Direction:** Arabic (`ar`), RTL (`dir="rtl"`).
- **Sections:** Full Arabic structure matching Reference 03 on a porcelain canvas.
- **Components:** Slate `#0F172A` buttons with gold hairlines, pure white cards with sand borders, RTL mirrored icons, Arabic badge typography.
- **Visual Notes:** Warm ivory ground (`#FBFBFD`), high-contrast ink slate typography, and burnished ochre (`#997A15`) accents.
- **Interaction Notes:** Leftwards motion for forward progression; focus rings engage in clean ochre gold.
- **Responsive Notes:** Fluid typography with Arabic-safe viewport scaling.
- **Design Decisions:** Rigorous adherence to WCAG AAA contrast guidelines for Arabic text legibility.
- **Stitch Screen ID:** `275b7c9604e2407eb58c177148540c0d`

---

### REFERENCE 05: Projects — Desktop — Dark — English
- **Reference Name:** `05-projects-dark-en`
- **Purpose:** Comprehensive projects catalog presenting Abdulghani Al-Shibami's full portfolio of 12+ systems with category filters, search, and live action triggers.
- **Viewport:** Desktop (`1440px`).
- **Theme:** Dark Mode (`Obsidian & Gilded Precision`).
- **Language & Direction:** English (`en`), LTR (`dir="ltr"`).
- **Sections:**
  1. Projects Index Header & Real-Time System Status ("12 Operational Systems").
  2. Protocol & Category Filter Bar (`All`, `Distributed Systems`, `Autonomous AI`, `Low-Latency C#`, `Cloud Native`).
  3. Search & Sort Toolbar with monospace system tags.
  4. Flagship Hero Project Feature Card (AuraLedger with expanded telemetry).
  5. 3-Column Systems Grid (NeuroScribe, OmniTrader, CloudMesh, SentinelGuard, etc.).
  6. Demo Availability Filter Pills (`Real Live Demo`, `Interactive Simulation`, `Video Demo`, `Case Study`).
  7. Technical Archive Table with GitHub stats and RFC whitepapers.
- **Components:** Protocol Filter Pills, Search Bar, Telemetry Matrix Cards, Dual Action Buttons (`Case Study`, `Launch Demo`, `GitHub`), Status Badges.
- **Visual Notes:** Obsidian background, 1px `#27272A` borders shifting to `#D4AF37` on hover, monospace telemetry readouts in JetBrains Mono.
- **Interaction Notes:** Instant in-memory filtering with smooth CSS crossfade; interactive simulation launch opens sandbox modal or dedicated route.
- **Responsive Notes:** 3-column desktop layout collapses to 2-column on tablet and 1-column on mobile.
- **Design Decisions:** Filter tags categorize by engineering domain rather than trivial front-end frameworks.
- **Stitch Screen ID:** `9f3d34af5da14376b0822cb8e074ea48`

---

### REFERENCE 06: Projects — Desktop — Light — English
- **Reference Name:** `06-projects-light-en`
- **Purpose:** Projects catalog in luxury Light Theme for executive reviewers preferring an editorial print aesthetic.
- **Viewport:** Desktop (`1440px`).
- **Theme:** Light Mode (`Porcelain Sovereign / Architectural Prestige`).
- **Language & Direction:** English (`en`), LTR (`dir="ltr"`).
- **Sections:** Identical structure to Reference 05 in porcelain styling.
- **Components:** Pure white cards with `#E2D9C8` sand boundaries, deep slate text (`#0F172A`), antique gold active pills (`#997A15`), high-contrast telemetry numbers.
- **Visual Notes:** Crisp white-room laboratory aesthetic, subtle gold active indicators, refined tabular figures.
- **Interaction Notes:** Pill filters toggle with smooth ink transition; card hover adds subtle 12px ambient warmth shadow.
- **Responsive Notes:** Responsive column wrapping with sticky filter bar.
- **Design Decisions:** Maintained high information density without visual clutter or contrast fatigue.
- **Stitch Screen ID:** `fc69e78410764249a879581b35af926b`

---

### REFERENCE 07: Project Details — Desktop — Dark — English
- **Reference Name:** `07-project-detail-dark-en`
- **Purpose:** Exhaustive architectural case study dossier for flagship project **AuraLedger** (Distributed Consensus Engine), demonstrating rigorous problem solving, benchmarks, and formal proofs.
- **Viewport:** Desktop (`1440px`).
- **Theme:** Dark Mode (`Obsidian & Gilded Precision`).
- **Language & Direction:** English (`en`), LTR (`dir="ltr"`).
- **Sections:**
  1. Dossier Breadcrumb & Top Navigation (`Projects / Systems & Distributed Computing / AuraLedger`).
  2. Case Study Hero with Status (`● PRODUCTION SHOWCASE // 2025`, `TLA+ VERIFIED`), substrate metadata, and CTAs (`Launch Simulation`, `GitHub`, `Whitepaper`).
  3. Key Telemetry Metric Cards (`145,000 tx/s`, `0.8ms p99`, `99.999% SLA`, `RPO=0 / RTO<1.2s`).
  4. Executive Problem & Solution Split Grid (Asynchronous settlement bottlenecks vs. C# .NET 9 vectorized solution).
  5. Interactive System Topology Diagram & Pipeline Flow (gRPC Ingestion → Ring Buffer → Raft Leader → Vector WAL → Sharded Storage).
  6. Subsystems & Innovations Grid (Zero-Allocation Compaction, Vectorized WAL, Pre-Vote Quorum, Dual RPC).
  7. Runtime Bottlenecks & Overcoming Constraints (.NET Gen2 GC elimination, network partition mitigation).
  8. Empirical Benchmark Comparison Table vs. Standard SQL and Java Paxos.
  9. Interactive Simulation Callout Banner with direct sandbox launch trigger.
  10. Next-Gen Roadmap & Colophon Footer.
- **Components:** Metric Cards, Architecture Schematic Viewer, Benchmark Telemetry Table, Simulation CTA Box, Monospace Code & Spec Snippets.
- **Visual Notes:** Obsidian background, 1px gold hairline section dividers, monospace telemetry readouts, high-contrast serif headlines.
- **Interaction Notes:** Diagram stages are hoverable with tooltips; simulation banner launches the live interactive demo sandbox.
- **Responsive Notes:** Split-screen problem/solution reflows to vertical stack on narrower screens.
- **Design Decisions:** Structured as a peer-reviewed systems engineering monograph rather than a casual marketing landing page.
- **Stitch Screen ID:** `b35dc110bf394dd0b43750d8fe23d9ea`

---

### REFERENCE 08: Project Details — Desktop — Light — English
- **Reference Name:** `08-project-detail-light-en`
- **Purpose:** Architectural case study dossier for **AuraLedger** rendered in the refined Porcelain Light Theme.
- **Viewport:** Desktop (`1440px`).
- **Theme:** Light Mode (`Porcelain Sovereign / Architectural Prestige`).
- **Language & Direction:** English (`en`), LTR (`dir="ltr"`).
- **Sections:** Identical technical case study structure to Reference 07.
- **Components:** Pure white elevation panels, `#E2D9C8` sand borders, deep slate `#0F172A` text, burnished ochre `#997A15` badges and buttons.
- **Visual Notes:** Editorial white-paper monograph aesthetic, high-contrast tabular benchmarks, crisp monospace telemetry labels.
- **Interaction Notes:** Subtle ambient occlusion hover states; interactive diagram elements highlight with gold boundaries.
- **Responsive Notes:** Fluid typography with modular spacing scale.
- **Design Decisions:** Preserves full technical depth and readability under bright ambient viewing conditions.
- **Stitch Screen ID:** `3346ffd53da34ef887d2f4308e85333d`

---

### REFERENCE 09: Interactive Demo — Desktop — Dark — English
- **Reference Name:** `09-demo-dark-en`
- **Purpose:** In-browser interactive simulation sandbox demonstrating the distributed state machine, partition recovery, and transaction telemetry of the C# .NET Core engine without falsely claiming native binary execution.
- **Viewport:** Desktop (`1440px`).
- **Theme:** Dark Mode (`Obsidian & Gilded Precision`).
- **Language & Direction:** English (`en`), LTR (`dir="ltr"`).
- **Sections:**
  1. Top Simulation Disclosure Banner: Glowing gold badge `INTERACTIVE WEB SIMULATION` with explicit disclaimer pill: *"Sandboxed In-Browser Simulation of C# .NET 9 Core Architecture — High-fidelity state machine reproduction (compiled desktop/server runtime runs out-of-browser)."*
  2. Simulation Header & Telemetry Bar (Cluster status `5/5 Quorum Healthy`, Term `4,891`, Commit Index `1,842,094`, Controls: `Inject Chaos Partition`, `Burst 25k TPS`, `Reset State`, `Fullscreen`, `REPL Log`).
  3. 3-Column Dense Architectural Workspace:
     - **Left Deck (~320px):** Scenario Presets (*Steady-State Settlement*, *Leader Partition Split-Brain*, *Cascading Byzantine Drop*, *Trading Storm*), Fault injection sliders (Latency, Packet Loss, Heartbeat), 5-Node Health Matrix with Kill/Heal triggers.
     - **Center Canvas:** Visual circular Raft cluster (Central Leader with radiant gold aura, 4 orbiting followers, live animated packet transit, dynamic re-election trigger).
     - **Right Deck (~360px):** Real-time SVG throughput sparklines (`124.5k tx/s`), p99 commit latency (`0.82ms`), zero GC alloc metric, live Append-Only WAL feed.
  4. Bottom Command Terminal / Simulation REPL: Monospace terminal with `aura-cli` prompt, live execution logs showing sub-45ms election failovers, and active interactive command line.
  5. Colophon Footer: Safety disclaimer and technical credits.
- **Components:** Simulation Disclosure Banner, Chaos Sliders, Node Status Matrix, Raft Topology Visualizer, Live WAL Feed, Developer Terminal REPL.
- **Visual Notes:** Obsidian black `#0E0E0F`, radiant gold accents `#D4AF37`, emerald health indicators `#10B981`, amber fault warnings.
- **Interaction Notes:** Toggling "Kill Node 1" immediately triggers client-side election re-vote; logs stream in real-time into the bottom REPL.
- **Responsive Notes:** Fullscreen mode expands canvas; sidebar collapses into tabs on smaller desktop screens.
- **Design Decisions:** Zero misleading claims about native execution; high-fidelity web simulation accurately communicates backend engineering competence.
- **Stitch Screen ID:** `d81ec38783e847c79c94554d8be25d43`

---

### REFERENCE 10: Interactive Demo — Desktop — Light — English
- **Reference Name:** `10-demo-light-en`
- **Purpose:** Interactive simulation sandbox for AuraLedger in luxury Porcelain Light Theme.
- **Viewport:** Desktop (`1440px`).
- **Theme:** Light Mode (`Porcelain Sovereign / Architectural Prestige`).
- **Language & Direction:** English (`en`), LTR (`dir="ltr"`).
- **Sections:** Identical simulation capabilities to Reference 09 in porcelain styling.
- **Components:** Pure white control decks, Champagne Sand `#E2D9C8` borders, burnished gold `#997A15` buttons and active rings, crisp light-porcelain terminal card.
- **Visual Notes:** Pristine architectural laboratory white-room feel with fine coordinate grid background.
- **Interaction Notes:** Fully responsive sliders, tactile buttons with instant visual feedback, animated packet trajectories.
- **Responsive Notes:** Adaptive layout with collapsible drawer panels.
- **Design Decisions:** Provides full simulation fidelity without dark-mode eye strain for daylight presentations.
- **Stitch Screen ID:** `13ed3a87a3004998b139161c0b9926bb`

---

### REFERENCE 11: Mobile Experience — Home — Dark + Light
- **Reference Name:** `11-mobile-home`
- **Purpose:** Mobile-optimized responsive homepage experience tailored specifically for modern smartphone viewports (`393px` width).
- **Viewport:** Mobile (`393px` width / iOS & Android flagship).
- **Theme:** Dual-Theme (Obsidian Dark with dedicated Light Theme comparison card).
- **Language & Direction:** English (`en`), LTR (`dir="ltr"`).
- **Sections:**
  1. Sticky Mobile Header (Gilded `A. AL-SHIBAMI` brand, language switcher `EN | AR`, quick theme toggle, and gold hamburger drawer trigger).
  2. Mobile Hero Section: Precision `[PROFILE_IMAGE]` placeholder box with gold hairline border and coordinate brackets; editorial mobile headline; full-width stacked CTA touch targets (`Explore Projects`, `Launch Lab`, `Resume PDF`).
  3. Mobile Telemetry Matrix: Compact 2x2 grid (`145k TPS`, `0.8ms p99`, `10M+ Daily Ops`, `100% Verified`).
  4. Featured Mobile Project Card: AuraLedger with status badge, tech pills, performance metrics, and touch action row.
  5. Dual-Theme Transformation Card: Dedicated preview callout demonstrating the sovereign transition to Porcelain Light Theme.
  6. Mobile Footer & Colophon: Monospace telemetry footer with social links and floating gold `Back to Top` button.
- **Components:** Mobile Sticky Nav, `[PROFILE_IMAGE]` mobile card, 2x2 Telemetry HUD, Stacked Touch Buttons, Mobile Project Card, Floating Back to Top Button.
- **Visual Notes:** 393px width constraint, minimum 48px touch target heights, optimized font sizes preventing unwanted line wraps, high-contrast gold accents.
- **Interaction Notes:** Ergonomic thumb-zone button placement; drawer trigger expands full-height navigation sheet.
- **Responsive Notes:** Zero horizontal scroll overflow; fluid padding with `1.25rem` outer gutters.
- **Design Decisions:** Essential desktop information retained without visual degradation or stripped-down simplicity.
- **Stitch Screen ID:** `68b19ce9cc794e1b90dc025d0cd874e0`

---

### REFERENCE 12: Mobile Experience — Projects & Details
- **Reference Name:** `12-mobile-projects-details`
- **Purpose:** Mobile-optimized catalog and case study deep-dive experience, demonstrating seamless browsing of complex systems on smartphone screens.
- **Viewport:** Mobile (`393px` width).
- **Theme:** Dual-Theme (Obsidian Dark with Light Mode transformation indicator).
- **Language & Direction:** English (`en`), LTR (`dir="ltr"`).
- **Sections:**
  1. Sticky Mobile App Bar with back anchor, brand title `A. AL-SHIBAMI // PROJECTS`, language toggle, and system ticker.
  2. Mobile Section Header & Horizontal Swipeable Filter Carousel (`All (12)`, `Distributed Consensus`, `Autonomous AI`, `Low-Latency C#`).
  3. Mobile Project Cards Stack (Flagship AuraLedger card with corner coordinate brackets, NeuroScribe card, OmniTrader card).
  4. In-Depth Mobile Case Study Flow:
     - Technical Problem Card with alert badge (.NET Gen2 GC pause bottleneck).
     - Zero-Allocation Architecture Solution Card (Unmanaged ring buffers).
     - Vertical 5-Stage Execution Pipeline Diagram (Ingestion → Buffer → Leader → Vector WAL → Storage).
     - Mobile 2-Column Benchmark Matrix comparing AuraLedger to SQL and Paxos.
  5. Dual-Theme Mobile Indicator Card.
  6. Sticky Floating Bottom Action Dock (`Launch Web Simulation`, `GitHub Source`, `PDF Dossier`).
  7. Mobile Colophon & PGP Fingerprint Footer.
- **Components:** Swipeable Category Chips, Compact Search Input, Mobile Architecture Flow Cards, 2-Column Benchmark Table, Sticky Bottom Action Dock.
- **Visual Notes:** Vertical flow pipeline replaces horizontal desktop schematics; high-contrast typography with monospace labels.
- **Interaction Notes:** Sticky bottom action dock provides persistent thumb access to launch the web simulation.
- **Responsive Notes:** Tailored specifically to single-column vertical flow with zero horizontal layout break.
- **Design Decisions:** Translates dense enterprise system architecture diagrams into intuitive mobile-first vertical stages.
- **Stitch Screen ID:** `02463be13de7475fad14878f8b672fdc`

---

## Verification & Design Gate Sign-Off

```text
[✓] EXACTLY 12 PRIMARY VISUAL REFERENCES GENERATED
[✓] ALL 12 STORED WITH SCREENSHOT, HTML, AND META.JSON IN design-references/
[✓] DESIGN CONSISTENCY VERIFIED ACROSS ALL 12 SCREENS
[✓] DUAL-THEME DISCIPLINE VERIFIED (OBSIDIAN DARK & PORCELAIN LIGHT)
[✓] BILINGUAL SYMMETRY VERIFIED (ENGLISH LTR & ARABIC RTL)
[✓] DESKTOP (1440px+) AND MOBILE (393px) VIEWPORTS VERIFIED
[✓] PROFILE IMAGE PLACEHOLDER [PROFILE_IMAGE] STRICTLY MAINTAINED
[✓] SIMULATION DISCLAIMERS CLEARLY POSITIONED ON ALL DEMO REFERENCES
[✓] ZERO BROKEN ASSETS OR INVENTED FILE PATHS
```
