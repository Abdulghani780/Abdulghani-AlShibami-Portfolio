"use client";

import React from "react";
import { Dictionary } from "@/lib/i18n/dictionaries";

export function Footer({ dict }: { dict: Dictionary }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-hairline bg-surface/40 pt-16 pb-12 transition-colors duration-200">
      <div className="w-full max-w-arch mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-hairline/60">
          {/* Brand & Philosophy */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 border border-gold/60 bg-gold/5 flex items-center justify-center font-serif text-xs text-gold font-bold">
                AS
              </span>
              <span className="font-serif text-base tracking-wide font-semibold text-content-primary">
                {dict.nav.brand}
              </span>
            </div>
            <p className="text-content-secondary text-xs leading-relaxed max-w-md">
              {dict.footer.philosophy}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-hairline bg-surface text-[10px] font-mono text-content-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-status-emerald animate-pulse" />
              <span>{dict.footer.safetyNotice}</span>
            </div>
          </div>

          {/* Social & Verification Anchors */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <div className="text-gold tracking-[0.16em] uppercase text-[10px] font-semibold">
              {"// Direct Links"}
            </div>
            <ul className="space-y-2 text-content-secondary">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors inline-flex items-center gap-1.5"
                >
                  <span>GitHub Repository</span>
                  <span className="text-[9px]">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors inline-flex items-center gap-1.5"
                >
                  <span>LinkedIn Profile</span>
                  <span className="text-[9px]">↗</span>
                </a>
              </li>
              <li>
                <span className="text-content-muted">PGP: 0x8F94D29E</span>
              </li>
            </ul>
          </div>

          {/* Navigation & Back to Top */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end space-y-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 h-9 px-4 border border-hairline bg-surface hover:border-gold hover:text-gold text-xs font-mono tracking-wider transition-colors cursor-pointer"
            >
              <span>{dict.footer.backToTop}</span>
            </button>
            <div className="font-mono text-[10px] text-content-muted">
              LAT: 24.7136° N, LON: 46.6753° E
            </div>
          </div>
        </div>

        {/* Bottom Colophon Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-content-muted">
          <div>{dict.footer.rights}</div>
          <div>SPEC_VERSION: 2.4.0-RELEASE // NEXT.JS 15</div>
        </div>
      </div>
    </footer>
  );
}
