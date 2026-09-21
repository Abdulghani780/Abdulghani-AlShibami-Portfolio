import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Locale } from "@/lib/i18n/dictionaries";
import { CredentialsCatalogView } from "@/components/features/credentials/CredentialsCatalogView";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://abdulghani.dev";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";
  const url = `${SITE_URL}/${locale}/credentials`;
  const ogImage = `${SITE_URL}/images/og-cover.png`;

  const title = isAr
    ? "الشهادات والاعتمادات الرسمية | عبدالغني الشبامي"
    : "Verified Credentials & Certifications | Abdulghani Al-Shibami";
  const description = isAr
    ? "سجل الشهادات والاعتمادات المهنية والأكاديمية الموثقة للمهندس عبدالغني الشبامي."
    : "Verified professional certifications, awards, and technical training credentials for Abdulghani Al-Shibami, including IBCT TOT, UMS Innovation Award, and AI Summit participation.";

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: `${SITE_URL}/en/credentials`,
        ar: `${SITE_URL}/ar/credentials`,
      },
    },
    openGraph: {
      title,
      description: isAr
        ? "أرشيف الوثائق والشهادات الأصلية المعتمدة لعبدالغني الشبامي."
        : "Authenticated credential archive and certificate showcase for Abdulghani Al-Shibami.",
      url,
      siteName: "Abdulghani Al-Shibami Portfolio",
      locale: isAr ? "ar_YE" : "en_US",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: "Abdulghani Al-Shibami — Credentials" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function CredentialsPage({ params }: PageProps) {
  const { locale } = await params;
  if (locale !== "en" && locale !== "ar") {
    notFound();
  }

  return <CredentialsCatalogView locale={locale as Locale} />;
}
