# 20 — PERFORMANCE OPTIMIZATION SPECIFICATION

**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System  
**Target Metric:** Lighthouse Performance Score >= 90 / Green Core Web Vitals  

---

## 1. Core Web Vitals Targets

| Metric | Target | Optimization Strategy |
| :--- | :--- | :--- |
| **LCP** (Largest Contentful Paint) | `< 2.0s` | Server Render Hero text, preload critical fonts with `next/font`, prioritize hero asset with `priority` flag. |
| **INP** (Interaction to Next Paint) | `< 200ms`| Keep React hydration footprints minimal; isolate client state to small sub-trees; debounce filter inputs. |
| **CLS** (Cumulative Layout Shift) | `< 0.05` | Reserve layout dimensions for images (`width`/`height` or aspect ratios), use static font metric overrides via `next/font`. |
| **FCP** (First Contentful Paint) | `< 1.2s` | Stream critical HTML with React Server Components, inline zero-flash theme script. |

---

## 2. Asset & Media Optimization
1. **Next.js Image Component (`next/image`):**
   - Automatically serves modern WebP/AVIF formats based on client browser support.
   - Generates responsive `srcset` tailored to device resolution.
2. **Font Subsetting & Zero Layout Shift:**
   - Fonts (`Outfit` and `Cairo`) loaded locally via `next/font/google` at build time.
   - Eliminates external Google Fonts network hops during runtime.
3. **Bundle Size Management:**
   - Eliminate heavy monolithic animation libraries where pure CSS transforms suffice.
   - Code-split interactive simulations so non-demo pages remain featherlight.
