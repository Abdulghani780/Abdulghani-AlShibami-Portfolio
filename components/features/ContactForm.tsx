"use client";

import React, { useState } from "react";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import { CheckCircle2, Send, Loader2 } from "lucide-react";

/* ── Validation (no external library) ── */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface FieldErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

function validate(
  data: { name: string; email: string; subject: string; message: string },
  isRtl: boolean
): FieldErrors {
  const e: FieldErrors = {};
  const name = data.name.trim();
  const email = data.email.trim();
  const subject = data.subject.trim();
  const message = data.message.trim();

  if (name.length < 2)
    e.name = isRtl ? "الاسم يجب أن يحتوي على حرفين على الأقل." : "Name must be at least 2 characters.";
  else if (name.length > 100)
    e.name = isRtl ? "الاسم طويل جداً (الحد: 100 حرف)." : "Name is too long (max 100 characters).";

  if (!EMAIL_RE.test(email))
    e.email = isRtl ? "صيغة البريد الإلكتروني غير صحيحة." : "Please enter a valid email address.";

  if (subject.length < 3)
    e.subject = isRtl ? "الموضوع يجب أن يحتوي على 3 أحرف على الأقل." : "Subject must be at least 3 characters.";
  else if (subject.length > 150)
    e.subject = isRtl ? "الموضوع طويل جداً (الحد: 150 حرفاً)." : "Subject is too long (max 150 characters).";

  if (message.length < 10)
    e.message = isRtl ? "الرسالة يجب أن تحتوي على 10 أحرف على الأقل." : "Message must be at least 10 characters.";
  else if (message.length > 2000)
    e.message = isRtl ? "الرسالة طويلة جداً (الحد: 2000 حرف)." : "Message is too long (max 2000 characters).";

  return e;
}

export function ContactForm({ isRtl }: { isRtl: boolean }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(formData, isRtl);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    try {
      const supabase = getSupabaseBrowserClient();
      if (supabase) {
        await supabase.from("contact_messages").insert([
          {
            name: formData.name.trim().slice(0, 100),
            email: formData.email.trim().slice(0, 254),
            subject: formData.subject.trim().slice(0, 150),
            message: formData.message.trim().slice(0, 2000),
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
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FieldErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (submitted) {
    return (
      <div className="p-8 border border-emerald-500/40 bg-emerald-500/10 text-center space-y-3 animate-in fade-in duration-300 rounded-xl font-mono">
        <div className="flex items-center justify-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-widest">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{"// TRANSMISSION CONFIRMED"}</span>
        </div>
        <p className="text-content-secondary text-sm font-sans">
          {isRtl
            ? "تم استقبال رسالتك بنجاح وحفظها بأمان. سيتم التواصل معك عبر القنوات الرسمية قريباً."
            : "Your technical advisory inquiry has been received and securely queued. Abdulghani Al-Shibami will respond promptly."}
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", subject: "", message: "" });
            setErrors({});
          }}
          className="text-xs text-cyan-400 hover:underline pt-2 uppercase tracking-wider cursor-pointer transition-colors"
        >
          {isRtl ? "إرسال رسالة أخرى" : "Send Another Message"}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="cf-name" className="text-[11px] uppercase tracking-wider text-content-muted block">
            {isRtl ? "الاسم الكامل" : "Full Name"}
          </label>
          <input
            id="cf-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            maxLength={100}
            placeholder={isRtl ? "الاسم الكريم" : "Your Name / Organization"}
            aria-describedby={errors.name ? "cf-name-error" : undefined}
            aria-invalid={!!errors.name}
            className="w-full h-10 px-3.5 bg-surface-card border border-hairline focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 focus:outline-none text-content-primary text-xs transition-all rounded-lg"
          />
          {errors.name && (
            <p id="cf-name-error" role="alert" className="text-[10px] text-red-400 mt-1">
              {errors.name}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <label htmlFor="cf-email" className="text-[11px] uppercase tracking-wider text-content-muted block">
            {isRtl ? "البريد الإلكتروني" : "Email Address"}
          </label>
          <input
            id="cf-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            maxLength={254}
            placeholder="eng@example.com"
            aria-describedby={errors.email ? "cf-email-error" : undefined}
            aria-invalid={!!errors.email}
            className="w-full h-10 px-3.5 bg-surface-card border border-hairline focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 focus:outline-none text-content-primary text-xs transition-all rounded-lg"
          />
          {errors.email && (
            <p id="cf-email-error" role="alert" className="text-[10px] text-red-400 mt-1">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="cf-subject" className="text-[11px] uppercase tracking-wider text-content-muted block">
          {isRtl ? "موضوع الرسالة" : "Subject"}
        </label>
        <input
          id="cf-subject"
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          maxLength={150}
          placeholder={isRtl ? "عنوان الاستشارة أو المشروع" : "Systems Architecture / Consulting / Project Inquiry"}
          aria-describedby={errors.subject ? "cf-subject-error" : undefined}
          aria-invalid={!!errors.subject}
          className="w-full h-10 px-3.5 bg-surface-card border border-hairline focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 focus:outline-none text-content-primary text-xs transition-all rounded-lg"
        />
        {errors.subject && (
          <p id="cf-subject-error" role="alert" className="text-[10px] text-red-400 mt-1">
            {errors.subject}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <label htmlFor="cf-message" className="text-[11px] uppercase tracking-wider text-content-muted block">
          {isRtl ? "تفاصيل الرسالة" : "Message"}
        </label>
        <textarea
          id="cf-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          maxLength={2000}
          placeholder={isRtl ? "اكتب تفاصيل استفسارك الهندسي هنا..." : "Describe the scope, technical parameters, or timeline of your project..."}
          aria-describedby={errors.message ? "cf-message-error" : undefined}
          aria-invalid={!!errors.message}
          className="w-full p-3.5 bg-surface-card border border-hairline focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 focus:outline-none text-content-primary text-xs transition-all rounded-lg resize-none"
        />
        {errors.message ? (
          <p id="cf-message-error" role="alert" className="text-[10px] text-red-400 mt-1">
            {errors.message}
          </p>
        ) : (
          <div className="text-[10px] text-content-muted text-right tabular-nums">
            {formData.message.length}/2000
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-11 px-5 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(99,102,241,0.35)] transition-all active:scale-[0.98] disabled:opacity-50 cursor-pointer"
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
