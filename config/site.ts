/**
 * @file config/site.ts
 * @description Central site configuration - single source of truth for all site metadata, links, and constants
 */

export const siteConfig = {
  name: "Abdulghani Al-Shibami",
  title: {
    en: "Autonomous Systems Architect & AI Engineering Leader",
    ar: "مصمم الأنظمة المستقلة وقائد هندسة الذكاء الاصطناعي",
  },
  tagline: {
    en: "High-throughput distributed state machines, autonomous multi-agent systems, and low-latency infrastructure",
    ar: "آلات الحالة الموزعة عالية الإنتاجية، والأنظمة متعددة الوكلاء المستقلة، والبنية التحتية منخفضة الكمون",
  },
  description: {
    en: "Executive personal portfolio of Abdulghani Al-Shibami. High-throughput distributed state machines, autonomous multi-agent systems, and low-latency infrastructure.",
    ar: "محفظة شخصية تنفيذية لعبدالغني الشبامي. آلات حالة موزعة عالية الإنتاجية، وأنظمة متعددة الوكلاء مستقلة، وبنية تحتية منخفضة الكمون.",
  },
  url: "https://abdulghani.dev",
  ogImage: "/images/og-image.png",

  // Navigation
  nav: {
    sections: [
      { id: "hero", label: { en: "Home", ar: "الرئيسية" } },
      { id: "about", label: { en: "Who Is Abdulghani", ar: "من هو عبدالغني" } },
      { id: "ai-lab", label: { en: "AI Lab", ar: "مختبر الذكاء الاصطناعي" } },
      { id: "projects", label: { en: "Featured Projects", ar: "المشاريع المميزة" } },
      { id: "yusra", label: { en: "Case Study — Yusra", ar: "دراسة حالة — يسرى" } },
      { id: "arsenal", label: { en: "Technical Arsenal", ar: "الترسانة التقنية" } },
      { id: "method", label: { en: "The Abdulghani Method", ar: "منهجية عبدالغني" } },
      { id: "education", label: { en: "Education & Certifications", ar: "التعليم والشهادات" } },
      { id: "public", label: { en: "Engineering in Public", ar: "الهندسة في العلن" } },
      { id: "cta", label: { en: "Let's Build", ar: "لنبني معاً" } },
    ],
    ctaButton: {
      en: "LET'S BUILD",
      ar: "لِنَبْنِ",
    },
  },

  // Social Links
  social: {
    github: "https://github.com/Abdulghani780",
    linkedin: "https://linkedin.com/in/abdulghani-alshibami",
    email: "mailto:abdulghani@alshibami.dev",
    twitter: "https://twitter.com/abdulghani_dev",
    resume: "/assets/cv.pdf",
  },

  // Contact
  contact: {
    email: "abdulghani@alshibami.dev",
    location: {
      en: "Sana'a, Yemen",
      ar: "صنعاء، اليمن",
    },
    availability: {
      en: "Open to opportunities",
      ar: "متاح للفرص",
    },
  },

  // Footer
  footer: {
    credit: {
      en: "Designed & built by Abdulghani Al-Shibami",
      ar: "تم التصميم والبناء بواسطة عبدالغني الشبامي",
    },
    rights: {
      en: "All rights reserved",
      ar: "جميع الحقوق محفوظة",
    },
  },

  // Section Heights (at 1440px viewport) - from MASTER PROMPT
  sectionHeights: {
    hero: 900,
    about: 850,
    aiLab: 780,
    projects: 720,
    yusra: 950,
    arsenal: 650,
    method: 580,
    education: 700,
    public: 650,
    cta: 520,
    footer: 200,
  },

  // Layout
  layout: {
    contentMaxWidth: 1264,
    inlinePadding: 88,
    referenceWidth: 1440,
    navbarHeight: 73,
  },
} as const;

export type SiteConfig = typeof siteConfig;