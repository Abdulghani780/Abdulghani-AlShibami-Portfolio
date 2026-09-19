# 06 — UI/UX SPECIFICATION (GROUNDED IN CANONICAL VISUAL REFERENCES)

**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System  
**Owner:** عبدالغني الشبامي | Abdulghani Al-Shibami  
**Canonical Visual References:**  
1. `portfolio_hero_concept.jpg` — Futuristic Hero Command Center (`#00FF9D` Neon Mint + `#05080E` Deep Obsidian)
2. `live_demo_studio.jpg` — Dual Workstation Interactive Sandbox Studio
3. `desktop_demo_simulation.jpg` — Native OS Desktop Workstation with Traffic Lights & Streaming Terminal
4. `projects_showcase_grid.jpg` — Flagship Projects Showcase Bento Grid (5 Verified Projects)
**Status:** Approved Canonical UI/UX Standard  
**Date:** September 19, 2026  

---

## 1. Aesthetic Identity & Design Persona
The platform embodies the personal engineering brand of **Abdulghani Al-Shibami**:
- **Design Movement:** High-Tech Command Center & Native Workstation Simulation.
- **Atmosphere:** Deep space mission control, high-performance developer workstation, real-time telemetry console — authoritative, computational, and unmistakably functional.
- **Core Visual Triad:**
  - **Deep Obsidian (`#05080E`, `#070A0F`, `#0B111A`):** Light-absorbing carbon base establishing spatial depth and high-contrast telemetry readout.
  - **Neon Mint (`#00FF9D`):** Primary phosphor accent for active execution beacons, glowing data bus traces, traffic lights, and direct action triggers.
  - **Electric Cyan (`#00F0FF`):** Secondary data highlight for telemetry charts, variable inspectors, and auxiliary network metrics.
- **Anti-Patterns (STRICTLY PROHIBITED):**
  - No generic Bootstrap or stock templates.
  - No bloated unoptimized 3D models or low-FPS animations.
  - No fabricated human portraiture (always use authentic verified profile `public/images/profile/abdulghani-profile-hero.webp`).
  - No deceptive claims that native desktop code executes natively in browser without transparent disclosure.

---

## 2. Dual-Theme Architecture

### 2.1. Dark Mode (`Command Center Obsidian` — Hero Mode)
- **Canvas Base:** `#05080E` (Deep Obsidian / Space Carbon).
- **Surface Elevation 1 (Monitors, Bento Panels):** `#070A0F` with 1px solid `rgba(0, 255, 157, 0.15)` border.
- **Surface Elevation 2 (Terminals, Overlays):** `#0B111A` with 1px solid `rgba(0, 240, 255, 0.25)`.
- **Specular Glows:** Active cards and buttons emit tight localized neon mint specular halos (`box-shadow: 0 0 25px -5px rgba(0, 255, 157, 0.25)`).
- **Text:** High-contrast Optic White (`#FFFFFF`) for titles, Slate 300 (`#CBD5E1`) for telemetry and code.
- **Accents:** Luminous Neon Mint (`#00FF9D`), Electric Cyan (`#00F0FF`).

### 2.2. Light Mode (`Architectural Porcelain` — Daylight Experience)
- **Canvas Base:** High-precision porcelain slate `#F0F4F8`.
- **Surface Elevation 1:** Pure Optical White `#FFFFFF` with Slate Border `#CBD5E1`.
- **Surface Elevation 2:** Soft Alabaster `#F8FAFC`.
- **Shadows:** Ambient occlusions with subtle cyan/emerald undertone (`0 8px 30px rgba(0, 255, 157, 0.08)`).
- **Text:** Deep Obsidian Slate (`#0B111A`) for headlines, Charcoal Slate (`#334155`) for reading copy (>10:1 AAA contrast).
- **Accents:** Deep Emerald (`#059669`) and Cyan Slate (`#0284C7`) maintaining strict WCAG AA contrast.

---

## 3. Viewport & Breakpoint Strategy

| Viewport | Constraint | Target Device | Layout Strategy |
| :--- | :--- | :--- | :--- |
| **Mobile** | `320px - 767px` (Base `393px`) | Modern Flagships (iPhone, Pixel) | Single-column stacked workstation cards, simplified traffic lights, collapsible drawer terminal. |
| **Tablet** | `768px - 1199px` | iPad, Tablets | 2-column bento grids, full terminal drawer toggle, responsive telemetry ribbons. |
| **Desktop** | `1200px - 1536px+` | Laptops, High-Res Displays | Asymmetric Bento Grid (2 top large cards + 3 bottom cards), full multi-workstation sandbox studio. |
| **Ultra-Wide** | `> 1536px` | 4K Workstations | Centered `1536px` command center container with ambient circuit-grid canvas. |

---

## 4. Flagship Projects Showcase Bento Architecture (Reference 4)

The catalog presents the 5 verified projects as live active instances with mini workstation monitors:
1. **Campus IT Tracker (`campus-it-tracker`):** Flagship large card (top left) with interactive campus floorplan preview, live node network, and ITIL ticket stream.
2. **MetaAlgorithm Lab (`metaalgorithm-lab`):** Flagship large card (top right) with empirical complexity graph ($O(n \log n)$ vs $O(n^2)$) and real-time sorting visualizer.
3. **Cafena Coffee Suite (`cafena`):** Bottom card with roastery order queue, POS receipt ticker, and inventory stats.
4. **NovaTech Cloud (`novatech`):** Bottom card with cloud infrastructure nodes, latency gauges, and active cluster telemetry.
5. **GP Graduation Platform (`gp`):** Bottom card with academic evaluation workflow, milestone timeline, and multi-role portal preview.

Every card incorporates:
- Native OS header with traffic light controls (Red, Yellow, Green).
- Live instance indicator (`INST_01: ONLINE`, `INST_02: BENCHMARKING`, etc.).
- Glowing circuit bus trace connecting the card to the central architecture.
- Real-time execution stats (FPS, MEM, P99 Latency, Active Sessions).
- Dual action triggers: Direct `Launch Workstation Demo` button + `Case Study` walkthrough.

---

## 5. Live Interactive Workstation Sandbox Standards (References 2 & 3)

### 5.1. Desktop OS Chrome
- Window header with authentic macOS / Unix traffic light control circles (`#FF5F56` close, `#FFBD2E` minimize, `#27C93F` maximize).
- Monospace title bar: `[PROJECT_NAME] v2.4 — Live Native Execution Sandbox`.
- Dynamic status pill (`● ONLINE`, `● SIMULATING`).

### 5.2. Streaming Terminal Drawer (`WorkstationConsole.tsx`)
- Collapsible bottom drawer streaming real-time event logs, system diagnostics, and WASM memory allocations.
- Real-time event simulation with timestamped outputs (`[00:00:01] CPU 18% | MEM 14.8MB | Sort completed in 3.14ms`).
- Direct action controls: `Auto-scroll`, `Clear Logs`, `Collapse/Expand`.

### 5.3. Real-Time Telemetry Bar (`DemoStatusBar.tsx`)
- Live dials: CPU Utilization (`18%`), Memory Pool (`14.8MB / 23%`), Network Latency (`12ms`), Execution Frame Rate (`60 FPS`).
- Instant toggle button for the streaming terminal drawer.

---

## 6. Internationalization & Bidirectional UX
- **Instant Language Switch:** Client-side state transition between English (`/en`) and Arabic (`/ar`) with full route preservation.
- **Arabic Typography:** `Noto Kufi Arabic` with expanded line height (`1.75x`) ensuring zero clipping of calligraphic ascenders.
- **Directional Isolation:** Technical codes, timestamps, and numbers retain natural LTR alignment inside RTL sentences via `<bdi>`.
- **CSS Logical Properties:** Layouts strictly employ `margin-inline-start`, `padding-inline-end`, `inset-inline-start`.
