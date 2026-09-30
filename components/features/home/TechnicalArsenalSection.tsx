"use client";

import React from "react";
import Link from "next/link";
import { Locale } from "@/lib/i18n/dictionaries";

export function TechnicalArsenalSection({ locale }: { locale: Locale }) {
  const isRtl = locale === "ar";

  const categories = [
    {
      title: isRtl ? "لغات البرمجة" : "LANGUAGES",
      techs: "Python · C# · Java · Kotlin · JavaScript · PHP",
      badges: ["Python", "C#", "Java", "Kotlin", "JS", "PHP"],
    },
    {
      title: isRtl ? "الذكاء الاصطناعي والرؤية" : "AI / COMPUTER VISION",
      techs: "TensorFlow Lite · MediaPipe · OCR · Computer Vision",
      badges: ["TFLite", "MediaPipe", "OCR", "Vision"],
    },
    {
      title: isRtl ? "تطبيقات الموبايل" : "MOBILE",
      techs: "Kotlin · Jetpack Compose · Flutter",
      badges: ["Kotlin", "Compose", "Flutter"],
    },
    {
      title: isRtl ? "قواعد البيانات" : "DATABASES",
      techs: "Oracle · SQL · Firebase · PostgreSQL",
      badges: ["Oracle", "SQL", "Firebase", "Postgres"],
    },
    {
      title: isRtl ? "الهندسة والمعمارية" : "ENGINEERING",
      techs: "UML · ERD · DFD · System Architecture · Git · GitHub",
      badges: ["UML", "ERD", "DFD", "Architecture", "Git", "GitHub"],
    },
  ];

  return (
    <section
      id="engineering"
      className="relative w-full bg-white dark:bg-[#0B0B0C] py-20 lg:py-28 border-b border-black/5 dark:border-white/5 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Link */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <h2 className="font-sans font-black text-3xl sm:text-4xl uppercase tracking-tight text-[#0B0B0C] dark:text-white">
              {isRtl ? "الترسانة التقنية" : "TECHNICAL ARSENAL"}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-sans">
              {isRtl
                ? "الأدوات واللغات والبيئات الهندسية المعتمدة في المشاريع الحقيقية."
                : "Verified production languages, frameworks, and architecture patterns."}
            </p>
          </div>

          <Link
            href={`/${locale}/projects`}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-gold-dark dark:text-gold-light hover:text-gold-primary transition-colors group"
          >
            <span>{isRtl ? "جميع الأدوات والتقنيات" : "ALL TOOLS & TECHNOLOGIES"}</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">→</span>
          </Link>
        </div>

        {/* 5 Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-[#FAF9F6] dark:bg-[#121214] hover:border-gold-primary/50 transition-all duration-300 group hover:-translate-y-1 shadow-sm"
            >
              <div>
                <h3 className="font-sans font-black text-xs sm:text-sm tracking-wider uppercase text-zinc-900 dark:text-white group-hover:text-gold-dark dark:group-hover:text-gold-light transition-colors mb-3">
                  {cat.title}
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans mb-6">
                  {cat.techs}
                </p>
              </div>

              {/* Badges / Logos container */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-black/5 dark:border-white/5">
                {cat.badges.map((b, bIdx) => (
                  <span
                    key={bIdx}
                    className="inline-flex items-center px-2 py-0.5 rounded-md bg-white dark:bg-black/40 border border-black/10 dark:border-white/10 text-[10px] font-mono font-bold text-zinc-700 dark:text-zinc-300 shadow-2xs"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
