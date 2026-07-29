# Counterculture.vip Deployment Notes

The site currently has no custom backend. That is intentional for the first
release: Astro builds static files that can be deployed directly to Cloudflare
Pages.

## Phase 1: Static Site

Use GitHub Pages or Cloudflare Pages.

## GitHub Pages

The repo includes `.github/workflows/deploy.yml`, which builds Astro with
GitHub Actions and publishes the `dist` folder to GitHub Pages.

- Source: GitHub Actions
- Branch: `main`
- Custom domain: `counterculture.vip`

Once GitHub Pages is enabled for the repository, point GoDaddy DNS at GitHub
Pages:

- `A @ 185.199.108.153`
- `A @ 185.199.109.153`
- `A @ 185.199.110.153`
- `A @ 185.199.111.153`
- `CNAME www rob-e-graham.github.io`

Keep the existing `NS`, `SOA`, `_domainconnect`, and `_dmarc` records.

## Cloudflare Pages

Alternative setup:

- Build command: `npm run build`
- Output directory: `dist`
- Production branch: whichever GitHub branch you connect, usually `main`
- Custom domain: `counterculture.vip`

DNS should be managed in Cloudflare if possible. Once Cloudflare Pages gives
you the target records, point:

- `counterculture.vip`
- `www.counterculture.vip`

to the Pages project.

## Phase 2: Content Source

Keep Google Sheets as the source of truth, matching the local data files:

- `Roster`
- `DJs`
- `Episodes`
- `Site Settings`

The safest first backend step is a build-time sync:

1. Fetch Google Sheets data during the deploy.
2. Validate rows into typed JSON.
3. Build Astro from the generated data.
4. Let Cloudflare Pages publish the static site.

This avoids running a public server while still letting spreadsheet updates
drive the website.

## Phase 3: Automation

When the spreadsheet workflow is ready:

1. A Google Form or AppSheet booking form writes to the sheet.
2. Apps Script validates new or changed rows.
3. Confirmed roster rows create or update Google Calendar events.
4. A GitHub or Cloudflare deploy hook rebuilds the website.
5. Uploaded Drive artwork is optimized before publishing.

## Not Yet Configured

- Google Sheets API credentials
- Google Calendar API credentials
- GitHub repository
- Cloudflare Pages project
- Cloudflare DNS records
- Apps Script automation
- Artwork optimization workflow
