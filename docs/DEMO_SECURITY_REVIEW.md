# DEMO SECURITY REVIEW & SANDBOX ISOLATION AUDIT

**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System  
**Scope:** Interactive Demo System Security, Sandboxing, Framing & Navigation Controls  
**Date:** September 18, 2026  

---

## 1. Security Architecture Principles

Interactive demonstrations provide hands-on experience without compromising visitor security, platform integrity, or runtime truthfulness:

1. **Explicit Technical Honesty:** Demos never mislead users regarding execution environment. Desktop applications are disclosed as browser-based simulations using mock data.
2. **Strict Browser Sandboxing:** If external or embedded content is rendered, it runs within sandboxed boundaries restricting dangerous operations.
3. **No Secret Leakage:** No server credentials, database passwords, or private environment tokens are bundled or exposed within client simulation state.
4. **State Isolation:** All simulation state is encapsulated within the demo component scope; navigating away unmounts state and releases browser memory.

---

## 2. Iframe Sandbox Policy (Embedded Demos)

For demos classified as `embedded`:
```html
<iframe
  src="{verifiedUrl}"
  sandbox="allow-scripts allow-same-origin"
  loading="lazy"
  referrerpolicy="no-referrer"
  title="{projectTitle}"
/>
```

### Restricted Capabilities
- `allow-top-navigation`: **BLOCKED**. Embedded pages cannot hijack the portfolio window or navigate the top-level frame.
- `allow-popups`: **BLOCKED**. Embedded pages cannot trigger uncoordinated popups or adware redirects.
- `allow-forms`: **OPT-IN ONLY**. Restricted to read-only or explicitly safe demonstrative forms.
- `allow-modals`: **BLOCKED**. Embedded pages cannot trigger native `alert()`, `confirm()`, or modal traps.

---

## 3. External Live Link Safety (`real_live`)

For live external systems:
- All external links render with `target="_blank"` and `rel="noopener noreferrer"`.
- Prevents reverse tab-nabbing (`window.opener` exploits).
- External URLs are strictly validated using schema validators (`z.string().url()`) before rendering.
- No unverifiable external URLs are committed as factual links.

---

## 4. Content Security Policy (CSP) Compatibility

The Next.js application headers maintain:
- `frame-ancestors 'none'`: Prevents clickjacking against the portfolio itself.
- `script-src 'self' 'unsafe-eval' 'unsafe-inline'`: Standard Next.js client hydration; no external script tags injected.
- `object-src 'none'`: Blocks Flash, Java applets, and legacy plugins.
- `base-uri 'self'`: Prevents `<base>` tag injection attacks.

---

## 5. Client Simulation Data Safety

All interactive simulations (`YusraSimulation`, `CampusITTrackerSimulation`, `MetaAlgorithmLabSimulation`, `AuraLedgerSimulation`):
- Operate exclusively on **safe synthetic mock datasets** generated at runtime.
- Contain zero real customer, financial, or personal identification data (PII).
- Do not make external unauthenticated network requests to unauthorized backend endpoints.
- Are fully responsive, keyboard accessible, and clean up event listeners on component unmount.
