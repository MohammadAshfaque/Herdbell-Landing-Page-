# Herdbell — Landing Page

Static landing page for **Herdbell**, a macOS menu bar app to monitor, control, and switch between AI coding agents.

## Files
- `index.html` — page markup
- `styles.css` — all styles (dark theme, amber accent)
- `script.js` — small interactions (cursor glow, scroll reveal, demo buttons, copy)

## Run locally
Open `index.html` in a browser, or:

```sh
python3 -m http.server 8000
```

No build step. Deploys as-is to GitHub Pages, Netlify, Vercel, or Cloudflare Pages.

## Things to update before launch
- Download / checkout links (`#download`, `#pricing` buttons)
- Final price (currently `$12.99`) and Mac limit (currently 3)
- Contact email in the footer (`hello@herdbell.app`)
