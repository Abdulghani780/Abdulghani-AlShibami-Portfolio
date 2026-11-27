import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme/ThemeProvider";
import { WebVitalsProvider } from "@/components/providers/WebVitalsProvider";

export const metadata: Metadata = {
  title: "Abdulghani Al-Shibami — Autonomous Systems Architect & AI Engineering Leader",
  description:
    "Executive personal portfolio of Abdulghani Al-Shibami. High-throughput distributed state machines, autonomous multi-agent systems, and low-latency infrastructure.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerList = await headers();
  const locale = headerList.get("x-locale") || "en";
  const dir = headerList.get("x-direction") || (locale === "ar" ? "rtl" : "ltr");

  return (
    <html lang={locale} dir={dir} className="dark" suppressHydrationWarning>
      <head>
        {/* Viewport & Safe Area */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#0A0A0B" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#FDFBF7" media="(prefers-color-scheme: light)" />
        
        {/* Zero-Flash Theme Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('portfolio-theme') || 'dark';
                  var root = document.documentElement;
                  if (theme === 'system') {
                    var isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    root.classList.toggle('dark', isDark);
                  } else {
                    root.classList.toggle('dark', theme === 'dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        {/* Preconnect to Google Fonts with crossorigin */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload critical fonts with font-display: swap */}
        <link rel="preload" as="font" type="font/woff2" href="https://fonts.gstatic.com/s/sourceserif4/v15/NEjXRls7x8LXk_zwLX54toBoRA.woff2" crossOrigin="anonymous" />
        <link rel="preload" as="font" type="font/woff2" href="https://fonts.gstatic.com/s/ibmplexsans/v19/zYXgKvKMW4S7Z3kO3sE_ZQ.woff2" crossOrigin="anonymous" />
        <link rel="preload" as="font" type="font/woff2" href="https://fonts.gstatic.com/s/notokufiarabic/v15/nKKY-G0Lb6GqlDOaKKYjQT6UK-gm.hvd.woff2" crossOrigin="anonymous" />
        <link rel="preload" as="font" type="font/woff2" href="https://fonts.gstatic.com/s/notonaskharabic/v15/EYrJNa1gq3OOzUe5FCIkWpCZfE0.woff2" crossOrigin="anonymous" />
        <link rel="preload" as="font" type="font/woff2" href="https://fonts.gstatic.com/s/jetbrainsmono/v25/tDbD2o-flEEny0FZhsf21FLDbls.woff2" crossOrigin="anonymous" />
        
        {/* Google Fonts with display=swap */}
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,500;0,8..60,600;0,8..60,700;1,8..60,400;1,8..60,600&family=IBM+Plex+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Noto+Kufi+Arabic:wght@400;500;600;700&family=Noto+Naskh+Arabic:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen selection:bg-gold/20 selection:text-gold-primary dark:selection:text-gold-on-dark">
        <ThemeProvider>
          <WebVitalsProvider>
            {children}
          </WebVitalsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}