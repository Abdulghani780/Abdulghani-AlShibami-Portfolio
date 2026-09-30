import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Locale } from "@/lib/i18n/dictionaries";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LiveDemoStudio } from "@/components/features/demos/LiveDemoStudio";
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
          <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400">
            <Link
              href={`/${locale}`}
              className="hover:text-gold-dark dark:hover:text-gold-light transition-colors"
            >
              {isRtl ? "الرئيسية" : "Home"}
            </Link>
            <span>/</span>
            <Link
              href={`/${locale}/projects`}
              className="hover:text-gold-dark dark:hover:text-gold-light transition-colors"
            >
              {isRtl ? "المشاريع" : "Projects"}
            </Link>
            <span>/</span>
            <span className="text-gold-dark dark:text-gold-light font-bold">
              {isRtl ? "استوديو العروض التفاعلية" : "Showcase"}
            </span>
          </div>

          <Link
            href={`/${locale}/projects`}
            className="text-gold-dark dark:text-gold-light hover:underline uppercase tracking-wider font-bold text-[11px]"
          >
            {isRtl ? "← العودة لدليل المشاريع" : "← Systems Catalog"}
          </Link>
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

        {/* Live Demo Studio */}
        <div className="pt-2 pb-10">
          <LiveDemoStudio locale={currentLocale} />
        </div>

        {/* Design System & Foundational UI Showcase */}
        <div className="border-t border-black/10 dark:border-white/10 pt-10 space-y-8">
          <div className="font-mono text-xs text-gold-dark dark:text-gold-light tracking-widest uppercase font-bold">
            {"// DESIGN TOKENS & SYSTEM AFFORDANCES"}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Theme & Controls */}
            <div className="p-5 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#121214] space-y-4 font-mono text-xs shadow-sm dark:shadow-xl">
              <div className="text-zinc-800 dark:text-zinc-200 font-semibold border-b border-black/5 dark:border-white/5 pb-2">
                01 // Controls & Language
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-zinc-500 dark:text-zinc-400">Theme:</span>
                  <ThemeToggle />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-zinc-500 dark:text-zinc-400">Locale:</span>
                  <LanguageSwitcher currentLocale={currentLocale} />
                </div>
                <span className="px-2 py-0.5 rounded bg-gold-primary/10 text-gold-dark dark:text-gold-light border border-gold-primary/30">
                  {isRtl ? "Arabic RTL Active" : "English LTR Active"}
                </span>
              </div>
            </div>

            {/* Buttons Matrix */}
            <div className="p-5 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#121214] space-y-4 font-mono text-xs shadow-sm dark:shadow-xl">
              <div className="text-zinc-800 dark:text-zinc-200 font-semibold border-b border-black/5 dark:border-white/5 pb-2">
                02 // Button Matrix
              </div>
              <div className="flex flex-wrap items-center gap-2.5">
                <button className="px-3.5 py-1.5 rounded-lg bg-gold-primary hover:bg-gold-light text-black font-bold text-xs shadow-sm transition-all cursor-pointer">
                  Primary Gold Action
                </button>
                <button className="px-3.5 py-1.5 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-zinc-800 dark:text-zinc-200 text-xs hover:border-gold-primary/40 transition-all cursor-pointer">
                  Secondary Surface
                </button>
                <button className="px-3.5 py-1.5 rounded-lg bg-gold-primary/10 border border-gold-primary/30 text-gold-dark dark:text-gold-light text-xs font-bold transition-all cursor-pointer">
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
