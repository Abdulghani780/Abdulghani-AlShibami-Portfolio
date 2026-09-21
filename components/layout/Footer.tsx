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
    <footer className="border-t border-hairline bg-canvas/95 backdrop-blur-md pt-14 pb-10 transition-colors duration-300">
      <div className="w-full max-w-arch mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-hairline">
          {/* Brand & Philosophy */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg border border-indigo-500/50 bg-indigo-500/10 flex items-center justify-center font-mono text-xs text-indigo-500 dark:text-indigo-400 font-black shadow-[0_0_12px_rgba(99,102,241,0.3)]">
                AS
              </span>
              <span className="font-mono text-sm tracking-wide font-bold text-content-primary uppercase">
                {dict.nav.brand}
              </span>
            </div>
            <p className="text-content-muted text-sm leading-relaxed max-w-md">
              {dict.footer.philosophy}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-hairline bg-surface-secondary text-xs font-mono text-content-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{dict.footer.safetyNotice}</span>
            </div>
          </div>

          {/* Social & Verification Anchors */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <div className="text-indigo-600 dark:text-cyan-400 tracking-[0.16em] uppercase text-[11px] font-bold">
              {dict.footer.directLinks}
            </div>
            <ul className="space-y-2.5 text-content-secondary">
              <li>
                <a
                  href="https://github.com/Abdulghani780"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors inline-flex items-center gap-1.5 group"
                >
                  <span>{dict.footer.githubLabel}</span>
                  <span className="text-[10px] text-content-muted group-hover:text-indigo-600 dark:group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform rtl:rotate-[-90deg]">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/abdulghani-al-shibami-94b4a3204"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors inline-flex items-center gap-1.5 group"
                >
                  <span>{dict.footer.linkedinLabel}</span>
                  <span className="text-[10px] text-content-muted group-hover:text-indigo-600 dark:group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform rtl:rotate-[-90deg]">↗</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation & Back to Top */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end space-y-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 h-10 px-4 rounded-lg border border-hairline bg-surface-secondary hover:border-indigo-500/40 text-content-primary hover:text-indigo-600 dark:hover:text-indigo-300 text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer shadow-sm active:scale-[0.98]"
            >
              <span>{dict.footer.backToTop}</span>
              <span className="text-xs">↑</span>
            </button>
          </div>
        </div>

        {/* Bottom Colophon Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-content-muted">
          <div>{dict.footer.rights}</div>
          <div className="text-[11px] opacity-75">Next.js 15 • React • TypeScript • Workstation Sandbox</div>
        </div>
      </div>
    </footer>
  );
}
