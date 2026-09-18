import React from "react";
import { DemoType } from "@/types/project";
import { CampusITTrackerSimulation } from "@/demos/simulations/CampusITTrackerSimulation";
import { MetaAlgorithmLabSimulation } from "@/demos/simulations/MetaAlgorithmLabSimulation";
import { CafenaSimulation } from "@/demos/simulations/CafenaSimulation";
import { GpSimulation } from "@/demos/simulations/GpSimulation";
import { NovaTechSimulation } from "@/demos/simulations/NovaTechSimulation";

export interface DemoProps {
  locale: "en" | "ar";
  onReset?: () => void;
  isRtl?: boolean;
}

export interface DemoDefinition {
  slug: string;
  demoType: DemoType;
  title: {
    en: string;
    ar: string;
  };
  subtitle: {
    en: string;
    ar: string;
  };
  disclaimer: {
    en: string;
    ar: string;
  };
  component?: React.ComponentType<DemoProps>;
  liveUrl?: string;
  repoUrl?: string;
  videoUrl?: string;
}

export const DEMO_REGISTRY: Record<string, DemoDefinition> = {
  "campus-it-tracker": {
    slug: "campus-it-tracker",
    demoType: "interactive_simulation",
    title: {
      en: "Campus IT Infrastructure Tracker — Topology & ITIL Simulator",
      ar: "نظام تتبع شبكات الحرم الجامعي — محاكي الطوبولوجيا وITIL",
    },
    subtitle: {
      en: "Interactive simulation of campus network operations, equipment locating, and ITIL incident triage.",
      ar: "محاكاة تفاعلية لمركز عمليات شبكة الحرم الجامعي وتحديد مواقع الأجهزة وفرز البلاغات.",
    },
    disclaimer: {
      en: "This is a browser-based simulation of the C# WinForms desktop application and Oracle backend using authentic offline business logic.",
      ar: "هذه محاكاة تفاعلية داخل المتصفح لتطبيق سطح المكتب C# WinForms مع قاعدة بيانات Oracle باستخدام منطق العمل المحلي المعتمد.",
    },
    component: CampusITTrackerSimulation,
  },
  "metaalgorithm-lab": {
    slug: "metaalgorithm-lab",
    demoType: "interactive_simulation",
    title: {
      en: "MetaAlgorithm Lab — In-Browser Benchmark Runner",
      ar: "مختبر الخوارزميات — منصة التحليل والاختبار المباشر",
    },
    subtitle: {
      en: "Step-by-step interactive sorting visualizer and real-time execution complexity benchmarking.",
      ar: "منصة تفاعلية بصرية لتنفيذ خوارزميات الفرز خطوة بخطوة ورصد دقيق لعدد المقارنات وزمن التنفيذ.",
    },
    disclaimer: {
      en: "This benchmark executes genuine sorting algorithms client-side in your browser, reproducing the core scientific engine of the Python/PyQt6 workstation.",
      ar: "تنفذ هذه المنصة خوارزميات الفرز الحقيقية مباشرة داخل المتصفح من جانب العميل، مما يحاكي المحرك العلمي لبرنامج Python/PyQt6.",
    },
    component: MetaAlgorithmLabSimulation,
  },
  novatech: {
    slug: "novatech",
    demoType: "interactive_simulation",
    title: {
      en: "NOVA TECH — Cyber Gadgets & Smart Tech Storefront",
      ar: "نوفا تيك | متجر الأجهزة والتقنيات الذكية المستقبلية",
    },
    subtitle: {
      en: "Interactive cybernetic e-commerce storefront with dual theming, live search, offcanvas cart, and checkout simulation.",
      ar: "متجر إلكتروني مستقبلي تفاعلي بمظهر داكن وفاتح، وسلة جانبية بحساب فوري للضريبة، وبحث حي، ومحاكاة للفواتير.",
    },
    disclaimer: {
      en: "This showcase demonstrates the verified client-side web application of NOVA TECH. All shopping cart computations, VAT, and invoices execute client-side.",
      ar: "يستعرض هذا العرض تطبيق الويب المعتمد لمتجر نوفا تيك. كافة حسابات السلة والضرائب والفواتير تتم من جانب العميل.",
    },
    component: NovaTechSimulation,
  },
  cafena: {
    slug: "cafena",
    demoType: "interactive_simulation",
    title: {
      en: "Cafena — Artisanal Specialty Coffee Experience",
      ar: "كافينا | تجربة القهوة المختصة الفاخرة",
    },
    subtitle: {
      en: "Interactive Arabic specialty coffee portal featuring in-browser cart arithmetic and client-side catalog search.",
      ar: "منصة تفاعلية عربية فاخرة للقهوة المختصة مع حساب فوري لمحتويات السلة وبحث مباشر في قائمة المشروبات.",
    },
    disclaimer: {
      en: "This showcase demonstrates the verified Vanilla HTML5/CSS3/ES6 web application of Cafena with real-time cart calculations.",
      ar: "يستعرض هذا العرض تطبيق الويب المعتمد لكافينا المبني بلغة جافاسكريبت نقية مع حساب فوري للأسعار في المتصفح.",
    },
    component: CafenaSimulation,
  },
  gp: {
    slug: "gp",
    demoType: "interactive_simulation",
    title: {
      en: "Graduation Project Portal — Academic Proposals System",
      ar: "منصة مشاريع التخرج — نظام مقترحات الأبحاث الأكاديمية",
    },
    subtitle: {
      en: "Interactive academic proposal submission and faculty review workflow simulation.",
      ar: "محاكاة تفاعلية لمسار تقديم مقترحات مشاريع التخرج واعتمادها من اللجان الأكاديمية.",
    },
    disclaimer: {
      en: "This interactive showcase simulates the fullstack PHP 8 & MySQL Graduation Project platform using client-side mock data.",
      ar: "هذا العرض التفاعلي يحاكي منصة مشاريع التخرج المبنية بـ PHP 8 وMySQL باستخدام بيانات تجريبية آمنة.",
    },
    component: GpSimulation,
  },
};

export function getDemoDefinition(slug: string): DemoDefinition | null {
  return DEMO_REGISTRY[slug] || null;
}
