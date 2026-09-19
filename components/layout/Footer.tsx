"use client";

import React from "react";
import { Dictionary } from "@/lib/i18n/dictionaries";

export function Footer({ dict }: { dict: Dictionary }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-glass-border bg-obsidian-card/60 backdrop-blur-md pt-16 pb-12 transition-colors duration-300">
      <div className="w-full max-w-arch mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-glass-border">
          {/* Brand & Philosophy */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg border border-gold/40 bg-gold/10 flex items-center justify-center font-serif text-xs text-gold font-bold shadow-gold-ambient">
                AS
              </span>
              <span className="font-serif text-base tracking-wide font-semibold text-content-primary">
                {dict.nav.brand}
              </span>
            </div>
            <p className="text-content-secondary text-sm leading-relaxed max-w-md">
              {dict.footer.philosophy}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-glass-border bg-glass-subtle text-xs font-mono text-content-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-status-emerald animate-pulse" />
              <span>{dict.footer.safetyNotice}</span>
            </div>
          </div>

          {/* Social & Verification Anchors */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <div className="text-gold tracking-[0.16em] uppercase text-[11px] font-semibold">
              {dict.footer.directLinks}
            </div>
            <ul className="space-y-2.5 text-content-secondary">
              <li>
                <a
                  href="https://github.com/Abdulghani780"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors inline-flex items-center gap-1.5 group"
                >
                  <span>{dict.footer.githubLabel}</span>
                  <span className="text-[10px] text-content-muted group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform rtl:rotate-[-90deg]">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors inline-flex items-center gap-1.5 group"
                >
                  <span>{dict.footer.linkedinLabel}</span>
                  <span className="text-[10px] text-content-muted group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform rtl:rotate-[-90deg]">↗</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation & Back to Top */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end space-y-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 h-10 px-4 rounded-lg border border-glass-border bg-glass-subtle hover:border-gold/40 hover:text-gold text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer shadow-sm hover:shadow-gold-ambient active:scale-[0.98]"
            >
              <span>{dict.footer.backToTop}</span>
              <span className="text-xs">↑</span>
            </button>
          </div>
        </div>

        {/* Bottom Colophon Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-content-muted">
          <div>{dict.footer.rights}</div>
          <div className="text-[11px] text-content-muted/80">Next.js • React • TypeScript</div>
        </div>
      </div>
    </footer>
  );
}
