"use client";

import React, { useState } from "react";
import { DemoShell } from "@/demos/shared/DemoShell";
import { DemoProps } from "@/demos/registry";
import {
  Server,
  Network,
  Monitor,
  LayoutDashboard,
  MapPin,
  Kanban,
  FileCheck2,
  RefreshCw,
  Activity,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Send,
  Plus,
  ArrowRight,
  ArrowLeft,
  UserCheck,
  ShieldCheck,
  Search,
  SlidersHorizontal,
} from "lucide-react";

interface CampusAsset {
  id: string;
  name: string;
  type: "Workstation" | "Server" | "Switch" | "Printer";
  roomEn: string;
  roomAr: string;
  departmentEn: string;
  departmentAr: string;
  assignedTo: string;
  status: "In Service" | "Maintenance" | "Available";
  specs: string;
}

interface ITILTicket {
  id: string;
  titleEn: string;
  titleAr: string;
  assetId: string;
  roomEn: string;
  roomAr: string;
  stage: "New" | "Triaged" | "In Progress" | "Resolved";
  severity: "Critical" | "High" | "Medium" | "Low";
  assignee: string;
}

export function CampusITTrackerSimulation({ locale = "en", isRtl = false }: DemoProps) {
  const isArabic = locale === "ar";
  const NextColIcon = isArabic ? ArrowLeft : ArrowRight;

  const INITIAL_ASSETS: CampusAsset[] = [
    {
      id: "AST-1042",
      name: "Dell OptiPlex 7090 MT",
      type: "Workstation",
      roomEn: "Lab 302 (CS Dept)",
      roomAr: "معمل ٣٠٢ (قسم الحاسب)",
      departmentEn: "Computer Science",
      departmentAr: "علوم الحاسب",
      assignedTo: "Dr. Tariq Al-Amri",
      status: "In Service",
      specs: "Intel Core i7-11700 / 32GB RAM / 1TB NVMe",
    },
    {
      id: "AST-1043",
      name: "Dell OptiPlex 7090 MT",
      type: "Workstation",
      roomEn: "Lab 302 (CS Dept)",
      roomAr: "معمل ٣٠٢ (قسم الحاسب)",
      departmentEn: "Computer Science",
      departmentAr: "علوم الحاسب",
      assignedTo: "Student Station 14",
      status: "Maintenance",
      specs: "Intel Core i7-11700 / 16GB RAM / 512GB SSD",
    },
    {
      id: "AST-2019",
      name: "Cisco Catalyst 3850-48P",
      type: "Switch",
      roomEn: "Rack A2 (Central Server Room)",
      roomAr: "كابينة A2 (غرفة الخوادم الرئيسية)",
      departmentEn: "IT Infrastructure",
      departmentAr: "البنية التحتية",
      assignedTo: "Network NOC",
      status: "In Service",
      specs: "48 Port PoE+ / 10G SFP+ Uplinks / Layer 3",
    },
    {
      id: "AST-3004",
      name: "Dell PowerEdge R740 Server",
      type: "Server",
      roomEn: "Rack B1 (Central Server Room)",
      roomAr: "كابينة B1 (غرفة الخوادم الرئيسية)",
      departmentEn: "Enterprise Services",
      departmentAr: "الخدمات المؤسسية",
      assignedTo: "Database Admin",
      status: "In Service",
      specs: "Dual Xeon Gold 6248R / 128GB ECC / 8x 2TB SAS RAID 10",
    },
    {
      id: "AST-4051",
      name: "HP LaserJet Enterprise M608",
      type: "Printer",
      roomEn: "Bldg 01 (Dean Office)",
      roomAr: "المبنى ٠١ (مكتب العميد)",
      departmentEn: "Administration",
      departmentAr: "الشؤون الإدارية",
      assignedTo: "Admin Secretary",
      status: "In Service",
      specs: "High-speed Duplex Network Monochrome Laser",
    },
    {
      id: "AST-1088",
      name: "Lenovo ThinkCentre M920x",
      type: "Workstation",
      roomEn: "IT Warehouse",
      roomAr: "مستودع تقنية المعلومات",
      departmentEn: "IT Inventory",
      departmentAr: "مستودع الأجهزة",
      assignedTo: "Unassigned",
      status: "Available",
      specs: "Intel Core i5-9500 / 16GB RAM / 512GB SSD",
    },
  ];

  const INITIAL_TICKETS: ITILTicket[] = [
    {
      id: "INC-8941",
      titleEn: "Packet loss and high jitter on Lab 302 switch link",
      titleAr: "فقدان حزم وارتفاع زمن الاستجابة على محول معمل ٣٠٢",
      assetId: "AST-2019",
      roomEn: "Lab 302",
      roomAr: "معمل ٣٠٢",
      stage: "In Progress",
      severity: "High",
      assignee: "Eng. Abdulghani",
    },
    {
      id: "INC-8945",
      titleEn: "OptiPlex station 14 fails memory self-test (POST Error)",
      titleAr: "محطة العمل ١٤ تفشل في فحص الذاكرة الذاتي أثناء الإقلاع",
      assetId: "AST-1043",
      roomEn: "Lab 302",
      roomAr: "معمل ٣٠٢",
      stage: "Triaged",
      severity: "Medium",
      assignee: "Hardware Tech",
    },
    {
      id: "INC-8950",
      titleEn: "Firmware security patch scheduling for Core Gateway",
      titleAr: "جدولة التحديث الأمني لنظام تشغيل البوابة المركزية",
      assetId: "AST-3004",
      roomEn: "Server Room",
      roomAr: "غرفة الخوادم",
      stage: "New",
      severity: "Low",
      assignee: "Security Officer",
    },
    {
      id: "INC-8930",
      titleEn: "Paper jam sensor replacement in Dean administration office",
      titleAr: "استبدال مستشعر انحشار الورق في طابعة مكتب العميد",
      assetId: "AST-4051",
      roomEn: "Bldg 01",
      roomAr: "مبنى ٠١",
      stage: "Resolved",
      severity: "Low",
      assignee: "Field Tech",
    },
  ];

  const [activeTab, setActiveTab] = useState<"dashboard" | "map" | "kanban" | "inventory" | "transfer">("dashboard");
  const [assets, setAssets] = useState<CampusAsset[]>(INITIAL_ASSETS);
  const [tickets, setTickets] = useState<ITILTicket[]>(INITIAL_TICKETS);
  const [selectedRoom, setSelectedRoom] = useState<string>("Lab 302");
  const [transferAssetId, setTransferAssetId] = useState<string>("AST-1088");
  const [transferRecipient, setTransferRecipient] = useState<string>("Dr. Khalid Al-Zahrani (ECE Dept)");
  const [transferSuccess, setTransferSuccess] = useState<string | null>(null);
  const [searchAsset, setSearchAsset] = useState<string>("");

  // ITIL Kanban Stage Progression
  const STAGES: Array<"New" | "Triaged" | "In Progress" | "Resolved"> = ["New", "Triaged", "In Progress", "Resolved"];

  const progressTicket = (ticketId: string) => {
    setTickets((prev) =>
      prev.map((t) => {
        if (t.id === ticketId) {
          const currentIdx = STAGES.indexOf(t.stage);
          const nextStage = STAGES[Math.min(currentIdx + 1, STAGES.length - 1)];
          return { ...t, stage: nextStage };
        }
        return t;
      })
    );
  };

  const regressTicket = (ticketId: string) => {
    setTickets((prev) =>
      prev.map((t) => {
        if (t.id === ticketId) {
          const currentIdx = STAGES.indexOf(t.stage);
          const prevStage = STAGES[Math.max(currentIdx - 1, 0)];
          return { ...t, stage: prevStage };
        }
        return t;
      })
    );
  };

  // Custody transfer
  const handleCustodyTransfer = (e: React.FormEvent) => {
    e.preventDefault();
    setAssets((prev) =>
      prev.map((a) =>
        a.id === transferAssetId
          ? {
              ...a,
              assignedTo: transferRecipient,
              status: "In Service",
              roomEn: "Faculty Office 214",
              roomAr: "مكتب أعضاء هيئة التدريس ٢١٤",
            }
          : a
      )
    );
    setTransferSuccess(
      isArabic
        ? `تم تحويل عهدة الجهاز [${transferAssetId}] بنجاح للمستلم: ${transferRecipient}`
        : `Custody for asset [${transferAssetId}] successfully transferred to ${transferRecipient}`
    );
  };

  const handleReset = () => {
    setAssets(INITIAL_ASSETS);
    setTickets(INITIAL_TICKETS);
    setSelectedRoom("Lab 302");
    setTransferAssetId("AST-1088");
    setTransferSuccess(null);
    setSearchAsset("");
    setActiveTab("dashboard");
  };

  const filteredAssets = assets.filter(
    (a) =>
      searchAsset.trim() === "" ||
      a.id.toLowerCase().includes(searchAsset.toLowerCase()) ||
      a.name.toLowerCase().includes(searchAsset.toLowerCase()) ||
      a.assignedTo.toLowerCase().includes(searchAsset.toLowerCase())
  );

  return (
    <DemoShell
      title={isArabic ? "نظام تتبع شبكات وأصول الحرم الجامعي — محاكي ITIL والأجهزة" : "Campus IT Infrastructure Tracker — ITIL & Asset Simulator"}
      categoryName={isArabic ? "أنظمة سطح المكتب والبنية التحتية" : "Desktop Systems"}
      projectSlug="campus-it-tracker"
      locale={locale}
      disclaimer={{
        en: "This interactive simulation faithfully reproduces the C# .NET WinForms application architecture and Oracle backend workflows. All ITIL ticket lifecycles, campus maps, and custody transfers execute safely client-side.",
        ar: "هذه المحاكاة التفاعلية تعيد إنتاج البنية المعمارية لتطبيق C# WinForms مع قاعدة بيانات Oracle. كافة مسارات تذاكر ITIL والخرائط ونقل العهدة تعمل محلياً داخل المتصفح.",
      }}
      onReset={handleReset}
      statusText="ORACLE SCHEMA: SIMULATED // ITIL OK"
      statusItems={[
        { label: isArabic ? "الأجهزة المدارة" : "ASSETS", value: `${assets.length}` },
        { label: isArabic ? "البلاغات المفتوحة" : "OPEN INCIDENTS", value: `${tickets.filter((t) => t.stage !== "Resolved").length}` },
        { label: isArabic ? "صحة الشبكة" : "NETWORK HEALTH", value: "98.4%" },
      ]}
    >
      <div className="p-3 sm:p-5 bg-surface text-text-primary min-h-[580px] flex flex-col font-sans">
        {/* Navigation Ribbon Bar */}
        <div className="flex items-center justify-between border-b border-border/80 pb-3 mb-4 flex-wrap gap-2">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 text-xs font-mono">
            {[
              { id: "dashboard", labelEn: "Overview Dashboard", labelAr: "لوحة المؤشرات", icon: LayoutDashboard },
              { id: "map", labelEn: "Campus Map & Labs", labelAr: "خريطة القاعات والمعامل", icon: MapPin },
              { id: "kanban", labelEn: "ITIL Service Desk", labelAr: "مكتب خدمة ITIL", icon: Kanban },
              { id: "inventory", labelEn: "Hardware Inventory", labelAr: "سجل العهد والأجهزة", icon: Monitor },
              { id: "transfer", labelEn: "Custody Transfer", labelAr: "تحويل العهدة والتوقيع", icon: UserCheck },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all text-xs ${
                    activeTab === tab.id
                      ? "bg-brand-gold text-surface-dark font-bold shadow"
                      : "bg-surface-secondary/70 border border-border text-text-muted hover:text-text-primary"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{isArabic ? tab.labelAr : tab.labelEn}</span>
                </button>
              );
            })}
          </div>

          <div className="text-[11px] font-mono text-text-dim flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{isArabic ? "قاعدة بيانات أوراكل: متصلة محلياً" : "ORACLE_XE // LOCAL_MOCK"}</span>
          </div>
        </div>

        {/* TAB 1: OVERVIEW DASHBOARD */}
        {activeTab === "dashboard" && (
          <div className="space-y-4">
            {/* KPI Metric Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
              <div className="p-3.5 bg-surface-secondary/40 border border-border rounded-xl">
                <div className="text-[10px] text-text-dim">{isArabic ? "إجمالي الأجهزة" : "TOTAL ASSETS"}</div>
                <div className="text-xl sm:text-2xl font-bold text-text-primary mt-1">{assets.length}</div>
                <div className="text-[10px] text-emerald-400 mt-1">100% AUDITED</div>
              </div>
              <div className="p-3.5 bg-surface-secondary/40 border border-border rounded-xl">
                <div className="text-[10px] text-text-dim">{isArabic ? "في الخدمة النشطة" : "IN SERVICE"}</div>
                <div className="text-xl sm:text-2xl font-bold text-emerald-400 mt-1">
                  {assets.filter((a) => a.status === "In Service").length}
                </div>
                <div className="text-[10px] text-text-dim mt-1">OPERATIONAL</div>
              </div>
              <div className="p-3.5 bg-surface-secondary/40 border border-border rounded-xl">
                <div className="text-[10px] text-text-dim">{isArabic ? "بلاغات ITIL النشطة" : "ACTIVE INCIDENTS"}</div>
                <div className="text-xl sm:text-2xl font-bold text-amber-400 mt-1">
                  {tickets.filter((t) => t.stage !== "Resolved").length}
                </div>
                <div className="text-[10px] text-text-dim mt-1">UNDER TRIAGE</div>
              </div>
              <div className="p-3.5 bg-surface-secondary/40 border border-border rounded-xl">
                <div className="text-[10px] text-text-dim">{isArabic ? "في الصيانة" : "IN MAINTENANCE"}</div>
                <div className="text-xl sm:text-2xl font-bold text-rose-400 mt-1">
                  {assets.filter((a) => a.status === "Maintenance").length}
                </div>
                <div className="text-[10px] text-text-dim mt-1">REPAIR QUEUE</div>
              </div>
            </div>

            {/* Quick Priority Incidents & Recent Telemetry */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="p-4 bg-surface-secondary/30 border border-border rounded-xl space-y-3">
                <div className="flex items-center justify-between text-xs font-mono font-bold">
                  <span>{isArabic ? "أحدث تذاكر الدعم الفني الطارئة" : "HIGH-PRIORITY INCIDENT QUEUE"}</span>
                  <button
                    onClick={() => setActiveTab("kanban")}
                    className="text-brand-gold hover:underline text-[11px]"
                  >
                    {isArabic ? "عرض لوحة كانبان" : "Open Kanban"}
                  </button>
                </div>
                <div className="space-y-2">
                  {tickets.slice(0, 3).map((ticket) => (
                    <div
                      key={ticket.id}
                      className="p-2.5 bg-surface border border-border rounded-lg flex items-center justify-between text-xs"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-brand-gold text-[10px]">{ticket.id}</span>
                          <span className="font-bold text-text-primary">
                            {isArabic ? ticket.titleAr : ticket.titleEn}
                          </span>
                        </div>
                        <div className="text-[10px] text-text-dim mt-0.5">
                          {isArabic ? ticket.roomAr : ticket.roomEn} • {ticket.assignee}
                        </div>
                      </div>
                      <span
                        className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded ${
                          ticket.stage === "Resolved"
                            ? "bg-emerald-500/15 text-emerald-400"
                            : "bg-amber-500/15 text-amber-400"
                        }`}
                      >
                        {ticket.stage}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-surface-secondary/30 border border-border rounded-xl space-y-3">
                <div className="text-xs font-mono font-bold text-text-primary flex items-center justify-between">
                  <span>{isArabic ? "حالة الخوادم وغرف البيانات" : "SERVER ROOM RACK TELEMETRY"}</span>
                  <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-mono">
                    <Activity className="w-3 h-3" /> NORMAL
                  </span>
                </div>
                <div className="space-y-2.5 text-xs font-mono">
                  <div className="p-2.5 bg-surface border border-border rounded-lg flex justify-between items-center">
                    <div>
                      <div className="font-bold">Dell PowerEdge R740 (Oracle DB)</div>
                      <div className="text-[10px] text-text-dim">Rack B1 • IP 10.0.0.5</div>
                    </div>
                    <div className="text-right">
                      <div className="text-emerald-400 font-bold">UPTIME 99.98%</div>
                      <div className="text-[10px] text-text-dim">CPU: 18% | RAM: 42%</div>
                    </div>
                  </div>
                  <div className="p-2.5 bg-surface border border-border rounded-lg flex justify-between items-center">
                    <div>
                      <div className="font-bold">Cisco Catalyst 3850 Core Switch</div>
                      <div className="text-[10px] text-text-dim">Rack A2 • IP 10.0.0.1</div>
                    </div>
                    <div className="text-right">
                      <div className="text-emerald-400 font-bold">1.2 ms PING</div>
                      <div className="text-[10px] text-text-dim">Ports 48/48 OK</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: CAMPUS MAP & LABS */}
        {activeTab === "map" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-border flex-wrap gap-2">
              <span className="font-bold text-text-primary">
                {isArabic ? "مخطط الحرم الجامعي والمختبرات النشطة" : "INTERACTIVE CAMPUS FLOORPLAN TOPOLOGY"}
              </span>
              <span className="text-[10px] text-text-dim">
                {isArabic ? "اختر القاعة لفحص الأجهزة المتصلة" : "Click a campus zone to inspect installed hardware"}
              </span>
            </div>

            {/* Simulated Interactive Campus Zones Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { id: "Lab 302", labelEn: "Computer Lab 302", labelAr: "معمل الحاسب ٣٠٢", count: 2, icon: Monitor },
                { id: "Rack A2", labelEn: "Server Room (Rack A2)", labelAr: "غرفة الخوادم (كابينة A2)", count: 1, icon: Network },
                { id: "Rack B1", labelEn: "Database Rack (B1)", labelAr: "كابينة قواعد البيانات (B1)", count: 1, icon: Server },
                { id: "Bldg 01", labelEn: "Administration Hall", labelAr: "المبنى الإداري ٠١", count: 1, icon: MapPin },
              ].map((zone) => {
                const Icon = zone.icon;
                const isSelected = selectedRoom === zone.id;
                return (
                  <button
                    key={zone.id}
                    onClick={() => setSelectedRoom(zone.id)}
                    className={`p-3.5 rounded-xl border text-left rtl:text-right transition-all flex flex-col justify-between h-28 ${
                      isSelected
                        ? "bg-brand-gold/15 border-brand-gold shadow-md"
                        : "bg-surface-secondary/40 border-border hover:border-brand-gold/40"
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <Icon className={`w-5 h-5 ${isSelected ? "text-brand-gold" : "text-text-dim"}`} />
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-surface border border-border text-text-muted">
                        {zone.count} {isArabic ? "أجهزة" : "Devices"}
                      </span>
                    </div>
                    <div>
                      <div className="font-bold text-xs sm:text-sm text-text-primary">
                        {isArabic ? zone.labelAr : zone.labelEn}
                      </div>
                      <div className="text-[10px] font-mono text-text-dim mt-0.5">STATUS: NORMAL</div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Devices in Selected Room */}
            <div className="bg-surface-secondary/30 border border-border rounded-xl p-4 space-y-3">
              <div className="text-xs font-mono font-bold text-brand-gold flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5" />
                <span>
                  {isArabic ? `الأجهزة المسجلة في القاعة: ${selectedRoom}` : `EQUIPMENT DEPLOYED IN: ${selectedRoom}`}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {assets
                  .filter((a) => a.roomEn.includes(selectedRoom) || selectedRoom.includes("Lab") && a.roomEn.includes("Lab 302"))
                  .map((asset) => (
                    <div
                      key={asset.id}
                      className="p-3 bg-surface border border-border rounded-lg flex items-start justify-between gap-3 text-xs"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] font-bold text-brand-gold">{asset.id}</span>
                          <span className="font-bold text-text-primary">{asset.name}</span>
                        </div>
                        <div className="text-[11px] text-text-dim font-mono mt-1">{asset.specs}</div>
                        <div className="text-[10px] text-text-muted mt-1">
                          {isArabic ? "المستلم:" : "Assigned to:"} {asset.assignedTo}
                        </div>
                      </div>
                      <span
                        className={`text-[9px] font-mono px-2 py-0.5 rounded font-bold ${
                          asset.status === "In Service"
                            ? "bg-emerald-500/15 text-emerald-400"
                            : "bg-amber-500/15 text-amber-400"
                        }`}
                      >
                        {asset.status}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: ITIL KANBAN SERVICE DESK */}
        {activeTab === "kanban" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-border flex-wrap gap-2">
              <span className="font-bold text-text-primary">
                {isArabic ? "لوحة كانبان لفرز بلاغات الدعم الفني (ITIL Service Desk)" : "ITIL INCIDENT MANAGEMENT KANBAN DESK"}
              </span>
              <span className="text-[10px] text-text-dim">
                {isArabic ? "انقر على أسهم التذكرة لتغيير مرحلتها" : "Use arrow controls on each ticket to advance stages"}
              </span>
            </div>

            {/* 4 ITIL Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {STAGES.map((stage) => {
                const stageTickets = tickets.filter((t) => t.stage === stage);
                return (
                  <div
                    key={stage}
                    className="bg-surface-secondary/40 border border-border rounded-xl p-3 flex flex-col min-h-[380px]"
                  >
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-border/80">
                      <span className="font-mono text-xs font-bold text-text-primary uppercase tracking-wider">
                        {stage}
                      </span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-surface border border-border text-brand-gold font-bold">
                        {stageTickets.length}
                      </span>
                    </div>

                    <div className="flex-1 space-y-2.5 overflow-y-auto">
                      {stageTickets.map((ticket) => (
                        <div
                          key={ticket.id}
                          className="p-3 bg-surface border border-border/90 hover:border-brand-gold/50 rounded-lg text-xs flex flex-col justify-between gap-2 shadow-xs transition-colors"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-mono text-[10px] text-brand-gold font-bold">{ticket.id}</span>
                              <span
                                className={`text-[9px] font-mono px-1 py-0.2 rounded font-bold ${
                                  ticket.severity === "Critical"
                                    ? "bg-rose-500/20 text-rose-400"
                                    : ticket.severity === "High"
                                    ? "bg-amber-500/20 text-amber-400"
                                    : "bg-sky-500/20 text-sky-400"
                                }`}
                              >
                                {ticket.severity}
                              </span>
                            </div>
                            <h4 className="font-bold text-text-primary text-[11px] leading-snug">
                              {isArabic ? ticket.titleAr : ticket.titleEn}
                            </h4>
                            <div className="text-[10px] text-text-dim mt-1.5 flex items-center justify-between">
                              <span>{isArabic ? ticket.roomAr : ticket.roomEn}</span>
                              <span className="text-text-muted">{ticket.assignee}</span>
                            </div>
                          </div>

                          {/* Stage Transition Controls */}
                          <div className="pt-2 border-t border-border/50 flex justify-between items-center text-[10px] font-mono">
                            <button
                              onClick={() => regressTicket(ticket.id)}
                              disabled={stage === "New"}
                              className="px-2 py-0.5 rounded bg-surface-secondary border border-border hover:text-text-primary disabled:opacity-30 disabled:pointer-events-none"
                            >
                              ◀
                            </button>
                            <span className="text-text-dim text-[9px]">{stage}</span>
                            <button
                              onClick={() => progressTicket(ticket.id)}
                              disabled={stage === "Resolved"}
                              className="px-2 py-0.5 rounded bg-brand-gold text-surface-dark font-bold hover:brightness-110 disabled:opacity-30 disabled:pointer-events-none"
                            >
                              ▶
                            </button>
                          </div>
                        </div>
                      ))}

                      {stageTickets.length === 0 && (
                        <div className="py-8 text-center text-text-dim text-[11px] font-mono italic">
                          {isArabic ? "لا توجد بلاغات" : "No tickets"}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 4: HARDWARE INVENTORY TABLE */}
        {activeTab === "inventory" && (
          <div className="space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-border">
              <div className="relative min-w-[220px]">
                <Search className="w-3.5 h-3.5 absolute top-1/2 -translate-y-1/2 left-3 rtl:left-auto rtl:right-3 text-text-dim" />
                <input
                  type="text"
                  value={searchAsset}
                  onChange={(e) => setSearchAsset(e.target.value)}
                  placeholder={isArabic ? "بحث برقم العهدة أو الاسم أو الموظف..." : "Filter assets by ID, name, custodian..."}
                  className="w-full bg-surface-secondary border border-border rounded-lg pl-8 pr-3 rtl:pl-3 rtl:pr-8 py-1.5 text-xs text-text-primary focus:outline-none focus:border-brand-gold"
                />
              </div>
              <span className="text-xs font-mono text-text-dim">
                {filteredAssets.length} / {assets.length} {isArabic ? "أجهزة مسجلة" : "Assets in Oracle Database"}
              </span>
            </div>

            <div className="overflow-x-auto border border-border rounded-xl">
              <table className="w-full text-xs text-left rtl:text-right font-mono">
                <thead className="bg-surface-secondary/70 border-b border-border text-[11px] text-text-dim">
                  <tr>
                    <th className="p-3">ASSET ID</th>
                    <th className="p-3">MODEL & HARDWARE</th>
                    <th className="p-3">LOCATION</th>
                    <th className="p-3">CUSTODIAN</th>
                    <th className="p-3">STATUS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filteredAssets.map((asset) => (
                    <tr key={asset.id} className="hover:bg-surface-secondary/30 transition-colors">
                      <td className="p-3 font-bold text-brand-gold">{asset.id}</td>
                      <td className="p-3">
                        <div className="font-bold text-text-primary font-sans">{asset.name}</div>
                        <div className="text-[10px] text-text-dim">{asset.specs}</div>
                      </td>
                      <td className="p-3 text-text-muted">{isArabic ? asset.roomAr : asset.roomEn}</td>
                      <td className="p-3 text-text-primary">{asset.assignedTo}</td>
                      <td className="p-3">
                        <span
                          className={`text-[9px] px-2 py-0.5 rounded font-bold ${
                            asset.status === "In Service"
                              ? "bg-emerald-500/15 text-emerald-400"
                              : asset.status === "Maintenance"
                              ? "bg-rose-500/15 text-rose-400"
                              : "bg-sky-500/15 text-sky-400"
                          }`}
                        >
                          {asset.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 5: CUSTODY TRANSFER WORKFLOW */}
        {activeTab === "transfer" && (
          <div className="max-w-xl mx-auto py-2 w-full space-y-4">
            <div className="bg-surface-secondary/40 border border-border rounded-xl p-5 space-y-4">
              <div className="flex items-center gap-2 text-brand-gold font-mono text-xs font-bold">
                <FileCheck2 className="w-4 h-4" />
                <span>{isArabic ? "سير عمل نقل العهدة والتسليم الرقمي" : "ASSET CUSTODY TRANSFER & SIGN-OFF FORM"}</span>
              </div>
              <p className="text-xs text-text-dim leading-relaxed">
                {isArabic
                  ? "محاكاة لنموذج نقل ملكية العهدة في تطبيق سطح المكتب، وتحديث سجلات الموظفين والأجهزة في قاعدة بيانات أوراكل."
                  : "Simulate administrative hardware reassignment, employee signing, and database custody log updates."}
              </p>

              {transferSuccess ? (
                <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex flex-col gap-2">
                  <div className="flex items-center gap-2 font-bold font-mono">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{isArabic ? "تم نقل العهدة وتحديث السجل بنجاح" : "CUSTODY RECORD UPDATED"}</span>
                  </div>
                  <p className="text-[11px] leading-relaxed">{transferSuccess}</p>
                  <button
                    onClick={() => {
                      setTransferSuccess(null);
                      setActiveTab("inventory");
                    }}
                    className="self-start mt-2 px-3 py-1 bg-emerald-500 text-surface-dark font-bold text-[10px] rounded font-mono"
                  >
                    {isArabic ? "عرض سجل الأجهزة المحدث" : "View Updated Inventory"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleCustodyTransfer} className="space-y-3 text-xs">
                  <div>
                    <label className="block text-text-muted text-[11px] mb-1 font-mono">
                      {isArabic ? "اختر الجهاز المراد نقله:" : "Select Hardware Asset:"}
                    </label>
                    <select
                      value={transferAssetId}
                      onChange={(e) => setTransferAssetId(e.target.value)}
                      className="w-full bg-surface border border-border rounded-lg px-3 py-2 text-text-primary focus:outline-none focus:border-brand-gold font-mono text-xs"
                    >
                      {assets.map((a) => (
                        <option key={a.id} value={a.id}>
                          {a.id} — {a.name} ({isArabic ? a.roomAr : a.roomEn})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-text-muted text-[11px] mb-1 font-mono">
                      {isArabic ? "المستلم الجديد (عضو هيئة التدريس / الموظف):" : "New Custodian (Faculty / Staff):"}
                    </label>
                    <input
                      required
                      value={transferRecipient}
                      onChange={(e) => setTransferRecipient(e.target.value)}
                      className="w-full bg-surface border border-border rounded-lg px-3 py-2 text-text-primary focus:outline-none focus:border-brand-gold"
                    />
                  </div>

                  <div className="p-3 bg-surface border border-border/80 rounded-lg text-[11px] text-text-dim flex items-center gap-2 font-mono">
                    <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
                    <span>ORACLE_TX: BEGIN TRANSACTION // CUSTODY_AUDIT_LOG // SIGN_OK</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-brand-gold text-surface-dark font-bold rounded-lg hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 shadow font-mono"
                  >
                    <FileCheck2 className="w-4 h-4" />
                    <span>{isArabic ? "توقيع واعتماد نقل العهدة" : "Authorize & Sign Transfer"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </DemoShell>
  );
}
