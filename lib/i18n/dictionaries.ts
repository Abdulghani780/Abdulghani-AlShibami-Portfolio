export type Locale = "en" | "ar";

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    brand: string;
    role: string;
    projects: string;
    simulation: string;
    skills: string;
    specifications: string;
    contact: string;
    resume: string;
    themeToggle: string;
    langToggle: string;
    menuOpen: string;
    menuClose: string;
  };
  hero: {
    greeting: string;
    name: string;
    title: string;
    subtitle: string;
    exploreCta: string;
    simulationCta: string;
    resumeCta: string;
    profilePlaceholder: string;
    profileVerified: string;
    coordinates: string;
  };
  telemetry: {
    heading: string;
    subheading: string;
    throughputLabel: string;
    throughputValue: string;
    throughputDesc: string;
    latencyLabel: string;
    latencyValue: string;
    latencyDesc: string;
    availabilityLabel: string;
    availabilityValue: string;
    availabilityDesc: string;
    verificationLabel: string;
    verificationValue: string;
    verificationDesc: string;
  };
  featured: {
    heading: string;
    subheading: string;
    viewAll: string;
    caseStudyCta: string;
    demoCta: string;
    sourceCta: string;
    statusProduction: string;
    statusVerified: string;
    statusPrototype: string;
  };
  competencies: {
    heading: string;
    subheading: string;
    systemsTitle: string;
    systemsDesc: string;
    aiTitle: string;
    aiDesc: string;
    lowLatencyTitle: string;
    lowLatencyDesc: string;
    cloudTitle: string;
    cloudDesc: string;
  };
  simulationBanner: {
    badge: string;
    disclaimer: string;
    engineOnline: string;
  };
  footer: {
    rights: string;
    philosophy: string;
    safetyNotice: string;
    backToTop: string;
  };
}

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    meta: {
      title: "Abdulghani Al-Shibami — Autonomous Systems Architect & AI Engineering Leader",
      description: "Executive engineering portfolio of Abdulghani Al-Shibami. High-throughput distributed state machines, autonomous multi-agent systems, and low-latency infrastructure.",
    },
    nav: {
      brand: "A. AL-SHIBAMI",
      role: "Systems Architect",
      projects: "Projects",
      simulation: "Systems Lab",
      skills: "Competencies",
      specifications: "Specs",
      contact: "Contact",
      resume: "Executive Dossier",
      themeToggle: "Toggle Visual Theme",
      langToggle: "العربية",
      menuOpen: "Open Navigation Menu",
      menuClose: "Close Navigation Menu",
    },
    hero: {
      greeting: "Executive Engineering Portfolio",
      name: "Abdulghani Al-Shibami",
      title: "Architecting Autonomous Intelligence & Mission-Critical Distributed Systems",
      subtitle: "Bridging enterprise distributed computing, high-frequency state machines, and autonomous AI agents with uncompromising mathematical rigor.",
      exploreCta: "Explore Engineering Showcase",
      simulationCta: "Launch Interactive Lab",
      resumeCta: "Architecture Dossier (CV)",
      profilePlaceholder: "[PROFILE_IMAGE]",
      profileVerified: "Verified Systems Architect",
      coordinates: "LAT: 24.7136° N, LON: 46.6753° E",
    },
    telemetry: {
      heading: "System Telemetry & Production Invariants",
      subheading: "Empirical benchmark metrics across deployed distributed state machines and autonomous clusters.",
      throughputLabel: "Write Throughput",
      throughputValue: "145,000 tx/s",
      throughputDesc: "Deterministic burst consensus",
      latencyLabel: "Consensus Latency",
      latencyValue: "0.8 ms",
      latencyDesc: "p99 5-node quorum sync",
      availabilityLabel: "Availability SLA",
      availabilityValue: "99.999%",
      availabilityDesc: "Zero uncoordinated downtime",
      verificationLabel: "Formal Verification",
      verificationValue: "100%",
      verificationDesc: "TLA+ proven linearizability",
    },
    featured: {
      heading: "Featured Engineering Works",
      subheading: "Production-verified distributed systems, consensus engines, and autonomous agent swarms.",
      viewAll: "View All 12 Systems →",
      caseStudyCta: "View Architecture Case Study",
      demoCta: "Launch Simulation",
      sourceCta: "GitHub Source",
      statusProduction: "PRODUCTION SHOWCASE",
      statusVerified: "TLA+ VERIFIED",
      statusPrototype: "LABORATORY STAGE",
    },
    competencies: {
      heading: "Core Architectural Competencies",
      subheading: "Four foundational pillars anchoring mission-critical engineering leadership.",
      systemsTitle: "Distributed Systems & Consensus",
      systemsDesc: "Raft, Gossip, and Paxos consensus engines with deterministic state machines and unmanaged memory allocation.",
      aiTitle: "Autonomous AI & Agent Swarms",
      aiDesc: "Multi-agent coordination fabrics, formal verification pipelines, and generative coding orchestration.",
      lowLatencyTitle: "Real-Time Low-Latency Computing",
      lowLatencyDesc: "C# .NET 9 unmanaged memory arenas, LMAX lock-free ring buffers, and zero-allocation IO journals.",
      cloudTitle: "Cloud-Native Infrastructure & Mesh",
      cloudDesc: "Resilient microservice topologies, gRPC HTTP/3 transport, and automated CI/CD security gating.",
    },
    simulationBanner: {
      badge: "INTERACTIVE WEB SIMULATION",
      disclaimer: "Sandboxed In-Browser Simulation of C# .NET 9 Core Architecture — High-fidelity state machine reproduction (compiled desktop/server runtime runs out-of-browser).",
      engineOnline: "ENGINE ONLINE",
    },
    footer: {
      rights: "© 2026 Abdulghani Al-Shibami. All rights reserved.",
      philosophy: "Architectural Computing & Autonomous Systems. Designed with Obsidian & Gilded Precision.",
      safetyNotice: "Zero Native Desktop Code Executed In-Browser // Verified Web Simulation Sandbox.",
      backToTop: "Back to Top ↑",
    },
  },
  ar: {
    meta: {
      title: "عبدالغني الشبامي — مهندس نظم مستقلة وقائد هندسة الذكاء الاصطناعي",
      description: "المعرض الهندسي التنفيذي للمهندس عبدالغني الشبامي. أنظمة حوسبة موزعة فائقة السرعة، أنظمة وكلاء الذكاء الاصطناعي المستقلة، وبنية تحتية منخفضة زمن الوصول.",
    },
    nav: {
      brand: "عبدالغني الشبامي",
      role: "مهندس نظم معمارية",
      projects: "المشاريع",
      simulation: "مختبر المحاكاة",
      skills: "الكفاءات",
      specifications: "المواصفات",
      contact: "اتصل بي",
      resume: "الملف التنفيذي",
      themeToggle: "تبديل المظهر البصري",
      langToggle: "English",
      menuOpen: "فتح القائمة",
      menuClose: "إغلاق القائمة",
    },
    hero: {
      greeting: "الملف الهندسي التنفيذي المتقدم",
      name: "عبدالغني الشبامي",
      title: "هندسة الذكاء المستقل والأنظمة الموزعة فائقة الموثوقية",
      subtitle: "الربط بين الحوسبة الموزعة المؤسسية، محركات مطابقة الأوامر منخفضة التأخير، وأنظمة الذكاء الاصطناعي المستقلة بدقة رياضية صارمة.",
      exploreCta: "استكشف معرض الأنظمة (١٢)",
      simulationCta: "تشغيل مختبر المحاكاة التفاعلي",
      resumeCta: "تحميل السيرة الذاتية (PDF)",
      profilePlaceholder: "[صورة_الملف_الشخصي]",
      profileVerified: "مهندس نظم معتمد",
      coordinates: "الإحداثيات: ٢٤.٧١٣٦° شمالاً، ٤٦.٦٧٥٣° شرقاً",
    },
    telemetry: {
      heading: "القياسات التشغيلية ومؤشرات الموثوقية",
      subheading: "مقاييس معيارية تجريبية عبر الأنظمة الموزعة ومجموعات الخوادم المستقلة.",
      throughputLabel: "معدل الكتابة الفعلي",
      throughputValue: "١٤٥ ألف ع/ث",
      throughputDesc: "تسوية متزامنة حتمية",
      latencyLabel: "زمن استجابة التوافق",
      latencyValue: "٠.٨ ميلي ثانية",
      latencyDesc: "تزامن خماسي p99",
      availabilityLabel: "اتفاقية الموثوقية",
      availabilityValue: "٩٩.٩٩٩٪",
      availabilityDesc: "انعدام التوقف غير المنسق",
      verificationLabel: "التحقق الرياضي",
      verificationValue: "١٠٠٪",
      verificationDesc: "إثباتات TLA+ الصارمة",
    },
    featured: {
      heading: "أبرز الأنظمة الهندسية المطورة",
      subheading: "أنظمة موزعة تم التحقق من أدائها تجريبياً ومحركات توافق حاسوبية مستقلة.",
      viewAll: "عرض كافة الأنظمة (١٢) ←",
      caseStudyCta: "دراسة الحالة المعمارية",
      demoCta: "تشغيل المحاكاة",
      sourceCta: "المصدر عبر GitHub",
      statusProduction: "نظام تشغيلي معتمد",
      statusVerified: "مثبت رياضياً عبر TLA+",
      statusPrototype: "مرحلة المختبر الهندسي",
    },
    competencies: {
      heading: "الكفاءات المعمارية الأساسية",
      subheading: "أربع ركائز هندسية متينة تقود المعايير التقنية المؤسسية.",
      systemsTitle: "الأنظمة الموزعة وبروتوكولات التوافق",
      systemsDesc: "محركات توافق Raft وGossip وPaxos مع آلات حالة حتمية وإدارة ذاكرة غير مدارة منعدمة التكلفة.",
      aiTitle: "الذكاء الاصطناعي المستقل وسرب الوكلاء",
      aiDesc: "أطر تنسيق الوكلاء المتعددين، أنابيب التحقق البرمجي الآلي، وأدوات هندسة الكود التوليدي.",
      lowLatencyTitle: "الحوسبة فائقة السرعة ومنخفضة التأخير",
      lowLatencyDesc: "حلبات الذاكرة غير المدارة في C# .NET 9، المخازن الدائرية LMAX الخالية من الأقفال، وتدوين السجلات الفوري.",
      cloudTitle: "البنية التحتية السحابية والشبكات الشبكية",
      cloudDesc: "طوبولوجيا الخدمات المصغرة المرنة، بروتوكولات gRPC عبر HTTP/3، وبوابات الأمان المؤتمتة.",
    },
    simulationBanner: {
      badge: "محاكاة ويب تفاعلية",
      disclaimer: "محاكاة معزولة داخل المتصفح لمعمارية C# .NET 9 — إعادة إنتاج حتمية لآلة الحالة الموزعة (الكود المكتبي المترجم يعمل خارج المتصفح).",
      engineOnline: "المحرك متصل بالإنترنت",
    },
    footer: {
      rights: "© ٢٠٢٦ عبدالغني الشبامي. جميع الحقوق محفوظة.",
      philosophy: "الحوسبة المعمارية والأنظمة المستقلة. صُممت بدقة الأوبسيديان والذهب الملكي.",
      safetyNotice: "لا يتم تشغيل أي كود مكتبي أصلي داخل المتصفح // بيئة محاكاة ويب آمنة ومعتمدة.",
      backToTop: "العودة للأعلى ↑",
    },
  },
};
