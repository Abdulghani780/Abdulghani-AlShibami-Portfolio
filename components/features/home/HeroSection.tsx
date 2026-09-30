"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Locale } from "@/lib/i18n/dictionaries";

export function HeroSection({ locale }: { locale: Locale }) {
  const isRtl = locale === "ar";

  return (
    <section className="relative w-full bg-[#FAF9F6] dark:bg-[#0E0E10] text-[#0B0B0C] dark:text-white pt-10 sm:pt-14 pb-16 lg:pb-24 overflow-hidden border-b border-black/5 dark:border-white/5 transition-colors">
      {/* Background Architectural Circuit Linework */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="heroGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.25" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Kicker Greeting */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="font-serif italic text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
                {isRtl ? "مرحباً، أنا" : "Hello, I'm"}
              </span>
              <span className="w-8 h-[1px] bg-gold-primary/60 inline-block" />
            </div>

            {/* Display Heading */}
            <h1 className="font-sans font-black text-4xl sm:text-5xl md:text-6xl tracking-tight text-[#0B0B0C] dark:text-white uppercase leading-[1.08] mb-4">
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
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-[#C59B27] hover:bg-[#B38A1F] text-white text-xs sm:text-sm font-bold tracking-wider uppercase shadow-md hover:shadow-lg transition-all active:scale-95 group"
              >
                <span>{isRtl ? "استكشف أعمالي" : "EXPLORE MY WORK"}</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">→</span>
              </Link>

              {/* Secondary: About Me */}
              <Link
                href="#about"
                className="inline-flex items-center px-6 sm:px-7 py-3 rounded-full border border-black/15 dark:border-white/20 bg-white dark:bg-transparent hover:bg-black/5 dark:hover:bg-white/5 text-zinc-800 dark:text-zinc-200 text-xs sm:text-sm font-bold tracking-wider uppercase transition-all active:scale-95"
              >
                {isRtl ? "نبذة عني" : "ABOUT ME"}
              </Link>

              {/* Tertiary: GitHub */}
              <a
                href="https://github.com/Abdulghani780"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full border border-zinc-800 dark:border-zinc-700 bg-zinc-900 dark:bg-zinc-800/80 hover:bg-zinc-800 text-white text-xs sm:text-sm font-bold tracking-wider uppercase shadow-sm transition-all active:scale-95"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>GITHUB</span>
              </a>
            </div>
          </div>

          {/* Right Column: Authentic Portrait with Technical Overlays */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-black/10 dark:border-white/10 group">
              {/* Real Authentic Portrait */}
              <Image
                src="/images/profile/abdulghani-portrait.webp"
                alt="Abdulghani Al-Shibami — AI Engineer & Software Developer"
                fill
                priority
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
              />

              {/* Gradient lighting scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Technical Circuit Lines Overlay */}
              <div className="absolute top-4 end-4 z-10 pointer-events-none text-end">
                <div className="text-[9px] font-mono tracking-widest uppercase text-white/90 drop-shadow-md">
                  <div>&gt; CODE</div>
                  <div>&gt; ANALYZE</div>
                  <div>&gt; BUILD</div>
                  <div>&gt; IMPROVE</div>
                </div>
              </div>

              {/* Bottom Tag: AI Node Badge */}
              <div className="absolute bottom-4 start-4 z-10 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md border border-gold-primary/40 text-white text-[11px] font-mono tracking-wider shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-gold-light font-bold">SYSTEMS: ONLINE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
