# 05 — TECHNOLOGY STACK SPECIFICATION

**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System  
**Verified Runtimes:** Node.js v24.15.0 | PNPM v10.33.3  

---

## 1. Core Runtime & Tooling

| Component | Selected Technology | Version / Specification | Rationale |
| :--- | :--- | :--- | :--- |
| **Runtime Environment** | Node.js | `v24.15.0` (Active LTS) | High-speed V8 engine, native fetch, enterprise reliability. |
| **Package Manager** | PNPM | `10.33.3` | Fast, deterministic, disk space efficient hard-link storage. |
| **Language** | TypeScript | `^5.x` | Strict type safety, prevents runtime reference errors. |
| **Version Control** | Git | `2.54.0` | Semantic atomic commits and GitHub integration. |

---

## 2. Frontend Layer

| Component | Selected Technology | Version / Specification | Rationale |
| :--- | :--- | :--- | :--- |
| **Web Framework** | Next.js (App Router) | `^15.x` or latest stable | Server Components, dynamic streaming, optimal SEO, Vercel edge deployment. |
| **UI Library** | React | `^19.x` / latest stable | Declarative component model, server actions. |
| **Styling Engine** | Tailwind CSS | `^3.4.x` / `^4.x` | Utility-first CSS with custom HSL token integration. |
| **Iconography** | Lucide React | Latest | Clean, lightweight, consistent SVG icon set. |
| **Typography** | `next/font` | Outfit (EN) & Cairo (AR) | Zero layout shift font optimization, self-hosted by Next.js. |
| **Animations** | CSS Transitions & Framer Motion (opt) | Lightweight | Micro-interactions without heavy CPU frame drops. |

---

## 3. Backend & Data Layer

| Component | Selected Technology | Version / Specification | Rationale |
| :--- | :--- | :--- | :--- |
| **Server Runtime** | Next.js Serverless / Edge | Node.js / Edge | Route handlers and server actions without standalone server overhead. |
| **Database** | PostgreSQL | 15+ (via Supabase) | Relational integrity, JSONB support, full-text search. |
| **Client Adapter** | `@supabase/supabase-js` | Latest | Type-safe Supabase REST and Auth/Storage client. |
| **Validation** | Zod | `^3.x` | Schema validation for contact form and API payloads. |
| **Fallback Layer** | TypeScript Local Repository | Native in-memory | Guarantees 100% uptime even if external DB is disconnected. |

---

## 4. Hosting, CI/CD & DevOps

| Component | Selected Technology | Purpose |
| :--- | :--- | :--- |
| **Primary Host** | Vercel | Global edge CDN, automatic preview deployments on Git push. |
| **Database Host** | Supabase | Managed PostgreSQL, Row Level Security, Storage Buckets. |
| **CI Automation** | GitHub Actions | Automated lint, typecheck, test, and build pipeline. |
| **Security Scanning** | Built-in Audit + CSP | Automated CSP headers, sanitization, secret leakage prevention. |
