"use client";

import React from "react";
import { VerifiedCertificate } from "@/lib/data/credentials";
import { Eye, ShieldCheck, Calendar, Award } from "lucide-react";

interface CertificateCardProps {
  certificate: VerifiedCertificate;
  locale?: "en" | "ar";
  onView: (cert: VerifiedCertificate) => void;
}

export function CertificateCard({
  certificate,
  locale = "en",
  onView,
}: CertificateCardProps) {
  const isAr = locale === "ar";
  const title = certificate.title[locale];
  const issuer = certificate.issuer[locale];
  const collaborator = certificate.collaboratorOrBrand?.[locale];
  const dateDisplay = certificate.dateDisplay[locale];
  const categoryLabel = certificate.categoryLabel[locale];

  return (
    <div
      className="group relative rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#121214] p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 hover:border-gold-primary/50 shadow-sm dark:shadow-xl hover:-translate-y-1 font-mono"
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* Top Meta Line: Category Badge + Verification Status */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-gold-primary/10 text-gold-dark dark:text-gold-light border border-gold-primary/30 tracking-wider">
          {categoryLabel}
        </span>
        <div className="flex items-center gap-1.5 text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">{isAr ? "وثيقة أصلية" : "Verified"}</span>
        </div>
      </div>

      {/* Certificate Thumbnail Preview (Clickable) */}
      <div
        onClick={() => onView(certificate)}
        className="relative rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-black/5 dark:bg-black/40 shadow-sm group-hover:border-gold-primary/40 transition-all duration-300 cursor-pointer aspect-[16/10] mb-4 flex items-center justify-center"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={certificate.imagePath}
          alt={title}
          className="w-full h-full object-contain p-1.5 opacity-95 dark:opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-300 select-none"
          loading="lazy"
        />
        {/* Hover Action Overlay */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-2 transition-opacity duration-200">
          <span className="px-3 py-1.5 rounded-lg bg-gold-primary text-black text-xs font-bold flex items-center gap-1.5 shadow-lg">
            <Eye className="w-3.5 h-3.5" />
            <span>{isAr ? "معاينة الوثيقة" : "Enlarge Certificate"}</span>
          </span>
        </div>
      </div>

      {/* Title & Issuing Organization */}
      <div className="space-y-2 flex-1">
        <h4 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white font-sans line-clamp-2 group-hover:text-gold-dark dark:group-hover:text-gold-light transition-colors leading-snug">
          {title}
        </h4>

        <div className="space-y-1">
          <div className="text-xs text-zinc-700 dark:text-zinc-300 font-semibold flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-gold-dark dark:text-gold-light shrink-0" />
            <span className="truncate">{issuer}</span>
          </div>

          {collaborator && (
            <div className="text-[11px] text-gold-dark dark:text-gold-light font-sans truncate ps-5">
              {collaborator}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Metadata & View Action */}
      <div className="mt-4 pt-3 border-t border-black/10 dark:border-white/10 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 text-[10px] text-zinc-500 dark:text-zinc-400">
          <Calendar className="w-3 h-3" />
          <span>{dateDisplay}</span>
        </div>

        <button
          type="button"
          onClick={() => onView(certificate)}
          className="px-3 py-1.5 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-gold-primary/50 text-gold-dark dark:text-gold-light hover:text-black dark:hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm active:scale-95"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>{isAr ? "عرض الشهادة" : "View"}</span>
        </button>
      </div>
    </div>
  );
}
