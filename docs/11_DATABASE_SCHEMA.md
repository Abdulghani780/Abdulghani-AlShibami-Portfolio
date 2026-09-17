# 11 — DATABASE SCHEMA SPECIFICATION

**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System  
**Database Engine:** PostgreSQL 15+ (via Supabase)  
**Security Model:** Row Level Security (RLS) on all public-facing tables  

---

## 1. Table Definitions

### 1.1. `profiles`
Represents the portfolio owner's core identity, bio, and executive contact information.
- `id`: `UUID PRIMARY KEY DEFAULT gen_random_uuid()`
- `full_name_en`: `TEXT NOT NULL`
- `full_name_ar`: `TEXT NOT NULL`
- `headline_en`: `TEXT NOT NULL`
- `headline_ar`: `TEXT NOT NULL`
- `bio_en`: `TEXT NOT NULL`
- `bio_ar`: `TEXT NOT NULL`
- `avatar_url`: `TEXT NULL`
- `resume_url`: `TEXT NULL`
- `email`: `TEXT NOT NULL`
- `location_en`: `TEXT NULL`
- `location_ar`: `TEXT NULL`
- `created_at`: `TIMESTAMPTZ DEFAULT now() NOT NULL`
- `updated_at`: `TIMESTAMPTZ DEFAULT now() NOT NULL`

### 1.2. `project_categories`
Taxonomy for classifying engineering projects.
- `id`: `UUID PRIMARY KEY DEFAULT gen_random_uuid()`
- `slug`: `TEXT UNIQUE NOT NULL` (e.g. `web`, `desktop`, `csharp-dotnet`, `python`, `ai-ml`, `databases`)
- `name_en`: `TEXT NOT NULL`
- `name_ar`: `TEXT NOT NULL`
- `display_order`: `INTEGER DEFAULT 0 NOT NULL`

### 1.3. `technologies`
Master catalog of tools, languages, frameworks, and libraries.
- `id`: `UUID PRIMARY KEY DEFAULT gen_random_uuid()`
- `name`: `TEXT UNIQUE NOT NULL` (e.g. `Next.js`, `C#`, `WPF`, `Python`, `PostgreSQL`)
- `category`: `TEXT NOT NULL` (e.g. `Language`, `Framework`, `Database`, `Tool`)
- `icon_name`: `TEXT NULL` (Lucide icon identifier or SVG path)

### 1.4. `projects`
Core engineering project catalog and comprehensive case study records.
- `id`: `UUID PRIMARY KEY DEFAULT gen_random_uuid()`
- `slug`: `TEXT UNIQUE NOT NULL`
- `category_id`: `UUID REFERENCES project_categories(id) ON DELETE SET NULL`
- `title_en`: `TEXT NOT NULL`
- `title_ar`: `TEXT NOT NULL`
- `short_desc_en`: `TEXT NOT NULL`
- `short_desc_ar`: `TEXT NOT NULL`
- `problem_en`: `TEXT NOT NULL`
- `problem_ar`: `TEXT NOT NULL`
- `solution_en`: `TEXT NOT NULL`
- `solution_ar`: `TEXT NOT NULL`
- `architecture_en`: `TEXT NOT NULL`
- `architecture_ar`: `TEXT NOT NULL`
- `challenges_en`: `TEXT NOT NULL`
- `challenges_ar`: `TEXT NOT NULL`
- `results_en`: `TEXT NOT NULL`
- `results_ar`: `TEXT NOT NULL`
- `year`: `INTEGER NOT NULL`
- `status`: `TEXT DEFAULT 'Completed' NOT NULL`
- `featured`: `BOOLEAN DEFAULT false NOT NULL`
- `display_order`: `INTEGER DEFAULT 0 NOT NULL`
- `github_url`: `TEXT NULL`
- `live_url`: `TEXT NULL`
- `demo_type`: `TEXT CHECK (demo_type IN ('real_live', 'embedded', 'interactive_simulation', 'video', 'repo', 'none')) DEFAULT 'none' NOT NULL`
- `demo_config`: `JSONB DEFAULT '{}'::jsonb NOT NULL`
- `thumbnail_url`: `TEXT NULL`
- `created_at`: `TIMESTAMPTZ DEFAULT now() NOT NULL`
- `updated_at`: `TIMESTAMPTZ DEFAULT now() NOT NULL`

### 1.5. `project_technologies`
Join table establishing many-to-many relationship between projects and technologies.
- `project_id`: `UUID REFERENCES projects(id) ON DELETE CASCADE`
- `technology_id`: `UUID REFERENCES technologies(id) ON DELETE CASCADE`
- `PRIMARY KEY (project_id, technology_id)`

### 1.6. `skills`
Individual skill ratings and competencies.
- `id`: `UUID PRIMARY KEY DEFAULT gen_random_uuid()`
- `category`: `TEXT NOT NULL` (e.g. `Frontend`, `Backend`, `Systems`, `AI / ML`, `Tools`)
- `name_en`: `TEXT NOT NULL`
- `name_ar`: `TEXT NOT NULL`
- `proficiency_level`: `INTEGER CHECK (proficiency_level BETWEEN 1 AND 100) DEFAULT 80 NOT NULL`
- `display_order`: `INTEGER DEFAULT 0 NOT NULL`

### 1.7. `experiences`
Academic degrees, academic milestones, and engineering roles.
- `id`: `UUID PRIMARY KEY DEFAULT gen_random_uuid()`
- `type`: `TEXT CHECK (type IN ('education', 'work', 'certification', 'honor')) NOT NULL`
- `title_en`: `TEXT NOT NULL`
- `title_ar`: `TEXT NOT NULL`
- `institution_en`: `TEXT NOT NULL`
- `institution_ar`: `TEXT NOT NULL`
- `location_en`: `TEXT NULL`
- `location_ar`: `TEXT NULL`
- `start_date`: `DATE NOT NULL`
- `end_date`: `DATE NULL`
- `is_current`: `BOOLEAN DEFAULT false NOT NULL`
- `description_en`: `TEXT NOT NULL`
- `description_ar`: `TEXT NOT NULL`
- `display_order`: `INTEGER DEFAULT 0 NOT NULL`

### 1.8. `contact_messages`
Secure repository for submitted contact messages.
- `id`: `UUID PRIMARY KEY DEFAULT gen_random_uuid()`
- `name`: `TEXT NOT NULL`
- `email`: `TEXT NOT NULL`
- `subject`: `TEXT NULL`
- `message`: `TEXT NOT NULL`
- `ip_hash`: `TEXT NULL`
- `is_read`: `BOOLEAN DEFAULT false NOT NULL`
- `created_at`: `TIMESTAMPTZ DEFAULT now() NOT NULL`

---

## 2. Indexes & Performance Optimization
- `CREATE INDEX idx_projects_slug ON projects(slug);`
- `CREATE INDEX idx_projects_featured ON projects(featured) WHERE featured = true;`
- `CREATE INDEX idx_projects_category ON projects(category_id);`
- `CREATE INDEX idx_categories_slug ON project_categories(slug);`
- `CREATE INDEX idx_contact_messages_created ON contact_messages(created_at DESC);`

---

## 3. Row Level Security (RLS) Policy Specifications
- **Public Read Access:**
  - `profiles`, `project_categories`, `technologies`, `projects`, `project_technologies`, `skills`, `experiences` have RLS enabled with `FOR SELECT USING (true)` to allow public unauthenticated read.
- **Restricted Write Access:**
  - `contact_messages`: `FOR INSERT WITH CHECK (true)` allowed for public submission; `FOR SELECT USING (auth.role() = 'service_role')` strictly preventing visitors from reading contact messages.
  - All modifications (`INSERT`, `UPDATE`, `DELETE`) on portfolio entities require authenticated admin credentials or service role.
