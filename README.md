# Sam Deo portfolio

A static portfolio for Sambridhi Deo.

## Pages

- `index.html` — introduction, career timeline, photos, newsletter link, and contact
- `archive.html` — wins and milestones with event coverage and presentation video
- `data.html` — individually sourced awards and community measures
- `art.html` — drawing gallery

The refreshed pages share `styles-2026.css` and `script-2026.js`. Images for the homepage and archive are curated in `imgg/pics/`; the gallery scans are in `imgg/Art/`. The newsletter button opens a prefilled email draft because no mailing-list service is connected.

## Preview locally

Run `python3 -m http.server 8765` from this directory and open `http://localhost:8765/`.

## Deploy

`.github/workflows/pages.yml` publishes the four current pages to GitHub Pages whenever a commit is pushed to `main`. It stages only the current portfolio pages and their referenced images, leaving legacy pages, PDFs, and project files out of the public deployment.

In the repository’s **Settings → Pages**, select **GitHub Actions** as the build and deployment source. Set `samdeo.tech` as the custom domain. In Namecheap’s **Domain List → Manage → Advanced DNS**, add the GitHub Pages apex `A` records and the `www` `CNAME` record shown in GitHub’s custom-domain instructions. Keep existing mail records. GitHub Pages provisions HTTPS after the DNS records resolve; no separately uploaded certificate is required for this host.
