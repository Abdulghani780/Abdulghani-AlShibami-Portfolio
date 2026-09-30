# AI ASSISTANT ARCHITECTURE SPECIFICATION
**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System  
**System:** Abdulghani AI Concierge  
**Integration:** Google Gemini API (`@google/genai` SDK)  
**Standard:** Enterprise Production-Grade, Strict Grounding & Zero-Failure Resilient  

---

## 1. Executive Summary & Purpose

"Abdulghani AI" is a dedicated digital concierge engineered to serve as an intelligent, conversational guide for visitors to Abdulghani Al-Shibami's portfolio. The assistant answers questions regarding Abdulghani's verified software projects, academic credentials, technical skills, and direct contact channels.

### Core Architectural Principles:
1. **Strict Factual Grounding:** The assistant operates under rigorous system instructions with zero tolerance for hallucination. It is forbidden from fabricating degrees, unverified companies, or unlisted software projects.
2. **Server-Side Security & Secret Isolation:** The `GEMINI_API_KEY` is exclusively accessed server-side via `process.env.GEMINI_API_KEY`. It is never prefixed with `NEXT_PUBLIC_` and is never exposed in client bundles or network responses.
3. **In-Memory Rate Limiting:** All inbound requests to `/api/ai/chat` pass through a sliding-window IP rate limiter preventing abuse and denial-of-service.
4. **Zero-Failure Offline Fallback:** If the `GEMINI_API_KEY` is unconfigured, or if the upstream Gemini API encounters network timeouts or rate limits, the system seamlessly transitions to an offline deterministic response engine. Visitors always receive accurate, structured answers.

---

## 2. System Architecture & Request Flow

```text
+-------------------------------------------------------------+
|                 Client Browser (Visitor)                    |
|             AbdulghaniAIModal.tsx ("use client")            |
| - Floating Trigger Launcher with Pulse Indicator            |
| - Suggested Questions Ribbon (English / Arabic)             |
| - Keyboard Accessible (Escape, Focus Trap, ARIA Labels)     |
+-------------------------------------------------------------+
                              |
                     POST /api/ai/chat
         Payload: { message: string, locale: "en"|"ar", history: [] }
                              |
                              v
+-------------------------------------------------------------+
|            Next.js App Router API Route Handler              |
|                   app/api/ai/chat/route.ts                  |
+-------------------------------------------------------------+
  [1] Sliding Window IP Rate Limiter (20 req / 60 sec / IP)
       |--> If Exceeded: HTTP 429 Too Many Requests
  [2] Zod Payload Validation (Schema & Length Guards)
       |--> If Invalid: HTTP 400 Bad Request
  [3] API Key Verification (process.env.GEMINI_API_KEY)
       |
       +---> [No Key Configured] ---> Fallback Engine
       |                               (generateOfflineResponse)
       |                               Returns Grounded JSON
       v
  [4] Upstream Live Gemini Call (@google/genai SDK)
       - Model: gemini-2.5-flash
       - System Instruction: buildSystemPrompt(locale)
       - Temperature: 0.2 (Low variance / High precision)
       - Context History: Sliding turn window
       |
       +---> [Upstream Success] ---> HTTP 200 { reply, isLive: true, model }
       |
       +---> [Upstream Exception] -> HTTP 200 { reply, isLive: false, fallback }
```

---

## 3. Security, Secret Isolation & Abuse Prevention

### 3.1. Secret Custody
- The Gemini API key is referenced exclusively via `process.env.GEMINI_API_KEY`.
- No client-side code references or imports the API key.
- Production environment configurations and `.env.local` are isolated from version control.

### 3.2. Rate Limiting
- Implemented via an in-memory sliding window algorithm:
  - Window size: 60,000 ms (1 minute).
  - Maximum requests per window: 20 requests per client IP.
  - Client IP extraction supports reverse proxy headers (`x-forwarded-for`, `x-real-ip`) with localhost fallback.

### 3.3. Input Sanitation & Validation
The request payload is strictly validated using Zod:
```typescript
const ChatRequestSchema = z.object({
  message: z.string().trim().min(1, "Message cannot be empty").max(800, "Message exceeds 800 characters limit"),
  locale: z.enum(["en", "ar"]).default("en"),
  history: z
    .array(
      z.object({
        role: z.enum(["user", "model", "assistant"]),
        text: z.string().max(800),
      })
    )
    .max(10)
    .optional(),
});
```

---

## 4. Factual Grounding & Knowledge Base

The system prompt is deterministically constructed by `lib/ai/knowledge.ts` utilizing verified application data sources:
- `VERIFIED_PROFILE` (`lib/data/profile.ts`)
- `VERIFIED_CERTIFICATIONS`, `VERIFIED_AWARDS`, `VERIFIED_TRAININGS` (`lib/data/credentials.ts`)
- `VERIFIED_SKILLS` (`lib/data/skills.ts`)
- Canonical projects from `lib/data/projectsData.ts`

### 4.1. Grounded Entities:
1. **Identity & Academics:**
   - Full Legal Name: Abdulghani Ali Mohammed Ahmed Al-Shibami (عبدالغني علي محمد أحمد الشبامي)
   - Degree: Bachelor of Information Technology (UMS, Sana'a, Yemen)
   - Academic Standing: Third-Year IT Undergraduate Student
2. **Verified Projects:**
   - `Campus IT Tracker`: C# WinForms & Oracle XE ITIL network topology and incident management.
   - `MetaAlgorithmLab`: Python & PyQt6 scientific algorithm benchmarking workstation.
   - `Cafena`: Specialty coffee e-commerce platform and live POS simulation.
   - `NovaTech`: High-performance electronics retail storefront.
   - `Graduation Project Management Portal (GP)`: Academic milestone defense platform.
3. **Verified Credentials:**
   - TOT Novice Trainer (IBCT & Edraak, 12/9/2026).
   - Yemen AI Summit 2026 Certificate of Participation (MSU, 1/7/2026).
   - Web Development Using AI Tools Workshop (UMS Innovation Center, May 2026).
   - Innovation & Entrepreneurship 2nd Place Award (UMS IT Department, Jan 2026).
   - English Language Proficiency Certificate (YALI, Feb 2023).

### 4.2. Guardrails & Negative Constraints:
- If a user asks about unverified companies, salaries, unlisted projects, or speculative personal details, the assistant is constrained to politely decline and direct the user to official contact channels:
  - Official Email: `samyemen987@gmail.com`
  - Direct Phone / WhatsApp: `+967 773 088 202`

---

## 5. Zero-Failure Deterministic Fallback Engine

When `GEMINI_API_KEY` is not present or upstream network outages occur, `generateOfflineResponse(query, isAr)` handles queries using an offline keyword taxonomy:
- **Contact intent:** Returns verified email, phone, LinkedIn, and GitHub links.
- **Technology intent (C#, .NET, Oracle, SQL):** Summarizes enterprise backend experience with Campus IT Tracker.
- **Projects intent:** Enumerates all 5 authentic projects with descriptive summaries.
- **Education intent:** Summarizes UMS degree and academic achievements.
- **Certificates intent:** Lists all 5 authentic credentials with accreditation details.
- **General inquiry:** Delivers a comprehensive bilingual concierge welcome with navigation pointers.

---

## 6. Client Interface (`AbdulghaniAIModal.tsx`)

The client modal provides a responsive interaction experience:
- **Floating Launcher:** Circular button anchored at `bottom-6 end-6` with pulsating beacon effect.
- **Bilingual Interface:** Fully supports LTR (English) and RTL (Arabic) with semantic layout adjustments.
- **Control Suite:**
  - Minimize / Maximize window toggle (`h-14` vs `h-[540px]`).
  - Clear conversation button with reset to initial welcome state.
  - Close button and global keyboard `Escape` listener.
- **Suggested Queries:** Quick-select chips allowing single-tap inquiries.
- **Status Indication:** Visual badge indicating whether the response was generated live via Gemini (`ShieldCheck Gemini`) or delivered via the verified offline engine.
