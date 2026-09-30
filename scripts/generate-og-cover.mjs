import sharp from "sharp";
import fs from "fs";
import path from "path";

const width = 1200;
const height = 630;

const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070708" />
      <stop offset="50%" stop-color="#0B0B0D" />
      <stop offset="100%" stop-color="#141418" />
    </linearGradient>
    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F3E5AB" />
      <stop offset="50%" stop-color="#D4AF37" />
      <stop offset="100%" stop-color="#AA820A" />
    </linearGradient>
    <linearGradient id="accentGlow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#D4AF37" stop-opacity="0.6" />
      <stop offset="100%" stop-color="#D4AF37" stop-opacity="0" />
    </linearGradient>
    <radialGradient id="radialGold" cx="80%" cy="20%" r="60%">
      <stop offset="0%" stop-color="#D4AF37" stop-opacity="0.18" />
      <stop offset="100%" stop-color="#070708" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="radialSlate" cx="20%" cy="80%" r="50%">
      <stop offset="0%" stop-color="#1E293B" stop-opacity="0.4" />
      <stop offset="100%" stop-color="#070708" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Background Canvas -->
  <rect width="${width}" height="${height}" fill="url(#bg)" />
  <rect width="${width}" height="${height}" fill="url(#radialGold)" />
  <rect width="${width}" height="${height}" fill="url(#radialSlate)" />

  <!-- Outer Luxury Border -->
  <rect x="24" y="24" width="${width - 48}" height="${height - 48}" rx="20" fill="none" stroke="#D4AF37" stroke-width="1.5" stroke-opacity="0.35" />
  <rect x="32" y="32" width="${width - 64}" height="${height - 64}" rx="14" fill="none" stroke="#FFFFFF" stroke-width="1" stroke-opacity="0.05" />

  <!-- Corner Tech Accents -->
  <path d="M 24 56 L 24 24 L 56 24" fill="none" stroke="#D4AF37" stroke-width="3" />
  <path d="M ${width - 56} 24 L ${width - 24} 24 L ${width - 24} 56" fill="none" stroke="#D4AF37" stroke-width="3" />
  <path d="M 24 ${height - 56} L 24 ${height - 24} L 56 ${height - 24}" fill="none" stroke="#D4AF37" stroke-width="3" />
  <path d="M ${width - 56} ${height - 24} L ${width - 24} ${height - 24} L ${width - 24} ${height - 56}" fill="none" stroke="#D4AF37" stroke-width="3" />

  <!-- Decorative Circuit Traces -->
  <line x1="80" y1="120" x2="300" y2="120" stroke="#D4AF37" stroke-opacity="0.2" stroke-width="1" stroke-dasharray="4 4" />
  <circle cx="300" cy="120" r="3" fill="#D4AF37" fill-opacity="0.6" />

  <!-- Brand Monogram Box -->
  <g transform="translate(80, 75)">
    <rect width="64" height="64" rx="12" fill="#121216" stroke="#D4AF37" stroke-width="1.5" />
    <text x="32" y="42" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="26" fill="url(#gold)" text-anchor="middle" letter-spacing="1.5">AS</text>
  </g>

  <!-- Kicker / Status -->
  <g transform="translate(160, 95)">
    <rect width="180" height="28" rx="14" fill="#D4AF37" fill-opacity="0.12" stroke="#D4AF37" stroke-opacity="0.3" stroke-width="1" />
    <circle cx="16" cy="14" r="4" fill="#10B981" />
    <text x="30" y="19" font-family="system-ui, -apple-system, sans-serif" font-weight="600" font-size="12" fill="#E5E5E5" letter-spacing="0.5">EXECUTIVE PORTFOLIO</text>
  </g>

  <!-- Main Headline -->
  <text x="80" y="235" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="52" fill="#FFFFFF" letter-spacing="-0.5">
    ABDULGHANI AL-SHIBAMI
  </text>

  <!-- Arabic Sub-Headline -->
  <text x="80" y="290" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="30" fill="url(#gold)">
    عبدالغني الشبامي — مهندس برمجيات وذكاء اصطناعي
  </text>

  <!-- Description / Role -->
  <text x="80" y="345" font-family="system-ui, -apple-system, sans-serif" font-weight="400" font-size="22" fill="#A1A1AA">
    AI Engineer · Full-Stack Software Developer · Systems Thinker
  </text>

  <text x="80" y="380" font-family="system-ui, -apple-system, sans-serif" font-weight="400" font-size="17" fill="#71717A">
    Information Technology · University of Modern Sciences · Sana&apos;a, Yemen
  </text>

  <!-- Divider Line -->
  <line x1="80" y1="425" x2="${width - 80}" y2="425" stroke="#FFFFFF" stroke-opacity="0.1" stroke-width="1" />

  <!-- Core Competencies Chips -->
  <g transform="translate(80, 460)">
    <!-- Chip 1 -->
    <rect x="0" y="0" width="140" height="38" rx="8" fill="#16161C" stroke="#D4AF37" stroke-opacity="0.3" stroke-width="1" />
    <text x="70" y="24" font-family="monospace" font-size="14" fill="#D4AF37" font-weight="600" text-anchor="middle">C# / WinForms</text>

    <!-- Chip 2 -->
    <rect x="156" y="0" width="130" height="38" rx="8" fill="#16161C" stroke="#D4AF37" stroke-opacity="0.3" stroke-width="1" />
    <text x="221" y="24" font-family="monospace" font-size="14" fill="#D4AF37" font-weight="600" text-anchor="middle">Oracle XE</text>

    <!-- Chip 3 -->
    <rect x="302" y="0" width="120" height="38" rx="8" fill="#16161C" stroke="#D4AF37" stroke-opacity="0.3" stroke-width="1" />
    <text x="362" y="24" font-family="monospace" font-size="14" fill="#D4AF37" font-weight="600" text-anchor="middle">Python / AI</text>

    <!-- Chip 4 -->
    <rect x="438" y="0" width="130" height="38" rx="8" fill="#16161C" stroke="#D4AF37" stroke-opacity="0.3" stroke-width="1" />
    <text x="503" y="24" font-family="monospace" font-size="14" fill="#D4AF37" font-weight="600" text-anchor="middle">Next.js / TS</text>

    <!-- Chip 5 -->
    <rect x="584" y="0" width="130" height="38" rx="8" fill="#16161C" stroke="#D4AF37" stroke-opacity="0.3" stroke-width="1" />
    <text x="649" y="24" font-family="monospace" font-size="14" fill="#D4AF37" font-weight="600" text-anchor="middle">Supabase RLS</text>
  </g>

  <!-- Canonical Projects Callout -->
  <g transform="translate(80, 535)">
    <text x="0" y="20" font-family="system-ui, -apple-system, sans-serif" font-size="15" fill="#71717A">
      Verified Systems: Campus IT Tracker · MetaAlgorithmLab · Cafena · NovaTech · GP Academic Portal
    </text>
  </g>

  <!-- URL Badge at Bottom Right -->
  <g transform="translate(${width - 290}, 525)">
    <rect width="210" height="36" rx="18" fill="#D4AF37" fill-opacity="0.1" stroke="#D4AF37" stroke-opacity="0.4" stroke-width="1" />
    <text x="105" y="23" font-family="system-ui, -apple-system, sans-serif" font-weight="600" font-size="14" fill="url(#gold)" text-anchor="middle">
      abdulghani.dev
    </text>
  </g>
</svg>
`;

async function main() {
  const outPath = path.join(process.cwd(), "public", "images", "og-cover.png");
  await sharp(Buffer.from(svg))
    .png({ quality: 95 })
    .toFile(outPath);
  console.log("Successfully generated:", outPath);
}

main().catch(console.error);
