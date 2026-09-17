# 07 — DESIGN SYSTEM & TOKEN SPECIFICATION

**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System  
**Palette Identity:** Obsidian Black | Royal Gold | Crisp White  

---

## 1. Design Tokens (CSS Custom Properties)

```css
:root {
  /* Core Brand Tokens */
  --gold-primary: #D4AF37;
  --gold-light: #F3E5AB;
  --gold-dark: #997A15;
  --gold-glow: rgba(212, 175, 55, 0.25);

  /* Light Mode Defaults */
  --bg-base: #FBFBFD;
  --bg-surface: #FFFFFF;
  --bg-surface-elevated: #F3F3F6;
  --bg-muted: #EAEAEA;
  --border-subtle: #E2E8F0;
  --border-gold: rgba(212, 175, 55, 0.35);

  --text-primary: #0F172A;
  --text-secondary: #475569;
  --text-muted: #64748B;
  --text-gold: #997A15;

  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
  --shadow-gold: 0 4px 20px -2px rgba(212, 175, 55, 0.2);
}

.dark {
  /* Dark Mode Tokens */
  --bg-base: #0B0B0C;
  --bg-surface: #141416;
  --bg-surface-elevated: #1E1E22;
  --bg-muted: #27272A;
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-gold: rgba(212, 175, 55, 0.25);

  --text-primary: #FFFFFF;
  --text-secondary: #A1A1AA;
  --text-muted: #71717A;
  --text-gold: #D4AF37;

  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.5);
  --shadow-md: 0 4px 12px 0 rgba(0, 0, 0, 0.7);
  --shadow-gold: 0 4px 25px -2px rgba(212, 175, 55, 0.35);
}
```

---

## 2. Typography Scale

| Token | Desktop Size | Mobile Size | Weight | Line Height | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `text-display` | `3.75rem (60px)` | `2.5rem (40px)` | `Bold (700)` | `1.1` | Hero Title |
| `text-h1` | `2.5rem (40px)` | `2.0rem (32px)` | `SemiBold (600)` | `1.2` | Page & Section Headings |
| `text-h2` | `1.875rem (30px)` | `1.5rem (24px)` | `SemiBold (600)` | `1.25`| Feature & Card Titles |
| `text-h3` | `1.25rem (20px)` | `1.125rem (18px)`| `Medium (500)` | `1.3` | Subheadings, Badges |
| `text-body` | `1rem (16px)` | `1rem (16px)` | `Regular (400)` | `1.6` | Paragraphs, Case Studies |
| `text-caption`| `0.875rem (14px)` | `0.8125rem (13px)`| `Regular (400)`| `1.4` | Meta details, Tags |

---

## 3. Atomic Component Tokens

### 3.1. Buttons
- **Primary (Royal Gold Accent):**
  - Background: `linear-gradient(135deg, #D4AF37 0%, #AA820A 100%)`
  - Text: `#0B0B0C` (Black for supreme contrast on gold)
  - Hover: Subtle gold luminescence (`box-shadow: 0 0 20px rgba(212, 175, 55, 0.5)`), slight `scale(1.02)`.
- **Secondary (Obsidian Outline):**
  - Border: `1px solid var(--border-gold)`
  - Background: `rgba(212, 175, 55, 0.05)`
  - Text: `var(--text-primary)`
  - Hover: `background: rgba(212, 175, 55, 0.15)`.

### 3.2. Project Cards
- Surface: `var(--bg-surface)`
- Border: `1px solid var(--border-subtle)` with hover transition to `var(--border-gold)`
- Radius: `rounded-xl` (`12px`)
- Padding: `p-6` (`24px`)
- Interactive feedback: Smooth translation `-translate-y-1` on hover with gold ambient glow.

### 3.3. Badges & Chips
- Background: `rgba(212, 175, 55, 0.1)`
- Border: `1px solid rgba(212, 175, 55, 0.25)`
- Text: `var(--text-gold)`
- Radius: `rounded-full`
- Padding: `px-3 py-1`
