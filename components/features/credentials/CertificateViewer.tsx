"use client";

import React, { useState } from "react";
import { VERIFIED_CERTIFICATIONS } from "@/lib/data/credentials";
import { CertificateModal } from "./CertificateModal";
import { ShieldCheck, Eye, Calendar, Award, ExternalLink } from "lucide-react";

export function CertificateViewer({ locale = "en" }: { locale?: "en" | "ar" }) {
  const isAr = locale === "ar";
  const cert = VERIFIED_CERTIFICATIONS[0];
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!cert) return null;

  return (
    <div className="w-full font-mono" dir={isAr ? "rtl" : "ltr"}>
      <div className="rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-[#0D1322] via-[#0A0F1D] to-[#070A12] p-5 sm:p-6 shadow-[0_10px_35px_rgba(2,6,23,0.8),0_0_20px_rgba(99,102,241,0.15)] hover:border-indigo-500/50 transition-all duration-300 group">
        {/* Header Kicker & Verification Pill */}
        <div className="flex items-center justify-between gap-3 border-b border-slate-800/80 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-indigo-400" />
            <span className="text-[11px] text-cyan-400 font-bold uppercase tracking-wider">
              {"// "}{isAr ? "الشهادات والاعتمادات الرسمية" : "VERIFIED CREDENTIAL ARCHIVE"}
            </span>
          </div>

          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>{isAr ? "معتمد وموثق" : "IBCT VERIFIED"}</span>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Certificate Thumbnail Preview (Clickable) */}
          <div className="md:col-span-5 relative group/thumb cursor-pointer" onClick={() => setIsModalOpen(true)}>
            <div className="rounded-xl overflow-hidden border border-slate-700/80 bg-slate-950 shadow-md group-hover/thumb:border-cyan-400/60 transition-all duration-300 relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={cert.imagePath}
                alt={cert.title[locale]}
                className="w-full h-auto object-cover opacity-90 group-hover/thumb:opacity-100 group-hover/thumb:scale-[1.02] transition-all duration-300"
              />
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/thumb:opacity-100 flex items-center justify-center gap-2 transition-opacity duration-200">
                <span className="px-3 py-1.5 rounded-lg bg-indigo-600/90 text-white text-xs font-bold flex items-center gap-1.5 shadow-lg">
                  <Eye className="w-3.5 h-3.5" />
                  <span>{isAr ? "معاينة الوثيقة" : "Enlarge Certificate"}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Certificate Information & Meta */}
          <div className="md:col-span-7 space-y-3">
            <div>
              <span className="text-[10px] text-indigo-400 uppercase tracking-widest font-semibold block">
                {cert.provider[locale]} • {cert.contextBrand[locale]}
              </span>
              <h4 className="text-base sm:text-lg font-bold text-white font-sans mt-1 group-hover:text-indigo-200 transition-colors">
                {cert.title[locale]}
              </h4>
            </div>

            <p className="text-slate-300 text-xs font-sans leading-relaxed">
              {cert.description[locale]}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <span>{cert.dateDisplay[locale]}</span>
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-1.5 rounded-lg bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 hover:text-white border border-indigo-500/40 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm active:scale-95"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>{isAr ? "عرض الشهادة كاملة" : "View Full Certificate"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <CertificateModal
        certificate={cert}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        locale={locale}
      />
    </div>
  );
}
