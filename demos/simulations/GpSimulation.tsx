"use client";

import React, { useState } from "react";
import { DemoShell } from "@/demos/shared/DemoShell";
import { DemoProps } from "@/demos/registry";
import {
  GraduationCap,
  FileText,
  CheckCircle2,
  XCircle,
  Clock,
  Send,
  Users,
  Building2,
  ShieldCheck,
  Search,
  Filter,
  Eye,
  Plus,
  ArrowRight,
  Sparkles,
  BookOpen,
  Scale,
  X,
} from "lucide-react";

interface GpProject {
  id: string;
  titleEn: string;
  titleAr: string;
  category: "apps" | "web" | "ai" | "systems";
  categoryEn: string;
  categoryAr: string;
  supervisorEn: string;
  supervisorAr: string;
  team: string[];
  abstractEn: string;
  abstractAr: string;
  status: "Approved" | "Under Review" | "Revision Needed";
  reviewNotes?: string;
  year: string;
}

export function GpSimulation({ locale = "en", isRtl = false }: DemoProps) {
  const isArabic = locale === "ar";

  const INITIAL_PROJECTS: GpProject[] = [
    {
      id: "GP-2026-01",
      titleEn: "Autonomous Quadcopter Navigation in GPS-Denied Environments",
      titleAr: "ملاحة ذاتية للطائرات المسيرة في البيئات المحجوبة عن نظام GPS",
      category: "ai",
      categoryEn: "AI & Robotics",
      categoryAr: "الذكاء الاصطناعي والروبوتات",
      supervisorEn: "Dr. Adel Al-Ghamdi",
      supervisorAr: "د. عادل الغامدي",
      team: ["Faisal Al-Otaibi", "Hassan Al-Shehri"],
      abstractEn: "Visual SLAM and edge neural networks for real-time indoor obstacle avoidance using stereo depth cameras.",
      abstractAr: "نظام ملاحة يعتمد على الرؤية الحاسوبية والشبكات العصبية لتفادي العوائق داخل المباني بدون إشارة أقمار صناعية.",
      status: "Approved",
      year: "2026",
    },
    {
      id: "GP-2026-02",
      titleEn: "Smart Campus Waste Management and IoT Route Optimization",
      titleAr: "إدارة النفايات الذكية في الحرم الجامعي وتحسين مسارات التجميع عبر IoT",
      category: "systems",
      categoryEn: "IoT & Smart Systems",
      categoryAr: "إنترنت الأشياء والأنظمة الذكية",
      supervisorEn: "Dr. Muna Al-Harbi",
      supervisorAr: "د. منى الحربي",
      team: ["Reem Al-Zahrani", "Sara Al-Dosari"],
      abstractEn: "Solar-powered ultrasonic bin sensors integrated with genetic algorithm route planners for campus logistics.",
      abstractAr: "مستشعرات بالموجات فوق الصوتية متصلة بالشبكة لتحسين مسارات سيارات الخدمات داخل الحرم الجامعي.",
      status: "Approved",
      year: "2026",
    },
    {
      id: "GP-2026-03",
      titleEn: "Decentralized Medical Record Auditing with Zero-Knowledge Proofs",
      titleAr: "تدقيق السجلات الطبية اللامركزية باستخدام براهين المعرفة الصفرية",
      category: "web",
      categoryEn: "Cybersecurity & Web",
      categoryAr: "الأمن السيبراني وتطبيقات الويب",
      supervisorEn: "Dr. Tariq Al-Amri",
      supervisorAr: "د. طارق العمري",
      team: ["Sultan Al-Mutairi", "Abdulaziz Al-Bishi"],
      abstractEn: "Privacy-preserving patient health data exchange compliant with regional healthcare data governance.",
      abstractAr: "منظومة آمنة لتبادل السجلات الطبية مع الحفاظ الكامل على سرية بيانات المرضى وحوكمة المعلومات الصحية.",
      status: "Under Review",
      year: "2026",
    },
    {
      id: "GP-2026-04",
      titleEn: "Real-Time Arabic Sign Language Translation Mobile Application",
      titleAr: "تطبيق جوال للترجمة الفورية للغة الإشارة العربية عبر الكاميرا",
      category: "apps",
      categoryEn: "Mobile Applications",
      categoryAr: "تطبيقات الجوال",
      supervisorEn: "Dr. Hind Al-Majed",
      supervisorAr: "د. هند الماجد",
      team: ["Noor Al-Qahtani", "Lama Al-Anazi"],
      abstractEn: "On-device transformer model parsing Arabic sign language gestures to synthetic speech in real-time.",
      abstractAr: "تطبيق جوال يعتمد على الذكاء الاصطناعي لتحويل إيماءات لغة الإشارة إلى صوت وكتابة عربية فورية.",
      status: "Approved",
      year: "2025",
    },
  ];

  const [projects, setProjects] = useState<GpProject[]>(INITIAL_PROJECTS);
  const [activeRole, setActiveRole] = useState<"student" | "admin">("student");
  const [activeView, setActiveView] = useState<"directory" | "submit" | "admin_queue">("directory");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProject, setSelectedProject] = useState<GpProject | null>(null);

  // Student proposal form state
  const [formTitle, setFormTitle] = useState("");
  const [formCategory, setFormCategory] = useState<"apps" | "web" | "ai" | "systems">("ai");
  const [formSupervisor, setFormSupervisor] = useState("Dr. Tariq Al-Amri");
  const [formTeam, setFormTeam] = useState("");
  const [formAbstract, setFormAbstract] = useState("");
  const [submitFeedback, setSubmitFeedback] = useState<string | null>(null);

  const handleSubmitProposal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim() || !formAbstract.trim()) return;

    const newProposal: GpProject = {
      id: `GP-2026-0${projects.length + 1}`,
      titleEn: formTitle,
      titleAr: formTitle,
      category: formCategory,
      categoryEn: formCategory.toUpperCase(),
      categoryAr: formCategory === "ai" ? "ذكاء اصطناعي" : formCategory === "web" ? "ويب وسحابة" : "تطبيقات جوال",
      supervisorEn: formSupervisor,
      supervisorAr: formSupervisor,
      team: formTeam ? formTeam.split(",").map((s) => s.trim()) : ["Student Submitter"],
      abstractEn: formAbstract,
      abstractAr: formAbstract,
      status: "Under Review",
      year: "2026",
    };

    setProjects([newProposal, ...projects]);
    setSubmitFeedback(
      isArabic
        ? "تم إرسال مقترح المشروع بنجاح! أحيلت المسودة إلى لجنة التحكيم والأستاذ المشرف."
        : "Proposal submitted successfully! Routed to department committee for review."
    );
    setFormTitle("");
    setFormAbstract("");
    setFormTeam("");
  };

  // Admin Review actions
  const handleApprove = (id: string) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status: "Approved", reviewNotes: "Proposal fully approved by academic council." } : p))
    );
  };

  const handleRequestRevision = (id: string) => {
    setProjects((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              status: "Revision Needed",
              reviewNotes: "Please expand Section 3 with detailed empirical evaluation benchmarks.",
            }
          : p
      )
    );
  };

  const handleReset = () => {
    setProjects(INITIAL_PROJECTS);
    setActiveRole("student");
    setActiveView("directory");
    setSelectedCategory("all");
    setSearchQuery("");
    setSelectedProject(null);
    setSubmitFeedback(null);
  };

  const filteredProjects = projects.filter((p) => {
    const matchesCat = selectedCategory === "all" || p.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      p.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.titleAr.includes(searchQuery) ||
      p.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const pendingProposals = projects.filter((p) => p.status === "Under Review" || p.status === "Revision Needed");

  return (
    <DemoShell
      title={isArabic ? "منصة مشاريع التخرج — بوابة المقترحات والاعتماد الأكاديمي" : "Graduation Project Portal — Academic Proposals & Review System"}
      categoryName={isArabic ? "الأنظمة الأكاديمية والويب" : "Academic Systems"}
      projectSlug="gp"
      locale={locale}
      disclaimer={{
        en: "This interactive showcase simulates the fullstack PHP 8 & MySQL Graduation Project platform. Role switching, proposal submissions, and faculty review decisions run safely client-side in the browser sandbox.",
        ar: "يحاكي هذا العرض منصة مشاريع التخرج المبنية بـ PHP 8 وMySQL. يمكنك التبديل بين دور الطالب لتقديم المقترح ودور المشرف الأكاديمي لاعتماد المشاريع أو طلب تعديلها.",
      }}
      onReset={handleReset}
      statusText="SESSION: ACTIVE // PHP MOCK OK"
      statusItems={[
        { label: isArabic ? "الدور الحالي" : "ACTIVE ROLE", value: activeRole.toUpperCase() },
        { label: isArabic ? "المشاريع المعتمدة" : "APPROVED", value: `${projects.filter((p) => p.status === "Approved").length}` },
        { label: isArabic ? "قيد المراجعة" : "PENDING", value: `${pendingProposals.length}` },
      ]}
      toolbarActions={
        /* Role Switcher in Toolbar */
        <div className="flex items-center gap-1 bg-surface border border-border rounded-lg p-0.5 text-xs font-mono">
          <button
            onClick={() => {
              setActiveRole("student");
              if (activeView === "admin_queue") setActiveView("directory");
            }}
            className={`px-2.5 py-1 rounded transition-colors flex items-center gap-1.5 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-gold/50 focus-visible:outline-none ${
              activeRole === "student"
                ? "bg-brand-gold text-surface-dark font-bold shadow-sm"
                : "text-text-muted hover:text-text-primary"
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{isArabic ? "طالب" : "Student"}</span>
          </button>
          <button
            onClick={() => {
              setActiveRole("admin");
              setActiveView("admin_queue");
            }}
            className={`px-2.5 py-1 rounded transition-colors flex items-center gap-1.5 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-gold/50 focus-visible:outline-none ${
              activeRole === "admin"
                ? "bg-brand-gold text-surface-dark font-bold shadow-sm"
                : "text-text-muted hover:text-text-primary"
            }`}
          >
            <Scale className="w-3.5 h-3.5" />
            <span>{isArabic ? "مشرف أكاديمي" : "Faculty Admin"}</span>
          </button>
        </div>
      }
    >
      <div className="p-3 sm:p-5 bg-surface text-text-primary min-h-[580px] flex flex-col font-sans">
        {/* Navigation Ribbon Bar */}
        <div className="flex items-center justify-between border-b border-border/80 pb-3 mb-4 flex-wrap gap-2">
          <div className="flex items-center gap-1.5 text-xs font-mono">
            <button
              onClick={() => setActiveView("directory")}
              className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                activeView === "directory"
                  ? "bg-brand-gold text-surface-dark font-bold shadow"
                  : "bg-surface-secondary border border-border text-text-muted hover:text-text-primary"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>{isArabic ? "دليل المشاريع المعتمدة" : "Approved Directory"}</span>
            </button>

            {activeRole === "student" && (
              <button
                onClick={() => setActiveView("submit")}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                  activeView === "submit"
                    ? "bg-brand-gold text-surface-dark font-bold shadow"
                    : "bg-surface-secondary border border-border text-text-muted hover:text-text-primary"
                }`}
              >
                <Plus className="w-3.5 h-3.5" />
                <span>{isArabic ? "تقديم مقترح جديد" : "Submit Proposal"}</span>
              </button>
            )}

            {activeRole === "admin" && (
              <button
                onClick={() => setActiveView("admin_queue")}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                  activeView === "admin_queue"
                    ? "bg-brand-gold text-surface-dark font-bold shadow"
                    : "bg-surface-secondary border border-border text-text-muted hover:text-text-primary"
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>
                  {isArabic ? "لجنة التحكيم والمراجعة" : "Moderation Queue"} ({pendingProposals.length})
                </span>
              </button>
            )}
          </div>

          <div className="text-[11px] font-mono text-text-dim flex items-center gap-2">
            <span>{isArabic ? `المستخدم المسجل: ${activeRole === "admin" ? "المدير العام (admin)" : "عبدالغني (abdulghani)"}` : `AUTH: ${activeRole.toUpperCase()}_SESSION`}</span>
          </div>
        </div>

        {/* VIEW 1: APPROVED PROJECT DIRECTORY */}
        {activeView === "directory" && (
          <div className="space-y-4">
            {/* Filter and Search */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-surface-secondary/40 p-3 rounded-xl border border-border">
              <div className="flex items-center gap-1.5 overflow-x-auto text-xs font-mono pb-1 sm:pb-0">
                {[
                  { id: "all", en: "All Projects", ar: "جميع المشاريع" },
                  { id: "ai", en: "AI & Data", ar: "ذكاء اصطناعي" },
                  { id: "systems", en: "Systems & IoT", ar: "أنظمة و IoT" },
                  { id: "web", en: "Web & Security", ar: "ويب وأمن" },
                  { id: "apps", en: "Mobile Apps", ar: "تطبيقات جوال" },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-2.5 py-1 rounded-lg whitespace-nowrap transition-colors ${
                      selectedCategory === cat.id
                        ? "bg-brand-gold/20 text-brand-gold border border-brand-gold/40 font-bold"
                        : "bg-surface border border-border text-text-muted hover:text-text-primary"
                    }`}
                  >
                    {isArabic ? cat.ar : cat.en}
                  </button>
                ))}
              </div>

              <div className="relative min-w-[200px]">
                <Search className="w-3.5 h-3.5 absolute top-1/2 -translate-y-1/2 left-3 rtl:left-auto rtl:right-3 text-text-dim" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={isArabic ? "بحث في المشاريع..." : "Search project index..."}
                  className="w-full bg-surface border border-border rounded-lg pl-8 pr-3 rtl:pl-3 rtl:pr-8 py-1.5 text-xs text-text-primary focus:outline-none focus:border-brand-gold"
                />
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="p-4 bg-surface-secondary/30 border border-border hover:border-brand-gold/40 rounded-xl flex flex-col justify-between gap-3 transition-colors"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="font-mono text-[10px] font-bold text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded border border-brand-gold/30">
                        {project.id} // {project.year}
                      </span>
                      <span
                        className={`text-[9px] font-mono px-2 py-0.5 rounded font-bold ${
                          project.status === "Approved"
                            ? "bg-emerald-500/15 text-emerald-400"
                            : project.status === "Revision Needed"
                            ? "bg-rose-500/15 text-rose-400"
                            : "bg-amber-500/15 text-amber-400"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>

                    <h3 className="font-bold text-xs sm:text-sm text-text-primary mb-1 leading-snug">
                      {isArabic ? project.titleAr : project.titleEn}
                    </h3>
                    <p className="text-[11px] text-text-dim leading-relaxed line-clamp-2">
                      {isArabic ? project.abstractAr : project.abstractEn}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-border/60 flex items-center justify-between text-xs text-text-muted">
                    <div className="text-[10px] font-mono truncate">
                      <span className="text-text-dim">{isArabic ? "المشرف:" : "Supervisor:"}</span>{" "}
                      <span className="text-text-primary">{isArabic ? project.supervisorAr : project.supervisorEn}</span>
                    </div>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-2.5 py-1 rounded bg-surface border border-border hover:border-brand-gold/50 text-brand-gold text-[10px] font-mono flex items-center gap-1"
                    >
                      <Eye className="w-3 h-3" />
                      <span>{isArabic ? "التفاصيل" : "Abstract"}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="p-10 text-center text-text-dim text-xs font-mono">
                {isArabic ? "لا توجد مشاريع مطابقة للبحث." : "No projects match your filter."}
              </div>
            )}
          </div>
        )}

        {/* VIEW 2: SUBMIT PROPOSAL (STUDENT ROLE) */}
        {activeView === "submit" && (
          <div className="max-w-xl mx-auto py-2 w-full space-y-4">
            <div className="bg-surface-secondary/40 border border-border rounded-xl p-5 space-y-4">
              <div className="flex items-center gap-2 text-brand-gold font-mono text-xs font-bold">
                <GraduationCap className="w-4 h-4" />
                <span>{isArabic ? "نموذج تقديم مقترح مشروع التخرج" : "SUBMIT GRADUATION PROJECT PROPOSAL"}</span>
              </div>
              <p className="text-xs text-text-dim leading-relaxed">
                {isArabic
                  ? "يرجى تعبئة بيانات المقترح البحثي وفريق العمل ليتم عرضه على لجنة مشاريع التخرج بالقسم."
                  : "Submit proposal parameters and student team members for academic committee evaluation."}
              </p>

              {submitFeedback ? (
                <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex flex-col gap-2">
                  <div className="flex items-center gap-2 font-bold font-mono">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{isArabic ? "تم استلام المقترح بنجاح" : "SUBMISSION CONFIRMED"}</span>
                  </div>
                  <p className="text-[11px] leading-relaxed">{submitFeedback}</p>
                  <button
                    onClick={() => {
                      setSubmitFeedback(null);
                      setActiveView("directory");
                    }}
                    className="self-start mt-2 px-3 py-1 bg-emerald-500 text-surface-dark font-bold text-[10px] rounded font-mono"
                  >
                    {isArabic ? "العودة لدليل المشاريع" : "Return to Directory"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitProposal} className="space-y-3 text-xs">
                  <div>
                    <label className="block text-text-muted text-[11px] mb-1 font-mono">
                      {isArabic ? "عنوان المشروع المقترح:" : "Project Title:"}
                    </label>
                    <input
                      required
                      value={formTitle}
                      onChange={(e) => setFormTitle(e.target.value)}
                      placeholder={isArabic ? "مثال: نظام ذكي للرصد البيئي..." : "e.g., Deep Learning for Autonomous Systems"}
                      className="w-full bg-surface border border-border rounded-lg px-3 py-2 text-text-primary focus:outline-none focus:border-brand-gold"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-text-muted text-[11px] mb-1 font-mono">
                        {isArabic ? "المسار الأكاديمي:" : "Academic Track:"}
                      </label>
                      <select
                        value={formCategory}
                        onChange={(e) => setFormCategory(e.target.value as any)}
                        className="w-full bg-surface border border-border rounded-lg px-3 py-2 text-text-primary focus:outline-none focus:border-brand-gold font-mono text-xs"
                      >
                        <option value="ai">AI & Data Science</option>
                        <option value="systems">IoT & Systems</option>
                        <option value="web">Web & Cybersecurity</option>
                        <option value="apps">Mobile Applications</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-text-muted text-[11px] mb-1 font-mono">
                        {isArabic ? "المشرف الأكاديمي المقترح:" : "Preferred Supervisor:"}
                      </label>
                      <select
                        value={formSupervisor}
                        onChange={(e) => setFormSupervisor(e.target.value)}
                        className="w-full bg-surface border border-border rounded-lg px-3 py-2 text-text-primary focus:outline-none focus:border-brand-gold font-mono text-xs"
                      >
                        <option value="Dr. Adel Al-Ghamdi">Dr. Adel Al-Ghamdi</option>
                        <option value="Dr. Tariq Al-Amri">Dr. Tariq Al-Amri</option>
                        <option value="Dr. Muna Al-Harbi">Dr. Muna Al-Harbi</option>
                        <option value="Dr. Hind Al-Majed">Dr. Hind Al-Majed</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-text-muted text-[11px] mb-1 font-mono">
                      {isArabic ? "أعضاء الفريق (مفصولين بفاصلة):" : "Team Members (Comma Separated):"}
                    </label>
                    <input
                      value={formTeam}
                      onChange={(e) => setFormTeam(e.target.value)}
                      placeholder={isArabic ? "عبدالغني الشبامي، أحمد المنصور" : "Abdulghani Al-Shibami, Ahmad Mansoor"}
                      className="w-full bg-surface border border-border rounded-lg px-3 py-2 text-text-primary focus:outline-none focus:border-brand-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-text-muted text-[11px] mb-1 font-mono">
                      {isArabic ? "الملخص والأهداف الفنية:" : "Abstract & Technical Scope:"}
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formAbstract}
                      onChange={(e) => setFormAbstract(e.target.value)}
                      placeholder={isArabic ? "اشرح المشكلة والحل المقترح والتقنيات..." : "Describe problem statement and expected deliverables..."}
                      className="w-full bg-surface border border-border rounded-lg px-3 py-2 text-text-primary focus:outline-none focus:border-brand-gold"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-brand-gold text-surface-dark font-bold rounded-lg hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 shadow font-mono"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isArabic ? "رفع المقترح للجنة الأكاديمية" : "Submit to Department Committee"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {/* VIEW 3: ADMIN MODERATION QUEUE (FACULTY ADMIN ROLE) */}
        {activeView === "admin_queue" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-border">
              <span className="font-bold text-text-primary">
                {isArabic ? "قائمة المقترحات الواردة للجنة الأكاديمية" : "FACULTY PROPOSAL EVALUATION DESK"}
              </span>
              <span className="text-[10px] text-text-dim">
                {pendingProposals.length} {isArabic ? "مقترحات معلقة" : "pending proposals"}
              </span>
            </div>

            <div className="space-y-3">
              {pendingProposals.map((proposal) => (
                <div
                  key={proposal.id}
                  className="p-4 bg-surface-secondary/40 border border-border rounded-xl space-y-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] text-brand-gold font-bold">{proposal.id}</span>
                        <span className="font-bold text-xs sm:text-sm text-text-primary">
                          {isArabic ? proposal.titleAr : proposal.titleEn}
                        </span>
                      </div>
                      <div className="text-[10px] text-text-dim mt-1 font-mono">
                        {isArabic ? "المشرف:" : "Supervisor:"} {isArabic ? proposal.supervisorAr : proposal.supervisorEn} •{" "}
                        {isArabic ? "الفريق:" : "Team:"} {proposal.team.join(", ")}
                      </div>
                    </div>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-amber-500/15 text-amber-400 font-bold shrink-0">
                      {proposal.status}
                    </span>
                  </div>

                  <p className="text-xs text-text-muted leading-relaxed bg-surface p-3 rounded-lg border border-border/60">
                    {isArabic ? proposal.abstractAr : proposal.abstractEn}
                  </p>

                  <div className="flex items-center justify-end gap-2 text-xs font-mono pt-1">
                    <button
                      onClick={() => handleRequestRevision(proposal.id)}
                      className="px-3 py-1.5 rounded-lg bg-surface border border-rose-500/40 text-rose-400 hover:bg-rose-500/10 transition-colors flex items-center gap-1.5"
                    >
                      <XCircle className="w-3.5 h-3.5" />
                      <span>{isArabic ? "طلب تعديلات" : "Request Revision"}</span>
                    </button>
                    <button
                      onClick={() => handleApprove(proposal.id)}
                      className="px-3 py-1.5 rounded-lg bg-emerald-500 text-surface-dark font-bold hover:brightness-110 transition-all flex items-center gap-1.5 shadow"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{isArabic ? "اعتماد المشروع" : "Approve Proposal"}</span>
                    </button>
                  </div>
                </div>
              ))}

              {pendingProposals.length === 0 && (
                <div className="p-12 text-center text-xs font-mono text-text-dim bg-surface-secondary/20 rounded-xl border border-dashed border-border">
                  {isArabic
                    ? "لا توجد مقترحات معلقة حالياً، جميع المقترحات تمت مراجعتها."
                    : "All submitted proposals have been adjudicated."}
                </div>
              )}
            </div>
          </div>
        )}

        {/* MODAL: PROJECT DETAIL / ABSTRACT */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="w-full max-w-lg bg-surface border border-brand-gold/40 rounded-xl p-5 shadow-2xl space-y-4 font-sans">
              <div className="flex items-start justify-between border-b border-border pb-3">
                <div>
                  <div className="font-mono text-[10px] text-brand-gold font-bold">{selectedProject.id}</div>
                  <h3 className="font-bold text-sm text-text-primary mt-0.5">
                    {isArabic ? selectedProject.titleAr : selectedProject.titleEn}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1 rounded hover:bg-surface-secondary text-text-dim cursor-pointer"
                  aria-label="Close Project Details"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <div className="text-[10px] font-mono text-text-dim uppercase tracking-wider mb-1">
                    {isArabic ? "الملخص العلمي" : "PROJECT ABSTRACT"}
                  </div>
                  <p className="text-text-muted leading-relaxed bg-surface-secondary/40 p-3 rounded-lg border border-border">
                    {isArabic ? selectedProject.abstractAr : selectedProject.abstractEn}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 font-mono text-[11px]">
                  <div className="p-2.5 rounded bg-surface-secondary/40 border border-border">
                    <span className="text-text-dim block text-[10px]">{isArabic ? "الأستاذ المشرف" : "SUPERVISOR"}</span>
                    <span className="font-bold text-text-primary">
                      {isArabic ? selectedProject.supervisorAr : selectedProject.supervisorEn}
                    </span>
                  </div>
                  <div className="p-2.5 rounded bg-surface-secondary/40 border border-border">
                    <span className="text-text-dim block text-[10px]">{isArabic ? "حالة الاعتماد" : "APPROVAL STATUS"}</span>
                    <span className="font-bold text-emerald-400">{selectedProject.status}</span>
                  </div>
                </div>

                <div className="p-2.5 rounded bg-surface-secondary/40 border border-border font-mono text-[11px]">
                  <span className="text-text-dim block text-[10px] mb-1">{isArabic ? "فريق العمل الطلابي" : "STUDENT TEAM"}</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.team.map((member, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-surface border border-border text-text-primary">
                        {member}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="w-full py-2 bg-surface-secondary hover:bg-brand-gold hover:text-surface-dark font-bold text-xs rounded-lg transition-colors font-mono"
              >
                {isArabic ? "إغلاق" : "Close Details"}
              </button>
            </div>
          </div>
        )}
      </div>
    </DemoShell>
  );
}
