"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale } from "@/lib/i18n/dictionaries";

export function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const pathname = usePathname();
  const targetLocale: Locale = currentLocale === "en" ? "ar" : "en";

  // Replace locale segment in pathname: /en/... -> /ar/...
  const targetPath = pathname
    ? pathname.replace(new RegExp(`^/${currentLocale}`), `/${targetLocale}`)
    : `/${targetLocale}`;

  return (
    <Link
      href={targetPath}
      className="inline-flex items-center justify-center h-9 px-3 border border-hairline bg-surface hover:border-gold hover:text-gold font-mono text-[11px] font-medium tracking-wider transition-colors duration-200 uppercase"
      aria-label={`Switch language to ${targetLocale === "en" ? "English" : "Arabic"}`}
    >
      {targetLocale === "en" ? "EN" : "العربية"}
    </Link>
  );
}
