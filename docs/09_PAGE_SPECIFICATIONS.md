# 09 — PAGE SPECIFICATIONS (MAPPED TO 12 VISUAL REFERENCES)

**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System  
**Visual Reference Source:** StitchMCP Project `1524242436626085687` (`design-references/`)  
**Status:** Canonical Page Structure Authority  
**Date:** September 17, 2026  

---

## 1. Page: Home (`/[locale]/page.tsx`)
- **Mapped References:**
  - `design-references/01-home-dark-en/` (Desktop Dark English)
  - `design-references/02-home-light-en/` (Desktop Light English)
  - `design-references/03-home-dark-ar/` (Desktop Dark Arabic RTL)
  - `design-references/04-home-light-ar/` (Desktop Light Arabic RTL)
  - `design-references/11-mobile-home/` (Mobile Dual-Theme)
- **Render Mode:** Next.js App Router (RSC parent + Client interactive docks).
- **Core Modules & Layout:**
  1. **Executive Sticky Navbar:**
     - Left (or Right in RTL): Monogram logo + `Abdulghani Al-Shibami // Systems Architect`
     - Center: Navigation links (`Projects`, `Systems Lab`, `Specs`, `Publications`, `About`)
     - Right (or Left in RTL): Language Switcher (`EN | AR`), Theme Toggle (Sun/Moon), and Primary Gold Action (`Resume PDF` / `Contact`).
  2. **Hero Section:**
     - Latin Display: *Playfair Display* 56px (`display-hero`)
     - Arabic Display: *Noto Serif* / *Noto Kufi Arabic*
     - Owner Title: "Architecting Autonomous Intelligence & Mission-Critical Distributed Systems"
     - Introductions: Concise statement balancing systems engineering with mathematical rigor.
     - Profile Container: Clearly designated `[PROFILE_IMAGE]` geometric card (`280x340px` desktop, `200x200px` mobile) with gold coordinate brackets (`LAT: 24.7136° N, LON: 46.6753° E`) and verified architect badge.
     - Action Cluster: Primary Gold Button ("Explore Projects (12)"), Secondary Ghost ("Launch Interactive Lab"), and CV download link.
  3. **Real-Time Systems Telemetry Ribbon:**
     - 4 high-contrast HUD cards: Throughput (`145k tx/s`), Consensus Latency (`0.8ms p99`), Uptime (`99.999% SLA`), and Formal Verification (`100% TLA+ Invariants`).
  4. **Featured Systems Preview:**
     - Top 3 flagship systems (AuraLedger, NeuroScribe, OmniTrader) featuring tech substrate badges, real-time telemetry metrics, and dual action links.
  5. **Core Competencies Grid (4 Modules):**
     - Distributed Systems & Consensus, Autonomous AI & Agent Swarms, Real-Time Low-Latency Computing, Cloud-Native Infrastructure.
  6. **Technical Colophon Footer:**
     - Copyright, system version, PGP public key, GitHub/LinkedIn links, and floating back-to-top button.

---

## 2. Page: Projects Catalog (`/[locale]/projects/page.tsx`)
- **Mapped References:**
  - `design-references/05-projects-dark-en/` (Desktop Dark English)
  - `design-references/06-projects-light-en/` (Desktop Light English)
  - `design-references/12-mobile-projects-details/` (Mobile Dual-Theme Projects)
- **Render Mode:** Server Component parent + Client `ProjectCatalogIsland`.
- **Core Modules & Layout:**
  1. **Catalog Marquee:**
     - Title: "Engineering Works & Autonomous Systems"
     - Subtitle: "Mission-critical distributed state machines, autonomous agent swarms, and low-latency financial infrastructure."
     - Status Ticker: "12 Systems Operational // Full In-Memory State".
  2. **Domain & Protocol Filter Bar:**
     - Horizontal swipeable chips: `[All (12)]`, `[Distributed Consensus (4)]`, `[Autonomous AI (3)]`, `[Low-Latency C# (3)]`, `[Cloud Native Mesh (2)]`.
     - Demo Mode Secondary Filters: `[Real Live Demo]`, `[Interactive Simulation]`, `[Video Showcase]`, `[Code Walkthrough]`.
     - Real-Time Search Input with gold focus halo.
  3. **Projects Grid:**
     - Desktop: Responsive 3-column architectural cards with corner brackets.
     - Tablet: 2-column grid.
     - Mobile: Single-column vertical stack with sticky persistent bottom action dock.
  4. **Project Card Metadata:**
     - Index counter (`// 01. SYSTEMS ARCHITECTURE`), Title, Status Badge (`● PRODUCTION SHOWCASE`), Substrate Tags, Telemetry strip, and Action buttons (`View Case Study`, `Launch Simulation`, `GitHub`).

---

## 3. Page: Project Case Study (`/[locale]/projects/[slug]/page.tsx`)
- **Mapped References:**
  - `design-references/07-project-detail-dark-en/` (Desktop Dark English AuraLedger Dossier)
  - `design-references/08-project-detail-light-en/` (Desktop Light English AuraLedger Dossier)
  - `design-references/12-mobile-projects-details/` (Mobile Case Study Flow)
- **Render Mode:** Dynamic Server Component with static parameter pre-generation and metadata optimization.
- **Core Modules & Layout:**
  1. **Dossier Header & Breadcrumb:**
     - Breadcrumb navigation: `Projects / Systems & Distributed Computing / AuraLedger`.
     - Substrate Tag: `C# .NET 9 Core / Distributed Systems`.
     - Action Buttons: `Launch Interactive Web Simulation` (Primary Gold), `View Source on GitHub`, `Architecture Whitepaper (PDF)`.
  2. **Key Telemetry HUD Cards (4 Cards):**
     - `145,000 tx/s` write throughput, `0.8ms p99` latency, `99.999% SLA`, `RPO=0 / RTO<1.2s`.
  3. **Problem & Solution Split Grid:**
     - 01. The Engineering Bottleneck: Non-deterministic .NET GC pauses (45ms+) causing false heartbeat drops under 60k TPS storms.
     - 02. The Architectural Solution: Pre-allocated off-heap circular ring buffers (`Span<T>`), vectorized WAL engine, zero allocations (`0.00 KB/tx`).
  4. **System Topology & Data Pipeline Schematic:**
     - Visual flow from gRPC client ingestion through LMAX ring buffer, Raft leader, NVMe WAL, and sharded storage with live node state readouts.
  5. **Core Subsystems & Innovations Grid (4 Cards):**
     - Zero-Allocation Log Compaction, Custom Vectorized WAL, Speculative Pre-Vote Quorum, Dual-Protocol RPC (gRPC + IPC).
  6. **Empirical Benchmarks Matrix:**
     - High-fidelity comparison table against Standard Distributed SQL and Traditional Java Paxos.
  7. **Interactive Sandbox Callout Banner:**
     - Dedicated gold-framed invitation card to test partition injections in the browser sandbox.

---

## 4. Page: Interactive Simulation Sandbox (`/[locale]/projects/[slug]/demo/page.tsx`)
- **Mapped References:**
  - `design-references/09-demo-dark-en/` (Desktop Dark English Simulation Sandbox)
  - `design-references/10-demo-light-en/` (Desktop Light English Simulation Sandbox)
- **Render Mode:** High-performance Client Component (`"use client"`).
- **Core Modules & Layout:**
  1. **Top Simulation Disclosure Banner:**
     - Prominent glowing gold badge: `INTERACTIVE WEB SIMULATION`.
     - Disclaimer Pill: *"Sandboxed In-Browser Simulation of C# .NET 9 Core Architecture — High-fidelity state machine reproduction (compiled desktop/server runtime runs out-of-browser)."*
     - Live Engine Heartbeat: Emerald pulsing beacon with core revision `v2.4.9-RELEASE`.
  2. **Sandbox Control & Telemetry Bar:**
     - Link back to dossier, cluster quorum readout (`5/5 Quorum Healthy`, Term `4,891`, Index `1,842,094`).
     - Control Actions: `Inject Chaos Partition`, `Burst 25k TPS`, `Reset State`, `Fullscreen`, `Terminal REPL` toggle.
  3. **3-Column Simulation Workspace:**
     - **Left Control Deck:** Scenario presets (*Steady-State Settlement*, *Leader Partition Split-Brain*, *Cascading Byzantine Drop*, *Trading Storm*), sliders for latency (0-500ms) and packet drop (0-20%), and 5-Node Health Matrix with Kill/Heal triggers.
     - **Central Topology Canvas:** Visual circular Raft cluster with animated RPC packet transit, radiant leader aura, and dynamic re-election triggers.
     - **Right Telemetry Stream:** Real-time SVG throughput sparklines (`124.5k tx/s`), p99 latency curve (`0.82ms`), unmanaged memory gauge, and live Write-Ahead Log feed.
  4. **Bottom Command Terminal / Simulation REPL:**
     - Interactive developer CLI drawer with `aura-cli` prompt demonstrating failover logs and partition recovery in 42.1ms.
