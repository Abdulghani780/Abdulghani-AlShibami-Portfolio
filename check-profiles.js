const fs = require('fs');
const path = require('path');
const { chromium } = require('C:\\Users\\AbdulghaniAli\\AppData\\Roaming\\npm\\node_modules\\@playwright\\test');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 800 } });
  
  const files = [
    'abdulghani-hero-studio-v2.png',
    'abdulghani-hero.png',
    'abdulghani-portrait.webp',
    'abdulghani-profile-hero.webp',
    'abdulghani-profile.webp'
  ];
  
  let html = '<html><body style="background: #0D0D0E; color: white; display: flex; gap: 20px; flex-wrap: wrap; padding: 20px; font-family: sans-serif;">';
  for (const f of files) {
    const fullPath = path.resolve('public/images/profile', f);
    const ext = path.extname(f).slice(1);
    const mime = ext === 'png' ? 'image/png' : 'image/webp';
    const b64 = fs.readFileSync(fullPath).toString('base64');
    html += `<div><h3>${f}</h3><img src="data:${mime};base64,${b64}" style="width: 200px; height: 260px; object-fit: cover; border: 1px solid gold;" /></div>`;
  }
  html += '</body></html>';
  
  await page.setContent(html);
  await page.screenshot({ path: 'profile-comparison.png' });
  await browser.close();
  console.log('Comparison saved');
})();
