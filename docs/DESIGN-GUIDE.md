# Counterculture Apparel: design and store guide

Shared source of truth for Rob, Claude and Codex. Read this before touching artwork, Printful or Square.
Last updated: 13 Oct 2026. Change log: `COPY-AND-PRICING-DRAFT.md`. Per-item copy: `PRODUCT-COPY-2026-10-12.md`.

## 1. Brand

- Melbourne's jungle, drum & bass, UKG and bass music show, live Saturdays 12–1:30pm on KISS FM. **EST 1994** (as on the Square homepage banner).
- Roots: jungle, rave and **sound-system culture**: Jamaican stacks, soundclash, dubplates, pirate radio.
- Look: underground but professional and trustworthy. No clichés, no fake hype.
- Links: counterculture.vip · Instagram @counterculture.crew · facebook.com/counterculturemelbourne · fineartmediatech@gmail.com

## 2. Store rules

| Rule | Detail |
|---|---|
| Blanks | **AS Colour only, and printed in Australia only** (Printful must show 5–9 day delivery to Australia). |
| OK blanks | 5001, 5001G, 5025 tank, 5100 raglan sweat, 5101 hoodie, 1001 tote. |
| Not OK | 5161, 5160, 5001T and 5082 faded tee (all overseas, 19–30 days); bombers; zip hoodies (no local option). |
| Prices | Tees and tanks A$59 · sweatshirts A$89 · hoodies A$99. Postage A$15, free from A$200. |
| Tax | Every item **nontaxable** (not GST-registered). Printful publishes with GST on, so always fix it in Square. |
| Old items | Hide on Square Online. **Never delete**; Rob deletes. |
| Approval | **Rob approves colourways and prints before anything is published** to Printful or Square. |
| Photos | Any product with a back print shows **front and back** photos. |
| Facts | Never invent artist bios or brand claims. |

## 3. Titles and copy

- Title: `NAME - DESIGN GARMENT`, all caps. Artist stage name first (DJ / MC); crews and brands the same way; own designs `COUNTERCULTURE - …`.
- No "X COUNTERCULTURE" in titles. The collab credit goes in the first line of the description ("… x Counterculture.").
- No "limited", "limited press" or scarcity wording. Everything is print on demand.
- Description blocks: opening line → ARTIST (verified only) → GARMENT → ORDERS → COUNTERCULTURE. The full template is in `PRODUCT-COPY-2026-10-12.md`.

## 4. Artwork system: "vintage athletic / old-school rave"

Reference: `assets/printful-source/champion/` (Champion Sound 94). Use it as the pattern for new pieces.

**Inks (3 colours, no white ink):**

| Ink | Hex | Use |
|---|---|---|
| Cream | #F3E8CF | Main lettering fill, crest and rim fills |
| Orange | #F28C28 | Drop shadows, keylines, record and cone accents |
| Black | #141210 | Outlines, cabinets, detail |

- Garments for this palette: **Forest Green, Grey Marle** (no White).
- Don't use pure white ink: it looks harsh and plasticky on coloured fleece.

**Type:**
- Headline lettering: Superclarendon Black (macOS Supplemental).
- Varsity treatment: cream fill, black outline, then an orange offset drop shadow (down-right).
- Small caps lines: Rockwell Bold, letterspaced, with a thin black outline.
- Arches stay flat: end letters lean about 30–35°, never 60°.
- If Rob supplies a proper collegiate block font, swap it in.

**Layout patterns:**
- Front: arched headline → mascot in a **clean crest shape** (shield with chamfered top corners, orange inner keyline) → bar headline → `EST. ● 1994` rule line with a small record → letterspaced COUNTERCULTURE.
- Back: circle logo/dial with a cream rim → bar headline → two **Jamaican-style sound-system stacks** either side of `EST. ● 1994`.
- Each stack is a pyramid: 3 scoop bins → 3 twin-cone mid boxes → 2 horns → 1 tweeter box.
- Front and back always share the same inks, lettering treatment and wear.
- Circle logos: **COUNTERCULTURE is centred to the top** (measure it; the word's angular midpoint should be within 0.5°).
- Never trace a lumpy outline around the artwork. Use a clean geometric shape, or none.

**Wear:**
- Fine speckle ink-loss plus low-frequency noise knock-out.
- **No visible crack or scratch lines.**
- Generated in code so it's repeatable.

**Print specs:**
- Files at 300+ DPI at print size.
- Front about 11–12" wide. Back 12" wide and at most about 14" tall.
- Line weights at least 1 mm at print size (about 12 px at 300 DPI). Nothing tiny on fleece.
- Printful upload limit: keep files at or below about 5000 px (7813 px files failed).

**Source files and scripts:**
- `assets/printful-source/` holds the originals from the Printful library and the edited versions.
- `champion/champion_varsity.py` (front) and `champion/champion_back.py` (back) rebuild the artwork with Python and PIL. Run: `python3 champion_varsity.py out.png`.
- The proof sheet (front and back on Grey Marle and Forest Green) gets sent to Rob before any upload.

## 5. Workflow

1. Design → proof sheet → **Rob approves**.
2. Upload the art to the Printful library.
3. Build the product on an approved AS Colour blank. Untick sleeve close-up mockups. Set the retail price. Save as a template first.
4. Rob OKs the mockups → Publish. This creates a live Square item.
5. In Square:
   - Fix the description (Printful strips line breaks).
   - Set it nontaxable.
   - Upload front and back photos (Printful doesn't push updated mockups; download them, flatten onto white, upload).
6. Square Online:
   - Add it to Featured items, then Publish the site.
   - Hidden items still appear in Featured until they're removed there.
7. Website (`Counterculture Website` repo):
   - Add a card to `src/data/shop.ts` and a 1200px image to `public/assets/shop/`.
   - Push to main, which deploys.
8. Log it in `COPY-AND-PRICING-DRAFT.md`.

Tool quirks are in `COPY-AND-PRICING-DRAFT.md` and `../Counterculture Website/docs/MERCH-AUTOMATION-CODEX-HANDOFF.md`.

## 6. Open work (end of 13 Oct 2026)

- **Jnr Stax tote: LIVE.**
  - Done: AS Colour 1001, black, A$55, Square item QRK4AQCUQAT27KNOPNCMTWYI. Nontaxable, full description, front and back photos.
  - To do: add to homepage Featured items and to counterculture.vip; hide the old Econscious tote (KLAZBHEPP442VDMBJYCZVNFB, sold out).
- **Homepage banner:** Rob is testing white garment banners using Square's own banner text. Files are in `assets/banner/`:
  - `counterculture-white-banner-cropsafe-2400x1600.jpg` (latest; extra white top and bottom because Square cover-crops)
  - `counterculture-white-banner-centre-clear-2400x900.jpg`
  - `social-share-white-1200x630.jpg` (the link-preview image; not applied yet)
  - Shorter share title proposed: "COUNTERCULTURE · Artist Merch".
  - Banner text must be dark on white.
- **Collage banner idea** (print artwork plus some pencil-sketch versions): `assets/banner/make_collage_banner.py`. The placement loop is too slow; cache the loaded and sketched art per piece before the retry loop.
- **Champion Sound 94:**
  - v3 proof is in `assets/printful-source/champion/`. Rob thinks the tiger is the weak point and is open to a new tiger: draw in Adobe Express, or use a public-domain vintage engraving. No stock or other designers' art.
  - The back is simplified to the dial, CHAMPION SOUND and one stack.
  - Printful template 108742846 is stale (old front, includes White).
- **Original Pirate Material** to the 5101 hoodie in black, A$99. Waiting for Rob's "go".
- Hoodies to the 5101: Jungle Ting, Manaki, DJ Lickweed (off the 5161).
- Homepage Featured order: move the sweatshirts to the top by hand.
- Rob to delete: the black Champion (Printful 480656209, Square ULQOBNGFHZ7LJU7TRQWVPHGP).
- "Huggle": unknown to Claude; ask Rob what it is before trying to use it.
