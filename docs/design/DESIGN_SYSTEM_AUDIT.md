# DESIGN SYSTEM & VISUAL HARMONY AUDIT
**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System  
**Standard:** Enterprise Technical Luxury & Modern Architectural Precision  
**Auditor:** Principal UI/UX Product Designer & Design Systems Engineer  
**Date:** September 21, 2026  
**Status:** APPROVED DESIGN SYSTEM BASELINE — 100% HARMONIZED  

---

## 1. Executive Summary & Design Philosophy
The visual identity of this portfolio is designed to communicate **technical authority**, **rigorous systems thinking**, and **academic distinction**. Rather than relying on generic developer templates or neon-heavy gaming aesthetics, the system implements a **Modern Technical Luxury** design language rooted in:
1. **Deep Obsidian & Titanium Slate surfaces** that give profound visual depth.
2. **Electric Indigo (`#6366F1`) & Cyan (`#06B6D4`) luminous accents** that guide user focus toward interactive controls and architecture diagrams.
3. **Emerald (`#10B981`) telemetry indicators** signaling verified uptime, authentic credentials, and live runtime systems.
4. **Porcelain Light Mode** that feels intentional, architectural, and print-grade rather than a harsh color inversion.

---

## 2. Comprehensive Token Inventory & Audit Decisions

| Token Category | Existing Value / CSS Var | Semantic Purpose | Audit Finding | Decision | Rationale |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Dark Background** | `#080C14` / `bg-slate-950` | Primary dark canvas | Extremely deep, reduces eye fatigue, sets luxury tone | **KEEP** | Optimal contrast with indigo/cyan glows |
| **Dark Surface** | `#0F172A` / `bg-slate-900` | Card and modal backdrop | Crisp contrast against base background | **KEEP** | Standardized across all bento cards |
| **Dark Elevated** | `#111827` / `bg-gray-900` | Popovers and nested elements | Clean layer hierarchy | **KEEP** | Provides 3D elevation without heavy shadows |
| **Brand Primary** | `#6366F1` (Indigo 500) | Primary CTA & Key Accents | Vibrant, professional, high-contrast | **KEEP** | Approved baseline signature brand hue |
| **Brand Secondary** | `#06B6D4` (Cyan 500) | Secondary links & kickers | Complements indigo with cybernetic precision | **KEEP** | Excellent legibility on dark surfaces |
| **Status Success** | `#10B981` (Emerald 500) | Verified badges, active runtime | Clear semantic distinction for authenticity | **KEEP** | Signals real credentials & live telemetry |
| **Status Warning** | `#F59E0B` (Amber 500) | Prototype indicators | Warm metallic accent | **KEEP** | Used selectively for high-visibility notices |
| **Light Canvas** | `#F8FAFC` (Slate 50) | Primary light canvas | Soft porcelain white, zero glare | **KEEP** | Far superior to stark `#FFFFFF` background |
| **Light Surface** | `#FFFFFF` | Cards & elevated light surfaces | Pure crisp contrast | **KEEP** | Establishes clean paper-like card boundaries |
| **Light Text Base** | `#0F172A` (Slate 900) | High-contrast body & headings | WCAG AAA contrast ratio (15.8:1) | **KEEP** | Crisp readability in sunlight or bright rooms |
| **Light Text Muted** | `#475569` (Slate 600) | Descriptions & subtitles | WCAG AA contrast ratio (5.6:1) | **KEEP** | Clean hierarchy without fading into gray |
| **Light Borders** | `#E2E8F0` / `#CBD5E1` | Card dividers & outlines | Subtle structural definition | **KEEP** | Replaces harsh dark borders in light mode |
| **Legacy Gold** | `#D4AF37` / `#F3E5AB` | Old accent remnants | Replaced in Section 05 and Case Studies | **REPLACE** | Harmonized with Cyan/Indigo for unified brand coherence |

---

## 3. Typography Hierarchy & Font Stacks

### Font Families
- **Primary Technical Sans:** `Geist Sans`, system-ui, -apple-system, sans-serif.
- **Precision Monospace:** `Geist Mono`, `ui-monospace`, `SFMono-Regular`, monospace.
- **Arabic Typography:** `IBM Plex Sans Arabic`, `Noto Sans Arabic`, sans-serif.

### Scale & Application Rules
1. **Hero Title (`h1`):** `text-4xl sm:text-6xl font-black tracking-tight` (High impact, authoritative).
2. **Section Headings (`h2`):** `text-2xl sm:text-3xl font-bold font-serif` (Structured, elegant).
3. **Card Titles (`h3`):** `text-lg sm:text-xl font-bold font-sans` (Scannable, balanced).
4. **Technical Kickers:** `text-[10px] sm:text-xs font-mono uppercase tracking-widest` (Precision metadata).
5. **Body Copy:** `text-sm sm:text-base leading-relaxed` (Comfortable reading cadence).

---

## 4. Spacing, Rhythm & Elevation

### Spacing Scale
- Component Padding: `p-4 sm:p-6 lg:p-8` (Adaptive breathing room).
- Grid Gaps: `gap-4 sm:gap-6 lg:gap-8` (Consistent rhythm).
- Section Spacing: `py-16 sm:py-24` (Distinct topical transitions).

### Shadow & Glow Tokens
- **Ambient Glow:** `shadow-[0_0_25px_rgba(99,102,241,0.2)]`
- **Surface Elevation:** `shadow-xl border border-slate-200 dark:border-indigo-500/30`
- **Interactive Hover:** `hover:border-cyan-400/60 hover:shadow-[0_0_20px_rgba(6,182,212,0.25)]`

---

## 5. Dual-Theme Discipline & Light Mode Rules
Every component in the application complies with the following dual-theme pairing rules:
1. **Never use single-theme hardcoded color hexes** without a corresponding `dark:` modifier.
2. **Text contrast ratios must strictly pass WCAG AA**:
   - Dark Mode: `#FFFFFF` or `#E2E8F0` on `#080C14` / `#0F172A` (>= 12:1 ratio).
   - Light Mode: `#0F172A` on `#F8FAFC` / `#FFFFFF` (>= 15:1 ratio).
3. **Interactive elements must reflect tactile feedback**:
   - Focus outline: `focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2`.
   - Hover scaling: `hover:scale-[1.01] active:scale-[0.99] transition-all`.

---

## 6. Verification & Conclusion
The design system has been validated across both theme modes and both language directions (LTR/RTL). All visual elements reinforce Abdulghani Al-Shibami's position as an accomplished, high-caliber software engineering professional.
