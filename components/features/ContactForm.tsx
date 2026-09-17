"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";

export function ContactForm({ isRtl }: { isRtl: boolean }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 border border-gold/40 bg-gold/5 text-center space-y-3 animate-in fade-in duration-300">
        <div className="font-mono text-xs text-gold font-bold uppercase tracking-widest">
          {"// TRANSMISSION CONFIRMED"}
        </div>
        <p className="text-content-primary text-sm font-serif">
          {isRtl
            ? "تم استقبال رسالتك بنجاح. سيتم التواصل معك عبر القنوات الرسمية قريباً."
            : "Your technical advisory inquiry has been received. Abdulghani Al-Shibami will respond promptly."}
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="font-mono text-xs text-gold hover:underline pt-2 uppercase tracking-wider cursor-pointer"
        >
          {isRtl ? "إرسال رسالة أخرى" : "Send Another Message"}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="font-mono text-[11px] uppercase tracking-wider text-content-secondary">
            {isRtl ? "الاسم الكامل" : "Full Name"}
          </label>
          <input
            type="text"
            required
            placeholder={isRtl ? "عبدالله المنصور" : "Alex Vance"}
            className="w-full h-11 px-4 bg-canvas border border-hairline focus:border-gold focus:outline-none text-content-primary text-xs font-mono transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label className="font-mono text-[11px] uppercase tracking-wider text-content-secondary">
            {isRtl ? "البريد الإلكتروني" : "Email Address"}
          </label>
          <input
            type="email"
            required
            placeholder="architect@enterprise.com"
            className="w-full h-11 px-4 bg-canvas border border-hairline focus:border-gold focus:outline-none text-content-primary text-xs font-mono transition-colors"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="font-mono text-[11px] uppercase tracking-wider text-content-secondary">
          {isRtl ? "موضوع الاستشارة" : "Subject"}
        </label>
        <input
          type="text"
          required
          placeholder={isRtl ? "استشارة معمارية" : "Distributed Systems Advisory / Contract"}
          className="w-full h-11 px-4 bg-canvas border border-hairline focus:border-gold focus:outline-none text-content-primary text-xs font-mono transition-colors"
        />
      </div>

      <div className="space-y-1.5">
        <label className="font-mono text-[11px] uppercase tracking-wider text-content-secondary">
          {isRtl ? "تفاصيل الرسالة" : "Technical Brief / Message"}
        </label>
        <textarea
          rows={4}
          required
          placeholder={
            isRtl
              ? "اكتب تفاصيل استفسارك ومواصفات النظام..."
              : "Describe your system parameters, throughput requirements, or architectural objectives..."
          }
          className="w-full p-4 bg-canvas border border-hairline focus:border-gold focus:outline-none text-content-primary text-xs font-mono transition-colors resize-none"
        />
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full">
        {isRtl ? "إرسال الإرسالية الهندسية ←" : "Transmit Advisory Inquiry →"}
      </Button>
    </form>
  );
}
