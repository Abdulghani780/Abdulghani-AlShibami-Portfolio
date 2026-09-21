"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Sparkles,
  MessageSquare,
  X,
  Send,
  Loader2,
  Trash2,
  Minimize2,
  Maximize2,
  Bot,
  User,
  ShieldCheck,
} from "lucide-react";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  text: string;
  timestamp: string;
  isLive?: boolean;
}

interface AbdulghaniAIModalProps {
  locale?: "en" | "ar";
}

export function AbdulghaniAIModal({ locale = "en" }: AbdulghaniAIModalProps) {
  const isAr = locale === "ar";
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const initialWelcomeMessage: ChatMessage = {
    id: "welcome-0",
    role: "assistant",
    text: isAr
      ? "مرحباً بك! أنا «عبدالغني AI»، المساعد الرقمي الذكي لمحفظة المهندس عبدالغني الشبامي. يسعدني إجابتك حول مؤهلاته الأكاديمية (طالب سنة ثالثة تكنولوجيا معلومات بجامعة العلوم الحديثة)، ومشاريعه المعتمدة (Campus IT Tracker، MetaAlgorithmLab، وغيرها)، أو قنوات التواصل الرسمية."
      : "Welcome! I am \"Abdulghani AI\", the digital concierge for Abdulghani Al-Shibami's portfolio. I can answer questions about his academic background, verified software projects, technical skills, certifications, or direct contact details.",
    timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
  };

  const [messages, setMessages] = useState<ChatMessage[]>([initialWelcomeMessage]);

  const suggestedQuestions = isAr
    ? [
        "من هو عبدالغني الشبامي؟",
        "ما هي مشاريعه المعتمدة؟",
        "هل يتقن C# وقواعد بيانات Oracle؟",
        "ما هي شهاداته وتدريباته؟",
        "كيف يمكنني التواصل معه؟",
      ]
    : [
        "Who is Abdulghani?",
        "What are his verified projects?",
        "Does he know C# and Oracle?",
        "What certifications does he hold?",
        "How can I contact him?",
      ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
    }
  }, [messages, isOpen, isMinimized]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputMessage).trim();
    if (!query || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage("");
    setIsLoading(true);

    try {
      // Build history payload
      const history = messages.slice(-6).map((m) => ({
        role: m.role === "assistant" ? ("model" as const) : ("user" as const),
        text: m.text,
      }));

      const res = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: query,
          locale,
          history,
        }),
      });

      const data = await res.json();
      const assistantReply =
        data.reply ||
        (isAr
          ? "لم أتمكن من الحصول على رد حالياً. يمكنك مراسلة عبدالغني مباشرة عبر البريد الإلكتروني."
          : "Could not retrieve an answer right now. You can reach Abdulghani directly via email.");

      const assistantMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        role: "assistant",
        text: assistantReply,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        isLive: data.isLive,
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch {
      const errorMsg: ChatMessage = {
        id: `err-${Date.now()}`,
        role: "assistant",
        text: isAr
          ? "حدث تعذر مؤقت في الاتصال. يمكنك التواصل المباشر مع عبدالغني عبر samyemen987@gmail.com أو هاتفياً."
          : "A temporary connection issue occurred. You can contact Abdulghani directly via samyemen987@gmail.com or WhatsApp.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setMessages([initialWelcomeMessage]);
  };

  return (
    <>
      {/* ── Floating Launcher Trigger Button ── */}
      {!isOpen && (
        <div className="fixed bottom-6 end-6 z-40">
          <button
            type="button"
            onClick={() => {
              setIsOpen(true);
              setIsMinimized(false);
            }}
            aria-label={isAr ? "فتح المساعد الذكي" : "Open Abdulghani AI"}
            className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-slate-900 dark:bg-[#0F172A] hover:bg-slate-800 dark:hover:bg-[#1E293B] border border-indigo-500/50 hover:border-cyan-400 text-white shadow-[0_4px_25px_rgba(99,102,241,0.3)] dark:shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:shadow-[0_4px_30px_rgba(6,182,212,0.4)] dark:hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all duration-300 cursor-pointer active:scale-95 font-mono text-xs"
          >
            <span className="relative flex h-3 w-3">
              <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500" />
            </span>
            <Sparkles className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
            <span className="font-bold tracking-wide">
              {isAr ? "اسأل عبدالغني AI" : "Ask Abdulghani AI"}
            </span>
          </button>
        </div>
      )}

      {/* ── Chat Modal / Window ── */}
      {isOpen && (
        <div
          className={`fixed end-4 sm:end-6 bottom-4 sm:bottom-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] transition-all duration-300 font-mono shadow-[0_10px_50px_rgba(0,0,0,0.25)] dark:shadow-[0_10px_50px_rgba(0,0,0,0.85)] rounded-2xl overflow-hidden border border-slate-200 dark:border-indigo-500/40 bg-white dark:bg-[#0B1120] flex flex-col text-slate-800 dark:text-slate-100 ${
            isMinimized ? "h-14" : "h-[540px] max-h-[85vh]"
          }`}
          dir={isAr ? "rtl" : "ltr"}
        >
          {/* Top Title Bar */}
          <div className="bg-slate-50 dark:bg-[#111827] px-4 py-3 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 select-none">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-indigo-500/10 dark:bg-indigo-500/20 border border-indigo-500/30 dark:border-indigo-500/40 flex items-center justify-center text-indigo-600 dark:text-cyan-400">
                <Bot className="w-4 h-4" />
              </span>
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <span>Abdulghani AI</span>
                  <span className="px-1.5 py-0.2 rounded text-[9px] bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                    Online
                  </span>
                </div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-sans">
                  {isAr ? "المساعد الرقمي المعتمد" : "Verified Concierge"}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
              <button
                type="button"
                onClick={handleClear}
                title={isAr ? "مسح المحادثة" : "Clear Chat"}
                aria-label={isAr ? "مسح المحادثة" : "Clear Chat"}
                className="w-7 h-7 rounded hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setIsMinimized(!isMinimized)}
                title={isMinimized ? "Expand" : "Minimize"}
                aria-label={isMinimized ? "Expand" : "Minimize"}
                className="w-7 h-7 rounded hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                {isMinimized ? <Maximize2 className="w-3.5 h-3.5" /> : <Minimize2 className="w-3.5 h-3.5" />}
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title={isAr ? "إغلاق النافذة" : "Close"}
                aria-label={isAr ? "إغلاق النافذة" : "Close"}
                className="w-7 h-7 rounded hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chat Messages Body (if not minimized) */}
          {!isMinimized && (
            <>
              <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-100/90 dark:bg-[#070B14]/80 text-xs">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-2.5 ${
                      msg.role === "user" ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    <span
                      className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 text-xs ${
                        msg.role === "user"
                          ? "bg-indigo-600 text-white shadow-sm"
                          : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-indigo-600 dark:text-cyan-400 shadow-sm"
                      }`}
                    >
                      {msg.role === "user" ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                    </span>

                    <div
                      className={`max-w-[82%] rounded-xl p-3 font-sans leading-relaxed whitespace-pre-wrap shadow-sm ${
                        msg.role === "user"
                          ? "bg-indigo-600 text-white rounded-tr-none"
                          : "bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none"
                      }`}
                    >
                      {msg.text}
                      <div className="text-[9px] font-mono text-slate-400 dark:text-slate-500 mt-1.5 flex items-center justify-end gap-1">
                        {msg.isLive && (
                          <span className="text-indigo-600 dark:text-cyan-400 flex items-center gap-0.5">
                            <ShieldCheck className="w-2.5 h-2.5" /> Gemini
                          </span>
                        )}
                        <span>{msg.timestamp}</span>
                      </div>
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex items-start gap-2.5">
                    <span className="w-6 h-6 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-indigo-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                      <Bot className="w-3.5 h-3.5" />
                    </span>
                    <div className="bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-300 rounded-xl p-3 flex items-center gap-2 shadow-sm">
                      <Loader2 className="w-3.5 h-3.5 text-indigo-600 dark:text-cyan-400 animate-spin" />
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                        {isAr ? "جاري الاستدلال بالبيانات المعتمدة…" : "Querying verified portfolio data…"}
                      </span>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Suggested Questions Ribbon */}
              <div className="px-3 py-2 bg-slate-50 dark:bg-[#0B1120] border-t border-slate-200 dark:border-slate-800/80 overflow-x-auto flex items-center gap-1.5 scrollbar-none text-[10px]">
                {suggestedQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSendMessage(q)}
                    className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-cyan-500/40 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-300 whitespace-nowrap transition-colors cursor-pointer shadow-xs"
                  >
                    {q}
                  </button>
                ))}
              </div>

              {/* Input Area */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="p-3 bg-slate-50 dark:bg-[#0B1120] border-t border-slate-200 dark:border-slate-800 flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder={isAr ? "اطرح سؤالاً عن مشاريع عبدالغني أو خبراته…" : "Ask about Abdulghani's projects or skills…"}
                  disabled={isLoading}
                  maxLength={800}
                  className="flex-1 h-9 px-3 rounded-lg bg-white dark:bg-slate-950/80 border border-slate-300 dark:border-slate-800 focus:border-indigo-500 dark:focus:border-cyan-400 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-xs focus:outline-none transition-all font-sans"
                />
                <button
                  type="submit"
                  disabled={isLoading || !inputMessage.trim()}
                  aria-label={isAr ? "إرسال الرسالة" : "Send Message"}
                  className="w-9 h-9 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white flex items-center justify-center transition-all disabled:opacity-40 cursor-pointer shadow-sm shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
}
