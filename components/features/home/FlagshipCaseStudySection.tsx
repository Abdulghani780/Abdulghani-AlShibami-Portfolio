"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Locale } from "@/lib/i18n/dictionaries";
import { MapPin, CheckSquare, ShieldCheck, Database, Users, Monitor, Cpu, Server, Layers, ArrowRight } from "lucide-react";

export function FlagshipCaseStudySection({ locale }: { locale: Locale }) {
  const isRtl = locale === "ar";

  const keyFeatures = [
    {
      title: isRtl ? "الخريطة التفاعلية للحرم الجامعي" : "Interactive Campus Map",
      icon: <MapPin className="w-4 h-4 text-[#E2C366]" />,
    },
    {
      title: isRtl ? "لوحة كانبان لفرز البلاغات (ITIL)" : "ITIL Service Desk Kanban",
      icon: <CheckSquare className="w-4 h-4 text-[#E2C366]" />,
    },
    {
      title: isRtl ? "إدارة ومناقلة العهد الرقمية" : "Asset Custody Transfer",
      icon: <ShieldCheck className="w-4 h-4 text-[#E2C366]" />,
    },
    {
      title: isRtl ? "قاعدة بيانات أوراكل العلائقية" : "Oracle Relational DB",
      icon: <Database className="w-4 h-4 text-[#E2C366]" />,
    },
  ];

  const systemFlow = [
    { label: isRtl ? "المشرف / الفني" : "Technician", icon: <Users className="w-4 h-4" /> },
    { label: isRtl ? "واجهة WinForms" : "WinForms UI", icon: <Monitor className="w-4 h-4" /> },
    { label: isRtl ? "طبقة الخدمات" : "Domain Services", icon: <Cpu className="w-4 h-4" /> },
    { label: isRtl ? "قاعدة أوراكل" : "Oracle 10g", icon: <Server className="w-4 h-4" /> },
  ];

  return (
    <section
      id="case-study"
      className="relative w-full bg-[#0B0B0D] dark:bg-[#0B0B0D] text-white py-20 lg:py-28 border-b border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 rounded-full bg-[#C59B27]/15 border border-[#C59B27]/30 text-[#E2C366] font-mono text-xs uppercase tracking-wider">
                FEATURED ENTERPRISE CASE STUDY
              </span>
            </div>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl uppercase tracking-tight text-white mt-2">
              {isRtl ? "دراسة حالة المشروع — نظام تتبع البنية التحتية" : "PROJECT CASE STUDY — CAMPUS IT TRACKER"}
            </h2>
            <p className="mt-1 text-sm text-zinc-400 font-sans">
              {isRtl
                ? "إدارة وتتبع أصول البنية التحتية لتقنية المعلومات الجامعية، ورسم خرائط المختبرات تفاعلياً، وتوثيق العهد."
                : "Enterprise IT asset tracking, lab floorplan mapping, and Oracle database custody logging."}
            </p>
          </div>

          <Link
            href={`/${locale}/projects/campus-it-tracker`}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#C59B27]/40 bg-[#C59B27]/10 hover:bg-[#C59B27]/20 text-[#E2C366] text-xs font-bold tracking-wider uppercase transition-colors"
          >
            <span>{isRtl ? "دراسة الحالة الكاملة" : "FULL CASE STUDY"}</span>
            <span className="rtl:rotate-180">→</span>
          </Link>
        </div>

        {/* 5-Stage Numbered Lifecycle */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mb-16">
          {/* 1. Problem */}
          <div className="p-5 rounded-2xl border border-white/10 bg-[#141418] flex flex-col justify-between shadow-sm hover:border-[#C59B27]/30 transition-colors">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-7 h-7 rounded-full border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center font-mono text-xs font-bold shrink-0">
                  1
                </span>
                <span className="font-sans font-bold text-xs uppercase tracking-wider text-white">
                  {isRtl ? "المشكلة" : "PROBLEM"}
                </span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                {isRtl
                  ? "تواجه المجمعات الجامعية التي تضم عشرات مختبرات الحاسوب صعوبة في متابعة نقل الأجهزة وتتبع العهد وفقدان المعدات وتأخر الاستجابة لبلاغات الأعطال."
                  : "University campuses operating dozens of computer labs face equipment misplacement, untracked hardware reassignments, and delayed incident resolution."}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 font-mono text-[10px] text-zinc-500">
              STAGE_01 // DISCOVERY
            </div>
          </div>

          {/* 2. Solution */}
          <div className="p-5 rounded-2xl border border-white/10 bg-[#141418] flex flex-col justify-between shadow-sm hover:border-[#C59B27]/30 transition-colors">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-7 h-7 rounded-full border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center font-mono text-xs font-bold shrink-0">
                  2
                </span>
                <span className="font-sans font-bold text-xs uppercase tracking-wider text-white">
                  {isRtl ? "الحل" : "SOLUTION"}
                </span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                {isRtl
                  ? "تطوير تطبيق مكتبي مؤسسي لنظام ويندوز بـ C# .NET وقواعد بيانات Oracle 10g مع تمثيل بصري تفاعلي لخرائط المختبرات ولوحة كانبان لفرز بلاغات الدعم."
                  : "Engineered a robust Windows Forms enterprise desktop app in C# .NET with Oracle 10g connectivity, interactive floorplans, and ITIL service desk."}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 font-mono text-[10px] text-zinc-500">
              STAGE_02 // SYSTEM_DESIGN
            </div>
          </div>

          {/* 3. Architecture */}
          <div className="p-5 rounded-2xl border border-white/10 bg-[#141418] flex flex-col justify-between shadow-sm hover:border-[#C59B27]/30 transition-colors">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-7 h-7 rounded-full border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center font-mono text-xs font-bold shrink-0">
                  3
                </span>
                <span className="font-sans font-bold text-xs uppercase tracking-wider text-white">
                  {isRtl ? "المعمارية" : "ARCHITECTURE"}
                </span>
              </div>
              
              {/* Architecture Mini Flow Graphic */}
              <div className="p-2.5 rounded-lg border border-white/10 bg-black/40 my-2 text-[10px] font-mono space-y-1.5 text-zinc-300">
                <div className="flex items-center justify-between px-2 py-1 rounded bg-white/5 border border-white/5">
                  <span className="text-[#E2C366]">WinForms UI</span>
                  <span className="text-zinc-500">Canvas</span>
                </div>
                <div className="text-center text-[#D4AF37] leading-none">↓</div>
                <div className="flex items-center justify-between px-2 py-1 rounded bg-white/5 border border-white/5">
                  <span className="text-[#E2C366]">Domain Services</span>
                  <span className="text-zinc-500">ITIL / Custody</span>
                </div>
                <div className="text-center text-[#D4AF37] leading-none">↓</div>
                <div className="flex items-center justify-between px-2 py-1 rounded bg-white/5 border border-white/5">
                  <span className="text-[#E2C366]">Oracle 10g DB</span>
                  <span className="text-zinc-500">PL/SQL</span>
                </div>
              </div>
            </div>
            <div className="mt-2 pt-2 border-t border-white/5 font-mono text-[10px] text-zinc-500">
              STAGE_03 // PIPELINE
            </div>
          </div>

          {/* 4. Implementation */}
          <div className="p-5 rounded-2xl border border-white/10 bg-[#141418] flex flex-col justify-between shadow-sm hover:border-[#C59B27]/30 transition-colors">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-7 h-7 rounded-full border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center font-mono text-xs font-bold shrink-0">
                  4
                </span>
                <span className="font-sans font-bold text-xs uppercase tracking-wider text-white">
                  {isRtl ? "التنفيذ التقني" : "IMPLEMENTATION"}
                </span>
              </div>
              <ul className="text-xs text-zinc-400 space-y-1.5 font-mono">
                <li>• C# .NET 4.8 Framework</li>
                <li>• Windows Forms UI Canvas</li>
                <li>• Oracle 10g DB & PL/SQL</li>
                <li>• ITIL Service Desk Kanban</li>
                <li>• Role-Based Access (RBAC)</li>
                <li>• Offline Cache Repository</li>
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 font-mono text-[10px] text-zinc-500">
              STAGE_04 // DEPLOYMENT
            </div>
          </div>

          {/* 5. Outcome */}
          <div className="p-5 rounded-2xl border border-white/10 bg-[#141418] flex flex-col justify-between shadow-sm hover:border-[#C59B27]/30 transition-colors">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-7 h-7 rounded-full border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center font-mono text-xs font-bold shrink-0">
                  5
                </span>
                <span className="font-sans font-bold text-xs uppercase tracking-wider text-white">
                  {isRtl ? "المخرجات والأثر" : "OUTCOME"}
                </span>
              </div>
              <ul className="text-xs text-zinc-300 space-y-2 font-sans">
                <li className="flex items-center gap-1.5 text-emerald-400">
                  <span>✔</span>
                  <span>{isRtl ? "تتبع شامل لدورة حياة الأصول" : "Complete asset lifecycle"}</span>
                </li>
                <li className="flex items-center gap-1.5 text-emerald-400">
                  <span>✔</span>
                  <span>{isRtl ? "استقرار تشغيلي بنمط مزدوج" : "Zero crash offline resilience"}</span>
                </li>
                <li className="flex items-center gap-1.5 text-emerald-400">
                  <span>✔</span>
                  <span>{isRtl ? "تدقيق بصري للأجهزة بالمختبرات" : "Visual hardware auditing"}</span>
                </li>
                <li className="flex items-center gap-1.5 text-emerald-400">
                  <span>✔</span>
                  <span>{isRtl ? "تقارير تدقيق ومناقلة فورية" : "Instant audit & custody logs"}</span>
                </li>
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 font-mono text-[10px] text-zinc-500">
              STAGE_05 // RESULTS
            </div>
          </div>
        </div>

        {/* Bottom Row: Desktop Station Mockup + Key Features + System Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Desktop Station Mockup */}
          <div className="lg:col-span-6 relative flex justify-center">
            <Link
              href={`/${locale}/projects/campus-it-tracker/demo`}
              className="relative w-full max-w-[560px] aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-black/40 shadow-2xl p-2 group hover:border-[#D4AF37]/50 transition-all block"
            >
              <Image
                src="/images/projects/campus-it-tracker/01-dashboard-modern.jpg"
                alt="Campus IT Tracker Desktop Station Interface"
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 560px"
                quality={90}
              />
              {/* Simulator Preview Banner */}
              <div className="absolute bottom-3 start-4 end-4 bg-black/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/15 text-[11px] font-mono text-zinc-200 flex items-center justify-between group-hover:border-[#D4AF37]/50 transition-colors">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-bold tracking-wider">CAMPUS_TRACKER_SIMULATOR // READY</span>
                </span>
                <span className="text-[#E2C366] font-bold text-xs flex items-center gap-1">
                  <span>{isRtl ? "تشغيل المحاكي" : "TAP DEMO"}</span>
                  <span className="rtl:rotate-180">→</span>
                </span>
              </div>
            </Link>
          </div>

          {/* Right: Key Features & System Flow */}
          <div className="lg:col-span-6 space-y-6">
            {/* Key Features */}
            <div className="p-5 rounded-2xl border border-white/10 bg-[#141418]">
              <span className="font-mono text-xs font-bold text-[#E2C366] uppercase tracking-widest block mb-4">
                {isRtl ? "الميزات الرئيسية" : "KEY FEATURES"}
              </span>
              <div className="grid grid-cols-2 gap-3">
                {keyFeatures.map((f, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/5 hover:border-[#C59B27]/30 transition-colors">
                    {f.icon}
                    <span className="text-xs font-medium text-zinc-200">{f.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* System Flow */}
            <div className="p-5 rounded-2xl border border-white/10 bg-[#141418]">
              <span className="font-mono text-xs font-bold text-[#E2C366] uppercase tracking-widest block mb-4">
                {isRtl ? "تدفق النظام" : "SYSTEM FLOW"}
              </span>
              <div className="flex items-center justify-between gap-2 overflow-x-auto py-2">
                {systemFlow.map((item, idx) => (
                  <React.Fragment key={idx}>
                    <div className="flex flex-col items-center text-center p-2.5 rounded-xl bg-white/5 border border-white/5 min-w-[75px]">
                      <div className="w-8 h-8 rounded-full border border-[#C59B27]/40 bg-[#C59B27]/10 flex items-center justify-center text-[#E2C366] mb-1.5">
                        {item.icon}
                      </div>
                      <span className="text-[10px] font-mono text-zinc-300 whitespace-nowrap">{item.label}</span>
                    </div>
                    {idx < systemFlow.length - 1 && (
                      <span className="text-zinc-600 font-bold rtl:rotate-180">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
