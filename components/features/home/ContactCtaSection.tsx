"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Locale } from "@/lib/i18n/dictionaries";
import { ContactForm } from "@/components/features/ContactForm";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TiltCard } from "@/components/ui/TiltCard";

export function ContactCtaSection({ locale }: { locale: Locale }) {
  const isRtl = locale === "ar";
  const [showDirectForm, setShowDirectForm] = useState(false);

  const valueProps = [
    {
      title: isRtl ? "حلول مبتكرة" : "Innovative Solutions",
      icon: (
        <svg className="w-5 h-5 text-gold-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
    },
    {
      title: isRtl ? "كود نظيف ومنهجي" : "Clean Code",
      icon: (
        <svg className="w-5 h-5 text-gold-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      title: isRtl ? "أثر وقيمة حقيقية" : "Real Impact",
      icon: (
        <svg className="w-5 h-5 text-gold-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 14 14" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="relative w-full bg-[#FAF9F6] dark:bg-[#0E0E10] py-20 lg:py-28 border-b border-black/5 dark:border-white/5 transition-colors overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Shibam Ancient Architecture Illustration */}
          <div className="lg:col-span-3 flex justify-center lg:justify-start">
            <ScrollReveal isRtl={isRtl} direction="up">
              <div className="relative w-56 h-36 rounded-2xl overflow-hidden opacity-90 float-gentle-anim">
                <Image
                  src="/images/showcase/shibam-skyline.png"
                  alt="Shibam Skyline Architecture"
                  fill
                  className="object-contain"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Center Column: Heading & Action Buttons */}
          <div className="lg:col-span-6 text-center lg:text-start space-y-5">
            <ScrollReveal delay={100} isRtl={isRtl} direction="up">
              <h2 className="font-sans font-black text-3xl sm:text-4xl uppercase tracking-tight text-[#0B0B0C] dark:text-white leading-tight">
                {isRtl ? "لنَبْنِ معاً شيئاً ذكياً." : "LET'S BUILD SOMETHING INTELLIGENT."}
              </h2>

              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-sans mt-3">
                {isRtl
                  ? "هل لديك فكرة تقنية، مشكلة برمجية، أو نظام تريد تطويره بمعايير احترافية؟"
                  : "Have an idea, technical problem, or system to build?"}
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-4">
                {/* Contact Me CTA Button */}
                <button
                  type="button"
                  onClick={() => setShowDirectForm(!showDirectForm)}
                  className="relative overflow-hidden inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#C59B27] hover:bg-[#B38A1F] text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-md hover:shadow-lg transition-all duration-300 active:scale-95 group cursor-pointer"
                >
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
                  <span>{isRtl ? "تواصل معي" : "CONTACT ME"}</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5">→</span>
                </button>

                {/* View GitHub */}
                <a
                  href="https://github.com/Abdulghani780"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full border border-black/15 dark:border-white/20 bg-white dark:bg-transparent hover:bg-black/5 dark:hover:bg-white/5 hover:border-gold-primary/50 text-zinc-800 dark:text-zinc-200 text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 active:scale-95"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>{isRtl ? "مستودعات جيت هب" : "VIEW GITHUB"}</span>
                </a>

                {/* Download CV */}
                <a
                  href="/docs/Abdulghani_Al-Shibami_CV.pdf"
                  download
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full border border-black/15 dark:border-white/20 bg-white dark:bg-transparent hover:bg-black/5 dark:hover:bg-white/5 hover:border-gold-primary/50 text-zinc-800 dark:text-zinc-200 text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 active:scale-95"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <span>{isRtl ? "تحميل السيرة الذاتية" : "DOWNLOAD CV"}</span>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Value Propositions */}
          <div className="lg:col-span-3 space-y-4">
            {valueProps.map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 70 + 150} isRtl={isRtl} direction="up">
                <TiltCard className="flex items-center gap-3 p-3.5 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#121214] shadow-xs hover:border-gold-primary/50 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-gold-primary/10 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-200 uppercase tracking-wider">
                    {item.title}
                  </span>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Expandable Contact Form */}
        {showDirectForm && (
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#121214] border border-gold-primary/40 shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="max-w-2xl mx-auto">
              <ContactForm isRtl={isRtl} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
