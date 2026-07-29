export type ShowStatus = "Confirmed" | "Open Guest" | "Induction";

export type RosterItem = {
  date: string;
  time: string;
  dj: string;
  mc: string;
  guest: string;
  status: ShowStatus;
  notes: string;
};

export const roster: RosterItem[] = [
  {
    date: "2026-08-01",
    time: "12:00-1:30PM",
    dj: "DJ SpinFX",
    mc: "MC Manaki",
    guest: "TBA",
    status: "Confirmed",
    notes: "Resident jungle pressure, crew updates, and new dubplate selections."
  },
  {
    date: "2026-08-08",
    time: "12:00-1:30PM",
    dj: "Erney D",
    mc: "MC Manaki",
    guest: "TBA",
    status: "Confirmed",
    notes: "New Zealand roots, Melbourne signal, and rolling drum and bass."
  },
  {
    date: "2026-08-15",
    time: "12:00-1:30PM",
    dj: "Subz",
    mc: "TBA",
    guest: "Open slot",
    status: "Open Guest",
    notes: "Guest submissions open while the expanded crew settles into rotation."
  },
  {
    date: "2026-08-22",
    time: "12:00-1:30PM",
    dj: "Zero1",
    mc: "MC Manaki",
    guest: "TBA",
    status: "Confirmed",
    notes: "UK drum and bass pressure with room for guest combinations."
  },
  {
    date: "2026-08-29",
    time: "12:00-1:30PM",
    dj: "Jangala",
    mc: "TBA",
    guest: "TBA",
    status: "Induction",
    notes: "Expanded crew onboarding, studio induction, and future two-hour planning."
  }
];
