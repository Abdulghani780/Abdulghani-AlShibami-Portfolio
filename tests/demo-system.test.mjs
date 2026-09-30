import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

test("Demo System & Simulation Integrity", async (t) => {
  const registryPath = path.join(rootDir, "demos", "registry", "index.ts");
  assert.equal(fs.existsSync(registryPath), true, "demos/registry/index.ts must exist");

  const content = fs.readFileSync(registryPath, "utf8");

  const canonicalSlugs = [
    "campus-it-tracker",
    "metaalgorithm-lab",
    "novatech",
    "cafena",
    "gp",
  ];

  for (const slug of canonicalSlugs) {
    await t.test(`demo registry entry: ${slug}`, () => {
      assert.match(content, new RegExp(`["']?${slug}["']?:\\s*\\{`));
      assert.match(content, new RegExp(`slug:\\s*["']${slug}["']`));
    });
  }

  await t.test("strictly excludes forbidden/unapproved demo entries", () => {
    const forbidden = ["auraledger"];
    for (const f of forbidden) {
      assert.doesNotMatch(content, new RegExp(`["']?${f}["']?:\\s*\\{`));
      assert.doesNotMatch(content, new RegExp(`slug:\\s*["']${f}["']`));
    }
  });

  await t.test("all 5 simulation files exist on disk and have authentic size", () => {
    const simFiles = [
      "CampusITTrackerSimulation.tsx",
      "MetaAlgorithmLabSimulation.tsx",
      "NovaTechSimulation.tsx",
      "CafenaSimulation.tsx",
      "GpSimulation.tsx",
    ];

    for (const f of simFiles) {
      const p = path.join(rootDir, "demos", "simulations", f);
      assert.equal(fs.existsSync(p), true, `Simulation file ${f} must exist`);
      const stat = fs.statSync(p);
      assert.equal(stat.size > 10000, true, `${f} must be substantive (>10KB)`);
    }
  });

  await t.test("all demo repository URLs point to owner GitHub", () => {
    const repoMatches = content.match(/repoUrl:\s*["']([^"']+)["']/g) || [];
    assert.equal(repoMatches.length >= 5, true, "All 5 demos must have repoUrl");
    for (const m of repoMatches) {
      assert.match(m, /https:\/\/github\.com\/Abdulghani780\//);
    }
  });

  await t.test("all demo entries include bilingual disclaimers", () => {
    const registrySection = content.split("export const DEMO_REGISTRY")[1] || "";
    const disclaimers = registrySection.match(/disclaimer:\s*\{[^}]+\}/g) || [];
    assert.equal(disclaimers.length >= 5, true, "All 5 demos must define disclaimer block in DEMO_REGISTRY");
    for (const d of disclaimers) {
      assert.match(d, /en:\s*["']/);
      assert.match(d, /ar:\s*["']/);
    }
  });
});
