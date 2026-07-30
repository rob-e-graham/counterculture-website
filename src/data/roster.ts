import { bookings } from "./roster-data";
import type { RosterBooking } from "./roster-data";

export type ShowStatus = RosterBooking["status"];
export type RosterItem = RosterBooking;

export const SHOW_TIME = "12:00-1:30PM";

// Confirmed bookings, newest generation wins. Sorted so callers do not have to.
export const roster: RosterItem[] = [...bookings].sort((a, b) =>
  a.date.localeCompare(b.date)
);

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
