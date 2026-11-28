const { chromium } = require('C:\\Users\\AbdulghaniAli\\AppData\\Roaming\\npm\\node_modules\\@playwright\\test');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  const pages = [
    { url: 'http://localhost:3001/ar', name: 'local-ar-home' },
    { url: 'http://localhost:3001/en', name: 'local-en-home' },
    { url: 'http://localhost:3001/ar/credentials', name: 'local-ar-credentials' },
    { url: 'http://localhost:3001/ar/projects', name: 'local-ar-projects' },
  ];
  
  for (const p of pages) {
    try {
      console.log(`Loading ${p.url}...`);
      await page.goto(p.url, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(2000);
      await page.screenshot({ path: `${p.name}.png`, fullPage: true });
      console.log(`Saved ${p.name}.png`);
    } catch (e) {
      console.error(`Error loading ${p.url}:`, e.message);
    }
  }
  
  await browser.close();
  console.log('Finished capturing all local screenshots.');
})();
