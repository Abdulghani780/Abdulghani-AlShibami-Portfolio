"use client";

import React from "react";
import Link from "next/link";
import { Locale } from "@/lib/i18n/dictionaries";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TiltCard } from "@/components/ui/TiltCard";

export function AILabSection({ locale }: { locale: Locale }) {
  const isRtl = locale === "ar";

  const aiModules = [
    {
      num: "01",
      title: isRtl ? "هندسة الأوامر" : "Prompt Engineering",
      desc: isRtl ? "أوامر أدق. نتائج أفضل." : "Better prompts. Better results.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <polyline points="4 17 10 11 4 5" />
          <line x1="12" y1="19" x2="20" y2="19" />
        </svg>
      ),
    },
    {
      num: "02",
      title: isRtl ? "تطبيقات مدعومة بالذكاء" : "AI-Powered Applications",
      desc: isRtl ? "من الفكرة إلى منتجات ذكية." : "From ideas to intelligent products.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3m0 14v3M2 12h3m14 0h3M5 5l2 2m10 10l2 2M5 19l2-2m10-10l2-2" />
        </svg>
      ),
    },
    {
      num: "03",
      title: isRtl ? "الرؤية الحاسوبية" : "Computer Vision",
      desc: isRtl ? "رؤية. فهم. بناء." : "See. Understand. Build.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
          <path d="M3 3h4M3 3v4M21 3h-4M21 3v4M3 21h4M3 21v-4M21 21h-4M21 21v-4" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      num: "04",
      title: isRtl ? "التعرف البصري على النصوص" : "OCR",
      desc: isRtl ? "من الصور إلى بيانات مهيكلة." : "From images to structured data.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
    },
    {
      num: "05",
      title: isRtl ? "الصوت واللغة" : "Speech & Language",
      desc: isRtl ? "صوت، نص، فهم لغوي." : "Voice, text, understanding.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <line x1="4" y1="10" x2="4" y2="14" />
          <line x1="8" y1="6" x2="8" y2="18" />
          <line x1="12" y1="3" x2="12" y2="21" />
          <line x1="16" y1="8" x2="16" y2="16" />
          <line x1="20" y1="11" x2="20" y2="13" />
        </svg>
      ),
    },
    {
      num: "06",
      title: isRtl ? "أتمتة الذكاء الاصطناعي" : "AI Automation",
      desc: isRtl ? "أتمتة. تحسين. توسع." : "Automate. Optimize. Scale.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="ai-lab"
      className="relative w-full bg-[#0B0B0D] dark:bg-[#0B0B0D] text-white py-20 lg:py-28 border-b border-white/10 overflow-hidden"
    >
      {/* Background Subtle Tech Ambient */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#D4AF37]/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Title and "EXPLORE MORE →" CTA */}
        <ScrollReveal isRtl={isRtl} direction="up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4 border-b border-white/10 pb-6">
            <div>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl uppercase tracking-tight text-white">
                {isRtl ? "مختبر الذكاء الاصطناعي" : "AI LAB"}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-zinc-400 font-sans">
                {isRtl
                  ? "تجارب، أنظمة ذكية، وتطبيقات عملية مدعومة بأحدث النماذج."
                  : "Experiments, intelligent systems, and practical AI applications."}
              </p>
            </div>

            <Link
              href={`/${locale}/projects`}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#D4AF37] hover:text-[#F3E5AB] transition-colors group"
            >
              <span>{isRtl ? "استكشف المزيد" : "EXPLORE MORE"}</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">→</span>
            </Link>
          </div>
        </ScrollReveal>

        {/* 6 AI Module Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
          {aiModules.map((mod, idx) => (
            <ScrollReveal key={idx} delay={idx * 70} isRtl={isRtl} direction="up" className="h-full">
              <TiltCard className="h-full flex flex-col justify-between p-6 rounded-2xl border border-white/10 hover:border-[#D4AF37]/60 bg-[#141418] hover:bg-[#18181E] transition-all duration-300 group hover:-translate-y-1 shadow-lg">
                <div>
                  {/* Icon in gold outline */}
                  <div className="w-12 h-12 rounded-xl border border-[#D4AF37]/40 bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-6 group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                    {mod.icon}
                  </div>

                  {/* Title */}
                  <h3 className="font-sans font-bold text-sm tracking-wide text-white group-hover:text-[#D4AF37] transition-colors leading-snug mb-2">
                    {mod.title}
                  </h3>

                  {/* Subtitle / Micro-tagline */}
                  <p className="text-xs text-zinc-400 leading-relaxed font-sans mb-4">
                    {mod.desc}
                  </p>
                </div>

                {/* Bottom directional arrow */}
                <div className="text-[#D4AF37] text-xs font-bold transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 pt-2">
                  →
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
