"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Locale } from "@/lib/i18n/dictionaries";

export function YusraCaseStudySection({ locale }: { locale: Locale }) {
  const isRtl = locale === "ar";

  const keyFeatures = [
    {
      title: isRtl ? "المساعدة الصوتية" : "Voice Assistance",
      icon: (
        <svg className="w-4 h-4 text-gold-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        </svg>
      ),
    },
    {
      title: isRtl ? "التعرف على الصور" : "Image Recognition",
      icon: (
        <svg className="w-4 h-4 text-gold-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      ),
    },
    {
      title: isRtl ? "تحويل النص إلى صوت" : "Text-to-Speech",
      icon: (
        <svg className="w-4 h-4 text-gold-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
        </svg>
      ),
    },
    {
      title: isRtl ? "واجهة سهلة الوصول" : "Accessible UI",
      icon: (
        <svg className="w-4 h-4 text-gold-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="7" r="1.5" />
          <path d="M7 11.5l5 2 5-2M10 20l2-4 2 4" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="yusra-case-study"
      className="relative w-full bg-[#0B0B0C] text-white py-20 lg:py-28 border-b border-white/5 transition-colors overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Title and "FULL CASE STUDY →" Pill */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="font-sans font-black text-2xl sm:text-3xl uppercase tracking-tight text-white">
                {isRtl ? "دراسة حالة المشروع — يُسرى" : "PROJECT CASE STUDY — YUSRA"}
              </h2>
            </div>
            <p className="mt-1 text-sm text-gold-light/80 font-sans">
              {isRtl
                ? "تقنية ذكاء اصطناعي مساعدة لحياة أكثر استقلالية وتيسيراً."
                : "Assistive AI technology for a more independent life."}
            </p>
          </div>

          <a
            href="https://github.com/Abdulghani780"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold-primary/40 bg-gold-primary/10 hover:bg-gold-primary/20 text-gold-light text-xs font-bold tracking-wider uppercase transition-colors"
          >
            <span>{isRtl ? "دراسة الحالة الكاملة" : "FULL CASE STUDY"}</span>
            <span>→</span>
          </a>
        </div>

        {/* 5-Stage Numbered Lifecycle: 1. Problem, 2. Solution, 3. Architecture, 4. Implementation, 5. Outcome */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {/* 1. Problem */}
          <div className="p-5 rounded-xl border border-white/10 bg-[#121214] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full border border-gold-primary/50 text-gold-primary flex items-center justify-center font-mono text-xs font-bold">
                  1
                </span>
                <span className="font-sans font-bold text-xs uppercase tracking-wider text-zinc-300">
                  {isRtl ? "المشكلة" : "PROBLEM"}
                </span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                {isRtl
                  ? "يواجه الأشخاص ذوو التحديات البصرية أو الحركية صعوبات يومية في الوصول للمعلومات واستخدام الخدمات الرقمية."
                  : "People with visual or physical limitations face daily challenges accessing information and using mobile services."}
              </p>
            </div>
          </div>

          {/* 2. Solution */}
          <div className="p-5 rounded-xl border border-white/10 bg-[#121214] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full border border-gold-primary/50 text-gold-primary flex items-center justify-center font-mono text-xs font-bold">
                  2
                </span>
                <span className="font-sans font-bold text-xs uppercase tracking-wider text-zinc-300">
                  {isRtl ? "الحل" : "SOLUTION"}
                </span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                {isRtl
                  ? "تطبيق هاتف ذكي مدعوم بالذكاء الاصطناعي مع ميزات صوتية ورؤية حاسوبية لتقديم تقنية مستقلة وشاملة."
                  : "AI-powered mobile application with voice, vision and assistive features to provide accessible, independent and inclusive technology."}
              </p>
            </div>
          </div>

          {/* 3. Architecture */}
          <div className="p-5 rounded-xl border border-gold-primary/30 bg-[#141418] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full border border-gold-primary text-gold-primary flex items-center justify-center font-mono text-xs font-bold">
                  3
                </span>
                <span className="font-sans font-bold text-xs uppercase tracking-wider text-gold-light">
                  {isRtl ? "المعمارية" : "ARCHITECTURE"}
                </span>
              </div>
              <div className="space-y-2 font-mono text-[10px] text-zinc-300">
                <div className="p-1.5 rounded bg-black/60 border border-white/10 flex items-center justify-between">
                  <span>Mobile App</span>
                  <span className="text-gold-primary">[Kotlin]</span>
                </div>
                <div className="p-1.5 rounded bg-black/60 border border-white/10 flex items-center justify-between">
                  <span>TFLite</span>
                  <span className="text-gold-primary">[ML Models]</span>
                </div>
                <div className="p-1.5 rounded bg-black/60 border border-white/10 flex items-center justify-between">
                  <span>MediaPipe</span>
                  <span className="text-gold-primary">[Vision]</span>
                </div>
                <div className="p-1.5 rounded bg-black/60 border border-white/10 flex items-center justify-between">
                  <span>Firebase</span>
                  <span className="text-gold-primary">[Auth, DB]</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Implementation */}
          <div className="p-5 rounded-xl border border-white/10 bg-[#121214] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full border border-gold-primary/50 text-gold-primary flex items-center justify-center font-mono text-xs font-bold">
                  4
                </span>
                <span className="font-sans font-bold text-xs uppercase tracking-wider text-zinc-300">
                  {isRtl ? "التنفيذ" : "IMPLEMENTATION"}
                </span>
              </div>
              <ul className="space-y-1.5 text-xs text-zinc-400 font-sans">
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-primary" />
                  <span>Kotlin + Jetpack Compose</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-primary" />
                  <span>Firebase (Auth, Firestore)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-primary" />
                  <span>TFLite (On-device ML)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-primary" />
                  <span>MediaPipe (Vision)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-primary" />
                  <span>Clean Architecture & MVVM</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 5. Outcome */}
          <div className="p-5 rounded-xl border border-white/10 bg-[#121214] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full border border-gold-primary/50 text-gold-primary flex items-center justify-center font-mono text-xs font-bold">
                  5
                </span>
                <span className="font-sans font-bold text-xs uppercase tracking-wider text-zinc-300">
                  {isRtl ? "النتائج" : "OUTCOME"}
                </span>
              </div>
              <ul className="space-y-1.5 text-xs text-zinc-300 font-sans">
                <li className="flex items-center gap-1.5">
                  <span className="text-emerald-400 text-sm font-bold">✓</span>
                  <span>{isRtl ? "تحسين إمكانية الوصول" : "Improved accessibility"}</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-emerald-400 text-sm font-bold">✓</span>
                  <span>{isRtl ? "استقلالية أعلى للمستخدم" : "Higher user independence"}</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-emerald-400 text-sm font-bold">✓</span>
                  <span>{isRtl ? "ردود فعل إيجابية" : "Positive user feedback"}</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-emerald-400 text-sm font-bold">✓</span>
                  <span>{isRtl ? "معمارية قابلة للتوسع" : "Scalable architecture"}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Split: Mobile Screens (Left) + Key Features (Middle) + System Flow (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#121214] border border-white/10 rounded-2xl p-6 sm:p-8">
          {/* Left: Mobile App Screens Graphic */}
          <div className="lg:col-span-6 relative aspect-[16/8] sm:aspect-[16/7] rounded-xl overflow-hidden bg-black/40 border border-white/5">
            <Image
              src="/images/projects/yusra-screens.png"
              alt="Yusra Assistive Mobile Application Screen Previews"
              fill
              className="object-contain"
            />
          </div>

          {/* Middle: Key Features List */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-gold-light">
              {isRtl ? "الميزات الرئيسية" : "KEY FEATURES"}
            </h4>
            <div className="space-y-3">
              {keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-3 p-2.5 rounded-lg bg-black/50 border border-white/5">
                  <div className="w-7 h-7 rounded-md bg-gold-primary/10 flex items-center justify-center shrink-0">
                    {feat.icon}
                  </div>
                  <span className="text-xs font-bold text-zinc-200">
                    {feat.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: System Flow Pipeline */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-gold-light">
              {isRtl ? "تدفق النظام" : "SYSTEM FLOW"}
            </h4>
            <div className="flex flex-col gap-2 font-mono text-[11px] text-zinc-300">
              <div className="p-2 rounded bg-black/50 border border-white/5 flex items-center justify-between">
                <span>User</span>
                <span className="text-gold-primary font-bold">→</span>
              </div>
              <div className="p-2 rounded bg-black/50 border border-white/5 flex items-center justify-between">
                <span>Mobile App (Compose)</span>
                <span className="text-gold-primary font-bold">→</span>
              </div>
              <div className="p-2 rounded bg-black/50 border border-white/5 flex items-center justify-between">
                <span>AI Models (TFLite / MediaPipe)</span>
                <span className="text-gold-primary font-bold">→</span>
              </div>
              <div className="p-2 rounded bg-black/50 border border-white/5 flex items-center justify-between">
                <span>Firebase Backend</span>
                <span className="text-emerald-400 font-bold">✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
