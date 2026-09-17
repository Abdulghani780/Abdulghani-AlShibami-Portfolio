# 07 — DESIGN SYSTEM & TOKEN SPECIFICATION (EXTRACTED FROM 12 VISUAL REFERENCES)

**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System  
**Design Reference Source:** StitchMCP Project `1524242436626085687` (Screens 01 through 12)  
**Status:** Canonical Design Token Authority  
**Date:** September 17, 2026  

---

## 1. Unified Color System

The portfolio design system operates on an uncompromising dual-theme architecture: **Obsidian & Gilded Precision** for Dark Mode, and **Porcelain Sovereign / Architectural Prestige** for Light Mode.

### 1.1. Color Roles Matrix

| Token Name | Dark Mode (Obsidian) | Light Mode (Porcelain) | Purpose & Usage |
| :--- | :--- | :--- | :--- |
| `--canvas-bg` | `#0B0B0C` (Pitch Obsidian) | `#FBFBFD` (Ivory Porcelain) | Root document background canvas |
| `--surface-elevated` | `#121214` (Deep Charcoal) | `#FFFFFF` (Pure Optical White)| Cards, panels, elevated sections |
| `--surface-overlay` | `#18181B` (Rich Graphite) | `#F3F3F6` (Alabaster Grey) | Drawers, modals, dropdowns |
| `--surface-interactive`| `#202023` (Interactive Slate)| `#EAE5D9` (Soft Champagne) | Button hover wells, active toggles |
| `--border-hairline` | `#27272A` / `rgba(255,255,255,0.08)` | `#E2D9C8` / `#E2E8F0` | Structural 1px hairline boundaries |
| `--border-gold` | `rgba(212, 175, 55, 0.35)` | `#997A15` / `rgba(153,122,21,0.3)`| Gilded accents, card highlights |
| `--gold-primary` | `#D4AF37` (Luminous Royal Gold)| `#997A15` (Burnished Royal Gold) | Primary brand accent & active states |
| `--gold-light` | `#F2CA50` (Specular Gold) | `#D4AF37` (Golden Ochre) | Hover highlights, luminous focus |
| `--gold-muted` | `rgba(212, 175, 55, 0.15)` | `rgba(153, 122, 21, 0.08)` | Chip fills, subtle table striping |
| `--text-primary` | `#FFFFFF` / `#F8FAFC` (Optic White)| `#0F172A` (Midnight Slate) | Marquee headlines, high-contrast titles|
| `--text-secondary` | `#94A3B8` (Slate 400) | `#334155` (Slate 700) | Body narratives, architectural specs |
| `--text-muted` | `#71717A` (Zinc 500) | `#64748B` (Slate 500) | Metadata, timestamps, coordinates |
| `--status-emerald` | `#10B981` | `#059669` | Quorum health, live operational node |
| `--status-amber` | `#F59E0B` | `#D97706` | Warning, speculative pre-vote phase |
| `--status-rose` | `#EF4444` | `#DC2626` | Node partition, failover state |

---

## 2. Typography Architecture

The typographic hierarchy juxtaposes classical editorial prestige with exacting computational rigor across Latin and Arabic scripts.

### 2.1. Type Families
- **Display & Narrative Serifs (Latin):** `Playfair Display`, `Noto Serif`
- **Body & Interface Sans (Latin):** `Geist`, `Noto Sans`
- **Telemetry & Systems Monospace:** `JetBrains Mono`
- **Arabic Typography:** `Noto Kufi Arabic`, `Noto Sans Arabic`

### 2.2. Type Scale & Metric Specifications

| Token | Family | Font Size | Weight | Line Height | Tracking | Application |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `display-hero` | Serif | `56px (3.5rem)` | 600 | `64px` | `-0.02em` | Homepage marquee title |
| `display-mobile`| Serif | `36px (2.25rem)`| 600 | `44px` | `-0.01em` | Mobile marquee headline |
| `headline-lg` | Serif | `40px (2.5rem)` | 500 | `48px` | `-0.015em`| Section headers, Case study title |
| `headline-md` | Serif | `28px (1.75rem)`| 500 | `36px` | `0em` | Subsections, Flagship card titles |
| `headline-sm` | Serif | `22px (1.375rem)`| 500 | `30px` | `0em` | Card titles, Modal headers |
| `body-lg` | Sans | `18px (1.125rem)`| 400 | `28px` | `-0.01em` | Executive summaries, Lead intro |
| `body-md` | Sans | `15px (0.9375rem)`| 400 | `24px` | `0em` | Standard documentation & prose |
| `body-sm` | Sans | `13px (0.8125rem)`| 400 | `20px` | `0.01em` | Captions, Footnotes |
| `label-lg` | Mono | `13px (0.8125rem)`| 500 | `18px` | `0.08em` | Primary button labels, Tab headers |
| `label-md` | Mono | `11px (0.6875rem)`| 500 | `16px` | `0.12em` | Protocol badges, Telemetry markers |
| `label-sm` | Mono | `10px (0.625rem)` | 400 | `14px` | `0.16em` | System coordinates, Timestamps |

### 2.3. Arabic RTL Typography Rules
- **Line Height Expansion:** Arabic body line heights are expanded to `1.75x` to `1.85x` baseline to accommodate calligraphic ascenders without clipping.
- **Font Stack:** `'Noto Kufi Arabic', 'Noto Sans Arabic', system-ui, sans-serif`.
- **Directional Isolation:** Numbers, code identifiers (`C# .NET 9`, `O(1)`, `p99 < 0.8ms`), and technical acronyms retain LTR direction inside RTL flow with `<bdi>` wrapping or `dir="ltr"` inline styling.

---

## 3. Layout, Spacing & Geometry Rules

### 3.1. Spatial Grid & Constraints
- **Max Content Constraint:** `1440px` centered canvas.
- **Desktop Margins (1200px+):** Outer margin `4rem` (`64px`), Column gutter `2rem` (`32px`), 12-column grid.
- **Tablet Margins (768px - 1199px):** Outer margin `2rem` (`32px`), Column gutter `1.5rem` (`24px`), 8-column grid.
- **Mobile Margins (320px - 767px):** Outer margin `1.25rem` (`20px`), Column gutter `1rem` (`16px`), 4-column grid.

### 3.2. Vertical Rhythm Scale
- `space-3xl`: `6rem` (`96px`) — Major section separation.
- `space-2xl`: `4rem` (`64px`) — Hero to telemetry gap, section to section.
- `space-xl`: `2.5rem` (`40px`) — Card internal padding (case studies).
- `space-lg`: `1.5rem` (`24px`) — Standard card padding, grid row gap.
- `space-md`: `1rem` (`16px`) — Control toolbar gaps, button padding.
- `space-sm`: `0.5rem` (`8px`) — Chip padding, micro-spacing.
- `space-xs`: `0.25rem` (`4px`) — Inline icon gaps, badge vertical padding.

### 3.3. Shape & Border Radius Tokens
- **Container & Card Geometry:** Strictly `0px` (`rounded-none`) or subtle `4px` (`rounded-sm`). Zero bubble curves or excessive pill rounding on cards.
- **Button Geometry:** `0px` sharp corners with 1px border framing, or `4px` tailored executive radius.
- **Micro-Pills (Exception):** Status indicators, running beacons, and filter tags use full pill rounding (`9999px`) exclusively to communicate atomic telemetry states without clashing with the rectangular structural architecture.

---

## 4. Component Token Specifications

### 4.1. Navigation Bar
- **Backdrop:** `rgba(11, 11, 12, 0.85)` in Dark Mode, `rgba(251, 251, 253, 0.85)` in Light Mode.
- **Filter:** `backdrop-filter: blur(16px)`.
- **Border Bottom:** `1px solid var(--border-hairline)`.
- **Height:** `64px` on desktop, `56px` on mobile.
- **Brand Element:** `Playfair Display` serif typography with gold monogram glyph.

### 4.2. Buttons
- **Primary Executive Action:**
  - Dark: Solid `#0B0B0C`, 1px solid `#D4AF37`, text `#FFFFFF`, uppercase `JetBrains Mono`. Hover: background `rgba(212, 175, 55, 0.12)`, glowing gold border.
  - Light: Solid `#0F172A`, 1px solid `#997A15`, text `#FFFFFF`. Hover: background `#1E293B`.
- **Secondary Ghost Action:**
  - 1px solid `var(--border-hairline)`, transparent background, text `var(--text-primary)`. Hover: 1px solid `var(--gold-primary)`, text `var(--gold-primary)`.
- **Touch Target Standard:** Minimum `44px x 44px` on desktop, `48px x 48px` on mobile.

### 4.3. Project Cards & Dossiers
- **Background:** `var(--surface-elevated)`.
- **Border:** `1px solid var(--border-hairline)`.
- **Corner Accents:** 4px gold coordinate bracket marks on flagship cards (`┌ ┐ └ ┘`).
- **Hover State:** Border transitions to `var(--gold-primary)` at 150ms ease-out with localized gold specular illumination (`box-shadow: 0 0 0 1px #D4AF37, 0 12px 32px -8px rgba(212, 175, 55, 0.12)`).

### 4.4. Interactive Demo Sandbox Viewer
- **Simulation Disclosure Banner:**
  - Background: `rgba(212, 175, 55, 0.08)`.
  - Border: `1px solid var(--border-gold)`.
  - Badge: Gold pill `INTERACTIVE WEB SIMULATION`.
  - Text: High-contrast monospace disclaimer.
- **Raft Cluster Canvas:**
  - Background: Obsidian grid (`#0E0E0F`) with 24px coordinate lines (`rgba(255,255,255,0.03)`).
  - Leader Node: Glowing gold aura ring (`rgba(212, 175, 55, 0.4)`), live pulse animation.
  - Follower Nodes: Orbiting satellites with animated SVG RPC transmission lines.
- **Developer Terminal REPL:**
  - Background: `#0B0B0C` (Dark) / `#F3F3F6` (Light).
  - Font: `JetBrains Mono` 12px.
  - Prompt: Gold `> aura-cli` with blinking cursor.

### 4.5. Profile Image Standard (`[PROFILE_IMAGE]`)
- **Container:** Rectangular or square portrait container (`280px x 340px` desktop, `200px x 200px` mobile).
- **Border:** `1px solid var(--border-gold)` with corner bracket markers.
- **Placeholder Text:** `[PROFILE_IMAGE]` in uppercase monospace gold with subtitle `"Abdulghani Al-Shibami // Verified Systems Architect"`.
- **Asset Linkage:** Future image will map directly to `public/images/profile/abdulghani.webp` without code refactoring.
