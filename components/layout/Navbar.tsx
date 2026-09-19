"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale, Dictionary } from "@/lib/i18n/dictionaries";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { cn } from "@/lib/utils";

export function Navbar({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage =
    pathname === `/${locale}` ||
    pathname === `/${locale}/` ||
    pathname === "/" ||
    pathname === "";

  if (isHomePage) {
    return null;
  }

  const isRtl = locale === "ar";

  const navLinks = [
    { href: `/${locale}`, label: isRtl ? "الرئيسية" : "Home" },
    { href: `/${locale}/projects`, label: dict.nav.projects },
    { href: `/${locale}/showcase`, label: isRtl ? "استوديو الديمو" : "Demo Studio" },
    { href: `/${locale}#contact`, label: dict.nav.contact },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 pt-3 sm:pt-4 px-3 sm:px-6 pointer-events-none transition-all duration-300">
      <div
        className={cn(
          "w-full max-w-5xl mx-auto rounded-2xl pointer-events-auto transition-all duration-300",
          "border px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between backdrop-blur-xl",
          isScrolled
            ? "bg-[#070A0F]/95 border-[#00FF9D]/40 shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(0,255,157,0.12)]"
            : "bg-[#070A0F]/85 border-white/[0.08] shadow-lg"
        )}
      >
        {/* Brand Identity & Monogram */}
        <Link
          href={`/${locale}`}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <span className="w-8 h-8 rounded-lg border border-[#00FF9D] bg-[#00FF9D]/10 flex items-center justify-center font-mono text-sm text-[#00FF9D] font-black transition-all duration-200 group-hover:bg-[#00FF9D]/20 group-hover:shadow-[0_0_12px_rgba(0,255,157,0.4)] shrink-0">
            AS
          </span>
          <div className="flex flex-col">
            <span className="font-mono text-xs tracking-wider text-white font-bold group-hover:text-[#00FF9D] transition-colors uppercase">
              {isRtl ? "عبدالغني الشبامي" : "Abdulghani Al-Shibami"}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/50">
              {"// "}{isRtl ? "أنظمة وذكاء اصطناعي" : "AI & SYSTEMS"}
            </span>
          </div>
        </Link>

        {/* Center Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-mono tracking-wider uppercase">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/70 hover:text-[#00FF9D] transition-colors relative py-1 hover:drop-shadow-[0_0_8px_rgba(0,255,157,0.3)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <LanguageSwitcher currentLocale={locale} />
          <ThemeToggle />

          {/* Desktop Primary Action */}
          <div className="hidden sm:block">
            <Link
              href={`/${locale}/projects`}
              className="px-3.5 py-1.5 rounded-lg bg-[#00FF9D] hover:bg-[#00FF9D]/90 text-[#070A0F] font-mono font-bold text-xs shadow-[0_0_12px_rgba(0,255,157,0.3)] transition-all active:scale-95"
            >
              {isRtl ? "المشاريع الحية" : "Live Projects"}
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center w-8 h-8 rounded-lg border border-white/[0.1] bg-white/[0.04] text-white hover:border-[#00FF9D] transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? dict.nav.menuClose : dict.nav.menuOpen}
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden w-full max-w-5xl mx-auto mt-2 rounded-2xl border border-white/[0.12] bg-[#070A0F]/95 backdrop-blur-2xl p-5 space-y-4 shadow-2xl pointer-events-auto animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2 font-mono text-xs uppercase tracking-wider">
            {navLinks.map((link, idx) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-white/80 hover:text-[#00FF9D] py-2 border-b border-white/[0.06] transition-colors"
              >
                <span>{link.label}</span>
                <span className="text-[10px] text-[#00FF9D] font-mono">0{idx + 1}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
