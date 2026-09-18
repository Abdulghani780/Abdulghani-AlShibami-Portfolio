# 33 — OPEN QUESTIONS & PLACEHOLDERS

**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System  
**Content Integrity Rule:** Never fabricate credentials, employment, dates, or metrics. Unverified items are staged here.

---

## 1. Critical (Architecture & Identity)
- [x] **Primary Visual Direction:** Confirmed as Luxury Obsidian Black (`#0B0B0C`), Royal Gold (`#D4AF37`), and Crisp White (`#FFFFFF`).
- [x] **Bilingual Support:** Confirmed as English (Primary/LTR) and Arabic (Secondary/RTL).
- [x] **Profile Photograph:** Resolved in Phase 10.1. Authentic high-resolution portrait photograph `Abdulghani Alshibami.jpg` (2300x1824 px) verified and converted into web-optimized WebP variants (`abdulghani-profile.webp`, `abdulghani-profile-hero.webp`, `abdulghani-profile-thumb.webp`) in `public/images/profile/` and integrated into the Hero component.
- [x] **Authentic Project Catalog:** Resolved in Phase 10.1. Exactly 5 authentic projects from `Projects/` harmonized into `projectsData.ts`: `campus-it-tracker`, `metaalgorithm-lab`, `novatech`, `cafena`, and `gp`. Unverified entries (`yusra`, `auraledger`, `nexora-tech`) permanently removed.

---

## 2. Important (Content Verification)
- [ ] **PGP Public Key & Cryptographic Fingerprint:** Fabricated placeholder key `0x8F94D29E` was removed per data integrity mandate.  
  *Current Resolution:* Direct footer link omitted until Abdulghani Al-Shibami supplies the genuine PGP public key fingerprint.
- [ ] **Geographical Coordinates & Architecture Metadata:** Fabricated latitude/longitude (`24.7136° N, 46.6753° E`) and arbitrary hardware tags (`SYS_REV`, `ARCH: x64_AVX512`) were removed permanently in Phase 10.  
  *Current Resolution:* Clean, truthful colophon (`Next.js 15 // Tailwind CSS`) without fabricated telemetry. Real operational city/region can be provided when desired.
- [ ] **Academic Degree & University Details:** Initial academic milestones feature structured placeholders (e.g. Computer Science / Software Engineering degree) ready for exact university name and graduation year details.

---

## 3. Optional (External Integrations)
- [ ] **Supabase Cloud Project Credentials:** If owner provides `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`, the application connects to the cloud database. If not provided, the resilient local Data Access Layer (DAL) seamlessly runs offline with 100% functionality.
- [ ] **Custom Domain Name:** Platform configures canonical URLs for `https://abdulghani.dev` by default, configurable in `.env.local` or Vercel.

---

## 4. Future (Post-Launch Expansion)
- [ ] Dedicated Technical Blog / Article Engine (`/blog`).
- [ ] Interactive Resume PDF Builder with custom styling choices.
