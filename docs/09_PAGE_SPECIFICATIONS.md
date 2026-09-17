# 09 — PAGE SPECIFICATIONS

**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System  

---

## 1. Page: Home (`/[locale]/page.tsx`)
- **Route:** `/[locale]`
- **Render Mode:** React Server Component with Client interactive controls.
- **Hero Module:**
  - Owner Name: "Abdulghani Al-Shibami" / "عبدالغني الشبامي"
  - Tagline: "Senior Software Engineer & Systems Architect" / "مهندس برمجيات ونظم ذكاء اصطناعي"
  - Profile Image slot: Avatar component referencing `public/images/profile/` with fallback `[PROFILE_IMAGE]` badge.
  - CTAs: Primary "View Projects" (`/[locale]/projects`), Secondary "Contact Me" (`/[locale]/contact`), GitHub link.
- **Metrics Strip:** Years of experience, completed software systems, technologies mastered.
- **Featured Projects Grid:** Top 4 starred projects with interactive demo tags.
- **Skills Snapshot:** Quick interactive chip cloud of primary languages and frameworks.
- **Academics & Highlights:** Short summary of academic status and certifications.

---

## 2. Page: Projects Catalog (`/[locale]/projects/page.tsx`)
- **Route:** `/[locale]/projects`
- **Render Mode:** Server Component parent + Client `ProjectFilter` island.
- **Controls:**
  - Search input with real-time title/technology matching.
  - Category Pills: All, Web, Desktop / C#, Python, AI / ML, Databases, Mobile.
- **Grid:** Responsive auto-fill grid rendering `ProjectCard` components.
- **Empty State:** Clean empty state illustration when search yields no matches.

---

## 3. Page: Project Case Study (`/[locale]/projects/[slug]/page.tsx`)
- **Route:** `/[locale]/projects/[slug]`
- **Render Mode:** Dynamic Server Component with `generateStaticParams` / `generateMetadata`.
- **Sections:**
  1. **Hero:** Title, category, year, demo link, repo link, architecture badge.
  2. **Problem & Challenge:** What operational or technical difficulty this system solved.
  3. **Architecture & Solution:** Deep technical breakdown, database schema decisions, design patterns.
  4. **Key Features & Code Architecture:** Tabbed/bulleted breakdown of core innovations.
  5. **Outcomes & Learnings:** Performance gains, user impact, lessons learned.
  6. **Interactive Demo CTA:** Prominent banner linking to `/projects/[slug]/demo`.

---

## 4. Page: Interactive Demo View (`/[locale]/projects/[slug]/demo/page.tsx`)
- **Route:** `/[locale]/projects/[slug]/demo`
- **Render Mode:** Client Component sandbox inside minimal distraction-free chrome.
- **Header:** Back to Case Study link, Demo Mode Indicator badge, Fullscreen toggle.
- **Body (`DemoViewer`):**
  - If `REAL LIVE DEMO`: External launch or embedded frame.
  - If `INTERACTIVE SIMULATION`: Fully simulated UI (sidebar, data table, forms, search, charts) replicating desktop C# / Python application flows with isolated mock data.
- **Disclaimer Banner:** Explicit notification explaining simulation vs live binary execution.

---

## 5. Page: Contact (`/[locale]/contact/page.tsx`)
- **Route:** `/[locale]/contact`
- **Form:** Name, Email, Subject, Message.
- **Validation:** Real-time feedback, Zod schema matching.
- **Spam Protection:** Hidden honeypot field + timestamp rate limiter.
- **Feedback:** Animated success toast / accessible failure alert.
