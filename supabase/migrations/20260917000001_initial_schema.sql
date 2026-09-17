-- ==============================================================================
-- ABDULGHANI AL-SHIBAMI PORTFOLIO PLATFORM — INITIAL DATABASE SCHEMA
-- Migration: 20260917000001_initial_schema.sql
-- Engine: PostgreSQL 15+ (Supabase)
-- ==============================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Profiles Table
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name_en TEXT NOT NULL,
    full_name_ar TEXT NOT NULL,
    headline_en TEXT NOT NULL,
    headline_ar TEXT NOT NULL,
    bio_en TEXT NOT NULL,
    bio_ar TEXT NOT NULL,
    avatar_url TEXT NULL,
    resume_url TEXT NULL,
    email TEXT NOT NULL,
    location_en TEXT NULL,
    location_ar TEXT NULL,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Project Categories Table
CREATE TABLE IF NOT EXISTS public.project_categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT UNIQUE NOT NULL,
    name_en TEXT NOT NULL,
    name_ar TEXT NOT NULL,
    display_order INTEGER DEFAULT 0 NOT NULL,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Technologies Master Table
CREATE TABLE IF NOT EXISTS public.technologies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT UNIQUE NOT NULL,
    category TEXT NOT NULL,
    icon_name TEXT NULL,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Projects Master Table
CREATE TABLE IF NOT EXISTS public.projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT UNIQUE NOT NULL,
    category_id UUID REFERENCES public.project_categories(id) ON DELETE SET NULL,
    title_en TEXT NOT NULL,
    title_ar TEXT NOT NULL,
    short_desc_en TEXT NOT NULL,
    short_desc_ar TEXT NOT NULL,
    problem_en TEXT NOT NULL,
    problem_ar TEXT NOT NULL,
    solution_en TEXT NOT NULL,
    solution_ar TEXT NOT NULL,
    architecture_en TEXT NOT NULL,
    architecture_ar TEXT NOT NULL,
    challenges_en JSONB DEFAULT '[]'::jsonb NOT NULL,
    challenges_ar JSONB DEFAULT '[]'::jsonb NOT NULL,
    results_en JSONB DEFAULT '[]'::jsonb NOT NULL,
    results_ar JSONB DEFAULT '[]'::jsonb NOT NULL,
    year INTEGER NOT NULL,
    status TEXT DEFAULT 'Completed' NOT NULL,
    featured BOOLEAN DEFAULT false NOT NULL,
    display_order INTEGER DEFAULT 0 NOT NULL,
    github_url TEXT NULL,
    live_url TEXT NULL,
    demo_type TEXT CHECK (demo_type IN ('real_live', 'embedded', 'interactive_simulation', 'video', 'repo', 'none')) DEFAULT 'none' NOT NULL,
    demo_config JSONB DEFAULT '{}'::jsonb NOT NULL,
    thumbnail_url TEXT NULL,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. Project Technologies Join Table
CREATE TABLE IF NOT EXISTS public.project_technologies (
    project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE,
    technology_id UUID REFERENCES public.technologies(id) ON DELETE CASCADE,
    PRIMARY KEY (project_id, technology_id)
);

-- 6. Skills Table
CREATE TABLE IF NOT EXISTS public.skills (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    category TEXT NOT NULL,
    name_en TEXT NOT NULL,
    name_ar TEXT NOT NULL,
    proficiency_level INTEGER CHECK (proficiency_level BETWEEN 1 AND 100) DEFAULT 80 NOT NULL,
    display_order INTEGER DEFAULT 0 NOT NULL,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 7. Experiences Table (Education, Work, Honors, Certifications)
CREATE TABLE IF NOT EXISTS public.experiences (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    type TEXT CHECK (type IN ('education', 'work', 'certification', 'honor')) NOT NULL,
    title_en TEXT NOT NULL,
    title_ar TEXT NOT NULL,
    institution_en TEXT NOT NULL,
    institution_ar TEXT NOT NULL,
    location_en TEXT NULL,
    location_ar TEXT NULL,
    start_date DATE NOT NULL,
    end_date DATE NULL,
    is_current BOOLEAN DEFAULT false NOT NULL,
    description_en TEXT NOT NULL,
    description_ar TEXT NOT NULL,
    display_order INTEGER DEFAULT 0 NOT NULL,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 8. Contact Messages Table (Protected)
CREATE TABLE IF NOT EXISTS public.contact_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NULL,
    message TEXT NOT NULL,
    ip_hash TEXT NULL,
    is_read BOOLEAN DEFAULT false NOT NULL,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Performance Indexes
CREATE INDEX IF NOT EXISTS idx_projects_slug ON public.projects(slug);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON public.projects(featured) WHERE featured = true;
CREATE INDEX IF NOT EXISTS idx_projects_category ON public.projects(category_id);
CREATE INDEX IF NOT EXISTS idx_categories_slug ON public.project_categories(slug);
CREATE INDEX IF NOT EXISTS idx_contact_messages_created ON public.contact_messages(created_at DESC);

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.technologies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_technologies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.experiences ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Public Read Policies (Allow unauthenticated read for public content)
CREATE POLICY "Public profiles are readable by everyone" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Public categories are readable by everyone" ON public.project_categories FOR SELECT USING (true);
CREATE POLICY "Public technologies are readable by everyone" ON public.technologies FOR SELECT USING (true);
CREATE POLICY "Public projects are readable by everyone" ON public.projects FOR SELECT USING (true);
CREATE POLICY "Public project_technologies are readable by everyone" ON public.project_technologies FOR SELECT USING (true);
CREATE POLICY "Public skills are readable by everyone" ON public.skills FOR SELECT USING (true);
CREATE POLICY "Public experiences are readable by everyone" ON public.experiences FOR SELECT USING (true);

-- Contact Messages Policy (Public can insert, but only service_role / authenticated can read)
CREATE POLICY "Anyone can submit contact message" ON public.contact_messages FOR INSERT WITH CHECK (true);
CREATE POLICY "Only authenticated service role can read contact messages" ON public.contact_messages FOR SELECT USING (auth.role() = 'service_role');
