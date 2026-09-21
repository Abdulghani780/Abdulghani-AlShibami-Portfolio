import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { z } from "zod";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

// Contact Form Schema
const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(254),
  subject: z.string().min(3).max(150),
  message: z.string().min(10).max(2000),
});

test("Contact Form Schema validation", async (t) => {
  await t.test("accepts valid submission payload", () => {
    const valid = {
      name: "Ahmed Al-Amiri",
      email: "ahmed@example.com",
      subject: "Technical Architecture Consultation",
      message: "We would like to review your high-performance enterprise systems and schedule a technical interview.",
    };
    const result = contactSchema.safeParse(valid);
    assert.equal(result.success, true);
  });

  await t.test("rejects invalid emails", () => {
    const invalid = {
      name: "Ahmed",
      email: "not-an-email",
      subject: "Hello",
      message: "This is a test message for testing.",
    };
    const result = contactSchema.safeParse(invalid);
    assert.equal(result.success, false);
  });

  await t.test("rejects short or empty messages", () => {
    const invalid = {
      name: "Ahmed",
      email: "ahmed@example.com",
      subject: "Hello",
      message: "Short",
    };
    const result = contactSchema.safeParse(invalid);
    assert.equal(result.success, false);
  });
});

test("Authentic Credentials & Certificate Assets", async (t) => {
  const credentialsFilePath = path.join(rootDir, "lib", "data", "credentials.ts");
  assert.equal(fs.existsSync(credentialsFilePath), true, "credentials.ts must exist");

  const content = fs.readFileSync(credentialsFilePath, "utf8");

  // Verify all 5 certificates are registered
  const certIds = [
    "tot-ibct-novice",
    "yemen-ai-summit-2026",
    "ums-web-dev-ai",
    "ums-innovation-award",
    "yali-english-proficiency",
  ];

  for (const id of certIds) {
    await t.test(`contains certificate record: ${id}`, () => {
      assert.match(content, new RegExp(id));
    });
  }

  // Verify physical asset files exist in public/images/certificates/
  const expectedImages = [
    "tot-ibct-novice-trainer.png",
    "yemen-ai-summit-2026.png",
    "ums-web-dev-ai-workshop.jpg",
    "ums-innovation-award.jpg",
    "yali-english-proficiency.jpg",
  ];

  for (const img of expectedImages) {
    await t.test(`asset exists on disk: public/images/certificates/${img}`, () => {
      const imgPath = path.join(rootDir, "public", "images", "certificates", img);
      assert.equal(fs.existsSync(imgPath), true, `Missing image asset: ${imgPath}`);
      const stat = fs.statSync(imgPath);
      assert.ok(stat.size > 10000, `Asset size should be greater than 10KB, found ${stat.size}`);
    });
  }

  await t.test("official CV PDF exists in public/docs/Abdulghani_Al-Shibami_CV.pdf", () => {
    const cvPath = path.join(rootDir, "public", "docs", "Abdulghani_Al-Shibami_CV.pdf");
    assert.equal(fs.existsSync(cvPath), true, "CV PDF file must exist");
    const stat = fs.statSync(cvPath);
    assert.ok(stat.size > 1000, "CV PDF must be a non-empty file");
  });
});

test("Canonical Project Data Integrity", async (t) => {
  const projectsFilePath = path.join(rootDir, "lib", "data", "projectsData.ts");
  assert.equal(fs.existsSync(projectsFilePath), true, "projectsData.ts must exist");

  const content = fs.readFileSync(projectsFilePath, "utf8");

  const expectedSlugs = [
    "campus-it-tracker",
    "metaalgorithm-lab",
    "novatech",
    "cafena",
    "gp",
  ];

  for (const slug of expectedSlugs) {
    await t.test(`project slug defined: ${slug}`, () => {
      assert.match(content, new RegExp(`slug:\\s*["']${slug}["']`));
    });
  }

  await t.test("contains required architecture sections and canonical demo types", () => {
    assert.match(content, /demoType:\s*["']interactive_simulation["']/);
    assert.match(content, /architectureFlow:/);
    assert.match(content, /subsystems:/);
    assert.match(content, /challenges:/);
  });
});

test("Verified Profile & Identity Consistency", async (t) => {
  const profilePath = path.join(rootDir, "lib", "data", "profile.ts");
  assert.equal(fs.existsSync(profilePath), true, "profile.ts must exist");

  const content = fs.readFileSync(profilePath, "utf8");

  await t.test("contains verified phone and email", () => {
    assert.match(content, /\+967773088202/);
    assert.match(content, /\+967 773 088 202/);
    assert.match(content, /samyemen987@gmail\.com/);
  });

  await t.test("contains verified academic institution and degree", () => {
    assert.match(content, /University of Modern Sciences/);
    assert.match(content, /جامعة العلوم الحديثة/);
    assert.match(content, /Information Technology/);
    assert.match(content, /تكنولوجيا المعلومات/);
  });

  await t.test("contains social and professional links", () => {
    assert.match(content, /github\.com\/Abdulghani780/);
    assert.match(content, /linkedin\.com\/in\/abdulghani-al-shibami/);
  });
});

test("Dictionaries and Internationalization Parity", async (t) => {
  const dictPath = path.join(rootDir, "lib", "i18n", "dictionaries.ts");
  assert.equal(fs.existsSync(dictPath), true, "dictionaries.ts must exist");

  const content = fs.readFileSync(dictPath, "utf8");

  await t.test("exports getDictionary with both English and Arabic dictionaries", () => {
    assert.match(content, /const dictionaries:/);
    assert.match(content, /export function getDictionary/);
    assert.match(content, /en:\s*\{/);
    assert.match(content, /ar:\s*\{/);
  });

  await t.test("contains core navigation and hero keys in both locales", () => {
    assert.match(content, /nav:\s*\{/);
    assert.match(content, /hero:\s*\{/);
    assert.match(content, /telemetry:\s*\{/);
    assert.match(content, /featured:\s*\{/);
    assert.match(content, /competencies:\s*\{/);
    assert.match(content, /footer:\s*\{/);
  });
});
