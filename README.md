# Amitasha Anand Verma — Portfolio

A fast, accessible, responsive personal portfolio built with **Vue 3 + Vite + TypeScript**. It presents Amitasha's background as an AI/ML and Generative AI engineer and is ready to deploy as a static site to Vercel, Netlify, or Cloudflare Pages.

No backend. No secrets needed to build or run.

---

## Tech stack

- Vue 3 (`<script setup>` + TypeScript)
- Vite 6 build tooling
- Plain CSS with design tokens (light/dark theme, no UI framework)
- Inline SVG icons (no icon dependency)

---

## Local setup

Requires **Node.js 18+** (developed on Node 22) and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (hot reload)
npm run dev
# open the printed localhost URL

# 3. Type-check + production build
npm run build

# 4. Preview the production build locally
npm run preview
```

Scripts:

| Script             | What it does                                  |
| ------------------ | --------------------------------------------- |
| `npm run dev`      | Start the Vite dev server                     |
| `npm run build`    | Type-check (`vue-tsc`) then build to `dist/`  |
| `npm run preview`  | Serve the built `dist/` locally               |
| `npm run type-check` | Type-check only                             |

---

## Project structure

```
.
├─ index.html                 # Page shell, meta/OG tags, favicon, no-flash theme script
├─ public/                    # Static assets copied as-is
│  ├─ favicon.svg
│  ├─ social-preview.svg      # OG/Twitter image (placeholder, replaceable)
│  ├─ robots.txt
│  └─ _redirects              # SPA fallback for Netlify/Cloudflare Pages
├─ src/
│  ├─ main.ts
│  ├─ App.vue                 # Page composition + simple 404 handling
│  ├─ types.ts                # Content types
│  ├─ data/portfolio.ts       # ← ALL CONTENT LIVES HERE (edit this)
│  ├─ composables/useTheme.ts # Accessible theme toggle
│  ├─ styles/main.css         # Design tokens + base styles
│  └─ components/             # Header, sections, footer, icons, 404
├─ netlify.toml               # Netlify build + SPA redirect
├─ vercel.json                # Vercel build + SPA rewrite
└─ .env.example               # Only for OPTIONAL public form keys
```

**To edit content, change `src/data/portfolio.ts`.** It holds all text, links, skills, experience, projects, education, and the availability note.

---

## Theming & accessibility

- Light/dark toggle in the header; choice is saved to `localStorage` and respects the OS `prefers-color-scheme` on first visit. The initial theme is applied before paint to avoid a flash.
- Semantic HTML landmarks, a "Skip to main content" link, keyboard-operable controls, visible focus rings, and `aria` labels on icon-only buttons.
- Colors aim for WCAG AA contrast in both themes. Full WCAG compliance should still be confirmed with manual testing using a screen reader and an accessibility audit tool before publishing.
- Respects `prefers-reduced-motion`.

---

## Deployment

The production build command is `npm run build` and the output directory is `dist`.

### Option A — Vercel
1. Push this repo to GitHub/GitLab/Bitbucket.
2. In Vercel, **Add New → Project** and import the repo.
3. Framework preset: **Vite**. Build command `npm run build`, output `dist` (already set in `vercel.json`).
4. **Deploy**. Vercel gives you a `*.vercel.app` URL.

### Option B — Netlify
1. Push the repo to a Git provider.
2. In Netlify, **Add new site → Import an existing project**.
3. Build command `npm run build`, publish directory `dist` (already set in `netlify.toml`).
4. **Deploy site**. You get a `*.netlify.app` URL.

### Option C — Cloudflare Pages
1. Push the repo to a Git provider.
2. Cloudflare **Workers & Pages → Create → Pages → Connect to Git**.
3. Framework preset **Vue / Vite**, build command `npm run build`, output directory `dist`.
4. **Save and Deploy**. The included `public/_redirects` provides the SPA fallback.

### Adding a custom domain later
After the first deploy, open the project's **Domains** (Vercel) / **Domain management** (Netlify) / **Custom domains** (Cloudflare Pages) settings, add your domain, and follow the DNS instructions (usually a `CNAME`, or an `A`/`ALIAS` for an apex domain). HTTPS certificates are issued automatically. Then update the `og:url` in `index.html` to your real domain.

> This project has **not** been deployed for you. Deploy it yourself and verify the public URL before sharing it.

---

## Before you publish — checklist

Replace these placeholders (all in `src/data/portfolio.ts` unless noted):

- [x] **LinkedIn URL** — `links.linkedin` (set).
- [x] **GitHub URL** — `links.github` (set).
- [x] **Project links** — Log-AI and Retail-RAG repos set; BlogGEN links to its IEEE paper. Add a `repoUrl` for BlogGEN if/when you publish one, and `demoUrl` for any live demos.
- [ ] **Resume download (optional)** — add your PDF to `public/` (e.g. `public/resume.pdf`) and set `links.resume` to `/resume.pdf`. Leaving it empty hides the Resume button. The resume PDF is **not** bundled unless you add it here.
- [ ] **Availability note** — confirm or edit `availability.text`, or set `availability.showAvailability` to `false`. It is currently worded as an interest, not a statement of current availability.
- [ ] **Open Graph URL** — set `og:url` in `index.html` to your deployed domain.
- [ ] **Social preview image (optional)** — `public/social-preview.svg` is a generated placeholder; replace with a custom image if you like (update the `og:image`/`twitter:image` paths if you change the filename/format).

---

## Optional: adding a contact form safely

The site uses a `mailto:` link so there is nothing to configure and no keys to leak. If you want a form, use a static-friendly service that accepts browser POSTs (e.g. Formspree, Web3Forms, Netlify Forms):

- Only ever put **public/publishable** form IDs in the frontend (use `.env` with a `VITE_` prefix; see `.env.example`).
- Never place a private API key or SMTP credential in frontend code — it would be visible to anyone.
- Netlify Forms requires adding `netlify` attributes to a real `<form>`; the other services give you a form `action` URL.

---

## Content accuracy notes

Content is taken from the provided resume. A few items are worth verifying before publishing (see the summary your assistant provided), particularly team-vs-individual framing on Boeing projects and any metrics (35% relevance gain, <5 ms latency, 99% availability, 75% downtime reduction). No metrics, links, or claims were invented; missing links are placeholders.
