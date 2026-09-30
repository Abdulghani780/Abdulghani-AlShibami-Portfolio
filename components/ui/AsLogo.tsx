import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface AsLogoProps {
  className?: string;
  showWordmark?: boolean;
  theme?: "light" | "dark" | "auto";
  locale?: string;
  size?: number;
}

export function AsMonogram({
  size = 42,
  className,
}: {
  size?: number;
  className?: string;
  colorScheme?: string;
}) {
  return (
    <div
      style={{ width: size, height: size }}
      className={cn(
        "relative rounded-xl overflow-hidden shrink-0 border border-[#D4AF37]/40 bg-[#0B0B0C] shadow-md shadow-black/30 group-hover:border-[#D4AF37]/80 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.25)] transition-all duration-300",
        className
      )}
    >
      <Image
        src="/images/brand/as-logo-3d.png"
        alt="AS 3D Monogram - Abdulghani Al-Shibami"
        width={size * 2}
        height={size * 2}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        priority
      />
    </div>
  );
}

export function AsLogo({
  className,
  showWordmark = true,
  theme = "auto",
  locale = "en",
  size = 42,
}: AsLogoProps) {
  const isRtl = locale === "ar";

  return (
    <Link
      href={`/${locale}`}
      className={cn("flex items-center gap-2.5 sm:gap-3.5 group focus:outline-none shrink-0", className)}
      aria-label="Abdulghani Al-Shibami — Home"
    >
      <AsMonogram size={size} className="shrink-0" />

      {showWordmark && (
        <span
          className={cn(
            "font-sans font-black text-[13px] sm:text-[14px] xl:text-[15px] tracking-[0.14em] uppercase transition-colors leading-none select-none whitespace-nowrap",
            theme === "dark"
              ? "text-white group-hover:text-[#E2C366]"
              : "text-zinc-950 dark:text-white group-hover:text-[#B88E1F] dark:group-hover:text-[#E2C366]"
          )}
        >
          {isRtl ? "عبدالغني الشبامي" : "ABDULGHANI AL-SHIBAMI"}
        </span>
      )}
    </Link>
  );
}
