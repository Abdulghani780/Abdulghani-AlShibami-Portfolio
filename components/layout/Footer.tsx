"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Dictionary } from "@/lib/i18n/dictionaries";

export function Footer({ dict }: { dict: Dictionary }) {
  const pathname = usePathname();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isHomePage =
    pathname === "/en" ||
    pathname === "/ar" ||
    pathname === "/en/" ||
    pathname === "/ar/" ||
    pathname === "/" ||
    pathname === "";

  if (isHomePage) {
    return null;
  }

  return (
    <footer className="border-t border-white/[0.08] bg-[#070A0F]/90 backdrop-blur-md pt-14 pb-10 transition-colors duration-300">
      <div className="w-full max-w-arch mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-white/[0.06]">
          {/* Brand & Philosophy */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg border border-[#00FF9D] bg-[#00FF9D]/10 flex items-center justify-center font-mono text-xs text-[#00FF9D] font-black shadow-[0_0_12px_rgba(0,255,157,0.3)]">
                AS
              </span>
              <span className="font-mono text-sm tracking-wide font-bold text-white uppercase">
                {dict.nav.brand}
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-md">
              {dict.footer.philosophy}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-xs font-mono text-white/50">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00FF9D] animate-pulse" />
              <span>{dict.footer.safetyNotice}</span>
            </div>
          </div>

          {/* Social & Verification Anchors */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <div className="text-[#00FF9D] tracking-[0.16em] uppercase text-[11px] font-bold">
              {dict.footer.directLinks}
            </div>
            <ul className="space-y-2.5 text-white/70">
              <li>
                <a
                  href="https://github.com/Abdulghani780"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00FF9D] transition-colors inline-flex items-center gap-1.5 group"
                >
                  <span>{dict.footer.githubLabel}</span>
                  <span className="text-[10px] text-white/40 group-hover:text-[#00FF9D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform rtl:rotate-[-90deg]">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00FF9D] transition-colors inline-flex items-center gap-1.5 group"
                >
                  <span>{dict.footer.linkedinLabel}</span>
                  <span className="text-[10px] text-white/40 group-hover:text-[#00FF9D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform rtl:rotate-[-90deg]">↗</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation & Back to Top */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end space-y-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 h-10 px-4 rounded-lg border border-white/[0.08] bg-white/[0.03] hover:border-[#00FF9D]/40 hover:text-[#00FF9D] text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer shadow-sm active:scale-[0.98]"
            >
              <span>{dict.footer.backToTop}</span>
              <span className="text-xs">↑</span>
            </button>
          </div>
        </div>

        {/* Bottom Colophon Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-white/40">
          <div>{dict.footer.rights}</div>
          <div className="text-[11px] text-white/30">Next.js 15 • React • TypeScript • Workstation Sandbox</div>
        </div>
      </div>
    </footer>
  );
}
