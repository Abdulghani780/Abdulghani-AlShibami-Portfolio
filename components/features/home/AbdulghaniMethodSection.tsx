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
    <section className="relative w-full bg-[#0B0B0D] dark:bg-[#0B0B0D] text-white py-20 lg:py-28 border-b border-white/10 overflow-hidden">
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
        {/* Title in Gold */}
        <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-widest text-[#D4AF37] mb-3">
          {isRtl ? "منهجية عبدالغني" : "THE ABDULGHANI METHOD"}
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto font-sans mb-14 sm:mb-20">
          {isRtl
            ? "الذكاء الاصطناعي ليس مجرد أداة لتوليد الأكواد، بل هو شريك في التفكير والتصميم."
            : "AI is not just a code generator. It is a thinking partner."}
        </p>

        {/* 7 Connected Golden Circles Horizontal Pipeline */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 lg:gap-6 flex-wrap md:flex-nowrap">
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="flex flex-col items-center group cursor-pointer my-2">
                {/* Node Circle */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#D4AF37] bg-[#141418] group-hover:bg-[#D4AF37] group-hover:text-black text-[#D4AF37] flex items-center justify-center transition-all duration-300 shadow-md group-hover:scale-110 mb-3">
                  {step.icon}
                </div>

                {/* Step Label */}
                <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-zinc-300 group-hover:text-[#D4AF37] transition-colors whitespace-nowrap">
                  {step.title}
                </span>
              </div>

              {/* Connecting Arrow */}
              {idx < steps.length - 1 && (
                <div className="hidden md:flex items-center text-[#D4AF37]/60 text-lg mb-7 rtl:rotate-180">
                  →
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
