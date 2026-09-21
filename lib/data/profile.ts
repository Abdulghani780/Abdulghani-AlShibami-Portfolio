/**
 * @file profile.ts
 * @description Verified, authoritative biographical, academic, and contact information
 * for Abdulghani Al-Shibami. Strictly sourced from verified credentials and CV.
 */

export interface VerifiedProfile {
  name: {
    en: string;
    ar: string;
    legalEn: string;
    legalAr: string;
  };
  displayTitle: {
    en: string;
    ar: string;
  };
  field: {
    en: string;
    ar: string;
  };
  education: {
    degree: {
      en: string;
      ar: string;
    };
    institution: {
      en: string;
      ar: string;
    };
    level: {
      en: string;
      ar: string;
    };
    location: {
      en: string;
      ar: string;
    };
  };
  contact: {
    phone: string;
    phoneFormatted: string;
    whatsappUrl: string;
    email: string;
    location: {
      en: string;
      ar: string;
    };
    linkedinUrl: string;
    githubUrl: string;
    cvViewUrl: string;
    cvDownloadUrl: string;
  };
  narrative: {
    en: {
      summary: string;
      engineeringFocus: string;
    };
    ar: {
      summary: string;
      engineeringFocus: string;
    };
  };
}

export const VERIFIED_PROFILE: VerifiedProfile = {
  name: {
    en: "Abdulghani Al-Shibami",
    ar: "عبدالغني الشبامي",
    legalEn: "Abdulghani Ali Mohammed Ahmed Al-Shibami",
    legalAr: "عبدالغني علي محمد أحمد الشبامي",
  },
  displayTitle: {
    en: "Information Technology Specialist & Systems Developer",
    ar: "أخصائي تكنولوجيا معلومات ومطور أنظمة برمجية",
  },
  field: {
    en: "Information Technology",
    ar: "تكنولوجيا المعلومات",
  },
  education: {
    degree: {
      en: "Bachelor of Information Technology",
      ar: "بكالوريوس في تكنولوجيا المعلومات",
    },
    institution: {
      en: "University of Modern Sciences",
      ar: "جامعة العلوم الحديثة",
    },
    level: {
      en: "Third-Year Information Technology Student",
      ar: "طالب بالسنة الثالثة — تكنولوجيا المعلومات",
    },
    location: {
      en: "Sana'a, Yemen",
      ar: "صنعاء، اليمن",
    },
  },
  contact: {
    phone: "+967773088202",
    phoneFormatted: "+967 773 088 202",
    whatsappUrl: "https://wa.me/967773088202?text=Hello%20Abdulghani,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect.",
    email: "samyemen987@gmail.com",
    location: {
      en: "Sana'a, Yemen",
      ar: "صنعاء، اليمن",
    },
    linkedinUrl: "https://linkedin.com/in/abdulghani-al-shibami-94b4a3204",
    githubUrl: "https://github.com/Abdulghani780",
    cvViewUrl: "#cv-viewer",
    cvDownloadUrl: "/docs/Abdulghani_Al-Shibami_CV.pdf",
  },
  narrative: {
    en: {
      summary:
        "Third-Year Information Technology student at the University of Modern Sciences in Sana'a, focusing on enterprise software development, relational database engineering, and systematic requirements analysis. Built authenticated desktop infrastructure management tools and applied algorithm benchmarks with a strong foundation in C# .NET, Oracle, Python, and modern web architectures.",
      engineeringFocus:
        "Bridging rigorous systems analysis (UML, ERD, DFD) with robust application development. Proven track record in university innovation awards and certified novice trainer credentials.",
    },
    ar: {
      summary:
        "طالب بالسنة الثالثة في تخصص تكنولوجيا المعلومات بجامعة العلوم الحديثة في صنعاء، يركز على تطوير البرمجيات المؤسسية، وهندسة قواعد البيانات العلائقية، والتحليل المنهجي للمتطلبات. قام بتطوير أنظمة حقيقية لإدارة البنية التحتية للحرم الجامعي ومختبرات تفاعلية للخوارزميات بالاعتماد على C# .NET وOracle وPython وتقنيات الويب الحديثة.",
      engineeringFocus:
        "الربط بين التحليل والتصميم المنهجي للأنظمة (UML, ERD, DFD) والتطوير البرمجي المتين. حائز على جائزة المركز الثاني في مسابقة الابتكار وريادة الأعمال بالجامعة ومؤهل ببرنامج تدريب المدربين المعتمد.",
    },
  },
};
