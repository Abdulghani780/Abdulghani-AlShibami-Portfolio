"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Locale } from "@/lib/i18n/dictionaries";
import { ContactForm } from "@/components/features/ContactForm";

interface CanonicalFooterProps {
  locale: Locale;
}

const SOCIAL_LINKS = [
  {
    href: "https://github.com/Abdulghani780",
    label: "GitHub",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: "mailto:contact@abdulghani.dev",
    label: "Email",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function CanonicalFooter({ locale }: CanonicalFooterProps) {
  const isAr = locale === "ar";
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <footer
      id="contact"
      className="relative w-full bg-[#030508] text-white overflow-hidden"
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* Top border data line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00FF9D]/40 to-transparent" />

      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-[#00FF9D]/[0.025] rounded-full blur-[100px] pointer-events-none" />

      {/* ── CTA Band ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-lg">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00FF9D]/08 border border-[#00FF9D]/25 font-mono text-[10px] tracking-[0.18em] text-[#00FF9D] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] animate-ping" />
              {isAr ? "SECTION 05 / تواصل" : "SECTION 05 / CONTACT"}
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              {isAr ? (
                <>هل لديك مشروع يحتاج<br /><span className="text-[#00FF9D]">هندسة متقدمة؟</span></>
              ) : (
                <>Ready to architect<br /><span className="text-[#00FF9D]">something great?</span></>
              )}
            </h3>
            <p className="text-zinc-400 text-sm mt-3 leading-relaxed max-w-sm">
              {isAr
                ? "لديّ خبرة في بناء منصات تقنية معقدة — من قواعد البيانات إلى الواجهات الذكية."
                : "From database architecture to real-time dashboards — let's build systems that matter."}
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-end gap-4">
            <button
              type="button"
              onClick={() => setShowContactModal(true)}
              className="px-8 py-4 rounded-full bg-[#00FF9D] text-black font-semibold text-sm tracking-wider uppercase font-mono transition-all duration-200 shadow-[0_0_30px_rgba(0,255,157,0.5)] hover:shadow-[0_0_45px_rgba(0,255,157,0.8)] hover:scale-[1.04] active:scale-[0.97]"
            >
              {isAr ? "ابدأ محادثة الآن ↗" : "START A CONVERSATION ↗"}
            </button>
            <p className="text-zinc-600 font-mono text-[11px]">
              {isAr ? "يُرد في غضون 24 ساعة" : "Typically responds within 24 hours"}
            </p>
          </div>
        </div>
      </div>

      {/* ── Bottom Footer Bar ── */}
      <div className="relative z-10 border-t border-zinc-900 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo + Copyright */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-[#00FF9D]/12 border border-[#00FF9D]/35 flex items-center justify-center text-[#00FF9D] font-bold text-base shadow-[0_0_12px_rgba(0,255,157,0.25)]">
              A
            </span>
            <span className="font-mono text-[11px] text-zinc-500">
              Abdulghani Al-Shibami © {new Date().getFullYear()}
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-mono text-xs text-zinc-500">
            <Link href={`/${locale}`} className="hover:text-[#00FF9D] transition-colors">
              {isAr ? "الرئيسية" : "Home"}
            </Link>
            <a href="#projects" className="hover:text-[#00FF9D] transition-colors">
              {isAr ? "المشاريع" : "Projects"}
            </a>
            <a href="#sandbox" className="hover:text-[#00FF9D] transition-colors">
              {isAr ? "المحاكي" : "Sandbox"}
            </a>
            <a href="#studio" className="hover:text-[#00FF9D] transition-colors">
              {isAr ? "معمل الديمو" : "Demo Studio"}
            </a>
            <button
              type="button"
              onClick={() => setShowContactModal(true)}
              className="hover:text-[#00FF9D] transition-colors"
            >
              {isAr ? "تواصل" : "Contact"}
            </button>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-9 h-9 rounded-lg border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-[#00FF9D] hover:border-[#00FF9D]/40 hover:bg-[#00FF9D]/06 transition-all duration-200"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom tag */}
        <div className="mt-6 text-center font-mono text-[10px] text-zinc-700">
          {isAr
            ? "مبني بـ Next.js · TypeScript · Tailwind CSS · Supabase — على فرع redesign/final-liquid-glass-portfolio"
            : "Built with Next.js · TypeScript · Tailwind CSS · Supabase — on branch redesign/final-liquid-glass-portfolio"}
        </div>
      </div>

      {/* ── Contact Modal ── */}
      {showContactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md" dir={isAr ? "rtl" : "ltr"}>
          <div className="relative w-full max-w-lg bg-[#070A10] border border-[#00FF9D]/35 rounded-2xl p-6 shadow-[0_0_60px_rgba(0,255,157,0.18)]">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <span className="font-mono text-sm font-bold text-[#00FF9D]">
                {"// "}{isAr ? "إرسال رسالة مباشرة" : "TRANSMIT MESSAGE TO SYSTEMS ARCHITECT"}
              </span>
              <button
                type="button"
                onClick={() => setShowContactModal(false)}
                className="w-8 h-8 rounded-lg border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors font-mono text-sm"
              >
                ✕
              </button>
            </div>
            <div className="pt-4">
              <ContactForm isRtl={isAr} />
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
