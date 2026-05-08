## Plan: Deploy as a project site under `gassarrowellness`

Final URL: `https://gassarrowellness.github.io/PacifiqueLiyanaIshimwe.github.io/`

### Manual step (one-time)
Repo → **Settings → Pages → Build and deployment → Source: GitHub Actions**

### Code changes

**1. `vite.config.ts`** — set the base path so built asset URLs resolve under the subpath:
```ts
base: '/PacifiqueLiyanaIshimwe.github.io/',
```

**2. `public/404.html`** — change `segmentCount` from `0` to `1` so the SPA redirect preserves the `/PacifiqueLiyanaIshimwe.github.io/` prefix when bouncing deep links back to `index.html`.

**3. `src/App.tsx`** — add `basename` to `BrowserRouter` so React Router matches routes relative to the subpath:
```tsx
<BrowserRouter basename={import.meta.env.BASE_URL}>
```
Using `import.meta.env.BASE_URL` keeps the Lovable preview (served at `/`) working unchanged.

**4. `index.html`** — the existing redirect-restore script already works for project sites, no change.

**5. `.github/workflows/deploy.yml`** — no change, current workflow is correct.

### What stays unchanged
- Lovable preview and the `plishimweportfolio.lovable.app` published site keep working
- No UI, component, styling, or backend changes
- All internal links using React Router `<Link>` keep working (basename handles them)

### After deploy
- Push triggers the workflow; site goes live in ~1–2 minutes at the URL above
- If you later rename the repo (e.g. to `portfolio`), only `vite.config.ts` `base` needs updating

### Note on the repo name
`PacifiqueLiyanaIshimwe.github.io` as a repo name only acts as a "user site" when owned by a GitHub account literally named `PacifiqueLiyanaIshimwe`. Owned by `gassarrowellness`, it is treated as a regular project repo and the `.github.io` suffix becomes part of the URL path. Functionally fine, just cosmetically unusual.
