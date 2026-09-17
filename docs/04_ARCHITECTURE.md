# 04 — APPLICATION ARCHITECTURE

**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System  
**Framework:** Next.js (App Router), React, TypeScript, Supabase PostgreSQL  

---

## 1. High-Level Architectural Diagram

```text
┌─────────────────────────────────────────────────────────────┐
│                       Client Browser                        │
│  - React Server Components (RSC) & Client Islands           │
│  - Luxury Black & Royal Gold Design Tokens (Tailwind CSS)   │
│  - Next-Intl / Custom Dictionary-Based Bilingual Engine     │
│  - Dual Theme Provider (Dark / Light Mode, Flash-Free)      │
└──────────────┬───────────────────────────────▲──────────────┘
               │ HTTP Requests                 │ HTML / Streaming
               ▼                               │
┌─────────────────────────────────────────────────────────────┐
│                    Next.js Edge / Node.js                   │
│  - Middleware: Locale routing (/en, /ar), Security Headers  │
│  - Server Components: SSR / Streaming render                │
│  - Route Handlers / Actions: /api/contact, Zod validation   │
└──────────────┬───────────────────────────────▲──────────────┘
               │ Data Access Layer (DAL)       │
               ▼                               │
┌─────────────────────────────────────────────────────────────┐
│                   Resilient Data Layer                      │
│     ┌─────────────────────────────────────────────────┐     │
│     │        Supabase PostgreSQL (Remote Cloud)       │     │
│     │  - RLS Policies (Public read, Private write)    │     │
│     │  - Storage Buckets (Media, documents)           │     │
│     └────────────────────────▲────────────────────────┘     │
│                              │ (Failover / Local fallback)  │
│     ┌────────────────────────▼────────────────────────┐     │
│     │      Local Typed Static Mock Data Repository    │     │
│     │  - Zero-downtime offline execution guarantee    │     │
│     └─────────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. Server & Client Boundary Architecture
- **React Server Components (RSC) by Default:** All page routes, case study text renders, metadata generation, and project grids default to RSC to maximize SEO, minimize client bundle weight, and optimize LCP.
- **Client Component Islands (`'use client'`):** Restricted strictly to interactive elements:
  - Theme toggler (`ThemeToggle.tsx`)
  - Language switcher (`LanguageSwitcher.tsx`)
  - Interactive project filtering & search input (`ProjectFilter.tsx`)
  - Interactive Demo sandboxes (`DemoViewer.tsx`)
  - Contact form submission state (`ContactForm.tsx`)

---

## 3. Resilient Data Access Layer (DAL)
- Presentation components never call Supabase or fetch endpoints directly.
- All requests flow through `lib/services/projectService.ts` and `lib/services/profileService.ts`.
- The service inspects environment variables:
  - If `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are configured, query the PostgreSQL database with timeout protection.
  - If unconfigured, connection times out, or query fails: automatically return strongly-typed local fallback data from `lib/data/projectsData.ts`.
  - **Outcome:** The application NEVER crashes or renders blank pages, regardless of cloud network conditions.

---

## 4. Internationalization (i18n) Architecture
- Handled at route level via Next.js dynamic path parameter: `app/[locale]/...`.
- Middleware intercepts requests, inspects cookies / `Accept-Language`, and redirects cleanly.
- Root layout injects `dir="ltr"` or `dir="rtl"` dynamically.
- Component styling relies strictly on CSS logical properties (`margin-inline`, `padding-inline`, `border-inline-start`, `inset-inline-start`) ensuring zero layout defects in Arabic RTL.
