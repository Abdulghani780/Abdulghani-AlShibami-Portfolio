const fs = require('fs');
const { chromium } = require('C:\\Users\\AbdulghaniAli\\AppData\\Roaming\\npm\\node_modules\\@playwright\\test');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  await page.goto('https://abdulghani-al-shibami-portfolio.vercel.app/ar', { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(2000);
  
  // Take screenshots of each section by scrolling down
  const sections = await page.$$('section');
  console.log(`Found ${sections.length} sections on AR homepage`);
  
  for (let i = 0; i < sections.length; i++) {
    const id = await sections[i].getAttribute('id') || `section-${i}`;
    await sections[i].screenshot({ path: `ar-sec-${i}-${id}.png` });
    console.log(`Saved ar-sec-${i}-${id}.png`);
  }
  
  await browser.close();
})();
