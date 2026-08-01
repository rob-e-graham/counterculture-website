#!/usr/bin/env node
// Pull Counterculture shows from the Mixcloud API into src/data/episodes-data.ts.
// Run: npm run sync:episodes
//
// Rob's shows auto-upload to the KISS FM Mixcloud, so this is the whole chain:
// upload -> this script -> the site. Nothing to paste anywhere.
//
// Existing entries are merged, never clobbered: tracklists, Facebook video
// links, DJ/MC/guest credits and show notes are all hand-entered and would be
// lost if the file were simply regenerated from the API.

import { readFile, writeFile } from "node:fs/promises";

const API = "https://api.mixcloud.com/KissFM/cloudcasts/?limit=100";
const DATA = new URL("../src/data/episodes-data.ts", import.meta.url);

// Only Counterculture shows: the KISS FM account carries every show on the
// station, so an unfiltered pull would drag in the whole schedule.
const MINE = /^counter\s*culture\b/i;

function slugFromKey(key) {
  return key.replace(/^\/[^/]+\//, "").replace(/\/$/, "");
}

// "Counter Culture 01 AUG 2026" -> "Counterculture 01 AUG 2026"
function tidyTitle(name) {
  return name.replace(/^counter\s+culture/i, "Counterculture").trim();
}

const res = await fetch(API);
if (!res.ok) {
  console.error(`Mixcloud API failed: ${res.status}`);
  process.exit(1);
}
const { data = [] } = await res.json();

const fetched = data
  .filter((c) => MINE.test(c.name || ""))
  .map((c) => ({
    title: tidyTitle(c.name),
    slug: slugFromKey(c.key),
    date: (c.created_time || "").slice(0, 10),
    artwork: c.pictures?.["1024wx1024h"] || c.pictures?.extra_large || "",
    mixcloudUrl: c.url,
    mixcloudKey: c.key,
    audioLength: c.audio_length,
    playCount: c.play_count,
    favoriteCount: c.favorite_count
  }))
  .filter((e) => e.slug && e.date);

const existingSrc = await readFile(DATA, "utf8");
const head = existingSrc.slice(
  0,
  existingSrc.indexOf("export const episodeRecords: EpisodeRecord[] = [")
);
const body = existingSrc.slice(
  existingSrc.indexOf("export const episodeRecords: EpisodeRecord[] = [")
);

// Pull the slugs already on file so we only add what is genuinely new.
const known = new Set([...body.matchAll(/slug: `([^`]+)`/g)].map((m) => m[1]));
const fresh = fetched.filter((e) => !known.has(e.slug));

if (!fresh.length) {
  console.log(`No new shows. ${known.size} already on file.`);
  process.exit(0);
}

const entry = (e) => `  {
    title: \`${e.title}\`,
    slug: \`${e.slug}\`,
    date: \`${e.date}\`,
    dj: \`Counterculture Crew\`,
    mc: \`KISS FM Australia\`,
    guest: \`\`,
    artwork: \`${e.artwork}\`,
    mixcloudUrl: \`${e.mixcloudUrl}\`,
    mixcloudKey: \`${e.mixcloudKey}\`,
    audioLength: ${e.audioLength ?? 0},
    playCount: ${e.playCount ?? 0},
    favoriteCount: ${e.favoriteCount ?? 0},
    notes: \`Counterculture on KISS FM Australia. Stream the full show with the player above.\`,
    tracklist: [],
    published: true
  }`;

// Insert new entries at the top of the array; episodes.ts sorts for display.
const marker = "export const episodeRecords: EpisodeRecord[] = [";
const inserted = body.replace(
  marker,
  `${marker}\n${fresh.map(entry).join(",\n")},`
);

await writeFile(DATA, head + inserted);

console.log(`Added ${fresh.length} new show${fresh.length === 1 ? "" : "s"}:`);
fresh.forEach((e) => console.log(`  ${e.date}  ${e.title}`));
console.log(`Total on file: ${known.size + fresh.length}`);
