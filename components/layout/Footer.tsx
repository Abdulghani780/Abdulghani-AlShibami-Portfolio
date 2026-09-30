"use client";

import React from "react";
import Link from "next/link";
import { Dictionary } from "@/lib/i18n/dictionaries";
import { AsMonogram } from "@/components/ui/AsLogo";

export function Footer({ dict }: { dict?: Dictionary }) {
  return (
    <footer className="w-full bg-[#F8FAFC] dark:bg-[#0B0B0C] text-[#0F172A] dark:text-white py-12 sm:py-16 border-t border-black/10 dark:border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-start border-b border-black/10 dark:border-white/10 pb-10">
          {/* Left: Direct Social and Document Links */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-5 sm:gap-6 text-xs font-mono tracking-wider text-zinc-600 dark:text-zinc-400">
            <a
              href="https://github.com/Abdulghani780"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-dark dark:hover:text-gold-light transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/abdulghani-al-shibami-94b4a3204"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-dark dark:hover:text-gold-light transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:samyemen987@gmail.com"
              className="hover:text-gold-dark dark:hover:text-gold-light transition-colors"
            >
              Email
            </a>
            <a
              href="/docs/Abdulghani_Al-Shibami_CV.pdf"
              download
              className="hover:text-gold-dark dark:hover:text-gold-light transition-colors"
            >
              CV
            </a>
          </div>

          {/* Center: Brand Monogram & Wordmark */}
          <div className="flex flex-col items-center justify-center">
            <AsMonogram size={42} colorScheme="pure-gold" className="mb-2" />
            <span className="font-sans font-black text-sm tracking-[0.16em] uppercase text-zinc-900 dark:text-white leading-tight">
              ABDULGHANI AL-SHIBAMI
            </span>
            <span className="font-sans text-[10px] tracking-[0.24em] font-semibold text-gold-dark dark:text-gold-light/85 uppercase leading-tight mt-0.5">
              AI • SOFTWARE • SYSTEMS
            </span>
          </div>

          {/* Right: Language switch & Attribution */}
          <div className="flex flex-col items-center md:items-end gap-2 text-xs font-mono text-zinc-600 dark:text-zinc-400">
            <div className="flex items-center gap-2">
              <Link href="/ar" className="hover:text-gold-dark dark:hover:text-gold-light transition-colors font-sans">
                العربية
              </Link>
              <span className="text-zinc-300 dark:text-zinc-700">|</span>
              <Link href="/en" className="hover:text-gold-dark dark:hover:text-gold-light transition-colors">
                English
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Colophon Bar */}
        <div className="pt-8 text-center">
          <p className="text-xs font-sans tracking-wide text-zinc-500">
            Designed & Engineered by <span className="text-zinc-900 dark:text-zinc-300 font-semibold">Abdulghani Al-Shibami</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
