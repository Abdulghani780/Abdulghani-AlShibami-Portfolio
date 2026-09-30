"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Locale } from "@/lib/i18n/dictionaries";

export function HeroSection({ locale }: { locale: Locale }) {
  const isRtl = locale === "ar";

  return (
    <section className="relative w-full bg-[#FAF8F5] dark:bg-[#0E0E10] text-[#0B0B0C] dark:text-white pt-8 sm:pt-12 pb-16 lg:pb-20 overflow-hidden border-b border-black/5 dark:border-white/5 transition-colors">
      {/* Background Architectural Grid Linework */}
      <div className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="heroCircuitGrid" width="64" height="64" patternUnits="userSpaceOnUse">
              <path d="M 64 0 L 0 0 0 64" fill="none" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.25" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroCircuitGrid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Kicker Greeting */}
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="font-serif italic text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
                {isRtl ? "مرحباً، أنا" : "Hello, I'm"}
              </span>
              <span className="w-6 h-[1px] bg-[#B88E1F]/60 inline-block" />
            </div>

            {/* Display Heading */}
            <h1 className="font-serif font-black text-4xl sm:text-5xl md:text-6xl lg:text-[64px] tracking-tight text-[#0B0B0C] dark:text-white uppercase leading-[1.05] mb-4">
              {isRtl ? "عبدالغني الشبامي" : "ABDULGHANI AL-SHIBAMI"}
            </h1>

            {/* Role / Subtitle with dot separators */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs sm:text-sm font-bold tracking-[0.16em] uppercase text-[#B88E1F] dark:text-[#E2C366] mb-6">
              <span>{isRtl ? "مهندس ذكاء اصطناعي" : "AI ENGINEER"}</span>
              <span className="text-zinc-400">•</span>
              <span>{isRtl ? "مطور برمجيات" : "SOFTWARE DEVELOPER"}</span>
              <span className="text-zinc-400">•</span>
              <span>{isRtl ? "مفكر أنظمة" : "SYSTEMS THINKER"}</span>
            </div>

            {/* Bio Narrative */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-xl leading-relaxed mb-8 sm:mb-10 font-sans">
              {isRtl
                ? "أبني برمجيات ذكية، حلول ذكاء اصطناعي عملية، وأنظمة مصممة لحل مشكلات واقعية بكفاءة عالية."
                : "I build intelligent software, practical AI solutions, and systems designed to solve real problems."}
            </p>

            {/* CTA Button Trio */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {/* Primary: Explore My Work */}
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#C59B27] hover:bg-[#B38A1F] text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-md hover:shadow-lg transition-all active:scale-95 group cursor-pointer"
              >
                <span>{isRtl ? "استكشف أعمالي" : "EXPLORE MY WORK"}</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">→</span>
              </Link>

              {/* Secondary: About Me */}
              <Link
                href="#about"
                className="inline-flex items-center px-7 py-3 rounded-full border border-black/15 dark:border-white/20 bg-white dark:bg-transparent hover:bg-black/5 dark:hover:bg-white/5 text-zinc-800 dark:text-zinc-200 text-xs sm:text-sm font-bold tracking-wider uppercase transition-all active:scale-95 cursor-pointer"
              >
                {isRtl ? "نبذة عني" : "ABOUT ME"}
              </Link>

              {/* Tertiary: GitHub */}
              <a
                href="https://github.com/Abdulghani780"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-800 dark:border-zinc-700 bg-zinc-900 dark:bg-zinc-800/80 hover:bg-zinc-800 text-white text-xs sm:text-sm font-bold tracking-wider uppercase shadow-sm transition-all active:scale-95 cursor-pointer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>GITHUB</span>
              </a>
            </div>
          </div>

          {/* Right Column: Authentic Cutout Portrait with Technical Circuit Linework */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-end min-h-[440px] sm:min-h-[500px]">
            {/* Technical Circuit Lines & Node Graph Background */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <svg className="w-full h-full max-w-[500px] overflow-visible" viewBox="0 0 500 500" fill="none">
                {/* Circuit paths */}
                <path d="M 120 250 L 50 250 L 30 200 L 30 140" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3 3" />
                <path d="M 380 200 L 440 200 L 460 160 L 460 100" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.5" />
                <path d="M 400 320 L 450 320 L 480 370" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.35" />
                
                {/* Golden AI Circular Node */}
                <g transform="translate(420, 80)">
                  <circle cx="20" cy="20" r="28" stroke="#D4AF37" strokeWidth="1.2" strokeOpacity="0.6" strokeDasharray="4 3" />
                  <circle cx="20" cy="20" r="22" stroke="#D4AF37" strokeWidth="1.5" fill="#FAF8F5" fillOpacity="0.8" className="dark:fill-[#0E0E10]" />
                  <polygon points="20,4 34,12 34,28 20,36 6,28 6,12" stroke="#D4AF37" strokeWidth="0.8" strokeOpacity="0.4" fill="none" />
                  <text x="20" y="24" textAnchor="middle" fill="#B88E1F" fontSize="11" fontFamily="monospace" fontWeight="bold">AI</text>
                </g>
              </svg>
            </div>

            {/* Technical Annotations on Right */}
            <div className="absolute top-4 end-4 z-20 pointer-events-none text-end">
              <div className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 dark:text-zinc-400 space-y-1 bg-white/70 dark:bg-black/60 backdrop-blur-xs p-2 rounded-lg border border-black/5 dark:border-white/5">
                <div>&gt; CODE</div>
                <div>&gt; ANALYZE</div>
                <div>&gt; BUILD</div>
                <div>&gt; IMPROVE</div>
              </div>
            </div>

            {/* Technical Overlay Badge */}
            <div className="absolute bottom-6 start-4 z-20 pointer-events-none">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/85 dark:bg-[#121214]/90 backdrop-blur-xs border border-[#D4AF37]/40 shadow-lg text-[10px] sm:text-xs font-mono font-bold text-zinc-900 dark:text-[#D4AF37]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>AI &amp; SYSTEMS ARCHITECT</span>
              </div>
            </div>

            {/* Transparent Cutout Portrait */}
            <div className="relative w-full max-w-[380px] sm:max-w-[430px] aspect-[4/5] z-10">
              <Image
                src="/images/profile/abdulghani-portrait.webp"
                alt="Abdulghani Al-Shibami — AI Engineer & Software Developer"
                fill
                priority
                className="object-contain object-bottom filter drop-shadow-xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 440px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
