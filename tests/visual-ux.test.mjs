import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const ROOT_DIR = process.cwd();

test("Hero Section Responsive & Logical Alignment", () => {
  const filePath = path.join(ROOT_DIR, "components", "features", "home", "HeroSection.tsx");
  assert.ok(fs.existsSync(filePath), "HeroSection.tsx must exist");
  const content = fs.readFileSync(filePath, "utf-8");

  // Grid responsiveness: stacks on mobile/tablet, 12-col on lg
  assert.ok(content.includes("grid-cols-1 lg:grid-cols-12"), "Hero must define responsive grid-cols-1 lg:grid-cols-12");
  assert.ok(content.includes("lg:col-span-7"), "Hero left column must span 7 cols on lg");
  assert.ok(content.includes("lg:col-span-5"), "Hero right column must span 5 cols on lg");

  // Logical positioning
  assert.ok(content.includes("start-4"), "Hero overlay badge must use logical start-4");
  assert.ok(content.includes("end-4"), "Hero tech text must use logical end-4");
  assert.ok(content.includes("text-end"), "Hero circuit linework text must align to text-end");

  // Authentic portrait asset verification
  assert.ok(content.includes("abdulghani-portrait.webp"), "Hero must reference authentic WebP portrait");
  assert.ok(
    fs.existsSync(path.join(ROOT_DIR, "public", "images", "profile", "abdulghani-portrait.webp")),
    "abdulghani-portrait.webp must exist on disk in public/images/profile/"
  );
});

test("Flagship Case Study Section Responsive Grid & Logical Layout", () => {
  const filePath = path.join(ROOT_DIR, "components", "features", "home", "FlagshipCaseStudySection.tsx");
  assert.ok(fs.existsSync(filePath), "FlagshipCaseStudySection.tsx must exist");
  const content = fs.readFileSync(filePath, "utf-8");

  // 5-stage lifecycle grid
  assert.ok(
    content.includes("grid-cols-1 md:grid-cols-2 lg:grid-cols-5"),
    "Lifecycle must define responsive 5-column grid"
  );

  // Logical positioning
  assert.ok(content.includes("start-4 end-4"), "Simulator preview banner must use logical start-4 end-4");
});

test("Home Sections Responsive Breakpoints & Grid Scaling", () => {
  const homeDir = path.join(ROOT_DIR, "components", "features", "home");

  // Featured Projects: 1 col on mobile, 2 col on tablet/desktop
  const featured = fs.readFileSync(path.join(homeDir, "FeaturedProjectsSection.tsx"), "utf-8");
  assert.ok(featured.includes("grid-cols-1 md:grid-cols-2"), "Featured projects must scale md:grid-cols-2");

  // AI Lab: 1 col mobile, 2 col sm, 3 col lg, 6 col xl
  const aiLab = fs.readFileSync(path.join(homeDir, "AILabSection.tsx"), "utf-8");
  assert.ok(
    aiLab.includes("grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"),
    "AI Lab must scale across mobile, tablet, and widescreen"
  );

  // Engineering in Public: 1 col mobile, 2 col md, 4 col lg
  const engineering = fs.readFileSync(path.join(homeDir, "EngineeringInPublicSection.tsx"), "utf-8");
  assert.ok(
    engineering.includes("grid-cols-1 md:grid-cols-2 lg:grid-cols-4"),
    "Engineering section must scale to 4 columns on desktop"
  );

  // Technical Arsenal: 1 col mobile, 2 col md, 5 col lg
  const arsenal = fs.readFileSync(path.join(homeDir, "TechnicalArsenalSection.tsx"), "utf-8");
  assert.ok(
    arsenal.includes("grid-cols-1 md:grid-cols-2 lg:grid-cols-5"),
    "Technical arsenal must scale to 5 categories on desktop"
  );

  // About Section: Logical CSS properties
  const about = fs.readFileSync(path.join(homeDir, "AboutSection.tsx"), "utf-8");
  assert.ok(about.includes("ps-6"), "About timeline must use logical padding ps-6");
  assert.ok(about.includes("-start-[27px]"), "Timeline dot must use logical -start-[27px]");
  assert.ok(about.includes("end-0 bottom-0"), "Shibam skyline watermark must use logical end-0");
});

test("Catalog Views Standardized Responsive Grids", () => {
  const projectsCatalog = fs.readFileSync(
    path.join(ROOT_DIR, "components", "features", "projects", "ProjectCatalogView.tsx"),
    "utf-8"
  );
  assert.ok(
    projectsCatalog.includes("grid-cols-1 md:grid-cols-2 lg:grid-cols-3"),
    "Project catalog must use standard 3-column responsive grid"
  );

  const credsCatalog = fs.readFileSync(
    path.join(ROOT_DIR, "components", "features", "credentials", "CredentialsCatalogView.tsx"),
    "utf-8"
  );
  assert.ok(
    credsCatalog.includes("grid-cols-1 md:grid-cols-2 lg:grid-cols-3"),
    "Credentials catalog must use standard 3-column responsive grid"
  );
});
