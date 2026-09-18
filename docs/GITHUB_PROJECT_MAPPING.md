# GitHub Project Mapping & Architecture Design

**Standard:** Multi-Repository Organization & GitHub Portfolio Mapping Architecture  
**Auditor:** Autonomous Senior Software Engineering Agent  
**Date:** 2026-09-18  
**Execution Status:** DESIGN & SPECIFICATION ONLY — NO REPOSITORIES CREATED OR PUSHED  

---

## 1. Multi-Repository Architecture Overview

To ensure professional presentation, clean isolation of concerns, and robust version control:
- **The Portfolio Repository (`Abdulghani-AlShibami-Portfolio`) remains completely autonomous.** It contains only the Next.js portfolio application, interactive simulation engines, documentation, migrations, and CI/CD pipelines.
- **Each authentic project lives in its own independent repository** with its own license, documentation, and commit history.
- **Original source code is NEVER dumped as a subfolder inside the portfolio repository.** The portfolio links to these projects using clean GitHub external links (`github.com/Abdulghani-AlShibami/<repo>`).

### Target GitHub Repository Hierarchy

```text
GitHub (@Abdulghani-AlShibami)
│
├── Abdulghani-AlShibami-Portfolio
│   └── Next.js 14+ / TypeScript / Tailwind / Supabase / Vercel
│
├── Cafena
│   └── Luxury Arabic Specialty Coffee E-Commerce Web Platform
│
├── Campus-IT-Tracker
│   └── Enterprise IT Infrastructure & ITIL Asset Management System (C# WinForms / Oracle)
│
├── Graduation-Project-Portal (Gp)
│   └── University Academic Project Proposal & Moderation Platform (PHP 8 / MySQL)
│
├── MetaAlgorithmLab
│   └── Autonomous Algorithm Performance & Empirical Complexity Analyzer (Python 3.10+ / PyQt6)
│
└── NovaTech
    └── Futuristic Smart Gadgets & Cyber Equipment Web Store (HTML5 / CSS3 / ES6 JS)
```

---

## 2. Project-by-Project Repository Specification

---

### 1. Portfolio Application
- **Recommended Repository Name:** `Abdulghani-AlShibami-Portfolio`
- **Visibility:** **Public**
- **Description:** "Autonomous personal portfolio and interactive engineering showcase of Abdulghani Al-Shibami — Computer Systems, AI Solutions & Fullstack Engineering."
- **Primary Tech Stack:** Next.js (App Router), React, TypeScript, Tailwind CSS, Supabase, Vercel.
- **Portfolio Link Type:** Self (Root host).

---

### 2. Cafena
- **Recommended Repository Name:** `Cafena-Coffee-Platform` (or `Cafena`)
- **Visibility:** **Public**
- **Reason:** Clean, elegant demonstration of pure vanilla web engineering, Arabic RTL layout mastery, and client-side e-commerce state management without external framework overhead.
- **Pre-Publish Preparation Requirements:**
  - Create a professional `README.md` with project screenshots, architectural overview, and live demo link.
  - Verify all image assets in `images/` have proper licensing or open-source attribution.
  - Add standard MIT License.
- **Portfolio Link Type:** `SOURCE_REPOSITORY` (linking from `/projects/cafena` to `https://github.com/Abdulghani-AlShibami/Cafena-Coffee-Platform`).

---

### 3. Campus IT Tracker
- **Recommended Repository Name:** `Campus-IT-Tracker`
- **Visibility:** **Public**
- **Reason:** Outstanding demonstration of enterprise desktop engineering in C# .NET, Oracle database integration, complex custom UI controls (Kanban boards, visual campus mapping), and ITIL service management workflows.
- **Pre-Publish Preparation Requirements:**
  - **CRITICAL SANITIZATION:** Remove local Oracle database connection strings containing developer usernames/passwords from `App.config`.
  - Provide `App.config.example` with placeholder credentials.
  - Ensure `.gitignore` ignores Visual Studio build artifacts (`bin/`, `obj/`, `.vs/`, `*.user`).
  - Create an enterprise-grade `README.md` detailing architecture, Oracle DDL setup, and offline fallback mode.
- **Portfolio Link Type:** `SOURCE_REPOSITORY` (linking from `/projects/campus-it-tracker` to `https://github.com/Abdulghani-AlShibami/Campus-IT-Tracker`).

---

### 4. Graduation Project Portal (Gp)
- **Recommended Repository Name:** `Graduation-Project-Management-Portal` (or `Academic-GP-Portal`)
- **Visibility:** **Public** (or **Private** pending owner institutional clearance)
- **Reason:** Demonstrates relational database design, role-based access control (RBAC), and fullstack PHP/MySQL development for university academic environments.
- **Pre-Publish Preparation Requirements:**
  - **CRITICAL SANITIZATION:** Verify `config.php` credentials are fully abstracted. Add `config.php` to `.gitignore`.
  - Provide `config.example.php` for database setup.
  - Ensure any real student names, emails, or grading records in `database_setup.sql` are scrubbed or replaced with realistic synthetic seed data.
  - Verify with university guidelines whether graduation platform source code can be published publicly.
- **Portfolio Link Type:** `SOURCE_REPOSITORY` (or `DOCUMENTED_CASE_STUDY` if private).

---

### 5. MetaAlgorithmLab
- **Recommended Repository Name:** `MetaAlgorithmLab`
- **Visibility:** **Public**
- **Reason:** Flagship academic and systems engineering showcase. Demonstrates advanced algorithmic understanding, statistical curve fitting with SciPy, mathematical modeling, and production-grade Python/PyQt6 GUI engineering.
- **Pre-Publish Preparation Requirements:**
  - Verify `.env` is omitted via `.gitignore` (existing `.env.example` is already clean).
  - Verify `requirements.txt` and `Dockerfile` allow one-click reproducibility.
  - Include benchmark comparison charts and sample LaTeX/PDF exports in the repository `docs/` or `assets/` folder.
- **Portfolio Link Type:** `SOURCE_REPOSITORY` (linking from `/projects/metaalgorithm-lab` to `https://github.com/Abdulghani-AlShibami/MetaAlgorithmLab`).

---

### 6. NovaTech
- **Recommended Repository Name:** `NovaTech-Gadgets-Store` (or `NovaTech`)
- **Visibility:** **Public**
- **Reason:** Showcases high-conversion modern web design, dual-theming (dark/light), interactive offcanvas cart, VAT calculations, and modern e-commerce UX.
- **Pre-Publish Preparation Requirements:**
  - Create an attractive `README.md` with GIFs and screenshots.
  - Add MIT License.
- **Portfolio Link Type:** `SOURCE_REPOSITORY` (linking from `/projects/novatech` to `https://github.com/Abdulghani-AlShibami/NovaTech-Gadgets-Store`).

---

## 3. GitHub Organization & Deployment Workflow

```text
Local Workstation
│
├── C:\my projects\Portifilo                     → git push origin main → Vercel (Production Portfolio)
│
├── C:\my projects\Portifilo\Projects\Cafena       → (Future) git remote add origin → GitHub/Cafena
├── C:\my projects\Portifilo\Projects\Campuse_IT_Tracker → (Future) git remote add origin → GitHub/Campus-IT-Tracker
├── C:\my projects\Portifilo\Projects\Gp          → (Future) git remote add origin → GitHub/Academic-GP-Portal
├── C:\my projects\Portifilo\Projects\MetaAlgorithmLab_Clean_Structure → (Future) git remote add origin → GitHub/MetaAlgorithmLab
└── C:\my projects\Portifilo\Projects\NovaTech    → (Future) git remote add origin → GitHub/NovaTech-Gadgets-Store
```

> [!NOTE]
> During this audit phase, **NO Git repositories were created, initialized, or pushed**. All remote repository creation and pushing will occur strictly upon explicit user instruction during the deployment phase.
