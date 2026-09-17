# 18 — SECURITY SPECIFICATION

**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System  

---

## 1. Threat Modeling & Defensive Controls

| Threat Category | Potential Vector | Mitigation Strategy |
| :--- | :--- | :--- |
| **Secret Leakage** | Committing `.env` or service role keys to Git | Comprehensive `.gitignore`, strict Git pre-commit verification, server-only secret naming conventions (`SUPABASE_SERVICE_ROLE_KEY` with NO `NEXT_PUBLIC_` prefix). |
| **Cross-Site Scripting (XSS)** | User messages, unescaped markdown in case studies | React automatic JSX escaping, sanitize user input with DOMPurify / sanitize-html, strict Content Security Policy (CSP). |
| **Iframe Hijacking (Clickjacking)** | Wrapping portfolio in external iframes | HTTP response header `X-Frame-Options: SAMEORIGIN` or CSP `frame-ancestors 'self'`. |
| **Contact Form Abuse / Spam** | Automated bot flooding `/api/contact` | Honeypot field (hidden off-screen input), submission timestamp velocity check, in-memory IP rate limiting (5 requests per 15 minutes). |
| **Database Exposure** | Unauthenticated direct Supabase queries | Row Level Security (RLS) enabled on all tables; public anon key restricted to SELECT on public data and INSERT on contact messages. |

---

## 2. Content Security Policy (CSP) Configuration

Configured inside `next.config.ts` HTTP headers:

```text
default-src 'self';
script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com;
style-src 'self' 'unsafe-inline';
img-src 'self' data: https: blob:;
font-src 'self' data:;
connect-src 'self' https://*.supabase.co;
frame-src 'self' https://www.youtube-nocookie.com;
frame-ancestors 'self';
```

---

## 3. Secret Management Rules
- All client-accessible environment variables MUST start with `NEXT_PUBLIC_`.
- Any database service key, secret token, or private password MUST NOT have `NEXT_PUBLIC_` and must be accessed exclusively in Server Actions or Route Handlers.
- Continuous automated grep scan for high-entropy strings prior to every git commit.
