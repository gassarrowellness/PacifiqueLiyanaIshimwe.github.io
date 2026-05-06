## Plan: Deploy to GitHub Pages at PacifiqueLiyanaIshimwe.github.io

GitHub is already connected and the repo is renamed to `PacifiqueLiyanaIshimwe.github.io` — so this is a user site served at the root URL `https://pacifiqueliyanaishimwe.github.io/`. No Vite `base` change needed.

### Manual step (one-time, in GitHub)
- Repo → **Settings → Pages → Build and deployment → Source: GitHub Actions**

### Code changes

**1. `.github/workflows/deploy.yml`** (new) — on every push to `main`:
- Checkout repo
- Setup Bun (`oven-sh/setup-bun@v2`)
- `bun install --frozen-lockfile`
- `bun run build` (outputs to `dist/`)
- `actions/configure-pages@v5`
- `actions/upload-pages-artifact@v3` with `path: dist`
- `actions/deploy-pages@v4`
- Permissions: `pages: write`, `id-token: write`, `contents: read`
- Concurrency group: `pages`

**2. `public/404.html`** (new) — SPA fallback. GitHub Pages does not have Lovable's automatic SPA routing, so refreshing `/work` would 404. Standard `spa-github-pages` trick: rewrites the path into a query string and redirects to `index.html`.

**3. `index.html`** — small inline `<script>` in `<head>` that reads the redirect query string from `404.html` and restores the original path via `history.replaceState` before React Router boots. No-op on normal loads.

**4. `vite.config.ts`** — no change. `base: '/'` (default) is correct for a user site at the domain root.

### What stays unchanged
- No UI/UX, component, or styling changes
- `BrowserRouter` stays as is
- Lovable Cloud / analytics code untouched (analytics only tracks the `.lovable.app` copy — expected)
- The Lovable-published site at `plishimweportfolio.lovable.app` stays live in parallel unless you unpublish it

### After deploy
- First push triggers the workflow; site goes live at `https://pacifiqueliyanaishimwe.github.io/` in ~1–2 minutes
- Every future Lovable edit auto-syncs to GitHub → auto-redeploys

### Files changed
- `.github/workflows/deploy.yml` (new)
- `public/404.html` (new)
- `index.html` (add redirect-restore script)
