"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { AsLogoWithWordmark } from "@/components/ui/AsLogo";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  locale: "en" | "ar";
}

export function HeroSection({ locale }: HeroSectionProps) {
  const isRtl = locale === "ar";
  const [isVisible, setIsVisible] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);

  // Detect theme
  useEffect(() => {
    const root = document.documentElement;
    const checkTheme = () => {
      setTheme(root.classList.contains("dark") ? "dark" : "light");
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  // Canvas animation for background particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 25 : prefersReducedMotion ? 0 : 60;

    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
    }> = [];

    const goldColor = theme === "dark" ? "rgba(217, 181, 103, " : "rgba(190, 148, 63, ";

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx!.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.offsetWidth,
          y: Math.random() * canvas.offsetHeight,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.3 + 0.1,
        });
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.offsetWidth;
        if (p.x > canvas.offsetWidth) p.x = 0;
        if (p.y < 0) p.y = canvas.offsetHeight;
        if (p.y > canvas.offsetHeight) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${goldColor}${p.opacity})`;
        ctx.fill();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `${goldColor}${0.05 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    resize();
    initParticles();
    if (!prefersReducedMotion) animate();

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [theme]);

  // Intersection Observer for scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const heroElement = document.getElementById("hero");
    if (heroElement) observer.observe(heroElement);
    return () => observer.disconnect();
  }, []);

  // Hero content from locale
  const content = {
    en: {
      greeting: "HELLO, I'M",
      name: "ABDULGHANI AL-SHIBAMI",
      roleLine: "AUTONOMOUS SYSTEMS ARCHITECT & AI ENGINEERING LEADER",
      subtitle: "I design high-throughput distributed state machines, autonomous multi-agent systems, and low-latency infrastructure that operates at the edge of what's possible.",
      ctaPrimary: "EXPLORE MY WORK",
      ctaSecondary: "VIEW RESUME",
      ctaTertiary: "GET IN TOUCH",
      verified: "Verified Engineer",
      coordinates: "15.3694° N, 44.1910° E",
    },
    ar: {
      greeting: "مرحباً، أنا",
      name: "عَبْدُالْغَنِيُّ الْشَّبَامِي",
      roleLine: "مُصَمِّمُ الْأَنْظِمَةِ الْمُسْتَقِلَّةِ وَقَائِدُ هَنْدَسَةِ الذَّكَاءِ الْاِصْطِنَاعِي",
      subtitle: "أصمم آلات الحالة الموزعة عالية الإنتاجية، والأنظمة متعددة الوكلاء المستقلة، والبنية التحتية منخفضة الكمون التي تعمل عند حدود الممكن.",
      ctaPrimary: "استكشاف أعمالي",
      ctaSecondary: "عرض السيرة الذاتية",
      ctaTertiary: "تواصل معي",
      verified: "مهندس معتمد",
      coordinates: "١٥.٣٦٩٤° ش، ٤٤.١٩١٠° ق",
    },
  }[locale];

  const goldColor = theme === "dark" ? "#D9B567" : "#BE943F";
  const goldHover = theme === "dark" ? "#D9B567" : "#A87F30";
  const textPrimary = theme === "dark" ? "#FDFBF7" : "#1A1A1C";
  const textSecondary = theme === "dark" ? "#E4E2DD" : "#2D2D2F";
  const textMuted = theme === "dark" ? "#9A9893" : "#6B6B6E";
  const bgColor = theme === "dark" ? "#0A0A0B" : "#FDFBF7";
  const lineColor = theme === "dark" ? "rgba(217, 181, 103, 0.3)" : "rgba(190, 148, 63, 0.3)";
  const lineGold = theme === "dark" ? "#D9B567" : "#BE943F";

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
  };

  return (
    <section
      id="hero"
      className="section-master relative min-h-screen flex items-center overflow-hidden"
      style={{
        minHeight: "900px",
        backgroundColor: bgColor,
      }}
      aria-labelledby="hero-headline"
    >
      {/* Background Canvas */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <canvas
          ref={canvasRef}
          className="w-full h-full"
          style={{ width: "100%", height: "100%" }}
          aria-hidden="true"
        />
        {/* Grain overlay */}
        <div className="grain-overlay" aria-hidden="true" />
        {/* Radial gradient mesh */}
        <div
          className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[120%] h-[120%] rounded-full pointer-events-none"
          style={{
            background: theme === "dark"
              ? "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(217, 181, 103, 0.08), transparent)"
              : "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(190, 148, 63, 0.06), transparent)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* SVG Ornaments - Circuit Circles */}
      <svg
        className="absolute top-20 left-20 w-32 h-32 pointer-events-none"
        viewBox="0 0 100 100"
        aria-hidden="true"
        style={{ opacity: 0.4 }}
      >
        <circle cx="50" cy="50" r="45" fill="none" stroke={goldColor} strokeWidth="1" strokeDasharray="8 4" />
        <circle cx="50" cy="50" r="35" fill="none" stroke={goldColor} strokeWidth="0.5" strokeDasharray="4 8" />
        <circle cx="50" cy="50" r="20" fill="none" stroke={goldColor} strokeWidth="0.5" />
        <circle cx="50" cy="50" r="8" fill={goldColor} opacity="0.3" />
      </svg>

      {/* SVG Ornament - Vertical Line with Nodes */}
      <svg
        className="absolute top-1/2 left-[88px] -translate-y-1/2 w-1 h-[60%] pointer-events-none"
        viewBox="0 0 2 600"
        aria-hidden="true"
        style={{ opacity: 0.5 }}
      >
        <line x1="1" y1="0" x2="1" y2="600" stroke={goldColor} strokeWidth="1" strokeDasharray="8 12" />
        <circle cx="1" cy="100" r="3" fill={goldColor} opacity="0.6" />
        <circle cx="1" cy="250" r="2" fill={goldColor} opacity="0.4" />
        <circle cx="1" cy="400" r="3" fill={goldColor} opacity="0.6" />
        <circle cx="1" cy="550" r="2" fill={goldColor} opacity="0.4" />
      </svg>

      {/* SVG Ornament - Neural Network Box (top right) */}
      <svg
        className="absolute top-24 right-24 w-40 h-40 pointer-events-none"
        viewBox="0 0 120 120"
        aria-hidden="true"
        style={{ opacity: 0.3 }}
      >
        <rect x="10" y="10" width="100" height="100" rx="4" fill="none" stroke={goldColor} strokeWidth="1" />
        <circle cx="35" cy="35" r="4" fill={goldColor} opacity="0.7" />
        <circle cx="85" cy="35" r="4" fill={goldColor} opacity="0.7" />
        <circle cx="35" cy="85" r="4" fill={goldColor} opacity="0.7" />
        <circle cx="85" cy="85" r="4" fill={goldColor} opacity="0.7" />
        <circle cx="60" cy="60" r="5" fill={goldColor} opacity="0.9" />
        <line x1="35" y1="35" x2="60" y2="60" stroke={goldColor} strokeWidth="0.5" opacity="0.5" />
        <line x1="85" y1="35" x2="60" y2="60" stroke={goldColor} strokeWidth="0.5" opacity="0.5" />
        <line x1="35" y1="85" x2="60" y2="60" stroke={goldColor} strokeWidth="0.5" opacity="0.5" />
        <line x1="85" y1="85" x2="60" y2="60" stroke={goldColor} strokeWidth="0.5" opacity="0.5" />
      </svg>

      {/* Main Content */}
      <div className="container-master relative z-10" style={{ paddingTop: "120px", paddingBottom: "80px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Text Content (col-span-7) */}
          <div
            className={cn(
              "lg:col-span-7 space-y-8",
              isRtl ? "text-right" : "text-left"
            )}
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            {/* Greeting */}
            <div className="flex items-center gap-4" style={{ justifyContent: isRtl ? "flex-end" : "flex-start" }}>
              <span
                className="font-sans font-medium tracking-widest uppercase text-sm"
                style={{
                  color: goldColor,
                  letterSpacing: "0.12em",
                }}
              >
                {content.greeting}
              </span>
              <div
                className="w-24 h-px"
                style={{ background: `linear-gradient(90deg, ${goldColor} 0%, transparent 100%)` }}
              />
            </div>

            {/* Name */}
            <h1
              id="hero-headline"
              className="font-display font-bold tracking-tight leading-[0.95]"
              style={{
                fontSize: "clamp(44px, 6vw, 72px)",
                lineHeight: 0.95,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
                color: textPrimary,
              }}
            >
              {content.name}
            </h1>

            {/* Gold Role Line */}
            <div className="gold-shimmer-text font-display font-semibold tracking-tight leading-tight" style={{ fontSize: "clamp(20px, 2.5vw, 28px)", textTransform: "uppercase" }}>
              {content.roleLine}
            </div>

            {/* Subtitle */}
            <p className="body-lg max-w-2xl" style={{ color: textSecondary }}>
              {content.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4" style={{ justifyContent: isRtl ? "flex-end" : "flex-start" }}>
              <button
                onClick={() => scrollToSection("projects")}
                className="btn-primary"
                style={{
                  backgroundColor: goldColor,
                  borderColor: goldColor,
                  color: "#0A0A0B",
                }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget as HTMLElement;
                  target.style.backgroundColor = goldHover;
                  target.style.borderColor = goldHover;
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget as HTMLElement;
                  target.style.backgroundColor = goldColor;
                  target.style.borderColor = goldColor;
                }}
              >
                {content.ctaPrimary}
                <svg className="w-4 h-4 rtl-flip" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              <button
                onClick={() => scrollToSection("education")}
                className="btn-secondary"
              >
                {content.ctaSecondary}
              </button>

              <button
                onClick={() => scrollToSection("cta")}
                className="btn-ghost"
              >
                {content.ctaTertiary}
                <svg className="w-4 h-4 rtl-flip" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </button>
            </div>

            {/* Verified Badge & Coordinates */}
            <div className="flex flex-wrap items-center gap-6 pt-8 border-t" style={{ borderColor: lineColor }}>
              <div className="flex items-center gap-3" style={{ justifyContent: isRtl ? "flex-end" : "flex-start" }}>
                <div
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: goldColor, boxShadow: `0 0 8px ${goldColor}` }}
                  aria-hidden="true"
                />
                <span className="font-sans font-medium text-sm" style={{ color: textMuted }}>
                  {content.verified}
                </span>
              </div>
              <div className="font-mono text-xs" style={{ color: textMuted }}>
                {content.coordinates}
              </div>
            </div>
          </div>

          {/* Right Column: Portrait + Ornaments (col-span-5) */}
          <div className="lg:col-span-5 relative" aria-hidden="true">
            {/* Portrait Container */}
            <div className="relative" style={{ position: "sticky", top: "140px" }}>
              {/* Portrait Image with Mask */}
              <div className="relative" style={{ width: "100%", maxWidth: "500px", marginLeft: isRtl ? "auto" : "0" }}>
                {/* Mask gradient overlay */}
                <div
                  className="absolute inset-0 pointer-events-none z-10"
                  style={{
                    borderRadius: "12px",
                    maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
                    background: `linear-gradient(to bottom, transparent 60%, ${bgColor} 100%)`,
                  }}
                  aria-hidden="true"
                />
                
                {/* Profile Image with Real Photo */}
                <div
                  className="relative aspect-[4/5] rounded-xl overflow-hidden"
                  style={{
                    background: `linear-gradient(145deg, ${theme === "dark" ? "#1A1A1C" : "#E8E4DD"} 0%, ${theme === "dark" ? "#121213" : "#FAF8F3"} 100%)`,
                    border: `1px solid ${lineColor}`,
                    boxShadow: theme === "dark"
                      ? "0 25px 50px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(217, 181, 103, 0.1)"
                      : "0 25px 50px rgba(26, 26, 28, 0.12), 0 0 0 1px rgba(190, 148, 63, 0.1)",
                  }}
                >
                  <Image
                    src="/images/profile/abdulghani-hero-studio-v2.png"
                    alt={locale === "ar" ? "عبدالغني الشبامي — مهندس ذكاء اصطناعي ومطور برمجيات" : "Abdulghani Al-Shibami — AI Engineer & Software Developer"}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover object-top filter brightness-[1.02] contrast-[1.05]"
                  />
                  
                  {/* Gold accent corner */}
                  <div
                    className="absolute -top-1 -right-1 w-16 h-16 pointer-events-none"
                    style={{
                      borderTop: `2px solid ${goldColor}`,
                      borderRight: `2px solid ${goldColor}`,
                      borderRadius: "0 12px 0 0",
                      opacity: 0.6,
                    }}
                    aria-hidden="true"
                  />
                  <div
                    className="absolute -bottom-1 -left-1 w-16 h-16 pointer-events-none"
                    style={{
                      borderBottom: `2px solid ${goldColor}`,
                      borderLeft: `2px solid ${goldColor}`,
                      borderRadius: "0 0 0 12px",
                      opacity: 0.4,
                    }}
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Floating Ornaments around portrait */}
              {/* Circuit circles bottom left */}
              <svg
                className="absolute -bottom-10 -left-10 w-24 h-24 pointer-events-none"
                viewBox="0 0 80 80"
                aria-hidden="true"
                style={{ opacity: 0.3 }}
              >
                <circle cx="40" cy="40" r="35" fill="none" stroke={goldColor} strokeWidth="1" strokeDasharray="6 6" />
                <circle cx="40" cy="40" r="22" fill="none" stroke={goldColor} strokeWidth="0.5" />
                <circle cx="40" cy="40" r="10" fill={goldColor} opacity="0.2" />
              </svg>

              {/* Neural network box bottom right */}
              <svg
                className="absolute -bottom-10 -right-10 w-28 h-28 pointer-events-none"
                viewBox="0 0 100 100"
                aria-hidden="true"
                style={{ opacity: 0.25 }}
              >
                <rect x="15" y="15" width="70" height="70" rx="3" fill="none" stroke={goldColor} strokeWidth="0.5" />
                <circle cx="35" cy="35" r="3" fill={goldColor} opacity="0.6" />
                <circle cx="65" cy="35" r="3" fill={goldColor} opacity="0.6" />
                <circle cx="35" cy="65" r="3" fill={goldColor} opacity="0.6" />
                <circle cx="65" cy="65" r="3" fill={goldColor} opacity="0.6" />
                <circle cx="50" cy="50" r="4" fill={goldColor} opacity="0.8" />
                <line x1="35" y1="35" x2="50" y2="50" stroke={goldColor} strokeWidth="0.5" opacity="0.4" />
                <line x1="65" y1="35" x2="50" y2="50" stroke={goldColor} strokeWidth="0.5" opacity="0.4" />
                <line x1="35" y1="65" x2="50" y2="50" stroke={goldColor} strokeWidth="0.5" opacity="0.4" />
                <line x1="65" y1="65" x2="50" y2="50" stroke={goldColor} strokeWidth="0.5" opacity="0.4" />
              </svg>

              {/* CODE / ANALYZE / BUILD / IMPROVE list */}
              <div
                className="absolute -bottom-28 left-1/2 -translate-x-1/2 w-full max-w-xs text-center pointer-events-none"
                style={{ opacity: 0.5 }}
              >
                <div className="space-y-2 font-mono text-xs tracking-widest uppercase" style={{ color: textMuted }}>
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: goldColor }} />
                    <span>CODE</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: goldColor }} />
                    <span>ANALYZE</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: goldColor }} />
                    <span>BUILD</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: goldColor }} />
                    <span>IMPROVE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        aria-hidden="true"
        style={{ opacity: isVisible ? 0.6 : 0, transition: "opacity 0.5s ease-out 1s" }}
      >
        <div className="font-mono text-xs tracking-widest uppercase" style={{ color: textMuted }}>SCROLL</div>
        <svg className="w-5 h-5 animate-bounce" viewBox="0 0 24 24" fill="none" stroke={goldColor} strokeWidth="2" style={{ opacity: 0.6 }}>
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>

      {/* Gold Divider at bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1440px] h-px pointer-events-none" aria-hidden="true">
        <div className="w-full h-full" style={{ background: `linear-gradient(90deg, transparent 0%, ${lineGold} 50%, transparent 100%)`, opacity: 0.4 }} />
      </div>
    </section>
  );
}