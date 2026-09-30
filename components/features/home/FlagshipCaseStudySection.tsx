"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Locale } from "@/lib/i18n/dictionaries";
import { Server, Network, ShieldCheck, Activity, Terminal, ArrowRight } from "lucide-react";

export function FlagshipCaseStudySection({ locale }: { locale: Locale }) {
  const isRtl = locale === "ar";

  const keyFeatures = [
    {
      title: isRtl ? "مخطط الطوبولوجيا الحية" : "Live Topology Mapping",
      desc: isRtl ? "رسم مرئي لعقد الشبكة والمحولات والمخدمات داخل مباني الحرم الجامعي." : "Visual rendering of campus network nodes, switches, and server racks across facilities.",
      icon: <Network className="w-4 h-4 text-cyan-400" />,
    },
    {
      title: isRtl ? "دورة حياة بلاغات ITIL" : "ITIL Incident Triage",
      desc: isRtl ? "فرز وتتبع أعطال البنية التحتية وتعيين أولويات الصيانة وحساب زمن الاستجابة." : "End-to-end incident lifecycle management with severity grading and resolution tracking.",
      icon: <Activity className="w-4 h-4 text-emerald-400" />,
    },
    {
      title: isRtl ? "صلاحيات RBAC الصارمة" : "Enterprise RBAC Guards",
      desc: isRtl ? "أربعة مستويات صلاحية (مدير نظام، مهندس شبكات، فني دعم، مستعرض)." : "Four-tier role-based access control protecting infrastructure operations from unauthorized edits.",
      icon: <ShieldCheck className="w-4 h-4 text-indigo-400" />,
    },
    {
      title: isRtl ? "قاعدة بيانات Oracle الموثوقة" : "Oracle Persistence Engine",
      desc: isRtl ? "جداول علائقية مطبعة مع استعلامات معقدة تدعم العمل المكتبي دون الحاجة للإنترنت." : "Normalized relational schemas with strict constraints and enterprise stored procedures.",
      icon: <Server className="w-4 h-4 text-amber-400" />,
    },
  ];

  return (
    <section
      id="case-study"
      className="relative w-full bg-[#F8FAFC] dark:bg-[#0B0B0C] text-zinc-900 dark:text-white py-20 lg:py-28 border-b border-black/10 dark:border-white/5 transition-colors overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Title and "FULL CASE STUDY →" Link */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4 border-b border-black/10 dark:border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-300 font-mono text-xs uppercase tracking-wider">
                FEATURED ARCHITECTURE
              </span>
              <h2 className="font-sans font-black text-2xl sm:text-3xl uppercase tracking-tight text-zinc-900 dark:text-white">
                {isRtl ? "دراسة حالة المشروع الرئيسي — متتبع البنية التحتية" : "FLAGSHIP CASE STUDY — CAMPUS IT TRACKER"}
              </h2>
            </div>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 font-sans">
              {isRtl
                ? "نظام متكامل لتتبع وإدارة شبكات الحرم الجامعي وتذاكر الدعم الفني المبني بـ C# وقواعد بيانات Oracle."
                : "Full-scale enterprise campus topology, ITIL incident lifecycle, and Oracle relational database architecture."}
            </p>
          </div>

          <Link
            href={`/${locale}/projects/campus-it-tracker`}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 text-xs font-bold tracking-wider uppercase transition-colors"
          >
            <span>{isRtl ? "دراسة الحالة الكاملة" : "FULL CASE STUDY"}</span>
            <span className="rtl:rotate-180">→</span>
          </Link>
        </div>

        {/* 5-Stage Numbered Lifecycle: 1. Problem, 2. Solution, 3. Architecture, 4. Implementation, 5. Outcome */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {/* 1. Problem */}
          <div className="p-5 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#121214] flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full border border-cyan-500/50 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-mono text-xs font-bold">
                  1
                </span>
                <span className="font-sans font-bold text-xs uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                  {isRtl ? "المشكلة" : "PROBLEM"}
                </span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                {isRtl
                  ? "غياب التوثيق الرقمي الموحد للبنية التحتية في الحرم الجامعي وتكرار تعطل الشبكة وصعوبة تحديد موقع الأجهزة."
                  : "Fragmented university hardware inventory, opaque topology, and uncoordinated incident triage causing downtime."}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/5 font-mono text-[10px] text-zinc-500">
              STAGE_01 // DISCOVERY
            </div>
          </div>

          {/* 2. Solution */}
          <div className="p-5 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#121214] flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full border border-cyan-500/50 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-mono text-xs font-bold">
                  2
                </span>
                <span className="font-sans font-bold text-xs uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                  {isRtl ? "الحل" : "SOLUTION"}
                </span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                {isRtl
                  ? "تطبيق مكتبي متين لإدارة العقد الشبكية وتحديد المواقع بدقة وتوثيق تذاكر الأعطال وفق معايير ITIL."
                  : "Integrated enterprise desktop suite providing topological mapping, equipment locating, and ticket triage."}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/5 font-mono text-[10px] text-zinc-500">
              STAGE_02 // SYSTEM_DESIGN
            </div>
          </div>

          {/* 3. Architecture */}
          <div className="p-5 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#121214] flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full border border-cyan-500/50 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-mono text-xs font-bold">
                  3
                </span>
                <span className="font-sans font-bold text-xs uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                  {isRtl ? "المعمارية" : "ARCHITECTURE"}
                </span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                {isRtl
                  ? "معمارية ثلاثية الطبقات (3-Tier) تفصل الواجهات الرسومية عن منطق الأعمال مع مخزن بيانات Oracle علائقي."
                  : "Three-tier architecture isolating GDI+ presentation from business logic and transactional Oracle DAL."}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/5 font-mono text-[10px] text-zinc-500">
              STAGE_03 // LAYERED_STACK
            </div>
          </div>

          {/* 4. Implementation */}
          <div className="p-5 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#121214] flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full border border-cyan-500/50 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-mono text-xs font-bold">
                  4
                </span>
                <span className="font-sans font-bold text-xs uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                  {isRtl ? "التنفيذ" : "IMPLEMENTATION"}
                </span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                {isRtl
                  ? "تطوير بلغة C# مع نماذج WinForms مخصصة، وإجراءات مخزنة، وتحكم في الجلسات بصلاحيات RBAC."
                  : "Engineered in C# .NET with parameterized SQL, stored procedures, connection pooling, and strict audit logs."}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/5 font-mono text-[10px] text-zinc-500">
              STAGE_04 // C#_&_ORACLE
            </div>
          </div>

          {/* 5. Outcome */}
          <div className="p-5 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#121214] flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full border border-emerald-500/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-mono text-xs font-bold">
                  5
                </span>
                <span className="font-sans font-bold text-xs uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                  {isRtl ? "النتيجة" : "OUTCOME"}
                </span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                {isRtl
                  ? "استقرار مكتبي 100% بدون انترنت، خفض زمن تشخيص الأعطال بنسبة 70%، وتوثيق شامل للأصول."
                  : "Zero-dependency offline operation, 70% faster incident triage, and standardized campus asset records."}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/5 font-mono text-[10px] text-zinc-500">
              STAGE_05 // VERIFIED
            </div>
          </div>
        </div>

        {/* Two-Column Deep Dive: Technical Blueprint vs Visual Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Column 1: Core System Capabilities (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-sans font-bold text-lg text-zinc-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
              <Terminal className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              <span>{isRtl ? "المحاور الهندسية للنظام" : "CORE ARCHITECTURAL PILLARS"}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {keyFeatures.map((f, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#121214] hover:border-cyan-500/40 transition-colors shadow-sm"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    {f.icon}
                    <h4 className="font-sans font-bold text-sm text-zinc-900 dark:text-white">{f.title}</h4>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>

            {/* Architecture Metrics Strip */}
            <div className="p-4 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#121214] flex flex-wrap items-center justify-between gap-4 font-mono text-xs shadow-sm">
              <div>
                <span className="text-zinc-500 block text-[10px] uppercase">RUNTIME ENGINE</span>
                <span className="font-bold text-zinc-900 dark:text-white">.NET 8 / WinForms</span>
              </div>
              <div className="h-6 w-px bg-black/10 dark:bg-white/10 hidden sm:block" />
              <div>
                <span className="text-zinc-500 block text-[10px] uppercase">DATA PERSISTENCE</span>
                <span className="font-bold text-zinc-900 dark:text-white">Oracle Relational DB</span>
              </div>
              <div className="h-6 w-px bg-black/10 dark:bg-white/10 hidden sm:block" />
              <div>
                <span className="text-zinc-500 block text-[10px] uppercase">SECURITY ARCHITECTURE</span>
                <span className="font-bold text-cyan-600 dark:text-cyan-400">4-Tier RBAC Guard</span>
              </div>
              <div className="h-6 w-px bg-black/10 dark:bg-white/10 hidden sm:block" />
              <div>
                <span className="text-zinc-500 block text-[10px] uppercase">NETWORK OPERATIONS</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">ITIL Incident Flow</span>
              </div>
            </div>
          </div>

          {/* Column 2: Visual Graphic & Sandbox Launch (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/15 bg-zinc-900 group shadow-2xl">
              <Image
                src="/images/projects/campus-card.png"
                alt="Campus IT Infrastructure Tracker Interface"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 450px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 start-4 end-4 flex items-center justify-between font-mono text-xs text-white">
                <span className="px-2 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10">
                  TOPOLOGY CANVAS // GDI+
                </span>
                <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  ORACLE CONNECTED
                </span>
              </div>
            </div>

            {/* Launch Simulator CTA Banner */}
            <Link
              href={`/${locale}/projects/campus-it-tracker/demo`}
              className="w-full flex items-center justify-between p-4 rounded-xl border border-cyan-500/40 bg-gradient-to-r from-cyan-950/40 to-indigo-950/40 hover:from-cyan-900/50 hover:to-indigo-900/50 text-white font-sans font-bold text-sm transition-all group"
            >
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 motion-safe:animate-ping" />
                <span>{isRtl ? "تشغيل محاكي النظام التفاعلي" : "LAUNCH WORKSTATION SIMULATOR"}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-cyan-400 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
