import React from "react";
import type { Metadata } from "next";
import { dictionaries, Locale } from "@/lib/i18n/dictionaries";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LiveDemoStudio } from "@/components/features/demos/LiveDemoStudio";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://abdulghani.dev";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isRtl = locale === "ar";
  const url = `${SITE_URL}/${locale}/showcase`;
  const ogImage = `${SITE_URL}/images/og-cover.png`;
  const title = isRtl
    ? "استوديو العروض التفاعلية | عبدالغني الشبامي"
    : "Live Interactive Demo Studio | Abdulghani Al-Shibami";
  const description = isRtl
    ? "بيئة تشغيل تفاعلية تحاكي أنظمة سطح المكتب مع تيليمتري حقيقي وترمينال أوامر مدمج."
    : "Synchronous multi-workstation sandbox simulating authentic desktop runtime execution with real-time telemetry and terminal console.";

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: `${SITE_URL}/en/showcase`,
        ar: `${SITE_URL}/ar/showcase`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Abdulghani Al-Shibami Portfolio",
      locale: isRtl ? "ar_YE" : "en_US",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: "Abdulghani Al-Shibami — Demo Studio" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function ShowcasePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const currentLocale = (locale as Locale) || "en";
  const isRtl = currentLocale === "ar";

  return (
    <div className="py-10 space-y-12">
      <Container>
        {/* Dossier Breadcrumb & Top Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs mb-8">
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <a
              href={`/${locale}`}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              {isRtl ? "الرئيسية" : "Home"}
            </a>
            <span>/</span>
            <a
              href={`/${locale}/projects`}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              {isRtl ? "المشاريع" : "Projects"}
            </a>
            <span>/</span>
            <span className="text-indigo-600 dark:text-cyan-400 font-bold">
              {isRtl ? "استوديو العروض التفاعلية" : "Showcase"}
            </span>
          </div>

          <a
            href={`/${locale}/projects`}
            className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 hover:underline uppercase tracking-wider font-bold text-[11px]"
          >
            {isRtl ? "← العودة لدليل المشاريع" : "← Systems Catalog"}
          </a>
        </div>

        {/* Semantic h1 for accessibility and SEO — visually hidden */}
        <h1 className="sr-only">
          {isRtl ? "استوديو العروض التفاعلية" : "Live Interactive Demo Studio"}
        </h1>
        {/* Visual Section Heading */}
        <SectionHeading
          kicker="// LIVE DEMO STUDIO & WORKSTATION SANDBOX"
          title={isRtl ? "استوديو المحاكاة الحية ومعمل العتاد" : "Live Interactive Demo Studio"}
          subtitle={
            isRtl
              ? "بيئة تشغيل تفاعلية متزامنة تحاكي تشغيل الأنظمة مباشرة داخل أجهزة سطح المكتب مع تيليمتري حقيقي وترمينال أوامر مدمج."
              : "Synchronous multi-workstation sandbox simulating authentic desktop runtime execution with real-time telemetry gauges and streaming terminal console."
          }
        />

        {/* Live Demo Studio (Reference 2) */}
        <div className="pt-2 pb-10">
          <LiveDemoStudio locale={currentLocale} />
        </div>

        {/* Design System & Foundational UI Showcase */}
        <div className="border-t border-slate-200 dark:border-white/[0.08] pt-10 space-y-8">
          <div className="font-mono text-xs text-indigo-600 dark:text-cyan-400 tracking-widest uppercase font-bold">
            {"// DESIGN TOKENS & SYSTEM AFFORDANCES"}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Theme & Controls */}
            <div className="p-5 rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-surface-dark space-y-4 font-mono text-xs shadow-xs">
              <div className="text-slate-800 dark:text-white/60 font-semibold border-b border-slate-100 dark:border-white/[0.06] pb-2">
                01 // Controls & Language
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 dark:text-white/50">Theme:</span>
                  <ThemeToggle />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 dark:text-white/50">Locale:</span>
                  <LanguageSwitcher currentLocale={currentLocale} />
                </div>
                <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30">
                  {isRtl ? "Arabic RTL Active" : "English LTR Active"}
                </span>
              </div>
            </div>

            {/* Buttons Matrix */}
            <div className="p-5 rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-surface-dark space-y-4 font-mono text-xs shadow-xs">
              <div className="text-slate-800 dark:text-white/60 font-semibold border-b border-slate-100 dark:border-white/[0.06] pb-2">
                02 // Button Matrix
              </div>
              <div className="flex flex-wrap items-center gap-2.5">
                <button className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-bold text-xs shadow-[0_0_15px_rgba(99,102,241,0.35)]">
                  Primary Action
                </button>
                <button className="px-3.5 py-1.5 rounded-lg bg-slate-100 dark:bg-white/[0.04] border border-slate-300 dark:border-white/[0.1] text-slate-800 dark:text-white text-xs hover:border-indigo-500/40">
                  Secondary Slate
                </button>
                <button className="px-3.5 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/40 text-indigo-700 dark:text-indigo-300 text-xs font-bold">
                  Workstation Action
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
