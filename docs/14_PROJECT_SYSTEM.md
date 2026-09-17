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
- **System Header:** Dynamic operational count ("6 Verified Architectural Systems" / "٦ أنظمة معمارية تشغيلية").
- **Domain Filter Pills:** Real-time filtering across active categories (`All Systems`, `Distributed Systems`, `Autonomous AI`, `Low-Latency C#`, `Cloud Native`, `Enterprise Desktop`).
- **Search Filtering:** Instant client-side search across titles, descriptions, and technology keywords.
- **Featured Spotlight Card:** Prominent feature card with gold corner brackets (`┌ ┐ └ ┘`) highlighting flagship architectures (e.g. AuraLedger).
- **Responsive 3-Column Systems Grid:** Reflows from 3 columns on desktop (1440px) to 2 columns on tablet (768px) and 1 column on mobile (393px).
- **Empty State:** Accessible feedback state with instant filter reset trigger when zero systems match.

---

## 4. Case Study Architecture (`/[locale]/projects/[slug]`)
Derived strictly from Visual Design References **07** (`project-detail-dark-en`), **08** (`project-detail-light-en`), and **12** (`mobile-projects-details`).

### Modular Component Anatomy:
1. `CaseStudyHero`: Dossier breadcrumb navigation, status badge (`PRODUCTION SHOWCASE // 2025`), serif title, localized summary, and primary CTAs.
2. `CaseStudyMetrics`: High-density empirical telemetry cards (e.g. `145,000 tx/s`, `0.82 ms p99`, `99.999% SLA`, `0 bytes GC`).
3. `ProblemSolutionSection`: Split comparison grid contrasting runtime constraints with the engineered vectorized solution.
4. `ArchitectureTopology`: Visual execution pipeline (e.g., Ingestion → Ring Buffer → Quorum Consensus → Vectorized WAL).
5. `SubsystemsGrid`: Modular grid of subsystem innovations and low-level algorithmic designs.
6. `ChallengesResultsSection`: Technical runtime constraints overcome (e.g. Gen2 GC elimination) and empirical benchmark verifications.
7. `DemoCalloutBanner`: Prominent glowing gold banner featuring honest simulation disclosures and a direct trigger to launch the in-browser simulation sandbox (`/projects/auraledger/demo`).

---

## 5. Verification Matrix
- **TypeScript:** Strict compilation with 0 errors (`pnpm typecheck`).
- **ESLint:** Strict lint passes with 0 warnings or errors (`pnpm lint`).
- **Static Site Generation (SSG):** All 24 catalog and case study routes prerendered cleanly (`pnpm build`).
- **Browser Visual QA:** Tested across Dark, Light, English, Arabic RTL, and Mobile viewports with recorded WebP and screenshot artifacts.
