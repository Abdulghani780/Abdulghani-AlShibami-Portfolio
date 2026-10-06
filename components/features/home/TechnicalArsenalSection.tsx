"use client";

import React from "react";
import Link from "next/link";
import { Locale } from "@/lib/i18n/dictionaries";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TiltCard } from "@/components/ui/TiltCard";

export function TechnicalArsenalSection({ locale }: { locale: Locale }) {
  const isRtl = locale === "ar";

  const categories = [
    {
      title: isRtl ? "لغات البرمجة" : "LANGUAGES",
      techs: "Python · C# · Java · Kotlin · JavaScript · PHP",
      logos: [
        { name: "Python", color: "#3776AB", bg: "#3776AB15", text: "Py" },
        { name: "C#", color: "#239120", bg: "#23912015", text: "C#" },
        { name: "Java", color: "#ED8B00", bg: "#ED8B0015", text: "Java" },
        { name: "Kotlin", color: "#7F52FF", bg: "#7F52FF15", text: "Kt" },
        { name: "JavaScript", color: "#F7DF1E", bg: "#F7DF1E20", text: "JS" },
        { name: "PHP", color: "#777BB4", bg: "#777BB415", text: "PHP" },
      ],
    },
    {
      title: isRtl ? "الذكاء الاصطناعي والرؤية" : "AI COMPUTER VISION",
      techs: "TensorFlow Lite · MediaPipe · OCR · Computer Vision",
      logos: [
        { name: "TensorFlow", color: "#FF6F00", bg: "#FF6F0015", text: "TF" },
        { name: "MediaPipe", color: "#00838F", bg: "#00838F15", text: "MP" },
        { name: "OCR", color: "#0288D1", bg: "#0288D115", text: "OCR" },
        { name: "Vision", color: "#D4AF37", bg: "#D4AF3715", text: "CV" },
      ],
    },
    {
      title: isRtl ? "تطبيقات الموبايل" : "MOBILE",
      techs: "Kotlin · Jetpack Compose · Flutter",
      logos: [
        { name: "Kotlin", color: "#7F52FF", bg: "#7F52FF15", text: "Kt" },
        { name: "Compose", color: "#4285F4", bg: "#4285F415", text: "JC" },
        { name: "Flutter", color: "#02569B", bg: "#02569B15", text: "Fl" },
      ],
    },
    {
      title: isRtl ? "قواعد البيانات" : "DATABASES",
      techs: "Oracle · SQL · Firebase · PostgreSQL",
      logos: [
        { name: "Oracle", color: "#F80000", bg: "#F8000015", text: "Ora" },
        { name: "SQL", color: "#00758F", bg: "#00758F15", text: "SQL" },
        { name: "Firebase", color: "#FFCA28", bg: "#FFCA2820", text: "FB" },
        { name: "PostgreSQL", color: "#336791", bg: "#33679115", text: "PG" },
      ],
    },
    {
      title: isRtl ? "الهندسة والمعمارية" : "ENGINEERING",
      techs: "UML · ERD · DFD · System Architecture · Git · GitHub",
      logos: [
        { name: "UML", color: "#B88E1F", bg: "#B88E1F15", text: "UML" },
        { name: "ERD", color: "#00897B", bg: "#00897B15", text: "ERD" },
        { name: "DFD", color: "#5E35B1", bg: "#5E35B115", text: "DFD" },
        { name: "Git", color: "#F05032", bg: "#F0503215", text: "Git" },
        { name: "GitHub", color: "#24292E", bg: "#24292E15", text: "GH" },
      ],
    },
  ];

  return (
    <section
      id="engineering"
      className="relative w-full bg-white dark:bg-[#0B0B0C] py-20 lg:py-28 border-b border-black/5 dark:border-white/5 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Link */}
        <ScrollReveal isRtl={isRtl} direction="up">
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
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#B88E1F] dark:text-[#E2C366] hover:text-[#C59B27] transition-colors group"
            >
              <span>{isRtl ? "الأدوات والتقنيات" : "MY TOOLS & TECHNOLOGIES"}</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">→</span>
            </Link>
          </div>
        </ScrollReveal>

        {/* 5 Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {categories.map((cat, idx) => (
            <ScrollReveal key={idx} delay={idx * 80} isRtl={isRtl} direction="up" className="h-full">
              <TiltCard className="h-full flex flex-col justify-between p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-[#FAF9F6] dark:bg-[#121214] hover:border-[#C59B27]/50 transition-all duration-300 group hover:-translate-y-1 shadow-sm">
                <div>
                  <h3 className="font-sans font-black text-xs sm:text-sm tracking-wider uppercase text-zinc-900 dark:text-white group-hover:text-[#B88E1F] dark:group-hover:text-[#E2C366] transition-colors mb-3">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans mb-6">
                    {cat.techs}
                  </p>
                </div>

                {/* Colorful Tech Logo Chips */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-black/5 dark:border-white/5">
                  {cat.logos.map((logo, lIdx) => (
                    <span
                      key={lIdx}
                      title={logo.name}
                      className="inline-flex items-center justify-center px-2 py-1 rounded-md text-[10px] font-mono font-bold border transition-transform hover:scale-105"
                      style={{
                        borderColor: `${logo.color}35`,
                        backgroundColor: logo.bg,
                        color: logo.color,
                      }}
                    >
                      {logo.text}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
