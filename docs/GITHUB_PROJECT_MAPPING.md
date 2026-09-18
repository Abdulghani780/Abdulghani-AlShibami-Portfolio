# GitHub Project Mapping & Multi-Repository Architecture

**Standard:** Multi-Repository Organization & GitHub Mapping Architecture  
**Owner / Authenticated Account:** `@Abdulghani780` ([https://github.com/Abdulghani780](https://github.com/Abdulghani780))  
**Date:** 2026-09-19  
**Status:** **REPOSITORIES PREPARED & CONFIGURED**  

---

## 1. Multi-Repository Architecture Overview

To guarantee complete separation of concerns, enterprise licensing, and security hygiene:
- **The Portfolio Repository (`Abdulghani-AlShibami-Portfolio`) remains completely autonomous.** It contains only the Next.js portfolio application, interactive simulation engines, documentation, migrations, and CI/CD workflows.
- **Each authentic project lives in its own independent repository** with its own license, sanitized configuration, independent Git commit history, and technical documentation.
- **Original source code is NEVER dumped inside the portfolio repository.** The portfolio links to these projects using verified GitHub external links (`https://github.com/Abdulghani780/<repo>`).

### Target GitHub Repository Hierarchy

```text
GitHub (@Abdulghani780)
│
├── Abdulghani-AlShibami-Portfolio
│   └── Next.js 15 / TypeScript / Tailwind CSS / Supabase / Vercel
│
├── Cafena
│   └── Artisanal Specialty Coffee E-Commerce Web Platform (HTML5 / CSS3 / Vanilla JS)
│
├── Campuse-IT-Tracker
│   └── Enterprise IT Infrastructure & ITIL Asset Management System (C# WinForms / Oracle)
│
├── Graduation-Project-Management-Portal
│   └── University Academic Project Proposal & Moderation Platform (PHP 8 / MySQL 8)
│
├── MetaAlgorithmLab
│   └── Scientific Algorithmic Benchmarking & Complexity Engine (Python 3.10+ / PyQt6 / SciPy)
│
└── NovaTech
    └── Futuristic Cyber Gadgets & Smart Tech Storefront (HTML5 / CSS3 / ES6 JS)
```

---

## 2. Project-by-Project Repository Specification

| Project | Repository Name | Local Staging Path | Remote URL | Visibility |
|---|---|---|---|:---:|
| **Portfolio Platform** | `Abdulghani-AlShibami-Portfolio` | `c:\my projects\Portifilo` | [Abdulghani-AlShibami-Portfolio](https://github.com/Abdulghani780/Abdulghani-AlShibami-Portfolio) | Public |
| **Cafena** | `Cafena` | `c:\my projects\Staging_Repos\Cafena` | [Cafena](https://github.com/Abdulghani780/Cafena) | Public |
| **Campus IT Tracker** | `Campuse-IT-Tracker` | `c:\my projects\Staging_Repos\Campuse-IT-Tracker` | [Campuse-IT-Tracker](https://github.com/Abdulghani780/Campuse-IT-Tracker) | Public |
| **Graduation Project Portal** | `Graduation-Project-Management-Portal` | `c:\my projects\Staging_Repos\Graduation-Project-Management-Portal` | [Graduation-Project-Management-Portal](https://github.com/Abdulghani780/Graduation-Project-Management-Portal) | Public |
| **MetaAlgorithmLab** | `MetaAlgorithmLab` | `c:\my projects\Staging_Repos\MetaAlgorithmLab` | [MetaAlgorithmLab](https://github.com/Abdulghani780/MetaAlgorithmLab) | Public |
| **NOVA TECH** | `NovaTech` | `c:\my projects\Staging_Repos\NovaTech` | [NovaTech](https://github.com/Abdulghani780/NovaTech) | Public |

---

## 3. Sanitization & Hygiene Verification

1. **Cafena:** Cleaned unused assets, added `.gitignore`, attached MIT License, authored Arabic/English README.
2. **Campus IT Tracker:** Stripped plain Oracle credentials from `appsettings.Development.json`, created `App.config.example` & `appsettings.example.json`, ignored Visual Studio `bin/` and `obj/` builds, attached MIT License.
3. **Graduation Project Portal:** Removed plaintext database password from `config.php`, created `config.example.php`, hashed all default test accounts with bcrypt in `database_setup.sql`, attached MIT License.
4. **MetaAlgorithmLab:** Parameterized `docker-compose.yml` with dynamic environment variables, created `.env.example`, excluded `.venv` and Python caches, attached MIT License.
5. **NovaTech:** Cleaned build artifacts, added `.gitignore`, attached MIT License, authored responsive documentation.

---

## 4. One-Click Repository Creation Links

- [Create Abdulghani-AlShibami-Portfolio](https://github.com/new?name=Abdulghani-AlShibami-Portfolio&description=Autonomous+personal+portfolio+and+interactive+engineering+showcase+of+Abdulghani+Al-Shibami&visibility=public)
- [Create Cafena](https://github.com/new?name=Cafena&description=Artisanal+Specialty+Coffee+Web+Platform+with+Native+Arabic+RTL+Architecture&visibility=public)
- [Create Campuse-IT-Tracker](https://github.com/new?name=Campuse-IT-Tracker&description=Enterprise+ITIL+Service+Desk+and+Hardware+Asset+Tracker+in+C+Sharp+and+Oracle&visibility=public)
- [Create Graduation-Project-Management-Portal](https://github.com/new?name=Graduation-Project-Management-Portal&description=University+Academic+Proposal+Submission+and+Faculty+Review+Portal+in+PHP+and+MySQL&visibility=public)
- [Create MetaAlgorithmLab](https://github.com/new?name=MetaAlgorithmLab&description=Scientific+Algorithmic+Benchmarking+and+Empirical+Complexity+Analyzer+in+Python+and+PyQt6&visibility=public)
- [Create NovaTech](https://github.com/new?name=NovaTech&description=Modern+Cyber+Gadgets+Storefront+with+Live+Search+and+Cart+Calculations&visibility=public)
