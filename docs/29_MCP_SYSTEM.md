# 29 — MCP SYSTEM INTEGRATION SPECIFICATION

**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System  

---

## 1. Integrated Model Context Protocol (MCP) Servers

### 1.1. StitchMCP
- **Role:** Design token translation, UI mockup synthesis, and component prototyping.
- **Integration Points:** Used during Phase 03 and Phase 04 to validate Royal Gold and Obsidian Black component layouts.

### 1.2. chrome-devtools-mcp
- **Role:** Live browser runtime execution, Core Web Vitals tracing, DOM snapshot analysis, and accessibility auditing.
- **Integration Points:**
  - Automated Lighthouse audits on `http://localhost:3000`.
  - Emulation of mobile screen sizes (375px, 390px, 414px) and desktop monitors (1440px, 1920px).
  - Validation of Arabic RTL layout mirroring and prevention of horizontal overflow.

### 1.3. postman-mcp-server
- **Role:** API route contract testing and payload validation.
- **Integration Points:** Verifying `/api/contact` against spam, malformed emails, and boundary condition inputs.

### 1.4. gemini-api-docs
- **Role:** Up-to-date documentation retrieval for SDK and AI model integrations.
