# Champion Service Partners (Vite + React)

## Local dev
```bash
npm install
npm run dev
```

## Deploy (GitHub Pages)
This repo includes a GitHub Actions workflow that builds on every push to `main` and deploys to GitHub Pages.

1) Push to GitHub (default branch: `main`).
2) In GitHub: Settings → Pages → **Build and deployment** → Source: **GitHub Actions**.
3) Wait for the Action run to finish, then open the Pages URL.

Notes:
- `vite.config.js` uses `base: './'` so the site works from any subfolder (ideal for GitHub Pages project sites).
