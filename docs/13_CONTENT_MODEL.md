# 13 — CONTENT MODEL & DATA CONTRACTS

**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System  

---

## 1. Content Integrity Principles
1. **Never Fabricate Data:** Do not invent false companies, fake client claims, or artificial statistics.
2. **Bilingual Parity:** Every content entry MUST contain both English (`_en`) and Arabic (`_ar`) translations.
3. **Structured Fallback:** All content models map 1:1 between the database schema and TypeScript interface models.

---

## 2. Core TypeScript Interfaces

```typescript
export type Locale = 'en' | 'ar';

export type DemoType = 
  | 'real_live' 
  | 'embedded' 
  | 'interactive_simulation' 
  | 'video' 
  | 'repo' 
  | 'none';

export interface ProjectCategory {
  id: string;
  slug: string;
  name: {
    en: string;
    ar: string;
  };
  displayOrder: number;
}

export interface Technology {
  id: string;
  name: string;
  category: 'Language' | 'Framework' | 'Database' | 'Tool' | 'Cloud';
  iconName?: string;
}

export interface ProjectCaseStudy {
  id: string;
  slug: string;
  categorySlug: string;
  title: {
    en: string;
    ar: string;
  };
  shortDescription: {
    en: string;
    ar: string;
  };
  problem: {
    en: string;
    ar: string;
  };
  solution: {
    en: string;
    ar: string;
  };
  architecture: {
    en: string;
    ar: string;
  };
  challenges: {
    en: string[];
    ar: string[];
  };
  results: {
    en: string[];
    ar: string[];
  };
  year: number;
  status: 'Completed' | 'In Progress' | 'Maintained';
  featured: boolean;
  technologies: Technology[];
  githubUrl?: string;
  liveUrl?: string;
  demoType: DemoType;
  demoConfig?: Record<string, unknown>;
  thumbnailUrl?: string;
}

export interface SkillItem {
  id: string;
  category: 'Frontend' | 'Backend' | 'Systems' | 'AI / ML' | 'Databases' | 'DevOps';
  name: {
    en: string;
    ar: string;
  };
  proficiency: number; // 1-100
}

export interface ExperienceItem {
  id: string;
  type: 'education' | 'work' | 'certification' | 'honor';
  title: {
    en: string;
    ar: string;
  };
  institution: {
    en: string;
    ar: string;
  };
  location?: {
    en: string;
    ar: string;
  };
  startDate: string;
  endDate?: string;
  isCurrent: boolean;
  description: {
    en: string;
    ar: string;
  };
}
```
