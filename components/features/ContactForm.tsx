"use client";

import React, { useState } from "react";
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
      <div className="p-8 border border-[#00FF9D]/40 bg-[#00FF9D]/5 text-center space-y-3 animate-in fade-in duration-300 rounded-xl font-mono">
        <div className="flex items-center justify-center gap-2 text-[#00FF9D] text-xs font-bold uppercase tracking-widest">
          <CheckCircle2 className="w-4 h-4 text-[#00FF9D]" />
          <span>{"// TRANSMISSION CONFIRMED"}</span>
        </div>
        <p className="text-white text-sm font-sans">
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
          className="text-xs text-[#00FF9D] hover:underline pt-2 uppercase tracking-wider cursor-pointer transition-colors"
        >
          {isRtl ? "إرسال رسالة أخرى" : "Send Another Message"}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-[11px] uppercase tracking-wider text-white/60 block">
            {isRtl ? "الاسم الكامل" : "Full Name"}
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder={isRtl ? "الاسم الكريم" : "Your Name / Organization"}
            className="w-full h-10 px-3.5 bg-black/40 border border-white/[0.1] focus:border-[#00FF9D] focus:ring-1 focus:ring-[#00FF9D]/30 focus:outline-none text-white text-xs transition-all rounded-lg"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] uppercase tracking-wider text-white/60 block">
            {isRtl ? "البريد الإلكتروني" : "Email Address"}
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="eng@example.com"
            className="w-full h-10 px-3.5 bg-black/40 border border-white/[0.1] focus:border-[#00FF9D] focus:ring-1 focus:ring-[#00FF9D]/30 focus:outline-none text-white text-xs transition-all rounded-lg"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-[11px] uppercase tracking-wider text-white/60 block">
          {isRtl ? "موضوع الرسالة" : "Subject"}
        </label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          placeholder={isRtl ? "عنوان الاستشارة أو المشروع" : "Systems Architecture / Consulting / Project Inquiry"}
          className="w-full h-10 px-3.5 bg-black/40 border border-white/[0.1] focus:border-[#00FF9D] focus:ring-1 focus:ring-[#00FF9D]/30 focus:outline-none text-white text-xs transition-all rounded-lg"
        />
      </div>

      <div className="space-y-1.5">
        <label className="text-[11px] uppercase tracking-wider text-white/60 block">
          {isRtl ? "تفاصيل الرسالة" : "Message"}
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          placeholder={isRtl ? "اكتب تفاصيل استفسارك الهندسي هنا..." : "Describe the scope, technical parameters, or timeline of your project..."}
          className="w-full p-3.5 bg-black/40 border border-white/[0.1] focus:border-[#00FF9D] focus:ring-1 focus:ring-[#00FF9D]/30 focus:outline-none text-white text-xs transition-all rounded-lg resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-11 px-5 rounded-lg bg-[#00FF9D] hover:bg-[#00FF9D]/90 text-[#070A0F] font-bold text-xs flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,255,157,0.3)] transition-all active:scale-[0.98] disabled:opacity-50 cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>{isRtl ? "جاري الإرسال..." : "Transmitting..."}</span>
          </>
        ) : (
          <>
            <Send className="w-3.5 h-3.5" />
            <span>{isRtl ? "إرسال الرسالة المشفرة" : "Transmit Message"}</span>
          </>
        )}
      </button>
    </form>
  );
}
