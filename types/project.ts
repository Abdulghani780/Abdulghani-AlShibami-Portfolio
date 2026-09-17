export type Locale = "en" | "ar";

export type DemoType =
  | "real_live"
  | "embedded"
  | "interactive_simulation"
  | "video"
  | "repo"
  | "none";

export interface ProjectCategory {
  id: string;
  slug: string;
  name: {
    en: string;
    ar: string;
  };
  displayOrder: number;
}

export interface Technology {
  id: string;
  name: string;
  category: "Language" | "Framework" | "Protocol" | "Database" | "Tool" | "Cloud";
}

export interface MetricItem {
  label: {
    en: string;
    ar: string;
  };
  value: string;
  description: {
    en: string;
    ar: string;
  };
}

export interface ArchitectureStage {
  step: string;
  name: {
    en: string;
    ar: string;
  };
  desc: {
    en: string;
    ar: string;
  };
}

export interface SubsystemItem {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  desc: {
    en: string;
    ar: string;
  };
  tag: string;
}

export interface CaseStudy {
  problem: {
    en: string;
    ar: string;
  };
  solution: {
    en: string;
    ar: string;
  };
  architectureFlow: ArchitectureStage[];
  subsystems: SubsystemItem[];
  challenges: {
    en: string[];
    ar: string[];
  };
  results: {
    en: string[];
    ar: string[];
  };
  metrics: MetricItem[];
  whitepaperUrl?: string;
}

export interface Project {
  id: string;
  slug: string;
  categorySlug: string;
  title: {
    en: string;
    ar: string;
  };
  shortDescription: {
    en: string;
    ar: string;
  };
  year: number;
  status: "Completed" | "In Progress" | "Maintained";
  featured: boolean;
  technologies: Technology[];
  githubUrl?: string;
  liveUrl?: string;
  demoType: DemoType;
  demoUrl?: string;
  thumbnailUrl?: string;
  caseStudy: CaseStudy;
}
