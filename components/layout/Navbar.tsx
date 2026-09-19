"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Locale, Dictionary } from "@/lib/i18n/dictionaries";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: `/${locale}/projects`, label: dict.nav.projects },
    { href: `/${locale}/projects/campus-it-tracker/demo`, label: dict.nav.simulation },
    { href: `/${locale}#competencies`, label: dict.nav.skills },
    { href: `/${locale}#telemetry`, label: dict.nav.specifications },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 pt-3 sm:pt-4 px-3 sm:px-6 pointer-events-none transition-all duration-300">
      <div
        className={cn(
          "w-full max-w-5xl mx-auto rounded-2xl pointer-events-auto transition-all duration-300",
          "border backdrop-blur-glass px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between",
          isScrolled
            ? "bg-surface/90 dark:bg-obsidian-900/90 border-gold/30 shadow-2xl dark:shadow-[0_10px_35px_-5px_rgba(0,0,0,0.65)]"
            : "bg-surface/75 dark:bg-obsidian-900/75 border-glass-border shadow-lg dark:shadow-[0_8px_30px_rgba(0,0,0,0.45)]"
        )}
      >
        {/* Brand Identity & Monogram */}
        <Link
          href={`/${locale}`}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <span className="w-8 h-8 rounded-lg border border-gold/60 bg-gold/10 flex items-center justify-center font-serif text-sm text-gold font-bold transition-all duration-200 group-hover:border-gold group-hover:bg-gold/20 group-hover:shadow-[0_0_12px_rgba(201,162,39,0.45)] shrink-0">
            AS
          </span>
          <div className="flex flex-col">
            <span className="font-serif text-sm tracking-wide text-content-primary font-semibold group-hover:text-gold transition-colors">
              {dict.nav.brand}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-content-muted">
              {"// "}{dict.nav.role}
            </span>
          </div>
        </Link>

        {/* Center Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-mono tracking-wider uppercase">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-content-secondary hover:text-gold transition-colors relative py-1 hover:drop-shadow-[0_0_8px_rgba(201,162,39,0.3)]"
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
            <Button
              size="sm"
              variant="primary"
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {dict.nav.contact}
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center w-8 h-8 rounded-lg border border-hairline bg-surface/80 hover:border-gold text-content-primary transition-colors cursor-pointer"
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

      {/* Mobile Glass Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden w-full max-w-5xl mx-auto mt-2 rounded-2xl border border-glass-border bg-surface/95 dark:bg-obsidian-900/95 backdrop-blur-2xl p-6 space-y-5 shadow-2xl pointer-events-auto animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 font-mono text-xs uppercase tracking-wider">
            {navLinks.map((link, idx) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-content-primary hover:text-gold py-2.5 border-b border-hairline/40 transition-colors"
              >
                <span>{link.label}</span>
                <span className="text-[10px] text-gold font-mono">0{idx + 1}</span>
              </Link>
            ))}
          </nav>

          <div className="pt-2">
            <Button
              className="w-full"
              variant="primary"
              onClick={() => {
                setMobileMenuOpen(false);
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {dict.nav.contact}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
