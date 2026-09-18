# Vercel Deployment Specification & Architecture

**Platform:** Abdulghani Al-Shibami — Autonomous Portfolio  
**Target:** Vercel Edge & Serverless Platform  
**Production Branch:** `main`  
**Date:** 2026-09-19  

---

## 1. Scope & Isolation

Vercel hosts **only** the personal portfolio Next.js web application (`Abdulghani-AlShibami-Portfolio`).
The five original standalone projects are NOT deployed as independent applications on Vercel:
- `Campus IT Tracker` is a Windows desktop application.
- `MetaAlgorithmLab` is a Python desktop/scientific application.
- `Graduation Project Portal` is an on-premise PHP 8 academic portal.
- `Cafena` and `NOVA TECH` are simulated client-side inside the portfolio.

All five systems are represented faithfully via the Portfolio's in-browser Interactive Demo engine (`/[locale]/projects/[slug]/demo`).

---

## 2. Vercel Project Configuration

### Build & Development Settings
- **Framework Preset:** `Next.js`
- **Root Directory:** `./`
- **Build Command:** `pnpm build`
- **Output Directory:** `.next`
- **Install Command:** `pnpm install`
- **Node.js Version:** `20.x` or `22.x`

---

## 3. Environment Variables Specification

Configure the following variables in the Vercel Dashboard (`Project Settings -> Environment Variables`):

| Variable Name | Environments | Value / Description | Example |
|---|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Production, Preview, Dev | Canonical public URL | `https://abdulghani.dev` |
| `NEXT_PUBLIC_DEFAULT_LOCALE` | Production, Preview, Dev | Primary language code | `en` |
| `NEXT_PUBLIC_SUPABASE_URL` | Production, Preview, Dev | Supabase project API URL | `https://xyzcompany.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Production, Preview, Dev | Supabase Anonymous Public API key | `eyJhbGciOiJIUz...` |
| `SUPABASE_SERVICE_ROLE_KEY` | Production only | Server-side privileged key (optional) | `eyJhbGciOiJIUz...` |

---

## 4. Deployment Pipeline

```text
Local Working Tree (commit on main)
        ↓
git push origin main
        ↓
GitHub (@Abdulghani780/Abdulghani-AlShibami-Portfolio)
        ↓
GitHub Actions CI (.github/workflows/ci.yml)
        ↓
Vercel Webhook / Git Integration
        ├── Pull Requests  ➔ Vercel Preview URL
        └── Branch 'main'  ➔ Vercel Production Deployment
```

---

## 5. Preview & Production Verification Matrix

Before declaring any deployment ready, verify:
- [ ] **Bilingual Parity:** Both `/en/` and `/ar/` resolve with appropriate metadata and fonts.
- [ ] **Theme Switching:** Dark mode (`#0B0B0C`) and Light mode (`#FAFAFA`) render without layout flash.
- [ ] **All 5 Demos:** Verify each sandbox route loads and executes client-side:
  - `/en/projects/campus-it-tracker/demo`
  - `/en/projects/metaalgorithm-lab/demo`
  - `/en/projects/novatech/demo`
  - `/en/projects/cafena/demo`
  - `/en/projects/gp/demo`
- [ ] **External Links:** Repository links (`github.com/Abdulghani780/...`) open cleanly in new tabs.
- [ ] **HTTP Headers:** Security headers (CSP, X-Content-Type-Options, Frame Options) active.
