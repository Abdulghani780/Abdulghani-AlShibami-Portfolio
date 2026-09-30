"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Locale } from "@/lib/i18n/dictionaries";
import { Volume2, Eye, MessageSquare, Accessibility, ArrowRight, User, Smartphone, Cpu, Database } from "lucide-react";

export function FlagshipCaseStudySection({ locale }: { locale: Locale }) {
  const isRtl = locale === "ar";

  const keyFeatures = [
    {
      title: isRtl ? "التوجيه الصوتي الذكي" : "Voice Assistance",
      icon: <Volume2 className="w-4 h-4 text-purple-400" />,
    },
    {
      title: isRtl ? "التعرف البصري على الأشياء" : "Image Recognition",
      icon: <Eye className="w-4 h-4 text-purple-400" />,
    },
    {
      title: isRtl ? "تحويل النصوص إلى كلام" : "Text to Speech",
      icon: <MessageSquare className="w-4 h-4 text-purple-400" />,
    },
    {
      title: isRtl ? "واجهات مستخدم ميسرة" : "Accessible UI",
      icon: <Accessibility className="w-4 h-4 text-purple-400" />,
    },
  ];

  const systemFlow = [
    { label: isRtl ? "المستخدم" : "User", icon: <User className="w-4 h-4" /> },
    { label: isRtl ? "تطبيق الهاتف" : "Mobile App", icon: <Smartphone className="w-4 h-4" /> },
    { label: isRtl ? "نماذج الذكاء" : "AI Models", icon: <Cpu className="w-4 h-4" /> },
    { label: isRtl ? "قاعدة فايربيس" : "Firebase", icon: <Database className="w-4 h-4" /> },
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
              <span className="px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono text-xs uppercase tracking-wider">
                FEATURED AI CASE STUDY
              </span>
            </div>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl uppercase tracking-tight text-white mt-2">
              {isRtl ? "دراسة حالة المشروع — يُسرى" : "PROJECT CASE STUDY — YUSRA"}
            </h2>
            <p className="mt-1 text-sm text-zinc-400 font-sans">
              {isRtl
                ? "تقنية ذكاء اصطناعي مساندة لتمكين الأفراد وتحقيق حياة أكثر استقلالية."
                : "Assistive AI technology for a more independent life."}
            </p>
          </div>

          <Link
            href={`/${locale}/projects/yusra`}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-purple-500/40 bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 text-xs font-bold tracking-wider uppercase transition-colors"
          >
            <span>{isRtl ? "دراسة الحالة الكاملة" : "FULL CASE STUDY"}</span>
            <span className="rtl:rotate-180">→</span>
          </Link>
        </div>

        {/* 5-Stage Numbered Lifecycle */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mb-16">
          {/* 1. Problem */}
          <div className="p-5 rounded-2xl border border-white/10 bg-[#141418] flex flex-col justify-between shadow-sm">
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
                  ? "يواجه الأشخاص ذوو القيود البصرية أو الجسدية تحديات يومية في الوصول للمعلومات واستخدام الخدمات الرقمية."
                  : "People with visual or physical limitations face daily challenges accessing information and using mobile services."}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 font-mono text-[10px] text-zinc-500">
              STAGE_01 // DISCOVERY
            </div>
          </div>

          {/* 2. Solution */}
          <div className="p-5 rounded-2xl border border-white/10 bg-[#141418] flex flex-col justify-between shadow-sm">
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
                  ? "تطبيق هاتف مدعوم بالذكاء الاصطناعي مع توجيه صوتي ورؤية حاسوبية وميزات مساندة لتمكين استقلالية المستخدمين."
                  : "AI-powered mobile application with voice, vision and assistive features to provide accessible, independent technology."}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 font-mono text-[10px] text-zinc-500">
              STAGE_02 // SYSTEM_DESIGN
            </div>
          </div>

          {/* 3. Architecture */}
          <div className="p-5 rounded-2xl border border-white/10 bg-[#141418] flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-7 h-7 rounded-full border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center font-mono text-xs font-bold shrink-0">
                  3
                </span>
                <span className="font-sans font-bold text-xs uppercase tracking-wider text-white">
                  {isRtl ? "المعمارية" : "ARCHITECTURE"}
                </span>
              </div>
              
              {/* Architecture Mini Diagram Graphic */}
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden my-2 border border-white/10 bg-black/40">
                <Image
                  src="/images/projects/yusra-arch.png"
                  alt="Yusra Architecture Flow"
                  fill
                  className="object-contain p-1"
                />
              </div>
            </div>
            <div className="mt-2 pt-2 border-t border-white/5 font-mono text-[10px] text-zinc-500">
              STAGE_03 // PIPELINE
            </div>
          </div>

          {/* 4. Implementation */}
          <div className="p-5 rounded-2xl border border-white/10 bg-[#141418] flex flex-col justify-between shadow-sm">
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
                <li>• Kotlin + Jetpack Compose</li>
                <li>• Firebase (Auth, DB)</li>
                <li>• TFLite (On-device ML)</li>
                <li>• MediaPipe (Vision)</li>
                <li>• Clean Architecture</li>
                <li>• MVVM Pattern</li>
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 font-mono text-[10px] text-zinc-500">
              STAGE_04 // DEPLOYMENT
            </div>
          </div>

          {/* 5. Outcome */}
          <div className="p-5 rounded-2xl border border-white/10 bg-[#141418] flex flex-col justify-between shadow-sm">
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
                  <span>{isRtl ? "تحسين إمكانية الوصول" : "Improved accessibility"}</span>
                </li>
                <li className="flex items-center gap-1.5 text-emerald-400">
                  <span>✔</span>
                  <span>{isRtl ? "استقلالية أعلى للمستخدم" : "Higher user independence"}</span>
                </li>
                <li className="flex items-center gap-1.5 text-emerald-400">
                  <span>✔</span>
                  <span>{isRtl ? "انطباعات مستخدمين إيجابية" : "Positive user feedback"}</span>
                </li>
                <li className="flex items-center gap-1.5 text-emerald-400">
                  <span>✔</span>
                  <span>{isRtl ? "معمارية قابلة للتوسع" : "Scalable architecture"}</span>
                </li>
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 font-mono text-[10px] text-zinc-500">
              STAGE_05 // RESULTS
            </div>
          </div>
        </div>

        {/* Bottom Row: 5 Mobile Mockup Screens + Key Features + System Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: 5 Mobile Screens Mockup */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-[540px] aspect-[2/1] rounded-2xl overflow-hidden border border-white/10 bg-black/40 shadow-2xl p-2">
              <Image
                src="/images/projects/yusra-screens.png"
                alt="Yusra App Mobile Interface Screens"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 540px"
              />
              {/* Simulator Preview Banner */}
              <div className="absolute bottom-3 start-4 end-4 bg-black/85 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-white/10 text-[11px] font-mono text-zinc-300 flex items-center justify-between pointer-events-none">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                  <span>YUSRA_SIMULATOR // READY</span>
                </span>
                <span className="text-[#D4AF37] font-bold text-[10px]">TAP DEMO →</span>
              </div>
            </div>
          </div>

          {/* Right: Key Features & System Flow */}
          <div className="lg:col-span-6 space-y-6">
            {/* Key Features */}
            <div className="p-5 rounded-2xl border border-white/10 bg-[#141418]">
              <span className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest block mb-4">
                {isRtl ? "الميزات الرئيسية" : "KEY FEATURES"}
              </span>
              <div className="grid grid-cols-2 gap-3">
                {keyFeatures.map((f, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/5">
                    {f.icon}
                    <span className="text-xs font-medium text-zinc-200">{f.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* System Flow */}
            <div className="p-5 rounded-2xl border border-white/10 bg-[#141418]">
              <span className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest block mb-4">
                {isRtl ? "تدفق النظام" : "SYSTEM FLOW"}
              </span>
              <div className="flex items-center justify-between gap-2 overflow-x-auto py-2">
                {systemFlow.map((item, idx) => (
                  <React.Fragment key={idx}>
                    <div className="flex flex-col items-center text-center p-2 rounded-xl bg-white/5 border border-white/5 min-w-[70px]">
                      <div className="w-8 h-8 rounded-full border border-purple-500/40 bg-purple-500/10 flex items-center justify-center text-purple-300 mb-1">
                        {item.icon}
                      </div>
                      <span className="text-[10px] font-mono text-zinc-300">{item.label}</span>
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
