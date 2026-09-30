import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Locale } from "@/lib/i18n/dictionaries";
import { HeroSection } from "@/components/features/home/HeroSection";
import { AboutSection } from "@/components/features/home/AboutSection";
import { AILabSection } from "@/components/features/home/AILabSection";
import { FeaturedProjectsSection } from "@/components/features/home/FeaturedProjectsSection";
import { FlagshipCaseStudySection } from "@/components/features/home/FlagshipCaseStudySection";
import { TechnicalArsenalSection } from "@/components/features/home/TechnicalArsenalSection";
import { AbdulghaniMethodSection } from "@/components/features/home/AbdulghaniMethodSection";
import { EducationCertificationsSection } from "@/components/features/home/EducationCertificationsSection";
import { EngineeringInPublicSection } from "@/components/features/home/EngineeringInPublicSection";
import { ContactCtaSection } from "@/components/features/home/ContactCtaSection";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://abdulghani.dev";

const HOME_META = {
  en: {
    title: "Abdulghani Al-Shibami — AI Engineer · Software Developer · Systems Thinker",
    description:
      "Executive engineering portfolio of Abdulghani Al-Shibami. Information Technology student, University of Modern Sciences, Yemen. Builder of practical AI solutions, enterprise desktop systems, and intelligent web platforms.",
    locale: "en_US",
  },
  ar: {
    title: "عبدالغني الشبامي — مهندس ذكاء اصطناعي · مطور برمجيات · مفكر أنظمة",
    description:
      "الملف الهندسي التنفيذي للمهندس عبدالغني الشبامي — طالب تكنولوجيا معلومات، جامعة العلوم الحديثة، اليمن. مطوّر حلول الذكاء الاصطناعي وأنظمة سطح المكتب والمنصات الذكية.",
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
  const ogCover = `${SITE_URL}/images/og-cover.png`;
  const ogPortrait = `${SITE_URL}/images/profile/abdulghani-portrait.webp`;

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
      images: [
        {
          url: ogCover,
          width: 1200,
          height: 630,
          alt: "Abdulghani Al-Shibami — AI Engineer · Software Developer · Systems Thinker",
        },
        {
          url: ogPortrait,
          width: 1137,
          height: 1383,
          alt: "Abdulghani Al-Shibami Portrait",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.description,
      images: [ogCover],
    },
  };
}

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
    <div className="relative min-h-screen w-full bg-[#FAF9F6] dark:bg-[#0B0B0C] text-[#0B0B0C] dark:text-white overflow-x-hidden selection:bg-gold-primary/30 selection:text-gold-dark dark:selection:text-gold-light">
      {/* ─────────────────────────────────────────────────────────────
          AUTHORITATIVE REFERENCE LAYOUT (NEW_DESIGN.PNG)
          1. Hero Section
          2. Who is Abdulghani? (About & Progression)
          3. AI Lab (6 Modules)
          4. Featured Projects (Campus IT, MetaAlgorithm, NovaTech, Cafena)
          5. Flagship Case Study — Campus IT Tracker Deep Dive
          6. Technical Arsenal (5 Categories)
          7. The Abdulghani Method (7 Nodes)
          8. Education & Certifications
          9. Engineering in Public (Heatmap, Repos, Commits, Code)
          10. Contact / Let's Build Something Intelligent
      ───────────────────────────────────────────────────────────── */}
      <main className="w-full">
        {/* Section 1: Hero */}
        <HeroSection locale={currentLocale} />

        {/* Section 2: Who is Abdulghani? */}
        <AboutSection locale={currentLocale} />

        {/* Section 3: AI Lab */}
        <AILabSection locale={currentLocale} />

        {/* Section 4: Featured Projects */}
        <FeaturedProjectsSection locale={currentLocale} />

        {/* Section 5: Flagship Case Study — Campus IT Tracker */}
        <FlagshipCaseStudySection locale={currentLocale} />

        {/* Section 6: Technical Arsenal */}
        <TechnicalArsenalSection locale={currentLocale} />

        {/* Section 7: The Abdulghani Method */}
        <AbdulghaniMethodSection locale={currentLocale} />

        {/* Section 8: Education & Certifications */}
        <EducationCertificationsSection locale={currentLocale} />

        {/* Section 9: Engineering in Public */}
        <EngineeringInPublicSection locale={currentLocale} />

        {/* Section 10: Let's Build Something Intelligent */}
        <ContactCtaSection locale={currentLocale} />
      </main>
    </div>
  );
}
