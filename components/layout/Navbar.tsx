"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Locale, Dictionary } from "@/lib/i18n/dictionaries";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Button } from "@/components/ui/Button";

export function Navbar({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: `/${locale}`, label: dict.nav.projects },
    { href: `/${locale}/projects/auraledger/demo`, label: dict.nav.simulation },
    { href: `/${locale}#competencies`, label: dict.nav.skills },
    { href: `/${locale}#telemetry`, label: dict.nav.specifications },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-hairline bg-canvas/85 backdrop-blur-md transition-colors duration-200">
      <div className="w-full max-w-arch mx-auto px-5 sm:px-8 md:px-12 lg:px-16 h-16 flex items-center justify-between">
        {/* Brand & Monogram */}
        <Link
          href={`/${locale}`}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <span className="w-8 h-8 border border-gold/60 bg-gold/5 flex items-center justify-center font-serif text-sm text-gold font-bold transition-all duration-200 group-hover:border-gold group-hover:bg-gold/15 group-hover:shadow-[0_0_12px_rgba(212,175,55,0.4)]">
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

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-wider uppercase">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-content-secondary hover:text-gold transition-colors relative py-1"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-2.5">
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
            className="md:hidden inline-flex items-center justify-center w-9 h-9 border border-hairline bg-surface hover:border-gold text-content-primary transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? dict.nav.menuClose : dict.nav.menuOpen}
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
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
                width="16"
                height="16"
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

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-hairline bg-canvas/98 backdrop-blur-xl px-6 py-8 space-y-6 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-4 font-mono text-sm uppercase tracking-wider">
            {navLinks.map((link, idx) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-content-primary hover:text-gold py-2 border-b border-hairline/40 transition-colors"
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
