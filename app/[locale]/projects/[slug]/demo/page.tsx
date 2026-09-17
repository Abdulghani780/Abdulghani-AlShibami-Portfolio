import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectRepository } from "@/lib/services/projectRepository";
import { DemoViewer } from "@/components/features/demos/DemoViewer";
import { Locale } from "@/types/project";

interface DemoPageProps {
  params: Promise<{
    locale: Locale;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const projects = await projectRepository.getProjects();
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: DemoPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = await projectRepository.getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Demo Not Found | Abdulghani Al-Shibami",
    };
  }

  const title = locale === "ar" ? project.title.ar : project.title.en;
  const prefix = locale === "ar" ? "المحاكاة التفاعلية — " : "Interactive Demo — ";

  return {
    title: `${prefix}${title} | Abdulghani Al-Shibami`,
    description: locale === "ar" ? project.shortDescription.ar : project.shortDescription.en,
  };
}

export default async function ProjectDemoPage({ params }: DemoPageProps) {
  const { locale, slug } = await params;
  const project = await projectRepository.getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <DemoViewer project={project} locale={locale} />;
}
