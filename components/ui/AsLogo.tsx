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
  size = 36,
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
        <linearGradient id="asGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5D061" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#AA820A" />
        </linearGradient>
        <linearGradient id="asDarkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2A2A2E" />
          <stop offset="100%" stopColor="#0B0B0C" />
        </linearGradient>
      </defs>

      {/* Outer subtle circuit trace */}
      <path
        d="M 15 45 L 15 15 L 45 15"
        stroke="#D4AF37"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="45" cy="15" r="2.5" fill="#D4AF37" />

      <path
        d="M 105 75 L 105 105 L 75 105"
        stroke="#D4AF37"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="75" cy="105" r="2.5" fill="#D4AF37" />

      {/* Letter 'A' — Architectural & Sharp */}
      <path
        d="M 22 94 L 46 24 L 56 24 L 80 94 L 66 94 L 60.5 76 L 39.5 76 L 35 94 Z M 43 64 L 57 64 L 50 41 Z"
        fill={colorScheme === "pure-gold" ? "url(#asGoldGrad)" : "url(#asDarkGrad)"}
        className="dark:fill-white transition-colors"
      />

      {/* Letter 'S' — Flowing Gold with circuit nodes */}
      <path
        d="M 64 36 C 72 32 84 33 91 38 C 96 42 98 48 95 53 C 92 59 84 63 76 67 C 68 71 63 75 64 81 C 65 87 72 91 80 90 C 87 89 95 84 99 78 L 105 87 C 99 96 89 101 77 100 C 65 99 55 91 54 80 C 53 69 61 62 70 57 C 78 52 86 49 85 43 C 84 38 78 35 71 36 C 65 37 59 40 55 45 Z"
        fill="url(#asGoldGrad)"
      />

      {/* Circuit Nodes on S */}
      <circle cx="99" cy="39" r="3.5" fill="#D4AF37" />
      <path d="M 99 39 L 112 39" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
      <circle cx="112" cy="39" r="2.5" fill="#F3E5AB" />

      <circle cx="56" cy="94" r="3.5" fill="#D4AF37" />
      <path d="M 56 94 L 48 94" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
      <circle cx="48" cy="94" r="2.5" fill="#F3E5AB" />
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
      className={cn("flex items-center gap-3 group focus:outline-none", className)}
      aria-label="Abdulghani Al-Shibami — Home"
    >
      <AsMonogram size={38} className="group-hover:scale-105 transition-transform duration-300" />

      {showWordmark && (
        <div className="flex flex-col select-none">
          <span
            className={cn(
              "font-sans font-extrabold text-[13px] sm:text-[14px] tracking-[0.14em] uppercase transition-colors leading-tight",
              theme === "dark"
                ? "text-white group-hover:text-gold-secondary"
                : "text-zinc-950 dark:text-white group-hover:text-gold-dark dark:group-hover:text-gold-secondary"
            )}
          >
            {isRtl ? "عبدالغني الشبامي" : "ABDULGHANI AL-SHIBAMI"}
          </span>
          <span
            className={cn(
              "text-[9px] sm:text-[10px] tracking-[0.22em] font-semibold uppercase transition-colors leading-tight mt-0.5",
              theme === "dark" ? "text-gold-light/80" : "text-zinc-500 dark:text-zinc-400 group-hover:text-gold-dark dark:group-hover:text-gold-light"
            )}
          >
            {isRtl ? "ذكاء اصطناعي • برمجيات • نظم" : "AI • SOFTWARE • SYSTEMS"}
          </span>
        </div>
      )}
    </Link>
  );
}
