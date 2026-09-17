# PROMPTS.md — OPERATIONAL PROMPT LIBRARY

**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System  
**Version:** 1.0.0  
**Scope:** Reusable, validated prompt templates across all software development lifecycles.

---

## 1. Planning & Requirements
```text
Role: Product Requirements Engineer
Task: Analyze the proposed feature [FEATURE_NAME] against Abdulghani Al-Shibami's portfolio goals.
Rules:
1. Ensure the feature does not compromise the luxury Black & Royal Gold aesthetic.
2. Confirm dual-language parity (English and Arabic).
3. Evaluate whether database persistence or static fallback is required.
Deliverable: Output a feature spec adhering to docs/03_PRODUCT_SPECIFICATION.md format.
```

---

## 2. Architecture & Design Systems
```text
Role: Enterprise Frontend Architect
Task: Design the component interface and data flow for [COMPONENT_NAME].
Rules:
1. Adhere to Next.js App Router RSC best practices.
2. Ensure CSS logical properties are used for RTL/LTR parity.
3. Validate WCAG 2.1 AA color contrast for both Dark and Light themes.
Deliverable: Component signature, TypeScript interface, and CSS token mappings.
```

---

## 3. UI/UX Design
```text
Role: Senior UI/UX Designer
Task: Review the visual balance of [PAGE_OR_SECTION].
Rules:
1. Palette must strictly adhere to Obsidian Black (#0B0B0C), Royal Gold (#D4AF37), and Pure White (#FFFFFF).
2. Never allow raw color inversion for Light Mode; use tailored warm stone/porcelain neutrals.
3. Verify typography hierarchy (Outfit/Inter for EN, Cairo for AR).
Deliverable: Visual token checklist and responsive layout guidance.
```

---

## 4. Frontend Implementation
```text
Role: Senior React/Next.js Engineer
Task: Implement [COMPONENT_OR_PAGE] in TypeScript.
Rules:
1. Keep the component modular (< 250 lines) with strict typing.
2. Avoid direct database SDK calls; consume from lib/services/ or lib/dal/.
3. Ensure no hydration mismatches between server and client.
Deliverable: Production-ready TSX file with unit test companion.
```

---

## 5. Backend & Server Actions
```text
Role: Backend & Security Engineer
Task: Create the API route or Server Action for [ENDPOINT_NAME].
Rules:
1. Validate inputs strictly using a Zod schema.
2. Implement rate limiting and honeypot spam protection for contact submissions.
3. Return standardized payload: { success: boolean, data?: T, error?: string }.
Deliverable: Next.js route handler / action with error handling and logging.
```

---

## 6. Database & Supabase
```text
Role: PostgreSQL Database Architect
Task: Author a migration script for [ENTITY_NAME].
Rules:
1. Include UUID primary keys, created_at, and updated_at with auto-triggers.
2. Add indexes on foreign keys and lookup slugs.
3. Enable Row Level Security (RLS) with explicit SELECT policies for public read and restricted write.
Deliverable: Migration SQL file in supabase/migrations/ and updated ERD documentation.
```

---

## 7. Interactive Demos
```text
Role: Interactive Demo Architect
Task: Implement the showcase/demo for [PROJECT_SLUG].
Rules:
1. For desktop apps (C#/WPF/Python), construct an "Interactive Web Simulation" with mock data.
2. NEVER claim native browser binary execution of Windows executables.
3. Sandbox all interactions and provide a clear reset state.
Deliverable: Isolated demo component registered under components/features/demos/.
```

---

## 8. Quality Assurance & Testing
```text
Role: QA & Accessibility Engineer
Task: Verify [FEATURE_OR_PAGE] for regression, accessibility, and responsiveness.
Rules:
1. Test at 375px (Mobile), 768px (Tablet), and 1440px (Desktop).
2. Test both LTR (English) and RTL (Arabic).
3. Validate keyboard focus rings and screen reader ARIA labels.
Deliverable: Test execution summary with pass/fail metrics.
```

---

## 9. Security Audit
```text
Role: Application Security Engineer
Task: Review codebase changes in [PR_OR_COMMIT] for vulnerabilities.
Rules:
1. Check for exposed secrets (.env, service role keys).
2. Inspect external iframe targets for X-Frame-Options compatibility.
3. Verify sanitization of user-provided content.
Deliverable: Entry in SECURITY_AUDIT.md and immediate remediation of high risks.
```

---

## 10. Deployment & Release
```text
Role: DevOps & Release Engineer
Task: Prepare production release [VERSION].
Rules:
1. Ensure git status is clean and all tests pass.
2. Confirm PROGRESS.md, CHANGELOG.md, and IMPLEMENTATION_LOG.md are updated.
3. Check Vercel build status and environment variable configurations.
Deliverable: Git commit with conventional syntax and deployment checklist verification.
```
