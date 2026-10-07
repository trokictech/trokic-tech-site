# Trokic Tech LLC website

A self-contained company website for **trokic.tech**, with **office@trokic.tech** as the public contact. No installation, build step, external fonts, or JavaScript is needed. Open `index.html` directly to preview it.

## Publish with GitHub Pages

1. Create a dedicated GitHub repository for this website. Use a public repository if you are on GitHub Free. Avoid uploading your existing application repository or business documents.
2. Upload `index.html`, `CNAME`, and `.nojekyll` to the repository root. Upload the files inside this folder, not the enclosing `trokic-tech-site` folder. The README is optional.
3. In the repository, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, then **main** and **/(root)**, and click **Save**.
4. Under **Custom domain**, enter **trokic.tech** and click **Save**. Do this before changing DNS. The included `CNAME` file records the domain, but the GitHub Pages setting still needs to be configured.
5. At the provider that manages DNS for `trokic.tech`, point the apex domain to GitHub Pages with these four **A** records. Providers usually use `@` or a blank name for the apex:

   | Type | Name | Value |
   | --- | --- | --- |
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |

   Replace any existing apex A records pointing to another web host. If you have apex AAAA records, follow GitHub's IPv6 instructions so they do not point to an old host. Keep existing MX, email-related TXT, and other email records intact so `office@trokic.tech` continues to work.

6. Optionally add a **CNAME** record for `www` pointing to **YOUR-GITHUB-USERNAME.github.io** (replace that text with your actual GitHub username). Do not include `https://` or a repository path.
7. When GitHub finishes the domain check and certificate setup, enable **Enforce HTTPS** in **Settings → Pages**. DNS changes can take up to 24 hours.
8. Visit **https://trokic.tech/**, check the page on your phone, and verify that the contact address is correct and can receive mail.

GitHub also recommends [verifying ownership of your custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages).

Official setup references: [Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site), [Publishing from a branch](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), and [Custom domains and DNS](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

## Before Apple organization enrollment

Use **https://trokic.tech/** as the company website and **office@trokic.tech** as the work email, once both are working. Review the page copy to confirm it accurately describes your company's work. The page includes the supplied legal company name, an overview, software focus areas, and contact details; it does not invent an address, registration number, client list, or released products.

Apple requires a public, functional website with a domain associated with the organization and a work email on that domain. Apple explicitly excludes websites with minimal content and registrar placeholders. A website is one part of enrollment; legal entity verification, a D-U-N-S number, and the other enrollment requirements still apply. This page does not guarantee Apple's approval.

Source: [Apple Developer Program enrollment requirements](https://developer.apple.com/programs/enroll/).

## Editing

All page content and styling are in `index.html`. Company name, contact email, title, description, and canonical URL are already configured. The footer year is plain text and can be updated when needed.

This website contains no analytics, forms, or tracking scripts. GitHub Pages hosts the site; the page itself makes no claim about the hosting provider's logging practices.
