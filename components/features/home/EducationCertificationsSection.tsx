"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Locale } from "@/lib/i18n/dictionaries";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TiltCard } from "@/components/ui/TiltCard";

import { VERIFIED_CERTIFICATES } from "@/lib/data/credentials";

export function EducationCertificationsSection({ locale }: { locale: Locale }) {
  const isRtl = locale === "ar";
  const certs = VERIFIED_CERTIFICATES.slice(0, 4);

  return (
    <section
      id="certifications"
      className="relative w-full bg-[#FAF9F6] dark:bg-[#0E0E10] py-20 lg:py-28 border-b border-black/5 dark:border-white/5 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Education Card */}
          <div className="lg:col-span-5 space-y-4">
            <ScrollReveal isRtl={isRtl} direction="up">
              <h2 className="font-sans font-black text-xs sm:text-sm uppercase tracking-widest text-gold-dark dark:text-gold-light">
                {isRtl ? "التعليم الأكاديمي" : "EDUCATION"}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100} isRtl={isRtl} direction="up">
              <TiltCard className="relative p-6 sm:p-8 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#121214] shadow-sm overflow-hidden min-h-[260px] flex flex-col justify-between group hover:border-gold-primary/50 transition-all">
                {/* Shibam Cityscape Watermark Illustration */}
                <div className="absolute end-0 bottom-0 opacity-20 pointer-events-none w-56 h-36">
                  <Image
                    src="/images/showcase/shibam-skyline.png"
                    alt="Shibam Skyline"
                    width={224}
                    height={144}
                    className="object-contain"
                  />
                </div>

                <div className="relative z-10">
                  {/* Degree Title */}
                  <h3 className="font-sans font-black text-xl sm:text-2xl text-zinc-900 dark:text-white uppercase leading-snug">
                    {isRtl ? "طالب بكالوريوس" : "Bachelor's Student"}
                  </h3>
                  <p className="text-sm sm:text-base font-bold text-gold-dark dark:text-gold-light mt-1">
                    {isRtl ? "تكنولوجيا المعلومات" : "Information Technology"}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                    {isRtl ? "اليمن — جامعة العلوم الحديثة" : "Yemen — University of Modern Sciences"}
                  </p>
                </div>

                <div className="relative z-10 pt-6">
                  <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-lg bg-gold-primary/15 border border-gold-primary/30 text-gold-dark dark:text-gold-light font-mono text-xs font-black tracking-widest uppercase">
                    IT
                  </span>
                </div>
              </TiltCard>
            </ScrollReveal>
          </div>

          {/* Right Column: Certifications & Training */}
          <div className="lg:col-span-7 space-y-4">
            <ScrollReveal isRtl={isRtl} direction="up">
              <div className="flex items-center justify-between">
                <h2 className="font-sans font-black text-xs sm:text-sm uppercase tracking-widest text-gold-dark dark:text-gold-light">
                  {isRtl ? "الشهادات والتدريب" : "CERTIFICATIONS & TRAINING"}
                </h2>

                <Link
                  href={`/${locale}/credentials`}
                  className="text-xs font-bold text-zinc-600 dark:text-zinc-400 hover:text-gold-dark dark:hover:text-gold-light uppercase tracking-wider transition-colors"
                >
                  {isRtl ? "عرض السجل الأكاديمي ←" : "VIEW CREDENTIALS →"}
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certs.map((c, idx) => (
                <ScrollReveal key={idx} delay={idx * 80 + 100} isRtl={isRtl} direction="up" className="h-full">
                  <TiltCard className="h-full rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#121214] hover:border-gold-primary/50 transition-all shadow-sm flex flex-col justify-between group hover:-translate-y-0.5 cursor-pointer p-5">
                    <Link
                      href={`/${locale}/credentials`}
                      className="block h-full"
                    >
                      <div>
                        <h3 className="font-sans font-bold text-sm sm:text-base text-zinc-900 dark:text-white leading-snug group-hover:text-gold-dark dark:group-hover:text-gold-light transition-colors line-clamp-2 min-h-[44px]">
                          {c.title[locale]}
                        </h3>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-medium">
                          {c.categoryLabel[locale]}
                        </p>
                      </div>

                      <div className="pt-4 mt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                        <span className="font-mono text-[11px] font-bold text-zinc-700 dark:text-zinc-300 truncate max-w-[200px]">
                          {c.issuer[locale]}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-gold-primary/60 shrink-0 group-hover:bg-gold-primary" />
                      </div>
                    </Link>
                  </TiltCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
