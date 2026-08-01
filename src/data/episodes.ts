import { episodeRecords } from "./episodes-data";
import type { EpisodeRecord } from "./episodes-data";

export type Episode = EpisodeRecord;

// Newest first. The generator writes whatever order the API returns, so the
// sort lives here rather than depending on the generated file.
export const episodes: Episode[] = [...episodeRecords]
  .filter((e) => e.published)
  .sort((a, b) => b.date.localeCompare(a.date));
