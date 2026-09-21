"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Locale } from "@/lib/i18n/dictionaries";
import { ContactForm } from "@/components/features/ContactForm";
import { ContactToolbar } from "@/components/features/ContactToolbar";

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
    href: "https://linkedin.com/in/abdulghani-al-shibami-94b4a3204",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: "mailto:samyemen987@gmail.com",
    label: "Email",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: "https://wa.me/967773088202",
    label: "WhatsApp",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.23.9 2.41 1.02 2.58.13.17 1.76 2.69 4.27 3.77.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.12-.24-.19-.49-.31" />
      </svg>
    ),
  },
  {
    href: "tel:+967773088202",
    label: "Phone",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" />
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
      className="relative bg-canvas border-t border-hairline overflow-hidden transition-colors duration-300"
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* Top border data line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-indigo-500/[0.05] rounded-full blur-[100px] pointer-events-none" />

      {/* ── CTA Band ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-lg">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 font-mono text-[10px] tracking-[0.18em] text-indigo-600 dark:text-cyan-400 uppercase mb-4 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 motion-safe:animate-ping" />
              {isAr ? "SECTION 06 / تواصل" : "SECTION 06 / CONTACT"}
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-content-primary leading-tight">
              {isAr ? (
                <>هل لديك مشروع يحتاج<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 dark:from-indigo-400 via-cyan-500 dark:via-cyan-400 to-emerald-500 dark:to-emerald-400">هندسة متقدمة؟</span></>
              ) : (
                <>Ready to architect<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 dark:from-indigo-400 via-cyan-500 dark:via-cyan-400 to-emerald-500 dark:to-emerald-400">something great?</span></>
              )}
            </h3>
            <p className="text-content-muted text-sm mt-3 leading-relaxed max-w-sm">
              {isAr
                ? "لديّ خبرة في بناء منصات تقنية معقدة — من قواعد البيانات إلى الواجهات الذكية."
                : "From database architecture to real-time dashboards — let's build systems that matter."}
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-end gap-4">
            <button
              type="button"
              onClick={() => setShowContactModal(true)}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 hover:from-indigo-600 hover:to-emerald-600 text-white font-semibold text-sm tracking-wider uppercase font-mono transition-all duration-200 shadow-[0_0_30px_rgba(99,102,241,0.5)] hover:shadow-[0_0_45px_rgba(6,182,212,0.7)] hover:scale-[1.04] active:scale-[0.97]"
            >
              {isAr ? "ابدأ محادثة الآن ↗" : "START A CONVERSATION ↗"}
            </button>
            <p className="text-content-muted font-mono text-[11px]">
              {isAr ? "يُرد في غضون 24 ساعة" : "Typically responds within 24 hours"}
            </p>
          </div>
        </div>

        {/* 5-Channel Direct Verification Contact Toolbar */}
        <div className="mt-12 pt-8 border-t border-hairline">
          <div className="text-[11px] font-mono text-indigo-600 dark:text-cyan-400 uppercase tracking-widest font-semibold mb-3">
            {"// "}{isAr ? "قنوات التواصل المباشرة المعتمدة" : "VERIFIED DIRECT COMMUNICATIONS SUITE"}
          </div>
          <ContactToolbar locale={locale} />
        </div>
      </div>

      {/* ── Bottom Footer Bar ── */}
      <div className="relative z-10 border-t border-hairline max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo + Copyright */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-indigo-500/15 border border-indigo-500/40 flex items-center justify-center text-indigo-500 dark:text-indigo-300 font-bold text-base shadow-[0_0_12px_rgba(99,102,241,0.25)]">
              A
            </span>
            <span className="font-mono text-[11px] text-content-muted">
              Abdulghani Al-Shibami © {new Date().getFullYear()}
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-mono text-xs text-content-secondary">
            <Link href={`/${locale}`} className="hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">
              {isAr ? "الرئيسية" : "Home"}
            </Link>
            <a href="#projects" className="hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">
              {isAr ? "المشاريع" : "Projects"}
            </a>
            <a href="#sandbox" className="hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">
              {isAr ? "المحاكي" : "Sandbox"}
            </a>
            <a href="#studio" className="hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">
              {isAr ? "معمل الديمو" : "Demo Studio"}
            </a>
            <button
              type="button"
              onClick={() => setShowContactModal(true)}
              className="hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors"
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
                className="w-9 h-9 rounded-lg border border-hairline bg-surface-secondary flex items-center justify-center text-content-secondary hover:text-indigo-600 dark:hover:text-cyan-400 hover:border-indigo-500/40 hover:bg-indigo-500/10 transition-all duration-200"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom tag */}
        <div className="mt-6 text-center font-mono text-[10px] text-content-muted">
          {isAr
            ? "مبني بـ Next.js 15 · TypeScript · Tailwind CSS · Titanium Slate & Electric Architecture"
            : "Built with Next.js 15 · TypeScript · Tailwind CSS · Titanium Slate & Electric Architecture"}
        </div>
      </div>

      {/* ── Contact Modal ── */}
      {showContactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md" dir={isAr ? "rtl" : "ltr"}>
          <div className="relative w-full max-w-lg bg-surface border border-hairline rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-hairline">
              <span className="font-mono text-sm font-bold text-indigo-600 dark:text-cyan-400">
                {"// "}{isAr ? "إرسال رسالة مباشرة" : "TRANSMIT MESSAGE TO SYSTEMS ARCHITECT"}
              </span>
              <button
                type="button"
                onClick={() => setShowContactModal(false)}
                className="w-8 h-8 rounded-lg border border-hairline flex items-center justify-center text-content-muted hover:text-content-primary hover:border-indigo-500/40 transition-colors font-mono text-sm cursor-pointer"
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
