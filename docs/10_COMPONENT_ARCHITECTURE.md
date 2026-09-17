# 10. COMPONENT ARCHITECTURE SPECIFICATION

**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System  
**Standard:** Enterprise Autonomous Engineering System  
**Last Updated:** 2026-09-17  
**Status:** Canonical Reference & Component Catalog  

---

## 1. Architectural Philosophy

The UI components in this repository adhere to strict architectural discipline:
1. **Dumb Atomic Components:** Atomic elements (`Button`, `Badge`, `Card`, `Container`, `SectionHeading`) live under `components/ui/` with zero side effects, no direct database queries, and universal dual-theme compatibility.
2. **Structural Layout Islands:** Global frame elements (`Navbar`, `Footer`, `ThemeToggle`, `LanguageSwitcher`) live under `components/layout/` and coordinate theme state, locale routing, and responsive mobile drawers.
3. **Feature-Specific Interactive Islands:** Complex stateful client components (`ContactForm`, `DemoViewer`) live under `components/features/` with isolated client boundaries (`"use client"`).
4. **Logical CSS & RTL-First:** All component layouts use CSS logical properties (`margin-inline`, `padding-inline`, `start`, `end`) to guarantee zero layout collapse when toggling between English (LTR) and Arabic (RTL).
5. **No Color Inversion:** Light mode is intentionally styled with porcelain surfaces, crisp dark slate typography, and burnished gold accents rather than naive mathematical color inversion.

---

## 2. Foundational UI Components (`components/ui/`)

### 2.1. `Button` (`components/ui/Button.tsx`)
- **Purpose:** Primary actionable trigger for executive inquiries, repository walkthroughs, cluster fault injection, and navigation.
- **Props:**
  - `variant?: "primary" | "secondary" | "ghost" | "danger" | "gold-outline"`
  - `size?: "sm" | "md" | "lg"`
  - `fullWidth?: boolean`
  - Standard HTML button attributes (`disabled`, `onClick`, `type`, `aria-label`, etc.).
- **Variants:**
  - `primary`: Solid Royal Gold background (`bg-gold`), black text (`text-black`), gold luminescence on hover (`hover:bg-gold-light hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]`).
  - `secondary`: Hairline bordered surface (`border-hairline bg-surface text-content-primary hover:border-gold`).
  - `ghost`: Transparent backdrop (`text-content-secondary hover:text-gold hover:bg-gold/5`).
  - `danger`: Critical action trigger (`border-status-rose/40 text-status-rose bg-status-rose/5 hover:bg-status-rose/15`).
  - `gold-outline`: Transparent background with crisp gold border (`border border-gold text-gold hover:bg-gold/10`).
- **States:** `idle`, `hover`, `active`, `focus-visible`, `disabled` (50% opacity, pointer-events disabled).
- **Theme Behavior:**
  - Dark: High-contrast gold against deep obsidian.
  - Light: Burnished gold with dark contrast text ensuring WCAG AA >= 4.5:1.
- **RTL Behavior:** Text aligns logically; inline icons retain logical orientation or flip where directional.
- **Accessibility:** Native `<button>` semantics, distinct `:focus-visible` outline rings (`ring-1 ring-gold outline-none`).

---

### 2.2. `Badge` (`components/ui/Badge.tsx`)
- **Purpose:** Monospaced architectural status pill for node telemetry, demo classifications, and technology tags.
- **Props:**
  - `variant?: "gold" | "surface" | "outline" | "danger"`
  - `dot?: boolean`
  - `dotColor?: "emerald" | "amber" | "rose" | "gold"`
  - Standard HTML span attributes.
- **Variants:**
  - `gold`: Gold-tinted pill (`border-gold/30 bg-gold/10 text-gold`).
  - `surface`: Neutral surface pill (`border-hairline bg-surface-elevated text-content-secondary`).
  - `outline`: Monospace hairline border with transparent background.
  - `danger`: Telemetry fault indicator (`border-status-rose/40 bg-status-rose/10 text-status-rose`).
- **Pulsing Dot Indicator:** When `dot=true`, renders an animated pulsing radial dot for live cluster telemetry (e.g. `dotColor="emerald"` for active Raft quorum).
- **Theme Behavior:** Transparent backgrounds scale naturally against dark obsidian and light porcelain.

---

### 2.3. `Card` (`components/ui/Card.tsx`)
- **Purpose:** Architectural content panel with optional luxury gold corner brackets (`┌ ┐ └ ┘`).
- **Props:**
  - `variant?: "default" | "elevated" | "surface-low"`
  - `cornerBrackets?: boolean`
  - `hoverEffect?: boolean`
  - Standard HTML div attributes.
- **Variants & Effects:**
  - `cornerBrackets`: Injects absolute positioned monospaced corner brackets (`border-t border-l`, `border-t border-r`, `border-b border-l`, `border-b border-r`) in Royal Gold.
  - `hoverEffect`: Transitions border to gold (`hover:border-gold/60`) and casts a subtle specular glow.
- **Theme Behavior:**
  - Dark: `bg-surface` (`#121214`), `border-hairline` (`rgba(255,255,255,0.08)`).
  - Light: `bg-surface` (`#F7F7F8`), `border-hairline` (`rgba(0,0,0,0.08)`).

---

### 2.4. `Container` (`components/ui/Container.tsx`)
- **Purpose:** Centralized structural wrapper enforcing max-width (1440px) and responsive horizontal padding.
- **Props:**
  - `className?: string`
  - `children: React.ReactNode`
- **Responsive Behavior:**
  - Mobile (<= 640px): `px-4 sm:px-6`
  - Desktop (>= 1280px): `lg:px-8 max-w-[1440px] mx-auto`

---

### 2.5. `SectionHeading` (`components/ui/SectionHeading.tsx`)
- **Purpose:** Unified section header pairing monospaced technical kickers with editorial Playfair Display serif headings.
- **Props:**
  - `kicker?: string` (e.g., `// SYSTEMS ARCHITECTURE`)
  - `title: string`
  - `subtitle?: string`
  - `alignment?: "start" | "center"`
- **RTL & Typography:**
  - Kicker rendered in JetBrains Mono (`text-[11px] tracking-[0.2em] text-gold uppercase`).
  - Title rendered in Playfair Display serif (`text-3xl sm:text-4xl lg:text-5xl font-normal`).
  - Subtitle rendered in Geist body typography with high readability.

---

## 3. Global Frame Components (`components/layout/`)

### 3.1. `Navbar` (`components/layout/Navbar.tsx`)
- **Purpose:** Sticky header navigation island orchestrating locale routing, theme toggling, and mobile navigation.
- **Components Integrated:** Brand insignia (`AS`), Section anchors (`Systems`, `AI & LLMs`, `Projects`, `Credentials`, `Simulation`), `ThemeToggle`, `LanguageSwitcher`, Executive Inquiry CTA.
- **Responsive Drawer:**
  - Desktop (>= 1024px): Horizontal glassmorphic bar.
  - Mobile (< 1024px): Full-screen glassmorphic slide-out drawer triggered by accessible hamburger button (`aria-label="Toggle Menu"`).
- **RTL Behavior:** Reverses flex layout automatically using CSS logical properties (`margin-inline-start`, `space-x-reverse`).

---

### 3.2. `Footer` (`components/layout/Footer.tsx`)
- **Purpose:** Architectural colophon, legal simulation disclosure, verified direct links, and back-to-top navigation.
- **Key Elements:**
  - Monospace Safety Notice: Explicitly states that in-browser demos are sandboxed reproductions of compiled binaries.
  - Verified Links: GitHub and LinkedIn profiles with external arrows.
  - Smooth Back-to-Top trigger.

---

### 3.3. `ThemeToggle` (`components/layout/ThemeToggle.tsx`)
- **Purpose:** Accessible theme switcher between Dark and Light modes with zero flash of unstyled content (FOUC).
- **Mechanism:** Powered by `ThemeProvider` (`lib/theme/ThemeProvider.tsx`) using `localStorage` key `portfolio-theme` and `document.documentElement.classList`.

---

### 3.4. `LanguageSwitcher` (`components/layout/LanguageSwitcher.tsx`)
- **Purpose:** Dynamic URL pathname rewriting between English (`/en/...`) and Arabic (`/ar/...`).
- **Mechanism:** Replaces the first path segment while preserving downstream sub-routes, query parameters, and scroll state.

---

## 4. Feature Islands (`components/features/`)

### 4.1. `ContactForm` (`components/features/ContactForm.tsx`)
- **Purpose:** Client-side form island providing input sanitization, real-time feedback, and accessible error handling for executive inquiries.
- **Validation:** Enforces email structure, name requirements, and message length limits.
- **Feedback State:** Switches gracefully to confirmation panel upon transmission (`// TRANSMISSION CONFIRMED`).

---

## 5. Project System & Case Study Components (`components/features/projects/`)

### 5.1. `TechnologyBadge` (`components/features/projects/TechnologyBadge.tsx`)
- **Purpose:** Compact monospaced technology tag color-coded by architectural discipline (Language, Framework, Protocol, Database, Tool, Cloud).
- **Props:** `technology: Technology | string`, `size?: "xs" | "sm"`, `className?: string`.
- **Theming:** Adapts seamlessly across dark obsidian and light porcelain backgrounds with crisp border hairlines.

### 5.2. `ProjectCard` (`components/features/projects/ProjectCard.tsx`)
- **Purpose:** Flagship architectural card presenting system metadata, category kicker, title, localized summary, technology tags, and direct action triggers.
- **Props:** `project: Project`, `locale: Locale`, `categoryName?: string`, `isFeaturedHero?: boolean`.
- **Special States:** Supports `isFeaturedHero` rendering with expanded 3-column span, gold luminescence, and dual primary/simulation buttons.

### 5.3. `ProjectFilters` (`components/features/projects/ProjectFilters.tsx`)
- **Purpose:** Accessible, keyboard-navigable category filter pills paired with an instant search filter input.
- **Props:** `categories: ProjectCategory[]`, `activeCategory: string`, `onSelectCategory`, `searchQuery`, `onSearchChange`, `locale`, `totalCount`.
- **A11y:** Uses `aria-pressed` states on filter triggers and full keyboard tab stops.

### 5.4. `CaseStudyHero` (`components/features/projects/case-study/CaseStudyHero.tsx`)
- **Purpose:** Monograph header featuring full breadcrumb hierarchy (`Projects / Category / Project`), status badge, grand serif title, substrate metadata, and primary simulation launcher.

### 5.5. `CaseStudyMetrics` (`components/features/projects/case-study/CaseStudyMetrics.tsx`)
- **Purpose:** High-density 4-card telemetry grid showcasing verified empirical invariants (e.g. `145k tx/s`, `0.82ms p99`, `99.999% SLA`, `0 bytes GC`).

### 5.6. `ProblemSolutionSection` (`components/features/projects/case-study/ProblemSolutionSection.tsx`)
- **Purpose:** Split comparison cards contrasting runtime constraints and failure modes against the engineered deterministic solution.

### 5.7. `ArchitectureTopology` (`components/features/projects/case-study/ArchitectureTopology.tsx`)
- **Purpose:** Visual 4-stage pipeline execution diagram demonstrating end-to-end data transit through the architecture.

### 5.8. `SubsystemsGrid` (`components/features/projects/case-study/SubsystemsGrid.tsx`)
- **Purpose:** 3-column architectural card grid detailing modular subsystems, low-level optimizations, and algorithmic design decisions.

### 5.9. `ChallengesResultsSection` (`components/features/projects/case-study/ChallengesResultsSection.tsx`)
- **Purpose:** Rigorous breakdown of low-level runtime bottlenecks resolved paired with mathematically verified production invariants.

### 5.10. `DemoCalloutBanner` (`components/features/projects/case-study/DemoCalloutBanner.tsx`)
- **Purpose:** Prominent glowing gold banner featuring honest simulation disclosures and a direct trigger to launch the in-browser simulation sandbox.

---

## 6. Interactive Demo System Components (`components/features/demos/` & `demos/`)

### 6.1. `DemoViewer` (`components/features/demos/DemoViewer.tsx`)
- **Purpose:** Central coordinator component orchestrating all 6 canonical demo modes (`interactive_simulation`, `real_live`, `embedded`, `video`, `repo`, `none`).
- **Props:** `project: Project`, `locale: Locale`.
- **Security:** Enforces strict sandboxing on iframes, secure `noopener noreferrer` on external tabs, and clean unmounting.

### 6.2. `DemoShell` (`demos/shared/DemoShell.tsx`)
- **Purpose:** Reusable desktop window chrome encapsulating in-browser simulations with macOS/Windows control dots, title bar, fullscreen toggle, state reset trigger, and status bar.
- **Props:** `title`, `projectSlug`, `locale`, `disclaimer`, `onReset`, `statusText`, `statusItems`, `children`.

### 6.3. `DemoDisclosure` (`demos/shared/DemoDisclosure.tsx`)
- **Purpose:** Prominent technical integrity disclosure banner clearly stating that in-browser simulations run on safe mock data and do not execute native desktop runtimes.

### 6.4. `DemoToolbar` & `DemoStatusBar` (`demos/shared/`)
- **Purpose:** Standardized controls and live telemetry status monitors for simulation environments.

### 6.5. Concrete Simulation Sandboxes (`demos/simulations/`)
- **`YusraSimulation.tsx`:** Windows Desktop C# WinForms enterprise accounting simulation with interactive double-entry balance validation, customer invoicing, and local SQL Server ACID transaction logs.
- **`CampusITTrackerSimulation.tsx`:** 3-tier campus network topology monitor with dynamic ICMP latency ping simulation and incident ticketing desk.
- **`MetaAlgorithmLabSimulation.tsx`:** Real client-side algorithmic benchmark runner and step-by-step sorting visualizer (QuickSort, BubbleSort, InsertionSort).
- **`AuraLedgerSimulation.tsx`:** 5-node distributed consensus Raft state machine simulator with chaos network partition controls.


