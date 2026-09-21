"use client";

import React, { useState } from "react";
import Link from "next/link";
import { VERIFIED_PROFILE } from "@/lib/data/profile";
import { VERIFIED_CERTIFICATES, VerifiedCertificate } from "@/lib/data/credentials";
import { CertificateCard } from "./CertificateCard";
import { CertificateModal } from "./CertificateModal";
import {
  GraduationCap,
  Award,
  FileText,
  Download,
  Sparkles,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";

export function AcademicProfileSection({ locale = "en" }: { locale?: "en" | "ar" }) {
  const isAr = locale === "ar";
  const { education, narrative } = VERIFIED_PROFILE;
  const [selectedCert, setSelectedCert] = useState<VerifiedCertificate | null>(null);

  return (
    <section id="credentials" className="w-full space-y-8 font-mono" dir={isAr ? "rtl" : "ltr"}>
      {/* ── Section Header ── */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800/80 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-[10px] tracking-[0.18em] text-cyan-500 dark:text-cyan-400 uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
            <span>{isAr ? "SECTION 05 / المؤهلات والاعتمادات" : "SECTION 05 / CREDENTIALS & HONORS"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-serif">
            {isAr ? "المؤهلات الأكاديمية والشهادات المعتمدة" : "Academic Standing & Verified Credentials"}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-sans mt-1">
            {isAr
              ? "وثائق واعتمادات مهنية وأكاديمية أصلية موثقة — مسابقات، ورش عمل، قمم علمية، وشهادات دولية."
              : "Original authentic academic, international, and technical credentials from verified institutions."}
          </p>
        </div>

        {/* CV Download / View Button Actions */}
        <div className="flex items-center gap-2.5 shrink-0 flex-wrap sm:flex-nowrap">
          <a
            href="/docs/Abdulghani_Al-Shibami_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-slate-700/80 hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-sm active:scale-95"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
            <span>{isAr ? "معاينة السيرة الذاتية" : "View CV"}</span>
          </a>
          <a
            href="/docs/Abdulghani_Al-Shibami_CV.pdf"
            download="Abdulghani_Al-Shibami_CV.pdf"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white text-xs font-bold flex items-center gap-2 shadow-[0_0_15px_rgba(99,102,241,0.35)] transition-all cursor-pointer active:scale-95"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{isAr ? "تحميل السيرة الذاتية (PDF)" : "Download CV (PDF)"}</span>
          </a>
        </div>
      </div>

      {/* ── Academic Standing Hero Card ── */}
      <div className="rounded-2xl border border-slate-200 dark:border-indigo-500/30 bg-white dark:bg-gradient-to-br dark:from-[#0F172A]/90 dark:via-[#0B1120]/95 dark:to-[#070B14] p-5 sm:p-6 shadow-md dark:shadow-xl space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800/80 pb-4">
          <div className="flex items-center gap-3">
            <span className="p-2.5 rounded-xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-500 dark:text-indigo-400">
              <GraduationCap className="w-6 h-6" />
            </span>
            <div>
              <span className="text-[10px] text-cyan-600 dark:text-cyan-400 uppercase tracking-widest font-semibold block">
                {education.institution[locale]}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-sans">
                {education.degree[locale]}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/10 dark:bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border border-indigo-500/30 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
              <span>{education.level[locale]}</span>
            </span>

            <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>{education.location[locale]}</span>
            </span>
          </div>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-sans leading-relaxed">
          {narrative[locale].summary}
        </p>
      </div>

      {/* ── Section Subheader for Certificates ── */}
      <div className="flex items-center justify-between pt-2">
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
          <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider">
            {isAr ? "الوثائق والشهادات المعتمدة (٥ وثائق أصلية)" : "VERIFIED CREDENTIALS ARCHIVE (5 AUTHENTIC DOCUMENTS)"}
          </h3>
        </div>

        <Link
          href={`/${locale}/credentials`}
          className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1 hover:underline transition-all group"
        >
          <span>{isAr ? "عرض الأرشيف الكامل" : "Explore Archive"}</span>
          {isAr ? (
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          ) : (
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          )}
        </Link>
      </div>

      {/* ── 5 Authentic Certificates Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {VERIFIED_CERTIFICATES.map((cert) => (
          <CertificateCard
            key={cert.id}
            certificate={cert}
            locale={locale}
            onView={(c) => setSelectedCert(c)}
          />
        ))}
      </div>

      {/* ── Interactive Modal Viewer with Zoom & Pan ── */}
      {selectedCert && (
        <CertificateModal
          certificate={selectedCert}
          isOpen={!!selectedCert}
          onClose={() => setSelectedCert(null)}
          locale={locale}
        />
      )}
    </section>
  );
}
