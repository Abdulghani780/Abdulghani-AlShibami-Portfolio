# 25 — ENVIRONMENT VARIABLES SPECIFICATION

**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System  
**Security Standard:** Strict Zero-Secret-Exposure Policy  

---

## 1. Environment Variable Catalog

| Variable Name | Purpose | Required? | Client or Server? | Where Configured? |
| :--- | :--- | :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL of the website for Open Graph cards, sitemap, and canonical link generation. | Yes | Client & Server | `.env.local` / Vercel Environment Variables |
| `NEXT_PUBLIC_DEFAULT_LOCALE` | Default language if undetected (`en`). | No (Defaults to `en`) | Client & Server | `.env.local` / Vercel |
| `NEXT_PUBLIC_SUPABASE_URL` | Public endpoint for Supabase project instance. | Optional (Graceful fallback to local mock data) | Client & Server | `.env.local` / Vercel |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Public anonymous key with restricted RLS read access. | Optional (Graceful fallback to local mock data) | Client & Server | `.env.local` / Vercel |
| `SUPABASE_SERVICE_ROLE_KEY` | Private administrative key for server-side migration or administrative tasks. **NEVER COMMIT**. | No (Server only) | Server Only | Vercel (Encrypted) |
| `CONTACT_NOTIFICATION_EMAIL` | Destination email address where contact submissions are routed. | Optional | Server Only | Vercel (Encrypted) |

---

## 2. Local Configuration Template (`.env.example`)

```bash
# Public Website Configuration
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
NEXT_PUBLIC_DEFAULT_LOCALE="en"

# Supabase Public Credentials (Optional for local development)
NEXT_PUBLIC_SUPABASE_URL="https://your-project.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key-here"

# Server Secrets (Optional)
# SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"
# CONTACT_NOTIFICATION_EMAIL="contact@abdulghani.dev"
```
