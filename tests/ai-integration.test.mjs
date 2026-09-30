import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const ROOT_DIR = process.cwd();

test("AI Chat Route Architecture, Security & Rate Limiting", () => {
  const routePath = path.join(ROOT_DIR, "app", "api", "ai", "chat", "route.ts");
  assert.ok(fs.existsSync(routePath), "app/api/ai/chat/route.ts must exist");
  const content = fs.readFileSync(routePath, "utf-8");

  // Server-side secret custody
  assert.ok(
    content.includes("process.env.GEMINI_API_KEY"),
    "Route must reference GEMINI_API_KEY server-side"
  );
  assert.ok(
    !content.includes("NEXT_PUBLIC_GEMINI_API_KEY"),
    "GEMINI_API_KEY must NEVER use NEXT_PUBLIC_ prefix"
  );

  // Rate Limiting
  assert.ok(content.includes("checkRateLimit"), "Route must enforce rate limiting");
  assert.ok(content.includes("RATE_LIMIT_WINDOW_MS"), "Rate limiter must define window duration");
  assert.ok(content.includes("429"), "Rate limiter must return HTTP 429 when threshold exceeded");

  // Zod Payload Validation
  assert.ok(content.includes("ChatRequestSchema"), "Route must define Zod validation schema");
  assert.ok(content.includes("max(800"), "Message must be capped at 800 characters to prevent buffer abuse");
  assert.ok(content.includes('z.enum(["en", "ar"])'), "Locale must be strictly validated as en or ar");

  // Zero-failure fallback
  assert.ok(
    content.includes("generateOfflineResponse"),
    "Route must include deterministic offline response generator"
  );
});

test("AI Knowledge Base & Grounding Prompt Integrity", () => {
  const knowledgePath = path.join(ROOT_DIR, "lib", "ai", "knowledge.ts");
  assert.ok(fs.existsSync(knowledgePath), "lib/ai/knowledge.ts must exist");
  const content = fs.readFileSync(knowledgePath, "utf-8");

  // Owner Identity
  assert.ok(content.includes("Abdulghani Al-Shibami"), "Knowledge base must contain owner name");
  assert.ok(content.includes("Information Technology"), "Knowledge base must contain IT field");
  assert.ok(content.includes("samyemen987@gmail.com"), "Knowledge base must contain verified email");

  // The 5 Canonical Projects
  const canonicalProjects = [
    "Campus IT Tracker",
    "MetaAlgorithmLab",
    "Cafena",
    "NovaTech",
    "Graduation Project Management System (GP)",
  ];
  for (const proj of canonicalProjects) {
    assert.ok(content.includes(proj), `Knowledge base must include canonical project: ${proj}`);
  }

  // Strictly assert 0 fabricated projects
  const forbiddenProjects = ["yusra", "auraledger", "nexora-tech"];
  for (const forbidden of forbiddenProjects) {
    assert.ok(
      !content.toLowerCase().includes(forbidden),
      `Knowledge base must NOT contain forbidden project: ${forbidden}`
    );
  }

  // Authentic Credentials
  assert.ok(content.includes("Train-The-Trainer"), "Knowledge base must contain TOT certification");
  assert.ok(content.includes("Yemen AI Summit 2026"), "Knowledge base must contain Yemen AI Summit honor");
  assert.ok(content.includes("Web Development Using AI Tools"), "Knowledge base must contain AI Workshop");
  assert.ok(content.includes("Innovation & Entrepreneurship Competition"), "Knowledge base must contain Innovation Award");
  assert.ok(content.includes("YALI"), "Knowledge base must contain YALI English certification");

  // Anti-Hallucination Guardrails
  assert.ok(content.includes("Never Hallucinate"), "Knowledge base must include anti-hallucination guardrail");
  assert.ok(content.includes("Answer ONLY based on the facts listed above"), "Prompt must enforce strict grounding");
});

test("AI Modal Component Ergonomics & Accessibility", () => {
  const modalPath = path.join(ROOT_DIR, "components", "features", "ai", "AbdulghaniAIModal.tsx");
  assert.ok(fs.existsSync(modalPath), "AbdulghaniAIModal.tsx must exist");
  const content = fs.readFileSync(modalPath, "utf-8");

  // Keyboard accessibility
  assert.ok(content.includes('"Escape"'), "Modal must close on Escape keydown");

  // Accessibility labels
  assert.ok(content.includes('aria-label='), "Modal buttons must include accessible aria-labels");

  // UI state features
  assert.ok(content.includes("isMinimized"), "Modal must support minimize/maximize state");
  assert.ok(content.includes("handleClear"), "Modal must support clearing conversation history");
  assert.ok(content.includes("suggestedQuestions"), "Modal must provide suggested quick-action questions");

  // Dual-theme and aesthetic tokens
  assert.ok(content.includes("gold-primary"), "Modal must use gold-primary design tokens");
  assert.ok(content.includes("dark:bg-[#121214]"), "Modal must use obsidian dark background token");
});
