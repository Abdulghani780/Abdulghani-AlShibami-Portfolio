# 23 — DEPLOYMENT & HOSTING SPECIFICATION

**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System  
**Hosting Target:** Vercel (Edge Network)  
**Database Target:** Supabase Cloud (PostgreSQL 15+)  

---

## 1. Vercel Deployment Architecture

```text
[Local Engineering]
       │
       ▼ (git push)
[GitHub Repository]
       │
       ▼ (Webhook trigger)
[Vercel Build Pipeline]
   ├── 1. Install dependencies (pnpm install --frozen-lockfile)
   ├── 2. Run TypeScript check (pnpm typecheck)
   ├── 3. Execute Next.js build (pnpm build)
   └── 4. Edge Distribution (Worldwide CDN Edge Caching)
```

---

## 2. Zero-Downtime Rollback Strategy
- **Instant Rollbacks:** Vercel maintains immutable deployment hashes for every commit. In the event of a production defect, a single click or CLI command (`vercel rollback <deployment-url>`) restores the previous healthy release instantaneously without rebuilding.
- **Preview Deployments:** Every pull request or non-main feature branch automatically triggers an isolated Vercel preview URL (`portifilo-git-feature-*.vercel.app`), allowing manual and automated verification prior to merging.

---

## 3. Database Migration Strategy
- Migrations are versioned sequentially in `supabase/migrations/` (e.g. `20260917000001_initial_schema.sql`).
- All migrations must be idempotent (`CREATE TABLE IF NOT EXISTS`, `DO $$ BEGIN ... END $$`).
- Zero direct production database manual edits.
