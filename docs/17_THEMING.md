# 17 — THEMING SYSTEM SPECIFICATION

**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System  
**Themes Supported:** Dark (Default/Primary) | Light (Intentional Porcelain) | System  

---

## 1. Zero-Flash Theme Initialization
To prevent the jarring "flash of unstyled/wrong theme" (FOUC), an inline script executes synchronously in the HTML `<head>` prior to React hydration:

```html
<script>
  (function() {
    try {
      var theme = localStorage.getItem('app-theme') || 'dark';
      var root = document.documentElement;
      if (theme === 'system') {
        var isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        root.classList.toggle('dark', isDark);
      } else {
        root.classList.toggle('dark', theme === 'dark');
      }
    } catch (e) {}
  })();
</script>
```

---

## 2. Visual Palette Balance

### 2.1. Dark Theme (Obsidian & Gold)
- Background: `#0B0B0C` (Deep true black with subtle warm undertone).
- Surface 1: `#141416` (Card container).
- Surface 2: `#1E1E22` (Elevated headers, active tabs).
- Accent: `#D4AF37` (Royal Gold metallic highlight).
- Heading Text: `#FFFFFF` (100% white for supreme contrast).
- Body Text: `#A1A1AA` (Zinc 400 for balanced reading fatigue).

### 2.2. Light Theme (Porcelain & Warm Slate)
- Background: `#FBFBFD` (Soft high-end alabaster porcelain).
- Surface 1: `#FFFFFF` (Elevated cards with soft border).
- Surface 2: `#F3F3F6` (Pills, active states).
- Accent: `#997A15` (Deep burnished gold to maintain WCAG contrast against white).
- Heading Text: `#0F172A` (Midnight Slate).
- Body Text: `#334155` (Slate 700).

---

## 3. Theme Toggle Component Interface
- **Location:** Header navigation and mobile drawer.
- **States:** Cycles cleanly through Dark ➔ Light ➔ System (or direct Dark/Light toggle with explicit indicator).
- **ARIA Standards:** `role="button"`, `aria-label="Toggle visual theme"`, `aria-pressed="true/false"`.
