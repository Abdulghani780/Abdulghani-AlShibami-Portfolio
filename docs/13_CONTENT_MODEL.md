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

---

## 3. Verified Project Content Inventory (Phase 10.1 Harmonization)

Following the Phase 10.1 Owner Project Catalog Harmonization, the portfolio content repository is strictly bounded to the 5 authentic projects verified in `Projects/`:

| Project Slug | Title (EN / AR) | Category | Primary Technologies | Demo Type |
|---|---|---|---|---|
| `campus-it-tracker` | Campus IT Infrastructure & ITIL Asset Tracker / نظام تتبع البنية التحتية للحرم الجامعي | `desktop-systems` | C# .NET 4.8, WinForms, Oracle 10g | `interactive_simulation` |
| `metaalgorithm-lab` | MetaAlgorithm Lab / مختبر الخوارزميات وتحليل التعقيد الحسابي التجريبي | `algorithmic-computing` | Python 3.10+, PyQt6, SciPy, Matplotlib | `interactive_simulation` |
| `novatech` | NOVA TECH Cyber Gadgets / متجر نوفا تيك للأجهزة الذكية | `web-platforms` | HTML5, CSS3, Vanilla JS (ES6) | `real_live` |
| `cafena` | Cafena Specialty Coffee / كافينا لتجربة القهوة المختصة | `web-platforms` | HTML5, CSS3, Vanilla JS (ES6) | `real_live` |
| `gp` | Graduation Project Portal / منصة مشاريع التخرج الجامعية | `academic-systems` | PHP 8, MySQL 8, HTML5, CSS3, JS | `interactive_simulation` |

*Removed Projects:* `yusra`, `auraledger`, and `nexora-tech` have been permanently removed from the active content model.

### Profile Image Asset Specification
- **Source:** `Abdulghani Alshibami.jpg` (2300x1824 px, 2.78 MB JPEG).
- **Web Variants:**
  - `public/images/profile/abdulghani-profile.webp` (1200x952 px)
  - `public/images/profile/abdulghani-profile-hero.webp` (800x1000 px, 4:5 aspect ratio)
  - `public/images/profile/abdulghani-profile-thumb.webp` (400x400 px, 1:1 aspect ratio)
- **Alt Text:**
  - English: `Abdulghani Al-Shibami`
  - Arabic: `عبدالغني الشبامي`
