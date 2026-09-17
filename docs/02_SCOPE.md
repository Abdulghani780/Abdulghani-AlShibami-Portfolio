# 02 — SCOPE SPECIFICATION

**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System  

---

## 1. In-Scope (Phase 01 - Phase 19 Deliverables)

1. **Core Platform:**
   - Next.js App Router bilingual application (English / Arabic).
   - Bespoke Dark & Light mode theme engine with Obsidian Black, Royal Gold, and White palette.
   - Fully responsive layout spanning mobile (375px), tablet (768px), and desktop (1440px+).

2. **Sections & Experiences:**
   - **Hero Section:** Profile photo asset placeholder, identity, titles, primary CTAs, social links.
   - **About Me:** Professional bio, philosophy, core technical pillars.
   - **Skills & Stack Matrix:** Categorized technical proficiency (Frontend, Backend, Systems, AI/ML, Databases, DevOps).
   - **Project Showcase:** Filterable gallery by category, search input, status indicators, and tech badges.
   - **Project Detail Case Studies (`/projects/[slug]`):** Problem, Solution, Architecture, Challenges, Results, Metrics.
   - **Interactive Demo System (`/projects/[slug]/demo`):** Reusable `DemoViewer` supporting Real Live, Embedded, Video, and Interactive Web Simulations of desktop software.
   - **Academic & Experience:** Education, university degrees, coursework, certifications, and verified achievements.
   - **Resume / CV Presentation:** In-browser summary with PDF download capability.
   - **Secure Contact System:** Client/server validated form with honeypot spam protection.

3. **Engineering Infrastructure:**
   - PostgreSQL schema and migrations via Supabase with RLS.
   - Resilient Data Access Layer (DAL) supporting online Supabase and offline local fallback data.
   - Automated GitHub Actions CI workflow (lint, typecheck, build, test).
   - Vercel production deployment configuration.
   - Comprehensive 37-file documentation suite under `docs/`.

---

## 2. Out-of-Scope (Deferred to Phase 20 / Future Expansion)

1. Dynamic multi-user blog engine with commenting system (architecture supports adding `/blog` later).
2. Direct native in-browser execution of x86/ARM compiled C# Windows binaries or Python Tkinter executables (strictly handled via high-fidelity "Interactive Web Simulations").
3. Public user account registration (visitors have read-only access).
4. Full payment gateway integration or e-commerce capabilities.
