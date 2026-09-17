# 27 — REPOSITORY FILE STRUCTURE SPECIFICATION

**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System  

---

## 1. Directory Tree Architecture

```text
Portifilo/
├── .github/
│   └── workflows/
│       ├── ci.yml                      # Automated lint, typecheck, test, build
│       └── database.yml                # Database migration verification
├── app/                                # Next.js App Router (RSC & Pages)
│   ├── [locale]/                       # Dynamic Bilingual Root (/en, /ar)
│   │   ├── layout.tsx                  # Root HTML shell with dynamic dir & lang
│   │   ├── page.tsx                    # Personal Homepage
│   │   ├── about/
│   │   │   └── page.tsx                # About & Philosophy Page
│   │   ├── skills/
│   │   │   └── page.tsx                # Comprehensive Skills Taxonomy
│   │   ├── projects/
│   │   │   ├── page.tsx                # Filterable Project Catalog
│   │   │   └── [slug]/
│   │   │       ├── page.tsx            # Deep Case Study View
│   │   │       └── demo/
│   │   │           └── page.tsx        # Isolated Interactive Demo Sandbox
│   │   ├── experience/
│   │   │   └── page.tsx                # Academics, Experience & Certifications
│   │   ├── contact/
│   │   │   └── page.tsx                # Direct Contact Channel
│   │   └── cv/
│   │       └── page.tsx                # Web CV & Download View
│   ├── api/
│   │   └── contact/
│   │       └── route.ts                # Secure Contact Submission API
│   ├── globals.css                     # Design tokens & CSS variables
│   ├── robots.ts                       # SEO Crawler Directives
│   └── sitemap.ts                      # Dynamic Multilingual Sitemap
├── components/
│   ├── ui/                             # Dumb Atomic Primitives (Button, Badge, Card, Modal)
│   ├── layout/                         # Shell Components (Navbar, Footer, ThemeToggle, LanguageSwitcher)
│   └── features/                       # Domain Modules
│       ├── hero/                       # Hero banner, Avatar asset
│       ├── projects/                   # ProjectCard, ProjectGrid, ProjectFilter
│       ├── demos/                      # DemoViewer, DesktopSimulation engine
│       ├── contact/                    # ContactForm with validation
│       └── experience/                 # Timeline and credential cards
├── docs/                               # 37-File Engineering Specification System
├── lib/
│   ├── data/                           # Typed Local Fallback Data (Projects, Skills, Profile)
│   ├── i18n/                           # Dictionaries & Locale Helpers (en, ar)
│   ├── services/                       # Resilient Data Access Layer (DAL)
│   ├── supabase/                       # Supabase client adapters & query builders
│   ├── theme/                          # Theme provider & inline script
│   └── utils.ts                        # Styling & helper utilities (cn, clsx)
├── public/
│   ├── images/
│   │   ├── profile/                    # Profile asset placeholder [PROFILE_IMAGE]
│   │   └── projects/                   # Project thumbnails & architecture diagrams
│   └── favicon.ico                     # Brand favicon
├── supabase/
│   └── migrations/                     # Idempotent PostgreSQL Migration Scripts
├── types/                              # Strict TypeScript Domain Interfaces
├── .env.example                        # Safe Environment Template
├── .gitignore                          # Strict git exclusion rules
├── AGENTS.md                           # Operational Constitution for AI Agents
├── CHANGELOG.md                        # SemVer Release History
├── DISCOVERY_REPORT.md                 # Initial Host & Tool Discovery
├── IMPLEMENTATION_LOG.md               # Historical Append-Only Log
├── MCP.md                              # MCP Server Inventory & Tool Registry
├── package.json                        # Node.js Dependencies & Scripts
├── PROGRESS.md                         # Live Project Progress Tracker
├── PROMPTS.md                          # Reusable Operational Prompts
├── README.md                           # Project Overview & Entrypoint
├── ROADMAP.md                          # 21-Phase Master Roadmap
├── SKILLS.md                           # 19 Engineering Skills Registry
├── TASKS.md                            # Granular Task Tracker with DoD
├── tailwind.config.ts                  # Tailwind Config with Royal Gold & Obsidian Tokens
└── tsconfig.json                       # Strict TypeScript Configuration
```
