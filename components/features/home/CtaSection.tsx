"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { AsMonogram as AsLogo } from "@/components/ui/AsLogo";

interface CtaSectionProps {
  locale: "en" | "ar";
}

export function CtaSection({ locale }: CtaSectionProps) {
  const isRtl = locale === "ar";
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const content = {
    en: {
      headline: "LET'S BUILD SOMETHING EXTRAORDINARY",
      subheadline: "You have a vision. I have the architecture. Let's turn complex problems into elegant, scalable solutions.",
      buttons: {
        primary: "START A PROJECT",
        secondary: "VIEW MY WORK",
        tertiary: "DOWNLOAD CV",
      },
      benefits: [
        "Direct access — no account managers, no handoffs",
        "Production-ready from day one — observability, security, scale built in",
        "Long-term partnership — I stay for the lifecycle, not just the launch",
      ],
      imageAlt: "Yemen landscape — where the journey began",
    },
    ar: {
      headline: "لنبني شيئًا استثنائيًا",
      subheadline: "لديك رؤية. لديّ العمارة. لنحول المشاكل المعقدة إلى حلول أنيقة وقابلة للتوسع.",
      buttons: {
        primary: "ابدأ مشروعًا",
        secondary: "اعرض أعمالي",
        tertiary: "حمل السيرة الذاتية",
      },
      benefits: [
        "وصول مباشر — لا مديرو حسابات، لا تسليمات",
        "جاهز للإنتاج من اليوم الأول — مراقبة، أمان، توسع مدمجون",
        "شراكة طويلة الأمد — أبقى للدورة الكاملة، ليس فقط للإطلاق",
      ],
      imageAlt: "منظر اليمن — حيث بدأت الرحلة",
    },
  }[locale];

  const goldColor = theme === "dark" ? "#D9B567" : "#BE943F";
  const goldHover = theme === "dark" ? "#D9B567" : "#A87F30";
  const textPrimary = theme === "dark" ? "#FDFBF7" : "#1A1A1C";
  const textSecondary = theme === "dark" ? "#E4E2DD" : "#2D2D2F";
  const textMuted = theme === "dark" ? "#9A9893" : "#6B6B6E";
  const bgColor = theme === "dark" ? "#0A0A0B" : "#FDFBF7";
  const surfaceColor = theme === "dark" ? "#121213" : "#FFFFFF";
  const lineColor = theme === "dark" ? "#2A2A2C" : "#E8E4DD";
  const lineGold = theme === "dark" ? "#D9B567" : "#BE943F";

  return (
    <section
      id="contact"
      className="section-master relative"
      style={{
        minHeight: "600px",
        backgroundColor: bgColor,
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
      aria-labelledby="contact-headline"
    >
      {/* Background Yemen Image with Gold Fade */}
      <div className="absolute inset-0 -z-20 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/optimized/showcase/shibam-skyline-800w.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: theme === "dark" ? 0.15 : 0.1,
            maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
          }}
        />
        {/* Gold radial gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 50% 30%, ${goldColor}33 0%, transparent 70%)`,
            opacity: 0.4,
          }}
        />
      </div>

      {/* Decorative ornaments */}
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
        <svg className="absolute top-20 left-20 w-32 h-32" viewBox="0 0 100 100" style={{ opacity: 0.2 }}>
          <circle cx="50" cy="50" r="45" fill="none" stroke={goldColor} strokeWidth="1" strokeDasharray="8 4" />
          <circle cx="50" cy="50" r="30" fill="none" stroke={goldColor} strokeWidth="0.5" />
        </svg>
        <svg className="absolute bottom-20 right-20 w-40 h-40" viewBox="0 0 120 120" style={{ opacity: 0.15 }}>
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
        {/* Content */}
        <div
          className="max-w-3xl mx-auto text-center"
          style={{
            opacity: 1,
            transform: "translateY(0)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* AS Logo */}
          <div className="inline-flex items-center justify-center mb-8">
            <AsLogo size={80} variant="default" />
          </div>

          {/* Headline */}
          <h2 id="contact-headline" className="section-headline mb-6" style={{ maxWidth: "800px" }}>
            {content.headline}
          </h2>

          {/* Subheadline */}
          <p className="body-lg mb-12" style={{ color: textSecondary, maxWidth: "640px", margin: "0 auto 3rem" }}>
            {content.subheadline}
          </p>

          {/* Three Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            {/* Primary: Start a Project */}
            <a
              href="#"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-sans font-medium text-base"
              style={{
                backgroundColor: goldColor,
                color: theme === "dark" ? "#0A0A0B" : "#FFFFFF",
                border: `2px solid ${goldColor}`,
                transition: "all 200ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = goldHover;
                e.currentTarget.style.borderColor = goldHover;
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = `0 12px 40px ${goldColor}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = goldColor;
                e.currentTarget.style.borderColor = goldColor;
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <span>{content.buttons.primary}</span>
              <svg className="w-5 h-5 rtl-flip" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            {/* Secondary: View My Work */}
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-sans font-medium text-base"
              style={{
                backgroundColor: "transparent",
                color: textPrimary,
                border: `2px solid ${lineColor}`,
                transition: "all 200ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = goldColor;
                e.currentTarget.style.color = goldColor;
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = lineColor;
                e.currentTarget.style.color = textPrimary;
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span>{content.buttons.secondary}</span>
              <svg className="w-5 h-5 rtl-flip" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>

            {/* Tertiary: Download CV */}
            <a
              href="/assets/cv.pdf"
              download="Abdulghani_AlShibami_CV.pdf"
              className="group inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-sans font-medium text-base"
              style={{
                backgroundColor: "transparent",
                color: textMuted,
                border: `2px solid ${lineColor}`,
                transition: "all 200ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = textMuted;
                e.currentTarget.style.color = textPrimary;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = lineColor;
                e.currentTarget.style.color = textMuted;
              }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>{content.buttons.tertiary}</span>
            </a>
          </div>

          {/* Gold Divider */}
          <div className="w-48 mx-auto mb-12 relative" style={{ height: "2px" }}>
            <div className="absolute top-0 left-0 right-0 h-full" style={{ background: `linear-gradient(90deg, transparent 0%, ${lineGold} 50%, transparent 100%)`, opacity: 0.6 }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full" style={{ backgroundColor: goldColor }} />
          </div>

          {/* Three Benefit Lines */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left" style={{ direction: isRtl ? "rtl" : "ltr" }}>
            {content.benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-xl transition-all duration-300"
                style={{
                  backgroundColor: `rgba(190, 148, 63, 0.05)`,
                  border: `1px solid ${lineGold}30`,
                  opacity: 1,
                  transform: "translateY(0)",
                  transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${400 + index * 100}ms`,
                }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `rgba(190, 148, 63, 0.15)`, border: `1px solid ${lineGold}` }}>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke={goldColor} strokeWidth="2" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: textSecondary }}>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gold divider at bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1440px] h-px pointer-events-none" aria-hidden="true">
        <div className="w-full h-full" style={{ background: `linear-gradient(90deg, transparent 0%, ${lineGold} 50%, transparent 100%)`, opacity: 0.4 }} />
      </div>
    </section>
  );
}