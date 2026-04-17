# Chelsea (Felix) Lyon — AI4Science Personal Homepage

Bilingual (EN / ZH) academic homepage. Static HTML + CSS + JS, zero build, GitHub Pages ready.

## Structure

```text
.
├── index.html                 # About (EN)
├── career/index.html          # Education & Experience (EN)
├── projects/index.html        # Selected Projects (EN)
├── publications/index.html    # Publications & Outputs (EN)
├── contact/index.html         # Contact (EN)
├── zh/                        # 中文版 (mirror structure)
│   ├── index.html
│   ├── career/index.html
│   ├── projects/index.html
│   ├── publications/index.html
│   └── contact/index.html
└── assets/
    ├── css/style.css          # Design system
    ├── js/main.js             # Theme toggle, scroll reveal, mobile menu
    ├── cv/                    # CV PDFs (EN & CN)
    └── img/                   # Avatar & logos
```

## Quick Start

1. Replace the SVG avatar placeholder with your photo (`assets/img/avatar.jpg`)
2. Put CV files into `assets/cv/`
3. Update placeholder `#` links with real URLs
4. Fill in undergraduate education info
5. Update Google Scholar / LinkedIn links in the sidebar

## Deploy

**GitHub Pages** — push to `main`, enable Pages in Settings → Deploy from branch → `main` / `/ (root)`.

**Local preview** — `npx serve .` then open `http://localhost:3000`.

## License

© 2026 Chelsea (Felix) Lyon. All rights reserved.
