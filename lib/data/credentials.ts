/**
 * @file credentials.ts
 * @description Single source of truth for verified credentials, certifications, awards,
 * and technical training for Abdulghani Al-Shibami.
 * Strictly factual, extracted directly from authentic original documents.
 */

export type CredentialCategory = "certification" | "award" | "workshop" | "summit" | "language";

export interface Signatory {
  name: string;
  title: {
    en: string;
    ar: string;
  };
}

export interface CertificationCredential {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  provider: {
    en: string;
    ar: string;
  };
  contextBrand: {
    en: string;
    ar: string;
  };
  date: string;
  dateDisplay: {
    en: string;
    ar: string;
  };
  badge: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  imagePath: string;
  isVerified: boolean;
}

export interface VerifiedCertificate {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  issuer: {
    en: string;
    ar: string;
  };
  collaboratorOrBrand?: {
    en: string;
    ar: string;
  };
  category: CredentialCategory;
  categoryLabel: {
    en: string;
    ar: string;
  };
  recipient: {
    en: string;
    ar: string;
  };
  date: string; // ISO format for chronological sorting
  dateDisplay: {
    en: string;
    ar: string;
  };
  signatories: Signatory[];
  imagePath: string; // High-resolution web delivery asset
  originalAsset: string; // Source document path
  description: {
    en: string;
    ar: string;
  };
  skillsOrTopics: {
    en: string[];
    ar: string[];
  };
  hasSeal: boolean;
  hasQrCode: boolean;
  certificateNumber?: string;
}

/**
 * ── All 5 Verified Authentic Certificates (Sorted Most Recent First) ──
 */
export const VERIFIED_CERTIFICATES: VerifiedCertificate[] = [
  {
    id: "tot-ibct-novice",
    title: {
      en: "Train-The-Trainer Program: The Novice Trainer Level",
      ar: "برنامج إعداد وتدريب المدربين (TOT): مستوى المدرب المبتدئ",
    },
    issuer: {
      en: "International Board of Certified Trainers (IBCT)",
      ar: "البورد الدولي للمدربين المعتمدين (IBCT)",
    },
    collaboratorOrBrand: {
      en: "Edraak",
      ar: "إدراك",
    },
    category: "certification",
    categoryLabel: {
      en: "International Certification",
      ar: "شهادة مهنية دولية",
    },
    recipient: {
      en: "Abdulghani Ali Mohammed Ahmed Alshibami",
      ar: "عبدالغني علي محمد أحمد الشبامي",
    },
    date: "2026-09-12",
    dateDisplay: {
      en: "September 12, 2026",
      ar: "١٢ سبتمبر ٢٠٢٦",
    },
    signatories: [
      {
        name: "Dr. Ahmed Metwally",
        title: {
          en: "Certified Representative / Assessor",
          ar: "الممثل والمقيم المعتمد",
        },
      },
    ],
    imagePath: "/images/certificates/tot-ibct-novice-trainer.png",
    originalAsset: "certificates/5.png",
    description: {
      en: "Comprehensive professional foundation in the Train-The-Trainer field covering training competencies, adult learning principles, VAK learning styles, training objectives, and training activities development.",
      ar: "برنامج تأهيلي مكثف في تدريب المدربين يغطي كفايات المدرب المحترف، مبادئ تعلم الكبار، أنماط التعلم VAK، صياغة الأهداف التدريبية، وتصميم الأنشطة التدريبية.",
    },
    skillsOrTopics: {
      en: [
        "Training Methodologies",
        "Adult Learning Principles",
        "VAK Learning Styles",
        "Instructional Delivery",
        "Training Objectives Design",
      ],
      ar: [
        "منهجيات التدريب",
        "مبادئ تعليم الكبار",
        "أنماط التعلم VAK",
        "مهارات الإلقاء والعرض",
        "تصميم الأهداف التدريبية",
      ],
    },
    hasSeal: true,
    hasQrCode: true,
  },
  {
    id: "yemen-ai-summit-2026",
    title: {
      en: "Certificate of Participation — Yemen AI Summit 2026",
      ar: "شهادة مشاركة — قمة الذكاء الاصطناعي - اليمن 2026م",
    },
    issuer: {
      en: "Modern Specialized University (M.S.U.)",
      ar: "الجامعة التخصصية الحديثة",
    },
    collaboratorOrBrand: {
      en: "AI Approach & AI HUB",
      ar: "نهج الذكاء الاصطناعي ومركز الذكاء الاصطناعي",
    },
    category: "summit",
    categoryLabel: {
      en: "AI Summit Participation",
      ar: "مشاركة في قمة علمية",
    },
    recipient: {
      en: "Eng. Abdulghani Ali Mohammed Ahmed Al-Shibami",
      ar: "المهندس: عبدالغني علي محمد احمد الشبامي",
    },
    date: "2026-07-01",
    dateDisplay: {
      en: "July 1, 2026 (16 Muharram 1448 AH)",
      ar: "١ يوليو ٢٠٢٦م (١٦ محرم ١٤٤٨هـ)",
    },
    signatories: [
      {
        name: "Prof. Dr. Mujahid Al-Jabr",
        title: {
          en: "President of the University",
          ar: "رئيس الجامعة",
        },
      },
    ],
    imagePath: "/images/certificates/yemen-ai-summit-2026.png",
    originalAsset: "certificates/1.png",
    description: {
      en: "Awarded in appreciation of active and valuable contribution to the success of the Yemen AI Summit 2026 held at Modern Specialized University.",
      ar: "شهادة تقدير لمشاركته الفعالة والقيمة في إنجاح أعمال قمة الذكاء الاصطناعي - اليمن 2026م المقامة بالجامعة التخصصية الحديثة.",
    },
    skillsOrTopics: {
      en: [
        "Artificial Intelligence",
        "Machine Learning Trends",
        "AI Innovation Ecosystem",
        "Applied AI Solutions",
      ],
      ar: [
        "الذكاء الاصطناعي",
        "اتجاهات تعلم الآلة",
        "بيئة الابتكار في الذكاء الاصطناعي",
        "حلول الذكاء الاصطناعي التطبيقية",
      ],
    },
    hasSeal: true,
    hasQrCode: false,
  },
  {
    id: "ums-web-dev-ai",
    title: {
      en: "Professional Workshop: Web Development Using AI Tools",
      ar: "برنامج التطوير المهني: تطوير المواقع الإلكترونية باستخدام أدوات الذكاء الاصطناعي",
    },
    issuer: {
      en: "University of Modern Sciences (UMS)",
      ar: "جامعة العلوم الحديثة",
    },
    collaboratorOrBrand: {
      en: "Innovation and Entrepreneurship Center",
      ar: "مركز الابتكار وريادة الأعمال",
    },
    category: "workshop",
    categoryLabel: {
      en: "Technical Development Workshop",
      ar: "برنامج تطوير مهني وتدريب تخصصي",
    },
    recipient: {
      en: "Mr / Abdulghani Ali Mohammed Ahmed Al-shibami",
      ar: "الطالب / عبدالغني علي محمد احمد الشبامي",
    },
    date: "2026-05-11",
    dateDisplay: {
      en: "May 4-11, 2026",
      ar: "٤-١١ مايو ٢٠٢٦",
    },
    signatories: [
      {
        name: "Eng. Yousef Al-Taweel",
        title: {
          en: "Center Director",
          ar: "مدير المركز",
        },
      },
      {
        name: "Prof. Dr. Yahya Saleh Abu Hatem",
        title: {
          en: "Secretary General of the University",
          ar: "أمين عام الجامعة",
        },
      },
    ],
    imagePath: "/images/certificates/ums-web-dev-ai-workshop.jpg",
    originalAsset: "certificates/3.jpeg",
    description: {
      en: "Comprehensive professional development workshop on utilizing modern AI tools for full-stack web development, intelligent architectures, and automated engineering workflows.",
      ar: "برنامج تدريبي مكثف في تطوير وبناء المواقع الإلكترونية الحديثة باستخدام أحدث أدوات وتقنيات الذكاء الاصطناعي وسير العمل المؤتمت.",
    },
    skillsOrTopics: {
      en: [
        "AI-Assisted Web Development",
        "Modern Web Technologies",
        "Prompt Engineering for Code",
        "Frontend Architecture",
      ],
      ar: [
        "تطوير الويب بالذكاء الاصطناعي",
        "تقنيات الويب الحديثة",
        "هندسة الأوامر البرمجية",
        "معمارية الواجهات الأمامية",
      ],
    },
    hasSeal: true,
    hasQrCode: false,
  },
  {
    id: "ums-innovation-award",
    title: {
      en: "Second Place Award — Innovation & Entrepreneurship Competition",
      ar: "شهادة تقدير — المركز الثاني في مسابقة الابتكار وريادة الأعمال",
    },
    issuer: {
      en: "University of Modern Sciences (UMS)",
      ar: "جامعة العلوم الحديثة",
    },
    collaboratorOrBrand: {
      en: "Information Technology Department",
      ar: "قسم تقنية المعلومات",
    },
    category: "award",
    categoryLabel: {
      en: "Academic Innovation Award",
      ar: "جائزة تفوق وابتكار أكاديمي",
    },
    recipient: {
      en: "Student / Abdulghani Al-Shibami",
      ar: "الطالب / عبدالغني الشبامي",
    },
    date: "2026-01-26",
    dateDisplay: {
      en: "January 19-26, 2026",
      ar: "١٩-٢٦ يناير ٢٠٢٦",
    },
    signatories: [
      {
        name: "Prof. Dr. Yahya Saleh Abu Hatem",
        title: {
          en: "Secretary General of the University",
          ar: "أمين عام الجامعة",
        },
      },
    ],
    imagePath: "/images/certificates/ums-innovation-award.jpg",
    originalAsset: "certificates/2.jpeg",
    description: {
      en: "Awarded Second Place across the Information Technology Department in the university-wide Innovation and Entrepreneurship Competition held January 19-26, 2026.",
      ar: "نيل المركز الثاني على مستوى قسم تقنية المعلومات في مسابقة الابتكار وريادة الأعمال المنعقدة بجامعة العلوم الحديثة للفترة من 19 إلى 26 يناير 2026م.",
    },
    skillsOrTopics: {
      en: [
        "Software Innovation",
        "Technical Entrepreneurship",
        "Systems Architecture",
        "Competitive Problem Solving",
      ],
      ar: [
        "الابتكار البرمجي",
        "ريادة الأعمال التقنية",
        "هندسة النظم",
        "حل المشكلات التنافسية",
      ],
    },
    hasSeal: true,
    hasQrCode: false,
  },
  {
    id: "yali-english-proficiency",
    title: {
      en: "Certificate of Completion — English Language Proficiency",
      ar: "شهادة إتمام — كفاءة اللغة الإنجليزية (مستويات المبتدئين)",
    },
    issuer: {
      en: "Yemen-America Language Institute (YALI)",
      ar: "المعهد اليمني الأمريكي للغات (YALI)",
    },
    collaboratorOrBrand: {
      en: "Direct Sponsorship of the United States Embassy, Sana'a",
      ar: "تحت رعاية سفارة الولايات المتحدة الأمريكية بصنعاء",
    },
    category: "language",
    categoryLabel: {
      en: "Language Proficiency",
      ar: "كفاءة لغوية معتمدة",
    },
    recipient: {
      en: "Abdulghani Ali Al-Shebami",
      ar: "عبدالغني علي الشبامي",
    },
    date: "2023-02-08",
    dateDisplay: {
      en: "February 8, 2023",
      ar: "٨ فبراير ٢٠٢٣",
    },
    signatories: [
      {
        name: "Yousef Aldailami",
        title: {
          en: "General Executive Manager",
          ar: "المدير التنفيذي العام",
        },
      },
    ],
    imagePath: "/images/certificates/yali-english-proficiency.jpg",
    originalAsset: "certificates/4.jpeg",
    description: {
      en: "Successfully met English language proficiency standards for the completion of the Beginning Levels (Levels Access, Basic, One & WIT 1) of the Nine-Level Curriculum at YALI, Sana'a.",
      ar: "إتمام المستويات التأسيسية للغة الإنجليزية (Access, Basic, One & WIT 1) ضمن المنهج المكون من تسعة مستويات بمعهد يالي المعتمد بصنعاء.",
    },
    skillsOrTopics: {
      en: [
        "English Language Proficiency",
        "Technical Reading & Comprehension",
        "Professional Communication",
        "Grammar & Syntax",
      ],
      ar: [
        "كفاءة اللغة الإنجليزية",
        "القراءة والاستيعاب التقني",
        "التواصل المهني",
        "القواعد والتركيب اللغوي",
      ],
    },
    hasSeal: true,
    hasQrCode: false,
  },
];

/**
 * Backwards compatibility wrappers
 */
export const VERIFIED_CERTIFICATIONS = VERIFIED_CERTIFICATES.filter(
  (c) => c.category === "certification"
).map((c) => ({
  id: c.id,
  title: c.title,
  provider: c.issuer,
  contextBrand: c.collaboratorOrBrand || { en: "", ar: "" },
  date: c.date,
  dateDisplay: c.dateDisplay,
  badge: c.categoryLabel,
  description: c.description,
  imagePath: c.imagePath,
  isVerified: true,
}));

export const VERIFIED_AWARDS = VERIFIED_CERTIFICATES.filter(
  (c) => c.category === "award"
).map((c) => ({
  id: c.id,
  title: c.title,
  organization: c.issuer,
  department: c.collaboratorOrBrand || { en: "", ar: "" },
  year: c.dateDisplay.en,
  badge: c.categoryLabel,
  description: c.description,
}));

export const VERIFIED_TRAININGS = VERIFIED_CERTIFICATES.filter(
  (c) => c.category === "workshop" || c.category === "language"
).map((c) => ({
  id: c.id,
  title: c.title,
  organization: c.issuer,
  date: c.dateDisplay.en,
  category: (c.category === "workshop" ? "ai" : "languages") as "ai" | "languages",
  description: c.description,
}));
