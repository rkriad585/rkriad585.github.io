# RK RIAD 585 — Personal Website

Portfolio site for **RK Riad Khan** (`rkriad585`) — software developer, ethical hacker, and cybersecurity enthusiast from Rajshahi, Bangladesh.

> Everything is open-source in here.

Live at: **[rkriad585.github.io](https://rkriad585.github.io)**

## Design

A static, single-page site built in the **Nothing OS** design language — monochrome OLED surfaces, the signature red accent (`#D71921`), dot-matrix typography, a sparse dot-grid background, and liquid-glass (frosted blur) panels. No build tools, no frameworks, no dependencies.

- **Typography:** DotGothic16 (dot-matrix headings), Inter (body), JetBrains Mono (utility/code)
- **Palette:** `#050505` base · grey hierarchy · red used only as a signal
- **Effects:** 16px backdrop-blur glass, hairline borders, dot-matrix field, blinking streaming cursor

## Structure

```
.
├── index.html          # Single-page site
├── css/style.css       # Design tokens + styles
├── js/main.js          # Reveal, typing, filters, count-up
└── rk-logo.jpg         # Brand logo
```

## Sections

- **Hero** — dot-matrix name, terminal intro, status pill
- **Stats** — public repos, top-rated stars, MIT projects, languages
- **About** — bio and core identity chips
- **Stack** — language and tooling proficiency bars
- **Projects** — filterable catalog of open-source repos
- **Flagships** — LocalNeural & LineSolv spotlights
- **Connect** — social and professional links

## Local Development

Open `index.html` directly in a browser, or serve the folder:

```sh
python -m http.server 8000
```

## Author

**RK Riad Khan** — [github.com/rkriad585](https://github.com/rkriad585)

Made with ♥ by rkriad585.
