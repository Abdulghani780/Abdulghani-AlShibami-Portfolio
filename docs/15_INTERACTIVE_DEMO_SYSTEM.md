# 15 — INTERACTIVE DEMO SYSTEM ARCHITECTURE

**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System  
**Canonical Phase:** Phase 09 (Interactive Demo System & Sandboxes)  
**Updated:** September 18, 2026  

---

## 1. Vision & Core Philosophy
A premier software engineer's work cannot be judged solely by static screenshots. The Interactive Demo System gives visitors hands-on proof of functionality while strictly upholding technical truthfulness.

**The Golden Truthfulness Rule:**
- **NEVER** falsely claim that a Windows desktop application (WinForms, WPF, C# .NET) or native desktop Python executable is executing natively inside the browser.
- When demonstrating desktop software, the platform constructs an **Interactive Web Simulation** that recreates the UI layout, state transitions, and interaction flows using browser technologies and safe mock data.
- The experience must be prominently labeled:
  > **"Interactive Web Simulation"** or **"Web-Based Project Showcase"**
- The disclosure banner must explicitly state:
  > *"This is a browser-based interactive simulation of the project interface. It is not the original native desktop runtime."*

---

## 2. The 6 Canonical Demo Modes

| Mode Identifier | Target Systems | Execution Architecture | User Experience |
| :--- | :--- | :--- | :--- |
| `real_live` | Production Web Apps | Direct navigation via secure external target (`_blank` with `rel="noopener noreferrer"`). | Opens live cloud application in new tab with verified certificate. |
| `embedded` | Embeddable Web Apps | Sandboxed `<iframe>` with strict permissions (`allow-scripts allow-same-origin`). | In-page live experience within framed container. |
| `interactive_simulation` | C# WinForms, WPF, Python Desktop, CLI tools | Bespoke React sandbox replicating desktop window chrome, menus, data grids, forms, dialogs, and simulated backend operations. | Full interactivity with realistic mock datasets, zero browser security breaches. |
| `video` | Hardware integrations, deep ML runs | HTML5 responsive video player with chapter markers and transcript. | Video walkthrough of real system in production. |
| `repo` | Libraries, SDKs, CLI utilities | Interactive code walkthrough with GitHub API file viewer and command snippets. | Direct source inspection. |
| `none` | Pure research, theoretical work | Architectural diagrams and case study content. | Deep technical documentation. |

---

## 3. Architecture & Registry Implementation

The demo system is organized under a modular architecture:
```text
demos/
├── registry/
│   └── index.ts                 // Strongly typed DEMO_REGISTRY mapping 5 verified slugs -> DemoDefinition
├── shared/
│   ├── DemoShell.tsx            // Desktop window chrome (title bar, buttons, fullscreen, reset)
│   ├── DemoDisclosure.tsx       // Honest technical integrity disclosure banner
│   ├── DemoToolbar.tsx          // Action bar and navigation breadcrumbs
│   └── DemoStatusBar.tsx        // Telemetry metrics and engine status
└── simulations/
    ├── CafenaSimulation.tsx          // Artisanal coffee e-commerce, search, and cart
    ├── CampusITTrackerSimulation.tsx // ITIL Kanban, campus room map, and custody transfer
    ├── GpSimulation.tsx              // Academic proposal submission and moderation queue
    ├── MetaAlgorithmLabSimulation.tsx // In-browser sorting visualizer and Big-O regression
    └── NovaTechSimulation.tsx        // Cyber gadgets storefront, deal timer, and digital invoice
```

### Active Registered Slugs:
1. `campus-it-tracker`: `interactive_simulation` (Campus IT Tracker)
2. `metaalgorithm-lab`: `interactive_simulation` (MetaAlgorithm Lab)
3. `novatech`: `interactive_simulation` (NOVA TECH Cyber Gadgets)
4. `cafena`: `interactive_simulation` (Cafena Specialty Coffee)
5. `gp`: `interactive_simulation` (Graduation Project Portal)

---

## 4. `DemoViewer` Coordinator Component

`components/features/demos/DemoViewer.tsx` dynamically evaluates the project's canonical `demoType`:
1. **Simulation:** Renders `DemoShell` + `DemoDisclosure` + registered simulation view.
2. **Real Live:** Renders verified launch card with security attributes.
3. **Embedded:** Renders sandboxed iframe with X-Frame-Options fallback detection.
4. **Repo:** Renders GitHub clone snippet card and direct repository link.
5. **None:** Renders architectural monograph information and return link.

---

## 5. Dynamic Demo Route

- **Path:** `app/[locale]/projects/[slug]/demo/page.tsx`
- **Prerendering:** `generateStaticParams()` dynamically prerenders all active demo routes across English and Arabic (`/en/projects/[slug]/demo` and `/ar/projects/[slug]/demo`).
- **Memory Isolation:** State is confined to the simulation React tree; unmounting cleanly releases browser memory and event listeners.
