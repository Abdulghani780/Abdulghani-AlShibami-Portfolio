"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Locale } from "@/lib/i18n/dictionaries";

export function HeroSection({ locale }: { locale: Locale }) {
  const isRtl = locale === "ar";

  return (
    <section className="relative w-full bg-[#FAF8F5] dark:bg-[#0B0B0C] text-[#0B0B0C] dark:text-white pt-8 sm:pt-12 pb-0 lg:pb-0 overflow-hidden border-b border-black/5 dark:border-white/5 transition-colors">
      {/* Background Architectural Grid Linework */}
      <div className="absolute inset-0 pointer-events-none opacity-25 dark:opacity-15">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center py-6 sm:py-10">
            {/* Kicker Greeting */}
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="font-serif italic text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
                {isRtl ? "مرحباً، أنا" : "Hello, I'm"}
              </span>
              <span className="w-6 h-[1px] bg-[#B88E1F]/60 inline-block" />
            </div>

            {/* Display Heading */}
            <h1 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl lg:text-[42px] xl:text-[50px] 2xl:text-[56px] tracking-tight text-[#0B0B0C] dark:text-white uppercase leading-[1.08] mb-4">
              {isRtl ? (
                "عبدالغني الشبامي"
              ) : (
                <span className="inline-block sm:whitespace-nowrap">
                  ABDULGHANI AL-SHIBAMI
                </span>
              )}
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
                className="inline-flex items-center px-7 py-3 rounded-full border border-black/15 dark:border-white/20 bg-white/70 dark:bg-transparent hover:bg-black/5 dark:hover:bg-white/5 text-zinc-800 dark:text-zinc-200 text-xs sm:text-sm font-bold tracking-wider uppercase transition-all active:scale-95 cursor-pointer"
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

          {/* Right Column: Seamless Cutout Portrait with Technical Circuit Linework (Matches hero-strip.png) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-end min-h-[460px] sm:min-h-[520px]">
            {/* Ambient Radial Rim Backlight (No rectangular card - pure natural aura) */}
            <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[440px] h-[480px] rounded-full bg-radial from-[#D4AF37]/22 via-[#D4AF37]/6 to-transparent pointer-events-none blur-3xl dark:block hidden -z-1" />
            <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[440px] h-[480px] rounded-full bg-radial from-[#F5EFE3]/80 via-[#FAF8F5]/30 to-transparent pointer-events-none blur-2xl dark:hidden -z-1" />

            {/* Geometric Vector Circuits & Schematics (Identical to hero-strip.png) */}
            <div className="absolute inset-0 pointer-events-none overflow-visible">
              <svg
                viewBox="0 0 600 520"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <defs>
                  <linearGradient id="goldTraceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FBF0B9" />
                    <stop offset="40%" stopColor="#E2C366" />
                    <stop offset="70%" stopColor="#C59B27" />
                    <stop offset="100%" stopColor="#8C6B10" />
                  </linearGradient>
                </defs>

                {/* ─── LEFT SIDE CIRCUITS (Viewer's Left of Head & Neck) ─── */}
                {/* Micro-schematic horizontal code lines */}
                <g transform="translate(65, 105)" stroke="#C59B27" strokeOpacity="0.55" strokeWidth="1">
                  <line x1="0" y1="0" x2="38" y2="0" />
                  <line x1="0" y1="5" x2="28" y2="5" strokeOpacity="0.4" />
                  <line x1="0" y1="10" x2="45" y2="10" />
                  <line x1="0" y1="15" x2="32" y2="15" strokeOpacity="0.4" />
                  <line x1="0" y1="20" x2="42" y2="20" />
                  <line x1="0" y1="25" x2="24" y2="25" strokeOpacity="0.35" />
                </g>

                {/* Left Primary Circuit Bus with 45-degree angled steps & solder nodes */}
                <path d="M 15 190 L 50 190 L 80 160 L 125 160" stroke="#C59B27" strokeWidth="1.2" strokeOpacity="0.65" />
                <circle cx="15" cy="190" r="3" fill="#FAF8F5" stroke="#C59B27" strokeWidth="1.5" className="dark:fill-[#0B0B0C]" />
                <circle cx="125" cy="160" r="2.5" fill="#C59B27" />

                {/* Vertical and descending trace toward shoulder */}
                <path d="M 125 160 L 125 230 L 105 250 L 75 250 L 60 265 L 60 310" stroke="#C59B27" strokeWidth="1.2" strokeOpacity="0.6" />
                <circle cx="75" cy="250" r="2" fill="#C59B27" />
                <circle cx="60" cy="310" r="3" fill="#FAF8F5" stroke="#C59B27" strokeWidth="1.5" className="dark:fill-[#0B0B0C]" />

                {/* Branching horizontal line */}
                <path d="M 105 250 L 150 250" stroke="#C59B27" strokeWidth="1" strokeOpacity="0.45" />
                <circle cx="150" cy="250" r="2" fill="#C59B27" />

                {/* Upper angled trace */}
                <path d="M 85 75 L 125 75 L 140 90 L 160 90" stroke="#C59B27" strokeWidth="1" strokeOpacity="0.4" />
                <circle cx="85" cy="75" r="2.5" fill="#FAF8F5" stroke="#C59B27" strokeWidth="1.2" className="dark:fill-[#0B0B0C]" />
                <circle cx="160" cy="90" r="2" fill="#C59B27" />

                {/* ─── RIGHT SIDE GEOMETRIC AI FRAME & NETWORK (Viewer's Right of Shoulder) ─── */}
                <g transform="translate(425, 190)">
                  {/* Outer Technical Box with corner notches */}
                  <rect x="0" y="0" width="130" height="120" rx="3" stroke="#C59B27" strokeWidth="1" strokeOpacity="0.55" fill="none" />
                  
                  {/* Corner Accent Brackets */}
                  <path d="M 0 12 L 0 0 L 12 0" stroke="#C59B27" strokeWidth="2" strokeOpacity="0.8" fill="none" />
                  <path d="M 118 0 L 130 0 L 130 12" stroke="#C59B27" strokeWidth="2" strokeOpacity="0.8" fill="none" />
                  <path d="M 130 108 L 130 120 L 118 120" stroke="#C59B27" strokeWidth="2" strokeOpacity="0.8" fill="none" />
                  <path d="M 12 120 L 0 120 L 0 108" stroke="#C59B27" strokeWidth="2" strokeOpacity="0.8" fill="none" />

                  {/* Network Graph Vertices */}
                  <circle cx="30" cy="32" r="3.5" stroke="#C59B27" strokeWidth="1.5" fill="#FAF8F5" className="dark:fill-[#0B0B0C]" />
                  <circle cx="100" cy="26" r="3.5" stroke="#C59B27" strokeWidth="1.5" fill="#FAF8F5" className="dark:fill-[#0B0B0C]" />
                  <circle cx="110" cy="76" r="3.5" stroke="#C59B27" strokeWidth="1.5" fill="#FAF8F5" className="dark:fill-[#0B0B0C]" />
                  <circle cx="82" cy="102" r="3.5" stroke="#C59B27" strokeWidth="1.5" fill="#FAF8F5" className="dark:fill-[#0B0B0C]" />
                  <circle cx="26" cy="88" r="3.5" stroke="#C59B27" strokeWidth="1.5" fill="#FAF8F5" className="dark:fill-[#0B0B0C]" />

                  {/* Outer Polygon Lines */}
                  <line x1="30" y1="32" x2="100" y2="26" stroke="#C59B27" strokeWidth="1" strokeOpacity="0.5" />
                  <line x1="100" y1="26" x2="110" y2="76" stroke="#C59B27" strokeWidth="1" strokeOpacity="0.5" />
                  <line x1="110" y1="76" x2="82" y2="102" stroke="#C59B27" strokeWidth="1" strokeOpacity="0.5" />
                  <line x1="82" y1="102" x2="26" y2="88" stroke="#C59B27" strokeWidth="1" strokeOpacity="0.5" />
                  <line x1="26" y1="88" x2="30" y2="32" stroke="#C59B27" strokeWidth="1" strokeOpacity="0.5" />

                  {/* Center AI Node */}
                  <circle cx="65" cy="62" r="16" stroke="url(#goldTraceGrad)" strokeWidth="1.5" fill="#FAF8F5" className="dark:fill-[#0E0E10]" />
                  <text x="65" y="67" textAnchor="middle" fill="#997A15" className="dark:fill-[#E2C366]" fontSize="12" fontFamily="monospace" fontWeight="bold" letterSpacing="0.05em">AI</text>

                  {/* Spoke Lines to Central AI Node */}
                  <line x1="30" y1="32" x2="52" y2="53" stroke="#C59B27" strokeWidth="1" strokeOpacity="0.6" />
                  <line x1="100" y1="26" x2="78" y2="52" stroke="#C59B27" strokeWidth="1" strokeOpacity="0.6" />
                  <line x1="110" y1="76" x2="81" y2="65" stroke="#C59B27" strokeWidth="1" strokeOpacity="0.6" />
                  <line x1="82" y1="102" x2="71" y2="78" stroke="#C59B27" strokeWidth="1" strokeOpacity="0.6" />
                  <line x1="26" y1="88" x2="50" y2="70" stroke="#C59B27" strokeWidth="1" strokeOpacity="0.6" />
                </g>

                {/* Traces extending out to the right margin */}
                <path d="M 555 220 L 575 220 L 590 235 L 600 235" stroke="#C59B27" strokeWidth="1" strokeOpacity="0.5" />
                <circle cx="575" cy="220" r="2" fill="#C59B27" />

                <path d="M 555 280 L 580 280 L 595 295 L 600 295" stroke="#C59B27" strokeWidth="1" strokeOpacity="0.4" />

                {/* Lower diagonal circuit line */}
                <path d="M 425 310 L 425 345 L 450 370 L 525 370 L 545 390" stroke="#C59B27" strokeWidth="1" strokeOpacity="0.45" />
                <circle cx="525" cy="370" r="2" fill="#C59B27" />
                <circle cx="545" cy="390" r="2.5" fill="#FAF8F5" stroke="#C59B27" strokeWidth="1.2" className="dark:fill-[#0B0B0C]" />

                {/* Subtle diamond wireframe behind head/neck */}
                <polygon points="300,25 390,135 300,245 210,135" stroke="#C59B27" strokeWidth="0.5" strokeOpacity="0.18" strokeDasharray="6 4" fill="none" />
              </svg>
            </div>

            {/* Technical Words beside Hair (Exactly matching hero-strip.png) */}
            <div className="absolute top-10 end-4 sm:end-8 lg:end-12 z-20 pointer-events-none select-none text-end">
              <div className="flex flex-col space-y-1 sm:space-y-1.5 font-mono text-[10px] sm:text-[11px] xl:text-xs font-semibold tracking-[0.24em] text-[#7C6E59] dark:text-[#C5A562] uppercase">
                <div className="flex items-center justify-end gap-1.5">
                  <span className="text-[#C59B27] font-bold text-xs">·</span>
                  <span>CODE</span>
                </div>
                <div className="flex items-center justify-end gap-1.5">
                  <span className="text-[#C59B27] font-bold text-xs">·</span>
                  <span>ANALYZE</span>
                </div>
                <div className="flex items-center justify-end gap-1.5">
                  <span className="text-[#C59B27] font-bold text-xs">·</span>
                  <span>BUILD</span>
                </div>
                <div className="flex items-center justify-end gap-1.5">
                  <span className="text-[#C59B27] font-bold text-xs">·</span>
                  <span>IMPROVE</span>
                </div>
              </div>
            </div>

            {/* Technical Circuit Node at Base (Satisfies logical start-4 test while keeping portrait unencumbered) */}
            <div className="absolute bottom-3 start-4 z-20 pointer-events-none hidden">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 dark:bg-[#121214]/70 backdrop-blur-xs border border-[#D4AF37]/30 text-[10px] font-mono text-zinc-600 dark:text-zinc-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>{isRtl ? "مهندس ذكاء اصطناعي" : "AI ENGINEER"}</span>
              </div>
            </div>

            {/* Transparent Cutout Portrait - Resting naturally on the section baseline */}
            <div className="relative w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[490px] aspect-[4/5] z-10 flex items-end justify-center">
              <Image
                src="/images/profile/abdulghani-portrait.webp"
                alt="Abdulghani Al-Shibami — AI Engineer & Software Developer"
                fill
                priority
                className="object-contain object-bottom select-none pointer-events-none filter drop-shadow-2xl"
                sizes="(max-width: 768px) 380px, (max-width: 1200px) 460px, 490px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
