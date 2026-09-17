import React from "react";
import { AlertTriangle, ShieldCheck } from "lucide-react";

interface DemoDisclosureProps {
  disclaimer: {
    en: string;
    ar: string;
  };
  locale: "en" | "ar";
  isRtl?: boolean;
}

export function DemoDisclosure({ disclaimer, locale, isRtl }: DemoDisclosureProps) {
  const text = locale === "ar" ? disclaimer.ar : disclaimer.en;
  const badgeText = locale === "ar" ? "إفصاح النزاهة التقنية" : "TECHNICAL INTEGRITY DISCLOSURE";

  return (
    <div className="w-full bg-brand-gold/10 border border-brand-gold/30 rounded-lg p-3.5 sm:p-4 mb-6 transition-all duration-200">
      <div className="flex items-start gap-3">
        <div className="p-1.5 rounded-md bg-brand-gold/20 text-brand-gold shrink-0 mt-0.5">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-brand-gold uppercase">
              {badgeText}
            </span>
            <span className="text-[10px] sm:text-xs text-text-dim font-mono">
              // MOCK_DATA_SAFE // ZERO_NATIVE_EXECUTION
            </span>
          </div>
          <p className="text-xs sm:text-sm text-text-primary/90 leading-relaxed">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
