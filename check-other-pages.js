const { chromium } = require('C:\\Users\\AbdulghaniAli\\AppData\\Roaming\\npm\\node_modules\\@playwright\\test');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  const pages = [
    { url: 'https://abdulghani-al-shibami-portfolio.vercel.app/ar/credentials', name: 'ar-credentials' },
    { url: 'https://abdulghani-al-shibami-portfolio.vercel.app/ar/projects', name: 'ar-projects' },
    { url: 'https://abdulghani-al-shibami-portfolio.vercel.app/ar/showcase', name: 'ar-showcase' },
    { url: 'https://abdulghani-al-shibami-portfolio.vercel.app/ar/projects/yusra', name: 'ar-project-yusra' },
  ];
  
  for (const p of pages) {
    try {
      console.log(`Loading ${p.url}...`);
      await page.goto(p.url, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(1500);
      await page.screenshot({ path: `${p.name}.png`, fullPage: true });
      console.log(`Saved ${p.name}.png`);
    } catch (e) {
      console.error(`Error loading ${p.url}:`, e.message);
    }
  }
  
  await browser.close();
})();
