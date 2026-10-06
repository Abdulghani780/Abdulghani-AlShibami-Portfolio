import React from "react";
import { notFound } from "next/navigation";
import { dictionaries, Locale } from "@/lib/i18n/dictionaries";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LocaleHtmlSync } from "@/components/layout/LocaleHtmlSync";
import { MainWrapper } from "@/components/layout/MainWrapper";
import { AbdulghaniAIModal } from "@/components/features/ai/AbdulghaniAIModal";
import { SmoothScrollProvider } from "@/components/ui/SmoothScrollProvider";
import { MagneticCursor } from "@/components/ui/MagneticCursor";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "en" && locale !== "ar") return {};

  const dict = dictionaries[locale as Locale];
  return {
    title: dict.meta.title,
    description: dict.meta.description,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (locale !== "en" && locale !== "ar") {
    notFound();
  }

  const currentLocale = locale as Locale;
  const dict = dictionaries[currentLocale];
  const isRtl = currentLocale === "ar";
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://abdulghani.dev";

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abdulghani Al-Shibami",
    alternateName: "عبدالغني الشبامي",
    jobTitle: currentLocale === "ar" ? "مهندس ذكاء اصطناعي ومطور برمجيات" : "AI Engineer & Software Developer",
    url: `${siteUrl}/${currentLocale}`,
    image: `${siteUrl}/images/profile/abdulghani-portrait.webp`,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Modern Sciences",
      alternateName: "جامعة العلوم الحديثة",
    },
    sameAs: [
      "https://github.com/Abdulghani780",
      "https://linkedin.com/in/abdulghani-alshibami",
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Kotlin",
      "Jetpack Compose",
      "TensorFlow Lite",
      "MediaPipe",
      "C# .NET",
      "Oracle Database",
      "Next.js",
      "TypeScript",
      "Python",
    ],
  };

  const profilePageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: "2024-01-01T00:00:00Z",
    dateModified: new Date().toISOString(),
    mainEntity: personJsonLd,
  };

  return (
    <SmoothScrollProvider>
      <div
        dir={isRtl ? "rtl" : "ltr"}
        lang={currentLocale}
        className="flex flex-col min-h-screen bg-canvas text-content-primary transition-colors duration-200"
      >
        <MagneticCursor />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.lang="${currentLocale}";document.documentElement.dir="${isRtl ? "rtl" : "ltr"}";`,
          }}
        />
        <LocaleHtmlSync locale={currentLocale} />
        <Navbar locale={currentLocale} dict={dict} />
        <MainWrapper locale={currentLocale}>{children}</MainWrapper>
        <Footer dict={dict} />
        <AbdulghaniAIModal locale={currentLocale} />
      </div>
    </SmoothScrollProvider>
  );
}
