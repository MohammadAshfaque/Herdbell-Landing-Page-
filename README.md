# Herdbell — Landing Page

Landing page for **Herdbell**, a macOS menu bar app to monitor, control, and switch between AI coding agents. Built with [Astro](https://astro.build).

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:4321

| Command           | What it does                         |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Dev server with hot reload on :4321  |
| `npm run build`   | Static build into `dist/`            |
| `npm run preview` | Serve the production build locally   |

## Structure

```
src/
  pages/index.astro       page: assembles the sections
  layouts/Layout.astro    <head>, fonts, global CSS, script
  components/             one component per section + small shared pieces
  data/site.ts            agents, nav, pricing, privacy points, FAQ
  styles/global.css       all styles (dark theme, amber accent)
  scripts/main.js         cursor glow, scroll reveal, demo buttons, copy
public/favicon.svg
```

Most copy you'll want to tweak (price, trial days, Mac limit, FAQ, contact email) lives in `src/data/site.ts`.

## Deploy

`npm run build` outputs a fully static site in `dist/`, ready for Vercel, Netlify, Cloudflare Pages, or GitHub Pages.

## Before launch
- Point the Download / Start free trial buttons at real URLs
- Confirm price (`$12.99`), Mac limit (3), and minimum macOS in `src/data/site.ts`
- Set the real contact email in `src/data/site.ts`
