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
    role: "Resident",
    bio: "Melbourne junglist and Counterculture founder. Long-time record buyer, DJ, and radio head.",
    instagram: "",
    mixcloud: "https://www.mixcloud.com/KissFM/",
    active: true
  },
  {
    name: "Pacenotes",
    slug: "pacenotes",
    role: "Resident",
    bio: "Rollers, jungle, and clean blends. Music first, no fuss.",
    mixcloud: "https://www.mixcloud.com/KissFM/",
    active: true
  },
  {
    name: "Ageusic",
    slug: "ageusic",
    role: "Resident",
    bio: "Bass music resident with a taste for weight, rhythm, and odd corners.",
    active: true
  },
  {
    name: "Erney D",
    slug: "erney-d",
    role: "Resident",
    bio: "New Zealand roots, now Melbourne based. Jungle, drum and bass, and deep selections.",
    active: true
  },
  {
    name: "Subz",
    slug: "subz",
    role: "Resident",
    bio: "New Zealand born, Melbourne based. Fast tunes, rolling tunes, and radio blends.",
    active: true
  },
  {
    name: "MC Manaki",
    slug: "mc-manaki",
    role: "Resident",
    bio: "UK-born MC now based in Melbourne. Hosts the show with pace, clarity, and respect for the music.",
    active: true
  },
  {
    name: "MC Wasp",
    slug: "mc-wasp",
    role: "Resident",
    bio: "Resident MC and long-time voice around the crew. Straight to the point on the mic.",
    active: true
  },
  {
    name: "Zero1",
    slug: "zero1",
    role: "Resident",
    bio: "UK roots, Melbourne based. Drum and bass, jungle, and no-nonsense selection.",
    active: true
  },
  {
    name: "Jangala",
    slug: "jangala",
    role: "Resident",
    bio: "Melbourne-based drum and bass DJ. Direct, energetic, and built for the dance.",
    active: true
  }
];
