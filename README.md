# Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System

> **عبدالغني الشبامي | Abdulghani Al-Shibami**  
> Computer Systems Engineer | AI Solutions Architect | Full-Stack Developer  
> Luxury Black & Royal Gold Visual Identity | Bilingual Arabic & English (RTL/LTR) | Production-Grade Platform  
> **Repository:** [https://github.com/Abdulghani780/Abdulghani-AlShibami-Portfolio](https://github.com/Abdulghani780/Abdulghani-AlShibami-Portfolio)

---

## 1. Executive Summary

This repository houses the production-grade personal portfolio, engineering showcase, interactive project demonstration system, and academic/professional identity platform for **Abdulghani Al-Shibami**. 

Engineered from zero to production as a scalable Next.js 15 web platform, it showcases 5 authentic software engineering projects spanning enterprise desktop systems, scientific algorithmic workstations, and modern e-commerce portals.

---

## 2. Platform Architecture & Features

1. **Bespoke Luxury Visual Identity:** Tailored around Deep Obsidian Black (`#0B0B0C`), Royal Gold (`#D4AF37`), and crisp typographical contrast. Supports intentional Dark and Light modes with WCAG AA compliance.
2. **First-Class Internationalization (i18n):** Native bidirectional routing for English (`/en/`, LTR) and Arabic (`/ar/`, RTL) with CSS logical properties preventing layout collapse.
3. **Interactive Simulation Engine:** Dedicated sandbox running client-side simulations of desktop WinForms, Python/PyQt6, and fullstack platforms without native runtime dependencies or external databases.
4. **Resilient Data Access Layer (DAL):** Decoupled service layer reading from Supabase PostgreSQL with automated fallback to localized, typed mock data when credentials are absent.
5. **Zero-Failure Public Surface:** Error boundaries, strict input sanitization with Zod schemas, and defensive fallback rendering on all public routes.

---

## 3. Technology Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router, Server & Client Components)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/) (Strict Mode)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with bespoke HSL color tokens & CSS Variables
- **Icons:** [Lucide React](https://lucide.dev/)
- **Database:** [Supabase](https://supabase.com/) (PostgreSQL 15+, Row Level Security, Migration Engine)
- **Validation:** [Zod](https://zod.dev/)
- **CI/CD:** [GitHub Actions](https://github.com/features/actions)
- **Hosting & Edge Deployment:** [Vercel](https://vercel.com/)

---

## 4. Verified Project Showcase

The portfolio showcases five authentic software projects, each maintained in its own dedicated source repository:

| Project | Domain / Stack | Verification State | Repository |
|---|---|:---:|---|
| **Campus IT Tracker** | C# .NET 4.8 / WinForms / Oracle | **Verified** | [Abdulghani780/Campuse-IT-Tracker](https://github.com/Abdulghani780/Campuse-IT-Tracker) |
| **MetaAlgorithm Lab** | Python 3.10+ / PyQt6 / SciPy / NumPy | **Verified** | [Abdulghani780/MetaAlgorithmLab](https://github.com/Abdulghani780/MetaAlgorithmLab) |
| **NOVA TECH** | Modern HTML5 / CSS3 / Vanilla JS | **Verified** | [Abdulghani780/NovaTech](https://github.com/Abdulghani780/NovaTech) |
| **Cafena** | Arabic Specialty Coffee / Vanilla Web | **Verified** | [Abdulghani780/Cafena](https://github.com/Abdulghani780/Cafena) |
| **Graduation Project Portal** | Fullstack PHP 8 / MySQL 8 / Bootstrap 5 | **Verified** | [Abdulghani780/Graduation-Project-Management-Portal](https://github.com/Abdulghani780/Graduation-Project-Management-Portal) |

---

## 5. Interactive Demo Sandboxes

Each project is accompanied by an isolated in-browser demonstration under `/[locale]/projects/[slug]/demo`:
- `/en/projects/campus-it-tracker/demo` & `/ar/projects/campus-it-tracker/demo`
- `/en/projects/metaalgorithm-lab/demo` & `/ar/projects/metaalgorithm-lab/demo`
- `/en/projects/novatech/demo` & `/ar/projects/novatech/demo`
- `/en/projects/cafena/demo` & `/ar/projects/cafena/demo`
- `/en/projects/gp/demo` & `/ar/projects/gp/demo`

All simulations feature explicit bilingual technical integrity disclosures certifying that they operate with safe mock data inside a browser sandbox.

---

## 6. Local Development

### Prerequisites
- Node.js `v20+` or `v24+` (Active LTS)
- PNPM `10+`

### Installation & Execution
```bash
# Clone the portfolio
git clone https://github.com/Abdulghani780/Abdulghani-AlShibami-Portfolio.git
cd Abdulghani-AlShibami-Portfolio

# Install dependencies
pnpm install

# Run local development server
pnpm dev

# Typecheck and lint
pnpm typecheck
pnpm lint

# Build production bundle
pnpm build
```

---

## 7. Environment Variables

Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

| Variable | Scope | Purpose | Default / Example |
|---|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Client / Server | Canonical website URL | `http://localhost:3000` |
| `NEXT_PUBLIC_DEFAULT_LOCALE` | Client / Server | Default fallback language | `en` |
| `NEXT_PUBLIC_SUPABASE_URL` | Client / Server | Supabase Project API URL | `https://your-project-id.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Client / Server | Supabase Anonymous Public Key | `your-anon-public-key` |
| `SUPABASE_SERVICE_ROLE_KEY` | Server Only | Privileged database admin operations | *(Never expose to client)* |

---

## 8. Database Architecture & Migrations

The database is built on Supabase PostgreSQL with strict Row Level Security (RLS).
Migrations reside in `supabase/migrations/`:
- `20260917000001_initial_schema.sql`: Core schema defining `profiles`, `projects`, `project_categories`, `technologies`, `project_technologies`, `skills`, `experiences`, and `contact_messages`.

---

## 9. Testing & Quality Assurance

- **Static Type Safety:** `pnpm typecheck` (`tsc --noEmit`)
- **Code Standards:** `pnpm lint` (`next lint`)
- **SSR & Prerender Verification:** `pnpm build` (verifies static prerendering across all 30 routes)
- **Accessibility & Contrast:** Audited via Chrome DevTools MCP ensuring WCAG AA contrast in both Dark and Light themes.

---

## 10. Continuous Integration & Deployment

- **GitHub Actions (`.github/workflows/ci.yml`):** Runs install, lint, typecheck, and build on every push and pull request.
- **Database CI (`.github/workflows/database.yml`):** Validates SQL migration syntax and schema consistency.
- **Vercel Edge Platform:** Automatic preview deployments for pull requests and atomic zero-downtime production deployment on `main`.

---

## 11. License

Copyright © 2026 Abdulghani Al-Shibami. All rights reserved. Distributed under the MIT License.
