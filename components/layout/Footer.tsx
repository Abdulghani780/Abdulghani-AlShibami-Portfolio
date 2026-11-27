"use client";

import React, { useState, useEffect } from "react";
import { AsMonogram as AsLogo } from "@/components/ui/AsLogo";
import { siteConfig } from "@/config/site";

interface FooterProps {
  locale: "en" | "ar";
}

export function Footer({ locale }: FooterProps) {
  const isRtl = locale === "ar";
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const root = document.documentElement;
    const checkTheme = () => setTheme(root.classList.contains("dark") ? "dark" : "light");
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const content = {
    en: {
      tagline: "Engineering elegant solutions for complex problems.",
      navigation: "NAVIGATION",
      social: "CONNECT",
      legal: "LEGAL",
      credit: "Built with precision by Abdulghani Al-Shibami. No templates. No compromises.",
      rights: "All rights reserved.",
    },
    ar: {
      tagline: "هندسة حلول أنيقة للمشاكل المعقدة.",
      navigation: "التنقل",
      social: "تواصل",
      legal: "قانوني",
      credit: "بُني بدقة بواسطة عبدالغني الشيبة. لا قوالب. لا مساومات.",
      rights: "جميع الحقوق محفوظة.",
    },
  }[locale];

  const goldColor = theme === "dark" ? "#D9B567" : "#BE943F";
  const textPrimary = theme === "dark" ? "#FDFBF7" : "#1A1A1C";
  const textSecondary = theme === "dark" ? "#E4E2DD" : "#2D2D2F";
  const textMuted = theme === "dark" ? "#9A9893" : "#6B6B6E";
  const bgColor = theme === "dark" ? "#0A0A0B" : "#FDFBF7";
  const lineColor = theme === "dark" ? "#2A2A2C" : "#E8E4DD";
  const lineGold = theme === "dark" ? "#D9B567" : "#BE943F";

  // Social links with SVG icons
  const socialLinks: Array<{ name: string; href: string; icon: React.ReactElement }> = [
    {
      name: "GitHub",
      href: siteConfig.social.github,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: siteConfig.social.linkedin,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: siteConfig.social.twitter,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "Email",
      href: `mailto:${siteConfig.contact.email}`,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
  ];

  const navLinks = [
    { name: locale === "en" ? "Home" : "الرئيسية", href: "#" },
    { name: locale === "en" ? "About" : "من أنا", href: "#about" },
    { name: locale === "en" ? "AI Lab" : "مختبر الذكاء الاصطناعي", href: "#ai-lab" },
    { name: locale === "en" ? "Projects" : "المشاريع", href: "#projects" },
    { name: locale === "en" ? "Case Study" : "دراسة الحالة", href: "#case-study" },
    { name: locale === "en" ? "Arsenal" : "الترسانة التقنية", href: "#arsenal" },
    { name: locale === "en" ? "Method" : "المنهجية", href: "#method" },
    { name: locale === "en" ? "Education" : "التعليم", href: "#education" },
    { name: locale === "en" ? "Public" : "في العلن", href: "#public" },
    { name: locale === "en" ? "Contact" : "تواصل", href: "#contact" },
  ];

  return (
    <footer
      className="relative"
      style={{
        backgroundColor: bgColor,
        paddingTop: "80px",
        paddingBottom: "40px",
        borderTop: `1px solid ${lineColor}`,
      }}
      role="contentinfo"
    >
      {/* Top decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1440px] h-px pointer-events-none" aria-hidden="true">
        <div className="w-full h-full" style={{ background: `linear-gradient(90deg, transparent 0%, ${lineGold} 50%, transparent 100%)`, opacity: 0.4 }} />
      </div>

      {/* Background ornaments */}
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
        <svg className="absolute top-20 left-20 w-32 h-32" viewBox="0 0 100 100" style={{ opacity: 0.15 }}>
          <circle cx="50" cy="50" r="45" fill="none" stroke={goldColor} strokeWidth="1" strokeDasharray="8 4" />
          <circle cx="50" cy="50" r="30" fill="none" stroke={goldColor} strokeWidth="0.5" />
        </svg>
        <svg className="absolute bottom-20 right-20 w-40 h-40" viewBox="0 0 120 120" style={{ opacity: 0.1 }}>
          <rect x="10" y="10" width="100" height="100" rx="4" fill="none" stroke={goldColor} strokeWidth="0.5" />
          <circle cx="35" cy="35" r="4" fill={goldColor} opacity="0.6" />
          <circle cx="85" cy="35" r="4" fill={goldColor} opacity="0.6" />
          <circle cx="35" cy="85" r="4" fill={goldColor} opacity="0.6" />
          <circle cx="85" cy="85" r="4" fill={goldColor} opacity="0.6" />
          <circle cx="60" cy="60" r="5" fill={goldColor} opacity="0.8" />
          <line x1="35" y1="35" x2="60" y2="60" stroke={goldColor} strokeWidth="0.5" opacity="0.4" />
          <line x1="85" y1="35" x2="60" y2="60" stroke={goldColor} strokeWidth="0.5" opacity="0.4" />
          <line x1="35" y1="85" x2="60" y2="60" stroke={goldColor} strokeWidth="0.5" opacity="0.4" />
          <line x1="85" y1="85" x2="60" y2="60" stroke={goldColor} strokeWidth="0.5" opacity="0.4" />
        </svg>
      </div>

      <div className="container-master relative z-10">
        {/* Main Grid: Logo/Tagline | Navigation | Social | Legal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
          {/* Column 1: Logo + Tagline */}
          <div className="lg:col-span-1">
            <div className="flex items-center justify-center md:justify-start mb-6">
              <AsLogo size={56} variant="footer" />
            </div>
            <p className="text-sm leading-relaxed" style={{ color: textMuted }}>
              {content.tagline}
            </p>
          </div>

          {/* Column 2: Navigation */}
          <nav aria-label={content.navigation}>
            <h3 className="font-sans font-medium tracking-widest uppercase text-xs mb-5" style={{ color: textMuted, letterSpacing: "0.12em" }}>
              {content.navigation}
            </h3>
            <ul className="space-y-3" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-mono text-sm transition-colors hover:text-gold"
                    style={{ color: textSecondary }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3: Social */}
          <div>
            <h3 className="font-sans font-medium tracking-widest uppercase text-xs mb-5" style={{ color: textMuted, letterSpacing: "0.12em" }}>
              {content.social}
            </h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? "_self" : "_blank"}
                  rel={social.href.startsWith("mailto") ? "" : "noopener noreferrer"}
                  className="group w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200"
                  style={{
                    backgroundColor: `rgba(190, 148, 63, 0.08)`,
                    border: `1px solid ${lineColor}`,
                    color: textMuted,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = `rgba(190, 148, 63, 0.15)`;
                    e.currentTarget.style.borderColor = goldColor;
                    e.currentTarget.style.color = goldColor;
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = `rgba(190, 148, 63, 0.08)`;
                    e.currentTarget.style.borderColor = lineColor;
                    e.currentTarget.style.color = textMuted;
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                  aria-label={social.name}
                >
                  {React.isValidElement(social.icon) ? React.cloneElement(social.icon as React.ReactElement<any>, { width: "20", height: "20" }) : social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h3 className="font-sans font-medium tracking-widest uppercase text-xs mb-5" style={{ color: textMuted, letterSpacing: "0.12em" }}>
              {content.legal}
            </h3>
            <ul className="space-y-3 text-sm" style={{ color: textMuted }}>
              <li>© {new Date().getFullYear()} {content.rights}</li>
              <li>
                <a href="#privacy" className="hover:text-gold transition-colors">
                  {locale === "en" ? "Privacy Policy" : "سياسة الخصوصية"}
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-gold transition-colors">
                  {locale === "en" ? "Terms of Service" : "شروط الخدمة"}
                </a>
              </li>
              <li>
                <a href="#cookies" className="hover:text-gold transition-colors">
                  {locale === "en" ? "Cookie Policy" : "سياسة ملفات تعريف الارتباط"}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="relative mb-8" style={{ borderTop: `1px solid ${lineColor}` }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px" style={{ background: `linear-gradient(90deg, transparent 0%, ${lineGold} 50%, transparent 100%)`, opacity: 0.6 }} />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full" style={{ backgroundColor: goldColor }} />
        </div>

        {/* Credit Line */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="font-mono text-xs" style={{ color: textMuted }}>
            {content.credit}
          </p>
          {/* Language switcher in footer */}
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-muted">{locale.toUpperCase()}</span>
            <div className="w-1 h-1 rounded-full" style={{ backgroundColor: goldColor }} />
            <span className="font-mono text-xs text-muted">{locale === "en" ? "AR" : "EN"}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}