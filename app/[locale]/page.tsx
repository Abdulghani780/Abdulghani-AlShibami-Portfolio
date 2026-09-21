import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Locale } from "@/lib/i18n/dictionaries";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://abdulghani.dev";

const HOME_META = {
  en: {
    title: "Abdulghani Al-Shibami — Autonomous Systems Architect & AI Engineering Leader",
    description:
      "Executive engineering portfolio of Abdulghani Al-Shibami. Information Technology student, University of Modern Sciences, Yemen. Builder of desktop systems, algorithm workstations, and AI-integrated web platforms.",
    locale: "en_US",
  },
  ar: {
    title: "عبدالغني الشبامي — مهندس نظم حاسوبية مستقلة وحلول ذكاء اصطناعي",
    description:
      "الملف الهندسي التنفيذي للمهندس عبدالغني الشبامي — طالب تكنولوجيا معلومات، جامعة العلوم الحديثة، اليمن. مطوّر أنظمة سطح المكتب ومختبرات الخوارزميات ومنصات الذكاء الاصطناعي.",
    locale: "ar_YE",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "en" && locale !== "ar") return {};
  const m = HOME_META[locale as Locale];
  const url = `${SITE_URL}/${locale}`;
  const ogImage = `${SITE_URL}/images/og-cover.png`;

  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: url,
      languages: { en: `${SITE_URL}/en`, ar: `${SITE_URL}/ar` },
    },
    openGraph: {
      title: m.title,
      description: m.description,
      url,
      siteName: "Abdulghani Al-Shibami Portfolio",
      locale: m.locale,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: "Abdulghani Al-Shibami — Engineering Portfolio" }],
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.description,
      images: [ogImage],
    },
  };
}
import { CanonicalHero } from "@/components/canonical/CanonicalHero";
import { CanonicalProjectsBento } from "@/components/canonical/CanonicalProjectsBento";
import { CanonicalDesktopSimulator } from "@/components/canonical/CanonicalDesktopSimulator";
import { CanonicalDemoStudio } from "@/components/canonical/CanonicalDemoStudio";
import { AcademicProfileSection } from "@/components/features/credentials/AcademicProfileSection";
import { CanonicalFooter } from "@/components/canonical/CanonicalFooter";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "en" && locale !== "ar") {
    notFound();
  }

  const currentLocale = locale as Locale;

  return (
    <div className="relative min-h-screen w-full bg-canvas text-content-primary overflow-x-hidden selection:bg-indigo-500/30 selection:text-indigo-300">
      {/* ─────────────────────────────────────────────────────────────
          CANONICAL FRONTEND (APPROVED VISUAL DESIGN WITH CREDENTIALS)
          1. Hero Command Center
          2. Flagship Projects Showcase Bento Grid
          3. Live Desktop OS Workstation Sandbox
          4. Multi-Workstation Dual Simulation Studio
          5. Academic Standing, Credentials & Honors
          6. Canonical Footer & Multi-Channel Contact
      ───────────────────────────────────────────────────────────── */}
      <div className="w-full">
        {/* Section 1: Hero Command Center */}
        <CanonicalHero locale={currentLocale} />

        {/* Section 2: Projects Showcase Bento Grid */}
        <CanonicalProjectsBento locale={currentLocale} />

        {/* Section 3: Native Desktop OS Workstation Sandbox */}
        <CanonicalDesktopSimulator locale={currentLocale} />

        {/* Section 4: Multi-Workstation Dual Simulation Studio */}
        <CanonicalDemoStudio locale={currentLocale} />

        {/* Section 5: Academic Standing, Credentials & Honors */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16">
          <AcademicProfileSection locale={currentLocale} />
        </div>

        {/* Section 6: Canonical Footer & Contact */}
        <CanonicalFooter locale={currentLocale} />
      </div>
    </div>
  );
}
