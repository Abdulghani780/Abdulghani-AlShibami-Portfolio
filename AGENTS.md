# AGENTS.md — OPERATIONAL CONSTITUTION FOR AUTONOMOUS AI AGENTS

**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System  
**Owner:** عبدالغني الشبامي | Abdulghani Al-Shibami  
**Repository:** `c:\my projects\Portifilo`  
**Standard:** Enterprise Production-Grade Autonomous Engineering  

---

## 1. Project Purpose & Scope
This repository houses the personal portfolio, engineering showcase, interactive demonstration system, and academic/professional identity platform for **Abdulghani Al-Shibami**.
The system is built as a production-grade web platform supporting English (primary) and Arabic (secondary), Dark and Light modes (luxury Black & Royal Gold palette), resilient database persistence via Supabase, and isolated interactive demo sandboxes.

---

## 2. The Core 10-Step Operational Loop
Before touching code or executing engineering tasks, every autonomous agent MUST execute this cycle:

```text
1. Inspect relevant documentation in docs/ and root control files.
2. Inspect existing implementation and environment state.
3. Identify dependencies and potential side effects.
4. Identify architectural and visual impact.
5. Implement the smallest safe, verified change.
6. Test (TypeCheck, Lint, Unit/Integration tests, Browser inspection).
7. Update documentation (specs, schemas, decision logs).
8. Update PROGRESS.md and TASKS.md.
9. Update CHANGELOG.md and IMPLEMENTATION_LOG.md when appropriate.
10. Commit to Git with conventional commit messaging.
```

---

## 3. Architecture Rules
- **Framework:** Next.js (App Router), React, TypeScript.
- **Styling:** Tailwind CSS tailored with bespoke design tokens defined in `tailwind.config.ts` and CSS variables in `app/globals.css`.
- **Decoupled Data Layer:** All data access must pass through a service layer (`lib/services/` or `lib/dal/`). Do not query Supabase directly inside UI presentation components.
- **Zero-Failure Fallback:** Data layer must gracefully handle offline/missing credentials by providing typed local mock fallbacks. Public visitors must never see raw error traces.
- **Component Separation:** Maintain clear separation:
  - `components/ui/`: Dumb atomic UI elements (buttons, badges, modals, cards).
  - `components/layout/`: Global layout structures (Navbar, Footer, LanguageSwitcher, ThemeToggle).
  - `components/features/`: Domain-specific components (ProjectGrid, DemoViewer, ContactForm).
  - `lib/`: Business logic, database clients, internationalization helpers, sanitizers.
  - `types/`: Universal TypeScript definitions.

---

## 4. Visual Identity & UI Rules
- **Color Identity:**
  - Primary Base: Deep Obsidian Black (`#0B0B0C`, `#121214`)
  - Accent / Brand: Royal Gold (`#D4AF37`, `#F3E5AB`, `#997A15`, glowing hues)
  - Text & Contrast: Crisp Pure White (`#FFFFFF`) and warm metallics (`#E5E5E5`, `#A1A1AA`)
- **Dual-Theme Discipline:**
  - Dark Mode is the hero experience.
  - Light Mode must be intentionally styled (off-white porcelain surfaces, crisp dark slate typography, subtle royal gold accents). No raw color inversion!
- **Internationalization (i18n):**
  - Default: English (`en`, LTR).
  - Secondary: Arabic (`ar`, RTL).
  - CSS MUST use logical properties (`margin-inline`, `padding-inline`, `start`, `end`) to prevent RTL layout collapse.
  - No duplicated layout JSX for different languages.
- **Profile Asset:**
  - Never fabricate photographs of the owner.
  - Profile image must reference `public/images/profile/` with fallback to placeholder `[PROFILE_IMAGE]`.

---

## 5. Interactive Demo System Rules
- Demos must NEVER falsely claim that desktop apps (C#, WinForms, WPF, Python desktop) are running natively inside the browser.
- Demos must be classified into one of the 6 canonical types:
  1. `REAL LIVE DEMO` (direct live URL for genuine web applications)
  2. `EMBEDDED DEMO` (sandboxed iframe with strict permissions if allowed by headers)
  3. `INTERACTIVE SIMULATION` (browser-based high-fidelity reproduction of desktop/CLI flows with mock data)
  4. `VIDEO DEMO` (responsive video player showcasing recorded workflows)
  5. `REPOSITORY` (code walkthrough and links)
  6. `NO DEMO` (case study and architectural diagrams only)
- Demos must be isolated under `app/[locale]/projects/[slug]/demo/` or via dynamic `DemoViewer` components.

---

## 6. Security & Secret Handling Rules
- **NEVER EXPOSE SECRETS:** Service role keys, private database passwords, or personal API keys must NEVER be committed to Git or referenced in client-side code (`NEXT_PUBLIC_`).
- All user input (especially contact messages) must be sanitized against XSS and validated with schemas (e.g., Zod).
- CSP headers, framing options, and CORS must be configured properly in Next.js middleware and headers.
- Before any command that could cause data loss or table truncation: **STOP AND VERIFY**.

---

## 7. Quality Assurance & Verification Rules
- Code is NOT complete until:
  - TypeScript compilation passes (`pnpm tsc --noEmit` or `pnpm build`).
  - ESLint passes without errors.
  - Visual layout verified across screen widths (Mobile <= 640px, Tablet <= 1024px, Desktop >= 1280px).
  - Both LTR (English) and RTL (Arabic) display cleanly without horizontal scrollbar overflow.
  - Both Dark and Light themes render with WCAG AA compliant contrast ratios.

---

## 8. Change Management & Governance Files
Keep all governance documents in continuous sync:
- `PROGRESS.md`: Live task state and metrics.
- `TASKS.md`: Task status (`BACKLOG`, `READY`, `IN_PROGRESS`, `BLOCKED`, `TESTING`, `COMPLETED`).
- `IMPLEMENTATION_LOG.md`: Historical chronological engineering log.
- `CHANGELOG.md`: User-facing versioned release log.
- `docs/34_DECISION_LOG.md`: Architectural decisions and trade-offs.
