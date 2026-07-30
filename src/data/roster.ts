export type ShowStatus = "Confirmed" | "Pencilled" | "Open Guest" | "Induction";

export type RosterItem = {
  date: string;
  time: string;
  dj: string;
  mc: string;
  guest: string;
  status: ShowStatus;
  notes: string;
};

export const SHOW_TIME = "12:00-1:30PM";

// Confirmed bookings only. Nothing goes in here until it is actually booked —
// an earlier version listed invented line-ups, which is worse than showing
// nothing. The crew sheet has no bookings past early 2025, so this is empty
// until slots are claimed through /tools or the sheet is filled in and synced
// with `npm run sync`.
export const roster: RosterItem[] = [];

/**
 * The show airs weekly on Saturdays, so upcoming dates are known even when the
 * line-up is not. Returns the next `count` Saturdays, each matched to a booking
 * if one exists.
 */
export function upcomingSlots(count = 6, from = new Date()): RosterItem[] {
  const slots: RosterItem[] = [];
  const d = new Date(
    Date.UTC(from.getUTCFullYear(), from.getUTCMonth(), from.getUTCDate())
  );
  // 6 = Saturday. Include today if it is a Saturday.
  const ahead = (6 - d.getUTCDay() + 7) % 7;
  d.setUTCDate(d.getUTCDate() + ahead);

  while (slots.length < count) {
    const iso = d.toISOString().slice(0, 10);
    const booked = roster.find((r) => r.date === iso);
    slots.push(
      booked ?? {
        date: iso,
        time: SHOW_TIME,
        dj: "",
        mc: "",
        guest: "",
        status: "Open Guest",
        notes: ""
      }
    );
    d.setUTCDate(d.getUTCDate() + 7);
  }
  return slots;
}
