const { chromium } = require('C:\\Users\\AbdulghaniAli\\AppData\\Roaming\\npm\\node_modules\\@playwright\\test');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  await page.goto('https://abdulghani-al-shibami-portfolio.vercel.app/ar', { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(2000);
  
  // Scroll step by step
  for (let i = 0; i < 10; i++) {
    await page.evaluate(() => window.scrollBy(0, 800));
    await page.waitForTimeout(600);
  }
  
  await page.screenshot({ path: 'ar-scrolled-full.png', fullPage: true });
  console.log('Scrolled full page captured');
  
  await browser.close();
})();
