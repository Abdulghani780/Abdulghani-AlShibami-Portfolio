"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Locale, Dictionary } from "@/lib/i18n/dictionaries";
import { Project } from "@/types/project";
import { ProjectPreviewMockup } from "./ProjectPreviewMockup";
import { WireframeGlobe } from "./WireframeGlobe";
import { ContactForm } from "@/components/features/ContactForm";

interface ReferenceRightColumnProps {
  locale: Locale;
  dict: Dictionary;
  projects: Project[];
}

export function ReferenceRightColumn({
  locale,
  dict,
  projects,
}: ReferenceRightColumnProps) {
  const isRtl = locale === "ar";
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="w-full rounded-[22px] border border-white/[0.08] dark:border-white/[0.08] border-zinc-200/80 bg-[#070A0E]/95 dark:bg-[#070A0E]/95 bg-white/95 backdrop-blur-xl p-5 sm:p-7 flex flex-col justify-between space-y-8 shadow-2xl transition-colors duration-200">
      {/* ─────────────────────────────────────────────────────────────
          1. CASE STUDIES SECTION (// CASE STUDIES + VIEW_ALL)
      ───────────────────────────────────────────────────────────── */}
      <section className="space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-white/[0.07] dark:border-white/[0.07] border-zinc-200/80">
          <span className="font-mono text-xs font-bold text-white/90 dark:text-white/90 text-zinc-800 tracking-wider">
            {"// CASE STUDIES"}
          </span>
          <Link
            href={`/${locale}/projects`}
            className="font-mono text-[10px] text-white/50 dark:text-white/50 text-zinc-500 hover:text-gold transition-colors flex items-center gap-1"
          >
            <span>{isRtl ? "عرض دراسات الحالة" : "VIEW_ALL_CASE_STUDIES"}</span>
            <span className="text-[9px]">[ ]</span>
          </Link>
        </div>

        {/* 3 Stacked Horizontal Case Study Rows */}
        <div className="space-y-3">
          {/* Row 01: Campus IT Tracker */}
          <Link
            href={`/${locale}/projects/campus-it-tracker`}
            className="group flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-3.5 rounded-xl border border-white/[0.08] dark:border-white/[0.08] border-zinc-200/80 bg-[#0B0E14]/80 dark:bg-[#0B0E14]/80 bg-zinc-50/90 hover:border-gold/50 transition-all duration-300"
          >
            {/* Number & UI Thumbnail */}
            <div className="flex items-center gap-3 shrink-0">
              <span className="font-mono text-xs font-bold text-gold">01</span>
              <div className="w-24 sm:w-28 h-16 rounded overflow-hidden shrink-0">
                <ProjectPreviewMockup projectSlug="campus-it-tracker" />
              </div>
            </div>

            {/* Case Study Details (Center) */}
            <div className="flex-1 min-w-0 space-y-1">
              <h3 className="font-serif text-sm font-semibold text-white dark:text-white text-zinc-900 group-hover:text-gold transition-colors">
                {isRtl
                  ? "Campus IT Tracker — نظام إدارة أصول وبنية ITIL"
                  : "Campus IT Tracker — Enterprise IT Infrastructure"}
              </h3>
              <p className="text-white/60 dark:text-white/60 text-zinc-600 text-[11px] leading-relaxed line-clamp-2">
                {isRtl
                  ? "تطوير نظام مؤسسي C# WinForms مع Oracle 10g لإدارة المختبرات وتتبع العهد وبلاغات الدعم الفني."
                  : "End-to-end development of a scalable enterprise ITIL infrastructure tracker with interactive campus maps and Oracle custody auditing."}
              </p>
              <div className="flex flex-wrap items-center gap-1.5 pt-1 font-mono text-[9px] text-white/50 dark:text-white/50 text-zinc-500">
                <span className="px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">C# .NET</span>
                <span className="px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">Oracle 10g</span>
                <span className="px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">ITIL Kanban</span>
              </div>
            </div>

            {/* Architecture Metrics & Link Arrow (Right) */}
            <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-t-0 pt-2 sm:pt-0 border-white/[0.04] shrink-0 font-mono text-end">
              <div className="text-[9px] text-white/40 dark:text-white/40 text-zinc-400 uppercase">RESULTS</div>
              <div className="text-[11px] text-emerald-400 dark:text-emerald-400 text-emerald-600 font-semibold">
                Enterprise Tier
              </div>
              <div className="text-[10px] text-white/60 dark:text-white/60 text-zinc-500">
                40+ Assets Tracked
              </div>
              <span className="text-white/40 group-hover:text-gold transition-colors text-xs hidden sm:inline-block pt-1">
                ↗
              </span>
            </div>
          </Link>

          {/* Row 02: MetaAlgorithm Lab */}
          <Link
            href={`/${locale}/projects/metaalgorithm-lab`}
            className="group flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-3.5 rounded-xl border border-white/[0.08] dark:border-white/[0.08] border-zinc-200/80 bg-[#0B0E14]/80 dark:bg-[#0B0E14]/80 bg-zinc-50/90 hover:border-gold/50 transition-all duration-300"
          >
            {/* Number & UI Thumbnail */}
            <div className="flex items-center gap-3 shrink-0">
              <span className="font-mono text-xs font-bold text-gold">02</span>
              <div className="w-24 sm:w-28 h-16 rounded overflow-hidden shrink-0">
                <ProjectPreviewMockup projectSlug="metaalgorithm-lab" />
              </div>
            </div>

            {/* Case Study Details (Center) */}
            <div className="flex-1 min-w-0 space-y-1">
              <h3 className="font-serif text-sm font-semibold text-white dark:text-white text-zinc-900 group-hover:text-gold transition-colors">
                {isRtl
                  ? "MetaAlgorithm Lab — مختبر كفاءة الخوارزميات"
                  : "MetaAlgorithm Lab — Complexity Workbench"}
              </h3>
              <p className="text-white/60 dark:text-white/60 text-zinc-600 text-[11px] leading-relaxed line-clamp-2">
                {isRtl
                  ? "منصة بايثون وPyQt6 للمقارنة الرياضية والتجريبية بين خوارزميات الترتيب والمسارات ورسم النتائج."
                  : "Empirical benchmarking testbed evaluating sorting, pathfinding, and computational complexity with PyQt6 & NumPy."}
              </p>
              <div className="flex flex-wrap items-center gap-1.5 pt-1 font-mono text-[9px] text-white/50 dark:text-white/50 text-zinc-500">
                <span className="px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">Python 3.10+</span>
                <span className="px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">PyQt6</span>
                <span className="px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">NumPy</span>
              </div>
            </div>

            {/* Architecture Metrics & Link Arrow (Right) */}
            <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-t-0 pt-2 sm:pt-0 border-white/[0.04] shrink-0 font-mono text-end">
              <div className="text-[9px] text-white/40 dark:text-white/40 text-zinc-400 uppercase">RESULTS</div>
              <div className="text-[11px] text-cyan-400 dark:text-cyan-400 text-cyan-600 font-semibold">
                O(n log n) Bench
              </div>
              <div className="text-[10px] text-white/60 dark:text-white/60 text-zinc-500">
                Vectorized Math
              </div>
              <span className="text-white/40 group-hover:text-gold transition-colors text-xs hidden sm:inline-block pt-1">
                ↗
              </span>
            </div>
          </Link>

          {/* Row 03: Graduation Project Portal */}
          <Link
            href={`/${locale}/projects/graduation-project-portal`}
            className="group flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-3.5 rounded-xl border border-white/[0.08] dark:border-white/[0.08] border-zinc-200/80 bg-[#0B0E14]/80 dark:bg-[#0B0E14]/80 bg-zinc-50/90 hover:border-gold/50 transition-all duration-300"
          >
            {/* Number & UI Thumbnail */}
            <div className="flex items-center gap-3 shrink-0">
              <span className="font-mono text-xs font-bold text-gold">03</span>
              <div className="w-24 sm:w-28 h-16 rounded overflow-hidden shrink-0">
                <ProjectPreviewMockup projectSlug="graduation-project-portal" />
              </div>
            </div>

            {/* Case Study Details (Center) */}
            <div className="flex-1 min-w-0 space-y-1">
              <h3 className="font-serif text-sm font-semibold text-white dark:text-white text-zinc-900 group-hover:text-gold transition-colors">
                {isRtl
                  ? "Graduation Project Portal — بوابة مشاريع التخرج"
                  : "Graduation Project Portal — Academic Proposal Platform"}
              </h3>
              <p className="text-white/60 dark:text-white/60 text-zinc-600 text-[11px] leading-relaxed line-clamp-2">
                {isRtl
                  ? "نظام ويب جامعي لإدارة دورة مقترحات التخرج، وتنسيق لجان التحكيم وتقييم النماذج آلياً."
                  : "Multi-role academic workflow platform automating proposal submissions, committee reviews, and defense scheduling."}
              </p>
              <div className="flex flex-wrap items-center gap-1.5 pt-1 font-mono text-[9px] text-white/50 dark:text-white/50 text-zinc-500">
                <span className="px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">PHP 8</span>
                <span className="px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">MySQL 8</span>
                <span className="px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">Bootstrap</span>
              </div>
            </div>

            {/* Architecture Metrics & Link Arrow (Right) */}
            <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-t-0 pt-2 sm:pt-0 border-white/[0.04] shrink-0 font-mono text-end">
              <div className="text-[9px] text-white/40 dark:text-white/40 text-zinc-400 uppercase">RESULTS</div>
              <div className="text-[11px] text-purple-400 dark:text-purple-400 text-purple-600 font-semibold">
                3 User Roles
              </div>
              <div className="text-[10px] text-white/60 dark:text-white/60 text-zinc-500">
                Automated Rubric
              </div>
              <span className="text-white/40 group-hover:text-gold transition-colors text-xs hidden sm:inline-block pt-1">
                ↗
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. THREE-PART INFO PANEL (SKILLS, SERVICES, TOOLS)
      ───────────────────────────────────────────────────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-2">
        {/* Column 1: Technical Skills */}
        <div className="rounded-xl border border-white/[0.07] dark:border-white/[0.07] border-zinc-200/80 bg-[#0B0E14]/80 dark:bg-[#0B0E14]/80 bg-zinc-50/90 p-3.5 space-y-3 font-mono">
          <div className="flex items-center justify-between text-white/90 dark:text-white/90 text-zinc-800 text-xs font-bold border-b border-white/[0.06] pb-2">
            <span>&lt;/&gt; TECHNICAL SKILLS</span>
          </div>
          <div className="space-y-2 text-[11px]">
            {[
              { name: "Frontend Development", pct: "95%" },
              { name: "Backend Development", pct: "90%" },
              { name: "Database Design", pct: "90%" },
              { name: "Systems Analysis", pct: "95%" },
              { name: "AI / ML Integration", pct: "80%" },
              { name: "Desktop Engineering", pct: "85%" },
            ].map((skill) => (
              <div key={skill.name} className="space-y-0.5">
                <div className="flex justify-between text-white/70 dark:text-white/70 text-zinc-600 text-[10px]">
                  <span>{skill.name}</span>
                  <span className="text-gold font-bold">{skill.pct}</span>
                </div>
                <div className="h-1 w-full bg-white/[0.06] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gold/70 rounded-full"
                    style={{ width: skill.pct }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Services / Capabilities */}
        <div className="rounded-xl border border-white/[0.07] dark:border-white/[0.07] border-zinc-200/80 bg-[#0B0E14]/80 dark:bg-[#0B0E14]/80 bg-zinc-50/90 p-3.5 space-y-3 font-mono">
          <div className="flex items-center justify-between text-white/90 dark:text-white/90 text-zinc-800 text-xs font-bold border-b border-white/[0.06] pb-2">
            <span>[#] SERVICES</span>
          </div>
          <div className="space-y-2 text-[11px]">
            {[
              { title: "Web App Development", desc: "Next.js, React, Tailwind" },
              { title: "AI Integration & Automation", desc: "LLM, Vector, Heuristics" },
              { title: "Systems Architecture", desc: "Clean Architecture, OOP" },
              { title: "Database Optimization", desc: "Oracle 10g, MySQL, SQL" },
              { title: "Technical Training & Docs", desc: "System Specs & Demos" },
            ].map((srv) => (
              <div
                key={srv.title}
                className="group flex items-center justify-between p-1.5 rounded hover:bg-white/[0.04] transition-colors"
              >
                <div>
                  <div className="text-white/90 dark:text-white/90 text-zinc-800 text-[11px] font-semibold">
                    {srv.title}
                  </div>
                  <div className="text-white/40 dark:text-white/40 text-zinc-400 text-[9px]">
                    {srv.desc}
                  </div>
                </div>
                <span className="text-white/30 group-hover:text-gold transition-colors text-xs">
                  ↗
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Column 3: Tools I Use */}
        <div className="rounded-xl border border-white/[0.07] dark:border-white/[0.07] border-zinc-200/80 bg-[#0B0E14]/80 dark:bg-[#0B0E14]/80 bg-zinc-50/90 p-3.5 space-y-3 font-mono">
          <div className="flex items-center justify-between text-white/90 dark:text-white/90 text-zinc-800 text-xs font-bold border-b border-white/[0.06] pb-2">
            <span>[T] TOOLS I USE</span>
          </div>
          <div className="flex flex-wrap gap-1.5 text-[10px]">
            {[
              "VS Code",
              "Visual Studio",
              "Git & GitHub",
              "Oracle 10g",
              "MySQL 8",
              "Supabase",
              "Vercel",
              "Postman",
              "PowerDesigner",
              "Tailwind CSS",
              "Figma",
              "LaTeX",
            ].map((tool) => (
              <div
                key={tool}
                className="px-2 py-1 rounded border border-white/[0.06] dark:border-white/[0.06] border-zinc-200/60 bg-white/[0.02] text-white/80 dark:text-white/80 text-zinc-700 flex items-center gap-1.5 text-[9.5px] hover:border-gold/30 transition-colors"
              >
                <span className="text-gold text-[8px]">•</span>
                <span>{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. LOWER CONTACT SECTION (LET'S BUILD + SEND MESSAGE)
      ───────────────────────────────────────────────────────────── */}
      <section
        id="contact"
        className="rounded-xl border border-white/[0.07] dark:border-white/[0.07] border-zinc-200/80 bg-[#0B0E14]/90 dark:bg-[#0B0E14]/90 bg-zinc-50/90 p-5 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
      >
        {/* Left Side: Headline & Wireframe Globe */}
        <div className="md:col-span-7 space-y-3">
          <div className="font-mono text-[10px] text-white/40 dark:text-white/40 text-zinc-500">
            &gt; LET&apos;S_BUILD_SOMETHING_GREAT
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-white dark:text-white text-zinc-900 leading-tight tracking-tight">
            {isRtl ? (
              <>
                جاهز لبناء <br />
                <span className="text-gold font-medium">ما يُحدث أثراً._</span>
              </>
            ) : (
              <>
                Ready to build <br />
                <span className="text-gold font-medium">what matters._</span>
              </>
            )}
          </h2>

          <div className="pt-2 flex items-center justify-center md:justify-start">
            <WireframeGlobe className="w-32 h-32 sm:w-36 sm:h-36" accentColor="#D4AF37" />
          </div>
        </div>

        {/* Right Side: Message Action & CTA */}
        <div className="md:col-span-5 space-y-3.5 font-mono text-[11px] border-t md:border-t-0 md:border-s border-white/[0.07] dark:border-white/[0.07] border-zinc-200 pt-4 md:pt-0 md:ps-5">
          <div className="text-white/40 dark:text-white/40 text-zinc-500 text-[10px]">
            &gt; SEND_MESSAGE
          </div>
          <p className="text-white/70 dark:text-white/70 text-zinc-600 text-xs leading-relaxed font-sans">
            {isRtl
              ? "متاح حالياً للمشاريع التقنية، الفرص الهندسية، والتعاون البرمجي."
              : "I'm currently available for engineering roles, technical projects and collaborations."}
          </p>

          <button
            type="button"
            onClick={() => setContactModalOpen(true)}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded border border-gold/70 bg-gold/15 text-gold text-xs font-mono font-semibold hover:bg-gold/25 hover:border-gold transition-all duration-200 shadow-gold-ambient group"
          >
            <span>{isRtl ? "بدء محادثة" : "START A CONVERSATION"}</span>
            <span className="text-xs group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform">
              ↗
            </span>
          </button>

          <div className="pt-1 text-[10px] text-white/50 dark:text-white/50 text-zinc-500">
            <span className="text-white/30 dark:text-white/30 text-zinc-400 block">Direct Email:</span>
            <a
              href="mailto:abdulghani.alshibami@gmail.com"
              className="text-gold hover:underline font-mono text-[11px]"
            >
              abdulghani.alshibami@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. RIGHT COLUMN FOOTER (MONOGRAM + THANKS FOR VISITING)
      ───────────────────────────────────────────────────────────── */}
      <footer className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/[0.06] dark:border-white/[0.06] border-zinc-200 font-mono text-[10px]">
        <div className="flex items-center gap-2 text-white/50 dark:text-white/50 text-zinc-500">
          <span className="font-serif font-bold text-gold">AS</span>
          <span>{"// THANKS FOR VISITING"}</span>
        </div>

        {/* Social Icons / Anchors */}
        <div className="flex items-center gap-4 text-white/60 dark:text-white/60 text-zinc-500">
          <a
            href="https://github.com/Abdulghani780"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:abdulghani.alshibami@gmail.com"
            className="hover:text-gold transition-colors"
          >
            Email
          </a>
        </div>
      </footer>

      {/* ─────────────────────────────────────────────────────────────
          5. MODAL DIALOG FOR CONTACT (Connected to Supabase)
      ───────────────────────────────────────────────────────────── */}
      {contactModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
        >
          <div className="relative w-full max-w-xl rounded-2xl border border-gold/40 bg-[#0A0D12] p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <div>
                <div className="font-mono text-[10px] text-gold tracking-widest uppercase">
                  &gt; SECURE_TRANSMISSION
                </div>
                <h3 className="font-serif text-xl font-bold text-white">
                  {isRtl ? "بدء محادثة هندسية" : "Start a Conversation"}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setContactModalOpen(false)}
                className="w-8 h-8 rounded-lg border border-white/10 text-white/60 hover:text-white hover:border-white/30 flex items-center justify-center font-mono text-sm"
              >
                ✕
              </button>
            </div>

            {/* Supabase Resilient Contact Form */}
            <ContactForm isRtl={isRtl} />
          </div>
        </div>
      )}
    </div>
  );
}
