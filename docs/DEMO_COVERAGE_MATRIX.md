# DEMO COVERAGE MATRIX

**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System  
**Document:** Canonical Interactive Demo Tracker  
**Updated:** September 18, 2026  

---

## 1. Matrix Overview

The Interactive Demo System provides hands-on proof of system architecture without misleading visitors.  
Every project is mapped to an appropriate canonical demo mode.

### Canonical Demo Modes
- `real_live`: Production web URL (verified only)
- `embedded`: Sandboxed iframe container
- `interactive_simulation`: In-browser high-fidelity recreation of desktop/backend systems with safe mock data and prominent technical disclosure
- `video`: Video walkthrough
- `repo`: GitHub repository inspector & code walkthrough
- `none`: Architectural whitepaper / deep case study only

---

## 2. Canonical Demo Coverage Table

| PROJECT | CATEGORY | TECHNOLOGY | DEMO TYPE | VERIFIED? | IMPLEMENTED? | REMAINING? |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Yusra Enterprise Resource Ledger** (`yusra`) | Desktop & Enterprise Systems | C# .NET WinForms, SQL Server, Local ACID Cache | `interactive_simulation` | **VERIFIED_OWNER_DATA** | Yes (Phase 09) | None (Full in-browser simulation) |
| **Campus IT Infrastructure Tracker** (`campus-it-tracker`) | Network & Cloud Infrastructure | Python, C#, SQLite / PostgreSQL, Topology Engine | `interactive_simulation` | **VERIFIED_OWNER_DATA** | Yes (Phase 09) | None (Full in-browser topology monitor) |
| **MetaAlgorithm Lab** (`metaalgorithm-lab`) | Algorithmic Computing & Performance | C++, Python, Data Structures, Complexity Analysis | `interactive_simulation` | **VERIFIED_OWNER_DATA** | Yes (Phase 09) | None (In-browser benchmark runner) |
| **Nexora Tech Platform** (`nexora-tech`) | Distributed Web Applications | Next.js, TypeScript, Tailwind CSS, REST APIs | `interactive_simulation` | **VERIFIED_OWNER_DATA** | Yes (Phase 09) | Verified production live URL pending owner input |
| **AuraLedger Distributed Consensus** (`auraledger`) | Distributed Systems & Protocols | C# .NET 9, Raft, gRPC, TLA+ Specs | `interactive_simulation` | **UNVERIFIED_AI_GENERATED_CONTENT** (Prototype Sandbox) | Yes (Refactored) | None (Explicit sandbox disclosure) |

---

## 3. Demo Implementation Strategy

### YUSRA — Interactive Desktop Simulation
- **Architecture:** Simulates a Windows Desktop WinForms application inside the browser using bespoke Obsidian/Slate UI chrome.
- **Simulated Workflows:**
  1. Chart of Accounts & General Ledger navigation.
  2. Double-entry transaction journal recording (enforcing debit == credit equality).
  3. Interactive Customer Invoice generator with mock PDF/Print preview.
  4. Local SQLite / SQL Server commit logging simulation.
- **Disclosure:** *"This is a browser-based interactive simulation of the project interface. It is not the original native desktop runtime."*

### Campus IT Tracker — Topology & Incident Simulation
- **Architecture:** Simulates network operations center (NOC) topology view with dynamic node pings and live ticket generation.
- **Simulated Workflows:**
  1. Campus node tree inspection (Core Switch, Firewalls, Lab APs).
  2. Live ping telemetry simulator (Normal / Degraded / Outage).
  3. Incident ticket creation and resolution pipeline.

### MetaAlgorithm Lab — In-Browser Benchmark Runner
- **Architecture:** Real client-side JavaScript/TypeScript algorithm visualizer and performance timer.
- **Interactive Workflows:**
  1. QuickSort vs MergeSort vs HeapSort execution on configurable array sizes.
  2. Real-time step-by-step visual animation with comparisons and array swaps.
  3. Complexity chart rendering ($O(n \log n)$ vs $O(n^2)$).

### AuraLedger — Raft Distributed Consensus Sandbox
- **Architecture:** 5-node distributed state machine simulator with Raft leader election, chaos network partitions, and vectorized write-ahead log visualization.
