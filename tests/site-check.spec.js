const { test, expect } = require('@playwright/test');

test('check live site', async ({ page }) => {
  await page.goto('https://abdulghani-al-shibami-portfolio.vercel.app/en', { 
    waitUntil: 'networkidle',
    timeout: 60000 
  });
  
  // Take a screenshot
  await page.screenshot({ path: 'site-screenshot.png', fullPage: true });
  
  // Get page title
  const title = await page.title();
  console.log('Page Title:', title);
  
  // Get some body text
  const bodyText = await page.locator('body').innerText();
  console.log('Body Text (first 2000 chars):', bodyText.substring(0, 2000));
  
  // Check for common elements
  const hasNav = await page.locator('nav').count();
  const hasMain = await page.locator('main').count();
  const hasFooter = await page.locator('footer').count();
  
  console.log('Nav elements:', hasNav);
  console.log('Main elements:', hasMain);
  console.log('Footer elements:', hasFooter);
});