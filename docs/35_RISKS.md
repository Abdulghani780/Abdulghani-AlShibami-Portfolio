# 35 — RISK MANAGEMENT MATRIX

**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System  

---

## 1. Risk Register

| Risk ID | Description | Likelihood | Impact | Severity | Mitigation Strategy | Contingency Plan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **RSK-01** | **RTL Layout Breakage in Arabic Mode:** Mixed text or directional elements breaking layout alignment. | Medium | High | **High** | Strictly use CSS logical properties (`margin-inline`, `inset-inline`), explicit `dir="rtl"`, and verify via Chrome DevTools MCP. | Automated visual inspection at 375px and 1440px viewports. |
| **RSK-02** | **Dark/Light Mode Theme Flash:** Flash of white/dark background during page hydration. | High | Medium | **Medium** | Inject blocking synchronous script in HTML `<head>` reading `localStorage` before React mounts. | Fallback to default dark class if localStorage read throws. |
| **RSK-03** | **External Cloud Disconnection:** Supabase service unreachable or credentials absent locally. | Medium | High | **High** | Implement resilient DAL with instant fallback to typed local static data repository. | 100% offline uptime guaranteed. |
| **RSK-04** | **Unauthenticated Contact Spam:** Public endpoint flooded with automated bot messages. | High | Medium | **Medium** | Implement hidden honeypot field, timestamp velocity check, and in-memory rate limiting. | Block abusive IP hashes; reject malformed requests. |
| **RSK-05** | **Misleading Demo Perceptions:** Visitors assuming simulated C#/Python desktop apps are running raw binaries. | Medium | High | **High** | Explicitly label all simulated projects as "Interactive Web Simulation" with explanatory disclaimer banner. | Display clear technical architecture diagrams alongside simulation. |
| **RSK-06** | **Secret Exposure in Public Git:** Accidental commit of `.env` or service role keys. | Low | Critical | **Critical** | Exhaustive `.gitignore`, naming restrictions, and continuous pre-commit checks. | Immediate key revocation and repository clean if triggered. |
