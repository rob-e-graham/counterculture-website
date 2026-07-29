export type Dj = {
  name: string;
  slug: string;
  role: string;
  bio: string;
  instagram?: string;
  mixcloud?: string;
  active: boolean;
};

export const djs: Dj[] = [
  {
    name: "DJ SpinFX",
    slug: "dj-spinfx",
    role: "Founder / Resident DJ",
    bio: "Counterculture founder, Melbourne junglist, and long-running champion of underground bass music on air and in the dance.",
    instagram: "",
    mixcloud: "https://www.mixcloud.com/KissFM/",
    active: true
  },
  {
    name: "Nick",
    slug: "nick",
    role: "Team Manager",
    bio: "Keeping the expanded crew linked through roster planning, availability, onboarding, and weekly show structure.",
    mixcloud: "https://www.mixcloud.com/KissFM/",
    active: true
  },
  {
    name: "Pacenotes",
    slug: "pacenotes",
    role: "Resident DJ",
    bio: "A sharp selector joining the dots between rolling drum and bass, jungle, and late-day radio energy.",
    mixcloud: "https://www.mixcloud.com/KissFM/",
    active: true
  },
  {
    name: "Ageusic",
    slug: "ageusic",
    role: "Resident DJ",
    bio: "Bass-forward resident focused on heavy rhythm, movement, and left-field club pressure.",
    active: true
  },
  {
    name: "Glen",
    slug: "glen",
    role: "Resident Crew",
    bio: "Part of the core Counterculture crew helping shape the refreshed show, programming, and Saturday sessions.",
    active: true
  },
  {
    name: "Erney D",
    slug: "erney-d",
    role: "Resident DJ / NZ",
    bio: "Now based in Melbourne, Erney D brings New Zealand roots, deep crates, and heavyweight underground selections to the team.",
    active: true
  },
  {
    name: "Subz",
    slug: "subz",
    role: "Resident DJ / NZ",
    bio: "Now based in Melbourne, Subz adds pressure, pace, and a sharp feel for jungle and drum and bass radio blends.",
    active: true
  },
  {
    name: "MC Manaki",
    slug: "mc-manaki",
    role: "MC / UK",
    bio: "Now based in Melbourne, MC Manaki brings UK energy, hosting presence, and live microphone pressure to the broadcast.",
    active: true
  },
  {
    name: "Zero1",
    slug: "zero1",
    role: "Resident DJ / UK",
    bio: "Now based in Melbourne, Zero1 adds UK club lineage and high-grade drum and bass selections to the expanded roster.",
    active: true
  },
  {
    name: "Jangala",
    slug: "jangala",
    role: "Resident DJ",
    bio: "A leading female drum and bass DJ joining the Counterculture crew with high-energy jungle and DNB authority.",
    active: true
  }
];
