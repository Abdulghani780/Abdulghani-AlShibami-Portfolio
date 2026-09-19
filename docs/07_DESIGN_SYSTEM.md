# 07 — DESIGN SYSTEM & TOKEN SPECIFICATION (CANONICAL WORKSTATION TOKENS)

**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System  
**Canonical Visual References:**  
- Reference 1: `portfolio_hero_concept.jpg`
- Reference 2: `live_demo_studio.jpg`
- Reference 3: `desktop_demo_simulation.jpg`
- Reference 4: `projects_showcase_grid.jpg`
**Status:** Canonical Design Token Authority  
**Date:** September 19, 2026  

---

## 1. Unified Color System

The portfolio design system operates on an uncompromising dual-theme architecture: **Command Center Obsidian** for Dark Mode, and **Architectural Porcelain** for Light Mode.

### 1.1. Color Roles Matrix

| Token Name | Dark Mode (Obsidian) | Light Mode (Porcelain) | Purpose & Usage |
| :--- | :--- | :--- | :--- |
| `--canvas-bg` | `#05080E` (Deep Space Obsidian) | `#F0F4F8` (Porcelain Slate) | Root document background canvas |
| `--surface-elevated` | `#070A0F` (Dark Workstation Carbon) | `#FFFFFF` (Pure Optical White)| Cards, panels, elevated sections |
| `--surface-overlay` | `#0B111A` (Elevated Terminal Shell) | `#F8FAFC` (Alabaster Grey) | Drawers, terminal console, dropdowns |
| `--surface-interactive`| `#111827` (Interactive Slate) | `#E2E8F0` (Soft Slate Well) | Button hover wells, active toggles |
| `--border-hairline` | `rgba(255, 255, 255, 0.08)` | `#CBD5E1` | Structural 1px hairline boundaries |
| `--border-neon` | `rgba(0, 255, 157, 0.25)` | `rgba(5, 150, 105, 0.35)` | Glowing borders, circuit tracks |
| `--neon-mint` | `#00FF9D` (Phosphor Mint) | `#059669` (Deep Emerald) | Primary brand accent & active states |
| `--electric-cyan` | `#00F0FF` (Electric Cyan) | `#0284C7` (Cobalt Cyan) | Secondary telemetry & diagnostics |
| `--text-primary` | `#FFFFFF` (Optic White) | `#0B111A` (Midnight Obsidian) | Marquee headlines, high-contrast titles|
| `--text-secondary` | `#94A3B8` (Slate 400) | `#334155` (Slate 700) | Body narratives, architectural specs |
| `--text-muted` | `#64748B` (Slate 500) | `#64748B` (Slate 500) | Metadata, timestamps, coordinates |
| `--status-emerald` | `#00FF9D` / `#10B981` | `#059669` | Quorum health, live operational node |
| `--status-amber` | `#F59E0B` | `#D97706` | Warning, minimize state |
| `--status-rose` | `#FF5F56` / `#EF4444` | `#DC2626` | Close button, node partition, error |

---

## 2. Typography Architecture

The typographic hierarchy balances computational rigor with high-readability telemetry across Latin and Arabic scripts.

### 2.1. Type Families
- **Display & Headlines (Latin):** `Geist`, `Inter`, `system-ui`
- **Telemetry & Systems Monospace:** `JetBrains Mono`, `ui-monospace`, `monospace`
- **Arabic Typography:** `Noto Kufi Arabic`, `Noto Sans Arabic`

### 2.2. Type Scale & Metric Specifications

| Token | Family | Font Size | Weight | Line Height | Tracking | Application |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `display-hero` | Sans | `56px (3.5rem)` | 700 | `64px` | `-0.02em` | Homepage marquee title |
| `headline-lg` | Sans | `36px (2.25rem)`| 600 | `44px` | `-0.015em`| Section headers, Bento titles |
| `headline-md` | Sans | `24px (1.5rem)` | 600 | `32px` | `0em` | Card titles, Workstation headers |
| `body-lg` | Sans | `18px (1.125rem)`| 400 | `28px` | `-0.01em` | Executive summaries, Lead intro |
| `body-md` | Sans | `15px (0.9375rem)`| 400 | `24px` | `0em` | Standard documentation & prose |
| `label-lg` | Mono | `13px (0.8125rem)`| 500 | `18px` | `0.08em` | Primary button labels, Tab headers |
| `label-md` | Mono | `11px (0.6875rem)`| 500 | `16px` | `0.12em` | Protocol badges, Telemetry markers |
| `label-sm` | Mono | `10px (0.625rem)` | 400 | `14px` | `0.16em` | System coordinates, Timestamps |

---

## 3. Layout, Spacing & Geometry Rules

### 3.1. Spatial Grid & Constraints
- **Max Content Constraint:** `1536px` centered command center container.
- **Circuit Grid Pattern:** 32px repetitive dot-and-line matrix background (`circuit-grid`, `bg-grid-circuit`).
- **Desktop Margins:** Outer margin `2.5rem` (`40px`), Column gutter `1.5rem` (`24px`).
- **Mobile Margins:** Outer margin `1rem` (`16px`), Column gutter `1rem` (`16px`).

### 3.2. Workstation Geometry & Traffic Lights
- **Corner Radii:** Controlled `12px` (`rounded-xl`) or `16px` (`rounded-2xl`) for native OS windows.
- **Traffic Light Controls:**
  - Close: `#FF5F56` (12px circle)
  - Minimize: `#FFBD2E` (12px circle)
  - Maximize: `#27C93F` (12px circle)
- **Workstation Shadow:** `box-shadow: 0 0 25px -5px rgba(0, 255, 157, 0.25)` when active.

---

## 4. Component Token Specifications

### 4.1. Navigation Bar (`components/layout/Navbar.tsx`)
- **Backdrop:** `rgba(5, 8, 14, 0.85)` with `backdrop-filter: blur(16px)`.
- **Border:** `1px solid rgba(0, 255, 157, 0.15)`.
- **Monogram:** Emerald/Mint `AS` symbol with green status pulse.
- **Navigation Links:** `Projects Bento`, `Showcase Studio`, `Case Studies`, `Contact`.

### 4.2. Bento Showcase Grid Card (`components/features/projects/ProjectBentoShowcase.tsx`)
- **Layout:** Asymmetric 2 large top cards + 3 bottom cards.
- **Visuals:** Native window chrome, traffic light dots, circuit bus trace, live preview monitor.
- **Metrics Bar:** Telemetry chips showing FPS, MEM pool, P99 latency, and user sessions.
- **Action:** Direct `[ Launch Workstation Demo ]` button in neon mint.

### 4.3. Workstation Terminal Drawer (`demos/shared/WorkstationConsole.tsx`)
- **Backdrop:** `#05080E` deep console black.
- **Border Top:** `1px solid rgba(0, 255, 157, 0.2)`.
- **Logs:** Dynamic event stream with timestamp and colored levels (`[00:00:01] INFO: WASM memory allocated`).
- **Toolbar:** `Auto-scroll`, `Clear Logs`, `Collapse/Expand` triggers.
