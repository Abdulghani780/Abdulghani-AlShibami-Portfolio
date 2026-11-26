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
      title: isRtl ? "الذكاء الاصطناعي والرؤية" : "AI & VISION",
      techs: "PyTorch · TensorFlow · OpenCV · MediaPipe · Transformers · ONNX",
      logos: [
        { name: "PyTorch", color: "#EE4C2C", bg: "#EE4C2C15", text: "PT" },
        { name: "TensorFlow", color: "#FF6F00", bg: "#FF6F0015", text: "TF" },
        { name: "OpenCV", color: "#5C3EE8", bg: "#5C3EE815", text: "CV" },
        { name: "MediaPipe", color: "#4285F4", bg: "#4285F415", text: "MP" },
        { name: "Transformers", color: "#FFC107", bg: "#FFC10715", text: "🤗" },
        { name: "ONNX", color: "#005CED", bg: "#005CED15", text: "ONNX" },
      ],
    },
    {
      title: isRtl ? "قواعد البيانات" : "DATABASES",
      techs: "Oracle · PostgreSQL · Redis · SQLite · Entity Framework · Dapper",
      logos: [
        { name: "Oracle", color: "#F80000", bg: "#F8000015", text: "ORA" },
        { name: "PostgreSQL", color: "#336791", bg: "#33679115", text: "PG" },
        { name: "Redis", color: "#DC382D", bg: "#DC382D15", text: "RDS" },
        { name: "SQLite", color: "#003B57", bg: "#003B5715", text: "SQL" },
        { name: "EF Core", color: "#0078D4", bg: "#0078D415", text: "EF" },
        { name: "Dapper", color: "#F2F2F2", bg: "#00000015", text: "DPR" },
      ],
    },
    {
      title: isRtl ? "البنية التحتية و DevOps" : "INFRA & DEVOPS",
      techs: "Docker · GitHub Actions · RabbitMQ · Nginx · Linux · Oracle Cloud",
      logos: [
        { name: "Docker", color: "#2496ED", bg: "#2496ED15", text: "DKR" },
        { name: "GitHub Actions", color: "#2088FF", bg: "#2088FF15", text: "GHA" },
        { name: "RabbitMQ", color: "#FF6600", bg: "#FF660015", text: "RMQ" },
        { name: "Nginx", color: "#009639", bg: "#00963915", text: "NGX" },
        { name: "Linux", color: "#FCC624", bg: "#FCC62415", text: "LNX" },
        { name: "Oracle Cloud", color: "#F80000", bg: "#F8000015", text: "OCI" },
      ],
    },
    {
      title: isRtl ? "أطر عمل الواجهة" : "FRONTEND FRAMEWORKS",
      techs: "Next.js · React · Tailwind CSS · TypeScript · GSAP · Vanilla JS",
      logos: [
        { name: "Next.js", color: "#000000", bg: "#00000015", text: "NXT" },
        { name: "React", color: "#61DAFB", bg: "#61DAFB15", text: "RCT" },
        { name: "Tailwind", color: "#38BDF8", bg: "#38BDF815", text: "TW" },
        { name: "TypeScript", color: "#3178C6", bg: "#3178C615", text: "TS" },
        { name: "GSAP", color: "#88CE02", bg: "#88CE0215", text: "GSP" },
        { name: "Vanilla JS", color: "#F7DF1E", bg: "#F7DF1E20", text: "VJS" },
      ],
    },
  ];

  return (
    <section
      id="technical-arsenal"
      className="relative w-full bg-background dark:bg-background text-foreground dark:text-foreground py-20 lg:py-28 border-b border-border/5 dark:border-border/5 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal isRtl={isRtl} direction="up">
          <div className="mb-12 sm:mb-16">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand dark:text-brandLight block mb-3">
              {isRtl ? "الترسانة التقنية" : "TECHNICAL ARSENAL"}
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-foreground dark:text-foreground">
              {isRtl ? "أدوات وتقنيات أتعامل معها يومياً" : "TOOLS & TECHNOLOGIES I USE DAILY"}
            </h2>
          </div>
        </ScrollReveal>

        {/* 5 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {categories.map((cat, catIdx) => (
            <ScrollReveal key={cat.title} delay={catIdx * 80} isRtl={isRtl} direction="up" className="h-full">
              <TiltCard className="h-full p-5 rounded-2xl border border-border dark:border-border bg-surface dark:bg-surfaceElevated hover:border-brand/50 transition-all shadow-sm group hover:-translate-y-1 flex flex-col">
                {/* Category Header */}
                <div className="mb-4">
                  <h3 className="font-sans font-black text-xs sm:text-sm uppercase tracking-widest text-brand dark:text-brandLight mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-muted-foreground dark:text-muted-foreground font-mono leading-relaxed">
                    {cat.techs}
                  </p>
                </div>

                {/* Technology Logos Grid */}
                <div className="grid grid-cols-3 gap-2 flex-1">
                  {cat.logos.map((logo, logoIdx) => (
                    <div
                      key={logo.name}
                      className="rounded-xl flex items-center justify-center font-mono text-[10px] font-bold uppercase transition-all group-hover:scale-105"
                      style={{
                        backgroundColor: logo.bg,
                        color: logo.color,
                      }}
                    >
                      {logo.text}
                    </div>
                  ))}
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        {/* View All Skills CTA */}
        <ScrollReveal delay={400} isRtl={isRtl} direction="up">
          <div className="mt-10 text-center">
            <Link
              href={`/${locale}/skills`}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-brand dark:text-brandLight hover:text-brandHover dark:hover:text-brandHover transition-colors group"
            >
              <span>{isRtl ? "عرض جميع المهارات" : "VIEW ALL SKILLS"}</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">→</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}