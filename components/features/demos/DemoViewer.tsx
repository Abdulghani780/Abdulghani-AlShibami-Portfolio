"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Project, DemoType } from "@/types/project";
import { DEMO_REGISTRY, DemoDefinition } from "@/demos/registry";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { 
  ExternalLink, 
  Code, 
  Play, 
  FileText, 
  AlertCircle, 
  ShieldCheck, 
  ArrowLeft, 
  ArrowRight,
  Monitor
} from "lucide-react";
import { cn } from "@/lib/utils";

interface DemoViewerProps {
  project: Project;
  locale: "en" | "ar";
}

export function DemoViewer({ project, locale }: DemoViewerProps) {
  const isRtl = locale === "ar";
  const demoDef: DemoDefinition | undefined = DEMO_REGISTRY[project.slug];
  const demoType: DemoType = project.demoType;

  const [iframeError, setIframeError] = useState(false);
  const [iframeLoading, setIframeLoading] = useState(true);

  // 1. INTERACTIVE SIMULATION MODE
  if (demoType === "interactive_simulation") {
    if (demoDef && demoDef.component) {
      const SimulationComponent = demoDef.component;
      return (
        <Container className="py-6 sm:py-10">
          <SimulationComponent locale={locale} isRtl={isRtl} />
        </Container>
      );
    }
  }

  // 2. REAL LIVE DEMO MODE
  if (demoType === "real_live") {
    const targetUrl = project.liveUrl || demoDef?.liveUrl || "https://github.com/Abdulghani-Al-Shibami";
    return (
      <Container className="py-10 sm:py-16">
        <div className="max-w-2xl mx-auto p-6 sm:p-8 bg-surface dark:bg-surfaceElevated border border-border/10 dark:border-border/10 rounded-xl shadow-xl flex flex-col gap-6 text-center items-center">
          <div className="w-12 h-12 rounded-full bg-brand/15 dark:bg-brandLight/20 text-brand dark:text-brandLight flex items-center justify-center">
            <ExternalLink className="w-6 h-6" />
          </div>

          <div>
            <Badge variant="brand" className="mb-2">
              {locale === "ar" ? "تطبيق تشغيلي مباشر" : "LIVE PRODUCTION SYSTEM"}
            </Badge>
            <h1 className="text-xl sm:text-2xl font-bold text-foreground dark:text-foreground">
              {locale === "ar" ? project.title.ar : project.title.en}
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground dark:text-muted-foreground mt-2 max-w-md mx-auto leading-relaxed">
              {locale === "ar"
                ? "هذا النظام منشور ويعمل على بنية تحتية سحابية. يمكنك فتح التطبيق المباشر في علامة تبويب جديدة معزولة وآمنة."
                : "This system is deployed on production cloud infrastructure. You can launch the live verified application in a secure external tab."}
            </p>
          </div>

          <div className="p-3 bg-surfaceOverlay dark:bg-surfaceOverlay border border-border/10 dark:border-border/10 rounded-lg text-xs font-mono text-muted-foreground dark:text-muted-foreground flex items-center gap-2 max-w-md">
            <ShieldCheck className="w-4 h-4 text-status-success shrink-0" />
            <span>Target verified: rel=noopener noreferrer active</span>
          </div>

          <div className="flex items-center gap-3 flex-wrap justify-center">
            <a
              href={targetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-5 bg-brand hover:bg-brandLight text-background font-bold text-xs sm:text-sm rounded-lg flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow-md"
            >
              <span>{locale === "ar" ? "فتح التطبيق المباشر" : "Launch Live Application"}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              href={`/${locale}/projects/${project.slug}`}
              className={cn("py-2.5 px-4 bg-surfaceOverlay dark:bg-surfaceOverlay border border-border/10 dark:border-border/10 hover:border-brand/40 dark:hover:border-brandLight/40 text-muted-foreground dark:text-muted-foreground text-xs sm:text-sm rounded-lg transition-colors inline-flex items-center gap-2", isRtl ? "font-arabic" : "font-mono")}
            >
              <ArrowLeft className="w-3.5 h-3.5 rtl-flip" />
              <span>{locale === "ar" ? "العودة للدراسة المعمارية" : "Return to Case Study"}</span>
            </Link>
          </div>
        </div>
      </Container>
    );
  }

  // 3. EMBEDDED DEMO MODE
  if (demoType === "embedded") {
    const embedUrl = project.liveUrl || demoDef?.liveUrl;

    return (
      <Container className="py-6 sm:py-10">
        <div className="w-full rounded-xl border border-border/10 dark:border-border/10 bg-surface dark:bg-surfaceElevated overflow-hidden shadow-2xl flex flex-col">
          <div className="bg-surfaceOverlay dark:bg-surfaceOverlay px-4 py-3 border-b border-border/10 dark:border-border/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-status-error/80" />
              <span className="w-3 h-3 rounded-full bg-status-warning/80" />
              <span className="w-3 h-3 rounded-full bg-status-success/80" />
              <span className="text-xs font-mono text-muted-foreground dark:text-muted-foreground ml-2">
                SANDBOXED_IFRAME // {project.slug}
              </span>
            </div>

            {embedUrl && (
              <a
                href={embedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-brand dark:text-brandLight flex items-center gap-1 hover:underline"
              >
                <span>{locale === "ar" ? "فتح في نافذة مستقلة" : "Open in New Tab"}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>

          <div className="relative min-h-[550px] w-full bg-surfaceDark dark:bg-surfaceDark flex items-center justify-center">
            {embedUrl && !iframeError ? (
              <iframe
                src={embedUrl}
                sandbox="allow-scripts allow-same-origin"
                loading="lazy"
                referrerPolicy="no-referrer"
                title={locale === "ar" ? project.title.ar : project.title.en}
                className="w-full h-[600px] border-none"
                onLoad={() => setIframeLoading(false)}
                onError={() => setIframeError(true)}
              />
            ) : (
              <div className="p-8 text-center flex flex-col items-center gap-3 font-mono text-xs text-muted-foreground dark:text-muted-foreground">
                <AlertCircle className="w-8 h-8 text-status-warning" />
                <span className="text-foreground dark:text-foreground font-bold">
                  {locale === "ar"
                    ? "تعذر التضمين المباشر نظراً لقيود سياسة أمان المتصفح (CSP / X-Frame-Options)"
                    : "Embedding blocked by origin Content Security Policy (X-Frame-Options)."}
                </span>
                {embedUrl && (
                  <a
                    href={embedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 py-2 px-4 bg-brand hover:bg-brandLight text-background font-bold rounded"
                  >
                    {locale === "ar" ? "فتح العرض المباشر خارجياً" : "Open Live Demo Externally"}
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </Container>
    );
  }

  // 4. REPO DEMO MODE
  if (demoType === "repo") {
    const repoUrl = project.githubUrl || demoDef?.repoUrl || "https://github.com/Abdulghani780";
    return (
      <Container className="py-10 sm:py-16">
        <div className="max-w-2xl mx-auto p-6 sm:p-8 bg-surface dark:bg-surfaceElevated border border-border/10 dark:border-border/10 rounded-xl shadow-xl flex flex-col gap-6 text-center items-center">
          <div className="w-12 h-12 rounded-full bg-brand/15 dark:bg-brandLight/20 text-brand dark:text-brandLight flex items-center justify-center">
            <Code className="w-6 h-6" />
          </div>

          <div>
            <Badge variant="outline" className="mb-2">
              {locale === "ar" ? "المستودع البرمجي مفتوح المصدر" : "OPEN SOURCE CODEBASE"}
            </Badge>
            <h1 className="text-xl sm:text-2xl font-bold text-foreground dark:text-foreground">
              {locale === "ar" ? project.title.ar : project.title.en}
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground dark:text-muted-foreground mt-2 max-w-md mx-auto leading-relaxed">
              {locale === "ar"
                ? "يحتوي هذا المشروع على بنية معمارية ومكتبات برمجية قابلة للفحص والمراجعة على GitHub."
                : "This project showcases core software libraries and architectural code. Inspect the source repository on GitHub."}
            </p>
          </div>

          <div className="w-full bg-surfaceOverlay dark:bg-surfaceOverlay border border-border/10 dark:border-border/10 rounded-lg p-3 font-mono text-xs text-left rtl:text-left text-muted-foreground dark:text-muted-foreground flex justify-between items-center">
            <code>git clone {repoUrl}.git</code>
          </div>

          <div className="flex items-center gap-3 flex-wrap justify-center">
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-5 bg-brand hover:bg-brandLight text-background font-bold text-xs sm:text-sm rounded-lg flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow-md"
            >
              <span>{locale === "ar" ? "عرض المستودع على GitHub" : "View on GitHub"}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              href={`/${locale}/projects/${project.slug}`}
              className={cn("py-2.5 px-4 bg-surfaceOverlay dark:bg-surfaceOverlay border border-border/10 dark:border-border/10 hover:border-brand/40 dark:hover:border-brandLight/40 text-muted-foreground dark:text-muted-foreground text-xs sm:text-sm rounded-lg transition-colors inline-flex items-center gap-2", isRtl ? "font-arabic" : "font-mono")}
            >
              <ArrowLeft className="w-3.5 h-3.5 rtl-flip" />
              <span>{locale === "ar" ? "العودة للدراسة المعمارية" : "Return to Case Study"}</span>
            </Link>
          </div>
        </div>
      </Container>
    );
  }

  // 5. NONE OR UNAVAILABLE DEMO MODE
  return (
    <Container className="py-12 sm:py-20">
      <div className="max-w-xl mx-auto p-6 sm:p-8 bg-surface dark:bg-surfaceElevated border border-border/10 dark:border-border/10 rounded-xl text-center flex flex-col items-center gap-4">
        <FileText className="w-10 h-10 text-brand/80 dark:text-brandLight/80" />
        <h2 className={cn("text-lg font-bold text-foreground dark:text-foreground", isRtl ? "font-arabic-display" : "font-mono")}>
          {locale === "ar" ? "دراسة معمارية توثيقية" : "Architectural Monograph & Case Study"}
        </h2>
        <p className={cn("text-xs text-muted-foreground dark:text-muted-foreground leading-relaxed", isRtl ? "font-arabic text-arabic-body" : "")}>
          {locale === "ar"
            ? "لا يتضمن هذا النظام واجهة محاكاة مستقلة، بل تم توثيقه بالكامل عبر المخططات المعمارية وحلول الإشكاليات الهندسية."
            : "This system does not feature an active interactive sandbox; its architecture is documented in depth within the engineering case study."}
        </p>
        <Link
          href={`/${locale}/projects/${project.slug}`}
          className={cn("mt-2 py-2 px-4 bg-brand hover:bg-brandLight text-background font-bold text-xs rounded-lg inline-flex items-center gap-2", isRtl ? "font-arabic" : "font-mono")}
        >
          <ArrowLeft className="w-3.5 h-3.5 rtl-flip" />
          <span>{locale === "ar" ? "قراءة الدراسة المعمارية الكاملة" : "Read Architecture Case Study"}</span>
        </Link>
      </div>
    </Container>
  );
}