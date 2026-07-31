export type Dj = {
  name: string;
  slug: string;
  role: string;
  bio: string;
  instagram?: string;
  mixcloud?: string;
  active: boolean;
};

// Bios are deliberately minimal. Every line here comes from the crew's own
// details — origin, role, who founded the show. Nothing about anyone's style,
// taste or history is invented. Residents submit their own copy through the
// bio form on /tools, and it replaces the placeholder below.
const NEEDS_BIO = "";

export const djs: Dj[] = [
  {
    name: "SpinFX",
    slug: "dj-spinfx",
    role: "Resident · Founder",
    bio: "Melbourne. Founded Counterculture and runs the show on Kiss FM.",
    instagram: "",
    mixcloud: "https://www.mixcloud.com/KissFM/",
    active: true
  },
  {
    name: "Pacenotes",
    slug: "pacenotes",
    role: "Resident",
    bio: NEEDS_BIO,
    mixcloud: "https://www.mixcloud.com/KissFM/",
    active: true
  },
  {
    name: "Ageusic",
    slug: "ageusic",
    role: "Resident",
    bio: NEEDS_BIO,
    active: true
  },
  {
    name: "Erney D",
    slug: "erney-d",
    role: "Resident",
    bio: "New Zealand, now Melbourne based.",
    active: true
  },
  {
    name: "Subz",
    slug: "subz",
    role: "Resident",
    bio: "New Zealand, now Melbourne based.",
    active: true
  },
  {
    name: "Manaki",
    slug: "mc-manaki",
    role: "Resident MC",
    bio: "UK, now Melbourne based.",
    active: true
  },
  {
    name: "Wasp",
    slug: "mc-wasp",
    role: "Resident MC",
    bio: NEEDS_BIO,
    active: true
  },
  {
    name: "Zero1",
    slug: "zero1",
    role: "Resident",
    bio: "UK, now Melbourne based.",
    active: true
  },
  {
    name: "Jangala",
    slug: "jangala",
    role: "Resident",
    bio: "Melbourne based. One of the leading women in drum and bass.",
    active: true
  }
];
