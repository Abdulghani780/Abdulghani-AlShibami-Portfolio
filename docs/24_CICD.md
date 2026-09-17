# 24 — CI/CD AUTOMATION SPECIFICATION

**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System  
**Engine:** GitHub Actions  

---

## 1. CI Pipeline Architecture (`.github/workflows/ci.yml`)

The continuous integration pipeline triggers on every push and pull request to `main` and `develop`:

```yaml
name: Continuous Integration

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  validate:
    name: Lint, Typecheck, Test & Build
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Source
        uses: actions/checkout@v4

      - name: Setup PNPM
        uses: pnpm/action-setup@v3
        with:
          version: 10

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 24
          cache: 'pnpm'

      - name: Install Dependencies
        run: pnpm install --frozen-lockfile

      - name: Lint Code
        run: pnpm lint

      - name: Verify TypeScript Types
        run: pnpm typecheck

      - name: Run Test Suites
        run: pnpm test

      - name: Verify Production Build
        run: pnpm build
        env:
          NEXT_PUBLIC_SITE_URL: "https://abdulghani.dev"
```

---

## 2. Automated Quality Gates
A pull request CANNOT be merged into `main` unless:
1. All linting rules pass with zero warnings.
2. TypeScript compilation passes with zero type errors.
3. All automated tests exit with code 0.
4. Next.js production build completes successfully.
