"use client";

import React, { useState } from "react";
import { DemoProps } from "@/demos/registry";
import { 
  Eye, 
  Mic, 
  Volume2, 
  Sparkles, 
  CheckCircle2, 
  Smartphone, 
  ShieldCheck, 
  Play, 
  RefreshCw, 
  Layers, 
  Zap,
  VolumeX,
  Languages
} from "lucide-react";

export function YusraSimulation({ locale, isRtl }: DemoProps) {
  const isAr = locale === "ar";
  const [activeTab, setActiveTab] = useState<"vision" | "voice" | "sign">("vision");
  const [isRecognizing, setIsRecognizing] = useState(false);
  const [detectedItem, setDetectedItem] = useState<string | null>(null);
  const [voiceSpoken, setVoiceSpoken] = useState(false);
  const [selectedGesture, setSelectedGesture] = useState<string>("peace");

  const runVisionDetection = () => {
    setIsRecognizing(true);
    setDetectedItem(null);
    setTimeout(() => {
      setIsRecognizing(false);
      setDetectedItem(isAr ? "كوب قهوة مكتبي — مسافة 50 سم أمامك" : "Office Coffee Mug — 50cm in front of you");
    }, 1200);
  };

  const speakText = (text: string) => {
    setVoiceSpoken(true);
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = isAr ? "ar-SA" : "en-US";
      utterance.rate = 0.95;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto rounded-3xl border border-black/10 dark:border-white/10 bg-[#FAF9F6] dark:bg-[#0E0E11] p-6 sm:p-8 lg:p-10 shadow-2xl text-zinc-900 dark:text-white transition-colors" dir={isRtl ? "rtl" : "ltr"}>
      {/* Simulation Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/10 dark:border-white/10 pb-6 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse" />
            <span className="font-mono text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest">
              YUSRA NATIVE ASSISTIVE ENGINE v2.4
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-sans uppercase tracking-tight text-zinc-900 dark:text-white">
            {isAr ? "محاكي تطبيق يُسرى للذكاء الاصطناعي المساند" : "YUSRA Assistive AI Workstation Simulator"}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1 font-sans">
            {isAr 
              ? "محاكاة تفاعلية لنماذج الرؤية الحاسوبية على الهاتف والتعرف على لغة الإشارة والتوجيه الصوتي."
              : "Interactive edge-ML simulation of on-device computer vision, sign language translation, and voice navigation."}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 self-start sm:self-auto">
          <button
            onClick={() => setActiveTab("vision")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-all cursor-pointer ${
              activeTab === "vision"
                ? "bg-purple-600 text-white shadow-sm"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
            }`}
          >
            <Eye className="w-3.5 h-3.5 inline me-1.5" />
            {isAr ? "الرؤية الذكية" : "Vision AI"}
          </button>
          <button
            onClick={() => setActiveTab("voice")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-all cursor-pointer ${
              activeTab === "voice"
                ? "bg-purple-600 text-white shadow-sm"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
            }`}
          >
            <Mic className="w-3.5 h-3.5 inline me-1.5" />
            {isAr ? "التوجيه الصوتي" : "Voice Guide"}
          </button>
          <button
            onClick={() => setActiveTab("sign")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-all cursor-pointer ${
              activeTab === "sign"
                ? "bg-purple-600 text-white shadow-sm"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
            }`}
          >
            <Languages className="w-3.5 h-3.5 inline me-1.5" />
            {isAr ? "لغة الإشارة" : "Sign Language"}
          </button>
        </div>
      </div>

      {/* Main Interactive Screen */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Mobile Screen Mockup */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="relative w-full max-w-[300px] aspect-[9/19] rounded-[44px] bg-[#1A1A22] border-[8px] border-zinc-800 shadow-2xl p-4 flex flex-col justify-between overflow-hidden text-white">
            {/* Phone Island Notch */}
            <div className="w-24 h-4 bg-black rounded-full mx-auto mb-2 shrink-0 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-zinc-700" />
            </div>

            {/* Mobile Header */}
            <div className="flex items-center justify-between text-[11px] font-bold border-b border-white/10 pb-2 mb-3">
              <span className="text-purple-300">YUSRA AI</span>
              <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[9px]">
                {activeTab.toUpperCase()}
              </span>
            </div>

            {/* Mobile Body Content based on Active Tab */}
            <div className="flex-1 flex flex-col justify-center items-center text-center space-y-4">
              {activeTab === "vision" && (
                <div className="space-y-4 w-full">
                  <div className="relative w-40 h-40 mx-auto rounded-2xl bg-black/60 border-2 border-dashed border-purple-400/60 flex flex-col items-center justify-center p-3 overflow-hidden">
                    {isRecognizing ? (
                      <RefreshCw className="w-8 h-8 text-purple-400 animate-spin" />
                    ) : detectedItem ? (
                      <div className="space-y-2">
                        <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                        <span className="text-[10px] text-zinc-300 font-sans block leading-tight">
                          {detectedItem}
                        </span>
                      </div>
                    ) : (
                      <div className="space-y-1">
                        <Eye className="w-8 h-8 text-purple-400 mx-auto" />
                        <span className="text-[10px] text-zinc-400 block font-mono">
                          {isAr ? "وجه الكاميرا نحو أي شيء" : "Aim Camera at Object"}
                        </span>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={runVisionDetection}
                    disabled={isRecognizing}
                    className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-md transition-all active:scale-95 cursor-pointer disabled:opacity-50"
                  >
                    {isRecognizing 
                      ? (isAr ? "جاري التعرف..." : "Processing TFLite...") 
                      : (isAr ? "التقاط وتحليل المشهد" : "Detect & Analyze")}
                  </button>
                </div>
              )}

              {activeTab === "voice" && (
                <div className="space-y-4 w-full">
                  <div className="w-20 h-20 mx-auto rounded-full bg-purple-600/20 border-2 border-purple-500 flex items-center justify-center animate-pulse">
                    <Volume2 className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[11px] text-zinc-300 leading-relaxed font-sans">
                    {isAr
                      ? "«أهلاً بك. الطريق أمامك سالك تماماً لمسافة 4 أمتار، ثم ينحدر الممر لليمين.»"
                      : "\"Welcome. The corridor is clear for 4 meters ahead, then ramps slightly right.\""}
                  </div>
                  <button
                    onClick={() => speakText(isAr ? "الطريق أمامك سالك تماماً لمسافة 4 أمتار" : "The corridor is clear for 4 meters ahead")}
                    className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-md transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span>{isAr ? "تشغيل التوجيه الصوتي" : "Play Voice Guidance"}</span>
                  </button>
                </div>
              )}

              {activeTab === "sign" && (
                <div className="space-y-3 w-full">
                  <div className="relative w-40 h-40 mx-auto rounded-2xl bg-black/60 border border-purple-500/40 p-2 flex flex-col justify-between">
                    <div className="flex justify-between items-center text-[9px] font-mono text-purple-400">
                      <span>21 LANDMARKS</span>
                      <span className="text-emerald-400">60 FPS</span>
                    </div>
                    <div className="text-3xl font-bold my-auto">
                      {selectedGesture === "peace" ? "✌️" : selectedGesture === "thumbs" ? "👍" : "👋"}
                    </div>
                    <div className="text-[10px] text-zinc-300 font-mono bg-purple-900/40 py-1 rounded">
                      {selectedGesture === "peace" 
                        ? (isAr ? "إشارة: سلام / شكراً" : "Gesture: Peace / Thanks")
                        : selectedGesture === "thumbs" 
                        ? (isAr ? "إشارة: موافق / ممتاز" : "Gesture: Confirm / OK")
                        : (isAr ? "إشارة: مرحباً" : "Gesture: Hello")}
                    </div>
                  </div>

                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => setSelectedGesture("peace")}
                      className={`px-2.5 py-1 rounded text-[10px] font-bold ${selectedGesture === "peace" ? "bg-purple-600 text-white" : "bg-white/10 text-zinc-400"}`}
                    >
                      ✌️ Peace
                    </button>
                    <button
                      onClick={() => setSelectedGesture("thumbs")}
                      className={`px-2.5 py-1 rounded text-[10px] font-bold ${selectedGesture === "thumbs" ? "bg-purple-600 text-white" : "bg-white/10 text-zinc-400"}`}
                    >
                      👍 Confirm
                    </button>
                    <button
                      onClick={() => setSelectedGesture("hello")}
                      className={`px-2.5 py-1 rounded text-[10px] font-bold ${selectedGesture === "hello" ? "bg-purple-600 text-white" : "bg-white/10 text-zinc-400"}`}
                    >
                      👋 Hello
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Footer Bar */}
            <div className="w-20 h-1 bg-zinc-600 rounded-full mx-auto mt-2 shrink-0" />
          </div>
        </div>

        {/* Right: Technical Architecture Telemetry */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest">
              {isAr ? "معمارية النظام المتكاملة" : "SYSTEM ARCHITECTURE"}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-sans">
              {isAr 
                ? "تقنيات الذكاء الاصطناعي المدمج والرؤية الحاسوبية على الهاتف"
                : "On-Device Deep Learning & Computer Vision Stack"}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
              {isAr
                ? "تم بناء تطبيق يُسرى باستخدام نمط Clean Architecture مع فئات ViewModel مستقرة وتغذية مباشرة من نماذج TFLite المحسنة بأوزان مضغوطة تعمل بكفاءة حتى عند انقطاع الإنترنت."
                : "Engineered with decoupled Clean Architecture layers, reactive StateFlows, and quantized TensorFlow Lite weights guaranteeing zero-latency offline operation."}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 font-mono text-xs">
            <div className="p-3.5 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-black/30">
              <span className="text-[10px] text-zinc-500 uppercase block">Model Runtime</span>
              <span className="font-bold text-purple-600 dark:text-purple-400 text-sm">TensorFlow Lite</span>
            </div>
            <div className="p-3.5 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-black/30">
              <span className="text-[10px] text-zinc-500 uppercase block">Vision Engine</span>
              <span className="font-bold text-purple-600 dark:text-purple-400 text-sm">MediaPipe 60FPS</span>
            </div>
            <div className="p-3.5 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-black/30">
              <span className="text-[10px] text-zinc-500 uppercase block">UI Framework</span>
              <span className="font-bold text-zinc-800 dark:text-zinc-200 text-sm">Jetpack Compose</span>
            </div>
            <div className="p-3.5 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-black/30">
              <span className="text-[10px] text-zinc-500 uppercase block">Cloud Persistence</span>
              <span className="font-bold text-zinc-800 dark:text-zinc-200 text-sm">Firebase Cloud</span>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
            <div className="text-xs">
              <span className="font-bold text-emerald-700 dark:text-emerald-400 block font-sans">
                {isAr ? "تحقق التوافقية مع معايير الوصول العالمية" : "WCAG 2.2 AAA Accessibility Verified"}
              </span>
              <span className="text-zinc-600 dark:text-zinc-400 text-[11px] font-sans">
                {isAr ? "أزرار لمس رحبة، تباين ألوان عالي 7:1+، وقراءة نصوص واضحة للمكفوفين." : "High touch targets (48px+), 7:1+ color contrast, and native TalkBack screen reader support."}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
