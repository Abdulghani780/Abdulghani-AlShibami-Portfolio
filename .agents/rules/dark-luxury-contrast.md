---
title: Dark Luxury & High-Contrast Invariants (Royal Cyber-Gold)
category: UI/UX & Design Systems
scope: workspace
---

# Dark Luxury & High-Contrast Invariants (Royal Cyber-Gold)

This rule establishes non-negotiable UI/UX invariants for **Campus IT Tracker** and any related dark-mode enterprise applications.

## 1. No Neon Wireframe Cages (حظر الأقفاص السلكية الصفراء)
- **NEVER** draw bright full-opacity accent borders (`#D4AF37` or `#FFD700`) around every standard card, panel, or container.
- Standard surfaces **MUST** use subtle, restful slate-gold boundaries (`#232D42` / `Color.FromArgb(35, 45, 66)`).
- Reserve bright metallic gold exclusively for the **ACTIVE**, **FOCUSED**, or **HERO** element.

## 2. Text Contrast & Readability Discipline (انضباط تباين النصوص)
- Primary text **MUST** be crisp near-white (`#F8FAFC` or `#FFFFFF`), achieving WCAG AAA contrast (> 15:1 against dark surfaces).
- Secondary text **MUST** be soothing slate (`#94A3B8`), **NOT** muddy yellow or olive brown.
- Never render body text, table content, or descriptions in gold or brown; gold is an accent jewel, not a reading color.

## 3. Zero-Glare KPI Cards (بطاقات المؤشرات بدون وهج)
- KPI cards in dark mode **MUST NOT** use 100% solid bright metallic gradient fills (causes severe eye strain/glare).
- KPI cards **MUST** use deep elevated obsidian-slate backgrounds (`#151B28`) with a sleek 2.5px top metallic gold accent line, and display the metric number in glowing champagne gold (`#FFD700` / `#F5D061`).

## 4. Filigree Clearance (حظر تقاطع الزخارف)
- Decorative brackets (`DrawCornerFiligree`) must never overlap, collide with, or cut through card text, icons, or padding.
- Keep filigrees subtle (size <= 8px, pen 1.0px) and confine them to outermost viewports.

## 5. Data Grid Selection Comfort (تحديد الجداول المريح)
- Selected rows in DataGridView must use deep royal navy (`#1E2E4A`) with crisp white text, **NEVER** muddy yellowish-brown.
