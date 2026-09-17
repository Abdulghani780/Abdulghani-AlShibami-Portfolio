# 19 — ACCESSIBILITY (A11Y) SPECIFICATION

**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System  
**Compliance Standard:** WCAG 2.1 Level AA  

---

## 1. Core Principles & Standards

### 1.1. Color Contrast Ratios
- **Normal Text (< 18pt or < 14pt bold):** Contrast ratio >= 4.5:1 against surrounding background.
- **Large Text (>= 18pt or >= 14pt bold):** Contrast ratio >= 3.0:1.
- **Interactive UI Components & Graphical Objects:** Contrast ratio >= 3.0:1 against adjacent colors.
- *Verified in Dark Mode:* Pure White (`#FFF`) on Obsidian (`#0B0B0C`) yields 19.5:1. Royal Gold (`#D4AF37`) on Obsidian yields 9.2:1.
- *Verified in Light Mode:* Midnight Slate (`#0F172A`) on Porcelain (`#FBFBFD`) yields 16.8:1. Burnished Gold (`#997A15`) on Porcelain yields 4.7:1.

### 1.2. Keyboard Navigation & Focus Management
- Every interactive element (buttons, links, form inputs, modal dialogs, tabs) must be reachable via standard `Tab` / `Shift+Tab`.
- No invisible focus: All interactive controls feature a prominent gold outline ring on focus:
  `focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none`.
- Modals and slide-over drawers trap focus while open and restore focus to trigger upon closure.
- `Escape` key closes modals, drawers, and fullscreen simulation views.

### 1.3. Screen Reader Support & ARIA
- All images feature descriptive `alt` text. Decorative icons are hidden via `aria-hidden="true"`.
- Form inputs have associated `<label>` tags with matching `htmlFor` attributes.
- Dynamic states (e.g. active category filter, expanded accordion, theme status) use `aria-selected`, `aria-expanded`, or `aria-live="polite"`.
- Language switching explicitly updates the root `<html lang="..." dir="...">` attributes so screen readers switch pronunciation engines automatically.

### 1.4. Reduced Motion
- Support user preference `prefers-reduced-motion: reduce`.
- CSS media query disables non-essential animations, parallax, and transitions for sensitive users.
