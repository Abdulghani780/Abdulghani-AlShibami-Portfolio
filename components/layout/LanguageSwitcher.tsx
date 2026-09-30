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
      className="inline-flex items-center gap-1.5 h-8 px-2.5 rounded-lg border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:border-gold-primary/50 text-zinc-700 dark:text-zinc-300 font-mono text-[11px] font-medium tracking-wider transition-all duration-200"
      aria-label={`Switch language to ${targetLocale === "en" ? "English" : "Arabic"}`}
      title={currentLocale === "en" ? "التحويل إلى اللغة العربية" : "Switch to English"}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-gold-dark dark:text-gold-light shrink-0"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" x2="22" y1="12" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
      <span className="flex items-center gap-1">
        <span
          className={
            currentLocale === "en"
              ? "font-bold text-gold-dark dark:text-gold-light"
              : "text-zinc-400 dark:text-zinc-500"
          }
        >
          EN
        </span>
        <span className="text-zinc-300 dark:text-zinc-600 text-[9px]">/</span>
        <span
          className={
            currentLocale === "ar"
              ? "font-bold text-gold-dark dark:text-gold-light font-sans"
              : "text-zinc-400 dark:text-zinc-500 font-sans"
          }
        >
          عربي
        </span>
      </span>
    </Link>
  );
}
