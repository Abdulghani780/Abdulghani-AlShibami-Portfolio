# 06 — UI/UX SPECIFICATION

**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System  
**Design Persona:** Luxury, Modern, Technical, Minimalist, Authoritative  

---

## 1. Aesthetic Foundations & Visual Direction
The visual identity represents **Abdulghani Al-Shibami**.
- **Tone:** Executive Engineering, High Prestige, Sleek Minimalism, Precision Craftsmanship.
- **Core Visual Triad:**
  - **Black:** Depth, focus, authority, engineering seriousness.
  - **Royal Gold:** Prestige, excellence, high achievement, bespoke accenting.
  - **White:** Clarity, high contrast, clean typography, breathable negative space.
- **Anti-Patterns (STRICTLY PROHIBITED):**
  - No childish cartoonish UI or cheap rainbow gradients.
  - No blinding neon glow effects.
  - No visual clutter, distracting particle mesh backgrounds, or FPS-dropping 3D models.
  - No generic portfolio template look.

---

## 2. Dual-Theme Strategy

### 2.1. Dark Mode (The Hero Experience)
- **Background Base:** Deep Obsidian Black (`#0B0B0C`).
- **Surface Elevation 1 (Cards, Menus):** Slate Carbon (`#141416`).
- **Surface Elevation 2 (Hover, Modals):** Charcoal Onyx (`#1E1E22`).
- **Borders & Dividers:** Subtle Gold-infused graphite (`rgba(212, 175, 55, 0.15)` and `rgba(255, 255, 255, 0.08)`).
- **Text:** Crisp White (`#FFFFFF`) for primary headings, Warm Slate (`#A1A1AA`) for body.
- **Accents:** Royal Gold (`#D4AF37`, hover `#F3E5AB`).

### 2.2. Light Mode (Intentional Porcelain Balance)
- **Background Base:** Pure Porcelain Off-White (`#FBFBFD`).
- **Surface Elevation 1:** Crisp Card White (`#FFFFFF`) with subtle gold-tinged warm shadow.
- **Surface Elevation 2:** Soft Alabaster (`#F3F3F6`).
- **Borders & Dividers:** Light Sand Stone (`#E4E4E8` with gold highlight borders).
- **Text:** Deep Midnight Slate (`#0F172A`) for headings, Dark Muted Steel (`#334155`) for body.
- **Accents:** Deep Royal Gold (`#997A15`, hover `#B8860B`).

---

## 3. Responsive Breakpoint Matrix

| Viewport | Range | Target Device | Layout Strategy |
| :--- | :--- | :--- | :--- |
| **Mobile** | `320px - 640px` | iPhone, Android | Single-column vertical stack, slide-over hamburger drawer, sticky bottom action bar. |
| **Tablet** | `641px - 1024px`| iPad, Tablets | 2-column project grids, compact horizontal navigation. |
| **Desktop** | `1025px - 1440px`| Laptops, Screens | Full multi-column grid, persistent top navigation, rich side-by-side case study panels. |
| **Wide** | `> 1440px` | 4K Monitors | Max-width containment (`max-w-7xl` / `1280px`), balanced negative margins. |

---

## 4. Internationalization & RTL UX Rules
- In Arabic (`ar`):
  - Direction switches to RTL (`dir="rtl"`).
  - Navigation links align to the right, theme/language toggles to the left.
  - Card chevron icons automatically flip direction (left arrow instead of right arrow for drill-down).
  - Font switches seamlessly to `Cairo` or `Tajawal` for optimal Arabic legibility and letter shaping.
