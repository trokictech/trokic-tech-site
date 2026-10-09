# TrokicTech website source

Editable source for https://trokic.tech, built with Next.js, React, and Tailwind CSS. This is the customized company website adapted from the licensed Tailwind Plus Studio template.

## Development

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Pages live in `src/app`, shared components in `src/components`, styles in `src/styles`, and logos and other public files in `public`.

## Production build

```sh
npm run build
```

Next.js exports the static website to `out/`. Review that export, then run `python package-site.py website/out` from the parent repository to update its deployment archive. The root README describes the GitHub Pages publishing process.

The source uses the committed dependency lockfile and preserves the original package name. Dependency directories and generated output are excluded from Git. The original reusable template archive, sample pages, and unused sample artwork are excluded from this source backup.

## Third-party notices

Tailwind Plus terms are retained in `LICENSE.md`; assets and the font license are documented in `ASSETS.md`.
