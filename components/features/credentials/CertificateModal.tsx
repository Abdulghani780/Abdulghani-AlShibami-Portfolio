"use client";

import React, { useState, useEffect } from "react";
import { VerifiedCertificate, CertificationCredential } from "@/lib/data/credentials";
import {
  X,
  ExternalLink,
  ShieldCheck,
  Calendar,
  Award,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  UserCheck,
  CheckCircle2,
  QrCode,
  Tag,
} from "lucide-react";

interface CertificateModalProps {
  certificate: VerifiedCertificate | CertificationCredential;
  isOpen: boolean;
  onClose: () => void;
  locale?: "en" | "ar";
}

export function CertificateModal({
  certificate,
  isOpen,
  onClose,
  locale = "en",
}: CertificateModalProps) {
  const isAr = locale === "ar";
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  // Normalize data between VerifiedCertificate and legacy CertificationCredential
  const isUnified = "category" in certificate;
  const title = certificate.title[locale];
  const issuer = isUnified
    ? (certificate as VerifiedCertificate).issuer[locale]
    : (certificate as CertificationCredential).provider[locale];
  const collaborator = isUnified
    ? (certificate as VerifiedCertificate).collaboratorOrBrand?.[locale]
    : (certificate as CertificationCredential).contextBrand?.[locale];
  const recipient = isUnified
    ? (certificate as VerifiedCertificate).recipient[locale]
    : "Abdulghani Ali Mohammed Ahmed Alshibami";
  const dateDisplay = certificate.dateDisplay[locale];
  const imagePath = certificate.imagePath;
  const signatories = isUnified ? (certificate as VerifiedCertificate).signatories : [];
  const skills = isUnified ? (certificate as VerifiedCertificate).skillsOrTopics[locale] : [];
  const categoryLabel = isUnified ? (certificate as VerifiedCertificate).categoryLabel[locale] : "Certified Credential";
  const hasSeal = isUnified ? (certificate as VerifiedCertificate).hasSeal : true;
  const hasQrCode = isUnified ? (certificate as VerifiedCertificate).hasQrCode : false;

  // Reset zoom on open or certificate change
  useEffect(() => {
    if (isOpen) {
      setZoomLevel(1);
    }
  }, [isOpen, certificate]);

  // Keyboard navigation: Escape to close, +/-/0 for zoom
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "+" || e.key === "=") {
        setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
      } else if (e.key === "-") {
        setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
      } else if (e.key === "0") {
        setZoomLevel(1);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 font-mono"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div
        className="relative w-full max-w-5xl max-h-[94vh] bg-white dark:bg-[#121214] border border-black/10 dark:border-gold-primary/30 rounded-2xl shadow-xl dark:shadow-2xl flex flex-col overflow-hidden text-zinc-800 dark:text-zinc-100 transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Top Header Toolbar ── */}
        <div className="bg-black/5 dark:bg-[#18181B] px-4 py-3 flex items-center justify-between border-b border-black/10 dark:border-white/10 gap-2 shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="p-1 rounded-md bg-gold-primary/10 text-gold-dark dark:text-gold-light shrink-0">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            </span>
            <div className="truncate">
              <span className="text-xs font-bold text-zinc-900 dark:text-white tracking-wide block truncate font-sans">
                {title}
              </span>
              <span className="text-[10px] text-gold-dark dark:text-gold-light font-sans block truncate">
                {issuer} {collaborator && `• ${collaborator}`}
              </span>
            </div>
          </div>

          {/* Zoom & Action Controls */}
          <div className="flex items-center gap-1.5 shrink-0">
            {/* Zoom Controls */}
            <div className="hidden sm:flex items-center bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-0.5 text-xs text-slate-600 dark:text-slate-300">
              <button
                type="button"
                onClick={handleZoomOut}
                disabled={zoomLevel <= 0.75}
                title={isAr ? "تصغير (-)" : "Zoom Out (-)"}
                aria-label="Zoom Out"
                className="w-7 h-7 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white rounded disabled:opacity-30 transition-colors cursor-pointer"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="px-2 text-[11px] font-mono min-w-[44px] text-center text-slate-500 dark:text-slate-400 select-none">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                type="button"
                onClick={handleZoomIn}
                disabled={zoomLevel >= 2.5}
                title={isAr ? "تكبير (+)" : "Zoom In (+)"}
                aria-label="Zoom In"
                className="w-7 h-7 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white rounded disabled:opacity-30 transition-colors cursor-pointer"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={handleResetZoom}
                disabled={zoomLevel === 1}
                title={isAr ? "إعادة الضبط (0)" : "Reset Zoom (0)"}
                aria-label="Reset Zoom"
                className="w-7 h-7 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white rounded disabled:opacity-30 transition-colors cursor-pointer border-s border-slate-200 dark:border-slate-800"
              >
                <RotateCcw className="w-3 h-3" />
              </button>
            </div>

            {/* External Full-Res Link */}
            <a
              href={imagePath}
              target="_blank"
              rel="noopener noreferrer"
              title={isAr ? "عرض الوثيقة الأصلية كاملة" : "Open full-res asset in new tab"}
              aria-label="Open Full Asset"
              className="w-8 h-8 rounded-lg border border-slate-300 dark:border-slate-700/80 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label={isAr ? "إغلاق النافذة" : "Close Modal"}
              className="w-8 h-8 rounded-lg border border-slate-300 dark:border-slate-700/80 bg-slate-100 dark:bg-slate-800/80 hover:bg-rose-500/20 hover:border-rose-500/50 text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-300 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ── Certificate Viewport Area ── */}
        <div className="relative flex-1 overflow-auto bg-slate-100 dark:bg-[#070B14] p-3 sm:p-6 flex flex-col items-center justify-start min-h-[320px] max-h-[62vh] transition-colors">
          <div
            className="w-full max-w-4xl transition-transform duration-150 ease-out flex items-center justify-center rounded-xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#0B1120]"
            style={{
              transform: `scale(${zoomLevel})`,
              transformOrigin: "center center",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imagePath}
              alt={title}
              className="w-full h-auto max-h-[58vh] object-contain select-none"
              loading="eager"
            />
          </div>

          {/* Floating Zoom Hints on Mobile */}
          <div className="sm:hidden flex items-center gap-2 mt-3 bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-full px-3 py-1 text-xs shadow-md">
            <button
              type="button"
              onClick={handleZoomOut}
              disabled={zoomLevel <= 0.75}
              className="px-2 py-0.5 text-slate-700 dark:text-slate-300 active:text-slate-900 dark:active:text-white"
            >
              -
            </button>
            <span className="text-[10px] font-mono text-gold-dark dark:text-gold-light">
              {Math.round(zoomLevel * 100)}%
            </span>
            <button
              type="button"
              onClick={handleZoomIn}
              disabled={zoomLevel >= 2.5}
              className="px-2 py-0.5 text-zinc-700 dark:text-zinc-300 active:text-zinc-900 dark:active:text-white"
            >
              +
            </button>
            <button
              type="button"
              onClick={handleResetZoom}
              className="ps-2 text-[10px] text-zinc-400 border-s border-black/10 dark:border-white/10"
            >
              {isAr ? "إعادة" : "Reset"}
            </button>
          </div>
        </div>

        {/* ── Detailed Metadata Panel ── */}
        <div className="bg-black/5 dark:bg-[#121214] border-t border-black/10 dark:border-white/10 p-4 sm:p-5 overflow-y-auto max-h-[30vh] shrink-0 transition-colors">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            {/* Recipient & Category */}
            <div className="p-3 rounded-xl bg-white dark:bg-black/40 border border-black/10 dark:border-white/10 space-y-1 shadow-sm">
              <div className="text-[10px] text-zinc-500 dark:text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5 text-gold-dark dark:text-gold-light" />
                <span>{isAr ? "المستلم والصفة" : "Recipient & Category"}</span>
              </div>
              <div className="text-zinc-900 dark:text-white font-semibold text-[11px] truncate">
                {recipient}
              </div>
              <div className="inline-block text-[10px] text-gold-dark dark:text-gold-light bg-gold-primary/10 px-2 py-0.5 rounded border border-gold-primary/30">
                {categoryLabel}
              </div>
            </div>

            {/* Issuing Authority */}
            <div className="p-3 rounded-xl bg-white dark:bg-black/40 border border-black/10 dark:border-white/10 space-y-1 shadow-sm">
              <div className="text-[10px] text-zinc-500 dark:text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-gold-dark dark:text-gold-light" />
                <span>{isAr ? "الجهة المانحة" : "Issuing Body"}</span>
              </div>
              <div className="text-zinc-900 dark:text-white font-semibold text-[11px]">
                {issuer}
              </div>
              {collaborator && (
                <div className="text-[10px] text-gold-dark dark:text-gold-light font-sans truncate">
                  {collaborator}
                </div>
              )}
            </div>

            {/* Date & Verification */}
            <div className="p-3 rounded-xl bg-white dark:bg-black/40 border border-black/10 dark:border-white/10 space-y-1 shadow-sm">
              <div className="text-[10px] text-zinc-500 dark:text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>{isAr ? "التاريخ والاعتماد" : "Date & Status"}</span>
              </div>
              <div className="text-zinc-900 dark:text-white font-semibold text-[11px]">
                {dateDisplay}
              </div>
              <div className="flex items-center gap-2 text-[10px]">
                {hasSeal && (
                  <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{isAr ? "ختم رسمي" : "Official Seal"}</span>
                  </span>
                )}
                {hasQrCode && (
                  <span className="text-gold-dark dark:text-gold-light flex items-center gap-1">
                    <QrCode className="w-3 h-3" />
                    <span>{isAr ? "رمز QR" : "QR Verify"}</span>
                  </span>
                )}
              </div>
            </div>

            {/* Signatories & Raw Asset Link */}
            <div className="p-3 rounded-xl bg-white dark:bg-black/40 border border-black/10 dark:border-white/10 flex flex-col justify-between shadow-sm">
              <div>
                <div className="text-[10px] text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-1">
                  {isAr ? "الموقعون الرسميون" : "Official Signatories"}
                </div>
                {signatories.length > 0 ? (
                  <div className="space-y-0.5">
                    {signatories.map((sig, idx) => (
                      <div key={idx} className="text-[11px] text-zinc-700 dark:text-zinc-200">
                        • {sig.name}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-[11px] text-zinc-500 dark:text-zinc-400">
                    {isAr ? "أختام واعتماد معهد يالي وسفارة الولايات المتحدة" : "Official Seal & Executive Manager"}
                  </div>
                )}
              </div>

              <a
                href={imagePath}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-[11px] text-gold-dark dark:text-gold-light hover:underline inline-flex items-center gap-1"
              >
                <span>{isAr ? "فتح بصيغة أصلية كاملة" : "Open Original Document"}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Topics & Competencies Chips */}
          {skills.length > 0 && (
            <div className="mt-3 pt-3 border-t border-black/10 dark:border-white/10 flex items-center gap-2 flex-wrap">
              <span className="text-[10px] text-zinc-500 dark:text-zinc-400 flex items-center gap-1 uppercase tracking-wider">
                <Tag className="w-3 h-3 text-gold-dark dark:text-gold-light" />
                <span>{isAr ? "المحاور والمجالات:" : "Core Competencies:"}</span>
              </span>
              {skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded text-[10px] bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-zinc-700 dark:text-zinc-300 font-sans"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* ── Footer Bar ── */}
        <div className="bg-black/5 dark:bg-[#0E0E10] px-4 py-2.5 border-t border-black/10 dark:border-white/10 text-[11px] text-zinc-500 dark:text-zinc-400 flex items-center justify-between transition-colors">
          <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 motion-safe:animate-pulse" />
            <span>{isAr ? "وثيقة أصلية موثقة ومعتمدة" : "ORIGINAL AUTHENTICATED CREDENTIAL"}</span>
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1 rounded bg-black/5 dark:bg-white/10 hover:bg-gold-primary hover:text-black text-zinc-800 dark:text-white text-xs transition-colors cursor-pointer"
          >
            {isAr ? "إغلاق" : "Dismiss"}
          </button>
        </div>
      </div>
    </div>
  );
}
