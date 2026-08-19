// Bookings for the public site. Set from /tools ("Publish file"), not synced.
//
// Stage names only: the crew sheet tracks people by first name, which is fine
// internally but is not what should appear on the front page.

export type RosterBooking = {
  date: string;
  time: string;
  dj: string;
  mc: string;
  guest: string;
  status: "Confirmed" | "Pencilled" | "Open Guest" | "Induction";
  notes: string;
};

export const bookings: RosterBooking[] = [
  {
    date: "2026-08-08",
    time: "12:00-1:30PM",
    dj: "Ageusic",
    mc: "",
    guest: "Wasteman",
    status: "Confirmed",
    notes: ""
  },
  {
    date: "2026-08-01",
    time: "12:00-1:30PM",
    dj: "SpinFX",
    mc: "",
    guest: "",
    status: "Confirmed",
    notes: ""
  }
];
// publish-path check 202343