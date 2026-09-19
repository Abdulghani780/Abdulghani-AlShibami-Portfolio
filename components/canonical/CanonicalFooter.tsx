"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Locale } from "@/lib/i18n/dictionaries";
import { ContactForm } from "@/components/features/ContactForm";

interface CanonicalFooterProps {
  locale: Locale;
}

export function CanonicalFooter({ locale }: CanonicalFooterProps) {
  const isAr = locale === "ar";
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <footer id="contact" className="relative w-full bg-[#030509] text-white py-12 px-4 sm:px-8 lg:px-12 border-t border-[#00FF9D]/15 overflow-hidden">
      {/* Contact Trigger Invitation */}
      <div className="max-w-7xl mx-auto pb-12 mb-8 border-b border-zinc-800/80 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="font-mono text-xs text-[#00FF9D] tracking-widest uppercase">
            {"// "}{isAr ? "جاهز لبناء ما يُحدث أثراً" : "LET'S BUILD SOMETHING GREAT"}
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white pt-1">
            {isAr ? "هل لديك نظام معقد أو مشروع يحتاج لهندسة متقدمة؟" : "Ready to architect mission-critical software?"}
          </h3>
        </div>
        <button
          type="button"
          onClick={() => setShowContactModal(true)}
          className="px-8 py-3.5 rounded-full bg-[#00FF9D] text-black font-semibold text-xs tracking-wider uppercase font-mono transition-all duration-200 shadow-[0_0_25px_rgba(0,255,157,0.5)] hover:shadow-[0_0_35px_rgba(0,255,157,0.8)] hover:scale-[1.03] active:scale-[0.98]"
        >
          {isAr ? "ابدأ محادثة الآن ↗" : "START A CONVERSATION ↗"}
        </button>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          CANONICAL FOOTER (Exact to Reference 4: projects_showcase_grid.jpg)
      ───────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-sm font-medium">
        {/* Left: Custom 'A' glyph logo */}
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="w-8 h-8 rounded-lg bg-[#00FF9D]/15 border border-[#00FF9D]/40 flex items-center justify-center text-[#00FF9D] font-bold text-base shadow-[0_0_12px_rgba(0,255,157,0.3)]">
            A
          </span>
          <span className="font-mono text-xs text-zinc-400">
            Abdulghani Al-Shibami © {new Date().getFullYear()}
          </span>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex items-center space-x-6 sm:space-x-8 rtl:space-x-reverse font-mono text-xs text-zinc-400">
          <Link href={`/${locale}`} className="hover:text-[#00FF9D] transition-colors">
            {isAr ? "الرئيسية" : "Home"}
          </Link>
          <a href="#projects" className="text-[#00FF9D] font-semibold transition-colors">
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
        </div>

        {/* Right: Social Media Icons */}
        <div className="flex items-center space-x-4 rtl:space-x-reverse text-zinc-400">
          <a
            href="https://github.com/Abdulghani780"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00FF9D] transition-colors text-base"
            aria-label="GitHub Profile"
          >
            ⚡
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00FF9D] transition-colors text-base"
            aria-label="LinkedIn Profile"
          >
            💼
          </a>
          <a
            href="mailto:contact@abdulghani.dev"
            className="hover:text-[#00FF9D] transition-colors text-base"
            aria-label="Direct Email"
          >
            ✉️
          </a>
        </div>
      </div>

      {/* Accessible Contact Form Modal connected to Supabase */}
      {showContactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-[#070A0F] border border-[#00FF9D]/40 rounded-2xl p-6 shadow-[0_0_50px_rgba(0,255,157,0.2)]">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <span className="font-mono text-sm font-bold text-[#00FF9D]">
                {"// "}{isAr ? "إرسال رسالة مباشرة إلى المشرف" : "TRANSMIT MESSAGE TO SYSTEMS ARCHITECT"}
              </span>
              <button
                type="button"
                onClick={() => setShowContactModal(false)}
                className="text-zinc-400 hover:text-white font-mono text-sm"
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
