# MCP.md — MODEL CONTEXT PROTOCOL (MCP) TOOL REGISTRY

**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System  
**Version:** 1.0.0  
**Scope:** Inventory and operational guidelines for active MCP servers and autonomous tools.

---

## 1. Inventory Summary

| MCP Server / Tool | Category | Status | Access Mode |
| :--- | :--- | :--- | :--- |
| **StitchMCP** | Design & UI Prototyping | Available | Lazy MCP |
| **chrome-devtools-mcp** | Browser Testing, A11y & Performance | Available | Lazy MCP |
| **gemini-api-docs** | Documentation Assistance | Available | Eager Native MCP |
| **postman-mcp-server** | API Testing & Mocking | Available | Lazy MCP |
| **sequential-thinking** | Structured Reasoning & Planning | Available | Lazy MCP |
| **dart-mcp-server** | Dart / Flutter Interop | Available | Lazy MCP (Out-of-scope for Next.js stack) |
| **google-home-developer** | Smart Home Specs | Available | Lazy MCP (Out-of-scope for Portfolio stack) |

---

## 2. Detailed MCP Profiles

### 2.1. StitchMCP
- **Name:** StitchMCP
- **Purpose:** Accelerated visual screen generation, UI layout prototyping, design system syncing.
- **Available Actions:**
  - `create_project`, `get_project`, `delete_project`, `list_projects`
  - `list_screens`, `get_screen`, `generate_screen_from_text`, `edit_screens`, `generate_variants`
  - `upload_design_md`, `create_design_system`, `create_design_system_from_design_md`, `update_design_system`, `list_design_systems`, `apply_design_system`
- **Where Useful:** Rapidly producing visual layout variations for Hero, Project Card grids, and Interactive Demo interfaces.
- **Required Credentials:** Local IDE MCP proxy configuration.
- **Security Considerations:** Ensure no sensitive project keys or personal phone numbers are passed into external prompts.
- **Example Workflow:**
  ```text
  1. Call create_design_system with Royal Gold (#D4AF37) and Obsidian Black (#0B0B0C).
  2. Call generate_screen_from_text for Project Showcase dashboard.
  3. Extract component structure to React / Tailwind TSX.
  ```

---

### 2.2. chrome-devtools-mcp
- **Name:** chrome-devtools-mcp
- **Purpose:** Live browser DOM inspection, accessibility auditing, performance profiling, responsive viewport emulation, and layout verification.
- **Available Actions:**
  - Viewport & Navigation: `new_page`, `navigate_page`, `resize_page`, `select_page`, `close_page`
  - User Interactions: `click`, `type_text`, `fill`, `fill_form`, `press_key`, `hover`, `drag`
  - Diagnostics: `lighthouse_audit`, `performance_start_trace`, `performance_stop_trace`, `performance_analyze_insight`, `take_screenshot`, `take_snapshot`, `take_heapsnapshot`, `list_console_messages`, `list_network_requests`, `wait_for`
- **Where Useful:**
  - Verifying RTL rendering for Arabic without horizontal layout shift.
  - Ensuring Dark/Light mode color contrast meets WCAG AA (Lighthouse audit).
  - Profiling Core Web Vitals (LCP, INP, CLS) on the Next.js local dev server.
  - Interactive testing of Desktop Project Simulations.
- **Required Credentials:** Chrome debug port / local subprocess connection.
- **Security Considerations:** Only navigate to local development URLs (`http://localhost:3000`) or trusted preview deployments.
- **Example Workflow:**
  ```text
  1. Start Next.js dev server on http://localhost:3000.
  2. Call navigate_page to http://localhost:3000/ar/projects.
  3. Call resize_page to 390x844 (Mobile Viewport).
  4. Call take_screenshot and inspect layout for RTL overflow.
  5. Call lighthouse_audit for accessibility and performance scoring.
  ```

---

### 2.3. postman-mcp-server
- **Name:** postman-mcp-server
- **Purpose:** API specification validation, mock server generation, and integration testing for backend endpoints.
- **Available Actions:** `createCollection`, `createCollectionRequest`, `runCollection`, `generateSpecFromCollection`, `createMock`, etc.
- **Where Useful:** Verifying the contact form API (`/api/contact`) under simulated validation errors and high-frequency requests.
- **Required Credentials:** Postman API key (if cloud sync used; otherwise local specs).
- **Security Considerations:** Do not transmit contact form real user submissions to external Postman teams.
- **Example Workflow:**
  ```text
  1. Create collection for /api/contact endpoint.
  2. Test empty payload -> expect 400 Bad Request.
  3. Test valid payload -> expect 200 Success.
  ```

---

### 2.4. sequential-thinking
- **Name:** sequential-thinking
- **Purpose:** Step-by-step rigorous logical decomposition for multi-phase architectural decisions.
- **Available Actions:** `sequentialthinking`
- **Where Useful:** Formulating data model normalization, ERD constraints, and zero-downtime database migration sequences.

---

## 3. Autonomous Tool Capabilities (Native)
- `browser_subagent`: High-level autonomous browser navigation and recording.
- `generate_image`: Programmatic asset generation for badges, cards, and placeholders.
- `run_command`: Local shell execution for PNPM, Next.js build, Git, and testing.
- `view_file` / `write_to_file` / `replace_file_content`: Precise filesystem operations.
