import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const ROOT_DIR = process.cwd();

test("Design System Token Integrity in app/globals.css", () => {
  const cssPath = path.join(ROOT_DIR, "app", "globals.css");
  assert.ok(fs.existsSync(cssPath), "app/globals.css must exist");

  const css = fs.readFileSync(cssPath, "utf-8");

  // Check root light mode tokens
  assert.ok(css.includes("--canvas-bg: #FAF9F6;"), "Light mode canvas background should be Porcelain (#FAF9F6)");
  assert.ok(css.includes("--gold-primary: #B88E1F;"), "Light mode gold-primary should be WCAG AA compliant Gold (#B88E1F)");
  assert.ok(css.includes("--electric-indigo: #6366F1;"), "Electric Indigo variable should be formalized");
  assert.ok(css.includes("--electric-cyan: #06B6D4;"), "Electric Cyan variable should be formalized");

  // Check dark mode tokens
  assert.ok(css.includes("--canvas-bg: #0B0B0C;"), "Dark mode canvas background should be Deep Obsidian (#0B0B0C)");
  assert.ok(css.includes("--gold-primary: #D4AF37;"), "Dark mode gold-primary should be Royal Gold (#D4AF37)");
  assert.ok(css.includes("--surface-elevated: #121214;"), "Dark mode surface-elevated should be Elevated Obsidian (#121214)");

  // Verify --gold-primary is NOT mapped to indigo/purple (#6366F1)
  assert.ok(!css.match(/--gold-primary:\s*#6366F1/i), "Conflicting alias --gold-primary -> #6366F1 must be eliminated");
});

test("Tailwind Config Token Architecture", () => {
  const configPath = path.join(ROOT_DIR, "tailwind.config.ts");
  assert.ok(fs.existsSync(configPath), "tailwind.config.ts must exist");

  const config = fs.readFileSync(configPath, "utf-8");

  assert.ok(config.includes('darkMode: "class"'), "Tailwind dark mode must be class-based");
  assert.ok(config.includes("obsidian:"), "Tailwind config must include obsidian token");
  assert.ok(config.includes("porcelain:"), "Tailwind config must include porcelain token");
  assert.ok(config.includes('"var(--gold-primary)"'), "Tailwind gold must reference var(--gold-primary)");
  assert.ok(config.includes("electric:"), "Tailwind config must include electric accent tokens");
});

test("Home Sections Dual-Theme & High Contrast Validation", () => {
  const homeDir = path.join(ROOT_DIR, "components", "features", "home");
  const homeFiles = fs.readdirSync(homeDir).filter((f) => f.endsWith(".tsx"));

  assert.ok(homeFiles.length >= 10, "Expected at least 10 homepage section components");

  for (const file of homeFiles) {
    const content = fs.readFileSync(path.join(homeDir, file), "utf-8");

    // Each section must contain dark mode variants for backgrounds or text
    assert.ok(
      content.includes("dark:") || content.includes("var("),
      `Component ${file} must include dark mode classes or CSS variables for dual-theme compatibility`
    );

    // Assert absence of unverified AuraLedger references in any home component
    assert.ok(
      !content.toLowerCase().includes("auraledger"),
      `Component ${file} must not contain references to AuraLedger`
    );
  }
});
