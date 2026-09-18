# Demo Coverage Matrix

**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System  
**Document:** Canonical Interactive Demo Tracker  
**Updated:** September 18, 2026 (Updated Phase 10.1 Harmonization)  
**Catalog Status:** Exactly 5 Verified Projects  

---

## 1. Matrix Overview

The Interactive Demo System provides hands-on proof of system architecture without misleading visitors.  
Every verified project is mapped to an appropriate canonical demo mode.

### Canonical Demo Modes
- `real_live`: Production web URL or direct in-browser web application showcase
- `embedded`: Sandboxed iframe container
- `interactive_simulation`: In-browser high-fidelity recreation of desktop/backend systems with safe mock data and prominent technical disclosure
- `video`: Video walkthrough
- `repo`: GitHub repository inspector & code walkthrough
- `none`: Architectural whitepaper / deep case study only

---

## 2. Harmonized Demo Coverage Table (5 Verified Projects)

| Project | Slug | Platform | Technology | Demo Type | Registry Status | Demo Implementation Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Campus IT Infrastructure Tracker** | `campus-it-tracker` | Windows Desktop | C# .NET 4.8, WinForms, Oracle 10g | `interactive_simulation` | **ACTIVE** | Implemented (In-browser topology & ITIL monitor) |
| **MetaAlgorithm Lab** | `metaalgorithm-lab` | Python Desktop / CLI | Python 3.10+, PyQt6, SciPy, Matplotlib | `interactive_simulation` | **ACTIVE** | Implemented (In-browser sorting visualizer & benchmark runner) |
| **NOVA TECH Cyber Gadgets Store** | `novatech` | Web Application | HTML5, CSS3, ES6 JS, Fonts | `real_live` | **ACTIVE** | Registered (Dedicated Demo Phase will implement iframe/route) |
| **Cafena Specialty Coffee** | `cafena` | Web Application | HTML5, CSS3, ES6 JS, Arabic RTL | `real_live` | **ACTIVE** | Registered (Dedicated Demo Phase will implement iframe/route) |
| **Graduation Project Proposals Portal** | `gp` | Web Application | PHP 8, MySQL 8, HTML5, CSS3, JS | `interactive_simulation` | **ACTIVE** | Registered (Dedicated Demo Phase will implement simulation) |

---

## 3. Removed Projects

| Project | Slug | Status |
| :--- | :--- | :--- |
| **Yusra Enterprise Resource Ledger** | `yusra` | Removed from active catalog & demo registry. Legacy route returns 404. |
| **AuraLedger Distributed Consensus** | `auraledger` | Removed permanently (unverified conceptual prototype). |
| **Nexora Tech Platform** | `nexora-tech` | Replaced completely by authentic `novatech` project. |

---

## 4. Demo Implementation Strategy

### 1. Campus IT Tracker — Topology & ITIL Simulation
- **Architecture:** Simulates network operations center (NOC) topology view with dynamic node status and incident dispatching.
- **Simulated Workflows:**
  1. Campus node inspection across core, distribution, and edge layers.
  2. Live ping telemetry simulator.
  3. Incident ticket creation and triage pipeline.

### 2. MetaAlgorithm Lab — In-Browser Benchmark Runner
- **Architecture:** Genuine client-side JavaScript/TypeScript algorithm visualizer and performance timer.
- **Interactive Workflows:**
  1. QuickSort vs MergeSort vs HeapSort execution on configurable array sizes.
  2. Real-time step-by-step visual animation with active pointer comparisons.
  3. Complexity chart rendering ($O(n \log n)$ vs $O(n^2)$).

### 3. NOVA TECH — Web Storefront Showcase
- **Architecture:** Client-side e-commerce showcase featuring offcanvas cart, VAT calculation, and checkout simulation.

### 4. Cafena — Arabic Specialty Coffee Showcase
- **Architecture:** High-speed client-side coffee catalog with in-memory cart calculations and live product search.

### 5. Graduation Project Portal — Academic Proposals Workflow
- **Architecture:** Simulated student proposal submission and committee review queue.
