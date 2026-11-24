# Motion & Luxury Consistency Pass — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Unify the portfolio's visual rhythm and extend the existing gold motion system to every page, plus signature luxury details (preloader, shimmer titles, magnetic buttons, grain, page transitions) — UI-only, no content or data changes.

**Architecture:** All motion reuses existing client primitives (`ScrollReveal`, `TiltCard`, `CountUp`, `useInView`, `useReducedMotion`, Lenis, `MagneticCursor`). New work is a small set of focused client components in `components/ui/` plus CSS keyframe utilities in `app/globals.css`, then mechanical retrofit of secondary pages. Dark-mode clarity is achieved by nudging CSS custom properties in `globals.css` (`.dark` block) — Tailwind color tokens already resolve through `var(--*)`, so no component class changes are needed for that.

**Tech Stack:** Next.js 15 App Router, React 19, TypeScript, Tailwind CSS 3, Lenis, lucide-react. No new dependencies.

**Spec:** `docs/superpowers/specs/2026-11-24-motion-luxury-pass-design.md`

## Global Constraints

- Framework: Next.js App Router, React, TypeScript. Styling: Tailwind + tokens in `tailwind.config.ts` / `app/globals.css`.
- Colors: Obsidian black `#0B0B0C`/`#121214`, Royal Gold `#D4AF37`/`#F3E5AB`/`#997A15`. Dark is the hero theme; light mode must stay intentionally styled (porcelain `#FAF9F6`).
- i18n: `en` (LTR, default) + `ar` (RTL). CSS MUST use logical properties; no duplicated layout JSX per locale. Pass `isRtl={locale === "ar"}` to `ScrollReveal` where direction is horizontal.
- EVERY animation must be gated by `useReducedMotion()` (or the global `prefers-reduced-motion` block in `globals.css` which already exists) — final state must render immediately.
- Decoupled data layer: no changes under `lib/services`, `lib/dal`, `lib/supabase`. UI components only.
- Never fabricate the owner's photo; profile assets stay under `public/images/profile/`.
- Package manager: `pnpm`. Verify with `pnpm typecheck`, `pnpm lint`, `pnpm build`, `pnpm test` (`node --test tests/**/*.test.mjs`).
- Commit style: conventional commits (`feat(...)`, `style(...)`, `chore(...)`), see `git log`.
- After implementation: update `PROGRESS.md`, `TASKS.md`, `CHANGELOG.md`, `IMPLEMENTATION_LOG.md` (per AGENTS.md §8), then `git push origin main` (user explicitly requested push).

## Review Focus

Inputs/failure modes the spec implies but no single task's happy path covers — each is pinned to a task below:

1. **Reduced-motion users** must see final states instantly — covered in every task via `useReducedMotion` / global CSS guard; Task 9 verifies globally.
2. **RTL (`/ar`)** — horizontal reveals and magnetic pull must mirror correctly; `ScrollReveal` already takes `isRtl`; Tasks 5–8 pass it.
3. **Preloader on repeat visits / slow networks** — must never trap the page; Task 3 gates on `sessionStorage` + max-duration failsafe.
4. **Filter/search changes in catalogs** — staggered reveals must not re-run or hide newly matched cards; Tasks 5 & 7 key reveals correctly.
5. **`[data-magnetic]` on elements inside scrollable/modal containers** — pull math must use viewport coords; Task 2 handles `getBoundingClientRect` + `window` scroll offsets.
6. **Dark-mode clarity nudge** must not break light mode — Task 1 only touches `.dark` token values and adds utilities.

---

### Task 1: Global CSS — dark clarity tokens + new motion utilities

**Files:**
- Modify: `app/globals.css`

**Interfaces:**
- Produces (class names later tasks consume):
  - `.gold-shimmer-text` — one-shot clipped gold sweep for headings (used by Task 4)
  - `.grain-overlay` — subtle noise texture overlay (used by Task 4)
  - `.page-enter` — route-change fade/slide (used by Task 8)
  - `.preloader-*` hooks are handled inline in Task 3's component; only add `@keyframes preloader-draw` and `@keyframes preloader-curtain` here if needed — otherwise skip.
  - `.gold-edge-flow` — animated gold hairline for card top borders (used by Task 6)

- [ ] **Step 1: Nudge dark-mode surface tokens for clarity**

In `app/globals.css`, inside the `.dark { }` block of `@layer base`, change ONLY these values:

```css
--surface-elevated: #16161B;   /* was #121214 */
--surface-card: #17171C;       /* was #121214 */
--border-hairline: rgba(255, 255, 255, 0.10);  /* was 0.08 */
--border-color: rgba(255, 255, 255, 0.16);     /* was 0.14 */
```

Leave every other `.dark` token and the entire `:root` (light) block untouched.

- [ ] **Step 2: Add new keyframes and utility classes**

Append inside `@layer base` (after the existing `@media (prefers-reduced-motion)` block is fine — it already nukes all animation under reduced motion):

```css
@keyframes gold-shimmer-sweep {
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
}
.gold-shimmer-text {
  background-image: linear-gradient(110deg,
    var(--text-primary) 35%,
    var(--gold-secondary) 50%,
    var(--text-primary) 65%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: gold-shimmer-sweep 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.2s 1 both;
}

@keyframes page-enter {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}
.page-enter { animation: page-enter 0.55s cubic-bezier(0.16, 1, 0.3, 1) both; }

@keyframes grain-shift {
  0%, 100% { transform: translate(0, 0); }
  20% { transform: translate(-3%, 2%); }
  40% { transform: translate(2%, -3%); }
  60% { transform: translate(-2%, -2%); }
  80% { transform: translate(3%, 3%); }
}
.grain-overlay {
  position: absolute; inset: -50%;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E");
  opacity: 0.035;
  pointer-events: none;
  animation: grain-shift 9s steps(6) infinite;
}

@keyframes gold-edge-flow {
  0%   { background-position: 0% 0; }
  100% { background-position: 200% 0; }
}
.gold-edge-flow {
  position: absolute; top: 0; inset-inline: 0; height: 1px;
  background: linear-gradient(90deg,
    transparent, var(--gold-secondary) 30%, var(--gold-light) 50%, var(--gold-secondary) 70%, transparent);
  background-size: 200% 100%;
  animation: gold-edge-flow 4s linear infinite;
  opacity: 0.7;
}
```

- [ ] **Step 3: Verify build still compiles**

Run: `pnpm typecheck`
Expected: PASS (CSS-only change; typecheck unaffected — this step guards against accidental TSX edits).

- [ ] **Step 4: Commit**

```bash
git add app/globals.css
git commit -m "style(design): increase dark-mode surface clarity and add luxury motion utilities"
```

---

### Task 2: Magnetic pull — `Magnetic` wrapper + wire `data-magnetic`

`MagneticCursor` already reads `[data-magnetic]` for hover styling but nothing pulls. Implement the pull as a small reusable client wrapper so it works on any element (buttons, links) without touching cursor internals.

**Files:**
- Create: `components/ui/Magnetic.tsx`
- Modify: `components/layout/Navbar.tsx` (CTA link ~line 110), `components/features/home/ContactCtaSection.tsx` (primary CTA), `components/features/projects/case-study/CaseStudyHero.tsx` (demo button ~line 98)

**Interfaces:**
- Consumes: `useReducedMotion` from `@/lib/hooks/useReducedMotion`.
- Produces: `export function Magnetic({ children, strength = 0.35, className }: { children: React.ReactNode; strength?: number; className?: string })` — renders a `<span>` (inline-flex) that translates toward the cursor while hovered, springs back on leave. `strength` is fraction of cursor offset applied (0.35 = subtle luxury pull, max ~6px).

- [ ] **Step 1: Implement `components/ui/Magnetic.tsx`**

Client component. On `mousemove` over the wrapper: compute offset between element center and cursor, clamp each axis to ±24px, apply `translate3d(offset * strength)` with `transition: transform 200ms cubic-bezier(0.16,1,0.3,1)` while hovering and a slightly springier `400ms cubic-bezier(0.34,1.56,0.64,1)` on leave. On `mouseleave` reset to `translate3d(0,0,0)`. If `useReducedMotion()` returns true, render children in a plain `<span className={className}>` with no listeners. Also set `data-magnetic=""` on the wrapper so `MagneticCursor` picks up the hover state. Use `will-change: transform`.

- [ ] **Step 2: Wrap the three primary CTAs**

- `Navbar.tsx` ~line 110: wrap the desktop "LET'S BUILD" `<Link>` in `<Magnetic strength={0.3}>` (import from `@/components/ui/Magnetic`).
- `ContactCtaSection.tsx`: find the primary gold CTA button/link and wrap it the same way (`strength={0.35}`).
- `CaseStudyHero.tsx` ~line 98: wrap the "Launch Workstation Demo" `<Link>` (`strength={0.3}`).

Do NOT wrap secondary/ghost buttons — magnetic is a scarcity signal.

- [ ] **Step 3: Verify**

Run: `pnpm typecheck && pnpm lint`
Expected: PASS, no new warnings.

- [ ] **Step 4: Commit**

```bash
git add components/ui/Magnetic.tsx components/layout/Navbar.tsx components/features/home/ContactCtaSection.tsx components/features/projects/case-study/CaseStudyHero.tsx
git commit -m "feat(motion): add magnetic pull to primary CTAs"
```

---

### Task 3: Preloader — gold monogram draw + curtain exit

**Files:**
- Create: `components/ui/Preloader.tsx`
- Modify: `app/[locale]/layout.tsx` (mount once, inside `SmoothScrollProvider`)

**Interfaces:**
- Produces: `export function Preloader()` — self-contained; no props. Reads/writes `sessionStorage` key `as-preloader-seen`.

- [ ] **Step 1: Implement `components/ui/Preloader.tsx`**

Client component, `position: fixed inset-0 z-[10000]`. Behavior:

- On mount: if `sessionStorage.getItem("as-preloader-seen") === "1"` → render null immediately (no flash).
- Otherwise render overlay `bg-[#0B0B0C]` containing: the `AsMonogram`/`AsLogo` mark (reuse `components/ui/AsLogo.tsx` — check its exports; `AsMonogram` is already exported and used by Footer) centered, plus the word "ABDULGHANI AL-SHIBAMI" in `font-mono text-[10px] tracking-[0.4em] text-gold-light` fading in.
- Timeline (all via CSS transitions + `setTimeout`, rAF not needed): overlay visible ~900ms → set `as-preloader-seen=1` → exit by translating the overlay `translateY(-100%)` with `transition: transform 700ms cubic-bezier(0.76,0,0.24,1)` (curtain up) → unmount after transition (`onTransitionEnd` or 750ms timeout).
- Failsafe: hard `setTimeout` of 2500ms forces unmount regardless — preloader must NEVER trap the page.
- `useReducedMotion()`: skip animation entirely — set session flag and render null.
- `aria-hidden="true"` on the overlay.

- [ ] **Step 2: Mount in `app/[locale]/layout.tsx`**

Import `Preloader` and render `<Preloader />` as the first child inside `<SmoothScrollProvider>` (before the `dir` div). It is fixed-position so DOM order doesn't matter visually.

- [ ] **Step 3: Verify**

Run: `pnpm typecheck && pnpm lint`
Expected: PASS.

Manual sanity (implementer note): `pnpm dev`, load `/en` twice — preloader shows once, second load skips. (Record result in commit message body if checked.)

- [ ] **Step 4: Commit**

```bash
git add components/ui/Preloader.tsx "app/[locale]/layout.tsx"
git commit -m "feat(motion): add session-gated gold preloader intro"
```

---

### Task 4: Hero polish — shimmer title + grain overlay

**Files:**
- Modify: `components/features/home/HeroSection.tsx` (h1/title block ~lines 116–196)
- Modify: `components/features/home/ContactCtaSection.tsx` (section heading — only if it hand-rolls an `h2`; check first, prefer leaving `SectionHeading` usage as-is)

**Interfaces:**
- Consumes: `.gold-shimmer-text`, `.grain-overlay` from Task 1.

- [ ] **Step 1: Apply shimmer to the hero display title**

In `HeroSection.tsx`, find the main `<h1>` (inside the first `ScrollReveal`). Add class `gold-shimmer-text` to the `<h1>` element ONLY if the title is a single-line-enough string that gradient text won't hurt legibility — if the h1 contains nested spans/elements, apply the class to the outermost text wrapper instead. Do not change copy or structure beyond the class.

- [ ] **Step 2: Add grain overlay to hero**

In `HeroSection.tsx`, inside the hero `<section>`/root element (which should already be `relative` — verify; if not add `relative` and `overflow-hidden` is NOT wanted if it clips the 3D canvas, so place grain as a sibling overlay div with `absolute inset-0 z-[5] pointer-events-none` — verify `Hero3DCanvas` z-index and keep grain below interactive content):

```tsx
<div className="grain-overlay absolute inset-0 pointer-events-none" aria-hidden="true" />
```

Pick the z-index so it sits above the background canvas but below text (inspect existing z classes in the file; hero text blocks appear to be in normal flow — `z-10` on the overlay is a safe default, text has no explicit z so DOM order + positioned overlay wins; if text becomes dimmed, drop overlay to `z-0` and ensure the text container has `relative z-10`).

- [ ] **Step 3: Verify**

Run: `pnpm typecheck && pnpm lint && pnpm build`
Expected: PASS. Build guards against the className edits breaking JSX.

- [ ] **Step 4: Commit**

```bash
git add components/features/home/HeroSection.tsx
git commit -m "feat(design): add gold shimmer title and film grain to hero"
```

---

### Task 5: Projects catalog — staggered reveals

**Files:**
- Modify: `app/[locale]/projects/page.tsx` (header deck ~lines 83–107)
- Modify: `components/features/projects/ProjectCatalogView.tsx` (grid ~lines 66–82, empty state ~line 85)

**Interfaces:**
- Consumes: `ScrollReveal` from `@/components/ui/ScrollReveal` (props: `direction`, `delay`, `duration`, `distance`, `isRtl`, `className`, `threshold`).
- `ProjectCatalogView` is already `"use client"` — safe to use hooks/components.

- [ ] **Step 1: Reveal the catalog header deck**

`app/[locale]/projects/page.tsx` is a server component — `ScrollReveal` is a client component and can wrap server-rendered children. Wrap the `<div className="border border-hairline bg-surface p-6 sm:p-10 ...">` header deck in:

```tsx
<ScrollReveal isRtl={typedLocale === "ar"} direction="up">
```

(import `ScrollReveal`; `typedLocale` is already defined at line 71).

- [ ] **Step 2: Stagger project cards + reveal filter bar**

In `ProjectCatalogView.tsx`:
- Wrap `<ProjectFilters ... />` in `<ScrollReveal isRtl={isRtl} direction="up" duration={500}>`.
- In the grid map, wrap each `<ProjectCard>` in `<ScrollReveal key={project.id} delay={Math.min(idx, 8) * 70} isRtl={isRtl} direction="up" className="h-full">`. The `Math.min(idx, 8)` cap prevents long stagger tails. NOTE: `ProjectCard` already receives `className` for the featured-hero span — keep passing it; put `h-full` on the ScrollReveal wrapper so grid cells stretch.
- Wrap the empty-state `<div>` in `<ScrollReveal isRtl={isRtl}>` too.

Because `filteredProjects` changes on filter/search, `ScrollReveal`'s `once: true` means already-revealed cards stay revealed and newly-mounted cards animate in — desired behavior, no extra work.

- [ ] **Step 3: Verify**

Run: `pnpm typecheck && pnpm lint`
Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add "app/[locale]/projects/page.tsx" components/features/projects/ProjectCatalogView.tsx
git commit -m "feat(motion): staggered scroll reveals across projects catalog"
```

---

### Task 6: Case study page — section reveals, metric count-up, topology flow line

**Files:**
- Modify: `app/[locale]/projects/[slug]/page.tsx` (wrap each `<Container>` block)
- Modify: `components/features/projects/case-study/CaseStudyMetrics.tsx` (CountUp + stagger)
- Modify: `components/features/projects/case-study/ArchitectureTopology.tsx` (flow line + stagger)

**Interfaces:**
- Consumes: `ScrollReveal`, `CountUp` (`end: number`, `duration`, `prefix`, `suffix`, `className`), `useReducedMotion`.
- `MetricItem.value` is a `LocalizedString`-style `{ en: string; ar: string }` rendered as `{metric.value}` — check `types/project.ts` for the exact shape before writing the CountUp parse (it may already be a plain string per locale). If `value` is a string like `"99.9%"` or `"<40ms"`, extract leading numeric part with `/^[\d.,]+/`; render `<CountUp end={parsed} suffix={rest} duration={1400} />` when it parses, else render the string unchanged.

- [ ] **Step 1: Wrap case-study sections in `ScrollReveal`**

In `app/[locale]/projects/[slug]/page.tsx`, wrap each numbered `<Container>...</Container>` block (sections 2–8; leave `CaseStudyHero` unwrapped — it's above the fold) with `<ScrollReveal isRtl={isRtl} direction="up" delay={idx * 60}>` where `idx` increments per section. `isRtl` is defined at line 74. Import `ScrollReveal`.

- [ ] **Step 2: CountUp metrics + staggered cards**

In `CaseStudyMetrics.tsx`:
- Add `"use client"` at top (it currently has none — required for `CountUp`).
- Wrap each `<Card>` in `<ScrollReveal delay={idx * 80} isRtl={locale === "ar"} direction="up" className="h-full">`.
- Replace `{metric.value}` with a small inline parse: `const m = String(metric.value[locale] ?? metric.value).match(/^[\d.,]+/);` — if match, render `<CountUp end={parseFloat(m[0].replace(",", ""))} suffix={valueStr.slice(m[0].length)} duration={1400} className="contents" />` preserving existing wrapper classes; else render the string. Keep it compact — a tiny helper `renderMetricValue()` inside the component is fine.

- [ ] **Step 3: Topology stagger + gold flow line**

In `ArchitectureTopology.tsx`:
- Add `"use client"` (needed if using `ScrollReveal` — it has none currently).
- Wrap the `<SectionHeading>` in `<ScrollReveal isRtl={isRtl}>`.
- Wrap each stage `<Card>` in `<ScrollReveal delay={idx * 90} isRtl={isRtl} direction="up" className="h-full">`.
- Add `<div className="gold-edge-flow" aria-hidden="true" />` as first child inside each stage `Card` (the class from Task 1 is `position:absolute` — ensure the Card has `relative`, which it does via `relative group`).

- [ ] **Step 4: Verify**

Run: `pnpm typecheck && pnpm lint && pnpm build`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add "app/[locale]/projects/[slug]/page.tsx" components/features/projects/case-study/CaseStudyMetrics.tsx components/features/projects/case-study/ArchitectureTopology.tsx
git commit -m "feat(motion): cinematic reveals, count-up metrics, and flow lines on case studies"
```

---

### Task 7: Credentials catalog — staggered reveals

**Files:**
- Modify: `components/features/credentials/CredentialsCatalogView.tsx`

**Interfaces:**
- Consumes: `ScrollReveal` (same props as Task 5).

- [ ] **Step 1: Wrap page regions**

`CredentialsCatalogView.tsx` is already `"use client"`. Import `ScrollReveal` and wrap:
- The hero header block (the `flex flex-col md:flex-row ... border-b` div ~line 68) → `<ScrollReveal isRtl={isAr} direction="up">`
- The filter pills row (~line 123) → `<ScrollReveal isRtl={isAr} delay={80}>`
- Each `<CertificateCard>` in the grid map (~line 146) → `<ScrollReveal key={cert.id} delay={Math.min(idx, 8) * 60} isRtl={isAr} direction="up" className="h-full">` — add `idx` to the map callback.
- The back-link footer row (~line 157) → `<ScrollReveal isRtl={isAr} delay={120}>`

Note: cards re-mount on filter change → they replay the reveal. That's acceptable and even desirable (feedback that the list changed). Do NOT try to persist reveal state.

- [ ] **Step 2: Verify**

Run: `pnpm typecheck && pnpm lint`
Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add components/features/credentials/CredentialsCatalogView.tsx
git commit -m "feat(motion): staggered reveals across credentials catalog"
```

---

### Task 8: Showcase page + footer + route transitions

**Files:**
- Modify: `app/[locale]/showcase/page.tsx`
- Modify: `components/layout/Footer.tsx`
- Modify: `components/layout/MainWrapper.tsx`

**Interfaces:**
- Consumes: `ScrollReveal`, `.page-enter` (Task 1).

- [ ] **Step 1: Showcase reveals**

`showcase/page.tsx` is a server component — `ScrollReveal` works inside it. Wrap: breadcrumb row, `SectionHeading` block, the `LiveDemoStudio` wrapper div, and each of the two design-token cards (~lines 125–162) in `<ScrollReveal isRtl={isRtl} direction="up">` with small delays (0/80/160). Import `ScrollReveal`.

- [ ] **Step 2: Footer reveal**

`Footer.tsx` is `"use client"` but receives only `dict` — no locale. `ScrollReveal`'s `isRtl` only affects horizontal directions; footer uses `direction="up"` so `isRtl` is irrelevant — omit it. Wrap the inner `<div className="max-w-7xl ...">` content in `<ScrollReveal direction="up" threshold={0.1}>`. Also upgrade the top border from `border-t border-black/10 dark:border-white/10` to include a gold-tinted hairline: change to `border-t border-black/10 dark:border-white/10` + prepend `<div className="h-px bg-gradient-to-r from-transparent via-gold-primary/40 to-transparent" aria-hidden="true" />` as first child inside `<footer>`.

- [ ] **Step 3: Route-change page enter**

In `MainWrapper.tsx`, the `<main>` already exists. Add `key={pathname}` to a wrapper div inside `<main>` and apply `page-enter` class:

```tsx
<main id="main-content" className={...existing...}>
  <div key={pathname} className="page-enter h-full">
    {children}
  </div>
</main>
```

`pathname` is already available via `usePathname()`. `page-enter` is `both` fill mode so it won't flash. Reduced-motion users: the global `@media (prefers-reduced-motion)` block already forces `animation-duration: 0.01ms` — no extra work.

- [ ] **Step 4: Verify**

Run: `pnpm typecheck && pnpm lint && pnpm build`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add "app/[locale]/showcase/page.tsx" components/layout/Footer.tsx components/layout/MainWrapper.tsx
git commit -m "feat(motion): route transitions, footer reveal, showcase polish"
```

---

### Task 9: Full verification + governance docs + push

**Files:**
- Modify: `PROGRESS.md`, `TASKS.md`, `CHANGELOG.md`, `IMPLEMENTATION_LOG.md`

- [ ] **Step 1: Run the full gate**

```bash
pnpm typecheck && pnpm lint && pnpm build && pnpm test
```

Expected: all PASS. `pnpm test` runs `node --test tests/**/*.test.mjs` — if any test asserts on class names/structure you changed, update the TEST to match the new intended structure (do not weaken assertions).

- [ ] **Step 2: Manual browser spot-check (required by AGENTS.md §7)**

Run `pnpm dev` and verify at minimum: `/en` and `/ar` home (hero shimmer, grain, preloader once, magnetic CTA), `/en/projects` (staggered grid), one project detail page, `/en/credentials`. Check dark + light, and emulate `prefers-reduced-motion` (DevTools → Rendering) to confirm no stuck-hidden content. Note results in `IMPLEMENTATION_LOG.md`.

- [ ] **Step 3: Update governance docs**

- `CHANGELOG.md`: add entry under Unreleased/`0.2.0` — "Motion & luxury consistency pass: unified scroll reveals, magnetic CTAs, gold preloader, shimmer titles, grain, route transitions, clearer dark surfaces."
- `PROGRESS.md` / `TASKS.md`: mark this initiative COMPLETED.
- `IMPLEMENTATION_LOG.md`: append dated entry summarizing tasks 1–8 + verification results.

- [ ] **Step 4: Commit docs, then push**

```bash
git add PROGRESS.md TASKS.md CHANGELOG.md IMPLEMENTATION_LOG.md
git commit -m "docs: log motion and luxury consistency pass"
git push origin main
```

Expected: push succeeds to `origin/main` (repo `Abdulghani780/Abdulghani-AlShibami-Portfolio`).
