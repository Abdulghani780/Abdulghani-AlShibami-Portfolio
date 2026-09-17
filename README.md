# Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System

> **عبدالغني الشبامي | Abdulghani Al-Shibami**  
> Software Engineer | AI & Systems Architect | Full-Stack Developer  
> Luxury Black & Royal Gold Visual Identity | English & Arabic (RTL/LTR) | Production-Grade Platform

---

## Overview

This repository houses the personal portfolio, engineering showcase, interactive project demonstration system, and academic/professional identity platform for **Abdulghani Al-Shibami**.

The platform is designed from zero to production as a scalable, high-performance web system featuring:
1. **Personal Identity & Showcase:** Academic background, professional experience, certifications, and technical accomplishments.
2. **Dynamic Project System:** Rich case studies with technical architecture breakdowns, problem-solution analyses, and tech stack badges.
3. **Interactive Demo System:** Safe, isolated project demonstrations distinguishing between Real Live Web Demos, Sandboxed Iframe Demos, Interactive Desktop Simulations (C#/.NET/Python), and Video walkthroughs.
4. **Bilingual Support (i18n):** Native English (LTR) and Arabic (RTL) with typography adapted for both languages (Outfit / Cairo).
5. **Dual-Theme Design:** Bespoke luxury Dark Mode (Obsidian Black & Royal Gold) and intentionally balanced Light Mode (Porcelain White & Warm Slate).
6. **Resilient Data Architecture:** PostgreSQL via Supabase with Row Level Security (RLS) and automatic local mock fallback for zero-downtime offline execution.
7. **Autonomous Governance:** Governed by an autonomous multi-agent engineering constitution, explicit skill registries, and living documentation.

---

## Technology Stack

- **Frontend Framework:** Next.js (App Router, React Server Components)
- **Language:** TypeScript (Strict mode)
- **Styling:** Tailwind CSS with custom HSL design tokens & CSS variables
- **Icons:** Lucide React
- **Database & Storage:** PostgreSQL via Supabase (with RLS policies and migrations)
- **Deployment:** Vercel (Edge network optimization)
- **CI/CD:** GitHub Actions (lint, typecheck, build, test validation)
- **Testing & Diagnostics:** Vitest, Testing Library, Chrome DevTools MCP (Accessibility & Performance)

---

## Governance & Documentation Architecture

This repository operates under strict documentation-first discipline (`DOCUMENTATION -> ARCHITECTURE -> IMPLEMENTATION -> TESTING -> COMMIT`):

- [`AGENTS.md`](./AGENTS.md): Operational constitution and engineering guidelines for AI agents.
- [`SKILLS.md`](./SKILLS.md): Registry of 19 standardized engineering capabilities.
- [`MCP.md`](./MCP.md): Model Context Protocol server inventory and usage instructions.
- [`PROMPTS.md`](./PROMPTS.md): Reusable operational prompt library.
- [`ROADMAP.md`](./ROADMAP.md): 21-phase master project roadmap.
- [`TASKS.md`](./TASKS.md): Granular task matrix with status and Definition of Done.
- [`PROGRESS.md`](./PROGRESS.md): Live project state tracker.
- [`IMPLEMENTATION_LOG.md`](./IMPLEMENTATION_LOG.md): Historical append-only log.
- [`CHANGELOG.md`](./CHANGELOG.md): Version release history.
- [`docs/`](./docs/): Complete 37-file technical specification and architecture repository.

---

## Getting Started

### Prerequisites
- Node.js `v20+` or `v24+` (Active LTS)
- PNPM `10+`

### Installation & Local Development
```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Typecheck and lint
pnpm typecheck
pnpm lint

# Build production bundle
pnpm build
```

---

## License

Copyright © 2026 Abdulghani Al-Shibami. All rights reserved.
