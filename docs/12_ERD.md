# 12 — ENTITY RELATIONSHIP DIAGRAM (ERD)

**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System  

---

## 1. Visual Entity Relationship Model

```mermaid
erDiagram
    PROFILES {
        uuid id PK
        text full_name_en
        text full_name_ar
        text headline_en
        text headline_ar
        text bio_en
        text bio_ar
        text avatar_url
        text resume_url
        text email
        timestamptz created_at
    }

    PROJECT_CATEGORIES ||--o{ PROJECTS : categorizes
    PROJECT_CATEGORIES {
        uuid id PK
        text slug UK
        text name_en
        text name_ar
        integer display_order
    }

    PROJECTS ||--|{ PROJECT_TECHNOLOGIES : utilizes
    PROJECTS {
        uuid id PK
        text slug UK
        uuid category_id FK
        text title_en
        text title_ar
        text short_desc_en
        text short_desc_ar
        text problem_en
        text solution_en
        text architecture_en
        text demo_type
        jsonb demo_config
        boolean featured
        integer year
    }

    TECHNOLOGIES ||--|{ PROJECT_TECHNOLOGIES : categorized_in
    TECHNOLOGIES {
        uuid id PK
        text name UK
        text category
        text icon_name
    }

    PROJECT_TECHNOLOGIES {
        uuid project_id PK,FK
        uuid technology_id PK,FK
    }

    SKILLS {
        uuid id PK
        text category
        text name_en
        text name_ar
        integer proficiency_level
    }

    EXPERIENCES {
        uuid id PK
        text type
        text title_en
        text title_ar
        text institution_en
        text institution_ar
        date start_date
        date end_date
        boolean is_current
    }

    CONTACT_MESSAGES {
        uuid id PK
        text name
        text email
        text subject
        text message
        boolean is_read
        timestamptz created_at
    }
```

---

## 2. Integrity Rules
1. Deleting a category sets `category_id` in `projects` to NULL (preventing cascade loss of case studies).
2. Deleting a project cascades into `project_technologies` join records cleanly.
3. Slugs must be alphanumeric with hyphens, normalized to lower-case.
