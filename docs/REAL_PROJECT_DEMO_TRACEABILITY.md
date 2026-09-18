# Real Project Demo Traceability Matrix

**Standard:** Engineering Source-to-Demo Verification & Architectural Traceability  
**Auditor:** Autonomous Senior Software Engineering Agent  
**Date:** 2026-09-18  
**Portfolio Workspace:** `C:\my projects\Portifilo`  
**Status:** COMPLETE — ALL 5 VERIFIED DEMOS IMPLEMENTED & AUDITED  

---

## 1. Overview & Purpose

This document provides definitive traceability for each interactive demonstration implemented in the Abdulghani Al-Shibami Portfolio system. Every screen, interactive workflow, and data structure in the browser demos is strictly mapped to authentic source evidence located in the authoritative read-only source directories (`C:\my projects\Portifilo\Projects\`).

---

## 2. Project Traceability Matrices

---

### Project 1: Cafena (Artisanal Specialty Coffee Roastery)

| Attribute | Verified Evidence & Implementation Details |
|---|---|
| **Project Name** | Cafena (مقهى القهوة الذهبية) |
| **Source Folder** | `Projects/Cafena/` |
| **Source Evidence** | `index.html` (lines 48–110, 200–350), `css/style.css`, `java script/script.js` |
| **Implemented Demo Screen** | `demos/simulations/CafenaSimulation.tsx` |
| **Implemented Workflows** | 1. Specialty coffee catalog browsing (Single Origin Espresso, Artisanal Cappuccino, Spanish Caramel Latte, V60 Pour Over, Cold Brew Reserve, Micro-Lot Beans, Almond Croissant)<br>2. Real-time category filtering (All, Hot Brews, Cold Brews, Beans, Bakery)<br>3. Instant query search overlay<br>4. Offcanvas shopping cart drawer with quantity increment/decrement (+ / -) and item removal<br>5. Real-time arithmetic: Subtotal, 15% VAT, and Final Total in SAR<br>6. Table reservation & contact form with instant validation toast<br>7. Simulated digital order checkout producing formatted receipt `CAF-XXXXXX` |
| **Mocked Elements** | Payment gateway transactions; courier dispatch tracking; live database user sessions. |
| **Not Reproduced** | Native bank payment processor; commercial warehouse stock reconciliation. |
| **Reason** | The original source project is a client-side Vanilla HTML5/CSS3/ES6 web application with no production backend or live bank API integration. |
| **Technical Disclosure** | "This interactive showcase demonstrates the verified client-side web application of Cafena. All cart calculations, search indexing, and order receipts run locally in the browser sandbox." |

---

### Project 2: Campus IT Tracker (Campus Network & ITIL Asset System)

| Attribute | Verified Evidence & Implementation Details |
|---|---|
| **Project Name** | Campuse IT Tracker |
| **Source Folder** | `Projects/Campuse_IT_Tracker/` |
| **Source Evidence** | `CampusTracker.sln`, `MainForm.cs`, `CampusRepository.cs`, `TransferService.cs`, `App.config`, Oracle XE DDL scripts |
| **Implemented Demo Screen** | `demos/simulations/CampusITTrackerSimulation.tsx` |
| **Implemented Workflows** | 1. Overview Dashboard: High-level KPI cards (Total Assets, In Service, Active Incidents, Repair Queue), telemetry uptime (99.98%)<br>2. Interactive Campus Map: Visual room floorplans (Computer Lab 302, Server Room Rack A2/B1, Admin Hall Bldg 01) with device inspection<br>3. ITIL Service Desk Kanban: Multi-column incident management (New, Triaged, In Progress, Resolved) with bidirectional stage advance/regress controls<br>4. Hardware Inventory Table: Filterable list of Dell OptiPlex workstations, Cisco Catalyst switches, Dell PowerEdge servers, and HP LaserJet printers with live text search<br>5. Asset Custody Transfer: Equipment reassignment form with faculty selection, employee validation, and digital audit signing |
| **Mocked Elements** | Direct Oracle 10g OCI client sockets; native Windows GDI+ rendering engine. |
| **Not Reproduced** | Native WinForms `.exe` binary process inside the browser; live Oracle database server. |
| **Reason** | The original system is a compiled Windows desktop C# .NET application requiring Windows OS and an Oracle database instance. Replicating the exact business logic and workflows in React ensures 100% web accessibility without making false claims about native execution. |
| **Technical Disclosure** | "This interactive simulation faithfully reproduces the C# .NET WinForms application architecture and Oracle backend workflows. All ITIL ticket lifecycles, campus maps, and custody transfers execute safely client-side." |

---

### Project 3: Gp (Graduation Project Management & Review Portal)

| Attribute | Verified Evidence & Implementation Details |
|---|---|
| **Project Name** | Gp (منصة مشاريع التخرج) |
| **Source Folder** | `Projects/Gp/` |
| **Source Evidence** | `index.php`, `login.php`, `register.php`, `database_setup.sql`, `auth.php`, `portfolio-details.php` |
| **Implemented Demo Screen** | `demos/simulations/GpSimulation.tsx` |
| **Implemented Workflows** | 1. Role-Based View Switcher: Instant toggle between Student (`abdulghani`) and Faculty Admin (`admin`) personas<br>2. Approved Project Directory: Categorized project repository (AI & Data, Systems & IoT, Web & Security, Mobile Apps) with search and abstract inspection modal<br>3. Student Proposal Submission: Interactive proposal form (Title, Academic Track, Supervisor preference, Team members, Abstract)<br>4. Faculty Moderation Desk: Admin queue reviewing pending student submissions with Approve and Request Revision action buttons<br>5. Real-time proposal status synchronization across directory and review queue |
| **Mocked Elements** | Apache HTTP server execution; PHP session file serialization; MySQL daemon connections. |
| **Not Reproduced** | Live PHP 8.x CGI interpreter; native MySQL relational table write operations. |
| **Reason** | Eliminates the operational overhead and security risk of running an unauthenticated public PHP/MySQL microservice on serverless hosting, while delivering instant zero-latency simulation of all academic workflows. |
| **Technical Disclosure** | "This interactive showcase simulates the fullstack PHP 8 & MySQL Graduation Project platform. Role switching, proposal submissions, and faculty review decisions run safely client-side in the browser sandbox." |

---

### Project 4: MetaAlgorithm Lab (Algorithmic Benchmarking Workstation)

| Attribute | Verified Evidence & Implementation Details |
|---|---|
| **Project Name** | MetaAlgorithmLab (مختبر الخوارزميات) |
| **Source Folder** | `Projects/MetaAlgorithmLab_Clean_Structure/` |
| **Source Evidence** | `main.py`, `src/algorithms/sorting/`, `src/core/benchmark.py`, `src/visualization/`, `docs/latex_export.py` |
| **Implemented Demo Screen** | `demos/simulations/MetaAlgorithmLabSimulation.tsx` |
| **Implemented Workflows** | 1. Interactive Sorting Visualizer: Step-by-step bar chart animation for QuickSort, HeapSort, InsertionSort, and BubbleSort<br>2. Real-time metric counters: Comparisons, Swaps, Step index tracker<br>3. Dynamic Input Distribution Generator: Random, Nearly Sorted, Reversed arrays<br>4. Animation controls: Play/Pause, Step-forward, Restart, adjustable execution speed slider (50ms–400ms)<br>5. Asymptotic Regression & Matrix: Empirical scaling table across varying input sizes ($N=16$ to $N=512$) with theoretical Big-O comparisons and $R^2 = 0.9942$ confidence score<br>6. LaTeX Research Report Preview: Publication-ready mathematical excerpt modal with LaTeX complexity equations |
| **Mocked Elements** | PyQt6 Qt event loop; Python C-extension bindings; native matplotlib rendering thread. |
| **Not Reproduced** | Native PyQt6 GUI window; direct CPU instruction pointer tracing. |
| **Reason** | The desktop Python application uses native GUI toolkits and SciPy. Replicating the exact sorting and empirical measurement algorithms in TypeScript provides a responsive, educational, zero-dependency browser workbench. |
| **Technical Disclosure** | "This interactive simulation faithfully reproduces the empirical analysis engine of the Python/PyQt6 MetaAlgorithmLab workstation. Sorting routines, comparisons, and Big-O regressions execute client-side in the browser." |

---

### Project 5: NovaTech (Cybernetic Smart Gadgets E-Commerce)

| Attribute | Verified Evidence & Implementation Details |
|---|---|
| **Project Name** | NovaTech (نوفا تيك) |
| **Source Folder** | `Projects/NovaTech/` |
| **Source Evidence** | `index.html` (lines 38–120, 220–330), `css/style.css`, `java script/script.js` (lines 8–120) |
| **Implemented Demo Screen** | `demos/simulations/NovaTechSimulation.tsx` |
| **Implemented Workflows** | 1. Cyber Hero Showcase & Deal of the Day: Live 24-hour countdown clock with instant deal claim discount<br>2. Dynamic Catalog & Category Filtering: Audio & ANC, Wearables, Gaming & VR, Drones & Smart Home<br>3. Verified Product Portfolio: Nova Pro Max ANC (899 SAR), Nova Ultra Titanium Watch (1,249 SAR), Nova Vision VR X (2,499 SAR), CyberStrike RGB Mouse (349 SAR), SkyMaster 4K Drone (1,899 SAR), CyberDeck Pro Keyboard (599 SAR)<br>4. Quick View Specs Dialog: Detailed technical specification cards with rating badges<br>5. Live Search Filter: Instant query matching across product names and categories<br>6. Offcanvas Shopping Cart Drawer: Quantity adjustments (+ / -), free shipping threshold progress meter (500 SAR), 15% VAT calculation<br>7. Checkout Simulation: Digital order confirmation modal generating formal invoice `NOV-XXXXXX` |
| **Mocked Elements** | Payment gateway transactions; merchant inventory database synchronization; courier tracking. |
| **Not Reproduced** | Production bank card processing; real physical warehouse courier logistics. |
| **Reason** | The original source project is a pure client-side web application built with HTML5, CSS3, and ES6 JavaScript with no production backend. |
| **Technical Disclosure** | "This showcase demonstrates the verified client-side web application of NOVA TECH. All shopping cart computations, free shipping thresholds, 15% VAT, and invoice generation execute locally in your browser." |

---

## 3. Verification & Compliance Sign-Off

- [x] All 5 project demonstrations directly trace back to real source files in `Projects/`.
- [x] Zero mock or unverified projects (`YUSRA`, `AuraLedger`, `Nexora Tech`) remain in the demo registry or simulation codebase.
- [x] Zero external backend or native execution claims are made.
- [x] Technical Integrity Disclosure present on all five simulations in both English and Arabic.
- [x] Responsive layout verified across mobile (393px) and desktop (>1280px) viewports.
- [x] Full Dark Mode and Light Mode support adhering to the Obsidian & Royal Gold design system.
