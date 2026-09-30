"use client";

import React from "react";
import { Locale } from "@/lib/i18n/dictionaries";

export function AbdulghaniMethodSection({ locale }: { locale: Locale }) {
  const isRtl = locale === "ar";

  const steps = [
    {
      title: isRtl ? "المشكلة" : "PROBLEM",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z" />
        </svg>
      ),
    },
    {
      title: isRtl ? "الفهم والتحليل" : "UNDERSTAND",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      ),
    },
    {
      title: isRtl ? "صياغة الأوامر" : "PROMPT",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
    {
      title: isRtl ? "البناء والتطوير" : "BUILD",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      title: isRtl ? "التقييم والاختبار" : "EVALUATE",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
    },
    {
      title: isRtl ? "التحسين والضبط" : "REFINE",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <polyline points="23 4 23 10 17 10" />
          <polyline points="1 20 1 14 7 14" />
          <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
        </svg>
      ),
    },
    {
      title: isRtl ? "الحل المستدام" : "SOLUTION",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full bg-[#FAF9F6] dark:bg-[#0B0B0C] text-[#0B0B0C] dark:text-white py-20 lg:py-28 border-b border-black/5 dark:border-white/5 overflow-hidden transition-colors">
      {/* Subtle Golden Wavy Wave / Contour Lines Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M -100 200 C 300 100, 600 300, 1000 180 C 1200 120, 1400 250, 1600 200"
            stroke="#D4AF37"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
          <path
            d="M -100 240 C 250 150, 650 340, 950 220 C 1150 160, 1350 290, 1600 240"
            stroke="#D4AF37"
            strokeWidth="1"
            strokeOpacity="0.6"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Title */}
        <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl uppercase tracking-widest text-gold-dark dark:text-gold-light mb-3">
          {isRtl ? "منهجية عبدالغني" : "THE ABDULGHANI METHOD"}
        </h2>

        {/* Philosophy statement */}
        <p className="font-serif italic text-base sm:text-lg text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto mb-14 sm:mb-18 font-normal">
          {isRtl
            ? "الذكاء الاصطناعي ليس مجرد مولد للكود، بل شريك تفكير واستنباط معماري."
            : "AI is not just a code generator. It is a thinking partner."}
        </p>

        {/* 7 Horizontal Connected Nodes */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 sm:gap-4 items-center justify-center">
          {steps.map((st, idx) => (
            <React.Fragment key={idx}>
              <div className="flex flex-col items-center group">
                {/* Gold Circle Icon */}
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full border-2 border-gold-primary/60 bg-white dark:bg-[#141418] flex items-center justify-center text-gold-dark dark:text-gold-light group-hover:border-gold-primary group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 mb-3 shadow-sm">
                  {st.icon}
                </div>

                <span className="font-sans font-bold text-xs sm:text-[13px] tracking-wider uppercase text-zinc-800 dark:text-zinc-200 group-hover:text-gold-dark dark:group-hover:text-gold-light transition-colors">
                  {st.title}
                </span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
