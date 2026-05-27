# Matteo Priori — Portfolio

Personal portfolio site. Static, fast, bilingual (EN default at `/`, IT at `/it`),
with dark/light mode. Built with **[Astro](https://astro.build)** and
**[Tailwind CSS v4](https://tailwindcss.com)**, deployed on **Vercel**.

**Live:** [matteopriori.vercel.app](https://matteopriori.vercel.app) ·
**Repo:** [github.com/matteopriori04-sketch/Portfolio](https://github.com/matteopriori04-sketch/Portfolio)

> The code is part of the portfolio — it aims to be clean, commented and easy to read.

---

## Tech stack

| Area        | Choice                                                            |
| ----------- | ----------------------------------------------------------------- |
| Framework   | Astro 5 (static output, zero JS shipped except small enhancements)|
| Styling     | Tailwind CSS v4 (CSS-first config in `src/styles/global.css`)     |
| Fonts       | Space Grotesk · Inter · JetBrains Mono — self-hosted via @fontsource |
| i18n        | Astro native i18n routing (`en` default, `it` under `/it`)        |
| SEO         | Open Graph + Twitter tags, canonical, hreflang, sitemap, robots   |
| Deploy      | Vercel (static)                                                   |

## Project structure

```
.
├── public/                 # static assets served as-is
│   ├── favicon.svg / .ico / apple-touch-icon.png
│   ├── og-image.png        # 1200×630 social-sharing image
│   ├── cv-matteo-priori.pdf# ← PLACEHOLDER: replace with your real CV
│   └── robots.txt
├── src/
│   ├── components/         # Header, Hero, About, Projects, ProjectCard, Skills, Contact, Footer, toggles
│   ├── data/               # projects.ts, skills.ts (content separated from markup)
│   ├── i18n/               # ui.ts (labels), content.ts (prose), utils.ts (t() helper)
│   ├── layouts/            # BaseLayout.astro (<head>, SEO, theme script, fonts)
│   ├── pages/              # index.astro (/) + it/index.astro (/it)
│   ├── styles/             # global.css (design tokens + Tailwind theme)
│   └── consts.ts           # site URL, author, social handles, CV path
├── astro.config.mjs        # i18n, sitemap, Tailwind plugin
└── vercel.json             # deploy config
```

---

## Run locally

Requires **Node.js 18.20+ / 20+** and npm.

```bash
# 1. install dependencies
npm install

# 2. start the dev server (hot reload) — open the printed URL, usually:
npm run dev          # → http://localhost:4321

# 3. production build into dist/
npm run build

# 4. preview the production build locally
npm run preview
```

Italian version is at `http://localhost:4321/it`.

---

## Things you’ll want to edit

| What | Where |
| ---- | ----- |
| Your real CV | replace `public/cv-matteo-priori.pdf` (keep the file name) |
| Final site URL | `site:` in `astro.config.mjs`, `SITE.url` in `src/consts.ts`, the URL in `public/robots.txt` |
| Project / skill content | `src/data/projects.ts`, `src/data/skills.ts` |
| Hero / About / section copy | `src/i18n/content.ts` |
| Colours & fonts | `src/styles/global.css` (the `:root` / `.dark` tokens) |
| OG image | regenerate or replace `public/og-image.png` (1200×630) |
| **Privacy Policy** | review `src/components/Legal.astro` (data-controller details) before going public |

---

## Deploy to Vercel (connecting the GitHub repo)

1. **Push the project to GitHub.** From this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/matteopriori04-sketch/Portfolio.git
   git push -u origin main
   ```
2. Go to **[vercel.com](https://vercel.com)** and sign in **with GitHub**.
3. Click **Add New… → Project**, then **Import** your portfolio repository.
4. Vercel auto-detects Astro. The defaults are already correct (and pinned in
   `vercel.json`):
   - **Framework Preset:** Astro
   - **Build Command:** `astro build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Click **Deploy**. After ~1 minute you’ll get a live URL — this project is
   served at `https://matteopriori.vercel.app`.
6. **Keep the canonical URL in sync** with that domain in `astro.config.mjs`
   (`site:`), `src/consts.ts` (`SITE.url`) and `public/robots.txt` — they are
   already set to `https://matteopriori.vercel.app`.

From now on **every push to `main` redeploys automatically**, and pull requests
get their own preview URLs.

---

## Connecting a custom domain later

When you buy a domain (e.g. `matteopriori.dev` from Namecheap, Cloudflare, etc.):

1. In your Vercel project → **Settings → Domains → Add**, type your domain and
   confirm.
2. Vercel shows the DNS records to set. Two common options:
   - **Use Vercel’s nameservers** (simplest): change the nameservers at your
     registrar to the ones Vercel lists. Vercel then manages everything.
   - **Keep your registrar’s DNS:** add the records Vercel asks for — typically
     an `A` record `@ → 76.76.21.21` and a `CNAME` `www → cname.vercel-dns.com`.
3. Wait for DNS to propagate (minutes to a few hours). Vercel issues a free
   HTTPS certificate automatically.
4. Set the canonical (non-`www` or `www`) version as **Primary** in the Domains
   panel so the other redirects to it.
5. Finally, update `site:` / `SITE.url` / `robots.txt` to the new domain and push.

---

## Accessibility & performance notes

- Fully responsive, mobile-first; respects `prefers-reduced-motion`.
- Theme is applied before first paint (no flash of the wrong colours).
- Keyboard skip-link, focus-visible rings, semantic landmarks and aria-labels.
- No external font/CSS requests — everything is self-hosted and statically built.
- WCAG AA contrast verified in both themes (light-mode teal is `#0F766E`).

## Security & privacy

- **Strict, hash-based CSP — no `'unsafe-inline'` anywhere.** Astro generates a
  Content-Security-Policy (`experimental.csp` in `astro.config.mjs`) delivered as
  a `<meta>` tag, with a SHA-256 hash for every inline `<script>`/`<style>`. This
  single `<meta>` policy is authoritative; injected inline code is blocked because
  its hash won't match. The only thing a `<meta>` CSP can't express is
  `frame-ancestors`, so `vercel.json` ships a one-directive
  `Content-Security-Policy: frame-ancestors 'none'` header (it deliberately omits
  `script-src`/`style-src`, so it never weakens the hashed policy). `vercel.json`
  also adds `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`,
  `Strict-Transport-Security`, `Referrer-Policy`, `Permissions-Policy` and `COOP`.
  If you add an inline `<script>`/`<style>`, just rebuild — hashes regenerate.
- **No cookies, no analytics, no third-party requests.** The only browser storage
  is the functional `theme` preference (localStorage), so **no consent banner is
  required** (see the comment in `src/layouts/BaseLayout.astro`). A Privacy Policy
  page is provided at `/privacy` and `/it/privacy`.
- If you ever add analytics/marketing cookies, you must add a prior-consent
  blocking banner and update the Privacy Policy and the CSP `connect-src`/`script-src`.
