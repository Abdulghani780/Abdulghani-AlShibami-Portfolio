const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://abdulghani-al-shibami-portfolio.vercel.app/en');
  await page.locator('html').click();
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();