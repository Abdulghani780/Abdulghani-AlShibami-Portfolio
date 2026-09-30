import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const ROOT_DIR = process.cwd();

test("Supabase Initial Migration & RLS Security Integrity", () => {
  const migrationPath = path.join(
    ROOT_DIR,
    "supabase",
    "migrations",
    "20260917000001_initial_schema.sql"
  );
  assert.ok(fs.existsSync(migrationPath), "Initial migration file must exist");
  const content = fs.readFileSync(migrationPath, "utf-8");

  // 8 Canonical Tables
  const requiredTables = [
    "public.profiles",
    "public.project_categories",
    "public.technologies",
    "public.projects",
    "public.project_technologies",
    "public.skills",
    "public.experiences",
    "public.contact_messages",
  ];
  for (const table of requiredTables) {
    assert.ok(
      content.includes(`CREATE TABLE IF NOT EXISTS ${table}`),
      `Migration must create table ${table}`
    );
    assert.ok(
      content.includes(`ALTER TABLE ${table} ENABLE ROW LEVEL SECURITY;`),
      `Table ${table} must have RLS enabled`
    );
  }

  // Performance Indexes
  const requiredIndexes = [
    "idx_projects_slug",
    "idx_projects_featured",
    "idx_projects_category",
    "idx_categories_slug",
    "idx_contact_messages_created",
  ];
  for (const index of requiredIndexes) {
    assert.ok(content.includes(index), `Migration must create index ${index}`);
  }

  // RLS Policies
  assert.ok(
    content.includes("CREATE POLICY \"Public projects are readable by everyone\""),
    "Projects must have public read policy"
  );
  assert.ok(
    content.includes("CREATE POLICY \"Anyone can submit contact message\""),
    "Contact messages must allow public INSERT"
  );
  assert.ok(
    content.includes("CREATE POLICY \"Only authenticated service role can read contact messages\""),
    "Contact messages must restrict SELECT to service_role"
  );
});

test("Supabase Canonical Seed Data Integrity", () => {
  const seedPath = path.join(ROOT_DIR, "supabase", "seed.sql");
  assert.ok(fs.existsSync(seedPath), "seed.sql must exist");
  const content = fs.readFileSync(seedPath, "utf-8");

  // Verify the 5 authentic projects
  const canonicalProjects = [
    "campus-it-tracker",
    "metaalgorithm-lab",
    "novatech",
    "cafena",
    "gp",
  ];
  for (const slug of canonicalProjects) {
    assert.ok(
      content.includes(`'${slug}'`),
      `seed.sql must include canonical project '${slug}'`
    );
  }

  // Strictly verify fabricated/unverified projects are purged
  const forbiddenProjects = ["auraledger"];
  for (const forbidden of forbiddenProjects) {
    assert.ok(
      !content.toLowerCase().includes(forbidden),
      `seed.sql must NOT contain forbidden project '${forbidden}'`
    );
  }

  // Verify owner profile details
  assert.ok(content.includes("Abdulghani Al-Shibami"), "Profile must contain owner English name");
  assert.ok(content.includes("عبدالغني علي محمد أحمد الشبامي"), "Profile must contain owner Arabic name");
  assert.ok(content.includes("samyemen987@gmail.com"), "Profile must contain verified email");

  // Verify 4 categories
  const categories = ["enterprise-desktop", "ai-research", "e-commerce", "academic-systems"];
  for (const cat of categories) {
    assert.ok(content.includes(cat), `seed.sql must contain category '${cat}'`);
  }

  // Verify authentic credentials
  assert.ok(content.includes("Bachelor of Information Technology"), "Seed must include UMS IT Degree");
  assert.ok(content.includes("TOT"), "Seed must include TOT Trainer certification");
  assert.ok(content.includes("Yemen AI Summit 2026"), "Seed must include Yemen AI Summit 2026 Honor");
  assert.ok(content.includes("Web Development Using AI Tools"), "Seed must include AI Web Dev Workshop");
  assert.ok(content.includes("YALI"), "Seed must include YALI English proficiency");

  // Idempotency: Assert ON CONFLICT handling
  assert.ok(content.includes("ON CONFLICT (slug) DO UPDATE"), "Projects must be idempotent on slug");
  assert.ok(content.includes("ON CONFLICT (id) DO UPDATE"), "Entities must be idempotent on id");
});

test("Supabase Client & Server Zero-Failure Configuration", () => {
  const clientPath = path.join(ROOT_DIR, "lib", "supabase", "client.ts");
  const serverPath = path.join(ROOT_DIR, "lib", "supabase", "server.ts");

  assert.ok(fs.existsSync(clientPath), "lib/supabase/client.ts must exist");
  assert.ok(fs.existsSync(serverPath), "lib/supabase/server.ts must exist");

  const clientContent = fs.readFileSync(clientPath, "utf-8");
  const serverContent = fs.readFileSync(serverPath, "utf-8");

  // Browser Client checks
  assert.ok(
    clientContent.includes("export function getSupabaseBrowserClient()"),
    "Browser client factory function must be exported"
  );
  assert.ok(
    clientContent.includes("return null;"),
    "Browser client must gracefully return null if unconfigured"
  );

  // Server Client checks
  assert.ok(
    serverContent.includes("export function getSupabaseServerClient()"),
    "Server client factory function must be exported"
  );
  assert.ok(
    serverContent.includes("return null;"),
    "Server client must gracefully return null if unconfigured"
  );
});

test("Hybrid Data Access Layer & Zero-Failure Fallback", () => {
  const repoPath = path.join(ROOT_DIR, "lib", "services", "projectRepository.ts");
  assert.ok(fs.existsSync(repoPath), "lib/services/projectRepository.ts must exist");
  const content = fs.readFileSync(repoPath, "utf-8");

  assert.ok(content.includes("export interface IProjectRepository"), "Must define IProjectRepository interface");
  assert.ok(content.includes("export class LocalProjectRepository"), "Must implement LocalProjectRepository");
  assert.ok(content.includes("export class HybridProjectRepository"), "Must implement HybridProjectRepository");
  assert.ok(
    content.includes("export const projectRepository: IProjectRepository = new HybridProjectRepository()"),
    "Must export singleton projectRepository instance"
  );

  // Fallback resilience checks
  assert.ok(
    content.includes("if (!client) return this.localFallback.getProjects();"),
    "Must fallback to local projects when client is null"
  );
  assert.ok(
    content.includes("if (error || !data || data.length === 0)"),
    "Must fallback to local projects when query errors or table is empty"
  );
});
