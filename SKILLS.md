# SKILLS.md — REUSABLE ENGINEERING SKILLS REGISTRY

**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System  
**Version:** 1.0.0  
**Scope:** Standardized workflows for specialized autonomous engineering tasks.

---

## Skill Directory Structure

```text
skills/
├── ui-design/
├── frontend-development/
├── backend-development/
├── database-design/
├── supabase/
├── nextjs/
├── responsive-design/
├── accessibility/
├── seo/
├── performance/
├── security/
├── testing/
├── git/
├── github/
├── vercel/
├── ci-cd/
├── documentation/
├── interactive-demos/
└── project-content/
```

---

## 1. Skill: `ui-design`
- **Purpose:** Design visual hierarchies, layout systems, and luxury Black/Royal Gold aesthetics.
- **Inputs:** Section/page requirements, brand tokens, locale mode (EN/AR), theme mode (Dark/Light).
- **Expected Output:** Tailored component styling, CSS variable definitions, aesthetic layout specifications.
- **Required Tools:** `write_to_file`, `chrome-devtools-mcp` or `browser_subagent` for visual audit.
- **Rules:** Dark mode must feel luxurious with deep obsidian black (`#0B0B0C`) and gold accents (`#D4AF37`). Light mode must use clean porcelain whites with dark slate typography. Avoid generic gradients and neon glow.
- **Validation:** Contrast ratio >= 4.5:1 for standard text (WCAG AA).
- **Common Mistakes:** Using raw yellow instead of royal gold; inverting dark mode directly for light mode.

---

## 2. Skill: `frontend-development`
- **Purpose:** Build modular, performant React/Next.js components.
- **Inputs:** UI design specs, data contracts (`types/`), state management requirements.
- **Expected Output:** Strongly-typed Next.js components in `components/` or `app/`.
- **Required Tools:** `write_to_file`, `replace_file_content`, `run_command` (lint/typecheck).
- **Rules:** Keep components modular and under 250 lines. Extract hooks and utility functions. No direct Supabase calls inside presentation components.
- **Validation:** `pnpm tsc --noEmit` exits with code 0; zero ESLint warnings.
- **Common Mistakes:** Putting database client instantiation directly inside interactive client components.

---

## 3. Skill: `backend-development`
- **Purpose:** Construct server actions, route handlers, data access layers, and contact handling.
- **Inputs:** Request payload specifications, database models, security requirements.
- **Expected Output:** Next.js Route Handlers (`app/api/`) and Server Actions (`lib/actions/`).
- **Required Tools:** `write_to_file`, `replace_file_content`, `postman-mcp-server`.
- **Rules:** All input must be validated via Zod schemas. Enforce rate limiting and spam honeypots on public endpoints.
- **Validation:** Handlers return typed JSON responses with standardized error handling (`{ success: boolean, data?: T, error?: string }`).
- **Common Mistakes:** Unsanitized database input, returning raw error stack traces to clients.

---

## 4. Skill: `database-design`
- **Purpose:** Architect normalized, performant, and secure PostgreSQL data models.
- **Inputs:** Business entities (projects, skills, education, certifications, messages, profile).
- **Expected Output:** Migration SQL scripts (`supabase/migrations/`) and ERD documentation.
- **Required Tools:** `write_to_file`, `run_command`.
- **Rules:** Every table must have a primary key (`uuid` or `id`), `created_at`, and `updated_at`. Include foreign keys, indexes on queried columns (e.g., `slug`, `category`), and enforce RLS.
- **Validation:** SQL syntax is valid PostgreSQL; RLS policies explicitly defined.
- **Common Mistakes:** Missing indexes on foreign keys and slugs; omitting Row Level Security.

---

## 5. Skill: `supabase`
- **Purpose:** Manage database migrations, storage buckets, and client configurations.
- **Inputs:** Migration scripts, bucket requirements (public for media, private for contact attachments).
- **Expected Output:** Supabase migration files and client adapters (`lib/supabase/`).
- **Required Tools:** `write_to_file`, `run_command`.
- **Rules:** Public client only uses `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`. Admin/service-role keys are restricted to server-side code only.
- **Validation:** Client initializes safely with graceful fallback if credentials are absent.
- **Common Mistakes:** Bundling service role key in client bundles; neglecting storage bucket RLS policies.

---

## 6. Skill: `nextjs`
- **Purpose:** Configure Next.js App Router, routing, server components, and dynamic segment optimization.
- **Inputs:** Route requirements, i18n structure (`/[locale]/`), metadata specifications.
- **Expected Output:** `app/[locale]/layout.tsx`, page routes, and middleware.
- **Required Tools:** `write_to_file`, `replace_file_content`, `run_command`.
- **Rules:** Default to React Server Components (RSC). Only add `'use client'` where user interaction or browser APIs (hooks, state) are required.
- **Validation:** Build completes successfully with `pnpm build`.
- **Common Mistakes:** Adding `'use client'` to entire page layouts, ruining streaming and SEO benefits.

---

## 7. Skill: `responsive-design`
- **Purpose:** Ensure seamless layout across mobile (<= 640px), tablet (641px - 1024px), and desktop (>= 1025px).
- **Inputs:** Component markup, container widths, breakpoints.
- **Expected Output:** Responsive Tailwind classes and CSS media queries.
- **Required Tools:** `chrome-devtools-mcp` (resizing viewport), `browser_subagent`.
- **Rules:** Mobile-first approach. Never cause horizontal scrolling on any device.
- **Validation:** Viewports 375px, 768px, 1280px, and 1920px tested without overflow.
- **Common Mistakes:** Hardcoded pixel widths (`w-[600px]`) that break mobile viewports.

---

## 8. Skill: `accessibility`
- **Purpose:** Guarantee compliance with WCAG 2.1 AA accessibility standards.
- **Inputs:** Interactive elements, navigation, modal dialogs, color schemes.
- **Expected Output:** ARIA attributes, semantic HTML elements, keyboard trap handlers.
- **Required Tools:** `chrome-devtools-mcp` (`lighthouse_audit`, evaluate scripts), `a11y-debugging`.
- **Rules:** All images must have meaningful alt text (or empty alt if purely decorative). Interactive elements must have visible `:focus-visible` rings. Form inputs must have explicit labels.
- **Validation:** Lighthouse Accessibility score >= 95.
- **Common Mistakes:** Using `div` with `onClick` without `role="button"`, `tabIndex`, or keyboard event listeners.

---

## 9. Skill: `seo`
- **Purpose:** Optimize discoverability, Open Graph cards, sitemaps, and structured JSON-LD data.
- **Inputs:** Page metadata (title, description, canonical URL, keywords, author profile).
- **Expected Output:** Dynamic metadata configurations (`generateMetadata`), `sitemap.ts`, `robots.ts`.
- **Required Tools:** `write_to_file`, `replace_file_content`.
- **Rules:** High-precision titles and descriptions in both English and Arabic. JSON-LD schema for `Person`, `ProfilePage`, and `CreativeWork`.
- **Validation:** Valid metadata tags rendered in SSR HTML source.
- **Common Mistakes:** Hardcoding canonical URLs without dynamic locale prefixes.

---

## 10. Skill: `performance`
- **Purpose:** Maximize Core Web Vitals (LCP < 2.0s, INP < 200ms, CLS < 0.1).
- **Inputs:** Asset assets, bundle sizes, render trees.
- **Expected Output:** Next.js Image optimizations, font preloading, code splitting.
- **Required Tools:** `chrome-devtools-mcp` (`performance_start_trace`, `debug-optimize-lcp`).
- **Rules:** Use `next/image` with proper `sizes` attribute. Preload critical fonts (Inter / Cairo).
- **Validation:** Lighthouse Performance score >= 90.
- **Common Mistakes:** Serving uncompressed oversized images or blocking fonts.

---

## 11. Skill: `security`
- **Purpose:** Safeguard application against XSS, CSRF, injection, and unauthorized data exposure.
- **Inputs:** Headers, endpoints, external iframe integrations.
- **Expected Output:** Security headers in `next.config.ts`, input sanitization, RLS policies.
- **Required Tools:** `write_to_file`, `run_command`.
- **Rules:** Implement Content Security Policy (CSP), `X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`.
- **Validation:** Security audit checklist passes in `SECURITY_AUDIT.md`.
- **Common Mistakes:** Allowing unsanitized HTML in project case studies.

---

## 12. Skill: `testing`
- **Purpose:** Validate component stability, unit logic, and critical user journeys.
- **Inputs:** Test scenarios, mock data, user flows.
- **Expected Output:** Unit and integration test suites (`vitest` / `@testing-library/react`).
- **Required Tools:** `run_command`, `chrome-devtools-mcp`.
- **Rules:** Test filter logic, theme toggle persistence, language switching, and contact form validation.
- **Validation:** Test suites pass with 0 failures.
- **Common Mistakes:** Testing implementation details instead of user-facing behavior.

---

## 13. Skill: `git`
- **Purpose:** Maintain pristine version history with semantic conventional commits.
- **Inputs:** Changed files, release notes, milestone objectives.
- **Expected Output:** Atomic, descriptive Git commits (`feat:`, `fix:`, `docs:`, `chore:`, `test:`).
- **Required Tools:** `run_command` (`git status`, `git diff`, `git add`, `git commit`).
- **Rules:** Never commit secrets, `.env` files, or broken builds.
- **Validation:** Clean `git status` after commit.
- **Common Mistakes:** Committing massive unstaged files with generic messages ("update").

---

## 14. Skill: `github`
- **Purpose:** Coordinate repository branches, PRs, and issue tracking.
- **Inputs:** Milestone definitions, branch naming conventions.
- **Expected Output:** Standardized GitHub structure (`main`, `develop`, feature branches).
- **Required Tools:** Git CLI, GitHub webhooks.
- **Rules:** Branch naming: `feature/<name>`, `fix/<name>`, `docs/<name>`.
- **Validation:** Git remotes synchronize cleanly without merge conflicts.
- **Common Mistakes:** Force-pushing to `main`.

---

## 15. Skill: `vercel`
- **Purpose:** Configure zero-config Vercel hosting, preview deployments, and edge routing.
- **Inputs:** `vercel.json`, build commands, output directories.
- **Expected Output:** Vercel deployment configuration and build scripts.
- **Required Tools:** `write_to_file`, Git repository push.
- **Rules:** Production builds must use `pnpm build`. Environment variables configured in Vercel dashboard.
- **Validation:** Build log succeeds without caching errors or missing dependencies.
- **Common Mistakes:** Omitting dynamic route static export handling if required.

---

## 16. Skill: `ci-cd`
- **Purpose:** Automate build verification, linting, testing, and migration checks on GitHub Actions.
- **Inputs:** Workflow triggers (push, pull_request).
- **Expected Output:** `.github/workflows/ci.yml` and `.github/workflows/database.yml`.
- **Required Tools:** `write_to_file`.
- **Rules:** Workflows must cache PNPM dependencies and run lint, typecheck, and build steps sequentially.
- **Validation:** CI YAML passes GitHub workflow schema validation.
- **Common Mistakes:** Hardcoding secret tokens in CI scripts instead of GitHub Secrets.

---

## 17. Skill: `documentation`
- **Purpose:** Maintain exhaustive, synchronized technical documentation across `docs/` and root files.
- **Inputs:** Architectural updates, newly added features, schema changes.
- **Expected Output:** Formatted Markdown documents with cross-references and diagrams.
- **Required Tools:** `write_to_file`, `replace_file_content`.
- **Rules:** Documentation is the single source of truth. If code changes, documentation MUST change in the same turn.
- **Validation:** Markdown links valid, no broken references.
- **Common Mistakes:** Allowing documentation to drift from code implementation.

---

## 18. Skill: `interactive-demos`
- **Purpose:** Implement safe, isolated project demonstrations and desktop software simulations.
- **Inputs:** Project slug, demo type (`real_live`, `embedded`, `interactive_simulation`, `video`, `repo`), mock data.
- **Expected Output:** Sandboxed demo components under `components/features/demos/` and route `/projects/[slug]/demo`.
- **Required Tools:** `write_to_file`, `chrome-devtools-mcp`.
- **Rules:** Never fake browser execution of desktop software (WinForms/WPF/Python). Explicitly label simulations as "Interactive Web Simulation". Sandbox state to prevent memory leaks.
- **Validation:** Demo loads in < 1 second, responds to mock input, and provides a clear reset/exit flow.
- **Common Mistakes:** Embedding external URLs that have `X-Frame-Options: DENY`, resulting in blank gray frames.

---

## 19. Skill: `project-content`
- **Purpose:** Structure truthful, high-impact project case studies, technical summaries, and taxonomy.
- **Inputs:** Project details, architecture diagrams, verified technical accomplishments.
- **Expected Output:** Structured data entries in database seed and local fallback files.
- **Required Tools:** `write_to_file`, `replace_file_content`.
- **Rules:** NEVER fabricate employment, clients, metrics, or technologies. Use verified data or mark placeholders in `docs/33_OPEN_QUESTIONS.md`.
- **Validation:** Both English and Arabic translations exist for every project record.
- **Common Mistakes:** Generating generic boilerplate descriptions with no real technical substance.
