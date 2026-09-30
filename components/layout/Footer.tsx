"use client";

import React from "react";
import Link from "next/link";
import { Dictionary } from "@/lib/i18n/dictionaries";
import { AsMonogram } from "@/components/ui/AsLogo";
import { Github, Linkedin, Mail, FileText, Globe } from "lucide-react";

export function Footer({ dict }: { dict?: Dictionary }) {
  return (
    <footer className="w-full bg-[#F8FAFC] dark:bg-[#0B0B0C] text-[#0F172A] dark:text-white py-14 sm:py-18 border-t border-black/10 dark:border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-start border-b border-black/10 dark:border-white/10 pb-12">
          {/* Left: Direct Social and Document Link Pills with Icons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 sm:gap-3 text-xs font-mono">
            <a
              href="https://github.com/Abdulghani780"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:border-[#C59B27]/50 hover:bg-[#C59B27]/10 hover:text-[#B88E1F] dark:hover:text-[#E2C366] transition-all"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/abdulghani-al-shibami-94b4a3204"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:border-[#C59B27]/50 hover:bg-[#C59B27]/10 hover:text-[#B88E1F] dark:hover:text-[#E2C366] transition-all"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:samyemen987@gmail.com"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:border-[#C59B27]/50 hover:bg-[#C59B27]/10 hover:text-[#B88E1F] dark:hover:text-[#E2C366] transition-all"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
            <a
              href="/docs/Abdulghani_Al-Shibami_CV.pdf"
              download
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:border-[#C59B27]/50 hover:bg-[#C59B27]/10 hover:text-[#B88E1F] dark:hover:text-[#E2C366] transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>CV</span>
            </a>
          </div>

          {/* Center: 3D Monogram & Brand Wordmark */}
          <div className="flex flex-col items-center justify-center">
            <AsMonogram size={52} className="mb-3" />
            <span className="font-sans font-black text-sm sm:text-base tracking-[0.16em] uppercase text-zinc-900 dark:text-white leading-tight">
              ABDULGHANI AL-SHIBAMI
            </span>
            <span className="font-sans text-[11px] tracking-[0.24em] font-bold text-[#B88E1F] dark:text-[#E2C366] uppercase leading-tight mt-1.5">
              AI • SOFTWARE • SYSTEMS
            </span>
          </div>

          {/* Right: Sleek Segmented Language Switcher */}
          <div className="flex flex-col items-center md:items-end justify-center">
            <div className="inline-flex items-center p-1 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
              <Globe className="w-3.5 h-3.5 text-[#B88E1F] dark:text-[#E2C366] ms-2.5 me-1" />
              <Link
                href="/ar"
                className="px-3 py-1 rounded-full font-sans text-xs font-semibold hover:text-[#B88E1F] dark:hover:text-[#E2C366] transition-colors"
              >
                العربية
              </Link>
              <span className="text-zinc-300 dark:text-zinc-700">|</span>
              <Link
                href="/en"
                className="px-3 py-1 rounded-full font-sans text-xs font-semibold hover:text-[#B88E1F] dark:hover:text-[#E2C366] transition-colors"
              >
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
