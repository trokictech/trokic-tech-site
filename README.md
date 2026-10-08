# Trokic Tech LLC website

Official company website: https://trokic.tech
Public business email: office@trokic.tech

This repository contains the production static export of the customized Tailwind Plus Studio website. The GitHub Pages workflow publishes the contents of `site.zip` from `main` at the custom domain `trokic.tech`.

## Website

- Home: company overview, software focus areas, and Rallymetrica feature.
- About: Trokic Tech LLC and its approach to software.
- Work: Rallymetrica, clearly identified as in development.
- Process: understand, build, and refine.
- Contact: working email links to office@trokic.tech.

There are no sample clients, testimonials, staff biographies, newsletter forms, or disconnected contact forms. The site loads its fonts and assets locally.

## Source and updates

The licensed, editable Studio source is retained on the owner’s computer in `.private/studio/`. The entire `.private/` directory is ignored by Git and must not be uploaded as a reusable template. Keep a private backup of this directory; cloning this public repository restores only the built website.

To update the site, edit the source inside `.private/studio/src`, run `npm ci` if dependencies are missing, then `npm run build` from `.private/studio`. Review the `out/` export locally, then run `python package-site.py` from the repository root. This creates `site.zip` with all pages, route data, and assets, and updates the root `index.html` for reference. Commit and push `site.zip` and `index.html`; the Pages workflow deploys the archive. Generated folders are ignored because the complete website is stored in `site.zip`. Preserve `CNAME` and `.nojekyll`.

The production export uses Next.js static output, trailing-slash routes, local image files, and no server-side image service. Source maps are disabled. Do not publish `node_modules`, `.next`, the original template archive, or the private source.

## Hosting

Keep `CNAME` set to `trokic.tech` and `.nojekyll` present so GitHub serves `_next` assets. Pages settings: source **GitHub Actions**, custom domain `trokic.tech`, and HTTPS enabled. The workflow extracts only the built public website archive; no npm install or licensed source upload is needed on GitHub.

Squarespace DNS is already configured for GitHub Pages. Keep the website A records and `www` CNAME, along with the existing email DNS records.
