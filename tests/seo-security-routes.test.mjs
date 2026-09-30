import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT_DIR = process.cwd();

test("OpenGraph Social Cover Banner Asset Integrity", async () => {
  const ogCoverPath = path.join(ROOT_DIR, "public", "images", "og-cover.png");
  assert.ok(fs.existsSync(ogCoverPath), "public/images/og-cover.png must exist");

  const stat = fs.statSync(ogCoverPath);
  assert.ok(stat.size > 20000, `OG cover file size must be > 20KB, got ${stat.size} bytes`);

  const metadata = await sharp(ogCoverPath).metadata();
  assert.equal(metadata.format, "png", "OG cover must be PNG format");
  assert.equal(metadata.width, 1200, "OG cover width must be 1200px");
  assert.equal(metadata.height, 630, "OG cover height must be 630px");
});

test("Security Headers & CSP Hardening in next.config.ts", () => {
  const nextConfigPath = path.join(ROOT_DIR, "next.config.ts");
  assert.ok(fs.existsSync(nextConfigPath), "next.config.ts must exist");
  const content = fs.readFileSync(nextConfigPath, "utf-8");

  // Essential security headers
  assert.ok(content.includes("Content-Security-Policy"), "Must include Content-Security-Policy");
  assert.ok(content.includes("Strict-Transport-Security"), "Must include Strict-Transport-Security (HSTS)");
  assert.ok(content.includes("X-Frame-Options"), "Must include X-Frame-Options");
  assert.ok(content.includes("X-Content-Type-Options"), "Must include X-Content-Type-Options");
  assert.ok(content.includes("Referrer-Policy"), "Must include Referrer-Policy");
  assert.ok(content.includes("Permissions-Policy"), "Must include Permissions-Policy");

  // CSP Directives
  assert.ok(content.includes("default-src 'self'"), "CSP must define default-src 'self'");
  assert.ok(content.includes("frame-ancestors 'self'"), "CSP must restrict framing to 'self'");
});

test("Environment Variable Custody & Secret Protection", () => {
  const envExamplePath = path.join(ROOT_DIR, ".env.example");
  assert.ok(fs.existsSync(envExamplePath), ".env.example must exist");
  const content = fs.readFileSync(envExamplePath, "utf-8");

  // Must not expose private server secrets to client
  assert.ok(!content.includes("NEXT_PUBLIC_GEMINI_API_KEY"), "Gemini API key must NOT be prefixed with NEXT_PUBLIC_");
  assert.ok(!content.includes("NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY"), "Service role key must NOT be prefixed with NEXT_PUBLIC_");
  assert.ok(content.includes("GEMINI_API_KEY="), "GEMINI_API_KEY must be listed as server secret");
});

test("Robots.txt & Sitemap.xml SEO Coverage", () => {
  const robotsPath = path.join(ROOT_DIR, "app", "robots.ts");
  assert.ok(fs.existsSync(robotsPath), "app/robots.ts must exist");
  const robotsContent = fs.readFileSync(robotsPath, "utf-8");
  assert.ok(robotsContent.includes("sitemap.xml"), "robots.ts must reference sitemap.xml");
  assert.ok(robotsContent.includes("disallow: [\"/api/\"]"), "robots.ts must disallow /api/");

  const sitemapPath = path.join(ROOT_DIR, "app", "sitemap.ts");
  assert.ok(fs.existsSync(sitemapPath), "app/sitemap.ts must exist");
  const sitemapContent = fs.readFileSync(sitemapPath, "utf-8");

  const canonicalSlugs = [
    "campus-it-tracker",
    "metaalgorithm-lab",
    "cafena",
    "novatech",
    "gp",
  ];
  for (const slug of canonicalSlugs) {
    assert.ok(sitemapContent.includes(slug), `sitemap.ts must include canonical slug: ${slug}`);
  }
  assert.ok(sitemapContent.includes('["en", "ar"]'), "sitemap.ts must index both English and Arabic");
});

test("JSON-LD Structured Data Implementation", () => {
  const layoutPath = path.join(ROOT_DIR, "app", "[locale]", "layout.tsx");
  assert.ok(fs.existsSync(layoutPath), "app/[locale]/layout.tsx must exist");
  const layoutContent = fs.readFileSync(layoutPath, "utf-8");

  assert.ok(layoutContent.includes('"@type": "Person"'), "Layout must inject Person JSON-LD");
  assert.ok(layoutContent.includes("Abdulghani Al-Shibami"), "JSON-LD must reference owner name");
  assert.ok(layoutContent.includes("University of Modern Sciences"), "JSON-LD must reference university");

  const projectDetailPagePath = path.join(ROOT_DIR, "app", "[locale]", "projects", "[slug]", "page.tsx");
  assert.ok(fs.existsSync(projectDetailPagePath), "project detail page must exist");
  const projectContent = fs.readFileSync(projectDetailPagePath, "utf-8");

  assert.ok(projectContent.includes('"@type": "SoftwareApplication"'), "Project page must inject SoftwareApplication JSON-LD");
});

test("Production Maintenance Guide Documentation Integrity", () => {
  const guidePath = path.join(ROOT_DIR, "docs", "deployment", "MAINTENANCE_GUIDE.md");
  assert.ok(fs.existsSync(guidePath), "docs/deployment/MAINTENANCE_GUIDE.md must exist");
  const content = fs.readFileSync(guidePath, "utf-8");

  assert.ok(content.includes("Routine Maintenance Protocols"), "Must include routine maintenance protocols");
  assert.ok(content.includes("Supabase Database Operations"), "Must include database operations");
  assert.ok(content.includes("Gemini AI Assistant Operations"), "Must include AI assistant operations");
  assert.ok(content.includes("Emergency Incident Response Runbook"), "Must include emergency incident response");
});

