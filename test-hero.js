const fs = require('fs');
const { chromium } = require('C:\\Users\\AbdulghaniAli\\AppData\\Roaming\\npm\\node_modules\\@playwright\\test');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 800, height: 600 } });
  
  const b64 = fs.readFileSync('public/images/profile/abdulghani-hero.png').toString('base64');
  await page.setContent(`
    <body style="background: #0B0B0C; margin: 0; display: flex; justify-content: center; align-items: center; height: 100vh;">
      <div style="width: 420px; height: 500px; border-radius: 16px; overflow: hidden; border: 1px solid #D9B567; position: relative;">
        <img src="data:image/png;base64,${b64}" style="width: 100%; height: 100%; object-fit: cover;" />
      </div>
    </body>
  `);
  await page.screenshot({ path: 'test-hero-dark.png' });
  await browser.close();
  console.log('Hero dark test saved');
})();
