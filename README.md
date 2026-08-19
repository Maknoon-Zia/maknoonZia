# Maknoon Zia — Portfolio (React + Vite)

Your portfolio, rebuilt as a real React application. Same design and the
persona toggle you liked (Web Dev ↔ AI/ML), but now componentized, data-driven,
and easy to extend — the way a React developer's own portfolio should be built.

## What changed from the single-HTML version

- **Real React app** (Vite + React, no external UI library) instead of one static file.
- **One mode toggle**, not two — it lives once in the navbar and controls the
  whole site via a shared `ModeContext`. Fixed the duplicate-switch bug.
- **Copy tone**: "enthusiast" language replaced with "engineer" / "developer" —
  Frontend Engineer / ML Developer, throughout.
- **New Certificates section** (`#certificates`), data-driven like Projects.
- **Projects are now data**, in `src/data/projects.js` — adding your next
  project is editing an array, not touching markup.

## Project structure

```
src/
  App.jsx                 → assembles all sections
  ModeContext.jsx          → the web/AI persona state, shared via context
  useReveal.js              → scroll-reveal animation hook
  components/
    Navbar.jsx, Hero.jsx, About.jsx, Skills.jsx, Projects.jsx,
    Experience.jsx, Education.jsx, Certificates.jsx, Contact.jsx, Footer.jsx
  data/
    projects.js            → all project cards — edit this to add projects
    certificates.js        → all certificates — edit this to add certificates
  index.css                 → all styles (design tokens at the top)
public/
  resume/                  → your two résumé PDFs (swapped by the mode toggle)
  certificates/            → put certificate images here (see below)
```

## Run it locally

```bash
npm install
npm run dev       # opens a local dev server, usually http://localhost:5173
```

```bash
npm run build      # builds the production site into /dist
npm run preview    # serves that /dist build locally, to sanity-check before deploying
```

## Deploy to Vercel

This is now a proper Vite project, so Vercel auto-detects the build — no manual
"static site" workaround needed.

**Option A — GitHub + Vercel (recommended, auto-deploys on every push)**
```bash
git init
git add .
git commit -m "Portfolio: React rebuild"
git branch -M main
git remote add origin https://github.com/Maknoon-Zia/portfolio.git
git push -u origin main
```
Then in Vercel: **Add New → Project → import the repo**. Vercel detects
"Vite" automatically (build command `vite build`, output directory `dist`).
Click **Deploy**. Every future `git push` redeploys automatically.

**Option B — Vercel CLI**
```bash
npm install -g vercel
vercel        # first deploy, follow prompts, accept the detected Vite settings
vercel --prod # promote to production
```

## Adding your next projects

Open `src/data/projects.js` and push a new object onto the array:
```js
{
  title: 'Your Project Name',
  category: 'web',                 // 'web' or 'ai' — controls the badge color + filter
  categoryLabel: 'Web · Full stack',
  description: 'One or two sentences on what it does and how you built it.',
  tags: ['React', 'Node.js'],
  liveUrl: 'https://...',
  githubUrl: 'https://github.com/...',
}
```
Send me the details for the rest of your projects (live link, GitHub repo,
stack, and a line on what it does) and I'll drop them straight into this file.

## Adding your certificates

Google Drive "view" links can't be embedded directly — they require the
visitor to be signed in and Google doesn't serve them as a plain image/file,
so they won't render reliably on a live site.

**Best approach:** download the certificate as an image or PDF, then either:
- **Upload the files directly to me** in chat, and I'll add them to
  `public/certificates/` and wire them into `src/data/certificates.js` for you, or
- Do it yourself: drop the image (JPG/PNG — export a PDF page as an image if
  needed) into `public/certificates/`, then in `src/data/certificates.js` set:
  ```js
  {
    title: 'Web Development',
    issuer: 'Saylani Mass IT Training (SMIT)',
    date: '2025',
    image: '/certificates/smit-web-development.jpg',
    credentialUrl: '', // optional public verification link
  }
  ```

Until real images are added, each certificate card shows a placeholder telling
you exactly which filename it's expecting — nothing will look broken in the
meantime.

## Making the contact form send real emails

Right now submitting the form opens the visitor's email app with your address
and their message pre-filled (`mailto:`) — works everywhere, zero setup.

For an in-page submission (no email app required), sign up at
[formspree.io](https://formspree.io), get an endpoint like
`https://formspree.io/f/xxxxabcd`, and in `src/components/Contact.jsx`:
1. Add `action="https://formspree.io/f/xxxxabcd"` and `method="POST"` to the `<form>` tag.
2. Remove (or keep as a fallback) the `handleSubmit` mailto logic.

## Customizing the design

- **Colors**: `src/index.css`, top of the file — `--accent-web` (indigo) and
  `--accent-ai` (amber) drive the whole palette.
- **Default persona on load**: in `src/ModeContext.jsx`, change
  `useState('web')` to `useState('ai')`; also update `data-mode="web"` to
  `data-mode="ai"` in the root `index.html`.
