# PREMIUM PORTFOLIO EVOLUTION & INTELLIGENT CAPABILITIES ROADMAP
**Platform:** Abdulghani Al-Shibami Autonomous Personal Engineering Platform  
**Owner:** Abdulghani Ali Mohammed Ahmed Al-Shibami  
**Standard:** Enterprise Architectural Product & Engineering Roadmap  
**Date:** September 20, 2026  
**Status:** PLANNING ONLY — APPROVED FOR ARCHITECTURAL REVIEW (NO CODE MODIFICATIONS)  

---

## 1. Vision & Strategic Objective

The portfolio of **Abdulghani Al-Shibami** currently possesses a verified, stable, and visually approved foundation (Titanium Slate, Deep Obsidian, and Electric Indigo/Gold). All 24 application routes are pre-rendered with zero runtime errors, and all 5 authentic software simulations are functional.

The objective of this roadmap is to evolve the portfolio from a static-first showcase into a **credible, intelligent, high-trust engineering asset** that:
1. **Accurately and honestly presents his professional credentials:** Highlighting his academic position (3rd-Year Bachelor of Information Technology at the University of Modern Sciences, Sana'a), his verified systems analysis & software development skills, and verified certifications (IBCT / Edraak Train-The-Trainer).
2. **Empowers multi-channel communication:** Direct Call, WhatsApp, verified Email (`samyemen987@gmail.com`), accurate LinkedIn, and GitHub.
3. **Introduces an intelligent concierge ("Abdulghani AI"):** A zero-leak, server-isolated Gemini AI assistant strictly grounded in authentic repository and profile knowledge, eliminating hallucinations.
4. **Elevates professional credibility:** Adding a verified certificate viewer, downloadable CV, and systems analysis methodology showcase without resorting to gimmicks or aesthetic overhauls.

---

## 2. Factual Profile & Knowledge Grounding Baseline

All roadmap features, data models, and AI grounding MUST strictly anchor to the following verified facts:

### A. Identity & Contact Details
- **Full Legal Name:** Abdulghani Ali Mohammed Ahmed Al-Shibami (عبدالغني علي محمد أحمد الشبامي)
- **Display Name:** Abdulghani Al-Shibami (عبدالغني الشبامي)
- **Field of Study & Practice:** Information Technology (IT)
- **Academic Institution:** University of Modern Sciences (جامعة العلوم الحديثة), Sana'a, Yemen
- **Current Academic Level:** Third-Year Information Technology Student (طالب سنة ثالثة - تكنولوجيا معلومات)
- **Primary Phone & WhatsApp:** `+967 773088202`
- **Primary Official Email:** `samyemen987@gmail.com`
- **Geographic Location:** Sana'a, Yemen (صنعاء، اليمن)
- **LinkedIn Profile:** `https://linkedin.com/in/abdulghani-al-shibami-94b4a3204`
- **GitHub Profile:** `https://github.com/Abdulghani780`

### B. Verified Technical Areas & Competencies
- **Core Engineering Disciplines:** Software Development, Systems Analysis & Design, Database Architecture, Technical Documentation, Requirements Engineering, Project Planning.
- **Programming & Scripting Languages:** C#, SQL, Python, Java, JavaScript (ES6+), PHP, Kotlin, HTML5, CSS3.
- **Desktop & Enterprise Systems:** .NET Framework / .NET Core, Windows Forms (WinForms), Bunifu UI / Guna UI, Oracle Database (10g/11g/XE), SQL Server, MySQL.
- **Mobile Development & Frameworks:** Android Development, Jetpack Compose, Flutter (academic familiarity).
- **Modeling & Architecture Standards:** UML (Unified Modeling Language), Use Case Diagrams, Data Flow Diagrams (DFD), Entity Relationship Diagrams (ERD), Architectural Decomposition.
- **Applied AI & Computer Vision Foundations:** AI fundamentals, Computer Vision concepts, TensorFlow Lite (TFLite), MediaPipe, OCR (Optical Character Recognition) pipeline concepts.
- **Creative & Technical Communication:** Graphic Design, Technical Presentation Design, Canva, Photoshop, Microsoft Word documentation.

### C. Verified Credentials & Certifications
- **Credential:** Train-The-Trainer Program: The Novice Trainer Level
- **Certifying Authority:** International Board of Certified Trainers (IBCT)
- **Issuing / Context Brand:** Edraak (إدراك)
- **Date of Issuance:** December 9, 2026 (12/9/2026)
- **Integrity Rule:** No fabricated certificate ID, score, or false accreditation claims. The actual certificate image will be displayed in an interactive verification lightbox modal.

### D. Verified Projects
1. **Campus IT Tracker:** C# WinForms & Oracle XE ITIL Infrastructure and Asset Management System.
2. **MetaAlgorithmLab:** Python, SciPy, and PyQt6 Algorithmic Complexity Benchmark Workstation.
3. **Cafena:** Luxury Arabic Specialty Coffee E-Commerce Web Portal.
4. **NovaTech:** Cybernetic Hardware & Consumer Electronics Store.
5. **Graduation Project (GP) Portal:** Full-Stack PHP & MySQL Academic Committee Review Platform.

---

## 3. Modular Knowledge Data Architecture

To prevent unmaintainable code and avoid stuffing giant monolithic strings into AI prompts or page components, the data layer will be restructured into decoupled, typed TypeScript modules:

```text
lib/data/
├── profile.ts        # Authoritative identity, bio, academic background, contact links
├── credentials.ts    # Verified certifications, IBCT/Edraak metadata, certificate images
├── skills.ts         # Categorized competencies with proficiency indicators
├── projectsData.ts   # Detailed technical specs, architectures, database schemas, links
└── methodology.ts    # Systems analysis artifacts (UML, DFD, ERD, requirements workflows)
```

### Module Specifications:
- `lib/data/profile.ts`: Contains localized bios, academic enrollment details at the University of Modern Sciences, and multi-channel communication handles.
- `lib/data/credentials.ts`: Houses the certificate registry. Each credential defines `title`, `issuer`, `platform`, `issueDate`, `assetPath`, `thumbnailPath`, and `verificationNotes`.
- `lib/data/skills.ts`: Organizes skills into 5 distinct clusters:
  1. *Enterprise Software & Databases* (C#, WinForms, Oracle, SQL, Java)
  2. *Systems Analysis & Modeling* (UML, DFD, ERD, Requirements)
  3. *Web & Distributed Systems* (JavaScript, Next.js, PHP, HTML/CSS)
  4. *Mobile & Applied Intelligence* (Android, Jetpack Compose, Python, TFLite, MediaPipe)
  5. *Documentation & Visual Design* (Technical Writing, Photoshop, Canva)

---

## 4. "Abdulghani AI" Intelligent Assistant Architecture

### Purpose & Experience Design:
"Abdulghani AI" acts as a sophisticated, discreet engineering concierge embedded in the portfolio. It allows recruiters, academic peers, and enterprise clients to ask natural-language questions about Abdulghani's education, projects, technical skills, and availability.

### Safeguards & Anti-Hallucination Guardrails:
1. **Strict Context Grounding:** The assistant will be supplied with a structured system prompt compiled server-side from `lib/data/*`.
2. **Negative Constraint Directive:** If asked about employers, salaries, unverified certifications, or projects outside the verified knowledge base, the model is strictly commanded to respond:
   > *"That information is not currently available in Abdulghani's portfolio. For direct inquiries regarding this topic, please contact Abdulghani directly via email or WhatsApp."*
3. **Zero Secret Leakage:** The client browser communicates exclusively with `/api/ai/chat`. The `GEMINI_API_KEY` remains strictly on the server.

### Technical Data Flow:

```text
┌────────────────────────────────────────────────────────┐
│ Client UI: AbdulghaniAIConcierge.tsx                   │
│ - Floating luxury glass trigger (Bottom-End corner)    │
│ - Bilingual (EN / AR) with RTL flip                    │
│ - Quick prompt chips ("Projects", "Skills", "Contact") │
└──────────────────────────┬─────────────────────────────┘
                           │
                           │ POST /api/ai/chat
                           │ Body: { message, locale, history }
                           ▼
┌────────────────────────────────────────────────────────┐
│ Next.js App Router: app/api/ai/chat/route.ts           │
│ - Server-Only Execution (Runtime: Node.js / Edge)      │
│ - Zod Request Validation (Max 800 chars)               │
│ - Sliding-window Rate Limiter (IP-based)               │
│ - Secret Handling: process.env.GEMINI_API_KEY          │
└──────────────────────────┬─────────────────────────────┘
                           │
                           │ Assembles System Prompt from lib/data/*
                           ▼
┌────────────────────────────────────────────────────────┐
│ Google Gemini API SDK (@google/genai)                  │
│ - Model: gemini-2.5-flash / gemini-2.0-flash           │
│ - Temperature: 0.2 (deterministic, fact-grounded)      │
│ - TopP: 0.8                                            │
└──────────────────────────┬─────────────────────────────┘
                           │
                           │ Return JSON / Server-Sent Events (SSE)
                           ▼
┌────────────────────────────────────────────────────────┐
│ Client UI Stream Renderer                              │
│ - Live typing effect                                   │
│ - Clickable project & contact hyperlinks in responses  │
└────────────────────────────────────────────────────────┘
```

---

## 5. Contact & Communication Enhancement

To eliminate existing placeholders and provide seamless recruiter communication, the contact layer will be upgraded with a **5-Channel Verified Action Suite**:

1. **Direct Phone Call:** `tel:+967773088202` (Formatted cleanly as `+967 773 088 202`).
2. **WhatsApp Direct Chat:** `https://wa.me/967773088202?text=Hello%20Abdulghani,%20I%20reviewed%20your%20portfolio...`
3. **Direct Email Client:** `mailto:samyemen987@gmail.com`
4. **Verified LinkedIn Profile:** `https://linkedin.com/in/abdulghani-al-shibami-94b4a3204`
5. **Verified GitHub Repository:** `https://github.com/Abdulghani780`

Each action will be explicitly labeled and execute its direct native protocol without intermediate broken redirects.

---

## 6. Comprehensive Feature Roadmap Matrix

| Feature Code | Feature Name | Priority | User Value | Complexity | Risk | Dependencies | Affected Files |
| :---: | :--- | :---: | :--- | :---: | :---: | :--- | :--- |
| **FTR-01** | Contact Data & Social Links Sync | **P0** | Essential accuracy for recruiter contact | Low | Minimal | None | `components/canonical/CanonicalFooter.tsx`<br>`components/layout/Footer.tsx`<br>`components/canonical/CanonicalHero.tsx` |
| **FTR-02** | SEO & Discovery Assets Provisioning | **P1** | Eliminates 404s, enables search indexing | Low | Minimal | None | `public/favicon.ico`<br>`app/robots.ts`<br>`app/sitemap.ts` |
| **FTR-03** | Multi-Channel Contact Toolbar | **P1** | Instant 1-click Call, WhatsApp, Email, LinkedIn | Low | Minimal | FTR-01 | `components/features/ContactToolbar.tsx`<br>`components/canonical/CanonicalFooter.tsx` |
| **FTR-04** | Structured Data Layer Refactoring | **P1** | Clean architecture for UI & AI assistant | Medium | Low | None | `lib/data/profile.ts`<br>`lib/data/credentials.ts`<br>`lib/data/skills.ts`<br>`lib/data/projectsData.ts` |
| **FTR-05** | Academic Position & Education Card | **P1** | Establishes academic credibility & context | Low | Minimal | FTR-04 | `components/canonical/CanonicalHero.tsx`<br>`components/features/EducationCard.tsx` |
| **FTR-06** | IBCT/Edraak Certificate Showcase & Lightbox | **P1** | Concrete proof of certified training | Medium | Low | FTR-04 | `components/features/credentials/CertificateViewer.tsx`<br>`components/features/credentials/CertificateModal.tsx` |
| **FTR-07** | Systems Analysis & Methodology Section | **P1** | Demonstrates UML, ERD, DFD, & specs rigor | Medium | Low | FTR-04 | `components/features/MethodologySection.tsx` |
| **FTR-08** | Downloadable Verified CV (Action & Asset) | **P1** | Direct recruiter dossier acquisition | Low | Minimal | FTR-04 | `public/docs/Abdulghani_Al-Shibami_CV.pdf`<br>`components/canonical/CanonicalHero.tsx` |
| **FTR-09** | Secure Gemini AI Route (`/api/ai/chat`) | **P1** | Server-side AI endpoint with zero secret leaks | High | Medium | FTR-04 | `app/api/ai/chat/route.ts`<br>`package.json` (`@google/genai`)<br>`.env.local` |
| **FTR-10** | "Abdulghani AI" Concierge Floating Widget | **P2** | Interactive conversational portfolio guide | High | Medium | FTR-09 | `components/features/ai/AbdulghaniAIModal.tsx`<br>`components/features/ai/AIConciergeTrigger.tsx` |
| **FTR-11** | Quick Command Palette (`Ctrl+K` / `Cmd+K`)| **P2** | Keyboard-first power user navigation | Medium | Low | FTR-04 | `components/features/CommandPalette.tsx` |
| **FTR-12** | Studio Section 04 Full Localization & Theme Fix | **P2** | Seamless Arabic experience & token cleanup | Low | Minimal | None | `components/canonical/CanonicalDemoStudio.tsx`<br>`app/[locale]/showcase/page.tsx` |
| **FTR-13** | Accessibility & Screen Reader Audit Upgrades | **P3** | WCAG AA compliance across all toggles & SVGs | Low | Minimal | None | `components/canonical/CanonicalDemoStudio.tsx`<br>`components/canonical/CanonicalHero.tsx` |

---

## 7. Recommended Execution Sequence (Phased Delivery)

```text
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│ PHASE A: FOUNDATION, CONTACT INTEGRITY & ASSETS                                          │
│ Estimated Effort: 1-2 Engineering Sessions                                               │
│ Goals:                                                                                   │
│ 1. Synchronize authentic contact credentials (email, phone, LinkedIn).                  │
│ 2. Embed multi-channel contact bar (Direct Call, WhatsApp, Email, LinkedIn, GitHub).     │
│ 3. Deploy metadata route handlers (`app/robots.ts`, `app/sitemap.ts`) and `favicon.ico`.  │
│ 4. Fix residual mint color tokens and untranslated strings in Section 04 Demo Studio.    │
└────────────────────────────────────────────┬─────────────────────────────────────────────┘
                                             │
                                             ▼
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│ PHASE B: CREDENTIALS, EDUCATION & ACADEMIC CREDIBILITY                                   │
│ Estimated Effort: 2 Engineering Sessions                                                 │
│ Goals:                                                                                   │
│ 1. Establish modular data layer (`lib/data/profile.ts`, `credentials.ts`, `skills.ts`).  │
│ 2. Implement University of Modern Sciences academic status badge & education card.       │
│ 3. Implement IBCT/Edraak Train-The-Trainer certification card with interactive lightbox. │
│ 4. Implement Systems Analysis & Methodology showcase (UML, Use Case, DFD, ERD).         │
│ 5. Wire Downloadable CV button with localized PDF asset.                                 │
└────────────────────────────────────────────┬─────────────────────────────────────────────┘
                                             │
                                             ▼
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│ PHASE C: "ABDULGHANI AI" INTELLIGENT ASSISTANT                                           │
│ Estimated Effort: 2-3 Engineering Sessions                                               │
│ Goals:                                                                                   │
│ 1. Install official `@google/genai` SDK.                                                 │
│ 2. Author secure server route `app/api/ai/chat/route.ts` with strict Zod validation.     │
│ 3. Implement server-side grounding engine using `lib/data/*` with negative constraints. │
│ 4. Build floating luxury concierge UI with suggested chips, typing state, & RTL support.│
│ 5. Verify zero client-side key exposure and rate-limiting resilience.                    │
└────────────────────────────────────────────┬─────────────────────────────────────────────┘
                                             │
                                             ▼
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│ PHASE D: POWER-USER ERGONOMICS & DEPLOYMENT VERIFICATION                                 │
│ Estimated Effort: 1 Engineering Session                                                  │
│ Goals:                                                                                   │
│ 1. Build global Command Palette (`Ctrl+K` / `Cmd+K`) for rapid navigation.               │
│ 2. Perform complete WCAG AA accessibility audit and keyboard focus ring check.           │
│ 3. Verify production build (`pnpm build`) and execute full test suite.                   │
│ 4. Update documentation governance logs (`TASKS.md`, `PROGRESS.md`, `CHANGELOG.md`).     │
└──────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 8. Risk Management & Governance Compliance

1. **Visual Design Immutability:** No phase shall introduce redesigns or modify the approved Titanium Slate & Electric visual direction.
2. **Read-Only / Approval Gate Standard:** Per the AGENTS.md Constitution, this document represents an architectural plan only. **No source code, styling, or environment variables have been modified.**
3. **Data Integrity Standard:** All future implementations must derive their facts exclusively from verified owner assets and the `lib/data/` modules established in Phase B.
