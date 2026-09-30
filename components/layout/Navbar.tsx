"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale, Dictionary } from "@/lib/i18n/dictionaries";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { AsLogo } from "@/components/ui/AsLogo";
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

  const isRtl = locale === "ar";

  const isHomePage =
    pathname === `/${locale}` ||
    pathname === `/${locale}/` ||
    pathname === "/" ||
    pathname === "";

  const navLinks = [
    {
      href: isHomePage ? "#about" : `/${locale}#about`,
      label: isRtl ? "من أنا" : "ABOUT",
    },
    {
      href: isHomePage ? "#ai-lab" : `/${locale}#ai-lab`,
      label: isRtl ? "مختبر الذكاء" : "AI LAB",
    },
    {
      href: isHomePage ? "#projects" : `/${locale}#projects`,
      label: isRtl ? "المشاريع" : "PROJECTS",
    },
    {
      href: isHomePage ? "#engineering" : `/${locale}#engineering`,
      label: isRtl ? "الهندسة العامة" : "ENGINEERING",
    },
    {
      href: isHomePage ? "#certifications" : `/${locale}#certifications`,
      label: isRtl ? "الشهادات" : "CERTIFICATIONS",
    },
    {
      href: isHomePage ? "#contact" : `/${locale}#contact`,
      label: isRtl ? "تواصل معي" : "CONTACT",
    },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 inset-x-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/95 dark:bg-[#0B0B0C]/95 backdrop-blur-md border-b border-black/10 dark:border-white/10 shadow-sm"
          : "bg-white dark:bg-[#0B0B0C] border-b border-black/5 dark:border-white/5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
        {/* Left: Brand Monogram & Wordmark */}
        <AsLogo locale={locale} showWordmark={true} />

        {/* Center: Desktop Navigation Links */}
        <nav
          className="hidden lg:flex items-center gap-7 xl:gap-9 text-[12px] font-sans font-bold tracking-[0.16em] uppercase text-zinc-800 dark:text-zinc-200"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-gold-dark dark:hover:text-gold-light transition-colors duration-200 py-1"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Language Switcher, Theme Toggle & CTA */}
        <div className="flex items-center gap-3 sm:gap-4">
          <LanguageSwitcher currentLocale={locale} />
          <ThemeToggle />

          {/* Desktop Primary CTA Button */}
          <Link
            href={isHomePage ? "#contact" : `/${locale}#contact`}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#C59B27] hover:bg-[#B38A1F] text-white text-[12px] font-bold tracking-[0.12em] uppercase shadow-sm transition-all duration-200 active:scale-95"
          >
            {isRtl ? "لنبدأ البناء" : "LET'S BUILD"}
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/5 text-zinc-900 dark:text-white transition-colors"
            aria-label={mobileMenuOpen ? dict.nav.menuClose : dict.nav.menuOpen}
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
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
                width="18"
                height="18"
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

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-black/10 dark:border-white/10 bg-white dark:bg-[#0B0B0C] px-5 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200 shadow-xl">
          <nav className="flex flex-col space-y-3 text-sm font-bold tracking-[0.14em] uppercase text-zinc-800 dark:text-zinc-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-black/5 dark:border-white/5 hover:text-gold-dark dark:hover:text-gold-light transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pt-2">
            <Link
              href={isHomePage ? "#contact" : `/${locale}#contact`}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center py-3 rounded-lg bg-[#C59B27] hover:bg-[#B38A1F] text-white text-xs font-bold tracking-widest uppercase shadow-md"
            >
              {isRtl ? "لنبدأ البناء" : "LET'S BUILD"}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
