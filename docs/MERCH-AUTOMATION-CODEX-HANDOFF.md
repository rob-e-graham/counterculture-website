# Handoff to Codex: one product in, every channel out

Written 10 October 2026. Owner: Rob (Counterculture / Fine Art Media Tech).
Read this file, `../Fashion Agent/AGENTS.md`, `../Fashion Agent/README.md` and
`../Fashion Agent/COPY-AND-PRICING-DRAFT.md` before writing code.

## Goal

Rob designs a product once, in Printful. Without further manual steps it should:

1. sync to Square at a price that meets the margin rule;
2. get a Square description in the house voice;
3. appear on counterculture.vip/shop with its image and a working buy link;
4. be tagged in the Facebook and Instagram shop catalogs;
5. get a launch post drafted for the Counterculture Instagram and Facebook pages.

A customer can buy from any of these places. The checkout is always Square.
Don't build a second checkout or a second inventory.

## What already exists (don't rebuild it)

| Piece | State on 10 Oct 2026 |
|---|---|
| Printful → Square | Printful Square store `12876367` (AU, AUD). Product push, retail sync, order import, auto fulfilment and stock updates are on. A product published in Printful already creates the Square item and its variations. |
| Square Online store | https://counterculture-store.square.site/. The Square catalog is the source of truth for what's on sale. |
| Square → Meta | "Meta for Business" is connected in the Square dashboard sidebar. Check whether its catalog sync to the Facebook/Instagram shop is turned on before building anything for Meta catalogs. |
| Website | This repo. Astro static site on GitHub Pages (`deploy.yml`). The shop grid is hand-written in `src/data/shop.ts`. The `tools/sync-*.mjs` + `.github/workflows/sync-*.yml` pattern (generate a data file → build check → commit → dispatch deploy) is the model to copy. |
| Artist bios | `src/data/djs-data.ts` (generated from /tools). Many bios are empty; never invent one. |
| Socials | Facebook https://www.facebook.com/counterculturemelbourne · Instagram @counterculture.crew (the Square Online footer still points at the old `counterweightfootscray`, so fix that by hand in Square). |

## Build, in this order

### Phase 1: website reads Square (no writes anywhere else)

- `tools/sync-shop.mjs`: read the Square Catalog API (`ListCatalog`/`SearchCatalogObjects`, types ITEM, ITEM_VARIATION, IMAGE, CATEGORY). Keep items that are visible online, available at the location and in apparel/merch categories.
- Write `src/data/shop-data.ts` (generated, with a do-not-edit header, like `djs-data.ts`). Keep `ShopItem` in `shop.ts` so a bad generation can't remove an export.
- For each item store: name, slug, price range, sold-out flag, Square Online product URL, artist (parsed from `ARTIST × COUNTERCULTURE` or a custom attribute), and a local copy of the primary image in `public/assets/shop/`. Download images; don't hotlink the Square CDN (the existing comment in `shop.ts` explains why).
- Update `/shop` to render the generated grid. Each card links to its Square product page, and sold-out items show as sold out.
- `.github/workflows/sync-shop.yml`: `workflow_dispatch` plus a schedule (hourly is enough). Copy the build-verify / commit-if-changed / `gh workflow run deploy.yml` steps from `sync-roster.yml`.
- Secret: `SQUARE_ACCESS_TOKEN` (production, read-only catalog scope where possible) in GitHub Actions secrets. Never commit it.

**Done when** a new item published from Printful shows up on counterculture.vip/shop within an hour, with no human step.

### Phase 2: price and copy checks (dry-run first)

- `tools/merch-check.mjs`: for every Square item linked to Printful, pull the variant production costs from the Printful API (store `12876367`) and work out the contribution per size using the rule in `Fashion Agent/README.md`:
  `price + customer shipping − 1.1 × production − 1.1 × Printful shipping − 2.2% × (price + shipping) − A$5 royalty (collabs only) ≥ A$15`.
  Postage, before GST: tees and tanks A$10.89 first / A$1.90 extra; hoodies and sweats A$17.09 first / A$3.10 extra. Customer pays A$15 below a A$200 subtotal (free from A$200). Prices: tees and tanks A$59, hoodies A$99.
- The output is a report: a Markdown table, a job summary, and a GitHub issue labelled `merch-review`. Each row shows the item, size, cost, current price, contribution, the suggested lowest round price, and whether the item has a description in the house voice.
- Description generator: fill the five-part template in `COPY-AND-PRICING-DRAFT.md` (design line, artist spotlight from `djs-data.ts` only, garment facts from the Printful product spec, shared footer). Flag any banned phrase or a missing bio.
- Writing back to Square or Printful stays off until Rob turns it on (`MERCH_WRITE=1`). When it's on: set prices in **Printful** so the retail sync carries them to Square; edit each variation by its stable ID, re-read it to confirm the save, and log every change to `docs/merch-changelog.md` with old value, new value, time and source.

### Phase 3: social launch posts (approval gate stays)

- When Phase 1 finds an item it hasn't seen before, draft one Instagram post and one Facebook Page post: the image, a caption in the house voice, the counterculture.vip/shop link, and the artist's handle only if it's in `djs-data.ts`.
- Publish through the Meta Graph API (Instagram content publishing for a professional account linked to the Page, and Page `/feed` or `/photos`). Needs `META_PAGE_ACCESS_TOKEN`, `META_PAGE_ID` and `IG_USER_ID` as secrets.
- **Drafts go into a GitHub issue labelled `social-approval`. They're published only when Rob adds the label `approved`.** These posts are public and speak for the brand, so an automatic post without approval is out of scope unless Rob changes that in writing here.
- If the Square → Meta catalog sync is on, tag the product in the Instagram post. If it's off, link to the shop instead. (Instagram in-app checkout isn't available in Australia, so the purchase always completes on Square.)

## Guardrails (from `Fashion Agent/AGENTS.md`, binding)

- Never place orders, sample orders or payments. Never pay artists or email customers.
- Don't replace blanks, designs, fulfilment settings or payment settings.
- Keep SKU and variation mappings intact. Every write must be idempotent: re-running a job does nothing new.
- Royalty is A$5 per completed, unrefunded unit, never per order.
- The business isn't GST-registered: items stay nontaxable and supplier GST is a cost.
- AS Colour blanks only (printed in Australia, so orders ship as one parcel). Non-AS Colour items are hidden on Square Online, not deleted.
- Secrets go in GitHub Actions secrets only, never in the repo or in logs.
- Every job keeps a dry-run mode and writes a change log. A failure opens or updates an issue; it must never fail silently.

## Also fix while you're in here

- GitHub Pages has `https_enforced: false`, so https://counterculture.vip errors. Turn on Enforce HTTPS in repo Settings → Pages once the certificate shows as issued.
- Set `instagramUrl` in `src/data/site.ts` to https://www.instagram.com/counterculture.crew/ after Rob confirms the handle.

## Acceptance test

1. Rob publishes a test product in Printful as a draft or hidden item. Don't let it go on sale.
2. Phase 1 picks it up and a preview build shows it on /shop with the right price and link.
3. Phase 2 reports its contribution per size and drafts a description; nothing is written.
4. Phase 3 opens a `social-approval` issue with both drafts; nothing is posted.
5. Rob deletes the test product; the next sync takes it off /shop.
