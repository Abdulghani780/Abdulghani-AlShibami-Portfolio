# Demo Coverage Matrix

**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System  
**Document:** Canonical Interactive Demo Tracker & Coverage Status  
**Updated:** September 18, 2026 (Real Project Demo Implementation Phase)  
**Catalog Status:** Exactly 5 Verified Projects (5/5 Interactive Simulations Implemented)  
**Traceability Reference:** [`docs/REAL_PROJECT_DEMO_TRACEABILITY.md`](file:///c:/my%20projects/Portifilo/docs/REAL_PROJECT_DEMO_TRACEABILITY.md)  

---

## 1. Matrix Overview

The Interactive Demo System provides hands-on proof of system architecture without misleading visitors.  
Every verified project is implemented as an authentic **Interactive Simulation** running client-side with safe demonstration data and an explicit Technical Integrity Disclosure.

---

## 2. Harmonized Demo Coverage Table (5 Verified Projects)

| Project | Slug | Platform | Technology | Demo Type | Registry Status | Demo Implementation Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Campus IT Infrastructure Tracker** | `campus-it-tracker` | Windows Desktop | C# .NET 4.8, WinForms, Oracle 10g | `interactive_simulation` | **ACTIVE** | **VERIFIED & IMPLEMENTED** (`CampusITTrackerSimulation.tsx` — ITIL Kanban, campus room map, asset table, custody transfer) |
| **MetaAlgorithm Lab** | `metaalgorithm-lab` | Python Desktop / CLI | Python 3.10+, PyQt6, SciPy, Matplotlib | `interactive_simulation` | **ACTIVE** | **VERIFIED & IMPLEMENTED** (`MetaAlgorithmLabSimulation.tsx` — Sorting visualizer, HeapSort, Big-O regression matrix, LaTeX report modal) |
| **NOVA TECH Cyber Gadgets Store** | `novatech` | Web Application | HTML5, CSS3, ES6 JS, Fonts | `interactive_simulation` | **ACTIVE** | **VERIFIED & IMPLEMENTED** (`NovaTechSimulation.tsx` — 24h deal timer, quick view specs, 15% VAT cart drawer, digital invoice generator) |
| **Cafena Specialty Coffee** | `cafena` | Web Application | HTML5, CSS3, ES6 JS, Arabic RTL | `interactive_simulation` | **ACTIVE** | **VERIFIED & IMPLEMENTED** (`CafenaSimulation.tsx` — Coffee menu, live query search, offcanvas cart with SAR calculations, reservation form) |
| **Graduation Project Proposals Portal** | `gp` | Web Application | PHP 8, MySQL 8, HTML5, CSS3, JS | `interactive_simulation` | **ACTIVE** | **VERIFIED & IMPLEMENTED** (`GpSimulation.tsx` — Student proposal submitter, faculty admin moderation queue, approved project directory) |

---

## 3. Removed Projects (Zero Lingering References)

| Project | Slug | Status |
| :--- | :--- | :--- |
| **Yusra Enterprise Resource Ledger** | `yusra` | Removed permanently from catalog, demo registry, and routes. Simulation file deleted. Returns 404. |
| **AuraLedger Distributed Consensus** | `auraledger` | Removed permanently (unverified conceptual prototype). Simulation file deleted. Returns 404. |
| **Nexora Tech Platform** | `nexora-tech` | Replaced completely by authentic `novatech` project. |

---

## 4. Implemented Simulation Architecture Details

### 1. Campus IT Tracker — ITIL & Asset Simulation (`CampusITTrackerSimulation.tsx`)
- **Key Modules:**
  1. Overview Dashboard: High-level KPI cards and server rack uptime metrics.
  2. Campus Room Map: Graphical floorplan of Lab 302, Server Room, and Admin Hall with device inspection.
  3. ITIL Service Desk Kanban: Multi-column incident lifecycle (New, Triaged, In Progress, Resolved).
  4. Hardware Inventory: Filterable table of Dell workstations, Cisco switches, and HP printers with live search.
  5. Custody Transfer Form: Simulated employee hardware sign-off and database audit logging.

### 2. MetaAlgorithm Lab — Scientific Visualizer & Big-O Benchmark (`MetaAlgorithmLabSimulation.tsx`)
- **Key Modules:**
  1. Interactive Sorting Visualizer: Step-by-step bar chart animation for QuickSort, HeapSort, InsertionSort, and BubbleSort.
  2. Execution Metrics: Real-time comparisons, swaps, and step counters.
  3. Asymptotic Scaling Matrix: Empirical scaling table across input sizes ($N=16$ to $N=512$) with $R^2 = 0.9942$ confidence.
  4. LaTeX Report Preview: Publication-ready mathematical excerpt modal.

### 3. NOVA TECH — Cybernetic Storefront Simulator (`NovaTechSimulation.tsx`)
- **Key Modules:**
  1. Dynamic Catalog: Audio & ANC, Wearables, Gaming, Drones & Smart Home with authentic product data.
  2. Deal of the Day: Live 24-hour countdown clock with instant deal claim discount.
  3. Quick View Specs Dialog: Detailed technical specifications modal.
  4. Offcanvas Cart Drawer: Free shipping threshold progress bar (500 SAR) and live 15% VAT calculation.
  5. Checkout Simulator: Formatted digital order invoice generator (`NOV-XXXXXX`).

### 4. Cafena — Specialty Coffee Experience Sandbox (`CafenaSimulation.tsx`)
- **Key Modules:**
  1. Artisanal Menu: Hot brews, cold brews, specialty Harazi beans, and French pastries.
  2. Live Search Overlay: Instant query matching for coffee varieties.
  3. Offcanvas Cart Drawer: Add/remove items, quantity steppers, subtotal, and 15% VAT calculation in SAR.
  4. Table Reservation Form: Modal submission with feedback toast.
  5. Order Receipt Preview: Simulated order receipt generator (`CAF-XXXXXX`).

### 5. Graduation Project Portal — Academic Proposals & Review System (`GpSimulation.tsx`)
- **Key Modules:**
  1. Dual-Role Persona Switcher: Instant toggle between Student and Faculty Admin personas.
  2. Student Proposal Submissions: Form for title, academic track, supervisor, team, and abstract.
  3. Faculty Moderation Desk: Admin queue with Approve and Request Revision action buttons.
  4. Approved Project Directory: Filterable catalog across AI, IoT, Web, and Mobile Apps.
