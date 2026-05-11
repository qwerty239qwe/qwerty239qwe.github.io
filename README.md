# yute portfolio

Personal portfolio site. Next.js 16 + Tailwind v4, static-exported and deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev          # http://localhost:3000
```

## Edit content

- `content/resume.ts` — profile, work, publications, repos, skills, education
- `content/posts/*.md` — blog posts (hidden by default)

## Build

```bash
npm run build        # outputs static site to ./out
```

## Deploy

Push to `main`. GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys to GitHub Pages.

- **User site repo** (`<username>.github.io`): served at `https://<username>.github.io/`, `basePath` empty.
- **Project site repo** (any other name): served at `https://<username>.github.io/<repo>/`, `basePath` set automatically.

Enable Pages in repo settings → Pages → Source: "GitHub Actions".

## Blog visibility

The `/blog` route is always generated but hidden from navigation. To surface it:

- In the repo, go to Settings → Secrets and variables → Actions → Variables.
- Add a repository variable `NEXT_PUBLIC_BLOG_ENABLED` with value `true`.

To switch the blog from local markdown to Supabase later, implement the same loader interface (`getAllPosts`, `getPostBySlug`, `getAllSlugs`) in `lib/supabase.ts` and re-export from `lib/blog.ts`.
