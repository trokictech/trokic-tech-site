# TrokicTech website

Official company website: https://trokic.tech
Public business email: office@trokic.tech

This repository contains the editable website source in `website/` and the production static export of the customized Tailwind Plus Studio website. The GitHub Pages workflow publishes the contents of `site.zip` from `main` at the custom domain `trokic.tech`.

## Website

- Home: company overview, software focus areas, and Rallymetrica feature.
- About: TrokicTech and its approach to analytics.
- Work: Rallymetrica, clearly identified as in development.
- Process: define, build, and validate.
- Contact: working email links to office@trokic.tech.

There are no sample clients, testimonials, staff biographies, newsletter forms, or disconnected contact forms. The site loads its fonts and assets locally.

## Source and updates

The `website/` directory contains the customized company website: pages, shared components, styles, local font, public assets, build configuration, and a dependency lockfile. The original reusable template archive and unused sample pages and artwork are excluded. Third-party terms are retained in `website/LICENSE.md` and `website/ASSETS.md`.

To install and preview the source:

```sh
cd website
npm ci
npm run dev
```

Edit `website/src` and `website/public`. To build and publish an update:

```sh
cd website
npm run build
cd ..
python package-site.py website/out
```

Review `website/out/` before publishing. The packaging command creates `site.zip` with all pages, route data, and assets, and updates the root `index.html` for reference. Commit the source changes together with `site.zip` and `index.html`; the Pages workflow deploys the archive. Source-only commits do not change the live website. Preserve `CNAME` and `.nojekyll`.

The production export uses Next.js static output, trailing-slash routes, local image files, and no server-side image service. Source maps are disabled. Dependencies, build output, environment files, hosting metadata, and the original private template backup are ignored. The original `.private/studio/` is retained locally; `python package-site.py` without an argument still packages its export for compatibility.

## Hosting

Keep `CNAME` set to `trokic.tech` and `.nojekyll` present so GitHub serves `_next` assets. Pages settings: source **GitHub Actions**, custom domain `trokic.tech`, and HTTPS enabled. The workflow extracts only the built public website archive; no npm install is needed on GitHub.

Squarespace DNS is already configured for GitHub Pages. Keep the website A records and `www` CNAME, along with the existing email DNS records.
