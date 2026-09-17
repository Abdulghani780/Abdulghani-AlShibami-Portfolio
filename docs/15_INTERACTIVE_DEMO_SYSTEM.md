# 15 — INTERACTIVE DEMO SYSTEM ARCHITECTURE

**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System  

---

## 1. Vision & Core Philosophy
A premier software engineer's work cannot be judged solely by static screenshots. The Interactive Demo System gives visitors hands-on proof of functionality while strictly upholding technical truthfulness.

**The Golden Truthfulness Rule:**
- **NEVER** falsely claim that a Windows desktop application (WinForms, WPF, C# .NET) or native desktop Python executable is executing natively inside the browser.
- When demonstrating desktop software, the platform constructs an **Interactive Web Simulation** that recreates the UI layout, state transitions, and interaction flows using browser technologies and isolated mock data.
- The experience must be prominently labeled:
  > **"Interactive Web Simulation"** or **"Web-Based Project Showcase"**

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

## 3. `DemoViewer` Component Architecture

The `DemoViewer` is a unified, scalable coordinator component located at `components/features/demos/DemoViewer.tsx`.

```text
DemoViewer
├── DemoHeader (Title, Mode Badge, Reset State Button, Fullscreen Toggle)
├── DemoBody
│   ├── [If real_live] ────────► ExternalLaunchCard
│   ├── [If embedded] ─────────► SandboxedIframe
│   ├── [If simulation] ───────► DesktopSimulationEngine
│   │                               ├── WindowChrome (Title bar, minimize/maximize/close buttons)
│   │                               ├── NavigationSidebar
│   │                               ├── MainWorkspace (Data grids, filter bars, forms)
│   │                               └── ActionDialogs (Modal simulations)
│   ├── [If video] ────────────► VideoWalkthrough
│   └── [If repo] ─────────────► RepoInspector
└── DemoFooter (Simulation Disclaimer, Tech Badges, Link to Case Study)
```

---

## 4. Routing & Isolation
- **Dedicated Route:** `/projects/[slug]/demo`
- **Isolation Guarantee:**
  - Demo state is encapsulated within the demo component tree.
  - State does not leak into global session stores.
  - Exiting the route completely frees allocated simulated memory.
- **Simulation Registry:** Demos register via a clean configuration object (`demoConfig` in `lib/data/projectsData.ts`), eliminating monolithic switch-case statements.
