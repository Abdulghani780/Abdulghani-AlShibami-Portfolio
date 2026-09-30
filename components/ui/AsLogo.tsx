import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface AsLogoProps {
  className?: string;
  showWordmark?: boolean;
  theme?: "light" | "dark" | "auto";
  locale?: string;
}

export function AsMonogram({
  size = 40,
  className,
  colorScheme = "gold-black",
}: {
  size?: number;
  className?: string;
  colorScheme?: "gold-black" | "pure-gold" | "white-gold";
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0 select-none", className)}
      aria-label="AS Monogram - Abdulghani Al-Shibami"
    >
      <defs>
        {/* Luxury Royal Gold Gradient */}
        <linearGradient id="luxuryGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FBF0B9" />
          <stop offset="35%" stopColor="#E2C366" />
          <stop offset="70%" stopColor="#C59B27" />
          <stop offset="100%" stopColor="#8C6B10" />
        </linearGradient>

        {/* Subtle Inner Glow Gradient */}
        <radialGradient id="asGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ambient Radial Core */}
      <circle cx="60" cy="60" r="48" fill="url(#asGlow)" />

      {/* Outer Hexagonal Tech Crest Frame */}
      <polygon
        points="60,10 102,34 102,86 60,110 18,86 18,34"
        stroke="url(#luxuryGoldGrad)"
        strokeWidth="2.5"
        strokeLinejoin="round"
        fill="#0E0E12"
        fillOpacity="0.85"
      />

      {/* Inner Corner Accent Brackets */}
      <path
        d="M 60 18 L 94 38 L 94 82 L 60 102 L 26 82 L 26 38 Z"
        stroke="#D4AF37"
        strokeWidth="1"
        strokeOpacity="0.3"
        strokeDasharray="4 3"
      />

      {/* Circuit Nodes on Crest Vertices */}
      <circle cx="60" cy="10" r="2.5" fill="#FBF0B9" />
      <circle cx="102" cy="34" r="2.5" fill="#E2C366" />
      <circle cx="102" cy="86" r="2.5" fill="#C59B27" />
      <circle cx="60" cy="110" r="2.5" fill="#E2C366" />
      <circle cx="18" cy="86" r="2.5" fill="#C59B27" />
      <circle cx="18" cy="34" r="2.5" fill="#E2C366" />

      {/* Letter 'A' — Architectural Geometric Apex */}
      <path
        d="M 60 26 L 38 88 L 49 88 L 54.5 73 L 65.5 73 L 71 88 L 82 88 Z M 60 44 L 64 63 L 56 63 Z"
        fill="url(#luxuryGoldGrad)"
      />

      {/* Letter 'S' — Interlocking Fluid Cybernetic Flow */}
      <path
        d="M 69 46 C 76 43 85 45 88 51 C 90 56 86 61 78 64 L 66 69 C 58 72 55 76 56 81 C 57 87 64 90 73 89 C 81 88 88 83 91 78 L 97 85 C 92 92 83 97 72 96 C 58 95 49 87 48 77 C 47 67 55 61 64 57 L 76 52 C 82 49 83 45 81 42 C 79 38 73 37 66 39 C 61 40 56 43 53 47 L 46 41 C 51 34 60 30 69 32 Z"
        fill="#FFFFFF"
        className="dark:fill-white"
        opacity="0.95"
      />

      {/* Golden Micro Circuit Dots on 'S' */}
      <circle cx="94" cy="51" r="2" fill="#FBF0B9" />
      <circle cx="49" cy="77" r="2" fill="#C59B27" />
    </svg>
  );
}

export function AsLogo({
  className,
  showWordmark = true,
  theme = "auto",
  locale = "en",
}: AsLogoProps) {
  const isRtl = locale === "ar";

  return (
    <Link
      href={`/${locale}`}
      className={cn("flex items-center gap-2.5 sm:gap-3.5 group focus:outline-none shrink-0", className)}
      aria-label="Abdulghani Al-Shibami — Home"
    >
      <AsMonogram size={42} className="group-hover:scale-105 transition-transform duration-300 shrink-0" />

      {showWordmark && (
        <span
          className={cn(
            "font-sans font-black text-[13px] sm:text-[14px] xl:text-[15px] tracking-[0.14em] uppercase transition-colors leading-none select-none whitespace-nowrap",
            theme === "dark"
              ? "text-white group-hover:text-gold-secondary"
              : "text-zinc-950 dark:text-white group-hover:text-gold-dark dark:group-hover:text-gold-secondary"
          )}
        >
          {isRtl ? "عبدالغني الشبامي" : "ABDULGHANI AL-SHIBAMI"}
        </span>
      )}
    </Link>
  );
}
