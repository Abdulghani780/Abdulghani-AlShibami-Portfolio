# 10 — COMPONENT ARCHITECTURE

**Project:** Abdulghani Al-Shibami — Autonomous Personal Portfolio Engineering System  

---

## 1. Directory & Layer Organization

```text
components/
├── ui/                     # Primitives & Dumb Atoms
│   ├── Button.tsx          # Primary Gold, Secondary Outline, Ghost
│   ├── Badge.tsx           # Category & Technology tag pills
│   ├── Card.tsx            # Obsidian/Porcelain elevated surface container
│   ├── Input.tsx           # Styled text inputs with focus rings
│   ├── Textarea.tsx        # Styled multiline inputs
│   ├── Modal.tsx           # Accessible keyboard-trapped dialog
│   └── Toast.tsx           # Transient notification alert
│
├── layout/                 # Global Shell & Structural Elements
│   ├── Navbar.tsx          # Responsive navigation bar & sticky header
│   ├── MobileNav.tsx       # Slide-over mobile drawer navigation
│   ├── Footer.tsx          # Bilingual footer, links, and copyright
│   ├── ThemeToggle.tsx     # Dark/Light switch with persistent storage
│   ├── LanguageSwitcher.tsx# English / Arabic switcher with RTL swap
│   └── SectionContainer.tsx# Standardized padding & max-width container
│
└── features/               # Domain-Specific Orchestration
    ├── hero/
    │   ├── HeroSection.tsx # Executive introduction & CTAs
    │   └── ProfileImage.tsx# Responsive image with [PROFILE_IMAGE] fallback
    ├── projects/
    │   ├── ProjectCard.tsx # Showcase card with hover glow & badges
    │   ├── ProjectGrid.tsx # Responsive auto-fit project grid
    │   └── ProjectFilter.tsx# Search & category tabs controller
    ├── demos/
    │   ├── DemoViewer.tsx  # Universal demo coordinator (Live/Sim/Video)
    │   ├── DesktopSimulation.tsx # Generic high-fidelity simulation engine
    │   └── SimulationControls.tsx # Reset, Mock Data, and View toggles
    ├── contact/
    │   └── ContactForm.tsx # Client-side validated submission form
    └── experience/
        └── TimelineItem.tsx# Academic & professional milestone node
```

---

## 2. Component Design Principles
1. **Single Responsibility:** UI primitives (`components/ui`) have zero domain awareness.
2. **Prop Interfaces:** Every component exports a strictly typed TypeScript interface (e.g., `interface ProjectCardProps`).
3. **No Direct Data Fetching in UI:** Domain components accept typed data models via props or call dedicated DAL hooks/services.
4. **CSS Logical Properties:** Use `start`, `end`, `ms-*`, `me-*`, `ps-*`, `pe-*` to ensure seamless LTR/RTL behavior without conditional class duplication.
