# 26 — GIT WORKFLOW & VERSION CONTROL CONVENTIONS

**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System  

---

## 1. Branch Strategy

```text
main (Production Releases)
  ▲
  │ (Release PR after all CI checks pass)
develop (Integration & Staging)
  ▲
  ├── feature/<feature-name>  (e.g., feature/interactive-demo-system)
  ├── fix/<bug-name>          (e.g., fix/rtl-card-spacing)
  ├── docs/<doc-topic>        (e.g., docs/database-schema-update)
  └── refactor/<scope>        (e.g., refactor/dal-caching)
```

---

## 2. Conventional Commit Standards
All commits MUST follow the Conventional Commits specification:

- `feat: <description>`: Introducing new functional features or components.
- `fix: <description>`: Resolving bugs, layout shifts, or logic errors.
- `docs: <description>`: Authoring or amending documentation and specifications.
- `style: <description>`: Design token, spacing, or visual styling updates with no logic change.
- `refactor: <description>`: Code structure adjustments without changing behavior.
- `perf: <description>`: Core Web Vitals, asset optimization, or rendering performance boosts.
- `test: <description>`: Adding, updating, or fixing automated test suites.
- `chore: <description>`: Tooling, dependency, or configuration updates.

---

## 3. Pre-Commit Checklist
Before executing any commit:
1. `git status` : Verify only intended files are staged.
2. `git diff --cached` : Check for accidental secret, password, or `.env` inclusion.
3. Verify type safety and build integrity.
4. Update `PROGRESS.md`, `IMPLEMENTATION_LOG.md`, and `CHANGELOG.md` when appropriate.
