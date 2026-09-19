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

  // 5 Authentic Flagship Projects with live workstation sandbox metadata
  const flagshipProjects = [
    {
      num: "01",
      slug: "campus-it-tracker",
      titleEn: "Campus IT Tracker — Enterprise IT Infrastructure",
      titleAr: "Campus IT Tracker — نظام إدارة أصول وبنية ITIL",
      descEn: "Scalable C# WinForms & Oracle 10g system with interactive campus blueprints, custody auditing, and ITIL service desk triage.",
      descAr: "تطوير نظام مؤسسي C# WinForms مع Oracle 10g لإدارة المختبرات وتتبع العهد وبلاغات الدعم الفني عبر لوحة كانبان.",
      stack: ["C# .NET", "Oracle 10g", "ITIL Kanban"],
      resultBadge: "40+ Assets",
      metricEn: "Enterprise Tier",
      metricAr: "مستوى مؤسسي",
    },
    {
      num: "02",
      slug: "metaalgorithm-lab",
      titleEn: "MetaAlgorithm Lab — Complexity & Benchmark Workbench",
      titleAr: "MetaAlgorithm Lab — مختبر كفاءة الخوارزميات",
      descEn: "Empirical benchmarking testbed evaluating sorting, pathfinding, and computational complexity with PyQt6 & NumPy.",
      descAr: "منصة بايثون وPyQt6 للمقارنة الرياضية والتجريبية بين خوارزميات الترتيب والمسارات ورسم النتائج واستهلاك الذاكرة.",
      stack: ["Python 3.10+", "PyQt6", "NumPy"],
      resultBadge: "3.14ms Sort",
      metricEn: "O(n log n) Bench",
      metricAr: "اختبار التعقيد",
    },
    {
      num: "03",
      slug: "novatech",
      titleEn: "NovaTech Cloud — Modern Tech & IoT Showcase",
      titleAr: "NovaTech Cloud — منصة الأجهزة الذكية والسحابية",
      descEn: "High-contrast smart electronics platform on Next.js with live cart telemetry, responsive catalog, and edge nodes.",
      descAr: "منصة تجارة إلكترونية سحابية للأجهزة الذكية مبنية بـ Next.js مع سلة تفاعلية ورصد حي لحالة المخزون.",
      stack: ["Next.js 15", "TypeScript", "Tailwind"],
      resultBadge: "12ms Latency",
      metricEn: "Edge Synced",
      metricAr: "تزامن طرفي",
    },
    {
      num: "04",
      slug: "cafena",
      titleEn: "Cafena Coffee Suite — Arabic RTL POS & Operations",
      titleAr: "Cafena Coffee Suite — نظام نقاط البيع وإدارة الكافيه",
      descEn: "Native Arabic RTL coffee operations suite with live order ledger, inventory monitoring, and artisanal roast profiles.",
      descAr: "نظام إدارة ونقاط بيع متكامل للكافيهات بواجهة عربية أصلية بالكامل (RTL) مع إدارة المبيعات والمخزون المباشر.",
      stack: ["HTML5 / CSS3", "JavaScript ES6", "RTL Engine"],
      resultBadge: "$12,650 Rev",
      metricEn: "100% RTL Parity",
      metricAr: "توافق عربي كامل",
    },
    {
      num: "05",
      slug: "gp",
      titleEn: "Graduation Project Portal — Academic Evaluation Suite",
      titleAr: "GP Graduation Portal — بوابة مشاريع التخرج الأكاديمية",
      descEn: "Multi-role academic workflow platform automating proposal submissions, committee reviews, and defense scheduling.",
      descAr: "نظام جامعي متكامل لإدارة مقترحات التخرج، وتنسيق لجان التحكيم وتقييم النماذج آلياً بأدوار مستخدمين متعددة.",
      stack: ["PHP 8", "MySQL 8", "RBAC Engine"],
      resultBadge: "94/100 Eval",
      metricEn: "3 User Roles",
      metricAr: "٣ أدوار معتمدة",
    },
  ];

  return (
    <div className="w-full rounded-[22px] border border-white/[0.08] dark:border-white/[0.08] border-zinc-300 bg-[#070A0F] dark:bg-[#070A0F] bg-white backdrop-blur-xl p-5 sm:p-6 lg:p-7 flex flex-col justify-between space-y-7 shadow-2xl transition-colors duration-200">
      {/* ─────────────────────────────────────────────────────────────
          1. CASE STUDIES & WORKSTATION DEMOS SECTION
      ───────────────────────────────────────────────────────────── */}
      <section className="space-y-3.5">
        <div className="flex items-center justify-between pb-3 border-b border-white/[0.07] dark:border-white/[0.07] border-zinc-200">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-white/90 dark:text-white/90 text-zinc-800 tracking-wider">
              {"// CASE STUDIES & LIVE WORKSTATION DEMOS"}
            </span>
            <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-[#00FF9D]/10 text-[#00FF9D] border border-[#00FF9D]/30 hidden sm:inline-flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] animate-ping" />
              <span>{isRtl ? "محاكاة حاسوبية مباشرة" : "5 LIVE INSTANCES"}</span>
            </span>
          </div>

          <Link
            href={`/${locale}/projects`}
            className="font-mono text-[10px] text-white/50 dark:text-white/50 text-zinc-500 hover:text-[#00FF9D] transition-colors flex items-center gap-1"
          >
            <span>{isRtl ? "عرض كافة المشاريع" : "VIEW_ALL"}</span>
            <span className="text-[9px]">[ ]</span>
          </Link>
        </div>

        {/* 5 Flagship Project Rows with Direct Live Workstation Demo Launchers */}
        <div className="space-y-3">
          {flagshipProjects.map((p) => (
            <div
              key={p.slug}
              className="group flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-3.5 rounded-xl border border-white/[0.08] dark:border-white/[0.08] border-zinc-200/80 bg-[#0A0E16]/80 dark:bg-[#0A0E16]/80 bg-zinc-50/90 hover:border-[#00FF9D]/60 transition-all duration-300"
            >
              {/* Number & Mini Live Window Thumbnail */}
              <div className="flex items-center gap-3 shrink-0">
                <span className="font-mono text-xs font-bold text-[#00FF9D]">{p.num}</span>
                <div className="w-24 sm:w-28 h-16 rounded overflow-hidden shrink-0">
                  <ProjectPreviewMockup projectSlug={p.slug} />
                </div>
              </div>

              {/* Case Study Details (Center) */}
              <div className="flex-1 min-w-0 space-y-1">
                <Link
                  href={`/${locale}/projects/${p.slug}`}
                  className="block font-serif text-sm font-semibold text-white dark:text-white text-zinc-900 hover:text-[#00FF9D] transition-colors"
                >
                  {isRtl ? p.titleAr : p.titleEn}
                </Link>
                <p className="text-white/60 dark:text-white/60 text-zinc-600 text-[11px] leading-relaxed line-clamp-2">
                  {isRtl ? p.descAr : p.descEn}
                </p>
                <div className="flex flex-wrap items-center gap-1.5 pt-1 font-mono text-[9px] text-white/50 dark:text-white/50 text-zinc-500">
                  {p.stack.map((t) => (
                    <span key={t} className="px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Side: Direct Workstation Demo CTA + Case Study Link */}
              <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-t-0 pt-2 sm:pt-0 border-white/[0.04] shrink-0 font-mono text-end space-y-1.5">
                <div className="text-[10px] text-[#00FF9D] font-bold flex items-center gap-1">
                  <span>{isRtl ? p.metricAr : p.metricEn}</span>
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#00FF9D]/10 border border-[#00FF9D]/20">
                    {p.resultBadge}
                  </span>
                </div>

                <div className="flex items-center gap-2 pt-0.5">
                  <Link
                    href={`/${locale}/projects/${p.slug}`}
                    className="text-[10px] text-white/50 hover:text-white px-2 py-1 rounded bg-white/[0.03] border border-white/[0.06] transition-colors"
                  >
                    {isRtl ? "دراسة الحالة" : "Case Study"}
                  </Link>
                  <Link
                    href={`/${locale}/projects/${p.slug}/demo`}
                    className="text-[10px] text-[#00FF9D] font-bold hover:bg-[#00FF9D] hover:text-[#070A0F] px-2.5 py-1 rounded bg-[#00FF9D]/10 border border-[#00FF9D]/40 transition-all duration-200 flex items-center gap-1 shadow-[0_0_10px_rgba(0,255,157,0.1)] active:scale-95"
                  >
                    <span>⚡</span>
                    <span>{isRtl ? "تشغيل الديمو" : "Live Demo"}</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. THREE-PART INFO PANEL (SKILLS, SERVICES, TOOLS)
      ───────────────────────────────────────────────────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-1">
        {/* Column 1: Technical Skills */}
        <div className="rounded-xl border border-white/[0.07] dark:border-white/[0.07] border-zinc-200/80 bg-[#0A0E16]/80 dark:bg-[#0A0E16]/80 bg-zinc-50/90 p-3.5 space-y-3 font-mono">
          <div className="flex items-center justify-between text-white/90 dark:text-white/90 text-zinc-800 text-xs font-bold border-b border-white/[0.06] pb-2">
            <span>&lt;/&gt; TECHNICAL SKILLS</span>
          </div>
          <div className="space-y-2 text-[11px]">
            {[
              { name: "Frontend Architecture", pct: "95%" },
              { name: "Backend Systems", pct: "92%" },
              { name: "Database Engineering", pct: "90%" },
              { name: "DevOps & Cloud Runtime", pct: "85%" },
              { name: "AI & Algorithmic Heuristics", pct: "80%" },
              { name: "Desktop Software Interop", pct: "88%" },
            ].map((skill) => (
              <div key={skill.name} className="space-y-1">
                <div className="flex justify-between text-white/70 dark:text-white/70 text-zinc-600 text-[10px]">
                  <span>{skill.name}</span>
                  <span className="text-[#00FF9D] font-bold">{skill.pct}</span>
                </div>
                <div className="h-0.5 w-full bg-white/[0.06] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#00FF9D] rounded-full"
                    style={{ width: skill.pct }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Services / Capabilities */}
        <div className="rounded-xl border border-white/[0.07] dark:border-white/[0.07] border-zinc-200/80 bg-[#0A0E16]/80 dark:bg-[#0A0E16]/80 bg-zinc-50/90 p-3.5 space-y-3 font-mono">
          <div className="flex items-center gap-1.5 text-white/90 dark:text-white/90 text-zinc-800 text-xs font-bold border-b border-white/[0.06] pb-2">
            <span className="text-[#00FF9D]">⬡</span>
            <span>SERVICES</span>
          </div>
          <div className="space-y-2 text-[11px]">
            {[
              { title: "Enterprise Web Applications", desc: "Next.js 15, React, TypeScript" },
              { title: "AI Systems & Microservices", desc: "LLM, Vector DBs, Heuristics" },
              { title: "Desktop Software & Tools", desc: "C# .NET, WinForms, Python" },
              { title: "Database & Cloud Architecture", desc: "Oracle 10g, Postgres, Supabase" },
            ].map((srv) => (
              <div
                key={srv.title}
                className="group flex items-center justify-between p-1 rounded hover:bg-white/[0.04] transition-colors"
              >
                <div>
                  <div className="text-white/90 dark:text-white/90 text-zinc-800 text-[11px] font-semibold">
                    {srv.title}
                  </div>
                  <div className="text-white/40 dark:text-white/40 text-zinc-400 text-[9px]">
                    {srv.desc}
                  </div>
                </div>
                <span className="text-white/30 group-hover:text-[#00FF9D] transition-colors text-xs">
                  ↗
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Column 3: Tools I Use */}
        <div className="rounded-xl border border-white/[0.07] dark:border-white/[0.07] border-zinc-200/80 bg-[#0A0E16]/80 dark:bg-[#0A0E16]/80 bg-zinc-50/90 p-3.5 space-y-3 font-mono">
          <div className="flex items-center gap-1.5 text-white/90 dark:text-white/90 text-zinc-800 text-xs font-bold border-b border-white/[0.06] pb-2">
            <span className="text-[#00FF9D]">⌘</span>
            <span>TOOLS I USE</span>
          </div>
          <div className="flex flex-wrap gap-1.5 text-[10px]">
            {[
              "VS Code",
              "Git & GitHub",
              "Docker",
              "Vercel",
              "Oracle 10g",
              "PostgreSQL",
              "Supabase",
              "Figma",
              "Postman",
              "PyQt6",
            ].map((tool) => (
              <div
                key={tool}
                className="px-2 py-1 rounded border border-white/[0.06] dark:border-white/[0.06] border-zinc-200/60 bg-white/[0.02] text-white/80 dark:text-white/80 text-zinc-700 flex items-center gap-1.5 text-[9.5px] hover:border-[#00FF9D]/40 transition-colors"
              >
                <span className="text-[#00FF9D] text-[8px]">•</span>
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
        className="rounded-xl border border-white/[0.07] dark:border-white/[0.07] border-zinc-200/80 bg-[#0A0E16]/90 dark:bg-[#0A0E16]/90 bg-zinc-50/90 p-5 grid grid-cols-1 md:grid-cols-12 gap-5 items-center"
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
                <span className="text-[#00FF9D] font-medium">ما يُحدث أثراً._</span>
              </>
            ) : (
              <>
                Ready to build <br />
                what <span className="text-[#00FF9D] font-medium">matters._</span>
              </>
            )}
          </h2>

          <div className="pt-2 flex items-center justify-center md:justify-start">
            <WireframeGlobe className="w-32 h-32 sm:w-36 sm:h-36" accentColor="#00FF9D" />
          </div>
        </div>

        {/* Right Side: Message Action & CTA */}
        <div className="md:col-span-5 space-y-3 font-mono text-[11px] border-t md:border-t-0 md:border-s border-white/[0.07] dark:border-white/[0.07] border-zinc-200 pt-4 md:pt-0 md:ps-5">
          <div className="text-white/40 dark:text-white/40 text-zinc-500 text-[10px]">
            &gt; SEND_MESSAGE
          </div>
          <p className="text-white/70 dark:text-white/70 text-zinc-600 text-xs leading-relaxed font-sans">
            {isRtl
              ? "متاح حالياً للمشاريع الحرة والفرص التقنية والتعاون البرمجي."
              : "I'm currently available for freelance projects and collaborations."}
          </p>

          <button
            type="button"
            onClick={() => setContactModalOpen(true)}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded border border-[#00FF9D] bg-[#00FF9D]/10 text-[#00FF9D] text-xs font-mono font-bold hover:bg-[#00FF9D]/20 transition-all duration-200 group cursor-pointer"
          >
            <span>{isRtl ? "بدء محادثة" : "START A CONVERSATION"}</span>
            <span className="text-xs group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform">
              ↗
            </span>
          </button>

          <div className="pt-1 text-[10px] text-white/50 dark:text-white/50 text-zinc-500">
            <a
              href="mailto:abdulghani.alshibami@gmail.com"
              className="text-[#00FF9D]/80 hover:text-[#00FF9D] hover:underline font-mono text-[11px]"
            >
              abdulghani.alshibami@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. RIGHT COLUMN FOOTER (MONOGRAM + THANKS FOR VISITING)
      ───────────────────────────────────────────────────────────── */}
      <footer className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-white/[0.06] dark:border-white/[0.06] border-zinc-200 font-mono text-[10px]">
        <div className="flex items-center gap-2 text-white/50 dark:text-white/50 text-zinc-500">
          <span className="font-mono text-base font-black text-[#00FF9D] select-none">AS</span>
          <span>{"// THANKS FOR VISITING"}</span>
        </div>

        {/* Social Icons / Anchors */}
        <div className="flex items-center gap-4 text-white/60 dark:text-white/60 text-zinc-500">
          <a
            href="https://github.com/Abdulghani780"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00FF9D] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00FF9D] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:abdulghani.alshibami@gmail.com"
            className="hover:text-[#00FF9D] transition-colors"
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
        >
          <div className="relative w-full max-w-xl rounded-2xl border border-[#00FF9D]/40 bg-[#070A0F] p-6 sm:p-8 shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <div>
                <div className="font-mono text-[10px] text-[#00FF9D] tracking-widest uppercase">
                  &gt; SECURE_TRANSMISSION
                </div>
                <h3 className="font-serif text-xl font-bold text-white">
                  {isRtl ? "بدء محادثة هندسية" : "Start a Conversation"}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setContactModalOpen(false)}
                className="w-8 h-8 rounded-lg border border-white/10 text-white/60 hover:text-[#00FF9D] hover:border-[#00FF9D]/50 flex items-center justify-center font-mono text-sm cursor-pointer"
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
