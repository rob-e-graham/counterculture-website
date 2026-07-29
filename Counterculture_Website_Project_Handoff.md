# Counterculture.vip Website Project Handoff

## Project

Counterculture.vip is intended to be the digital home for Counterculture,
Melbourne's weekly underground bass music radio show on KISS FM Australia.

The long-term goal is for Google Workspace to become the source of truth:
Google Sheets drives the roster, DJ pages, episodes, calendar, artwork, and
site settings.

## Local Project Folder

Current local folder:

```text
/Users/robgraham/Desktop/APPS/Counterculture Website
```

This work was accidentally discussed in the ARCHAI thread. Future work should
happen in its own Counterculture project/thread.

## Domain

Purchased domain:

```text
counterculture.vip
```

Current Astro config already uses:

```text
https://counterculture.vip
```

## Important Links

- Website domain: https://counterculture.vip
- Facebook: https://www.facebook.com/counterculturemelbourne
- Latest Mixcloud sample: https://www.mixcloud.com/KissFM/counter-culture-27-jun-2026
- Facebook video sample: https://www.facebook.com/Kissmelbourne/videos/2037970016817058
- KISS FM: https://kissfm.com.au/
- Shop: https://counterculture-store.square.site/
- Google Drive folder: https://drive.google.com/drive/folders/1v-SkWx67CY3qIFbYPA2qEwb2tVwHFEcM?usp=drive_link

## Current Build

An Astro static site has been scaffolded.

Current pages:

- `/`
- `/roster`
- `/episodes`
- `/episodes/{slug}`
- `/djs`
- `/djs/{slug}`
- `/about`
- `/shop`

Current data files:

- `src/data/site.ts`
- `src/data/roster.ts`
- `src/data/djs.ts`
- `src/data/episodes.ts`

These mirror the planned Google Sheet tabs:

- `Roster`
- `DJs`
- `Episodes`
- `Site Settings`

## Commands

Install dependencies:

```sh
npm install
```

Run locally:

```sh
npm run dev
```

Build:

```sh
npm run build
```

The build previously passed and generated 14 static pages.

## Current Visual Direction

Dark underground rave / bass culture aesthetic:

- Black background
- Neon green
- Magenta accents
- CRT / scanline feel
- Large compressed headline type
- Real Counterculture visual assets
- Mobile-app-inspired show hub layout

Assets copied into:

```text
public/assets
```

Current assets:

- `mobile-concept.png`
- `counterculture-poster.png`
- `counterculture-shirt.jpg`

## Known Issue

The desktop homepage looked solid in screenshot review.

The mobile hero still needs tightening. At phone widths, the huge
`COUNTER CULTURE` headline can clip horizontally. Before publishing, adjust the
mobile CSS for the hero heading, likely by reducing the mobile font size or
using a narrower responsive max-width strategy.

Relevant file:

```text
src/styles/global.css
```

## Deployment Plan

Phase 1: Static launch

- Push project to GitHub.
- Connect GitHub repo to Cloudflare Pages.
- Build command: `npm run build`
- Output folder: `dist`
- Add custom domain: `counterculture.vip`
- Point DNS to Cloudflare Pages.

Phase 2: Google Sheets content source

- Use Google Sheets as source of truth.
- Add a build-time sync script.
- Fetch sheet rows before Astro builds.
- Validate rows into typed JSON.
- Keep frontend reading structured data.

Phase 3: Automation

- Google Form or AppSheet for DJ booking submissions.
- Apps Script updates Google Sheet.
- Confirmed roster rows create/update Google Calendar events.
- GitHub or Cloudflare deploy hook rebuilds site.
- Uploaded Drive artwork is optimized and published.

## Backend Status

No backend, DNS, Google Sheets API, Google Calendar API, GitHub repo, or
Cloudflare Pages project has been configured yet.

That is fine. The recommended next step is to launch the static Astro site
first, then layer in Google Workspace automation.

## Connector Status

In the original thread, Gmail connector access appeared available.

Google Drive / Google Sheets / Google Calendar tools were not exposed in that
thread, so direct editing of the sheet/calendar was not possible from there.

In the new dedicated Counterculture project, check whether Google Drive,
Sheets, and Calendar connectors are available before planning direct workspace
automation.

## Useful Existing Docs

Inside the project folder:

```text
README.md
docs/DEPLOYMENT.md
```

There is also an earlier brief:

```text
/Users/robgraham/Desktop/Counterculture_Codex_Project_Brief.md
```

## Suggested Next Prompt For New Project

```text
This is the dedicated Counterculture.vip website project.

Please read:
- /Users/robgraham/Desktop/Counterculture_Website_Project_Handoff.md
- /Users/robgraham/Desktop/Counterculture_Codex_Project_Brief.md
- /Users/robgraham/Desktop/APPS/Counterculture Website

Goal:
Continue the Counterculture.vip Astro website safely. First fix the mobile hero
clipping, then prepare the project for GitHub + Cloudflare Pages deployment.
Do not work in the ARCHAI app folder.
```

