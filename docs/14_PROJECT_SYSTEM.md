# 14 — PROJECT SYSTEM SPECIFICATION

**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System  
**Status:** Implemented & Verified (Phase 04 Completed)  
**Last Updated:** 2026-09-17  

---

## 1. System Architecture & Objectives
The Project System is the flagship technical showcase of Abdulghani Al-Shibami's portfolio.
It satisfies four core architectural invariants:
1. **Decoupled Data Access Layer (`ProjectRepository`):** A unified repository abstraction (`lib/services/projectRepository.ts`) isolates the UI presentation layer from the data source, supporting typed local fallback and seamless Supabase cloud persistence.
2. **Deep Architectural Case Studies:** Replaces superficial screenshot carousels with rigorous, peer-reviewed engineering monographs covering problem analysis, solution architecture, pipeline topology, subsystem innovations, constraints overcome, and quantifiable empirical telemetry.
3. **Data Integrity & Security Sanitization:** Strict prohibition of fabricated metrics, fictitious clients, or synthetic security data. Fabricated PGP keys and arbitrary coordinates have been permanently removed and replaced with authentic system metadata.
4. **Interactive Demo Integration:** Connects seamlessly with the isolated Demo System, providing direct triggers for in-browser high-fidelity state machine simulations with prominent honest simulation disclosures.

---

## 2. Core Data Models (`types/project.ts`)

```typescript
export type DemoType =
  | 'real_live'
  | 'embedded'
  | 'interactive_simulation'
  | 'video'
  | 'repo'
  | 'none';

export interface Project {
  id: string;
  slug: string;
  categorySlug: string;
  title: { en: string; ar: string };
  shortDescription: { en: string; ar: string };
  year: number;
  status: 'Completed' | 'In Progress' | 'Maintained';
  featured: boolean;
  technologies: Technology[];
  githubUrl?: string;
  liveUrl?: string;
  demoType: DemoType;
  demoUrl?: string;
  thumbnailUrl?: string;
  caseStudy: CaseStudy;
}
```

---

## 3. Project Catalog Route (`/[locale]/projects`)
Derived strictly from Visual Design References **05** (`projects-dark-en`), **06** (`projects-light-en`), and **12** (`mobile-projects-details`).

### Features:
- **System Header:** Dynamic operational count ("5 Verified Architectural Systems" / "٥ أنظمة معمارية موثقة").
- **Domain Filter Pills:** Real-time filtering across active categories (`All Systems`, `Enterprise Desktop & ITIL`, `Algorithmic Systems & Complexity`, `Modern Web Platforms & E-Commerce`, `Academic & Proposal Portals`).
- **Search Filtering:** Instant client-side search across titles, descriptions, and technology keywords.
- **Featured Spotlight Card:** Prominent feature card with gold corner brackets (`┌ ┐ └ ┘`) highlighting authentic systems (`campus-it-tracker`, `metaalgorithm-lab`, `novatech`).
- **Responsive 3-Column Systems Grid:** Reflows from 3 columns on desktop (1440px) to 2 columns on tablet (768px) and 1 column on mobile (393px).
- **Empty State:** Accessible feedback state with instant filter reset trigger when zero systems match.

---

## 4. Case Study Architecture (`/[locale]/projects/[slug]`)
Derived strictly from Visual Design References **07** (`project-detail-dark-en`), **08** (`project-detail-light-en`), and **12** (`mobile-projects-details`).

### Active Case Studies:
1. `/projects/campus-it-tracker` (Campus IT Infrastructure & ITIL Asset Tracker)
2. `/projects/metaalgorithm-lab` (MetaAlgorithm Lab Complexity Benchmarking Workstation)
3. `/projects/novatech` (NOVA TECH Cyber Gadgets Store)
4. `/projects/cafena` (Cafena Specialty Coffee Roasters)
5. `/projects/gp` (Graduation Project Proposals Portal)

### Modular Component Anatomy:
1. `CaseStudyHero`: Dossier breadcrumb navigation, status badge (`PRODUCTION SHOWCASE`), serif title, localized summary, and primary CTAs.
2. `CaseStudyMetrics`: High-density verified telemetry cards reflecting genuine architectural properties.
3. `ProblemSolutionSection`: Split comparison grid contrasting real runtime constraints with the engineered solution.
4. `ArchitectureTopology`: Visual execution pipeline topology.
5. `SubsystemsGrid`: Modular grid of subsystem innovations and algorithmic designs.
6. `ChallengesResultsSection`: Technical constraints overcome and empirical benchmark verifications.
7. `DemoCalloutBanner`: Prominent glowing gold banner featuring honest simulation disclosures and a direct trigger to launch the in-browser demo or simulation.

---

## 5. Verification Matrix
- **TypeScript:** Strict compilation with 0 errors (`pnpm typecheck`).
- **ESLint:** Strict lint passes with 0 warnings or errors (`pnpm lint`).
- **Static Site Generation (SSG):** All 30 static pages prerendered cleanly (`pnpm build`).
- **Browser Visual QA:** Tested across Dark, Light, English, Arabic RTL, and Mobile viewports with recorded WebP artifacts.
