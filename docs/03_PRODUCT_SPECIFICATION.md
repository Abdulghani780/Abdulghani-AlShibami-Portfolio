# 03 — PRODUCT SPECIFICATION

**Project Owner:** عبدالغني الشبامي | Abdulghani Al-Shibami  
**Platform:** Autonomous Personal Portfolio Engineering Platform  

---

## 1. Product Personas & Use Cases

### Persona 1: Tech Recruiter / Hiring Manager
- **Goal:** Rapidly assess technical capability, academic background, project caliber, and contact details.
- **Key Flow:** Landing -> Hero CTA ("Explore Projects") -> Project Grid -> View Case Study -> Download CV.

### Persona 2: Senior Technical Lead / Architect
- **Goal:** Evaluate code quality, architectural depth, problem-solving ability, and system design complexity.
- **Key Flow:** Landing -> Case Study -> Technical Architecture Diagram -> Interactive Demo Simulation -> GitHub Repository Link.

### Persona 3: Academic / Research Peer
- **Goal:** Review educational achievements, research/AI projects, and academic background.
- **Key Flow:** Landing -> Academic Experience -> AI/ML Project Deep Dives.

---

## 2. Information Architecture & Navigation

```text
/ (Redirects to /[locale])
├── /[locale]
│   ├── /                 (Homepage: Hero, About, Skills, Featured Projects, Academics, Contact)
│   ├── /about            (Detailed Bio, Philosophy, Background)
│   ├── /skills           (Interactive Skill Taxonomy & Proficiencies)
│   ├── /projects         (Searchable, Filterable Project Catalog)
│   ├── /projects/[slug]  (Deep Technical Case Study)
│   ├── /projects/[slug]/demo (Sandboxed Interactive Demo / Simulation)
│   ├── /experience       (Career, Education, Academic Milestones, Certifications)
│   ├── /contact          (Direct Contact Form & Verified Channels)
│   └── /cv               (Web Resume & Downloadable PDF)
└── /api
    └── /contact          (Validated Contact Submission Endpoint)
```

---

## 3. Bilingual Routing Structure
- Supported Locales: `en` (Default), `ar` (Arabic).
- Locale detection handles URL prefix: `/en/*` or `/ar/*`.
- Root path `/` redirects to detected or default locale `/en`.
- Directionality:
  - `en` maps to `<html lang="en" dir="ltr">`
  - `ar` maps to `<html lang="ar" dir="rtl">`
