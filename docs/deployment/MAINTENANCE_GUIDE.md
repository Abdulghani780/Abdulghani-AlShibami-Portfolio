# MAINTENANCE & OPERATIONS GUIDE

**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System  
**Owner:** عبدالغني الشبامي | Abdulghani Al-Shibami  
**Repository:** `c:\my projects\Portifilo`  
**Operating System:** Antigravity Autonomous Project Operating System v2.0  
**Status:** Production Maintenance & Post-Release Governance  

---

## 1. Executive Summary & Purpose

This document outlines the standard operating procedures (SOP), ongoing maintenance cadences, security auditing routines, database backup protocols, and emergency recovery runbooks for maintaining Abdulghani Al-Shibami's personal engineering platform in a zero-defect, high-availability production state.

---

## 2. Technology Stack & Operational Footprint

| Subsystem | Technology | Responsibility | Provider / Hosting |
| :--- | :--- | :--- | :--- |
| **Core Framework** | Next.js 15 (App Router), React 19, TypeScript | Server-Side Rendering (SSR), Static Generation (SSG), Routing | Vercel Edge / Serverless |
| **Styling & Tokens** | Tailwind CSS v3, Bespoke Obsidian & Royal Gold Tokens | Responsive Layout, Dual-Theme, Logical CSS | Static Bundled CSS |
| **Database & Auth** | Supabase (PostgreSQL 15), Row Level Security (RLS) | Contact Inquiries, Dynamic Project Catalog, Profiles | Supabase Cloud |
| **Data Access Layer** | `HybridProjectRepository` with zero-failure fallback | Seamless operation during Supabase network partitions | Local TypeScript DAL |
| **AI Assistant** | Google Gemini API (`@google/genai`), Zod, In-Memory Rate Limiter | Factual Concierge ("Abdulghani AI") | Google Cloud Vertex / AI Studio |
| **Assets & Media** | Sharp, AVIF/WebP image pipeline, PDF CV | Visuals, Certificates, Vector Monogram | Git LFS & Vercel CDN |
| **Continuous Integration**| GitHub Actions (`.github/workflows/ci.yml`, `database.yml`) | Automated typechecking, linting, testing, and building | GitHub Actions |

---

## 3. Routine Maintenance Protocols & Cadence

### 3.1. Weekly Maintenance Checklist
- [ ] Review incoming contact submissions in the Supabase `contact_messages` table.
- [ ] Review Google Cloud Gemini API request volume and rate limiting metrics in the Google AI Studio Console.
- [ ] Review Vercel analytics, Web Vitals metrics (LCP, FID/INP, CLS), and edge error rates.
- [ ] Check GitHub Issues and Pull Requests on `@Abdulghani780` repositories.

### 3.2. Monthly Security & Dependency Audit
1. **Audit Security Vulnerabilities:**
   ```bash
   pnpm audit
   ```
   *Standard:* Zero vulnerabilities tolerated. If vulnerabilities arise in subdependencies, use `package.json` pnpm overrides to patch them immediately.

2. **Verify Static Compilation & Type Safety:**
   ```bash
   pnpm typecheck
   pnpm lint
   pnpm test
   pnpm build
   ```

3. **Verify OpenGraph & Social Metadata Assets:**
   - Confirm `public/images/og-cover.png` (1200x630) is served with proper cache headers.
   - Test URLs via OpenGraph Debuggers (Twitter Card Validator, LinkedIn Post Inspector).

### 3.3. Quarterly Infrastructure & Knowledge Review
- **Sync Academic & Professional Achievements:** Update `lib/data/profile.ts`, `lib/data/credentials.ts`, and `lib/ai/knowledge.ts` when new honors, degrees, or certifications are completed.
- **Refresh Seed Data:** Ensure `supabase/seed.sql` reflects current project architectures and credentials.
- **Rotate API Credentials:** Verify that `GEMINI_API_KEY` and Supabase keys follow secret rotation policies.

---

## 4. Supabase Database Operations & Backup Procedures

### 4.1. Automated Cloud Backups
- Supabase provides automated daily backups for all cloud-hosted PostgreSQL instances.
- Backups are accessible through the Supabase Dashboard: `Database` -> `Backups`.

### 4.2. Manual Point-in-Time Backup Procedure
To generate a local snapshot of the production schema and data:
```bash
# Export schema and public data via Supabase CLI
npx supabase db dump -f supabase/backups/backup_$(date +%Y%m%d).sql --data-only

# Or using standard pg_dump with connection pooler URL:
pg_dump "postgres://postgres.[PROJECT_REF]:[PASSWORD]@aws-0-eu-central-1.pooler.supabase.com:6543/postgres" \
  --schema=public \
  --clean \
  --if-exists \
  --no-owner \
  --file="supabase/backups/prod_backup_$(date +%Y%m%d).sql"
```

### 4.3. Data Recovery & Restoration
If data corruption occurs:
1. Verify the integrity of the backup file.
2. Run database migration in idempotent mode:
   ```bash
   psql [CONNECTION_STRING] -f supabase/migrations/20260917000001_initial_schema.sql
   ```
3. Re-seed verified production records:
   ```bash
   psql [CONNECTION_STRING] -f supabase/seed.sql
   ```
4. Verify Row Level Security (RLS) enforcement:
   - Anonymous visitors can `SELECT` from `profiles`, `projects`, `experiences`, and `skills`.
   - Anonymous visitors can only `INSERT` into `contact_messages`.
   - Service role holds full administrative permissions.

---

## 5. Gemini AI Assistant Operations & Troubleshooting

### 5.1. Model Lifecycle & Upgrades
- The AI concierge utilizes `@google/genai` with model `gemini-2.5-flash`.
- Check Google AI documentation quarterly for model deprecation notices or version bumps.
- When updating models, run the test suite:
  ```bash
  node --test tests/ai-integration.test.mjs
  node --test tests/offline-ai.test.mjs
  ```

### 5.2. Rate Limiting Tuning
- In `app/api/ai/chat/route.ts`:
  - `RATE_LIMIT_WINDOW_MS`: 60,000 ms (1 minute).
  - `MAX_REQUESTS_PER_WINDOW`: 20 requests per client IP.
- If traffic surges, adjust `MAX_REQUESTS_PER_WINDOW` or deploy an Edge Redis store (Upstash) if distributed multi-instance rate limiting is required.

### 5.3. Zero-Failure Fallback Verification
If the upstream Gemini API key is missing or quota is exhausted:
1. The assistant automatically falls back to `generateOfflineResponse` in `app/api/ai/chat/route.ts`.
2. Offline responses are verified across English and Arabic by `tests/offline-ai.test.mjs`.
3. Visitors never receive raw stack traces or 500 errors.

---

## 6. Emergency Incident Response Runbook

| Severity | Definition | Response Time | Action Procedure |
| :--- | :--- | :--- | :--- |
| **P0 (Critical Outage)** | Application returns 500 across core routes or build fails in CI | < 1 hour | 1. Rollback to latest verified commit on `main`.<br>2. Check Vercel build logs.<br>3. Verify static fallback files in `lib/data/`. |
| **P1 (High)** | Supabase API unreachable or Gemini API rate limit hit | < 4 hours | 1. Verify `HybridProjectRepository` fallback.<br>2. Check Supabase platform status.<br>3. AI fallback engages automatically. |
| **P2 (Medium)** | Minor UI layout glitch, untranslated string, or styling defect | < 24 hours | 1. Fix in feature branch.<br>2. Run `pnpm test` & DevTools inspection.<br>3. Merge with conventional commit. |
| **P3 (Low)** | Dependency update, documentation typo, non-breaking chore | Weekly | Address during weekly scheduled maintenance. |

---

## 7. Change Management & Release Standards

Every commit to `main` must satisfy the core 10-step autonomous engineering loop defined in `AGENTS.md`:
1. Inspect docs and root control files.
2. Inspect existing implementation.
3. Identify dependencies and side effects.
4. Identify architectural and visual impact.
5. Implement smallest safe, verified change.
6. Test: `pnpm typecheck`, `pnpm lint`, `pnpm test`, `pnpm build`.
7. Update documentation (`docs/`, `ROADMAP.md`).
8. Update `PROGRESS.md` and `TASKS.md`.
9. Update `CHANGELOG.md` and `IMPLEMENTATION_LOG.md`.
10. Commit to Git with conventional commit messaging.
