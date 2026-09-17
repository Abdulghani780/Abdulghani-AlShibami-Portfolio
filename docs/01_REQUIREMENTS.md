# 01 — REQUIREMENTS SPECIFICATION

**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System  
**Standard:** IEEE 830-compliant Software Requirements Specification  

---

## 1. Functional Requirements (FR)

### FR-01: Hero & Identity Presentation
- **FR-01.1:** System shall display the owner's full name in English ("Abdulghani Al-Shibami") and Arabic ("عبدالغني الشبامي").
- **FR-01.2:** System shall render a dedicated profile asset slot linked to `public/images/profile/` or display placeholder `[PROFILE_IMAGE]`.
- **FR-01.3:** System shall provide primary Call-to-Action (CTA) buttons: "Explore Projects" and "Get in Touch", along with direct links to GitHub and professional profiles.

### FR-02: Project Catalog & Case Studies
- **FR-02.1:** System shall display a responsive grid of projects with search and category filtering.
- **FR-02.2:** System shall support categories: Web Applications, Desktop Applications, C# / .NET, Python, AI / Machine Learning, Database Systems, Mobile Applications, Academic Projects, UI / UX, and Other.
- **FR-02.3:** Each project shall have a dedicated slug route (`/projects/[slug]`) rendering:
  - Project Hero & metadata (year, status, category)
  - Problem statement & technical solution
  - Architectural overview & technical challenges
  - Results, key metrics, and future enhancements
  - Interactive Demo action CTA

### FR-03: Interactive Demo System
- **FR-03.1:** System shall render dedicated demo view (`/projects/[slug]/demo`).
- **FR-03.2:** System shall support 6 demo types:
  1. `REAL LIVE DEMO` (Direct external URL link)
  2. `EMBEDDED DEMO` (Sandboxed iframe with security attributes)
  3. `INTERACTIVE SIMULATION` (Web-based mockup reproducing desktop UI flows with mock data)
  4. `VIDEO DEMO` (Embedded responsive video player)
  5. `REPOSITORY` (GitHub repository inspection)
  6. `NO DEMO` (Case study view only)
- **FR-03.3:** For C#/.NET and Python desktop software, the system shall explicitly label simulations as "Interactive Web Simulation".

### FR-04: Bilingual & Localization (i18n)
- **FR-04.1:** Default locale shall be English (`en`) with LTR layout.
- **FR-04.2:** Secondary locale shall be Arabic (`ar`) with RTL layout.
- **FR-04.3:** Switching languages shall preserve current route and query parameters.
- **FR-04.4:** Arabic typography shall use Cairo/Tajawal font; English typography shall use Outfit/Inter.

### FR-05: Theming System
- **FR-05.1:** Support Dark Mode (Obsidian Black `#0B0B0C`, Royal Gold `#D4AF37`, Pure White `#FFFFFF`).
- **FR-05.2:** Support Light Mode (Porcelain White, Warm Charcoal `#1E1E24`, Royal Gold `#997A15`).
- **FR-05.3:** Persist theme preference in `localStorage` without page-load flash.

### FR-06: Contact System
- **FR-06.1:** Provide contact form with Name, Email, Subject, and Message fields.
- **FR-06.2:** Validate inputs using Zod schema on both client and server.
- **FR-06.3:** Include honeypot spam protection and rate limiting.

---

## 2. Non-Functional Requirements (NFR)

### NFR-01: Performance
- First Contentful Paint (FCP) < 1.2s.
- Largest Contentful Paint (LCP) < 2.0s.
- Cumulative Layout Shift (CLS) < 0.05.
- Lighthouse Performance score >= 90.

### NFR-02: Accessibility
- Adherence to WCAG 2.1 Level AA.
- Full keyboard navigability and visible focus rings.
- Contrast ratio >= 4.5:1 for standard text, 3:1 for large text.

### NFR-03: Security
- No exposure of private API tokens or service role keys.
- Enforce Content Security Policy (CSP), `X-Frame-Options: SAMEORIGIN`, and strict input sanitization.
- PostgreSQL Row Level Security (RLS) enabled on all Supabase tables.

### NFR-04: Reliability & Data Fallback
- Platform must remain fully functional offline or without Supabase credentials via a typed local mock data layer.
