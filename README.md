# Jinglin (Felix) Liang — AI Agent / AI4Science

A bilingual academic and professional homepage focused on AI agents, genomic foundation models, and biomedical evidence. Plain HTML, CSS, and JavaScript; no build step or runtime dependencies.

## Preview and checks

```sh
python3 -m http.server 4173
python3 scripts/check_site.py
node --check assets/js/main.js
```

Open `http://localhost:4173`. GitHub Pages serves the repository root from `main`.

## Content

The English homepage is `index.html`; its Chinese counterpart is `zh/index.html`. Both languages have `career/`, `projects/`, `publications/`, and `contact/` routes. Styles and interactions live in `assets/css/style.css` and `assets/js/main.js`.

Keep both languages in sync when updating education, roles, project scope, and manuscript status. The project anchors `evo2`, `simupatient`, `orphancure`, and `carepilot` are linked from the homepages. Add evidence links only when their destinations are available.

The existing CV PDFs are placeholders. The interface currently offers **Request CV / 索取简历** by email. Replace both PDFs with real CVs before restoring download links. The original portrait is retained in `assets/img/avatar.jpg`. Email addresses remain in contact actions without being printed in page text.

## Design and review

The site uses a warm paper background, ink text, a restrained blue accent, serif display headings, and system text fonts. It has light/dark themes, mobile navigation, visible keyboard focus, and matching language routes. Fonts and icons require no external service.

See [docs/review.md](docs/review.md) for reference sources, review findings, fixes, and validation.

© 2026 Jinglin (Felix) Liang. All rights reserved.
