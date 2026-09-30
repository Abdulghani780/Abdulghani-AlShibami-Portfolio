"use client";

import React from "react";
import Image from "next/image";
import { Locale } from "@/lib/i18n/dictionaries";

export function AboutSection({ locale }: { locale: Locale }) {
  const isRtl = locale === "ar";

  const corePillars = [
    {
      title: isRtl ? "تكنولوجيا المعلومات" : "Information Technology",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
    {
      title: isRtl ? "تطوير البرمجيات" : "Software Development",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      title: isRtl ? "الذكاء الاصطناعي" : "Artificial Intelligence",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
        </svg>
      ),
    },
    {
      title: isRtl ? "هندسة الأوامر" : "Prompt Engineering",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <polyline points="4 17 10 11 4 5" />
          <line x1="12" y1="19" x2="20" y2="19" />
        </svg>
      ),
    },
    {
      title: isRtl ? "التفكير المنظومي" : "Systems Thinking",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
    },
    {
      title: isRtl ? "التدريب التقني" : "Technical Training",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
  ];

  const milestones = [
    {
      step: "01",
      role: isRtl ? "طالب تقنية معلومات" : "IT STUDENT",
      desc: isRtl ? "بناء الأساس الأكاديمي والتقني" : "Learning the foundation",
    },
    {
      step: "02",
      role: isRtl ? "هندسة البرمجيات" : "SOFTWARE ENGINEERING",
      desc: isRtl ? "بناء وتطوير تطبيقات واقعية" : "Building real applications",
    },
    {
      step: "03",
      role: isRtl ? "الذكاء الاصطناعي والأتمتة" : "AI & AUTOMATION",
      desc: isRtl ? "استكشاف الأنظمة الذكية والنماذج التطبيقية" : "Exploring intelligent systems",
    },
    {
      step: "04",
      role: isRtl ? "هندسة نظم الذكاء الاصطناعي" : "AI ENGINEERING",
      desc: isRtl ? "صناعة المستقبل بالحلول المتقدمة" : "Creating the future",
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full bg-white dark:bg-[#0B0B0C] py-20 lg:py-28 border-b border-black/5 dark:border-white/5 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12 sm:mb-16">
          <h2 className="font-sans font-black text-3xl sm:text-4xl uppercase tracking-tight text-[#0B0B0C] dark:text-white">
            {isRtl ? "من هو عبدالغني؟" : "WHO IS ABDULGHANI?"}
          </h2>
          <p className="mt-2 text-sm sm:text-base font-semibold tracking-wider text-[#B88E1F] dark:text-[#E2C366] uppercase">
            {isRtl
              ? "طالب تقنية معلومات ← صانع برمجيات ← ممارس ذكاء اصطناعي"
              : "IT Student → Software Builder → AI Practitioner"}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Personal Narrative & 6 Circular Badges */}
          <div className="lg:col-span-7 space-y-8">
            <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans">
              {isRtl
                ? "أنا عبدالغني الشبامي، طالب تقنية معلومات من اليمن، شغوف بالتكنولوجيا والذكاء الاصطناعي وبناء الأنظمة النافعة. أؤمن بالتعلم المستمر، وحل المشكلات الحقيقية، وتحويل الأفكار إلى حلول برمجية عملية قابلة للتطوير."
                : "I'm Abdulghani Al-Shibami, an IT student from Yemen, passionate about technology, artificial intelligence, and building useful systems. I believe in continuous learning, solving real problems, and turning ideas into practical solutions."}
            </p>

            {/* 6 Circular Outline Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              {corePillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center p-4 rounded-xl border border-black/10 dark:border-white/10 hover:border-gold-primary/60 bg-[#FAF9F6] dark:bg-[#121214] transition-all hover:scale-[1.02] group"
                >
                  <div className="w-12 h-12 rounded-full border border-gold-primary/40 bg-gold-primary/10 flex items-center justify-center text-gold-dark dark:text-gold-light mb-3 group-hover:bg-gold-primary group-hover:text-white transition-colors">
                    {pillar.icon}
                  </div>
                  <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider leading-snug">
                    {pillar.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Vertical Progression + Shibam Quote */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8">
            {/* Timeline Milestones */}
            <div className="relative ps-6 space-y-6 before:absolute before:start-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-gold-primary/30">
              {milestones.map((m, idx) => (
                <div key={idx} className="relative group">
                  {/* Node Dot */}
                  <span className="absolute -start-[27px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-gold-primary bg-white dark:bg-[#0B0B0C] group-hover:bg-gold-primary transition-colors" />

                  <div className="bg-[#FAF9F6] dark:bg-[#121214] p-4 rounded-xl border border-black/5 dark:border-white/10 hover:border-gold-primary/50 transition-colors">
                    <span className="text-[11px] font-mono font-bold text-gold-dark dark:text-gold-light uppercase tracking-wider">
                      {m.step} • {m.role}
                    </span>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-medium mt-0.5">
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote Callout with Shibam Architectural Silhouette */}
            <div className="relative p-6 rounded-2xl border border-gold-primary/30 bg-gradient-to-br from-[#FAF9F6] to-white dark:from-[#121214] dark:to-[#0B0B0C] overflow-hidden shadow-sm">
              {/* Shibam Ancient City Watermark */}
              <div className="absolute end-0 bottom-0 opacity-15 dark:opacity-20 pointer-events-none w-36 h-24">
                <Image
                  src="/images/showcase/shibam-skyline.png"
                  alt="Shibam Skyline"
                  width={144}
                  height={96}
                  className="object-contain"
                />
              </div>

              <div className="relative z-10">
                <span className="font-serif text-3xl sm:text-4xl text-gold-primary leading-none block mb-1">“</span>
                <p className="font-serif italic text-base sm:text-lg text-zinc-800 dark:text-zinc-100 font-medium leading-relaxed">
                  {isRtl ? "أنظمة أفضل من أجل غدٍ أذكى." : "Better systems for a smarter tomorrow."}
                </p>
                <div className="mt-3 text-xs font-mono tracking-widest uppercase text-gold-dark dark:text-gold-light">
                  — Abdulghani Al-Shibami
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
