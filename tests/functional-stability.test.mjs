import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const ROOT_DIR = process.cwd();

test("Navbar Navigation & Mobile Drawer Integrity", () => {
  const navbarPath = path.join(ROOT_DIR, "components", "layout", "Navbar.tsx");
  assert.ok(fs.existsSync(navbarPath), "Navbar.tsx must exist");
  const content = fs.readFileSync(navbarPath, "utf-8");

  // Core navigation anchors
  assert.ok(content.includes("#about"), "Navbar must link to #about");
  assert.ok(content.includes("#ai-lab"), "Navbar must link to #ai-lab");
  assert.ok(content.includes("#projects"), "Navbar must link to #projects");
  assert.ok(content.includes("#engineering"), "Navbar must link to #engineering");
  assert.ok(content.includes("#certifications"), "Navbar must link to #certifications");
  assert.ok(content.includes("#contact"), "Navbar must link to #contact");

  // Mobile menu drawer toggle
  assert.ok(content.includes("mobileMenuOpen"), "Navbar must have mobileMenuOpen state");
  assert.ok(content.includes("setMobileMenuOpen(false)"), "Navbar links must dismiss mobile menu on click");
  assert.ok(content.includes("aria-label"), "Navbar hamburger toggle must include accessible aria-label");
});

test("Language Switcher Route Path Preservation", () => {
  const switcherPath = path.join(ROOT_DIR, "components", "layout", "LanguageSwitcher.tsx");
  assert.ok(fs.existsSync(switcherPath), "LanguageSwitcher.tsx must exist");
  const content = fs.readFileSync(switcherPath, "utf-8");

  assert.ok(
    content.includes("pathname.replace(new RegExp(`^/${currentLocale}`), `/${targetLocale}`)"),
    "LanguageSwitcher must preserve deep route paths when switching languages"
  );
  assert.ok(content.includes("aria-label"), "LanguageSwitcher must include accessible aria-label");
});

test("Theme Provider & LocalStorage Persistence", () => {
  const providerPath = path.join(ROOT_DIR, "lib", "theme", "ThemeProvider.tsx");
  assert.ok(fs.existsSync(providerPath), "ThemeProvider.tsx must exist");
  const content = fs.readFileSync(providerPath, "utf-8");

  assert.ok(content.includes('localStorage.getItem("portfolio-theme")'), "ThemeProvider must read stored theme preference");
  assert.ok(content.includes('localStorage.setItem("portfolio-theme", theme)'), "ThemeProvider must persist theme changes to localStorage");
  assert.ok(content.includes('root.classList.add("dark")'), "ThemeProvider must add dark class for dark theme");
  assert.ok(content.includes('root.classList.remove("dark")'), "ThemeProvider must remove dark class for light theme");
});

test("Certificate Modal Keyboard Accessibility & Zoom Controls", () => {
  const modalPath = path.join(ROOT_DIR, "components", "features", "credentials", "CertificateModal.tsx");
  assert.ok(fs.existsSync(modalPath), "CertificateModal.tsx must exist");
  const content = fs.readFileSync(modalPath, "utf-8");

  assert.ok(content.includes('"Escape"'), "CertificateModal must close on Escape key");
  assert.ok(content.includes("document.body.style.overflow = \"hidden\""), "CertificateModal must lock body scroll when open");
  assert.ok(content.includes("zoomLevel"), "CertificateModal must maintain zoom level state");
});

test("Bilingual 404 Route Error Handling", () => {
  const root404 = path.join(ROOT_DIR, "app", "not-found.tsx");
  assert.ok(fs.existsSync(root404), "app/not-found.tsx must exist");
  const rootContent = fs.readFileSync(root404, "utf-8");

  assert.ok(rootContent.includes("/en"), "Root 404 must link to English homepage");
  assert.ok(rootContent.includes("/ar"), "Root 404 must link to Arabic homepage");
  assert.ok(rootContent.includes("الصفحة غير موجودة"), "Root 404 must contain Arabic not found text");

  const locale404 = path.join(ROOT_DIR, "app", "[locale]", "not-found.tsx");
  assert.ok(fs.existsSync(locale404), "app/[locale]/not-found.tsx must exist");
  const localeContent = fs.readFileSync(locale404, "utf-8");

  assert.ok(localeContent.includes("/en"), "Locale 404 must link to English homepage");
  assert.ok(localeContent.includes("/ar"), "Locale 404 must link to Arabic homepage");
});
