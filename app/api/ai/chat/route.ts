import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { GoogleGenAI } from "@google/genai";
import { buildSystemPrompt } from "@/lib/ai/knowledge";
import { VERIFIED_PROFILE } from "@/lib/data/profile";

// In-memory sliding window rate limiter (15 requests per minute per IP)
const ipRequestTimestamps = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 20;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = ipRequestTimestamps.get(ip) || [];
  const validTimestamps = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  validTimestamps.push(now);
  ipRequestTimestamps.set(ip, validTimestamps);
  return true;
}

// Request Schema
const ChatRequestSchema = z.object({
  message: z.string().trim().min(1, "Message cannot be empty").max(800, "Message exceeds 800 characters limit"),
  locale: z.enum(["en", "ar"]).default("en"),
  history: z
    .array(
      z.object({
        role: z.enum(["user", "model", "assistant"]),
        text: z.string().max(800),
      })
    )
    .max(10)
    .optional(),
});

// Deterministic offline response generator for when GEMINI_API_KEY is not configured
function generateOfflineResponse(userQuery: string, isAr: boolean): string {
  const q = userQuery.toLowerCase();
  const p = VERIFIED_PROFILE;

  if (q.includes("contact") || q.includes("email") || q.includes("phone") || q.includes("whatsapp") || q.includes("تواصل") || q.includes("هاتف") || q.includes("ايميل")) {
    return isAr
      ? `يمكنك التواصل مباشرة مع المهندس عبدالغني الشبامي عبر القنوات الرسمية التالية:\n- البريد الإلكتروني: ${p.contact.email}\n- الهاتف والواتساب: ${p.contact.phoneFormatted}\n- لينكد إن: ${p.contact.linkedinUrl}\n- مستودع جيت هاب: ${p.contact.githubUrl}`
      : `You can reach Abdulghani Al-Shibami directly through the following official channels:\n- Email: ${p.contact.email}\n- Phone & WhatsApp: ${p.contact.phoneFormatted}\n- LinkedIn: ${p.contact.linkedinUrl}\n- GitHub: ${p.contact.githubUrl}`;
  }

  if (q.includes("c#") || q.includes("dotnet") || q.includes(".net") || q.includes("winform") || q.includes("oracle") || q.includes("sql") || q.includes("database")) {
    return isAr
      ? `نعم، يمتلك عبدالغني خبرة متينة في لغة C# ومنصة .NET 4.8 وتطبيقات Windows Forms، بالإضافة إلى قواعد بيانات Oracle (10g/XE) وSQL. من أبرز أعماله المعتمدة نظام Campus IT Tracker الذي يدير عتاد وشبكات الحرم الجامعي باستخدام C# وOracle.`
      : `Yes, Abdulghani has a strong foundation in C#, .NET, Windows Forms, and Oracle Database (10g/XE/SQL). His featured system "Campus IT Tracker" is an enterprise C# WinForms application with an Oracle database backend managing ITIL tickets and lab topologies.`;
  }

  if (q.includes("project") || q.includes("مشاريع") || q.includes("نظام") || q.includes("systems") || q.includes("campus") || q.includes("metaalgorithm") || q.includes("cafena") || q.includes("novatech") || q.includes("gp")) {
    return isAr
      ? `تضم محفظة عبدالغني ٥ مشاريع رئيسية معتمدة وموثقة:\n1. **Campus IT Tracker**: نظام لإدارة البنية التحتية للحرم الجامعي بـ C# WinForms وOracle.\n2. **MetaAlgorithmLab**: منصة حوسبة علمية لقياس كفاءة الخوارزميات بـ Python وPyQt6.\n3. **كافينا (Cafena)**: متجر إلكتروني فاخر للقهوة المختصة.\n4. **نوفا تيك (NovaTech)**: منصة تجارة إلكترونية للأجهزة الذكية.\n5. **منصة مشاريع التخرج (GP)**: بوابة إدارة ومراجعة أطروحات التخرج بـ PHP وMySQL.`
      : `Abdulghani's portfolio includes 5 verified, authentic software systems:\n1. **Campus IT Tracker**: Enterprise desktop C# WinForms & Oracle XE ITIL asset system.\n2. **MetaAlgorithmLab**: Scientific Python & PyQt6 algorithm complexity benchmark workstation.\n3. **Cafena**: Luxury Arabic specialty coffee e-commerce platform.\n4. **NovaTech**: Cybernetic electronics retail platform.\n5. **GP Portal**: Full-stack PHP & MySQL academic graduation project review system.`;
  }

  if (q.includes("education") || q.includes("study") || q.includes("university") || q.includes("جامعة") || q.includes("دراسة") || q.includes("تعليم")) {
    return isAr
      ? `عبدالغني الشبامي طالب بالسنة الثالثة في برنامج بكالوريوس تكنولوجيا المعلومات بجامعة العلوم الحديثة في صنعاء، اليمن. وقد حاز على جائزة المركز الثاني في مسابقة الابتكار وريادة الأعمال بالجامعة لعام 2026.`
      : `Abdulghani Al-Shibami is a Third-Year Information Technology undergraduate student at the University of Modern Sciences in Sana'a, Yemen. He was awarded Second Place in the University's 2026 Innovation & Entrepreneurship Competition.`;
  }

  if (q.includes("cert") || q.includes("training") || q.includes("tot") || q.includes("award") || q.includes("summit") || q.includes("شهادة") || q.includes("تدريب") || q.includes("جائزة") || q.includes("قمة") || q.includes("يالي") || q.includes("yali")) {
    return isAr
      ? `تضم سجلات عبدالغني ٥ وثائق وشهادات أصلية معتمدة:\n1. **برنامج إعداد وتدريب المدربين (TOT) — مستوى المدرب المبتدئ**: معتمد من البورد الدولي للمدربين المعتمدين (IBCT) ومنصة إدراك (12/9/2026).\n2. **شهادة مشاركة في قمة الذكاء الاصطناعي — اليمن 2026م**: من الجامعة التخصصية الحديثة (M.S.U.) واللجنة المنظمة للقمة (1/7/2026).\n3. **ورشة تطوير المواقع الإلكترونية بأدوات الذكاء الاصطناعي**: من مركز الابتكار بجامعة العلوم الحديثة (4-11 مايو 2026).\n4. **جائزة المركز الثاني في مسابقة الابتكار وريادة الأعمال**: من جامعة العلوم الحديثة - قسم تكنولوجيا المعلومات (19-26 يناير 2026).\n5. **شهادة كفاءة اللغة الإنجليزية (المستويات التأسيسية)**: من المعهد اليمني الأمريكي للغات (YALI) برعاية السفارة الأمريكية بصنعاء (8 فبراير 2023).`
      : `Abdulghani holds 5 verified authentic certificates and credentials:\n1. **Train-The-Trainer Program: The Novice Trainer Level**: Certified by the International Board of Certified Trainers (IBCT) & Edraak (12/9/2026).\n2. **Certificate of Participation — Yemen AI Summit 2026**: Modern Specialized University & Yemen AI Summit Committee (July 1, 2026).\n3. **Professional Workshop: Web Development Using AI Tools**: Innovation & Entrepreneurship Center at UMS (May 4-11, 2026).\n4. **Second Place Award — Innovation & Entrepreneurship Competition**: University of Modern Sciences IT Department (January 19-26, 2026).\n5. **Certificate of Completion — English Language Proficiency**: Yemen-America Language Institute (YALI) sponsored by the US Embassy (February 8, 2023).`;
  }

  return isAr
    ? `أهلاً بك! أنا "عبدالغني AI"، المساعد الرقمي لمحفظة المهندس عبدالغني الشبامي. يسعدني إجابتك حول مؤهلاته الأكاديمية (طالب سنة ثالثة تكنولوجيا معلومات بجامعة العلوم الحديثة)، ومشاريعه المعتمدة (Campus IT Tracker، MetaAlgorithmLab، وغيرها)، ومهاراته في C# وOracle وPython والتحليل المنهجي للأنظمة، أو قنوات التواصل الرسمية معه.`
    : `Welcome! I am "Abdulghani AI", the digital concierge for Abdulghani Al-Shibami's portfolio. I can answer questions regarding his academic background (Third-Year IT student at the University of Modern Sciences), his verified software systems (Campus IT Tracker, MetaAlgorithmLab, Cafena, NovaTech, GP Portal), technical skills in C#, Oracle, Python & systems analysis, or his direct contact channels.`;
}

export async function POST(req: NextRequest) {
  try {
    // 1. IP extraction & Rate limiting
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "127.0.0.1";
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a moment before sending another query." },
        { status: 429 }
      );
    }

    // 2. Body parsing and validation
    const json = await req.json();
    const parseResult = ChatRequestSchema.safeParse(json);
    if (!parseResult.success) {
      return NextResponse.json(
        { error: parseResult.error.errors[0]?.message || "Invalid request payload" },
        { status: 400 }
      );
    }

    const { message, locale, history } = parseResult.data;
    const isAr = locale === "ar";
    const apiKey = process.env.GEMINI_API_KEY;

    // 3. Fallback path if GEMINI_API_KEY is not configured
    if (!apiKey || apiKey.trim() === "" || apiKey === "YOUR_GEMINI_API_KEY") {
      const fallbackReply = generateOfflineResponse(message, isAr);
      return NextResponse.json({
        reply: fallbackReply,
        isLive: false,
        model: "offline-grounded-deterministic",
      });
    }

    // 4. Live Gemini API call via official @google/genai SDK
    const ai = new GoogleGenAI({ apiKey });
    const systemPrompt = buildSystemPrompt(locale);

    // Format chat history for context
    const contents: any[] = [];
    if (history && history.length > 0) {
      for (const turn of history.slice(-6)) {
        contents.push({
          role: turn.role === "assistant" ? "model" : "user",
          parts: [{ text: turn.text }],
        });
      }
    }
    contents.push({
      role: "user",
      parts: [{ text: message }],
    });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.2,
      },
    });

    const reply = response.text || (isAr ? "لم أتمكن من الحصول على إجابة. يرجى المحاولة مرة أخرى." : "I was unable to generate a response. Please try again.");

    return NextResponse.json({
      reply,
      isLive: true,
      model: "gemini-2.5-flash",
    });
  } catch (error: any) {
    console.error("Error in /api/ai/chat route:", error);

    // Return friendly, grounded fallback on API rate limit or error
    const fallbackText =
      "Abdulghani AI concierge is temporarily unable to reach the inference engine. You can reach Abdulghani directly via email (samyemen987@gmail.com) or WhatsApp (+967 773088202).";

    return NextResponse.json(
      {
        reply: fallbackText,
        isLive: false,
        error: "Upstream service notice",
      },
      { status: 200 }
    );
  }
}
