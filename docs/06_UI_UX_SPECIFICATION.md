# 06 — UI/UX SPECIFICATION (GROUNDED IN 12 VISUAL DESIGN REFERENCES)

**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System  
**Owner:** عبدالغني الشبامي | Abdulghani Al-Shibami  
**Design Reference Authority:** StitchMCP Screens 01 through 12 (`design-references/`)  
**Status:** Approved UI/UX Standard  
**Date:** September 17, 2026  

---

## 1. Aesthetic Identity & Design Persona
The platform embodies the personal engineering brand of **Abdulghani Al-Shibami**:
- **Design Movement:** Neo-Classical Editorial Luxury fused with Mission-Critical Systems Engineering.
- **Atmosphere:** Evokes haute horlogerie ateliers, architectural blue-sky drafts, and sovereign financial headquarters — authoritative, disciplined, and profoundly calm.
- **Core Visual Triad:**
  - **Obsidian Black (`#0B0B0C`, `#121214`):** Light-absorbing monolithic base establishing infinite depth and intellectual seriousness.
  - **Royal Gold (`#D4AF37`, `#997A15`):** Architectural datum line for 1px hairlines, coordinates, active indicators, and structural metadata.
  - **Crisp Optic White (`#FFFFFF`, `#F8FAFC`):** Razor-sharp contrast, editorial typography, and high-readability telemetry.
- **Anti-Patterns (STRICTLY PROHIBITED):**
  - No childish cartoonish UI or cheap saturated neon gradients.
  - No bloated 3D models or FPS-dropping particle canvas animations.
  - No fabricated human portraiture (use `[PROFILE_IMAGE]` placeholder).
  - No deceptive claims that native desktop code executes directly in web browsers.

---

## 2. Dual-Theme Architecture (Verified by References 01–04, 05–06, 07–08, 09–10)

### 2.1. Dark Mode (`Obsidian & Gilded Precision` — Hero Mode)
- **Canvas Base:** `#0B0B0C`
- **Surface Elevation 1 (Cards, Modules):** `#121214` with 1px solid `#27272A` hairline border.
- **Surface Elevation 2 (Modals, Overlays):** `#18181B` with 1px solid `rgba(212, 175, 55, 0.25)`.
- **Specular Highlights:** Active states emit tight localized gold specular halos (`box-shadow: 0 0 0 1px #D4AF37, 0 12px 32px -8px rgba(212, 175, 55, 0.12)`).
- **Text:** High-contrast Optic White (`#FFFFFF`) for titles, Slate 400 (`#94A3B8`) for body prose.
- **Accents:** Luminous Royal Gold (`#D4AF37`, `#F2CA50`).

### 2.2. Light Mode (`Porcelain Sovereign / Architectural Prestige` — Intentional Daylight Experience)
- **Canvas Base:** Warm Porcelain Mineral `#FBFBFD` (never stark `#FFFFFF`).
- **Surface Elevation 1:** Pure Optical White `#FFFFFF` with Champagne Sand `#E2D9C8` borders.
- **Surface Elevation 2:** Soft Alabaster `#F3F3F6`.
- **Shadows:** Ambient occlusion drops (`0 4px 20px -2px rgba(15, 23, 42, 0.03)`).
- **Text:** Deep Midnight Slate (`#0F172A`) for headlines, Charcoal Slate (`#334155`) for reading copy (>10:1 AAA contrast).
- **Accents:** Burnished Royal Ochre (`#997A15`, `#B48C1C`).

---

## 3. Viewport & Breakpoint Strategy (Verified by References 11 & 12)

| Viewport | Constraint | Target Device | Layout Strategy |
| :--- | :--- | :--- | :--- |
| **Mobile** | `320px - 767px` (Base `393px`) | Modern Flagships (iPhone, Pixel) | 4-column grid, `1.25rem` outer margins, vertical pipeline flows, stacked buttons, sticky bottom dock. |
| **Tablet** | `768px - 1199px` | iPad, Tablets | 8-column grid, `2rem` outer margins, 2-column project grids. |
| **Desktop** | `1200px - 1440px+` | Laptops, Workstations | 12-column grid, `4rem` outer margins, 3-column dense simulation dashboards, side-by-side case studies. |
| **Ultra-Wide** | `> 1440px` | 4K & Ultrawide | Centered `1440px` architectural container with expansive gallery borders. |

---

## 4. Internationalization & Bidirectional UX (Verified by References 03 & 04)

- **Language Switch:** Instant client-side state transition between English (`/en`) and Arabic (`/ar`).
- **Arabic Typography:**
  - Headings: `Noto Serif` / `Noto Kufi Arabic`
  - Body: `Noto Sans Arabic` with line-height expanded to `1.75x`
  - Numerals & Technical Codes: Retain LTR visual order within RTL sentences (`<bdi>O(1)</bdi>`, `<bdi>C# .NET 9</bdi>`).
- **CSS Logical Properties:**
  - Layouts strictly employ `margin-inline-start`, `padding-inline-end`, `inset-inline-start` to avoid mirrored layout regressions.
  - Action chevrons mirror dynamically: right-arrow `→` for English LTR, left-arrow `←` for Arabic RTL.

---

## 5. Interactive Simulation Sandbox Standards (Verified by References 09 & 10)

- **Honest Architectural Representation:**
  - Every demo representing non-web projects (C# .NET desktop engines, WPF apps, Python distributed backends) must display the top gold disclosure banner:
    > **INTERACTIVE WEB SIMULATION**  
    > *Sandboxed In-Browser Simulation of C# .NET 9 Core Architecture — High-fidelity state machine reproduction (compiled desktop/server runtime runs out-of-browser).*
- **Simulation Interface Elements:**
  - **Live Topology Canvas:** Circular Raft nodes showing active leader election and heartbeat transmissions.
  - **Chaos Controls:** Interactive sliders for network latency and packet drop injection; buttons to simulate node crashes and Byzantine partitions.
  - **Developer REPL:** Monospace interactive command terminal reflecting deterministic cluster consensus states.
  - **Live WAL Stream:** Real-time table streaming committed transaction blocks with hashes and verification statuses.
