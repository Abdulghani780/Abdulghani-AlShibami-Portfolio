"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Locale, Dictionary } from "@/lib/i18n/dictionaries";
import { Project } from "@/types/project";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { ProjectPreviewMockup } from "./ProjectPreviewMockup";

interface ReferenceLeftColumnProps {
  locale: Locale;
  dict: Dictionary;
  projects: Project[];
}

export function ReferenceLeftColumn({
  locale,
  dict,
  projects,
}: ReferenceLeftColumnProps) {
  const isRtl = locale === "ar";
  const [activeTab, setActiveTab] = useState("01_HOME");
  const [currentTime, setCurrentTime] = useState("10:30:15");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, "0");
      const m = String(now.getMinutes()).padStart(2, "0");
      const s = String(now.getSeconds()).padStart(2, "0");
      setCurrentTime(`${h}:${m}:${s}`);
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { id: "01_HOME", label: isRtl ? "٠١_الرئيسية" : "01_HOME", href: `/${locale}` },
    { id: "02_ABOUT", label: isRtl ? "٠٢_عني" : "02_ABOUT", href: `/${locale}#about` },
    { id: "03_PROJECTS", label: isRtl ? "٠٣_المشاريع" : "03_PROJECTS", href: `/${locale}/projects` },
    { id: "04_STACK", label: isRtl ? "٠٤_التقنيات" : "04_STACK", href: `/${locale}#stack` },
    { id: "05_CONTACT", label: isRtl ? "٠٥_التواصل" : "05_CONTACT", href: `/${locale}#contact` },
  ];

  return (
    <div className="w-full rounded-[22px] border border-white/[0.08] dark:border-white/[0.08] border-zinc-300 bg-[#070A0F] dark:bg-[#070A0F] bg-white backdrop-blur-xl p-5 sm:p-6 lg:p-7 flex flex-col justify-between space-y-7 shadow-2xl transition-colors duration-200">
      {/* ─────────────────────────────────────────────────────────────
          1. INTEGRATED TOP NAVIGATION (Exact Match to Reference AF)
      ───────────────────────────────────────────────────────────── */}
      <header className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/[0.07] dark:border-white/[0.07] border-zinc-200">
        {/* Brand Monogram & Technical Identity */}
        <div className="flex items-center gap-3">
          <Link
            href={`/${locale}`}
            className="font-mono text-2xl font-black tracking-tighter text-[#00FF9D] hover:opacity-90 transition-opacity select-none leading-none"
          >
            AS
          </Link>
          <div className="flex flex-col">
            <span className="font-mono text-xs font-bold tracking-wider text-white dark:text-white text-zinc-900 uppercase">
              {isRtl ? "عبدالغني الشبامي" : "ABDULGHANI AL-SHIBAMI"}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-wider text-white/50 dark:text-white/50 text-zinc-500 flex items-center gap-1.5">
              <span>{isRtl ? "مهندس برمجيات ونظم ذكاء اصطناعي" : "SOFTWARE ENGINEER & AI SYSTEMS"}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] animate-pulse inline-block" />
            </span>
          </div>
        </div>

        {/* Center Monospace Numbered Nav Tabs */}
        <nav className="hidden lg:flex items-center gap-2 font-mono text-[11px]">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setActiveTab(item.id)}
                className={`relative px-3 py-1 transition-all duration-200 ${
                  isActive
                    ? "text-[#00FF9D] font-bold border border-[#00FF9D] rounded-full bg-[#00FF9D]/5"
                    : "text-white/60 dark:text-white/60 text-zinc-600 hover:text-white dark:hover:text-white hover:text-zinc-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Utility Controls: Language, Theme & Brackets */}
        <div className="flex items-center gap-2">
          <LanguageSwitcher currentLocale={locale} />
          <ThemeToggle />
          <div className="hidden sm:flex items-center justify-center w-8 h-8 rounded border border-white/[0.08] dark:border-white/[0.08] border-zinc-200 text-white/40 dark:text-white/40 text-zinc-400 font-mono text-xs">
            [ ]
          </div>
        </div>
      </header>

      {/* ─────────────────────────────────────────────────────────────
          2. HERO SECTION — TECHNICAL PROFILE CONSOLE
      ───────────────────────────────────────────────────────────── */}
      <section id="about" className="space-y-5">
        {/* Terminal Micro-Status Lines */}
        <div className="font-mono text-[11px] text-white/50 dark:text-white/50 text-zinc-500 space-y-0.5">
          <div className="text-[#00FF9D]/80">
            &gt; INITIALIZING_PORTFOLIO.EXE
          </div>
          <div className="flex items-center gap-2 text-[#00FF9D]/90">
            <span>&gt; STATUS: ONLINE</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00FF9D] animate-pulse" />
          </div>
        </div>

        {/* Hero Main Grid: Content (Left) + Portrait & Metadata (Right) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
          {/* Left Region: Headline, Prose & CTA Buttons */}
          <div className="md:col-span-7 space-y-4">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-normal leading-[1.12] text-white dark:text-white text-zinc-900 tracking-tight">
              {isRtl ? (
                <>
                  بناء الأنظمة <br />
                  خلف <span className="text-[#00FF9D] font-medium">الواجهة البرمجية.</span>
                </>
              ) : (
                <>
                  Building Systems <br />
                  Behind the <span className="text-[#00FF9D] font-medium">Interface.</span>
                </>
              )}
            </h1>

            <p className="text-white/70 dark:text-white/70 text-zinc-600 text-xs sm:text-sm leading-relaxed max-w-md">
              {isRtl
                ? "أصمم وأبني أنظمة رقمية متينة بمعمارية برمجية نظيفة، ترتكز على حل المشكلات الحقيقية والأثر القابل للقياس."
                : "I design and build scalable digital products with clean architecture, focused on real problems and measurable impact."}
            </p>

            {/* Compact Action Buttons (Exact Reference Style) */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href={`/${locale}/projects`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded border border-[#00FF9D] bg-[#00FF9D]/10 text-[#00FF9D] text-xs font-mono font-semibold hover:bg-[#00FF9D]/20 transition-all duration-200"
              >
                <span>{isRtl ? "استعراض أعمالي" : "VIEW MY WORK"}</span>
                <span className="text-[10px] rtl:rotate-180">↗</span>
              </Link>

              <a
                href="/Abdulghani-Alshibami-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded border border-white/[0.15] dark:border-white/[0.15] border-zinc-300 bg-transparent text-white/80 dark:text-white/80 text-zinc-700 text-xs font-mono hover:border-white/30 transition-all duration-200"
              >
                <span>{isRtl ? "تحميل السيرة الذاتية" : "DOWNLOAD CV"}</span>
                <span className="text-[10px]">↓</span>
              </a>
            </div>

            <div className="font-mono text-[10px] text-white/40 dark:text-white/40 text-zinc-400 pt-0.5">
              &gt; SCROLL_TO_EXPLORE ↓
            </div>
          </div>

          {/* Right Region: Portrait + Vertical Metadata Rail */}
          <div className="md:col-span-5 flex items-stretch gap-3">
            {/* Integrated Portrait Frame */}
            <div className="relative flex-1 min-h-[260px] sm:min-h-[280px] rounded-xl overflow-hidden border border-white/[0.1] dark:border-white/[0.1] border-zinc-200 bg-[#090D14] group">
              <Image
                src="/images/profile/abdulghani-profile-hero.webp"
                alt="Abdulghani Al-Shibami"
                fill
                sizes="(max-width: 768px) 100vw, 260px"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                priority
              />
              {/* Dark Gradient Vignette Blending to Base */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070A0F] via-[#070A0F]/20 to-transparent pointer-events-none" />
            </div>

            {/* Vertical Metadata Rail */}
            <div className="flex flex-col justify-between py-1 font-mono text-[9px] text-white/60 dark:text-white/60 text-zinc-600 space-y-2 border-s border-white/[0.08] dark:border-white/[0.08] border-zinc-200 ps-3">
              <div>
                <span className="text-white/40 dark:text-white/40 text-zinc-400 block">&gt; WHO_AM_I</span>
                <span className="text-white dark:text-white text-zinc-900 font-semibold block">
                  {isRtl ? "عبدالغني الشبامي" : "Abdulghani"}
                </span>
              </div>
              <div>
                <span className="text-white/40 dark:text-white/40 text-zinc-400 block">&gt; ROLE</span>
                <span className="text-white/90 dark:text-white/90 text-zinc-800 block">
                  {isRtl ? "مهندس برمجيات" : "Software Eng."}
                </span>
              </div>
              <div>
                <span className="text-white/40 dark:text-white/40 text-zinc-400 block">&gt; LOCATION</span>
                <span className="text-white/90 dark:text-white/90 text-zinc-800 block">
                  {isRtl ? "صنعاء، اليمن" : "Sana'a, Yemen"}
                </span>
              </div>
              <div>
                <span className="text-white/40 dark:text-white/40 text-zinc-400 block">&gt; EXPERIENCE</span>
                <span className="text-white/90 dark:text-white/90 text-zinc-800 block">
                  {isRtl ? "هندسة برمجيات" : "Engineering"}
                </span>
              </div>
              <div>
                <span className="text-white/40 dark:text-white/40 text-zinc-400 block">&gt; AVAILABILITY</span>
                <span className="text-[#00FF9D] font-medium block">
                  {isRtl ? "متاح للمشاريع" : "Open for projects"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. SELECTED PROJECTS STRIP (// SELECTED PROJECTS)
      ───────────────────────────────────────────────────────────── */}
      <section className="space-y-3.5 pt-1">
        <div className="flex items-center justify-between border-b border-white/[0.06] dark:border-white/[0.06] border-zinc-200 pb-2">
          <span className="font-mono text-xs font-bold text-white/90 dark:text-white/90 text-zinc-800 tracking-wider">
            {"// SELECTED PROJECTS"}
          </span>
          <Link
            href={`/${locale}/projects`}
            className="font-mono text-[10px] text-white/50 dark:text-white/50 text-zinc-500 hover:text-[#00FF9D] transition-colors flex items-center gap-1"
          >
            <span>{isRtl ? "عرض كافة المشاريع" : "VIEW_ALL_PROJECTS"}</span>
            <span className="text-[9px]">[ ]</span>
          </Link>
        </div>

        {/* 3 Selected Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          {/* Card 01: Campus IT Tracker */}
          <Link
            href={`/${locale}/projects/campus-it-tracker`}
            className="group rounded-xl border border-white/[0.08] dark:border-white/[0.08] border-zinc-200/80 bg-[#0A0E16]/80 dark:bg-[#0A0E16]/80 bg-zinc-50/90 p-3 flex flex-col justify-between hover:border-[#00FF9D]/60 transition-all duration-300 space-y-2.5"
          >
            <div className="space-y-1">
              <div className="flex items-center justify-between font-mono text-[10px] text-white/40 dark:text-white/40 text-zinc-400">
                <span className="text-[#00FF9D] font-bold">01</span>
                <span>+</span>
              </div>
              <div className="font-mono text-[9px] text-[#00FF9D]/70 uppercase">
                {"// ENTERPRISE IT"}
              </div>
              <h3 className="font-serif text-sm font-semibold text-white dark:text-white text-zinc-900 group-hover:text-[#00FF9D] transition-colors">
                Campus IT Tracker
              </h3>
              <p className="text-white/60 dark:text-white/60 text-zinc-600 text-[10px] leading-relaxed line-clamp-2">
                {isRtl
                  ? "نظام مكتبي مؤسسي C# WinForms مع Oracle 10g لإدارة أصول المختبرات وبلاغات ITIL."
                  : "Windows desktop application with Oracle 10g for IT infrastructure tracking and ITIL service desk."}
              </p>
            </div>

            <div className="h-28 w-full rounded overflow-hidden">
              <ProjectPreviewMockup projectSlug="campus-it-tracker" />
            </div>

            <div className="flex items-center justify-between pt-1 font-mono text-[9px] text-white/50 dark:text-white/50 text-zinc-500 border-t border-white/[0.04]">
              <div className="flex items-center gap-1.5">
                <span>C#</span>
                <span>•</span>
                <span>Oracle</span>
              </div>
              <span className="text-white/40 group-hover:text-[#00FF9D] transition-colors">↗</span>
            </div>
          </Link>

          {/* Card 02: MetaAlgorithm Lab */}
          <Link
            href={`/${locale}/projects/metaalgorithm-lab`}
            className="group rounded-xl border border-white/[0.08] dark:border-white/[0.08] border-zinc-200/80 bg-[#0A0E16]/80 dark:bg-[#0A0E16]/80 bg-zinc-50/90 p-3 flex flex-col justify-between hover:border-[#00FF9D]/60 transition-all duration-300 space-y-2.5"
          >
            <div className="space-y-1">
              <div className="flex items-center justify-between font-mono text-[10px] text-white/40 dark:text-white/40 text-zinc-400">
                <span className="text-[#00FF9D] font-bold">02</span>
                <span>+</span>
              </div>
              <div className="font-mono text-[9px] text-[#00FF9D]/70 uppercase">
                {"// ALGORITHMIC AI"}
              </div>
              <h3 className="font-serif text-sm font-semibold text-white dark:text-white text-zinc-900 group-hover:text-[#00FF9D] transition-colors">
                MetaAlgorithm Lab
              </h3>
              <p className="text-white/60 dark:text-white/60 text-zinc-600 text-[10px] leading-relaxed line-clamp-2">
                {isRtl
                  ? "منصة بايثون وPyQt6 لتحليل التعقيد الحسابي ورسم منحنيات الأداء الخوارزمي."
                  : "Python & PyQt6 algorithmic benchmark platform with empirical complexity analysis & visualizations."}
              </p>
            </div>

            <div className="h-28 w-full rounded overflow-hidden">
              <ProjectPreviewMockup projectSlug="metaalgorithm-lab" />
            </div>

            <div className="flex items-center justify-between pt-1 font-mono text-[9px] text-white/50 dark:text-white/50 text-zinc-500 border-t border-white/[0.04]">
              <div className="flex items-center gap-1.5">
                <span>Python</span>
                <span>•</span>
                <span>PyQt6</span>
              </div>
              <span className="text-white/40 group-hover:text-[#00FF9D] transition-colors">↗</span>
            </div>
          </Link>

          {/* Card 03: NovaTech */}
          <Link
            href={`/${locale}/projects/novatech`}
            className="group rounded-xl border border-white/[0.08] dark:border-white/[0.08] border-zinc-200/80 bg-[#0A0E16]/80 dark:bg-[#0A0E16]/80 bg-zinc-50/90 p-3 flex flex-col justify-between hover:border-[#00FF9D]/60 transition-all duration-300 space-y-2.5"
          >
            <div className="space-y-1">
              <div className="flex items-center justify-between font-mono text-[10px] text-white/40 dark:text-white/40 text-zinc-400">
                <span className="text-[#00FF9D] font-bold">03</span>
                <span>+</span>
              </div>
              <div className="font-mono text-[9px] text-[#00FF9D]/70 uppercase">
                {"// MODERN COMMERCE"}
              </div>
              <h3 className="font-serif text-sm font-semibold text-white dark:text-white text-zinc-900 group-hover:text-[#00FF9D] transition-colors">
                NovaTech
              </h3>
              <p className="text-white/60 dark:text-white/60 text-zinc-600 text-[10px] leading-relaxed line-clamp-2">
                {isRtl
                  ? "منصة أجهزة وتقنيات حديثة مبنية على Next.js مع سلة تفاعلية ورصد آني للمخزون."
                  : "High-contrast smart electronics showcase with responsive catalog and dynamic cart telemetry."}
              </p>
            </div>

            <div className="h-28 w-full rounded overflow-hidden">
              <ProjectPreviewMockup projectSlug="novatech" />
            </div>

            <div className="flex items-center justify-between pt-1 font-mono text-[9px] text-white/50 dark:text-white/50 text-zinc-500 border-t border-white/[0.04]">
              <div className="flex items-center gap-1.5">
                <span>Next.js</span>
                <span>•</span>
                <span>Tailwind</span>
              </div>
              <span className="text-white/40 group-hover:text-[#00FF9D] transition-colors">↗</span>
            </div>
          </Link>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. BOTTOM TELEMETRY STRIP (SYSTEM_LOG & TECH_STACK)
      ───────────────────────────────────────────────────────────── */}
      <section id="stack" className="grid grid-cols-1 sm:grid-cols-12 gap-4 pt-1">
        {/* System Log */}
        <div className="sm:col-span-5 rounded-xl border border-white/[0.06] dark:border-white/[0.06] border-zinc-200/80 bg-black/40 dark:bg-black/40 bg-zinc-100/70 p-3 space-y-1.5 font-mono text-[10px]">
          <div className="text-white/40 dark:text-white/40 text-zinc-500 text-[9px]">
            &gt; SYSTEM_LOG
          </div>
          <div className="text-white/70 dark:text-white/70 text-zinc-700 space-y-0.5 text-[9px]">
            <div>[{currentTime}] Portfolio initialized</div>
            <div>[{currentTime}] Loading projects</div>
            <div className="text-[#00FF9D] font-semibold">
              [{currentTime}] Ready.
            </div>
          </div>
        </div>

        {/* Tech Stack Badges */}
        <div className="sm:col-span-7 rounded-xl border border-white/[0.06] dark:border-white/[0.06] border-zinc-200/80 bg-black/40 dark:bg-black/40 bg-zinc-100/70 p-3 space-y-1.5">
          <div className="font-mono text-[9px] text-white/40 dark:text-white/40 text-zinc-500">
            &gt; TECH_STACK
          </div>
          <div className="flex flex-wrap items-center gap-2 pt-0.5">
            {[
              { label: "Next.js", code: "N" },
              { label: "TypeScript", code: "TS" },
              { label: "Tailwind", code: "TW" },
              { label: "React", code: "RE" },
              { label: "Python", code: "PY" },
              { label: "Oracle 10g", code: "ORA" },
              { label: "C# .NET", code: "C#" },
              { label: "Supabase", code: "SB" },
            ].map((tech) => (
              <span
                key={tech.label}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-white/[0.08] dark:border-white/[0.08] border-zinc-200 bg-white/[0.03] text-white/80 dark:text-white/80 text-zinc-700 font-mono text-[10px] hover:border-[#00FF9D]/50 transition-colors"
              >
                <span className="text-[#00FF9D] text-[9px] font-bold">{tech.code}</span>
                <span>{tech.label}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. LEFT COLUMN FOOTER
      ───────────────────────────────────────────────────────────── */}
      <footer className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/[0.06] dark:border-white/[0.06] border-zinc-200 font-mono text-[10px] text-white/40 dark:text-white/40 text-zinc-400">
        <div>© 2026 Abdulghani Al-Shibami. All rights reserved.</div>
        <div className="flex items-center gap-1.5 text-white/60 dark:text-white/60 text-zinc-500">
          <span>{isRtl ? "صنعاء، اليمن" : "BASED IN SANA'A, YEMEN"}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] inline-block animate-pulse" />
        </div>
      </footer>
    </div>
  );
}
