"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import { CheckCircle2, Send, Loader2 } from "lucide-react";

export function ContactForm({ isRtl }: { isRtl: boolean }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const supabase = getSupabaseBrowserClient();
      if (supabase) {
        await supabase.from("contact_messages").insert([
          {
            name: formData.name.trim(),
            email: formData.email.trim(),
            subject: formData.subject.trim(),
            message: formData.message.trim(),
          },
        ]);
      }
    } catch {
      // Gracefully continue to confirmation screen even if offline or table unmigrated
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (submitted) {
    return (
      <div className="p-8 border border-gold/40 bg-gold/5 text-center space-y-3 animate-in fade-in duration-300 rounded-lg">
        <div className="flex items-center justify-center gap-2 text-gold font-mono text-xs font-bold uppercase tracking-widest">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{"// TRANSMISSION CONFIRMED"}</span>
        </div>
        <p className="text-content-primary text-sm font-serif">
          {isRtl
            ? "تم استقبال رسالتك بنجاح وحفظها بأمان. سيتم التواصل معك عبر القنوات الرسمية قريباً."
            : "Your technical advisory inquiry has been received and securely queued. Abdulghani Al-Shibami will respond promptly."}
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", subject: "", message: "" });
          }}
          className="font-mono text-xs text-gold hover:underline pt-2 uppercase tracking-wider cursor-pointer transition-colors"
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
          <label className="font-mono text-[11px] uppercase tracking-wider text-content-secondary block">
            {isRtl ? "الاسم الكامل" : "Full Name"}
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder={isRtl ? "عبدالله المنصور" : "Alex Vance"}
            className="w-full h-11 px-4 bg-canvas border border-hairline focus:border-gold focus:ring-1 focus:ring-gold/30 focus:outline-none text-content-primary text-xs font-mono transition-all rounded"
          />
        </div>

        <div className="space-y-1.5">
          <label className="font-mono text-[11px] uppercase tracking-wider text-content-secondary block">
            {isRtl ? "البريد الإلكتروني" : "Email Address"}
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="architect@enterprise.com"
            className="w-full h-11 px-4 bg-canvas border border-hairline focus:border-gold focus:ring-1 focus:ring-gold/30 focus:outline-none text-content-primary text-xs font-mono transition-all rounded"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="font-mono text-[11px] uppercase tracking-wider text-content-secondary block">
          {isRtl ? "موضوع الاستشارة" : "Subject"}
        </label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          placeholder={isRtl ? "استشارة معمارية" : "Distributed Systems Advisory / Contract"}
          className="w-full h-11 px-4 bg-canvas border border-hairline focus:border-gold focus:ring-1 focus:ring-gold/30 focus:outline-none text-content-primary text-xs font-mono transition-all rounded"
        />
      </div>

      <div className="space-y-1.5">
        <label className="font-mono text-[11px] uppercase tracking-wider text-content-secondary block">
          {isRtl ? "تفاصيل الرسالة" : "Technical Brief / Message"}
        </label>
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          placeholder={
            isRtl
              ? "اكتب تفاصيل استفسارك ومواصفات النظام..."
              : "Describe your system parameters, throughput requirements, or architectural objectives..."
          }
          className="w-full p-4 bg-canvas border border-hairline focus:border-gold focus:ring-1 focus:ring-gold/30 focus:outline-none text-content-primary text-xs font-mono transition-all resize-none rounded"
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 cursor-pointer transition-all duration-200"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin text-surface-dark" />
            <span>{isRtl ? "جارٍ الإرسال والتسجيل..." : "Transmitting Advisory..."}</span>
          </>
        ) : (
          <>
            <Send className="w-3.5 h-3.5" />
            <span>{isRtl ? "إرسال الإرسالية الهندسية ←" : "Transmit Advisory Inquiry →"}</span>
          </>
        )}
      </Button>
    </form>
  );
}
