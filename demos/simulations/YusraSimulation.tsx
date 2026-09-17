"use client";

import React, { useState } from "react";
import { DemoShell } from "@/demos/shared/DemoShell";
import { DemoProps } from "@/demos/registry";
import { 
  FileText, 
  Calculator, 
  Database, 
  Plus, 
  CheckCircle2, 
  AlertCircle, 
  Printer, 
  Search, 
  Layers,
  ArrowRight,
  ShieldCheck
} from "lucide-react";

interface JournalEntry {
  id: string;
  account: string;
  accountAr: string;
  description: string;
  descriptionAr: string;
  debit: number;
  credit: number;
}

interface CommittedTransaction {
  txnId: string;
  timestamp: string;
  ref: string;
  total: number;
  status: "COMMITTED" | "SYNCED";
}

export function YusraSimulation({ locale = "en", isRtl = false }: DemoProps) {
  const [activeTab, setActiveTab] = useState<"journal" | "invoice" | "database">("journal");

  // Journal State
  const initialJournal: JournalEntry[] = [
    {
      id: "j-101",
      account: "1010 - Main Treasury Cash",
      accountAr: "١٠١٠ - صندوق النقدية الرئيسي",
      description: "Initial cash deposit for operations",
      descriptionAr: "إيداع نقدي تأسيسي للعمليات",
      debit: 15000,
      credit: 0,
    },
    {
      id: "j-102",
      account: "3010 - Owner Equity Capital",
      accountAr: "٣٠١٠ - رأس المال المدفوع",
      description: "Equity allocation for ledger bootstrap",
      descriptionAr: "تخصيص رأس المال لبدء السجل المحاسبي",
      debit: 0,
      credit: 15000,
    },
    {
      id: "j-103",
      account: "1200 - Accounts Receivable",
      accountAr: "١٢٠٠ - حسابات المدينين والعملاء",
      description: "Invoice #INV-2024-001 issued to Client A",
      descriptionAr: "فاتورة رقم INV-2024-001 للعميل أ",
      debit: 4500,
      credit: 0,
    },
    {
      id: "j-104",
      account: "4010 - Service Revenue",
      accountAr: "٤٠١٠ - إيرادات الخدمات والبرمجيات",
      description: "Software engineering delivery milestone",
      descriptionAr: "مستحقات تسليم المرحلة البرمجية الأولى",
      debit: 0,
      credit: 4500,
    },
  ];

  const [journalRows, setJournalRows] = useState<JournalEntry[]>(initialJournal);
  const [newAccount, setNewAccount] = useState("1010 - Cash");
  const [newDesc, setNewDesc] = useState("");
  const [newDebit, setNewDebit] = useState<string>("");
  const [newCredit, setNewCredit] = useState<string>("");
  const [commitSuccess, setCommitSuccess] = useState<string | null>(null);

  // Invoicing State
  const [customerName, setCustomerName] = useState("Al-Khaleej Enterprise Group");
  const [invoiceItem, setInvoiceItem] = useState("ERP Enterprise License");
  const [invoiceAmount, setInvoiceAmount] = useState<number>(8500);
  const [invoiceTax, setInvoiceTax] = useState<boolean>(true);
  const [invoiceModalOpen, setInvoiceModalOpen] = useState(false);

  // Database audit log state
  const [transactions, setTransactions] = useState<CommittedTransaction[]>([
    { txnId: "TXN-08941", timestamp: "14:10:02.114", ref: "BOOTSTRAP_CAPITAL", total: 15000, status: "COMMITTED" },
    { txnId: "TXN-08942", timestamp: "14:15:32.482", ref: "INVOICE_001_ISSUE", total: 4500, status: "SYNCED" },
  ]);

  // Calculations
  const totalDebits = journalRows.reduce((sum, r) => sum + r.debit, 0);
  const totalCredits = journalRows.reduce((sum, r) => sum + r.credit, 0);
  const isBalanced = totalDebits === totalCredits && totalDebits > 0;

  const handleAddRow = (e: React.FormEvent) => {
    e.preventDefault();
    const dVal = parseFloat(newDebit) || 0;
    const cVal = parseFloat(newCredit) || 0;
    if (dVal === 0 && cVal === 0) return;

    const newRow: JournalEntry = {
      id: `j-${Date.now()}`,
      account: newAccount,
      accountAr: newAccount,
      description: newDesc || "Manual Journal Entry",
      descriptionAr: newDesc || "قيد محاسبي يدوي",
      debit: dVal,
      credit: cVal,
    };

    setJournalRows([...journalRows, newRow]);
    setNewDesc("");
    setNewDebit("");
    setNewCredit("");
    setCommitSuccess(null);
  };

  const handleCommitJournal = () => {
    if (!isBalanced) return;
    const newTxn: CommittedTransaction = {
      txnId: `TXN-${Math.floor(10000 + Math.random() * 90000)}`,
      timestamp: new Date().toLocaleTimeString("en-US", { hour12: false }) + ".012",
      ref: `MANUAL_JOURNAL_${journalRows.length}_ROWS`,
      total: totalDebits,
      status: "COMMITTED",
    };
    setTransactions([newTxn, ...transactions]);
    setCommitSuccess(
      locale === "ar"
        ? `تم حفظ القيد بنجاح في قاعدة بيانات SQL Server المحلية. المعاملة: ${newTxn.txnId}`
        : `Successfully persisted balanced journal to local SQL Server. Transaction ID: ${newTxn.txnId}`
    );
  };

  const handleReset = () => {
    setJournalRows(initialJournal);
    setCommitSuccess(null);
    setTransactions([
      { txnId: "TXN-08941", timestamp: "14:10:02.114", ref: "BOOTSTRAP_CAPITAL", total: 15000, status: "COMMITTED" },
      { txnId: "TXN-08942", timestamp: "14:15:32.482", ref: "INVOICE_001_ISSUE", total: 4500, status: "SYNCED" },
    ]);
  };

  const taxAmount = invoiceTax ? invoiceAmount * 0.15 : 0;
  const grandTotal = invoiceAmount + taxAmount;

  return (
    <DemoShell
      title={locale === "ar" ? "نظام يسرى لإدارة الموارد والمحاسبة — واجهة WinForms" : "Yusra ERP & Ledger System — WinForms Desktop"}
      categoryName={locale === "ar" ? "سطح المكتب المؤسسي" : "Enterprise Desktop"}
      projectSlug="yusra"
      locale={locale}
      disclaimer={{
        en: "This is an in-browser interactive simulation reproducing the UI and accounting balance invariants of the C# WinForms desktop software using safe mock data.",
        ar: "هذه محاكاة تفاعلية داخل المتصفح لإعادة إنتاج واجهة وقواعد التوازن المحاسبي لبرنامج سطح المكتب C# WinForms باستخدام بيانات تجريبية آمنة.",
      }}
      onReset={handleReset}
      statusText="SQL SERVER: CONNECTED"
      statusItems={[
        { label: "LEDGER", value: isBalanced ? "BALANCED" : "UNBALANCED" },
        { label: "ENTRIES", value: `${journalRows.length}` },
        { label: "DB QUEUE", value: `${transactions.length} TXNS` },
      ]}
    >
      <div className="p-3 sm:p-5 flex flex-col gap-4 font-sans">
        {/* WinForms Style Menu Bar */}
        <div className="flex items-center gap-1 sm:gap-2 pb-2 border-b border-border text-xs font-mono text-text-dim overflow-x-auto">
          <button
            onClick={() => setActiveTab("journal")}
            className={`px-3 py-1.5 rounded transition-colors flex items-center gap-1.5 ${
              activeTab === "journal"
                ? "bg-brand-gold/15 text-brand-gold font-bold border border-brand-gold/30"
                : "hover:bg-surface-secondary text-text-muted"
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{locale === "ar" ? "دفتر اليومية (Double-Entry)" : "General Journal"}</span>
          </button>

          <button
            onClick={() => setActiveTab("invoice")}
            className={`px-3 py-1.5 rounded transition-colors flex items-center gap-1.5 ${
              activeTab === "invoice"
                ? "bg-brand-gold/15 text-brand-gold font-bold border border-brand-gold/30"
                : "hover:bg-surface-secondary text-text-muted"
            }`}
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>{locale === "ar" ? "الفواتير والمبيعات" : "Invoicing & Billing"}</span>
          </button>

          <button
            onClick={() => setActiveTab("database")}
            className={`px-3 py-1.5 rounded transition-colors flex items-center gap-1.5 ${
              activeTab === "database"
                ? "bg-brand-gold/15 text-brand-gold font-bold border border-brand-gold/30"
                : "hover:bg-surface-secondary text-text-muted"
            }`}
          >
            <Database className="w-3.5 h-3.5" />
            <span>{locale === "ar" ? "سجل قاعدة البيانات (ACID)" : "SQL Audit Trail"}</span>
          </button>
        </div>

        {/* TAB 1: GENERAL JOURNAL */}
        {activeTab === "journal" && (
          <div className="flex flex-col gap-4">
            {/* Balance Status Banner */}
            <div
              className={`p-3 rounded-lg border flex items-center justify-between flex-wrap gap-2 text-xs font-mono transition-colors ${
                isBalanced
                  ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                  : "bg-rose-500/10 border-rose-500/30 text-rose-400"
              }`}
            >
              <div className="flex items-center gap-2">
                {isBalanced ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-rose-400" />
                )}
                <span className="font-bold">
                  {isBalanced
                    ? locale === "ar"
                      ? "القيد متوازن رياضياً (المدين = الدائن)"
                      : "LEDGER BALANCED: Debits equal Credits (Zero-Sum Invariant Satisfied)"
                    : locale === "ar"
                    ? `خلل في التوازن المحاسبي! الفارق: ${Math.abs(totalDebits - totalCredits).toLocaleString()} ر.س`
                    : `BALANCE INVARIANT VIOLATION! Discrepancy: ${Math.abs(totalDebits - totalCredits).toLocaleString()}`}
                </span>
              </div>
              <div className="flex items-center gap-4 text-[11px]">
                <span>
                  {locale === "ar" ? "إجمالي المدين:" : "Total Debits:"}{" "}
                  <strong className="text-text-primary">{totalDebits.toLocaleString()}</strong>
                </span>
                <span>
                  {locale === "ar" ? "إجمالي الدائن:" : "Total Credits:"}{" "}
                  <strong className="text-text-primary">{totalCredits.toLocaleString()}</strong>
                </span>
              </div>
            </div>

            {commitSuccess && (
              <div className="p-3 bg-brand-gold/10 border border-brand-gold/30 rounded text-xs font-mono text-brand-gold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>{commitSuccess}</span>
              </div>
            )}

            {/* WinForms DataGridView Simulation */}
            <div className="border border-border rounded-lg overflow-hidden bg-surface">
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left rtl:text-right border-collapse">
                  <thead>
                    <tr className="bg-surface-secondary/80 border-b border-border text-text-dim font-mono text-[11px] uppercase tracking-wider">
                      <th className="py-2.5 px-3 border-r border-border/50"># ID</th>
                      <th className="py-2.5 px-3 border-r border-border/50">
                        {locale === "ar" ? "الحساب المحاسبي" : "Account"}
                      </th>
                      <th className="py-2.5 px-3 border-r border-border/50">
                        {locale === "ar" ? "البيان / الشرح" : "Description"}
                      </th>
                      <th className="py-2.5 px-3 border-r border-border/50 text-right rtl:text-left">
                        {locale === "ar" ? "مدين (Debit)" : "Debit"}
                      </th>
                      <th className="py-2.5 px-3 text-right rtl:text-left">
                        {locale === "ar" ? "دائن (Credit)" : "Credit"}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40 font-mono">
                    {journalRows.map((row) => (
                      <tr key={row.id} className="hover:bg-surface-secondary/40 transition-colors">
                        <td className="py-2 px-3 text-text-dim border-r border-border/40">{row.id}</td>
                        <td className="py-2 px-3 font-semibold text-text-primary border-r border-border/40">
                          {locale === "ar" ? row.accountAr : row.account}
                        </td>
                        <td className="py-2 px-3 text-text-muted border-r border-border/40">
                          {locale === "ar" ? row.descriptionAr : row.description}
                        </td>
                        <td className="py-2 px-3 text-right rtl:text-left text-emerald-400 font-bold border-r border-border/40">
                          {row.debit > 0 ? row.debit.toLocaleString() : "-"}
                        </td>
                        <td className="py-2 px-3 text-right rtl:text-left text-brand-gold font-bold">
                          {row.credit > 0 ? row.credit.toLocaleString() : "-"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="bg-surface-secondary font-mono font-bold border-t-2 border-border text-xs">
                      <td colSpan={3} className="py-2.5 px-3 text-right rtl:text-left text-text-dim">
                        {locale === "ar" ? "المجموع الكلي:" : "Total Balance:"}
                      </td>
                      <td className="py-2.5 px-3 text-right rtl:text-left text-emerald-400">
                        {totalDebits.toLocaleString()}
                      </td>
                      <td className="py-2.5 px-3 text-right rtl:text-left text-brand-gold">
                        {totalCredits.toLocaleString()}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>

            {/* Entry Form + Commit Action */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Form to add row */}
              <form
                onSubmit={handleAddRow}
                className="lg:col-span-2 p-3 bg-surface-secondary/40 border border-border rounded-lg flex flex-col gap-3"
              >
                <div className="text-xs font-mono font-bold text-text-primary flex items-center gap-1.5">
                  <Plus className="w-3.5 h-3.5 text-brand-gold" />
                  <span>{locale === "ar" ? "إضافة سطر قيد جديد" : "Add Journal Entry Row"}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs">
                  <div className="sm:col-span-2">
                    <label className="block text-[10px] font-mono text-text-dim mb-1">
                      {locale === "ar" ? "الحساب" : "Account"}
                    </label>
                    <select
                      value={newAccount}
                      onChange={(e) => setNewAccount(e.target.value)}
                      className="w-full bg-surface border border-border rounded px-2.5 py-1.5 text-text-primary text-xs font-mono"
                    >
                      <option value="1010 - Main Treasury Cash">1010 - Main Treasury Cash</option>
                      <option value="1200 - Accounts Receivable">1200 - Accounts Receivable</option>
                      <option value="2010 - Accounts Payable">2010 - Accounts Payable</option>
                      <option value="4010 - Service Revenue">4010 - Service Revenue</option>
                      <option value="5010 - General Operating Expense">5010 - Operating Expense</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[10px] font-mono text-text-dim mb-1">
                      {locale === "ar" ? "البيان" : "Description"}
                    </label>
                    <input
                      type="text"
                      placeholder={locale === "ar" ? "بيان العملية..." : "Transaction memo..."}
                      value={newDesc}
                      onChange={(e) => setNewDesc(e.target.value)}
                      className="w-full bg-surface border border-border rounded px-2.5 py-1.5 text-text-primary text-xs font-mono"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[10px] font-mono text-text-dim mb-1">
                      {locale === "ar" ? "مدين (Debit)" : "Debit Amount"}
                    </label>
                    <input
                      type="number"
                      placeholder="0.00"
                      value={newDebit}
                      onChange={(e) => {
                        setNewDebit(e.target.value);
                        if (e.target.value) setNewCredit("");
                      }}
                      className="w-full bg-surface border border-border rounded px-2.5 py-1.5 text-text-primary text-xs font-mono"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[10px] font-mono text-text-dim mb-1">
                      {locale === "ar" ? "دائن (Credit)" : "Credit Amount"}
                    </label>
                    <input
                      type="number"
                      placeholder="0.00"
                      value={newCredit}
                      onChange={(e) => {
                        setNewCredit(e.target.value);
                        if (e.target.value) setNewDebit("");
                      }}
                      className="w-full bg-surface border border-border rounded px-2.5 py-1.5 text-text-primary text-xs font-mono"
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-3 py-1.5 bg-surface border border-brand-gold/40 text-brand-gold rounded text-xs font-mono font-semibold hover:bg-brand-gold/10 transition-colors"
                  >
                    + {locale === "ar" ? "إدراج في الجدول" : "Insert Row"}
                  </button>
                </div>
              </form>

              {/* Commit box */}
              <div className="p-3 bg-surface-secondary/40 border border-border rounded-lg flex flex-col justify-between gap-3">
                <div>
                  <div className="text-xs font-mono font-bold text-text-primary mb-1">
                    {locale === "ar" ? "حفظ القيد المحاسبي" : "ACID Commit Guard"}
                  </div>
                  <p className="text-[11px] text-text-dim leading-relaxed">
                    {locale === "ar"
                      ? "يتم قفل زر الترحيل تلقائياً في حال عدم تطابق المدين والدائن لمنع أي خطأ محاسبي في قاعدة البيانات."
                      : "Commit button locks automatically if Debits do not equal Credits, enforcing zero discrepancy."}
                  </p>
                </div>
                <button
                  disabled={!isBalanced}
                  onClick={handleCommitJournal}
                  className={`w-full py-2 px-3 rounded text-xs font-mono font-bold tracking-wider uppercase transition-all ${
                    isBalanced
                      ? "bg-brand-gold text-surface-dark shadow-md hover:brightness-110 active:scale-95"
                      : "bg-surface border border-border text-text-dim cursor-not-allowed opacity-60"
                  }`}
                >
                  {isBalanced
                    ? locale === "ar"
                      ? "ترحيل إلى قاعدة البيانات"
                      : "Commit to SQL Server"
                    : locale === "ar"
                    ? "غير متوازن (ممنوع الحفظ)"
                    : "LOCKED (UNBALANCED)"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: INVOICING */}
        {activeTab === "invoice" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-4 bg-surface border border-border rounded-lg flex flex-col gap-4 text-xs font-mono">
              <div className="flex items-center justify-between border-b border-border pb-2">
                <span className="font-bold text-text-primary text-sm">
                  {locale === "ar" ? "إصدار فاتورة مبيعات جديدة" : "New Sales Invoice"}
                </span>
                <span className="text-[10px] text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded">
                  INV-2024-0092
                </span>
              </div>

              <div>
                <label className="block text-text-dim mb-1">{locale === "ar" ? "اسم العميل" : "Customer Name"}</label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-surface-secondary border border-border rounded p-2 text-text-primary"
                />
              </div>

              <div>
                <label className="block text-text-dim mb-1">{locale === "ar" ? "بند الخدمة / المنتج" : "Item / Service"}</label>
                <select
                  value={invoiceItem}
                  onChange={(e) => setInvoiceItem(e.target.value)}
                  className="w-full bg-surface-secondary border border-border rounded p-2 text-text-primary"
                >
                  <option value="ERP Enterprise License">ERP Enterprise License ($8,500)</option>
                  <option value="Custom Module Engineering">Custom Module Engineering ($3,200)</option>
                  <option value="Annual Maintenance Contract">Annual Maintenance Contract ($1,500)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-text-dim mb-1">{locale === "ar" ? "المبلغ الأساسي" : "Base Amount"}</label>
                  <input
                    type="number"
                    value={invoiceAmount}
                    onChange={(e) => setInvoiceAmount(parseFloat(e.target.value) || 0)}
                    className="w-full bg-surface-secondary border border-border rounded p-2 text-text-primary"
                  />
                </div>
                <div className="flex items-center gap-2 pt-5">
                  <input
                    type="checkbox"
                    id="taxCheck"
                    checked={invoiceTax}
                    onChange={(e) => setInvoiceTax(e.target.checked)}
                    className="rounded border-border accent-brand-gold"
                  />
                  <label htmlFor="taxCheck" className="text-text-muted cursor-pointer select-none">
                    {locale === "ar" ? "ضريبة القيمة المضافة (15%)" : "Apply 15% VAT"}
                  </label>
                </div>
              </div>

              <div className="mt-2 p-3 bg-surface-secondary/70 border border-border/80 rounded flex flex-col gap-1.5 text-xs">
                <div className="flex justify-between text-text-muted">
                  <span>{locale === "ar" ? "المبلغ الخاضع للضريبة:" : "Taxable Subtotal:"}</span>
                  <span>{invoiceAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-text-muted">
                  <span>{locale === "ar" ? "مبلغ الضريبة (15%):" : "VAT Amount (15%):"}</span>
                  <span>{taxAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-bold text-text-primary text-sm pt-1 border-t border-border">
                  <span>{locale === "ar" ? "الإجمالي النهائي:" : "Grand Total:"}</span>
                  <span className="text-brand-gold">{grandTotal.toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={() => setInvoiceModalOpen(true)}
                className="w-full py-2.5 px-4 bg-brand-gold text-surface-dark font-bold rounded flex items-center justify-center gap-2 hover:brightness-110 transition-all active:scale-95"
              >
                <Printer className="w-4 h-4" />
                <span>{locale === "ar" ? "معاينة وطباعة الفاتورة" : "Preview & Print Invoice"}</span>
              </button>
            </div>

            {/* Printable Preview Pane */}
            <div className="p-4 bg-surface-secondary/30 border border-dashed border-border rounded-lg flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono font-bold text-text-primary mb-2 flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-brand-gold" />
                  <span>{locale === "ar" ? "معاينة الفاتورة السريعة" : "Live Print Layout Preview"}</span>
                </div>
                <div className="p-4 bg-surface border border-border rounded shadow-sm font-mono text-xs flex flex-col gap-3">
                  <div className="flex justify-between items-start border-b border-border/50 pb-2">
                    <div>
                      <div className="font-bold text-brand-gold text-sm">YUSRA ERP SYSTEMS</div>
                      <div className="text-[10px] text-text-dim">Commercial Reg #101094812</div>
                    </div>
                    <div className="text-right rtl:text-left text-[11px] text-text-muted">
                      <div>INVOICE #0092</div>
                      <div>{new Date().toLocaleDateString()}</div>
                    </div>
                  </div>

                  <div className="text-[11px]">
                    <span className="text-text-dim">{locale === "ar" ? "فاتورة إلى: " : "Billed To: "}</span>
                    <strong className="text-text-primary">{customerName}</strong>
                  </div>

                  <div className="border border-border/50 rounded overflow-hidden text-[11px]">
                    <div className="bg-surface-secondary p-1.5 flex justify-between font-semibold">
                      <span>{invoiceItem}</span>
                      <span>{invoiceAmount.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-2 border-t border-border font-bold">
                    <span>{locale === "ar" ? "المجموع المستحق:" : "Total Due:"}</span>
                    <span className="text-sm text-brand-gold">{grandTotal.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-text-dim font-mono mt-3">
                {locale === "ar"
                  ? "✓ تخطيط متوافق مع طابعات الإيصالات الحرارية وطابعات A4 القياسية."
                  : "✓ Layout calibrated for thermal POS receipts and standard A4 statement sheets."}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: SQL SERVER DATABASE AUDIT TRAIL */}
        {activeTab === "database" && (
          <div className="p-4 bg-surface border border-border rounded-lg flex flex-col gap-3">
            <div className="flex items-center justify-between border-b border-border pb-2">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-brand-gold" />
                <span className="text-xs font-mono font-bold text-text-primary">
                  {locale === "ar" ? "سجل معاملات SQL Server المحلي" : "Local SQL Server Transaction Log (ACID)"}
                </span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400">STATUS: SYNCED</span>
            </div>

            <p className="text-xs text-text-dim font-mono leading-relaxed">
              {locale === "ar"
                ? "يتم تسجيل كل قيد محاسبي أو فاتورة مبيعات في طابور محلي محمي بآليات منع تضارب القيود، مع التحقق من المعاملات قبل رفعها للسيرفر المركزي."
                : "Every double-entry journal and invoice is committed locally with strict constraint validation before asynchronous replication to central databases."}
            </p>

            <div className="divide-y divide-border/40 font-mono text-xs">
              {transactions.map((txn) => (
                <div key={txn.txnId} className="py-2.5 flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-text-primary font-bold">{txn.txnId}</span>
                    <span className="text-text-dim text-[11px]">[{txn.timestamp}]</span>
                    <span className="text-text-muted">{txn.ref}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-brand-gold font-bold">{txn.total.toLocaleString()}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      {txn.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </DemoShell>
  );
}
