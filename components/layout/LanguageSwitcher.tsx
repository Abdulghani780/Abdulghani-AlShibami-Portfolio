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
      className="inline-flex items-center gap-1.5 h-8 px-2.5 rounded-lg border border-slate-300/80 dark:border-slate-700/60 bg-slate-100 dark:bg-slate-800/40 hover:border-indigo-400 dark:hover:border-indigo-500/60 text-slate-700 dark:text-slate-300 font-mono text-[11px] font-medium tracking-wider transition-all duration-200"
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
        className="text-indigo-500 dark:text-indigo-400 shrink-0"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" x2="22" y1="12" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
      <span className="flex items-center gap-1">
        <span
          className={
            currentLocale === "en"
              ? "font-bold text-indigo-600 dark:text-cyan-400"
              : "text-slate-400 dark:text-slate-500"
          }
        >
          EN
        </span>
        <span className="text-slate-300 dark:text-slate-600 text-[9px]">/</span>
        <span
          className={
            currentLocale === "ar"
              ? "font-bold text-indigo-600 dark:text-cyan-400 font-sans"
              : "text-slate-400 dark:text-slate-500 font-sans"
          }
        >
          عربي
        </span>
      </span>
    </Link>
  );
}
