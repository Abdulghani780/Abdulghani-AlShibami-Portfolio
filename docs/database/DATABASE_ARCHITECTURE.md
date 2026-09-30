# DATABASE ARCHITECTURE SPECIFICATION
**Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System**
**Standard:** Enterprise Production-Grade Architecture
**Engine:** PostgreSQL 15+ (Supabase)
**Security Model:** Mandatory Row Level Security (RLS) & Zero-Failure Hybrid Data Access Layer

---

## 1. Overview & Architectural Principles

The data layer of the Abdulghani Al-Shibami portfolio is engineered for high performance, strict relational integrity, and total runtime resilience. Built on PostgreSQL 15+ via Supabase, the architecture balances rich dynamic database capabilities with a **Zero-Failure Fallback** principle.

### Key Architectural Tenets:
1. **Decoupled Data Access Layer (DAL):** Presentation components in Next.js never directly query Supabase tables. All data access is mediated through typed service repositories (`lib/services/projectRepository.ts`).
2. **Zero-Failure Fallback:** If Supabase credentials are missing (e.g. offline development, staging previews without cloud keys) or if the cloud database is unreachable or empty, the system automatically falls back to typed, local static models (`lib/data/projectsData.ts`). Public visitors never encounter a broken page or raw database error trace.
3. **Canonical Project Truth:** The database strictly represents the 5 verified authentic engineering projects (`campus-it-tracker`, `metaalgorithm-lab`, `novatech`, `cafena`, `gp`) and the 5 authentic certificates.
4. **Principle of Least Privilege:** RLS is enabled on 100% of tables. Public access is strictly read-only for catalog entities and write-only (insert) for contact inquiries.

---

## 2. Entity Relationship Model (ERD)

```text
+-----------------------+          +-------------------------+
|  project_categories   |          |      technologies       |
+-----------------------+          +-------------------------+
| id (PK, UUID)         |          | id (PK, UUID)           |
| slug (UQ, TEXT)       |<----+    | name (UQ, TEXT)         |<----+
| name_en (TEXT)        |     |    | category (TEXT)         |     |
| name_ar (TEXT)        |     |    | icon_name (TEXT)        |     |
| display_order (INT)   |     |    +-------------------------+     |
+-----------------------+     |                                    |
                              |                                    |
                              | 1:N                                | M:N
                              |                                    |
+-----------------------+     |    +-------------------------+     |
|       projects        |     |    |  project_technologies   |     |
+-----------------------+     |    +-------------------------+     |
| id (PK, UUID)         |     |    | project_id (PK, FK)     |     |
| slug (UQ, TEXT)       |     |    | technology_id (PK, FK)--+-----+
| category_id (FK)------+-----+    +-------------------------+
| title_en (TEXT)       |                     ^
| title_ar (TEXT)       |                     |
| short_desc_en (TEXT)  |                     |
| short_desc_ar (TEXT)  |                     | M:N
| problem_en (TEXT)     |                     |
| problem_ar (TEXT)     |                     |
| solution_en (TEXT)    |                     |
| solution_ar (TEXT)    |                     |
| architecture_en (TEXT)|                     |
| architecture_ar (TEXT)|                     |
| challenges_en (JSONB) |                     |
| challenges_ar (JSONB) |                     |
| results_en (JSONB)    |                     |
| results_ar (JSONB)    |                     |
| year (INT)            |                     |
| status (TEXT)         |                     |
| featured (BOOL)       |                     |
| display_order (INT)   |                     |
| github_url (TEXT)     |                     |
| live_url (TEXT)       |                     |
| demo_type (TEXT)      |                     |
| demo_config (JSONB)   |                     |
| thumbnail_url (TEXT)  |                     |
+-----------------------+                     |
        | 1                                   |
        +-------------------------------------+

+-----------------------+   +-----------------------+   +-----------------------+
|       profiles        |   |      experiences      |   |        skills         |
+-----------------------+   +-----------------------+   +-----------------------+
| id (PK, UUID)         |   | id (PK, UUID)         |   | id (PK, UUID)         |
| full_name_en (TEXT)   |   | type (TEXT)           |   | category (TEXT)       |
| full_name_ar (TEXT)   |   | title_en (TEXT)       |   | name_en (TEXT)        |
| headline_en (TEXT)    |   | title_ar (TEXT)       |   | name_ar (TEXT)        |
| headline_ar (TEXT)    |   | institution_en (TEXT) |   | proficiency_level(INT)|
| bio_en (TEXT)         |   | institution_ar (TEXT) |   | display_order (INT)   |
| bio_ar (TEXT)         |   | start_date (DATE)     |   +-----------------------+
| avatar_url (TEXT)     |   | end_date (DATE)       |
| resume_url (TEXT)     |   | is_current (BOOL)     |   +-----------------------+
| email (TEXT)          |   | description_en (TEXT) |   |   contact_messages    |
| location_en (TEXT)    |   | description_ar (TEXT) |   +-----------------------+
| location_ar (TEXT)    |   | display_order (INT)   |   | id (PK, UUID)         |
+-----------------------+   +-----------------------+   | name (TEXT)           |
                                                        | email (TEXT)          |
                                                        | subject (TEXT)        |
                                                        | message (TEXT)        |
                                                        | ip_hash (TEXT)        |
                                                        | is_read (BOOL)        |
                                                        | created_at (TIMESTAMPTZ)
                                                        +-----------------------+
```

---

## 3. Table Schema & Column Specifications

### 3.1. `profiles`
Stores official bilingual identity, biographical data, and contact pointers for Abdulghani Al-Shibami.
- `id`: `UUID PRIMARY KEY DEFAULT gen_random_uuid()`
- `full_name_en` / `full_name_ar`: `TEXT NOT NULL`
- `headline_en` / `headline_ar`: `TEXT NOT NULL`
- `bio_en` / `bio_ar`: `TEXT NOT NULL`
- `avatar_url`: `TEXT NULL` (Pointers to `/images/profile/abdulghani-portrait.webp`)
- `resume_url`: `TEXT NULL` (Pointers to `/docs/Abdulghani_Al-Shibami_CV.pdf`)
- `email`: `TEXT NOT NULL`
- `location_en` / `location_ar`: `TEXT NULL`
- `created_at` / `updated_at`: `TIMESTAMPTZ DEFAULT now() NOT NULL`

### 3.2. `project_categories`
Taxonomic categorization for projects.
- `id`: `UUID PRIMARY KEY DEFAULT gen_random_uuid()`
- `slug`: `TEXT UNIQUE NOT NULL` (`enterprise-desktop`, `ai-research`, `e-commerce`, `academic-systems`)
- `name_en` / `name_ar`: `TEXT NOT NULL`
- `display_order`: `INTEGER DEFAULT 0 NOT NULL`

### 3.3. `technologies`
Catalog of languages, databases, libraries, and architectural standards.
- `id`: `UUID PRIMARY KEY DEFAULT gen_random_uuid()`
- `name`: `TEXT UNIQUE NOT NULL` (e.g. `C#`, `WinForms`, `Oracle Database`, `Python`, `PyQt6`, `Next.js`, `TypeScript`)
- `category`: `TEXT NOT NULL` (`language`, `framework`, `database`, `tool`)
- `icon_name`: `TEXT NULL`

### 3.4. `projects`
Core case study and project repository containing all 5 canonical verified projects.
- `id`: `UUID PRIMARY KEY DEFAULT gen_random_uuid()`
- `slug`: `TEXT UNIQUE NOT NULL` (`campus-it-tracker`, `metaalgorithm-lab`, `novatech`, `cafena`, `gp`)
- `category_id`: `UUID REFERENCES project_categories(id) ON DELETE SET NULL`
- `title_en` / `title_ar`: `TEXT NOT NULL`
- `short_desc_en` / `short_desc_ar`: `TEXT NOT NULL`
- `problem_en` / `problem_ar`: `TEXT NOT NULL`
- `solution_en` / `solution_ar`: `TEXT NOT NULL`
- `architecture_en` / `architecture_ar`: `TEXT NOT NULL`
- `challenges_en` / `challenges_ar`: `JSONB DEFAULT '[]'::jsonb NOT NULL`
- `results_en` / `results_ar`: `JSONB DEFAULT '[]'::jsonb NOT NULL`
- `year`: `INTEGER NOT NULL`
- `status`: `TEXT NOT NULL`
- `featured`: `BOOLEAN DEFAULT false NOT NULL`
- `display_order`: `INTEGER DEFAULT 0 NOT NULL`
- `github_url`: `TEXT NULL`
- `live_url`: `TEXT NULL`
- `demo_type`: `TEXT CHECK (demo_type IN ('real_live', 'embedded', 'interactive_simulation', 'video', 'repo', 'none')) DEFAULT 'none' NOT NULL`
- `demo_config`: `JSONB DEFAULT '{}'::jsonb NOT NULL`
- `thumbnail_url`: `TEXT NULL`

### 3.5. `project_technologies`
Composite join table establishing many-to-many project stack associations.
- `project_id`: `UUID REFERENCES projects(id) ON DELETE CASCADE`
- `technology_id`: `UUID REFERENCES technologies(id) ON DELETE CASCADE`
- `PRIMARY KEY (project_id, technology_id)`

### 3.6. `skills`
Technical competencies with proficiency ratings (1-100).
- `id`: `UUID PRIMARY KEY DEFAULT gen_random_uuid()`
- `category`: `TEXT NOT NULL` (`Engineering`, `Programming`, `Database`, `AI & ML`, `Web & Cloud`)
- `name_en` / `name_ar`: `TEXT NOT NULL`
- `proficiency_level`: `INTEGER CHECK (proficiency_level BETWEEN 1 AND 100) DEFAULT 80 NOT NULL`
- `display_order`: `INTEGER DEFAULT 0 NOT NULL`

### 3.7. `experiences`
Academic degrees, academic distinctions, and verified professional certifications.
- `id`: `UUID PRIMARY KEY DEFAULT gen_random_uuid()`
- `type`: `TEXT CHECK (type IN ('education', 'work', 'certification', 'honor')) NOT NULL`
- `title_en` / `title_ar`: `TEXT NOT NULL`
- `institution_en` / `institution_ar`: `TEXT NOT NULL`
- `location_en` / `location_ar`: `TEXT NULL`
- `start_date`: `DATE NOT NULL`
- `end_date`: `DATE NULL`
- `is_current`: `BOOLEAN DEFAULT false NOT NULL`
- `description_en` / `description_ar`: `TEXT NOT NULL`
- `display_order`: `INTEGER DEFAULT 0 NOT NULL`

### 3.8. `contact_messages`
Protected inbound communication inquiries from portfolio visitors.
- `id`: `UUID PRIMARY KEY DEFAULT gen_random_uuid()`
- `name`: `TEXT NOT NULL`
- `email`: `TEXT NOT NULL`
- `subject`: `TEXT NULL`
- `message`: `TEXT NOT NULL`
- `ip_hash`: `TEXT NULL`
- `is_read`: `BOOLEAN DEFAULT false NOT NULL`
- `created_at`: `TIMESTAMPTZ DEFAULT now() NOT NULL`

---

## 4. Row Level Security (RLS) Architecture

All tables in the public schema have Row Level Security enabled. This guarantees that unauthenticated network requests can never mutate portfolio data.

### Security Matrix:

| Table | Anonymous Read (`SELECT`) | Public Insert (`INSERT`) | Authenticated / Service Role |
| :--- | :---: | :---: | :---: |
| `profiles` | **ALLOWED** | DENIED | FULL ACCESS |
| `project_categories` | **ALLOWED** | DENIED | FULL ACCESS |
| `technologies` | **ALLOWED** | DENIED | FULL ACCESS |
| `projects` | **ALLOWED** | DENIED | FULL ACCESS |
| `project_technologies`| **ALLOWED** | DENIED | FULL ACCESS |
| `skills` | **ALLOWED** | DENIED | FULL ACCESS |
| `experiences` | **ALLOWED** | DENIED | FULL ACCESS |
| `contact_messages` | **DENIED** | **ALLOWED** (`WITH CHECK (true)`) | FULL ACCESS (`auth.role() = 'service_role'`) |

---

## 5. Zero-Failure Data Access Layer (DAL)

The application utilizes the **Repository Pattern** to decouple the UI layer from database vendors:

```typescript
// Core abstraction
export interface IProjectRepository {
  getProjects(): Promise<Project[]>;
  getFeaturedProjects(): Promise<Project[]>;
  getProjectBySlug(slug: string): Promise<Project | null>;
  getProjectsByCategory(categorySlug: string): Promise<Project[]>;
  getCategories(): Promise<ProjectCategory[]>;
  getCategoryBySlug(categorySlug: string): Promise<ProjectCategory | null>;
  getTechnologies(): Promise<Technology[]>;
}
```

### Execution Flow:
1. `HybridProjectRepository` invokes `getSupabaseServerClient()`.
2. If `NEXT_PUBLIC_SUPABASE_URL` or `NEXT_PUBLIC_SUPABASE_ANON_KEY` are undefined, `getSupabaseServerClient()` returns `null`.
3. `HybridProjectRepository` catches the `null` client or any network/SQL exception and immediately invokes `LocalProjectRepository`.
4. If cloud tables are empty (`data.length === 0`), `HybridProjectRepository` seamlessly uses local verified data.
5. All UI pages and server components receive clean, typed `Project[]` without error states.

---

## 6. Seed Data & Idempotency Strategy

The seed script (`supabase/seed.sql`) is designed to run multiple times without creating duplicate records or throwing primary key conflicts:
- Tables with unique slugs (`project_categories`, `projects`) use `ON CONFLICT (slug) DO UPDATE SET ...`
- Tables with unique identifiers (`profiles`, `experiences`, `skills`) use deterministic UUIDs and `ON CONFLICT (id) DO UPDATE SET ...`
- `technologies` uses `ON CONFLICT (name) DO NOTHING`

### Seeded Project Roster:
1. `campus-it-tracker` (Campus IT Infrastructure Tracker) — Enterprise & Desktop Software
2. `metaalgorithm-lab` (MetaAlgorithm Lab) — AI & Algorithmic Research
3. `novatech` (NovaTech Storefront) — Modern Web & E-Commerce
4. `cafena` (Cafena Specialty Coffee) — Modern Web & E-Commerce
5. `gp` (Graduation Project Portal) — Academic Platforms & Portals

### Seeded Experience & Credentials Roster:
1. `Bachelor of Information Technology` — University of Modern Sciences (UMS)
2. `TOT Novice Trainer Certification` — International Board of Certified Trainers (IBCT)
3. `Certificate of Appreciation` — Yemen AI Summit 2026
4. `Web Development Using AI Tools` — UMS Innovation Center
5. `Innovation and Distinction Shield` — Center for Innovation and Entrepreneurship (UMS)
6. `Certificate of English Proficiency` — Yemen-America Language Institute (YALI)
