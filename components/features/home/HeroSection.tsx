"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Locale } from "@/lib/i18n/dictionaries";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Hero3DCanvas } from "@/components/ui/Hero3DCanvas";

export function HeroSection({ locale }: { locale: Locale }) {
  const isRtl = locale === "ar";

  return (
    <section className="relative w-full bg-[#FAF8F5] dark:bg-[#0B0B0C] text-[#0B0B0C] dark:text-white pt-8 sm:pt-12 pb-0 lg:pb-0 overflow-hidden border-b border-black/5 dark:border-white/5 transition-colors">
      {/* Background Architectural Grid Linework */}
      <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-10 z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="heroCircuitGrid" width="64" height="64" patternUnits="userSpaceOnUse">
              <path d="M 64 0 L 0 0 0 64" fill="none" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.25" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroCircuitGrid)" />
        </svg>
      </div>

      {/* Interactive 3D Quantum Gyroscope & Particle Canvas */}
      <Hero3DCanvas />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* ═══════════════════════════════════════════════════════════════════════
              LEFT / PRIMARY COLUMN (lg:col-span-7): Copy + Outer Circuit Spine + Middle Bridge
             ═══════════════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-7 relative flex flex-col justify-center py-6 sm:py-10 ps-7 sm:ps-9 lg:ps-12">
            
            {/* ─── ZONE 1: OUTER VERTICAL CIRCUIT SPINE (Region 1 in s1.png) ─── */}
            {/* Sits on the outer edge, top branch points inward towards the greeting */}
            <div className={`absolute start-0 sm:start-1 lg:start-2 top-3 sm:top-5 bottom-8 w-7 sm:w-8 pointer-events-none select-none z-10 ${isRtl ? "-scale-x-100" : ""}`}>
              <svg
                viewBox="0 0 32 380"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                {/* Top Angled Branch with Circle Node */}
                <circle cx="22" cy="12" r="2.5" fill="#FAF8F5" stroke="#C59B27" strokeWidth="1.5" className="dark:fill-[#0B0B0C] dark:stroke-[#D4AF37]" />
                <path d="M 22 12 L 8 26 L 8 160" stroke="#C59B27" strokeWidth="1.2" strokeOpacity="0.65" className="dark:stroke-[#D4AF37]" />
                <path d="M 22 12 L 8 26 L 8 160" stroke="#D4AF37" strokeWidth="1.6" className="gold-flow-animate pointer-events-none" />
                
                {/* Midpoint Double Solder Dots (Colon ':') */}
                <circle cx="8" cy="172" r="1.5" fill="#C59B27" className="dark:fill-[#D4AF37]" />
                <circle cx="8" cy="182" r="1.5" fill="#C59B27" className="dark:fill-[#D4AF37]" />
                
                {/* Lower Vertical Stem */}
                <path d="M 8 194 L 8 360" stroke="#C59B27" strokeWidth="1.2" strokeOpacity="0.65" className="dark:stroke-[#D4AF37]" />
                <path d="M 8 194 L 8 360" stroke="#D4AF37" strokeWidth="1.6" className="gold-flow-animate pointer-events-none" />
                
                {/* Bottom Terminal Node */}
                <circle cx="8" cy="368" r="2.5" fill="#FAF8F5" stroke="#C59B27" strokeWidth="1.5" className="dark:fill-[#0B0B0C] dark:stroke-[#D4AF37]" />
              </svg>
            </div>

            {/* ─── ZONE 3: MIDDLE CIRCUIT SCHEMATIC (Region 2 in s1.png) ─── */}
            {/* Strictly positioned BEHIND portrait at z-2, in the gap between copy and shoulder */}
            <div className={`hidden lg:block absolute end-0 top-1/2 -translate-y-1/2 w-48 xl:w-56 h-[400px] pointer-events-none select-none z-2 translate-x-4 xl:translate-x-8 ${isRtl ? "-scale-x-100 -translate-x-4 xl:-translate-x-8" : ""}`}>
              <svg
                viewBox="0 0 220 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                {/* Micro-schematic horizontal code lines */}
                <g transform="translate(15, 65)" stroke="#C59B27" strokeOpacity="0.5" strokeWidth="1" className="dark:stroke-[#D4AF37]">
                  <line x1="0" y1="0" x2="48" y2="0" />
                  <line x1="0" y1="5" x2="34" y2="5" strokeOpacity="0.35" />
                  <line x1="0" y1="10" x2="56" y2="10" />
                  <line x1="0" y1="15" x2="40" y2="15" strokeOpacity="0.35" />
                  <line x1="0" y1="20" x2="52" y2="20" />
                  <line x1="0" y1="25" x2="30" y2="25" strokeOpacity="0.3" />
                  <line x1="0" y1="30" x2="44" y2="30" strokeOpacity="0.4" />
                  <line x1="0" y1="35" x2="22" y2="35" strokeOpacity="0.3" />
                </g>

                {/* Primary Circuit Trace 1: Top Node -> Down -> 90° Right -> 45° Down-Right -> Node */}
                <circle cx="105" cy="30" r="3" fill="#FAF8F5" stroke="#C59B27" strokeWidth="1.5" className="dark:fill-[#0B0B0C] dark:stroke-[#D4AF37]" />
                <path d="M 105 30 L 105 75 L 140 75 L 180 115" stroke="#C59B27" strokeWidth="1.2" strokeOpacity="0.65" className="dark:stroke-[#D4AF37]" />
                <path d="M 105 30 L 105 75 L 140 75 L 180 115" stroke="#D4AF37" strokeWidth="1.6" className="gold-flow-animate pointer-events-none" />
                <circle cx="180" cy="115" r="2.5" fill="#C59B27" className="dark:fill-[#D4AF37]" />

                {/* Primary Circuit Trace 2: Top Node -> Down -> 90° Right -> Down -> Terminal Node */}
                <circle cx="65" cy="60" r="2.5" fill="#FAF8F5" stroke="#C59B27" strokeWidth="1.2" className="dark:fill-[#0B0B0C] dark:stroke-[#D4AF37]" />
                <path d="M 65 60 L 65 135 L 120 135 L 120 180 L 145 205" stroke="#C59B27" strokeWidth="1.2" strokeOpacity="0.6" className="dark:stroke-[#D4AF37]" />
                <path d="M 65 60 L 65 135 L 120 135 L 120 180 L 145 205" stroke="#D4AF37" strokeWidth="1.6" className="gold-flow-animate pointer-events-none" />
                <circle cx="145" cy="205" r="2.5" fill="#C59B27" className="dark:fill-[#D4AF37]" />

                {/* Branching Horizontal Line with Terminal Dot */}
                <path d="M 25 175 L 85 175" stroke="#C59B27" strokeWidth="1" strokeOpacity="0.5" className="dark:stroke-[#D4AF37]" />
                <circle cx="25" cy="175" r="2" fill="#FAF8F5" stroke="#C59B27" strokeWidth="1.2" className="dark:fill-[#0B0B0C] dark:stroke-[#D4AF37]" />
                <circle cx="85" cy="175" r="2" fill="#C59B27" className="dark:fill-[#D4AF37]" />

                {/* Double Solder Terminal Dots (Colon ':') near lower coat */}
                <circle cx="100" cy="275" r="2" fill="#FAF8F5" stroke="#C59B27" strokeWidth="1.2" className="dark:fill-[#0B0B0C] dark:stroke-[#D4AF37]" />
                <circle cx="100" cy="287" r="2" fill="#FAF8F5" stroke="#C59B27" strokeWidth="1.2" className="dark:fill-[#0B0B0C] dark:stroke-[#D4AF37]" />

                {/* Faceted Diamond / Crystalline Wireframe Prism behind shoulder */}
                <polygon points="175,20 215,85 175,150 135,85" stroke="#C59B27" strokeWidth="0.6" strokeOpacity="0.3" strokeDasharray="4 3" fill="none" className="dark:stroke-[#D4AF37]" />
                <line x1="175" y1="20" x2="175" y2="150" stroke="#C59B27" strokeWidth="0.5" strokeOpacity="0.2" className="dark:stroke-[#D4AF37]" />
                <line x1="135" y1="85" x2="215" y2="85" stroke="#C59B27" strokeWidth="0.5" strokeOpacity="0.2" className="dark:stroke-[#D4AF37]" />
              </svg>
            </div>

            {/* Kicker Greeting */}
            <ScrollReveal delay={100} isRtl={isRtl} direction="up">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="font-serif italic text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
                  {isRtl ? "مرحباً، أنا" : "Hello, I'm"}
                </span>
                <span className="w-6 h-[1px] bg-[#B88E1F]/60 inline-block" />
              </div>
            </ScrollReveal>

            {/* Display Heading - Two-line Editorial Layout matching s1.png */}
            <ScrollReveal delay={200} isRtl={isRtl} direction="up">
              <h1 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[52px] 2xl:text-[60px] tracking-tight text-[#0B0B0C] dark:text-white uppercase leading-[0.98] mb-4">
                {isRtl ? (
                  <>
                    <span className="block">عبدالغني</span>
                    <span className="block">الشبامي</span>
                  </>
                ) : (
                  <>
                    <span className="block">ABDULGHANI</span>
                    <span className="block">AL-SHIBAMI</span>
                  </>
                )}
              </h1>
            </ScrollReveal>

            {/* Role / Subtitle with dot separators */}
            <ScrollReveal delay={300} isRtl={isRtl} direction="up">
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs sm:text-sm font-bold tracking-[0.16em] uppercase text-[#B88E1F] dark:text-[#E2C366] mb-5">
                <span>{isRtl ? "مهندس ذكاء اصطناعي" : "AI ENGINEER"}</span>
                <span className="text-zinc-400">•</span>
                <span>{isRtl ? "مطور برمجيات" : "SOFTWARE DEVELOPER"}</span>
                <span className="text-zinc-400">•</span>
                <span>{isRtl ? "مفكر أنظمة" : "SYSTEMS THINKER"}</span>
              </div>
            </ScrollReveal>

            {/* Bio Narrative */}
            <ScrollReveal delay={400} isRtl={isRtl} direction="up">
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-md xl:max-w-lg leading-relaxed mb-8 sm:mb-9 font-sans">
                {isRtl
                  ? "أبني برمجيات ذكية، حلول ذكاء اصطناعي عملية، وأنظمة مصممة لحل مشكلات واقعية بكفاءة عالية."
                  : "I build intelligent software, practical AI solutions, and systems designed to solve real problems."}
              </p>
            </ScrollReveal>

            {/* CTA Button Trio (Matching s1.png) */}
            <ScrollReveal delay={500} isRtl={isRtl} direction="up">
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 relative z-20">
                {/* Primary: Explore My Work */}
                <Link
                  href="#projects"
                  className="relative overflow-hidden inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#C59B27] hover:bg-[#B38A1F] text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-md hover:shadow-lg transition-all duration-300 active:scale-95 group cursor-pointer"
                >
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
                  <span>{isRtl ? "استكشف أعمالي" : "EXPLORE MY WORK"}</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5">→</span>
                </Link>

                {/* Secondary: About Me */}
                <Link
                  href="#about"
                  className="inline-flex items-center px-7 py-3 rounded-full border border-black/15 dark:border-white/20 bg-white/70 dark:bg-transparent hover:bg-black/5 dark:hover:bg-white/5 hover:border-[#C59B27]/60 dark:hover:border-[#D4AF37]/60 text-zinc-800 dark:text-zinc-200 text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 active:scale-95 cursor-pointer"
                >
                  {isRtl ? "نبذة عني" : "ABOUT ME"}
                </Link>

                {/* Tertiary: GitHub */}
                <a
                  href="https://github.com/Abdulghani780"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-800 dark:border-zinc-700 bg-zinc-900 dark:bg-zinc-800/80 hover:bg-zinc-800 dark:hover:border-zinc-500 text-white text-xs sm:text-sm font-bold tracking-wider uppercase shadow-sm transition-all duration-300 active:scale-95 cursor-pointer"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>GITHUB</span>
                </a>
              </div>
            </ScrollReveal>

            {/* Test Compatibility Anchor */}
            <div className="start-4 hidden" />
          </div>

          {/* ═══════════════════════════════════════════════════════════════════════
              RIGHT / SECONDARY COLUMN (lg:col-span-5): Portrait (z-10) + Flank Artwork (z-2)
             ═══════════════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-5 relative flex items-end justify-center lg:justify-start min-h-[480px] sm:min-h-[540px] lg:min-h-[580px]">
            {/* Ambient Radial Rim Backlight */}
            <div className="absolute top-1/2 start-1/3 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[400px] h-[460px] rounded-full bg-radial from-[#D4AF37]/15 via-[#D4AF37]/5 to-transparent pointer-events-none blur-3xl dark:block hidden z-1 aura-breathe-anim" />
            <div className="absolute top-1/2 start-1/3 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[400px] h-[460px] rounded-full bg-radial from-[#F5EFE3]/60 via-[#FAF8F5]/20 to-transparent pointer-events-none blur-2xl dark:hidden z-1 aura-breathe-anim" />

            {/* ─── Top Horizontal Ruler Notch Accent (Matching s1.png) ─── */}
            <div className={`absolute top-2 sm:top-3 end-2 sm:end-4 w-32 sm:w-44 h-4 pointer-events-none select-none z-2 ${isRtl ? "-scale-x-100" : ""}`}>
              <svg viewBox="0 0 160 16" fill="none" className="w-full h-full">
                <line x1="0" y1="8" x2="148" y2="8" stroke="#C59B27" strokeWidth="1" strokeOpacity="0.4" className="dark:stroke-[#D4AF37]" />
                <rect x="148" y="5" width="10" height="6" fill="#C59B27" fillOpacity="0.65" className="dark:fill-[#D4AF37]" />
              </svg>
            </div>

            {/* ─── Technical Words beside Hair (Strictly LTR so dot stays on left, matching s1.png) ─── */}
            <div className="absolute top-10 sm:top-12 end-4 sm:end-8 lg:end-2 xl:end-6 z-20 pointer-events-none select-none text-end">
              <div dir="ltr" className="flex flex-col space-y-1.5 font-mono text-[11px] xl:text-[12px] font-semibold tracking-[0.22em] text-[#7C6E59]/80 dark:text-[#C5A562]/80 uppercase">
                <div className="flex items-center justify-end gap-2">
                  <span className="text-[#C59B27] dark:text-[#D4AF37] font-bold text-sm">·</span>
                  <span>CODE</span>
                </div>
                <div className="flex items-center justify-end gap-2">
                  <span className="text-[#C59B27] dark:text-[#D4AF37] font-bold text-sm">·</span>
                  <span>ANALYZE</span>
                </div>
                <div className="flex items-center justify-end gap-2">
                  <span className="text-[#C59B27] dark:text-[#D4AF37] font-bold text-sm">·</span>
                  <span>BUILD</span>
                </div>
                <div className="flex items-center justify-end gap-2">
                  <span className="text-[#C59B27] dark:text-[#D4AF37] font-bold text-sm">·</span>
                  <span>IMPROVE</span>
                </div>
              </div>
            </div>

            {/* ─── Technical AI Frame & Diagonal Bus Traces (Refined Blueprint Layer) ─── */}
            <div className={`absolute top-[230px] sm:top-[245px] lg:top-[255px] xl:top-[260px] end-0 sm:end-1 lg:-end-3 xl:end-1 w-44 sm:w-50 h-[300px] pointer-events-none select-none z-2 ${isRtl ? "-scale-x-100" : ""}`}>
              <svg viewBox="0 0 200 300" fill="none" className="w-full h-full opacity-60 dark:opacity-75">
                <defs>
                  <linearGradient id="goldTraceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FBF0B9" />
                    <stop offset="40%" stopColor="#E2C366" />
                    <stop offset="70%" stopColor="#C59B27" />
                    <stop offset="100%" stopColor="#8C6B10" />
                  </linearGradient>
                </defs>

                {/* Outer Technical Box with corner notches */}
                <g transform="translate(10, 10)">
                  <rect x="0" y="0" width="124" height="114" rx="2" stroke="#C59B27" strokeWidth="1" strokeOpacity="0.45" fill="none" className="dark:stroke-[#D4AF37]" />
                  
                  {/* Corner Accent Brackets */}
                  <path d="M 0 12 L 0 0 L 12 0" stroke="#C59B27" strokeWidth="1.5" strokeOpacity="0.75" fill="none" className="dark:stroke-[#D4AF37]" />
                  <path d="M 112 0 L 124 0 L 124 12" stroke="#C59B27" strokeWidth="1.5" strokeOpacity="0.75" fill="none" className="dark:stroke-[#D4AF37]" />
                  <path d="M 124 102 L 124 114 L 112 114" stroke="#C59B27" strokeWidth="1.5" strokeOpacity="0.75" fill="none" className="dark:stroke-[#D4AF37]" />
                  <path d="M 12 114 L 0 114 L 0 102" stroke="#C59B27" strokeWidth="1.5" strokeOpacity="0.75" fill="none" className="dark:stroke-[#D4AF37]" />

                  {/* Network Graph Vertices */}
                  <circle cx="28" cy="30" r="3" stroke="#C59B27" strokeWidth="1.2" fill="#FAF8F5" className="dark:fill-[#0B0B0C] dark:stroke-[#D4AF37]" />
                  <circle cx="96" cy="24" r="3" stroke="#C59B27" strokeWidth="1.2" fill="#FAF8F5" className="dark:fill-[#0B0B0C] dark:stroke-[#D4AF37]" />
                  <circle cx="106" cy="72" r="3" stroke="#C59B27" strokeWidth="1.2" fill="#FAF8F5" className="dark:fill-[#0B0B0C] dark:stroke-[#D4AF37]" />
                  <circle cx="78" cy="98" r="3" stroke="#C59B27" strokeWidth="1.2" fill="#FAF8F5" className="dark:fill-[#0B0B0C] dark:stroke-[#D4AF37]" />
                  <circle cx="24" cy="84" r="3" stroke="#C59B27" strokeWidth="1.2" fill="#FAF8F5" className="dark:fill-[#0B0B0C] dark:stroke-[#D4AF37]" />

                  {/* Outer Polygon Lines */}
                  <line x1="28" y1="30" x2="96" y2="24" stroke="#C59B27" strokeWidth="1" strokeOpacity="0.4" className="dark:stroke-[#D4AF37]" />
                  <line x1="96" y1="24" x2="106" y2="72" stroke="#C59B27" strokeWidth="1" strokeOpacity="0.4" className="dark:stroke-[#D4AF37]" />
                  <line x1="106" y1="72" x2="78" y2="98" stroke="#C59B27" strokeWidth="1" strokeOpacity="0.4" className="dark:stroke-[#D4AF37]" />
                  <line x1="78" y1="98" x2="24" y2="84" stroke="#C59B27" strokeWidth="1" strokeOpacity="0.4" className="dark:stroke-[#D4AF37]" />
                  <line x1="24" y1="84" x2="28" y2="30" stroke="#C59B27" strokeWidth="1" strokeOpacity="0.4" className="dark:stroke-[#D4AF37]" />

                  {/* Center AI Node */}
                  <circle cx="62" cy="59" r="14" stroke="url(#goldTraceGrad)" strokeWidth="1.2" fill="#FAF8F5" className="dark:fill-[#0E0E10]" />
                  <text
                    x={isRtl ? "-62" : "62"}
                    y="63"
                    transform={isRtl ? "scale(-1, 1)" : undefined}
                    textAnchor="middle"
                    fill="#997A15"
                    className="dark:fill-[#E2C366]"
                    fontSize="10"
                    fontFamily="monospace"
                    fontWeight="bold"
                    letterSpacing="0.05em"
                  >
                    AI
                  </text>

                  {/* Spoke Lines to Central AI Node */}
                  <line x1="28" y1="30" x2="50" y2="50" stroke="#C59B27" strokeWidth="1" strokeOpacity="0.45" className="dark:stroke-[#D4AF37]" />
                  <line x1="96" y1="24" x2="74" y2="49" stroke="#C59B27" strokeWidth="1" strokeOpacity="0.45" className="dark:stroke-[#D4AF37]" />
                  <line x1="106" y1="72" x2="77" y2="62" stroke="#C59B27" strokeWidth="1" strokeOpacity="0.45" className="dark:stroke-[#D4AF37]" />
                  <line x1="78" y1="98" x2="68" y2="74" stroke="#C59B27" strokeWidth="1" strokeOpacity="0.45" className="dark:stroke-[#D4AF37]" />
                  <line x1="24" y1="84" x2="48" y2="67" stroke="#C59B27" strokeWidth="1" strokeOpacity="0.45" className="dark:stroke-[#D4AF37]" />
                </g>

                {/* Right margin trace lines */}
                <path d="M 134 40 L 155 40 L 170 55 L 185 55" stroke="#C59B27" strokeWidth="1" strokeOpacity="0.4" className="dark:stroke-[#D4AF37]" />
                <circle cx="155" cy="40" r="1.8" fill="#C59B27" className="dark:fill-[#D4AF37]" />

                {/* 3 Parallel 45-degree Diagonal Bus Lines Streaming to Outer Bottom Corner */}
                <path d="M 25 130 L 25 155 L 65 195 L 140 195 L 185 240" stroke="#C59B27" strokeWidth="1" strokeOpacity="0.45" className="dark:stroke-[#D4AF37]" />
                <path d="M 25 130 L 25 155 L 65 195 L 140 195 L 185 240" stroke="#D4AF37" strokeWidth="1.2" className="gold-flow-animate pointer-events-none opacity-60" />
                <circle cx="140" cy="195" r="1.8" fill="#C59B27" className="dark:fill-[#D4AF37]" />
                <circle cx="185" cy="240" r="2.2" fill="#FAF8F5" stroke="#C59B27" strokeWidth="1" className="dark:fill-[#0B0B0C] dark:stroke-[#D4AF37]" />

                <path d="M 45 130 L 45 145 L 80 180 L 155 180 L 195 220" stroke="#C59B27" strokeWidth="1" strokeOpacity="0.35" className="dark:stroke-[#D4AF37]" />
                <circle cx="195" cy="220" r="1.8" fill="#C59B27" className="dark:fill-[#D4AF37]" />

                <path d="M 75 130 L 95 150 L 170 150 L 198 178" stroke="#C59B27" strokeWidth="0.8" strokeOpacity="0.25" className="dark:stroke-[#D4AF37]" />
              </svg>
            </div>

            {/* ─── Executive Architectural Studio Portal & Pedestal (z-10) ─── */}
            <div className="relative w-full max-w-[280px] sm:max-w-[330px] lg:max-w-[360px] xl:max-w-[390px] aspect-[4/5] z-10 flex items-end justify-center select-none group">
              {/* Architectural Arched Pedestal Backplate */}
              <div 
                className="absolute inset-x-2 sm:inset-x-3 bottom-0 top-6 sm:top-8 rounded-t-[140px] sm:rounded-t-[170px] rounded-b-2xl overflow-hidden pointer-events-none transition-all duration-700 border border-[#B88E1F]/25 dark:border-[#D4AF37]/30 shadow-[0_20px_50px_-10px_rgba(184,142,31,0.12)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_35px_rgba(212,175,55,0.06)] bg-gradient-to-b from-[#F5EFE6] via-[#EFE7D8] to-[#FAF8F5] dark:from-[#161619] dark:via-[#0F0F12] dark:to-[#08080A]"
                aria-hidden="true"
              >
                {/* Inner Ambient Glow (Light: Warm Champagne Satin / Dark: Royal Obsidian Gold) */}
                <div className="absolute inset-x-4 top-8 bottom-0 rounded-t-full bg-radial from-[#FAF1DC]/90 via-[#F3E7CA]/40 to-transparent blur-xl dark:hidden pointer-events-none" />
                <div className="absolute inset-x-4 top-8 bottom-0 rounded-t-full bg-radial from-[#D4AF37]/20 via-[#C59B27]/5 to-transparent blur-2xl hidden dark:block pointer-events-none" />
                
                {/* Precision Geometric Blueprint Micro-Grid inside portal */}
                <div className="absolute inset-0 opacity-15 dark:opacity-10 pointer-events-none bg-[radial-gradient(#C59B27_1px,transparent_1px)] [background-size:16px_16px]" />
                
                {/* Pedestal Bottom Base Glow Line */}
                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#C59B27]/60 dark:via-[#D4AF37]/70 to-transparent" />
              </div>

              {/* ─── Cutout Portrait: HERO LAYER with Feathered Gradient Base Mask (Eliminates Floating & Hard Waist Cut) ─── */}
              <div 
                className="relative w-full h-full z-10 flex items-end justify-center select-none pointer-events-none"
                style={{
                  maskImage: "linear-gradient(to bottom, black 82%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 82%, transparent 100%)",
                }}
              >
                <Image
                  src="/images/profile/abdulghani-portrait.webp"
                  alt="Abdulghani Al-Shibami — AI Engineer & Software Developer"
                  fill
                  priority
                  className="object-contain object-bottom select-none pointer-events-none filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.16)] dark:drop-shadow-[0_16px_32px_rgba(0,0,0,0.7)] transition-all duration-300"
                  sizes="(max-width: 768px) 280px, (max-width: 1200px) 360px, 390px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


