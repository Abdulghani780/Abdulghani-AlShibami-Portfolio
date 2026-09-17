# 21 — SEO & SOCIAL METADATA SPECIFICATION

**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System  

---

## 1. Metadata Architecture
Next.js App Router metadata is dynamically generated per route via `generateMetadata()`:

```typescript
export async function generateMetadata({ params }: { params: { locale: string, slug?: string } }) {
  const isArabic = params.locale === 'ar';
  return {
    title: isArabic 
      ? "عبدالغني الشبامي | مهندس برمجيات ونظم ذكاء اصطناعي" 
      : "Abdulghani Al-Shibami | Senior Software Engineer & Systems Architect",
    description: isArabic
      ? "الموقع الشخصي ومعرض المشاريع الهندسية لعبدالغني الشبامي - هندسة النظم، تطبيقات C# وPython، ونماذج الذكاء الاصطناعي."
      : "Official portfolio and engineering case studies of Abdulghani Al-Shibami — Systems Architecture, C#/.NET, Python, and AI Engineering.",
    alternates: {
      canonical: `https://abdulghani.dev/${params.locale}`,
      languages: {
        'en': 'https://abdulghani.dev/en',
        'ar': 'https://abdulghani.dev/ar',
      }
    },
    openGraph: {
      title: "Abdulghani Al-Shibami — Systems & AI Architect",
      description: "High-performance software engineering showcase and interactive demos.",
      url: `https://abdulghani.dev/${params.locale}`,
      siteName: "Abdulghani Al-Shibami",
      images: [
        {
          url: "/images/og-preview.png",
          width: 1200,
          height: 630,
          alt: "Abdulghani Al-Shibami Portfolio",
        }
      ],
      locale: params.locale === 'ar' ? 'ar_AR' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: "Abdulghani Al-Shibami — Software Engineer",
      description: "Systems Architecture, C#/.NET, Python, and AI Engineering.",
    }
  };
}
```

---

## 2. Structured Data (JSON-LD)
Pages inject structured JSON-LD schemas:
- `Person` Schema on Homepage: name, jobTitle, url, alumniOf, sameAs (GitHub, LinkedIn).
- `CreativeWork` / `SoftwareApplication` on `/projects/[slug]` Case Study routes: applicationCategory, operatingSystem, author, programmingLanguage.

---

## 3. Crawler Directives (`robots.ts` & `sitemap.ts`)
- `sitemap.ts`: Dynamic generator mapping all static routes and all dynamic project slug routes in both `/en/` and `/ar/` paths.
- `robots.ts`: Allows all public routes, blocks `/api/` internal endpoints.
