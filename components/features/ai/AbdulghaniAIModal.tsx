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
        <div className="fixed bottom-6 end-6 z-40 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <button
            type="button"
            onClick={() => {
              setIsOpen(true);
              setIsMinimized(false);
            }}
            aria-label={isAr ? "فتح المساعد الذكي" : "Open Abdulghani AI"}
            className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#121214] hover:bg-[#18181B] border border-gold-primary/40 hover:border-gold-primary text-white shadow-xl hover:shadow-2xl hover:shadow-gold-primary/20 transition-all duration-300 cursor-pointer active:scale-95 font-mono text-xs gold-glow-pulse"
          >
            <span className="relative flex h-3 w-3">
              <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-gold-primary" />
            </span>
            <Sparkles className="w-4 h-4 text-gold-light group-hover:rotate-12 transition-transform" />
            <span className="font-bold tracking-wide">
              {isAr ? "اسأل عبدالغني AI" : "Ask Abdulghani AI"}
            </span>
          </button>
        </div>
      )}

      {/* ── Chat Modal / Window ── */}
      {isOpen && (
        <div
          className={`fixed end-4 sm:end-6 bottom-4 sm:bottom-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] transition-all duration-300 font-mono shadow-2xl rounded-2xl overflow-hidden border border-black/10 dark:border-gold-primary/30 bg-white dark:bg-[#121214] flex flex-col text-zinc-800 dark:text-zinc-100 animate-in fade-in zoom-in-95 duration-250 ease-out ${
            isMinimized ? "h-14" : "h-[540px] max-h-[85vh]"
          }`}
          dir={isAr ? "rtl" : "ltr"}
        >
          {/* Top Title Bar */}
          <div className="bg-black/5 dark:bg-[#18181B] px-4 py-3 flex items-center justify-between border-b border-black/10 dark:border-white/10 select-none">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-gold-primary/10 border border-gold-primary/30 flex items-center justify-center text-gold-dark dark:text-gold-light">
                <Bot className="w-4 h-4" />
              </span>
              <div>
                <div className="text-xs font-bold text-zinc-900 dark:text-white flex items-center gap-1.5 font-sans">
                  <span>Abdulghani AI</span>
                  <span className="px-1.5 py-0.2 rounded text-[9px] bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                    Online
                  </span>
                </div>
                <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-sans">
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
              <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-zinc-50 dark:bg-[#0E0E10] text-xs">
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
                          ? "bg-gold-primary text-black font-bold shadow-sm"
                          : "bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gold-dark dark:text-gold-light shadow-sm"
                      }`}
                    >
                      {msg.role === "user" ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                    </span>

                    <div
                      className={`max-w-[82%] rounded-xl p-3 font-sans leading-relaxed whitespace-pre-wrap shadow-sm ${
                        msg.role === "user"
                          ? "bg-gold-primary text-black font-medium rounded-tr-none"
                          : "bg-white dark:bg-[#18181B] border border-black/10 dark:border-white/10 text-zinc-900 dark:text-zinc-100 rounded-tl-none"
                      }`}
                    >
                      {msg.text}
                      <div className="text-[9px] font-mono text-zinc-400 dark:text-zinc-500 mt-1.5 flex items-center justify-end gap-1">
                        {msg.isLive && (
                          <span className="text-gold-dark dark:text-gold-light flex items-center gap-0.5 font-bold">
                            <ShieldCheck className="w-2.5 h-2.5" /> Gemini
                          </span>
                        )}
                        <span>{msg.timestamp}</span>
                      </div>
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex items-start gap-2.5 animate-in fade-in duration-200">
                    <span className="w-6 h-6 rounded-md bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gold-dark dark:text-gold-light flex items-center justify-center shrink-0">
                      <Bot className="w-3.5 h-3.5" />
                    </span>
                    <div className="bg-white dark:bg-[#18181B] border border-black/10 dark:border-white/10 text-zinc-900 dark:text-zinc-200 rounded-xl p-3 flex items-center gap-2 shadow-sm">
                      <Loader2 className="w-3.5 h-3.5 text-gold-dark dark:text-gold-light animate-spin" />
                      <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                        {isAr ? "جاري الاستدلال بالبيانات المعتمدة…" : "Querying verified portfolio data…"}
                      </span>
                      <span className="inline-block w-1.5 h-3 bg-gold-primary animate-pulse" />
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Suggested Questions Ribbon */}
              <div className="px-3 py-2 bg-black/5 dark:bg-[#121214] border-t border-black/10 dark:border-white/10 overflow-x-auto flex items-center gap-1.5 scrollbar-none text-[10px]">
                {suggestedQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSendMessage(q)}
                    className="px-2.5 py-1 rounded-md bg-white dark:bg-black/40 border border-black/10 dark:border-white/10 hover:border-gold-primary/50 text-zinc-600 dark:text-zinc-400 hover:text-gold-dark dark:hover:text-gold-light whitespace-nowrap transition-colors cursor-pointer shadow-xs"
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
                className="p-3 bg-black/5 dark:bg-[#121214] border-t border-black/10 dark:border-white/10 flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder={isAr ? "اطرح سؤالاً عن مشاريع عبدالغني أو خبراته…" : "Ask about Abdulghani's projects or skills…"}
                  disabled={isLoading}
                  maxLength={800}
                  className="flex-1 h-9 px-3 rounded-lg bg-white dark:bg-black/50 border border-black/15 dark:border-white/15 focus:border-gold-primary text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 text-xs focus:outline-none transition-all font-sans"
                />
                <button
                  type="submit"
                  disabled={isLoading || !inputMessage.trim()}
                  aria-label={isAr ? "إرسال الرسالة" : "Send Message"}
                  className="w-9 h-9 rounded-lg bg-gold-primary hover:bg-gold-light text-black flex items-center justify-center transition-all disabled:opacity-40 cursor-pointer shadow-sm shrink-0"
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
