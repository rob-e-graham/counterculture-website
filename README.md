# Counterculture.vip

Astro site for Counterculture, Melbourne's weekly underground bass music radio
show on KISS FM Australia.

## Local development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

The project is ready for Cloudflare Pages. Use `npm run build` as the build
command and `dist` as the output directory.

Deployment and future backend notes live in `docs/DEPLOYMENT.md`.

## Current data source

The first version reads structured local data from:

- `src/data/site.ts`
- `src/data/roster.ts`
- `src/data/djs.ts`
- `src/data/episodes.ts`

These files mirror the planned Google Sheet tabs:

- `Roster`
- `DJs`
- `Episodes`
- `Site Settings`

When Google Sheets access is available, the safe next step is to add a build
script that fetches the sheet data and writes generated JSON before Astro
builds. The front end should continue reading structured data so the design is
not coupled to the spreadsheet API.

## Important links

- Website: <https://counterculture.vip>
- Google Drive folder:
  <https://drive.google.com/drive/folders/1v-SkWx67CY3qIFbYPA2qEwb2tVwHFEcM?usp=drive_link>
- Facebook: <https://www.facebook.com/counterculturemelbourne>
- KISS FM: <https://kissfm.com.au/>
- Shop: <https://counterculture-store.square.site/>
- Latest Mixcloud sample:
  <https://www.mixcloud.com/KissFM/counter-culture-27-jun-2026>
