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
- **Purpose:** Architectural colophon, legal simulation disclosure, PGP verification fingerprints, and back-to-top navigation.
- **Key Elements:**
  - Monospace Safety Notice: Explicitly states that in-browser demos are sandboxed reproductions of compiled binaries.
  - PGP Security Fingerprint: Cryptographic verification anchor for executive communication.
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
