"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AsMonogram } from "@/components/ui/AsLogo";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export interface NavbarProps {
  locale: "en" | "ar";
  scrollSpyTargets?: string[];
}

export function Navbar({ locale, scrollSpyTargets = [] }: NavbarProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const navRef = useRef<HTMLElement>(null);
  const sectionRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // Find active section based on scroll position
      const navbarHeight = 73;
      let currentSection = "hero";

      scrollSpyTargets.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= navbarHeight + 100 && rect.bottom >= navbarHeight + 100) {
            currentSection = id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollSpyTargets]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 73;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
  };

  const isDark = typeof document !== "undefined" ? document.documentElement.classList.contains("dark") : true;
  const goldColor = isDark ? "#D9B567" : "#BE943F";
  const textColor = isDark ? "#FDFBF7" : "#1A1A1C";
  const mutedColor = isDark ? "#9A9893" : "#6B6B6E";
  const bgColor = isDark ? "rgba(10, 10, 11, 0.9)" : "rgba(253, 251, 247, 0.9)";
  const borderColor = isDark ? "rgba(217, 181, 103, 0.2)" : "rgba(190, 148, 63, 0.2)";

  const sections = siteConfig.nav.sections;

  return (
    <nav
      ref={navRef}
      className={cn(
        "fixed top-0 left-0 right-0 z-[200]",
        "transition-all duration-200 ease-out",
        isScrolled
          ? "bg-[rgba(10,10,11,0.9)] dark:bg-[rgba(10,10,11,0.9)] backdrop-blur-md border-b border-gold/20 dark:border-gold/20 shadow-lg"
          : "bg-transparent border-b border-transparent"
      )}
      style={{
        height: "73px",
        backgroundColor: isScrolled ? bgColor : "transparent",
        borderBottomColor: isScrolled ? borderColor : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(12px)" : "none",
      }}
      role="navigation"
      aria-label={locale === "ar" ? "التنقل الرئيسي" : "Main navigation"}
    >
      <div className="container-master" style={{ height: "100%" }}>
        <div className="flex items-center justify-between h-full">
          {/* Left: Brand / AS Monogram */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-gold-subtle transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dark dark:focus-visible:ring-offset-dark"
            aria-label={locale === "ar" ? "الذهاب للرئيسية" : "Go to homepage"}
          >
            <AsMonogram size={36} variant="navbar" locale={locale} />
            <span className="font-display font-bold text-xl tracking-tight hidden sm:block" style={{ color: textColor }}>
              {locale === "ar" ? "عَبْدُالْغَنِيُّ" : "ABDULGHANI"}
            </span>
          </Link>

          {/* Center: Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium tracking-wider uppercase transition-colors duration-200",
                  "rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dark dark:focus-visible:ring-offset-dark",
                  activeSection === section.id
                    ? "text-gold"
                    : "text-text-muted hover:text-text-primary"
                )}
                style={{
                  color: activeSection === section.id ? goldColor : mutedColor,
                }}
                aria-current={activeSection === section.id ? "page" : undefined}
              >
                {section.label[locale]}
                {activeSection === section.id && (
                  <span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full"
                    style={{ backgroundColor: goldColor }}
                    aria-hidden="true"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={() => {
                const newLocale = locale === "en" ? "ar" : "en";
                const currentPath = pathname.replace(/^\/[a-z]{2}/, "");
                window.location.href = `/${newLocale}${currentPath}`;
              }}
              className={cn(
                "hidden sm:flex items-center gap-2 px-3 py-2 text-xs font-semibold tracking-widest uppercase",
                "rounded-md transition-all duration-200 ease-out",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dark dark:focus-visible:ring-offset-dark",
                locale === "en"
                  ? "text-text-muted hover:text-gold border border-transparent hover:border-gold/50"
                  : "text-gold bg-gold-subtle border border-gold/30"
              )}
              style={{
                color: locale === "en" ? mutedColor : goldColor,
                backgroundColor: locale === "en" ? "transparent" : "rgba(190, 148, 63, 0.1)",
                borderColor: locale === "en" ? "transparent" : "rgba(190, 148, 63, 0.3)",
              }}
              aria-label={locale === "ar" ? "التبديل للإنجليزية" : "Switch to Arabic"}
            >
              {locale === "en" ? "العربية" : "EN"}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                "md:hidden p-2 rounded-md",
                "transition-colors duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dark dark:focus-visible:ring-offset-dark"
              )}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? (locale === "ar" ? "إغلاق القائمة" : "Close menu") : (locale === "ar" ? "فتح القائمة" : "Open menu")}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
                style={{ color: textColor }}
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* LET'S BUILD Button (Desktop) */}
            <Link
              href={`/${locale}#cta`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("cta");
              }}
              className={cn(
                "hidden lg:inline-flex items-center gap-2 px-5 py-2.5",
                "font-sans font-bold text-sm tracking-widest uppercase",
                "rounded-md transition-all duration-200 ease-out",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dark dark:focus-visible:ring-offset-dark"
              )}
              style={{
                backgroundColor: goldColor,
                borderColor: goldColor,
                color: "#0A0A0B",
                borderWidth: "2px",
                borderStyle: "solid",
              }}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLElement;
                const hoverColor = isDark ? "#D9B567" : "#A87F30";
                target.style.backgroundColor = hoverColor;
                target.style.borderColor = hoverColor;
                target.style.transform = "translateY(-2px)";
                target.style.boxShadow = isDark
                  ? "0 0 0 1px rgba(217, 181, 103, 0.6), 0 8px 32px rgba(217, 181, 103, 0.25)"
                  : "0 0 0 1px rgba(190, 148, 63, 0.5), 0 8px 32px rgba(190, 148, 63, 0.2)";
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.backgroundColor = goldColor;
                target.style.borderColor = goldColor;
                target.style.transform = "translateY(0)";
                target.style.boxShadow = "none";
              }}
            >
              {siteConfig.nav.ctaButton[locale]}
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden overflow-hidden transition-all duration-300 ease-out"
            style={{ maxHeight: "500px" }}
            role="navigation"
            aria-label={locale === "ar" ? "قائمة التنقل المحمولة" : "Mobile navigation menu"}
          >
            <div className="py-4 border-t border-gold/20 dark:border-gold/20" style={{ borderColor: borderColor }}>
              <div className="flex flex-col gap-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={cn(
                      "w-full text-left px-4 py-3 text-sm font-medium tracking-wider uppercase",
                      "rounded-md transition-colors duration-200",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dark dark:focus-visible:ring-offset-dark",
                      activeSection === section.id
                        ? "text-gold bg-gold-subtle"
                        : "text-text-muted hover:text-text-primary hover:bg-surface-overlay"
                    )}
                    style={{
                      color: activeSection === section.id ? goldColor : mutedColor,
                      backgroundColor: activeSection === section.id ? "rgba(190, 148, 63, 0.1)" : "transparent",
                    }}
                    aria-current={activeSection === section.id ? "page" : undefined}
                  >
                    {section.label[locale]}
                  </button>
                ))}
                <div className="pt-2 border-t border-gold/10 dark:border-gold/10" style={{ borderColor: borderColor }} />
                {/* Language switcher in mobile menu */}
                <button
                  onClick={() => {
                    const newLocale = locale === "en" ? "ar" : "en";
                    const currentPath = pathname.replace(/^\/[a-z]{2}/, "");
                    window.location.href = `/${newLocale}${currentPath}`;
                  }}
                  className="w-full text-left px-4 py-3 text-sm font-semibold tracking-widest uppercase text-text-muted hover:text-gold transition-colors"
                >
                  {locale === "en" ? "العربية" : "ENGLISH"}
                </button>
                {/* LET'S BUILD in mobile menu */}
                <button
                  onClick={() => scrollToSection("cta")}
                  className="w-full mt-2 px-5 py-3 font-sans font-bold text-sm tracking-widest uppercase rounded-md transition-all duration-200"
                  style={{
                    backgroundColor: goldColor,
                    borderColor: goldColor,
                    color: "#0A0A0B",
                    borderWidth: "2px",
                    borderStyle: "solid",
                  }}
                  onMouseEnter={(e) => {
                    const target = e.currentTarget as HTMLElement;
                    const hoverColor = isDark ? "#D9B567" : "#A87F30";
                    target.style.backgroundColor = hoverColor;
                    target.style.borderColor = hoverColor;
                  }}
                  onMouseLeave={(e) => {
                    const target = e.currentTarget as HTMLElement;
                    target.style.backgroundColor = goldColor;
                    target.style.borderColor = goldColor;
                  }}
                >
                  {siteConfig.nav.ctaButton[locale]}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}