/**
 * @file skills.ts
 * @description Structured, honest categorization of technical skills, tools, and methodologies
 * for Abdulghani Al-Shibami. Distinguishes practical project experience from academic familiarity.
 */

export interface SkillItem {
  name: string;
  level: "core" | "competent" | "familiar";
  context: string;
}

export interface SkillCategory {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  subtitle: {
    en: string;
    ar: string;
  };
  skills: SkillItem[];
}

export const VERIFIED_SKILLS: SkillCategory[] = [
  {
    id: "software-dev",
    title: {
      en: "Software & Desktop Engineering",
      ar: "تطوير البرمجيات وأنظمة سطح المكتب",
    },
    subtitle: {
      en: "Enterprise desktop architectures, OOP, and systems programming",
      ar: "معماريات سطح المكتب المؤسسية، البرمجة كائنية التوجه، وهندسة النظم",
    },
    skills: [
      { name: "C#", level: "core", context: "Enterprise WinForms and .NET 4.8 / .NET Core" },
      { name: "Windows Forms (.NET)", level: "core", context: "Custom controls, GDI+ rendering, and ITIL dashboards" },
      { name: "Python", level: "core", context: "Algorithmic benchmarks, SciPy, PyQt6, and CLI engines" },
      { name: "Java", level: "competent", context: "Object-oriented software systems and algorithms" },
      { name: "PHP", level: "competent", context: "Full-stack web applications and MySQL backend architectures" },
      { name: "Kotlin", level: "competent", context: "Modern Android development & Jetpack Compose" },
      { name: "Android / Jetpack Compose", level: "competent", context: "Native mobile user interfaces" },
      { name: "Flutter", level: "familiar", context: "Cross-platform mobile interfaces (Academic familiarity)" },
    ],
  },
  {
    id: "systems-analysis",
    title: {
      en: "Systems Analysis & Architecture",
      ar: "تحليل وتصميم النظم البرمجية",
    },
    subtitle: {
      en: "Rigorous modeling, requirements engineering, and workflow design",
      ar: "النمذجة البرمجية الدقيقة، هندسة المتطلبات، وتصميم تدفق البيانات",
    },
    skills: [
      { name: "UML Modeling", level: "core", context: "Class, Sequence, Activity, and State Machine diagrams" },
      { name: "Use Case Engineering", level: "core", context: "Actor modeling, precondition/postcondition specifications" },
      { name: "Data Flow Diagrams (DFD)", level: "core", context: "Level-0 Context and Level-1/2 functional decomposition" },
      { name: "Entity-Relationship Diagrams (ERD)", level: "core", context: "Normalized relational database schema design" },
      { name: "System Architecture", level: "core", context: "Tiered architectural decomposition and design patterns" },
      { name: "Requirements Engineering", level: "core", context: "SRS formulation, functional and non-functional matrices" },
      { name: "Project Planning", level: "competent", context: "Milestone scheduling, risk management, and work breakdown" },
    ],
  },
  {
    id: "database-engineering",
    title: {
      en: "Database Systems & Storage",
      ar: "هندسة قواعد البيانات وإدارة البيانات",
    },
    subtitle: {
      en: "Relational database modeling, query optimization, and offline caching",
      ar: "النمذجة العلائقية، تحسين استعلامات SQL، والمزامنة المحلية",
    },
    skills: [
      { name: "Oracle Database (10g/11g/XE)", level: "core", context: "Tablespaces, stored procedures, constraints, and relational schemas" },
      { name: "SQL (Structured Query Language)", level: "core", context: "Complex joins, indexing, aggregation, and relational integrity" },
      { name: "MySQL", level: "core", context: "Web backends, relational schema migrations, and indexing" },
      { name: "Database Design & Normalization", level: "core", context: "1NF through 3NF/BCNF relational integrity verification" },
    ],
  },
  {
    id: "applied-ai",
    title: {
      en: "Applied AI & Computer Vision",
      ar: "الذكاء الاصطناعي التطبيقي والرؤية الحاسوبية",
    },
    subtitle: {
      en: "On-device models, vision pipelines, and intelligent interfaces",
      ar: "النماذج المدمجة على الأجهزة، معالجة الصور، والواجهات الذكية",
    },
    skills: [
      { name: "AI Fundamentals", level: "competent", context: "Search heuristics, optimization algorithms, and complexity analysis" },
      { name: "Computer Vision Concepts", level: "competent", context: "Feature extraction, edge detection, and image pre-processing" },
      { name: "TensorFlow Lite", level: "competent", context: "On-device neural model inference and quantization" },
      { name: "MediaPipe", level: "competent", context: "Real-time hand and pose landmark tracking pipelines" },
      { name: "OCR Pipelines", level: "competent", context: "Text recognition and document digitizing architectures" },
    ],
  },
  {
    id: "web-tools",
    title: {
      en: "Web Technologies & Design Tools",
      ar: "تقنيات الويب والأدوات التصميمية",
    },
    subtitle: {
      en: "Modern frontend frameworks, technical writing, and visual assets",
      ar: "أطر عمل الويب الحديثة، التوثيق التقني، والتصميم البصري المتقن",
    },
    skills: [
      { name: "JavaScript (ES6+) / TypeScript", level: "core", context: "State management, DOM manipulation, and asynchronous APIs" },
      { name: "HTML5 & Modern CSS3", level: "core", context: "Semantic web standards, Flexbox, CSS Grid, and responsive design" },
      { name: "Next.js & React", level: "competent", context: "App Router, Server Components, and interactive sandboxes" },
      { name: "Git & GitHub", level: "core", context: "Version control, branching strategies, and repository hygiene" },
      { name: "Technical Documentation", level: "core", context: "Architectural specifications, SRS reports, and manuals" },
      { name: "Photoshop & Graphic Design", level: "competent", context: "UI mockups, asset optimization, and digital graphics" },
      { name: "Canva & Technical Presentations", level: "core", context: "High-impact academic and executive slide decks" },
      { name: "Microsoft Word (Advanced)", level: "core", context: "Enterprise academic formatting, tables, and indices" },
    ],
  },
];
