# ARCHITECTURE_DECISION_RECORD.md — MASTER ADR

**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Platform  
**Owner:** عبدالغني الشبامي | Abdulghani Al-Shibami  
**Standard:** Enterprise Architectural Governance  
**Status:** APPROVED & ACTIVE  

---

## ADR-001: Canonical Frontend Architecture Selection

### Context
In prior sessions, two competing frontend paradigms coexisted:
- **Paradigm A (Commit `2969e9d`):** Used `components/canonical/` (`CanonicalHero`, `CanonicalProjectsBento`, `CanonicalDesktopSimulator`, `CanonicalFooter`) providing a high-tech command center interface.
- **Paradigm B (Working Tree):** Created `components/features/home/` providing a 10-section comprehensive narrative matching the visual reference `new_design.png` (`Hero`, `About`, `AI Lab`, `Featured Projects`, `Case Study`, `Technical Arsenal`, `Methodology`, `Education & Certifications`, `GitHub Activity`, `Contact CTA`).

### Decision
Adopt **Paradigm B's 10-Section Modular Homepage Architecture** as the single canonical frontend, but remediate its data flaws:
1. Purge all hardcoded mentions of non-canonical projects (`Yusra` and `Nexora Tech`).
2. Replace the `YusraCaseStudySection` with an authentic case study spotlight on **`Campus IT Infrastructure Tracker`** (or link to canonical project case studies).
3. Connect all featured project cards directly to the verified canonical project dataset in `lib/data/projectsData.ts` via `lib/services/projectRepository.ts`.
4. Formally retire `components/canonical/` by archiving it to `docs/archive/legacy-canonical/`.

### Consequences
- Eliminates split-brain architecture.
- Preserves the visual design work of `new_design.png` while strictly adhering to domain truth.
- Zero 404 links on the homepage.

---

## ADR-002: Component Boundaries and Server-First Discipline

### Context
Multiple components in `components/features/home/` were marked `"use client"` despite rendering purely static markup, increasing initial JavaScript bundle size.

### Decision
1. **Server Components by Default:** Page roots (`page.tsx`) and static marketing/narrative sections (`AboutSection`, `TechnicalArsenalSection`, `AbdulghaniMethodSection`, `EducationCertificationsSection`) must be React Server Components.
2. **Client Components Only When Interactivity is Required:**
   - `"use client"` is reserved for stateful components: `ThemeToggle`, `LanguageSwitcher`, `ContactForm`, `AbdulghaniAIModal`, `CertificateModal`, and interactive simulation engines (`demos/simulations/*`).
3. **Component Colocation:**
   - Universal primitives stay in `components/ui/`.
   - Global layout structures stay in `components/layout/`.
   - Domain-specific logic lives under `components/features/<domain>/`.

---

## ADR-003: Project Catalog Truth and Data Ownership

### Context
Contradictory project catalogs previously appeared in different branches and documentation files. The owner has exactly 5 verified source repositories in `Projects/`.

### Decision
1. **Single Source of Truth:** `lib/data/projectsData.ts` is the sole data source for projects, wrapped by `lib/services/projectRepository.ts`.
2. **Approved Project Whitelist:**
   - `campus-it-tracker`
   - `metaalgorithm-lab`
   - `novatech`
   - `cafena`
   - `gp`
3. **Explicit Exclusion:** `Yusra`, `AuraLedger`, and `Nexora` must never be registered in the project catalog.
4. **Verification Tagging:** All projects carry `verificationStatus: 'VERIFIED_OWNER_DATA'`. Any speculative metrics are replaced with `[يُستكمل]`.

---

## ADR-004: Interactive Demo Sandboxing and Simulation Engine

### Context
Demonstrating desktop C# WinForms, Oracle, and Python algorithms inside a web portfolio cannot be achieved through native execution or raw iframes without security issues or misleading visitors.

### Decision
1. **Six Canonical Demo Types:** Real Live Demo, Embedded Demo, Interactive Simulation, Video Demo, Repository Walkthrough, No Demo.
2. **Authentic Browser Simulation:** For desktop and complex backend projects (`Campus IT Tracker`, `MetaAlgorithm Lab`, `Graduation Project Portal`), authentic high-fidelity React simulations reproducing actual application logic, database records, and workflows run completely sandboxed in the client browser.
3. **Zero False Claims:** Every simulation component displays an explicit disclaimer clarifying that it is an authentic browser-based reproduction of the desktop/fullstack architecture.

---

## ADR-005: Theme System and Color Token Harmonization

### Context
The color tokens in `app/globals.css` were conflicted, with `--gold-primary` set to `#6366F1` (Electric Indigo) and `--gold-secondary` set to `#06B6D4` (Cyan). Furthermore, Light Mode suffered from hardcoded dark background classes.

### Decision
1. **Primary Palette:**
   - Titanium Slate (`#0B1120`, `#0F172A`, `#1E293B`) as the base dark surface.
   - Electric Indigo (`#6366F1`) and Cyan (`#06B6D4`) as active technical accents.
   - Royal Gold (`#D4AF37`) as luxury signature accent.
   - Porcelain Light Surfaces (`#FAF9F6`, `#FFFFFF`) for genuine, high-contrast Light Mode.
2. **CSS Variables as Ground Truth:** All components must reference semantic variables (`var(--canvas-bg)`, `var(--surface-card)`, `var(--text-primary)`) rather than hardcoded Hex codes like `bg-[#0B0B0C]`.

---

## ADR-006: Supabase Data Access and Offline Resilience

### Context
The cloud database currently has 8 tables with 0 rows (unseeded). Visitors or automated builds might experience downtime if Supabase is offline or credentials are not yet populated.

### Decision
1. **Decoupled DAL:** All database queries are abstracted inside `lib/services/` or `lib/dal/`.
2. **Zero-Failure Local Fallback:** When Supabase environment variables are missing, invalid, or return empty sets, the DAL seamlessly and transparently falls back to typed local mock data from `lib/data/projectsData.ts`.
3. **Public Read-Only Security:** Supabase RLS is configured for anonymous read access on public tables (`projects`, `certificates`), while write operations (contact form submissions) are protected and sanitized.

---

## ADR-007: AI Assistant Grounding and Server Security

### Context
An AI assistant endpoint (`/api/ai/chat`) provides visitors with an interactive guide to Abdulghani's engineering background.

### Decision
1. **Server-Side API Key Protection:** `GEMINI_API_KEY` is strictly held server-side. No `NEXT_PUBLIC_` exposure.
2. **Deterministic Offline Fallback:** If `GEMINI_API_KEY` is not provided in `.env.local`, the chat route returns an intelligent, grounded response from a local deterministic knowledge base rather than throwing an error.
3. **Strict Grounding:** The assistant's system prompt restricts its knowledge domain strictly to verified facts regarding Abdulghani Al-Shibami (Bachelor of IT, UMS, Sana'a, 5 verified projects).

---

## ADR-008: Archive and Quarantine Policy

### Context
Historical work, abandoned redesign files, 0-byte corruptions, and temporary agent artifacts previously cluttered the source tree.

### Decision
1. **Quarantine Directory:** All corrupted or unverified temporary files are moved to `docs/archive/quarantine/`.
2. **Legacy Canonical Code:** Historical implementations from previous milestones are stored under `docs/archive/legacy-canonical/`.
3. **No Dangling Index:** No obsolete or temporary files may exist in the active compilation paths (`app/`, `components/`, `lib/`, `demos/`).
