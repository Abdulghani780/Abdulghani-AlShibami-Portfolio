import { Project, ProjectCategory, Technology } from "@/types/project";
import { PROJECTS, PROJECT_CATEGORIES, TECHNOLOGIES } from "@/lib/data/projectsData";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export interface IProjectRepository {
  getProjects(): Promise<Project[]>;
  getFeaturedProjects(): Promise<Project[]>;
  getProjectBySlug(slug: string): Promise<Project | null>;
  getProjectsByCategory(categorySlug: string): Promise<Project[]>;
  getCategories(): Promise<ProjectCategory[]>;
  getCategoryBySlug(categorySlug: string): Promise<ProjectCategory | null>;
  getTechnologies(): Promise<Technology[]>;
}

export class LocalProjectRepository implements IProjectRepository {
  async getProjects(): Promise<Project[]> {
    return [...PROJECTS];
  }

  async getFeaturedProjects(): Promise<Project[]> {
    return PROJECTS.filter((p) => p.featured);
  }

  async getProjectBySlug(slug: string): Promise<Project | null> {
    const project = PROJECTS.find((p) => p.slug === slug);
    return project ? { ...project } : null;
  }

  async getProjectsByCategory(categorySlug: string): Promise<Project[]> {
    if (!categorySlug || categorySlug === "all") {
      return this.getProjects();
    }
    return PROJECTS.filter((p) => p.categorySlug === categorySlug);
  }

  async getCategories(): Promise<ProjectCategory[]> {
    return [...PROJECT_CATEGORIES].sort((a, b) => a.displayOrder - b.displayOrder);
  }

  async getCategoryBySlug(categorySlug: string): Promise<ProjectCategory | null> {
    const cat = PROJECT_CATEGORIES.find((c) => c.slug === categorySlug);
    return cat ? { ...cat } : null;
  }

  async getTechnologies(): Promise<Technology[]> {
    return Object.values(TECHNOLOGIES);
  }
}

/**
 * Resilient Hybrid Repository:
 * First attempts to query Supabase cloud tables.
 * If Supabase is unconfigured, unreachable, or returns 0 rows (unseeded database),
 * it seamlessly and gracefully falls back to the local verified dataset.
 */
export class HybridProjectRepository implements IProjectRepository {
  private localFallback = new LocalProjectRepository();

  async getProjects(): Promise<Project[]> {
    try {
      const client = getSupabaseServerClient();
      if (!client) return this.localFallback.getProjects();

      const { data, error } = await client
        .from("projects")
        .select("slug")
        .order("display_order", { ascending: true });

      if (error || !data || data.length === 0) {
        return this.localFallback.getProjects();
      }

      // Merge order and status from database with rich local case study structure
      const projects: Project[] = [];
      for (const row of data) {
        const local = await this.localFallback.getProjectBySlug(row.slug);
        if (local) {
          projects.push(local);
        }
      }

      return projects.length > 0 ? projects : this.localFallback.getProjects();
    } catch {
      return this.localFallback.getProjects();
    }
  }

  async getFeaturedProjects(): Promise<Project[]> {
    try {
      const client = getSupabaseServerClient();
      if (!client) return this.localFallback.getFeaturedProjects();

      const { data, error } = await client
        .from("projects")
        .select("slug")
        .eq("featured", true)
        .order("display_order", { ascending: true });

      if (error || !data || data.length === 0) {
        return this.localFallback.getFeaturedProjects();
      }

      const featured: Project[] = [];
      for (const row of data) {
        const local = await this.localFallback.getProjectBySlug(row.slug);
        if (local) {
          featured.push(local);
        }
      }

      return featured.length > 0 ? featured : this.localFallback.getFeaturedProjects();
    } catch {
      return this.localFallback.getFeaturedProjects();
    }
  }

  async getProjectBySlug(slug: string): Promise<Project | null> {
    return this.localFallback.getProjectBySlug(slug);
  }

  async getProjectsByCategory(categorySlug: string): Promise<Project[]> {
    return this.localFallback.getProjectsByCategory(categorySlug);
  }

  async getCategories(): Promise<ProjectCategory[]> {
    try {
      const client = getSupabaseServerClient();
      if (!client) return this.localFallback.getCategories();

      const { data, error } = await client
        .from("project_categories")
        .select("*")
        .order("display_order", { ascending: true });

      if (error || !data || data.length === 0) {
        return this.localFallback.getCategories();
      }

      return data.map((d: { id: string; slug: string; name_en: string; name_ar: string; display_order: number }) => ({
        id: d.id,
        slug: d.slug,
        name: {
          en: d.name_en,
          ar: d.name_ar,
        },
        displayOrder: d.display_order,
      }));
    } catch {
      return this.localFallback.getCategories();
    }
  }

  async getCategoryBySlug(categorySlug: string): Promise<ProjectCategory | null> {
    return this.localFallback.getCategoryBySlug(categorySlug);
  }

  async getTechnologies(): Promise<Technology[]> {
    return this.localFallback.getTechnologies();
  }
}

// Export singleton instance for app-wide use
export const projectRepository: IProjectRepository = new HybridProjectRepository();
