# Supabase Portfolio Database Deployment Guide

**System:** Abdulghani Al-Shibami — Personal Portfolio  
**Database Engine:** PostgreSQL 15+ (Supabase)  
**Standard:** Enterprise Security, RLS-by-Default, Resilient Local Fallback  
**Date:** 2026-09-19  

---

## 1. Architectural Scope

The Supabase database serves **exclusively** as the persistence layer for the Portfolio platform. It does NOT host or merge the original external project databases:
- `Campus IT Tracker` continues to utilize its dedicated Oracle Database schema.
- `Graduation Project Portal (Gp)` continues to utilize its dedicated MySQL 8 schema.
- `MetaAlgorithmLab` continues to utilize its dedicated MySQL / SQLAlchemy models.

The Portfolio database is completely decoupled and autonomous.

---

## 2. Core Schema & Migration Registry

All database structures are defined via version-controlled migration files in `supabase/migrations/`:

### Migration: `20260917000001_initial_schema.sql`
Defines 8 relational tables:
1. **`profiles`**: Owner biographical and identity data (Arabic & English).
2. **`project_categories`**: Domain taxonomy categories (`desktop-systems`, `algorithmic-computing`, `web-platforms`, `academic-systems`).
3. **`technologies`**: Master inventory of languages, frameworks, databases, and tools.
4. **`projects`**: Flagship project specifications, case study narratives, architecture flow, and demo configurations.
5. **`project_technologies`**: Many-to-many relationship join between projects and technologies.
6. **`skills`**: Granular technical competencies with categorized proficiency scores.
7. **`experiences`**: Formal education, professional experience, certifications, and academic honors.
8. **`contact_messages`**: High-security inbox for visitor inquiries with SHA-256 IP hashing.

---

## 3. Row Level Security (RLS) Policy Architecture

All 8 tables have RLS enabled (`ALTER TABLE ... ENABLE ROW LEVEL SECURITY;`).

| Table | Policy Name | Operation | Target Role | Access Rule |
|---|---|:---:|---|---|
| `profiles` | Public profiles readable | `SELECT` | `anon`, `authenticated` | `USING (true)` |
| `project_categories` | Public categories readable | `SELECT` | `anon`, `authenticated` | `USING (true)` |
| `technologies` | Public technologies readable | `SELECT` | `anon`, `authenticated` | `USING (true)` |
| `projects` | Public projects readable | `SELECT` | `anon`, `authenticated` | `USING (true)` |
| `project_technologies` | Public join table readable | `SELECT` | `anon`, `authenticated` | `USING (true)` |
| `skills` | Public skills readable | `SELECT` | `anon`, `authenticated` | `USING (true)` |
| `experiences` | Public experiences readable | `SELECT` | `anon`, `authenticated` | `USING (true)` |
| `contact_messages` | Anyone can submit message | `INSERT` | `anon`, `authenticated` | `WITH CHECK (true)` |
| `contact_messages` | Only service_role can read | `SELECT` | `service_role` | `auth.role() = 'service_role'` |

> [!CAUTION]
> Under no circumstances may public visitors (`anon`) read or query `contact_messages`. Only the administrative `service_role` can read contact inquiries.

---

## 4. Performance Indexes

The initial migration establishes indexes on all high-cardinality foreign keys and filter fields:
```sql
CREATE INDEX idx_projects_slug ON public.projects(slug);
CREATE INDEX idx_projects_featured ON public.projects(featured) WHERE featured = true;
CREATE INDEX idx_projects_category ON public.projects(category_id);
CREATE INDEX idx_categories_slug ON public.project_categories(slug);
CREATE INDEX idx_contact_messages_created ON public.contact_messages(created_at DESC);
```

---

## 5. Deployment Runbook

### Step 1: Link Remote Supabase Project
```bash
# Login to Supabase CLI
npx supabase login

# Link to target Supabase project reference
npx supabase link --project-ref <your-supabase-project-id>
```

### Step 2: Push Migrations
```bash
# Push all pending migrations to remote Supabase database
npx supabase db push
```

### Step 3: Verify Migration State
```bash
npx supabase migration list
```

---

## 6. Zero-Failure Local Data Fallback

The portfolio's Data Access Layer (`lib/data/projectsData.ts` and `lib/services/projectRepository.ts`) implements an automated zero-downtime fallback:
- If `NEXT_PUBLIC_SUPABASE_URL` or `NEXT_PUBLIC_SUPABASE_ANON_KEY` are not configured or the remote API is unreachable, the system automatically falls back to local statically compiled TypeScript mock data.
- Public visitors never experience runtime white-screens or raw connection timeouts.
