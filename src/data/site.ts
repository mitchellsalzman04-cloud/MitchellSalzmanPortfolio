/**
 * Single source of truth for everything rendered on the site.
 * Edit this file to update content — no component changes needed.
 *
 * Anything marked TODO is a placeholder. Replace it before you deploy.
 */

export const site = {
  name: "Mitchell Salzman",
  handle: "mitchellsalzman04-cloud", // TODO: change to whatever handle you want displayed
  role: "Software Engineer", // TODO: your title
  tagline: "TODO: one line on what you build.",
  description:
    "TODO: one or two sentences for search engines and link previews. Name, what you do, the tools you use.",
  url: "https://mitchellsalzman04-cloud.github.io/MitchellSalzmanPortfolio", // change here + astro.config.mjs + public/robots.txt if you add a custom domain
  email: "mitchellsalzman04@gmail.com",
  location: "TODO: City, Country",
  resume: "/resume.pdf", // TODO: drop a PDF in public/, or link elsewhere
  socials: [
    { label: "GitHub", url: "https://github.com/", icon: "github" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/", icon: "linkedin" },
  ],
} as const;

export const nav = [
  { label: "background", href: "/#about" },
  { label: "experience", href: "/#experience" },
  { label: "projects", href: "/#projects" },
  { label: "contact", href: "/#contact" },
] as const;

export const about = {
  // Markdown links work here: [text](https://url)
  paragraphs: [
    `TODO: Open with who you are and what you actually build. One or two
     sentences is plenty — the specifics do more work than adjectives.`,
    `TODO: What you're working on now, and where. Link the places worth
     linking. If you've shipped something people can look at, name it here.`,
    `TODO: Where you came from, and what you do when you're not working.
     This is the paragraph that makes you a person rather than a CV.`,
  ],
  // TODO: your actual stack — 6 to 12 reads best in the two/three-column grid.
  technologies: [
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "PostgreSQL",
    "Docker",
    "Git",
    "AWS",
  ],
} as const;

export interface Job {
  company: string;
  shortName: string;
  url: string;
  role: string;
  period: string;
  location?: string;
  /** Decimal years, used to place the bar on the trajectory timeline. */
  start: number;
  /** `null` means still running — the bar extends to the present marker. */
  end: number | null;
  bullets: string[];
}

/** Left edge of the trajectory axis. Set this to your earliest start year. */
export const TIMELINE_START = 2022;

// TODO: replace with your real roles. Delete the ones you don't need —
// the timeline and the tab list both render straight from this array.
export const experience: Job[] = [
  {
    company: "Company Name",
    shortName: "Company",
    url: "https://example.com",
    role: "Your Role",
    period: "2024 — Present",
    location: "City, Country",
    start: 2024,
    end: null,
    bullets: [
      "TODO: what you owned, and what changed because you owned it.",
      "TODO: lead with the outcome, then the tech that got you there.",
      "TODO: numbers land harder than adjectives.",
    ],
  },
  {
    company: "Earlier Company",
    shortName: "Earlier",
    url: "https://example.com",
    role: "Your Earlier Role",
    period: "2022 — 2024",
    location: "City, Country",
    start: 2022,
    end: 2024,
    bullets: [
      "TODO: one to four bullets each.",
      "TODO: keep them concrete.",
    ],
  },
];

/** Grouping labels shown above each project card. Rename freely. */
export type Layer = "product" | "tool" | "experiment";

export const layers: Record<Layer, string> = {
  product: "shipped",
  tool: "tooling",
  experiment: "experiment",
};

export interface Project {
  title: string;
  blurb: string;
  tech: string[];
  layer: Layer;
  github?: string;
  external?: string;
  externalLabel?: string;
  glyph?: string;
  /** Local promo clip under public/media/, with a poster frame shown before playback. */
  video?: string;
  videoPoster?: string;
  /** Defaults to video/mp4. */
  videoType?: string;
  /** Set when there's no public link — closed source or internal. */
  closed?: boolean;
}

/** A row in the /archive table — everything, not just the highlights. */
export interface ArchiveEntry {
  year: number;
  title: string;
  /** Company or org it was built under; omitted means personal. */
  madeAt?: string;
  tech: string[];
  github?: string;
  external?: string;
}

/** The framing for the Projects section. */
export const buildsIntro = `TODO: a sentence or two framing the work below —
  what ties it together, and what you want someone to take away from it.`;

/**
 * Featured projects — these get the large spotlight treatment.
 * `video` + `videoPoster` are optional; without them the card renders
 * as a still. Drop clips in public/media/ and reference them as
 * "/media/your-clip.mp4".
 */
export const featured: Project[] = [
  {
    title: "Project One",
    blurb:
      "TODO: what it does, who it's for, and the one design decision you'd defend in an interview. Two or three sentences.",
    tech: ["TypeScript", "React", "Node.js"],
    layer: "product",
    github: "https://github.com/",
    external: "https://example.com",
    externalLabel: "Live site",
  },
  {
    title: "Project Two",
    blurb:
      "TODO: same again. If it's not public, set `closed: true` and drop the links.",
    tech: ["Python", "PostgreSQL"],
    layer: "tool",
    github: "https://github.com/",
  },
  {
    title: "Project Three",
    blurb: "TODO: the third one.",
    tech: ["Go", "Docker"],
    layer: "experiment",
    github: "https://github.com/",
  },
];

/** Smaller project cards, rendered in a grid below the featured ones. */
export const projects: Project[] = [
  {
    title: "Side Project",
    blurb: "TODO: a sentence. These cards are compact — don't overfill them.",
    tech: ["TypeScript"],
    layer: "tool",
    github: "https://github.com/",
  },
  {
    title: "Another One",
    blurb: "TODO: a sentence.",
    tech: ["Python"],
    layer: "experiment",
    github: "https://github.com/",
  },
];

/** The full list, rendered as a table at /archive. */
export const archive: ArchiveEntry[] = [
  {
    year: 2025,
    title: "TODO: project name",
    tech: ["TypeScript", "React"],
    github: "https://github.com/",
  },
  {
    year: 2024,
    title: "TODO: something you built at work",
    madeAt: "Company Name",
    tech: ["Python"],
  },
];

/**
 * The hero's one-paragraph answer to "who is this and what do they do."
 * Deliberately shouldn't restate the tagline above it or the spec block
 * beside it — this is the part that carries the story.
 */
export const heroSummary = `TODO: three or four lines. What you build, where
  you are, and the through-line of your work so far. This is the first real
  prose anyone reads — worth spending time on.`;

export const spec = [
  { key: "role", value: "TODO: your role" },
  { key: "based", value: "TODO: city" },
  { key: "focus", value: "TODO: what you specialise in" },
  { key: "stack", value: "TODO: your main tools" },
] as const;

export const contact = {
  title: "Get In Touch",
  body: `TODO: a short, warm invitation to email you. Say whether you're
   open to work, and what you'd like to hear about.`,
} as const;
