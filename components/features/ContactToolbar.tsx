"use client";

import React from "react";
import { VERIFIED_PROFILE } from "@/lib/data/profile";
import { Phone, Mail, MessageSquare, Linkedin, Github, ExternalLink } from "lucide-react";

export function ContactToolbar({ locale = "en" }: { locale?: "en" | "ar" }) {
  const isAr = locale === "ar";
  const { contact } = VERIFIED_PROFILE;

  const actions = [
    {
      id: "phone",
      label: isAr ? "اتصال هاتفي" : "Direct Call",
      value: contact.phoneFormatted,
      href: `tel:${contact.phone}`,
      icon: Phone,
      color: "hover:border-gold-primary/60 hover:text-gold-dark dark:hover:text-gold-light hover:bg-gold-primary/10",
      accent: "text-gold-dark dark:text-gold-light",
    },
    {
      id: "whatsapp",
      label: isAr ? "واتساب مباشر" : "WhatsApp",
      value: contact.phoneFormatted,
      href: contact.whatsappUrl,
      icon: MessageSquare,
      color: "hover:border-emerald-500/60 hover:text-emerald-600 dark:hover:text-emerald-300 hover:bg-emerald-500/10",
      accent: "text-emerald-600 dark:text-emerald-400",
      external: true,
    },
    {
      id: "email",
      label: isAr ? "البريد الإلكتروني" : "Direct Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
      icon: Mail,
      color: "hover:border-gold-primary/60 hover:text-gold-dark dark:hover:text-gold-light hover:bg-gold-primary/10",
      accent: "text-gold-dark dark:text-gold-light",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      value: "Abdulghani Al-Shibami",
      href: contact.linkedinUrl,
      icon: Linkedin,
      color: "hover:border-blue-500/60 hover:text-blue-300 hover:bg-blue-500/10",
      accent: "text-blue-400",
      external: true,
    },
    {
      id: "github",
      label: "GitHub",
      value: "Abdulghani780",
      href: contact.githubUrl,
      icon: Github,
      color: "hover:border-slate-500/60 hover:text-white hover:bg-slate-800/60",
      accent: "text-slate-300",
      external: true,
    },
  ];

  return (
    <div className="w-full font-mono text-xs" dir={isAr ? "rtl" : "ltr"}>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {actions.map((act) => {
          const Icon = act.icon;
          return (
            <a
              key={act.id}
              href={act.href}
              target={act.external ? "_blank" : undefined}
              rel={act.external ? "noopener noreferrer" : undefined}
              className={`p-3 rounded-xl border border-slate-800/80 bg-slate-900/60 backdrop-blur-md flex flex-col justify-between gap-2 transition-all duration-200 group cursor-pointer ${act.color} active:scale-[0.98] shadow-sm`}
            >
              <div className="flex items-center justify-between">
                <span className={`p-1.5 rounded-lg bg-slate-950/70 border border-slate-800 ${act.accent}`}>
                  <Icon className="w-4 h-4" />
                </span>
                {act.external && (
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-gold-dark dark:group-hover:text-gold-light transition-colors" />
                )}
              </div>
              <div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider">
                  {act.label}
                </div>
                <div className="text-white font-semibold text-[11px] truncate mt-0.5">
                  {act.value}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
