# Kevin Simon portfolio

Personal portfolio at portfolio.kevindsimon.com. Next.js (pages router) exported as a static site and served by GitHub Pages from `docs/` on `master`.

## Structure
- `pages/index.js`: home. `pages/[slug].js`: project page template.
- `data/projects.js`: all project page content. Empty `impact` hides the section.
- `components/`: collage and theme toggle. `styles/tokens.css`: colors and type. `styles/site.css`: layout.
- `static/`: screenshots, resume, favicon (published at `/static`). `public/`: everything else published as is.

## Commands
Node is at `~/.local/node-v22.23.4-darwin-arm64/bin`; add it to `PATH` first.
- `npm run dev`: local development.
- `npm run preview-build`: full build into `.next-build/`. Does not touch `docs/`.
- `npm run deploy`: **publishes the live site. Only with Kevin's explicit approval, and only from `master`.**

## Publishing rules
- A build empties `docs/`. The site disappears without `.nojekyll` (this has happened), and the domain depends on `CNAME`. Keep `.nojekyll`, `CNAME` and `robots.txt` in `public/`, and confirm they are in the build output before any release.
- `public/dialed-grounds/` holds live privacy and support pages for an App Store app. Never remove them.
- Run plain `next build` only to publish; it writes to `docs/`.

## Content
- Very minimal: 565px column, Merriweather Sans 15/24, no bold headings, nothing funky on image hover.
- Projects are short pages showing range. No About page, footer, or Experience block.
- Never invent metrics. 35% and 43% are Centro platform-wide, not Global Search.
- Kevin is a designer, not a coder. Explain in plain language.
