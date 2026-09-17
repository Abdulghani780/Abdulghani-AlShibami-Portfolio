import { Project, ProjectCategory, Technology } from "@/types/project";
import { PROJECTS, PROJECT_CATEGORIES, TECHNOLOGIES } from "@/lib/data/projectsData";

export interface IProjectRepository {
  getProjects(): Promise<Project[]>;
  getFeaturedProjects(): Promise<Project[]>;
  getProjectBySlug(slug: string): Promise<Project | null>;
  getProjectsByCategory(categorySlug: string): Promise<Project[]>;
  getCategories(): Promise<ProjectCategory[]>;
  getCategoryBySlug(categorySlug: string): Promise<ProjectCategory | null>;
  getTechnologies(): Promise<Technology[]>;
}

class LocalProjectRepository implements IProjectRepository {
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

// Export singleton instance for app-wide use
export const projectRepository: IProjectRepository = new LocalProjectRepository();
