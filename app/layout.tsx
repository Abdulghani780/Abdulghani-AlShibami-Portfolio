import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme/ThemeProvider";

export const metadata: Metadata = {
  title: "Abdulghani Al-Shibami — Autonomous Systems Architect & AI Engineering Leader",
  description:
    "Executive personal portfolio of Abdulghani Al-Shibami. High-throughput distributed state machines, autonomous multi-agent systems, and low-latency infrastructure.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
        {/* Preconnect to Google Fonts if online */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Noto+Kufi+Arabic:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen selection:bg-gold/20 selection:text-gold-light">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
