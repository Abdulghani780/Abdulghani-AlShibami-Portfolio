const { chromium } = require('C:\\Users\\AbdulghaniAli\\AppData\\Roaming\\npm\\node_modules\\@playwright\\test');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  console.log('Capturing English homepage...');
  await page.goto('https://abdulghani-al-shibami-portfolio.vercel.app/en', { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'en-homepage-full.png', fullPage: true });
  await page.screenshot({ path: 'en-homepage-fold.png', fullPage: false });
  
  console.log('Capturing Arabic homepage...');
  await page.goto('https://abdulghani-al-shibami-portfolio.vercel.app/ar', { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'ar-homepage-full.png', fullPage: true });
  await page.screenshot({ path: 'ar-homepage-fold.png', fullPage: false });
  
  console.log('Capturing case studies page...');
  await page.goto('https://abdulghani-al-shibami-portfolio.vercel.app/en/case-studies', { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'en-case-studies.png', fullPage: true });
  
  await browser.close();
  console.log('All screenshots captured successfully');
})();
