import React from "react";
import { notFound } from "next/navigation";
import { dictionaries, Locale } from "@/lib/i18n/dictionaries";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LocaleHtmlSync } from "@/components/layout/LocaleHtmlSync";

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

  return (
    <div
      dir={isRtl ? "rtl" : "ltr"}
      lang={currentLocale}
      className="flex flex-col min-h-screen bg-canvas text-content-primary transition-colors duration-200"
    >
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang="${currentLocale}";document.documentElement.dir="${isRtl ? "rtl" : "ltr"}";`,
        }}
      />
      <LocaleHtmlSync locale={currentLocale} />
      <Navbar locale={currentLocale} dict={dict} />
      <main className="flex-1 w-full">{children}</main>
      <Footer dict={dict} />
    </div>
  );
}
