import { djRecords } from "./djs-data";
import type { DjRecord } from "./djs-data";

export type Dj = DjRecord;

// Order is set in djs-data.ts and drives the residents grid, the DJ pages and
// the roll-call on the generated flyer.
export const djs: Dj[] = djRecords;
