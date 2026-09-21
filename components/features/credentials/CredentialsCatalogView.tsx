"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Locale } from "@/lib/i18n/dictionaries";
import {
  VERIFIED_CERTIFICATES,
  VerifiedCertificate,
  CredentialCategory,
} from "@/lib/data/credentials";
import { CertificateCard } from "./CertificateCard";
import { CertificateModal } from "./CertificateModal";
import {
  Award,
  ShieldCheck,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Filter,
  FileText,
  Download,
  CheckCircle2,
} from "lucide-react";

interface CredentialsCatalogViewProps {
  locale: Locale;
}

export function CredentialsCatalogView({ locale }: CredentialsCatalogViewProps) {
  const isAr = locale === "ar";
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedCert, setSelectedCert] = useState<VerifiedCertificate | null>(null);

  const filterCategories = useMemo(
    () => [
      { id: "all", label: isAr ? "جميع الوثائق (٥)" : "All Documents (5)" },
      { id: "certification", label: isAr ? "شهادات دولية (١)" : "International Certs (1)" },
      { id: "award", label: isAr ? "جوائز وتكريمات (١)" : "Academic Awards (1)" },
      { id: "workshop", label: isAr ? "ورش تدريبية (١)" : "Workshops (1)" },
      { id: "summit", label: isAr ? "قمم علمية (١)" : "AI Summits (1)" },
      { id: "language", label: isAr ? "لغات وتواصل (١)" : "Language (1)" },
    ],
    [isAr]
  );

  const filteredCertificates = useMemo(() => {
    if (selectedCategory === "all") return VERIFIED_CERTIFICATES;
    return VERIFIED_CERTIFICATES.filter((c) => c.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div
      className="relative min-h-screen bg-canvas text-content-primary pt-24 pb-20 px-4 sm:px-8 lg:px-16 font-mono transition-colors duration-300"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto space-y-10">
        {/* ── Breadcrumb Navigation ── */}
        <div className="flex items-center gap-2 text-xs text-content-muted">
          <Link
            href={`/${locale}`}
            className="hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1"
          >
            {isAr ? "الرئيسية" : "Home"}
          </Link>
          <span>/</span>
          <span className="text-indigo-600 dark:text-cyan-400 font-semibold">
            {isAr ? "الشهادات والاعتمادات" : "Credentials"}
          </span>
        </div>

        {/* ── Page Hero Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-hairline pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs text-indigo-600 dark:text-cyan-400 uppercase tracking-widest font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
              <span>{isAr ? "أرشيف الوثائق المعتمدة" : "AUTHENTIC CREDENTIAL ARCHIVE"}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-content-primary font-serif leading-tight">
              {isAr ? (
                <>
                  الشهادات والاعتمادات{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 dark:from-indigo-400 via-cyan-500 dark:via-cyan-400 to-emerald-500 dark:to-emerald-400">
                    المهنية والأكاديمية
                  </span>
                </>
              ) : (
                <>
                  Professional Certifications &{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 dark:from-indigo-400 via-cyan-500 dark:via-cyan-400 to-emerald-500 dark:to-emerald-400">
                    Academic Honors
                  </span>
                </>
              )}
            </h1>

            <p className="text-content-secondary text-sm font-sans leading-relaxed">
              {isAr
                ? "سجل رسمي يضم كافة الشهادات والوثائق الأصلية المعتمدة التي حصل عليها المهندس عبدالغني الشبامي من جهات محلية ودولية مرموقة. انقر على أي وثيقة لمعاينتها بدقة عالية واستعراض بيانات الاعتماد."
                : "Official archive of verified academic, international, and technical credentials earned by Abdulghani Al-Shibami. Click any credential to inspect the high-resolution original document, verification seals, and competencies."}
            </p>
          </div>

          {/* CV Direct Actions */}
          <div className="flex items-center gap-3 shrink-0 flex-wrap sm:flex-nowrap">
            <a
              href="/docs/Abdulghani_Al-Shibami_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-surface-secondary border border-hairline hover:border-indigo-500/40 text-content-secondary hover:text-content-primary text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-sm active:scale-95"
            >
              <FileText className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
              <span>{isAr ? "معاينة السيرة الذاتية" : "View CV"}</span>
            </a>
            <a
              href="/docs/Abdulghani_Al-Shibami_CV.pdf"
              download="Abdulghani_Al-Shibami_CV.pdf"
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white text-xs font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(99,102,241,0.35)] transition-all cursor-pointer active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>{isAr ? "تحميل السيرة الذاتية" : "Download CV"}</span>
            </a>
          </div>
        </div>

        {/* ── Category Filter Pills ── */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <Filter className="w-4 h-4 text-content-muted shrink-0 me-1" />
          {filterCategories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs whitespace-nowrap transition-all cursor-pointer border ${
                  isActive
                    ? "bg-indigo-600 text-white border-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.4)] font-bold"
                    : "bg-surface-secondary text-content-muted border-hairline hover:border-indigo-500/30 hover:text-content-primary"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* ── Credentials Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertificates.map((cert) => (
            <CertificateCard
              key={cert.id}
              certificate={cert}
              locale={locale}
              onView={(c) => setSelectedCert(c)}
            />
          ))}
        </div>

        {/* ── Back to Home Link ── */}
        <div className="pt-8 border-t border-hairline flex items-center justify-between">
          <Link
            href={`/${locale}`}
            className="text-xs text-content-muted hover:text-indigo-600 dark:hover:text-cyan-400 flex items-center gap-2 transition-colors group"
          >
            {isAr ? (
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            ) : (
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            )}
            <span>{isAr ? "العودة إلى الصفحة الرئيسية" : "Return to Homepage"}</span>
          </Link>

          <span className="text-[11px] text-content-muted font-mono">
            {isAr ? "جميع الوثائق محمية بحقوق الملكية وموثقة رسمياً" : "All credentials authenticated & verified"}
          </span>
        </div>
      </div>

      {/* ── Fullscreen Interactive Modal Viewer with Zoom ── */}
      {selectedCert && (
        <CertificateModal
          certificate={selectedCert}
          isOpen={!!selectedCert}
          onClose={() => setSelectedCert(null)}
          locale={locale}
        />
      )}
    </div>
  );
}
