import test from "node:test";
import assert from "node:assert/strict";

// Recreate the pure logic of generateOfflineResponse for testing against queries
function simulateOfflineResponse(userQuery, isAr, profile) {
  const q = userQuery.toLowerCase();
  const p = profile;

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

  if (q.includes("education") || q.includes("study") || q.includes("university") || q.includes("جامعة") || q.includes("دراسة") || q.includes("يدرس") || q.includes("تخصص") || q.includes("مؤهل") || q.includes("تعليم")) {
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
    ? `أهلاً بك! أنا "عبدالغني AI"، المساعد الرقمي لمحفظة المهندس عبدالغني الشبامي.`
    : `Welcome! I am "Abdulghani AI", the digital concierge for Abdulghani Al-Shibami's portfolio.`;
}

const mockProfile = {
  contact: {
    email: "samyemen987@gmail.com",
    phoneFormatted: "+967 773 088 202",
    linkedinUrl: "https://linkedin.com/in/abdulghani-al-shibami-94b4a3204",
    githubUrl: "https://github.com/Abdulghani780",
  },
};

test("Offline Deterministic AI Fallback", async (t) => {
  await t.test("responds accurately to English contact inquiries", () => {
    const res = simulateOfflineResponse("How do I contact Abdulghani?", false, mockProfile);
    assert.match(res, /samyemen987@gmail\.com/);
    assert.match(res, /\+967 773 088 202/);
  });

  await t.test("responds accurately to Arabic contact inquiries", () => {
    const res = simulateOfflineResponse("كيف يمكنني التواصل معه؟", true, mockProfile);
    assert.match(res, /samyemen987@gmail\.com/);
    assert.match(res, /المهندس عبدالغني الشبامي/);
  });

  await t.test("responds to C# / Oracle technical capability questions", () => {
    const res = simulateOfflineResponse("Does he know C# and Oracle?", false, mockProfile);
    assert.match(res, /Campus IT Tracker/);
    assert.match(res, /Windows Forms/);
  });

  await t.test("responds to Education and Academic standing questions", () => {
    const res = simulateOfflineResponse("Where does he study?", false, mockProfile);
    assert.match(res, /University of Modern Sciences/);
    assert.match(res, /Third-Year/);
  });

  await t.test("responds to Arabic education questions", () => {
    const res = simulateOfflineResponse("أين يدرس عبدالغني؟", true, mockProfile);
    assert.match(res, /جامعة العلوم الحديثة/);
    assert.match(res, /السنة الثالثة/);
  });

  await t.test("responds to Credentials and Certifications questions", () => {
    const res = simulateOfflineResponse("What certifications does he have?", false, mockProfile);
    assert.match(res, /IBCT/);
    assert.match(res, /Yemen AI Summit/);
    assert.match(res, /YALI/);
  });
});
