# Academic portfolio (Astro + GitHub Pages)

## Run locally
```
npm install
npm run dev      # http://localhost:4321
```

## First-time setup
1. Edit `src/config.ts` (name, email, links) and `astro.config.mjs` (`site` with your GitHub username).
2. Create a public repo named `YOUR-USERNAME.github.io` and push this folder to the `main` branch.
3. On GitHub: Settings > Pages > Source: **GitHub Actions**.
4. Every push to `main` now builds and deploys automatically.
   Project site (other repo name)? Set `base: '/repo-name/'` in `astro.config.mjs`.

## Add content
Add one file, commit, push. The site updates itself.

| What | Where | Format |
|---|---|---|
| Project | `src/content/projects/name.md` | Markdown + frontmatter |
| Paper or reading note | `src/content/papers/name.md` | set `kind: mine` or `kind: reading` |
| Note | `src/content/notes/name.md` | Markdown + frontmatter |
| Demo row | `src/content/demos/name.json` | JSON |

Frontmatter fields: `title`, `date`, `status` (`completed`, `in-progress`, `planned`), `summary`, `tags`, `links` (list of `label` + `url`).
Papers also take `kind`, `authors`, `venue`. Notes do not use `status`.

## Demo audio
Put files in `public/audio/` and refer to them as `/audio/file.mp3`. Keep each under a few MB (mp3 or ogg).
For video, upload to YouTube and link it from a project page.

## CV
Put your PDF at `public/cv.pdf`.

## Placeholders
Search the project for `PLACEHOLDER` and replace or delete each one.
