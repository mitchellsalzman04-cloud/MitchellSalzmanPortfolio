/**
 * Single source of truth for everything rendered on the site.
 * Edit this file to update content — no component changes needed.
 *
 * Content here comes from Mitchell's September 2026 resume and ECE
 * scholarship application. A few things were deliberately left out of the
 * scholarship document: financial circumstances, family health, and the
 * personal essay material. Those belong in an application, not on a public
 * page. Projects, activities and awards were fair game.
 */

export const site = {
  name: "Mitchell Salzman",
  handle: "Mitchell Salzman",
  role: "Electrical Engineer",
  tagline: "I build the test systems that prove implantable hardware works.",
  description:
    "Mitchell Salzman is an electrical engineer in Minneapolis building test automation, telemetry tooling and hardware for implantable medical devices, with two summers of Medtronic R&D, an Abbott co-op, and founder of STRIVE Medical.",
  url: "https://mitchellsalzman04-cloud.github.io/MitchellSalzmanPortfolio",
  email: "mitchellsalzman04@gmail.com",
  location: "Minneapolis, MN",
  resume: "/resume.pdf",
  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/mitchell-salzman", icon: "linkedin" },
  ],
} as const;

export const nav = [
  { label: "LinkedIn", href: "/#linkedin" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
] as const;

export const about = {
  paragraphs: [
    `I study electrical and computer engineering at the University of
     Minnesota, on a combined bachelor's and master's track. That's the
     background, not really how I think about myself.`,
    `What I care about most is building things that are useful to people.
     I like getting in early, when a problem is still messy, figuring out
     what's worth building, then helping make it real. That's the product
     side, and it's the part I love.`,
    `Mostly I'm into medical devices and health tech. The stakes are real.
     There's a person on the other end of the design, so the interesting
     question is rarely whether a thing can be done and almost always
     whether it should be, and for whom.`,
  ],
  technologies: [
    "Python",
    "C / C++",
    "MATLAB",
    "SwiftUI",
    "LabVIEW",
    "Altium",
    "Cadence Allegro",
    "LTspice",
    "SolidWorks",
    "PyVISA / SCPI",
    "Git",
    "Linux",
  ],
} as const;

export interface Job {
  company: string;
  shortName: string;
  url: string;
  /**
   * Which track the row belongs to. The timeline colours and groups by this:
   * paid roles read in accent blue, student orgs in teal, so the two don't
   * look like one undifferentiated run of jobs.
   */
  kind: "work" | "club";
  /**
   * Path under public/ to a real logo. Set it and the timeline uses the mark
   * instead of the scraped favicon; leave it off and the favicon (then a
   * monogram) takes over.
   */
  logo?: string;
  role: string;
  period: string;
  location?: string;
  /** Decimal years, used to place the bar on the trajectory timeline. */
  start: number;
  /** `null` means still running — the bar extends to the present marker. */
  end: number | null;
  bullets: string[];
  testimonials?: { quote: string; name: string; url: string }[];
}

/** Left edge of the trajectory axis. Set this to your earliest start year. */
export const TIMELINE_START = 2022;

export const experience: Job[] = [
  {
    company: "Medtronic",
    kind: "work",
    shortName: "Medtronic",
    url: "https://www.medtronic.com",
    role: "R&D Electrical Systems Engineering Intern",
    period: "May 2026 to August 2026",
    location: "Mounds View, MN",
    start: 2026.37,
    end: 2026.67,
    bullets: [
      `Built a turn-key Python application automating leadless pacemaker
       sensing tests, consolidating four legacy scripts into one GUI tool
       usable without device expertise and cutting test-and-record from 60
       minutes to 1 minute per condition.`,
      `Automated a full hardware-in-the-loop bench: Keysight AWG injection
       over PyVISA/SCPI, Tektronix oscilloscope capture, .NET device telemetry,
       enabling unattended 24-hour studies that collected roughly 1,400
       capture datasets.`,
      `Engineered a real-time hex-to-engineering-units telemetry decoder
       reconstructing dozens of synchronized fields (EGM, accelerometer,
       sensed/paced markers, confirmation metrics) on a 256 Hz timeline, and
       wrote 18 verification scripts proving decode accuracy ahead of
       submission.`,
      `Delivered the ISO 14117 EMI immunity characterization that drove
       selection of the most noise-robust sensing algorithm for the pilot
       study, collapsing an eight-cycle study into a single run.`,
    ],
  },
  {
    company: "STRIVE Medical",
    kind: "club",
    shortName: "STRIVE",
    url: "https://github.com/mitchellsalzman04-cloud",
    logo: "/logos/strive.svg",
    role: "Founder & President",
    period: "September 2025 to Present",
    location: "Minneapolis, MN",
    start: 2025.67,
    end: null,
    bullets: [
      `Founded and scaled a student engineering organization from 8 to 40
       members across five technical subteams in nine months, securing $5,000
       in grants and sponsorship and building an eleven-person leadership
       team.`,
      `Directed cross-functional development of SynDex, a 7-DOF
       admittance-controlled haptic surgical training platform; won overall
       top prize at MIN-Corps Founders Day against 25 competing ventures.`,
      `Launched a clinical collaboration with the University of Minnesota's
       Visible Heart Lab and Neurology department to develop a portable EEG.`,
      `Organized an industry networking event hosting 45 students and
       professionals across eight medical device companies.`,
    ],
    testimonials: [
      {
        quote:
          "I tried out a few different med tech clubs, and this one was by far the most structured and determined. I felt like I was actually going to learn something here.",
        name: "Israel Samuel",
        url: "https://www.linkedin.com/in/israel-samuel-7b0a06375/",
      },
      {
        quote:
          "There was no mentorship from upperclassmen, and I had to teach myself Altium. But when I came to Strive, they had people that could help me and actually train me on what I needed to know.",
        name: "Emanuel Banderas-Infante",
        url: "https://www.linkedin.com/in/emanuelbanderasinfante/",
      },
    ],
  },
  {
    company: "Medtronic",
    kind: "work",
    shortName: "Medtronic",
    url: "https://www.medtronic.com",
    role: "Hardware Engineering Intern, Product Development",
    period: "May 2025 to August 2025",
    location: "Tempe, AZ",
    start: 2025.37,
    end: 2025.67,
    bullets: [
      `Directed development of a Universal IC Development Package replacing
       obsolete Pin Grid Arrays, eliminating supply chain risk, resolving a
       year-long IC development block, and reducing manufacturing steps from
       11 to 3, projected to save $400K annually.`,
      `Designed a multi-phase reliability study to qualify stacked vias,
       enabling tighter PCB routing, higher battery capacity and improved
       sensing accuracy across future implantable devices.`,
      `Streamlined reliability testing by integrating six existing fixtures
       into a single automated test flow.`,
    ],
  },
  {
    company: "Abbott",
    kind: "work",
    shortName: "Abbott",
    url: "https://www.abbott.com",
    role: "R&D Electrical Engineer Co-op",
    period: "May 2024 to December 2024",
    location: "Plymouth, MN",
    start: 2024.37,
    end: 2024.96,
    bullets: [
      `Led implementation and drove adoption of Jira, increasing weekly issue
       progression 250%, from 2.3 to 5.8 per week on average, and
       streamlining communication with customers and internal teams.`,
      `Engineering owner of the test methods behind First-in-Human trial
       readiness: IEC 60601, EMI/EMC, clinical use case, lifetime, motor
       stress and HALT.`,
      `Wrote a Python automation script that cut data pulling from 10 minutes
       to 30 seconds, and sourced 30 custom PCB test fixtures to expand
       manufacturing capability.`,
      `Orchestrated debug and troubleshooting for medical capital equipment,
       including medical-grade computers and BLE/NFC PCBs, resolving faults in
       essential functionality.`,
    ],
  },
  {
    company: "Velocity, Teamvantage",
    kind: "work",
    shortName: "Velocity",
    url: "https://www.velosity.com",
    logo: "/logos/velosity.svg",
    role: "Program Management Engineering Intern",
    period: "November 2022 to August 2023",
    location: "Forest Lake, MN",
    start: 2022.85,
    end: 2023.67,
    bullets: [
      `Designed and 3D printed 5-part inspection fixtures using SolidWorks,
       enhancing dimensional verification processes for high-precision medical
       and defense plastic injection components.`,
      `Developed CMM automated measuring programs by interpreting FAI component
       drawings, ensuring accurate dimensional part verification.`,
      `Synergized with project managers in planning and executing customer new
       component development.`,
      `Fabricated degating fixture to encompass an ergonomic design for operators
       while enhancing consistency in part production, contributing to overall
       quality improvement.`,
    ],
  },
  {
    company: "UMN Small Satellite Research Laboratory",
    kind: "club",
    shortName: "SmallSat",
    url: "https://smallsat.umn.edu",
    logo: "/logos/umn-smallsat.svg",
    role: "Electrical Power Subsystem Engineer",
    period: "October 2023 to May 2024",
    location: "Minneapolis, MN",
    start: 2023.75,
    end: 2024.37,
    bullets: [
      `Designed and fabricated custom PCBs in Altium for a CubeSat's power
       subsystem, covering solar power management, power distribution, and
       communication.`,
      `Built a turn-key power architecture that keeps all subsystems dormant
       through launch and self-activates in orbit via a mechanical trigger
       tied to solar panel deployment.`,
      `Implemented processor-controlled power gating that selectively powers
       subsystems on demand, maximizing energy efficiency under strict mass
       and size constraints.`,
      `Integrated voltage regulation and current-limiting protection to keep
       the bus stable against the power fluctuations of the space environment.`,
      `Coordinated with communication, structures, and payload teams to define
       power budgets and meet each subsystem's requirements.`,
    ],
  },
  {
    company: "IEEE, University of Minnesota",
    kind: "club",
    shortName: "IEEE",
    url: "https://ieee.umn.edu",
    logo: "/logos/ieee-umn.svg",
    role: "Media Officer & Membership Coordinator",
    period: "September 2023 to August 2025",
    location: "Minneapolis, MN",
    start: 2023.67,
    end: 2025.67,
    bullets: [
      `Led a six-member Media Committee, delegating roles and managing projects
       to foster accountability and motivation. Managed social media, launched a
       LinkedIn presence, and staffed outreach events to boost visibility.`,
      `Created and ran the Fabrication Workshop Series, teaching students
       soldering, 3D printing, and laser engraving, culminating in a project
       to modify toys for children with disabilities and donate them to a local
       pediatric clinic.`,
      `Launched IEEE Exam Jam, a recurring peer-led study initiative where
       members planned and hosted tutoring events, building leadership and
       public speaking skills while increasing exam preparedness.`,
      `Led a hands-on breadboard workshop for 50 high school students from
       historically excluded backgrounds, introducing electrical engineering
       concepts through real-world design examples.`,
    ],
  },
];

/**
 * Impact figures for the band beside Experience. Every number here is from
 * the resume — none are estimated, rounded up, or invented.
 */
export const impact = [
  {
    value: "$400K",
    label: "Projected annual savings from the IC package redesign",
    at: "Medtronic",
  },
  {
    value: "60 → 1 min",
    label: "Test-and-record cycle for pacemaker sensing",
    at: "Medtronic",
  },
  {
    value: "250%",
    label: "Increase in weekly issue throughput after the Jira rollout",
    at: "Abbott",
  },
  {
    value: "1,400",
    label: "Capture datasets collected unattended over 24-hour studies",
    at: "Medtronic",
  },
  {
    value: "8 → 40",
    label: "Members grown across five subteams in nine months",
    at: "STRIVE Medical",
  },
  {
    value: "$5K",
    label: "In grants and sponsorship secured for the organization",
    at: "STRIVE Medical",
  },
] as const;

/** Grouping labels shown above each project card. Rename freely. */
export type Layer = "product" | "tool" | "experiment" | "wip";

export const layers: Record<Layer, string> = {
  product: "on the market",
  tool: "prototype",
  experiment: "research",
  wip: "in progress",
};

export interface Project {
  title: string;
  blurb: string;
  bullets: string[];
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
  /** Autoplay muted loop — no controls, crops top of video. */
  videoAutoplay?: boolean;
  /** Set when there's no public link — closed source or internal. */
  closed?: boolean;
  /** Internal detail page path, e.g. "/projects/syndex". */
  detailPage?: string;
  /** Override the default layer label for this project's eyebrow. */
  layerLabel?: string;
  /** Render an interactive Three.js canvas instead of the cover image. */
  interactive3d?: boolean;
  /** Static cover image shown instead of the gradient panel when no video. */
  coverImage?: { src: string; alt: string };
  /** Images to show beside the text card on the main page. */
  sideImages?: { src: string; alt: string }[];
  /** Image rendered below the copy column. */
  bottomImage?: { src: string; alt: string };
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
export const buildsIntro = `Most of these started as a problem somebody
  described to me out loud: a neurologist squinting past artifacts in an EEG
  trace, a therapist with no way to measure what changed between sessions.
  They ended as hardware or software that made the measurement possible.`;

/**
 * Every project on the page, in the order they appear. All of them get the
 * large spotlight treatment now, so this list is ordered strongest first —
 * position is the only ranking signal left.
 *
 * TODO: add github/external links as repos go public. Links are optional;
 * entries render without them rather than pointing at placeholders.
 */
export const projects: Project[] = [
  {
    title: "SynDex",
    blurb:
      "A 7 DOF admittance controlled haptic arm for surgical training at a fraction of the cost of existing simulators.",
    bullets: [
      "Gives surgical trainees hands-on robotic surgery practice at home for $1,400, existing simulators cost $40K to $137K and are only available at institutions",
      "Pairs a 7-DOF desktop haptic arm with a Unity simulation so students feel realistic tissue resistance while practicing procedures on screen",
      "Won overall top prize at MIN-Corps Founders Day against 25 competing ventures",
    ],
    tech: ["Teensy 4.1", "ODrive", "CAN", "Altium", "Unity"],
    layer: "tool",
    video: "/media/syndex-demo.mov",
    videoType: "video/mp4",
    videoAutoplay: true,
    detailPage: "/projects/syndex",
    sideImages: [
      { src: "/media/syndex-render.png", alt: "SynDex 3D render of the haptic arm" },
    ],
    bottomImage: { src: "/media/syndex-fig-p2-1.png", alt: "SynDex custom PCB layout" },
  },
  {
    title: "Vibesit Insight",
    blurb:
      "A SwiftUI iOS app and treatment protocol for a lower limb therapy platform, adopted by VibeTech for its upcoming clinical trial.",
    bullets: [
      "Replaces paper logs and raw data dumps with a single iOS view where clinicians track patient progress across weeks of vibration therapy",
      "Structures each treatment session around a clinical protocol so therapists follow a consistent, measurable plan rather than ad-hoc workouts",
      "Now entering production at VibeTech for their upcoming clinical trial on the VT3 lower-limb therapy platform",
    ],
    tech: ["SwiftUI", "iOS", "Clinical protocol"],
    layer: "product",
    coverImage: { src: "/media/vibesit-hero.png", alt: "VibeTech VT3 device with VibeSit Insight app" },
    detailPage: "/projects/vibesit",
  },
  {
    title: "Pulse ECG",
    blurb:
      "A battery-powered, palm-sized EKG with a custom Altium PCB, INA826 analog front end, and real-time browser waveform display.",
    bullets: [
      "Captures a clean cardiac waveform from millivolt-level skin signals and streams it live to a browser, making EKG monitoring possible without clinical equipment",
      "Fits the full signal chain, instrumentation amplifier, filters, microcontroller, and LiPo battery, onto a palm-sized custom PCB",
      "Iterated through three PCB revisions, debugging analog front-end errors and power faults to produce a reliable, portable device",
    ],
    tech: ["Altium", "LTspice", "PIC24", "INA826", "OPA2310", "Embedded C"],
    layer: "tool",
    detailPage: "/projects/pulse-ecg",
    sideImages: [
      { src: "/media/pulse-ecg-pcb.jpeg", alt: "Pulse ECG custom PCB with LiPo battery" },
      { src: "/media/pulse-ecg-system.png", alt: "Pulse ECG system diagram showing patient leads, analog front end, PIC24, and USB data path" },
    ],
  },
  {
    title: "Portable Neural Recording",
    blurb:
      "A wearable recording device that captures continuous neural data from implanted DBS electrodes during the two-week gap between electrode placement and pulse generator surgery.",
    bullets: [
      "Captures brain activity at home during the two-week gap between DBS electrode placement and pulse generator surgery, a window that currently goes to waste",
      "Lets clinicians trial multiple stimulation targets in a patient's real environment before committing to a permanent implant configuration",
      "Seven-person team developing the device in collaboration with UMN Neurology, designing the anchor interface and miniaturized recorder",
    ],
    tech: ["Neural Recording", "Analog Front End", "PCB Design", "Signal Processing", "DBS"],
    layer: "wip",
    detailPage: "/projects/portable-eeg",
    coverImage: { src: "/media/portable-eeg-cover.jpg", alt: "Deep brain stimulation electrode placement for neural recording" },
  },
  {
    title: "VO₂Go",
    blurb:
      "A deep learning model detecting ventilatory threshold from heart rate and demographics alone.",
    bullets: [
      "Tells athletes exactly when their body shifts from fat to carbohydrate burning, the key number for endurance training, using only a heart rate monitor",
      "Eliminates the $200 to $300 lab test, gas exchange mask, and expert interpretation that finding this threshold normally requires",
      "Trained and validated on 868 exercise tests, matching lab-grade accuracy from heart rate and basic demographics alone",
    ],
    tech: ["Python", "PyTorch", "LSTM", "Wearables"],
    layer: "experiment",
    layerLabel: "wearable device machine learning model",
    detailPage: "/projects/vo2go",
    coverImage: { src: "/media/vo2go-architecture.svg", alt: "VO₂Go architecture: Apple Watch inputs through LSTM to VT1 prediction" },
  },
  {
    title: "BreatheBuddy",
    blurb:
      "An IoT enabled smart inhaler for children with asthma.",
    bullets: [
      "Gives parents of asthmatic children real-time visibility into inhaler use between clinic visits, replacing guesswork with actual adherence data",
      "Tracks dose timing, technique, and frequency automatically via an IoT attachment that clips onto a standard inhaler",
      "Catches missed or incorrect doses early, aiming to reduce the emergency room visits that result from poor adherence",
    ],
    tech: ["IoT", "Embedded C"],
    layer: "tool",
    layerLabel: "smart inhaler",
    detailPage: "/projects/breathebuddy",
    coverImage: { src: "/media/breathebuddy-device.jpeg", alt: "BreatheBuddy smart inhaler prototype with IoT attachment" },
  },
  {
    title: "Transdermal Microneedle Patch",
    blurb:
      "Proposed improvements to an existing microneedle-based lateral flow diagnostic bandage, replacing the buffer pad with microfluidic channels and adding gold nanoparticle amplification for blood-free multi-disease screening.",
    bullets: [
      "Screens for diseases at home with a bandage-like patch, no blood draw, no lab visit, no trained technician",
      "Uses a modular design so the same patch platform can test for different diseases by swapping a single internal strip",
      "A smartphone camera reads the result through color intensity, giving patients a clear positive or negative without laboratory equipment",
    ],
    tech: ["Microfluidics", "SU-8 Lithography", "Lateral Flow Immunoassay", "Biosensing"],
    layer: "experiment",
    layerLabel: "noninvasive diagnostic in the home",
    coverImage: { src: "/media/transdermal-exploded.png", alt: "Exploded view of the microneedle diagnostic bandage showing microneedle array, conjugate release pad, nitrocellulose membrane, and bandage housing" },
  },
  {
    title: "Optical Tissue Classification",
    blurb:
      "A physics-informed neural network that classifies 25 tissue types from three-wavelength diffuse reflectance, with a confidence gate that lifts accuracy to 83.6%.",
    bullets: [
      "Aims to give surgeons instant tissue identification mid-operation, replacing the 20 to 30 minute wait for a pathologist to examine a frozen section",
      "Classifies 25 tissue types across 8 organ sites from a fiber-optic probe's light reflectance, with a confidence gate that lifts accuracy to 83.6% on trusted samples",
      "Flags uncertain cases for pathologist review rather than forcing a call, keeping the surgeon informed without replacing clinical judgment",
    ],
    tech: ["Python", "Scikit-learn", "MLP", "Diffusion Approximation", "Biomedical Optics"],
    layer: "experiment",
    layerLabel: "real time diagnosis ML model",
    detailPage: "/projects/optical-tissue",
    coverImage: { src: "/media/optical-architecture.svg", alt: "Optical tissue classification: probe measures reflectance, MLP classifies tissue type with confidence gating" },
  },
  {
    title: "Alzheimer's Disease Prediction",
    blurb:
      "A gradient boosting classifier that predicts Alzheimer's disease from patient demographics, lifestyle, and cognitive assessments, outperforming random forest and logistic regression baselines.",
    bullets: [
      "Predicts Alzheimer's disease from routine clinical data, demographics, lifestyle factors, and cognitive assessments, before symptoms become severe",
      "Achieved 95.8% accuracy on a 2,149-patient dataset, outperforming random forest and logistic regression baselines",
      "Identified the 12 most predictive features out of 32, pointing clinicians toward the assessments that matter most for early screening",
    ],
    tech: ["Python", "Scikit-learn", "Gradient Boosting", "Random Forest", "PCA"],
    layer: "experiment",
    layerLabel: "earlier diagnosis ML model",
    coverImage: { src: "/media/alzheimer-architecture.svg", alt: "Alzheimer's prediction pipeline: patient data through feature selection and three-model comparison to diagnosis" },
    sideImages: [
      { src: "/media/alzheimer-roc.png", alt: "ROC curve for gradient boosting Alzheimer's classifier showing 0.99 AUC" },
    ],
  },
  {
    title: "EEG Alpha Artifact Removal",
    blurb:
      "Unsupervised clustering and denoising autoencoders to strip sporadic artifacts from EEG for autism spectrum assessment.",
    bullets: [
      "Cleans the noise out of clinical EEG recordings so neurologists can read a clearer signal when assessing patients for autism spectrum disorder",
      "Motivated by hospital visits where neurologists were visibly working around artifact-ridden traces, the tool was designed around that real workflow",
      "Uses unsupervised clustering and denoising autoencoders to strip sporadic artifacts without requiring labeled training data",
    ],
    tech: ["Python", "Autoencoders", "Clustering", "EEG"],
    layer: "experiment",
    coverImage: { src: "/media/mitchell-eeg-lab.jpeg", alt: "Mitchell Salzman in scrubs at the EEG lab" },
  },
  {
    title: "Chess Vision",
    blurb:
      "A computer vision pipeline that photographs a physical chessboard and reconstructs the full board position using three cascaded neural networks.",
    bullets: [
      "Lets a chess player photograph any physical board from any angle and instantly get the full position digitized, no manual piece-by-piece entry",
      "Uses three cascaded neural networks to determine which squares are occupied, what color each piece is, and what type it is",
      "Outputs a standard FEN string ready for analysis engines or online play, and renders the reconstructed position in a playable GUI",
    ],
    tech: ["MATLAB", "PyTorch", "Computer Vision", "Hough Transform"],
    layer: "experiment",
    detailPage: "/projects/chess-vision",
    coverImage: { src: "/media/chess-architecture.svg", alt: "Chess Vision architecture: photo to board position via three cascaded neural networks" },
  },
  {
    title: "Wireless RF Front End",
    blurb:
      "A complete 2.5 GHz RF front end for a TDD drone communication link, designed from link budget to component selection for a 5 km sUAS delivery system.",
    bullets: [
      "Keeps a delivery drone under real-time pilot control with live video over a 5 km operating range, the RF link that makes autonomous-adjacent flight safe",
      "Designed complete transmit and receive chains for both the ground station and drone, closing the link budget at 28 dB uplink and 19 dB downlink SNR",
      "Every component selection traces directly back to a system-level requirement, from noise figure to output power",
    ],
    tech: ["USRP B205mini", "RF", "Link Budget", "TDD", "2.5 GHz"],
    layer: "experiment",
    detailPage: "/projects/wireless-rf",
    coverImage: { src: "/media/wireless-rf-block-diagram.png", alt: "RF block diagram showing control room and drone transmit/receive chains at 2.5 GHz" },
  },
  {
    title: "ASL Digit Tracker",
    blurb:
      "An embedded glove translating ASL gestures into a digital display.",
    bullets: [
      "Translates ASL digit gestures (0 to 9) into a real-time display, a wearable that works without a camera, computer, or controlled lighting",
      "Five flex sensors on a glove feed a PIC24 microcontroller that recognizes hand positions and outputs the digit to an LCD",
    ],
    tech: ["Embedded C", "PIC24", "ADC", "I2C"],
    layer: "tool",
    video: "/media/asl-demo.mov",
    videoType: "video/mp4",
    detailPage: "/projects/asl-digit-tracker",
    coverImage: { src: "/media/asl-hero.png", alt: "ASL Digit Tracker glove with flex sensors and 3D-printed enclosure" },
  },
  {
    title: "Kibbler",
    blurb:
      "An ultrasonic triggered automatic pet feeder built on an Arduino Uno.",
    bullets: [
      "Feeds a pet on demand the moment it walks up, no schedule to program, no missed meals when the owner is away",
      "Ultrasonic sensor detects the animal's approach and triggers a motor-driven dispenser, with an LCD reporting system state",
      "Led the team from design intent through work breakdown, and wrote the sensing and motor-control firmware",
    ],
    tech: ["Arduino", "C++", "HC-SR04", "L293D"],
    layer: "tool",
    detailPage: "/projects/kibbler",
    coverImage: { src: "/media/kibbler-assembled.png", alt: "Assembled Kibbler: PVC hopper on wooden frame with motor-driven dispenser" },
    sideImages: [
      { src: "/media/kibbler-wiring.png", alt: "Kibbler wiring diagram showing Arduino Uno, HC-SR04, L293D motor driver, and LCD on breadboard" },
    ],
  },
  {
    title: "Logic RPS",
    blurb:
      "A Rock, Paper, Scissors game built entirely from basic logic gates, with multiplexer optimization reducing hardware by 87.5%.",
    bullets: [
      "Demonstrates complete digital system design, from player input encoding to winner determination to match tracking, built entirely from basic logic gates",
      "Plays a full best-of-five match, tracking wins for each player and ending the game when one reaches three victories",
      "Optimized the design by replacing combinational logic with multiplexers, reducing gate count by 87.5%",
    ],
    tech: ["Logisim", "Digital Logic", "Multiplexers", "Binary Encoding"],
    layer: "experiment",
    coverImage: { src: "/media/logic-rps-poster.png", alt: "Logic RPS block diagram showing player decoding, binary comparison, tie/win distribution, and win counting stages" },
  },
  {
    title: "SynDex V2",
    blurb:
      "A next generation 3-axis linear-driven haptic device with pistol-grip end effector, redesigned from the ground up for higher force fidelity and simpler kinematics.",
    bullets: [
      "Redesigns SynDex from the ground up to fix V1's limitations, coupled kinematics and limited force bandwidth that constrained realism",
      "Replaces the 7-DOF revolute arm with a 3-axis linear gantry, delivering more rigid, more predictable force feedback",
      "Pistol-grip end effector with integrated trigger and custom PCB mimics an actual surgical console's hand interface",
    ],
    tech: ["Linear Rails", "NEMA Steppers", "Ball Joint", "Altium", "Embedded C"],
    layer: "wip",
    interactive3d: true,
    detailPage: "/projects/syndex-v2",
    coverImage: { src: "/media/syndex-v2-render.png", alt: "SynDex V2 3D render of the linear-driven haptic gantry" },
  },
];

/** The full list, rendered as a table at /archive. */
export const archive: ArchiveEntry[] = [
  {
    year: 2026,
    title: "Leadless pacemaker hardware-in-the-loop test bench",
    madeAt: "Medtronic",
    tech: ["Python", "PyVISA/SCPI", ".NET"],
  },
  {
    year: 2026,
    title: "Real-time telemetry decoder (256 Hz, 18 verification scripts)",
    madeAt: "Medtronic",
    tech: ["Python"],
  },
  {
    year: 2026,
    title: "ISO 14117 EMI immunity characterization",
    madeAt: "Medtronic",
    tech: ["EMI/EMC", "Test design"],
  },
  {
    year: 2026,
    title: "SynDex V2: linear-driven haptic platform (in progress)",
    madeAt: "STRIVE Medical",
    tech: ["Linear Rails", "BLDC Motors", "Altium", "Embedded C"],
  },
  {
    year: 2026,
    title: "Portable Neural Recording for DBS (in progress)",
    madeAt: "STRIVE Medical",
    tech: ["Neural Recording", "Analog Front End", "PCB Design", "DBS"],
  },
  {
    year: 2025,
    title: "SynDex haptic surgical training platform",
    madeAt: "STRIVE Medical",
    tech: ["Teensy 4.1", "ODrive", "CAN", "Unity"],
  },
  {
    year: 2025,
    title: "Universal IC Development Package",
    madeAt: "Medtronic",
    tech: ["Altium", "DFM"],
  },
  {
    year: 2025,
    title: "Stacked via reliability qualification study",
    madeAt: "Medtronic",
    tech: ["Minitab", "Experimental design"],
  },
  {
    year: 2025,
    title: "Transdermal microneedle patch: proposed improvements for blood-free multi-disease screening",
    madeAt: "University of Minnesota",
    tech: ["Microfluidics", "SU-8 Lithography", "Lateral Flow Immunoassay", "Biosensing"],
  },
  {
    year: 2025,
    title: "VO₂Go: ventilatory threshold detection",
    tech: ["Python", "ML"],
  },
  {
    year: 2026,
    title: "RF front end for sUAS delivery, 2.5 GHz TDD link over 5 km",
    tech: ["USRP B205mini", "RF", "Link Budget", "TDD"],
  },
  {
    year: 2025,
    title: "Pulse ECG: battery-powered palm-sized electrocardiogram",
    tech: ["Altium", "LTspice", "PIC24", "Embedded C"],
  },
  {
    year: 2025,
    title: "Alzheimer's disease prediction: gradient boosting classifier",
    madeAt: "University of Minnesota",
    tech: ["Python", "Scikit-learn", "Gradient Boosting"],
  },
  {
    year: 2025,
    title: "Optical tissue classification via multispectral diffuse reflectance",
    tech: ["Python", "Scikit-learn", "Biomedical Optics"],
  },
  {
    year: 2025,
    title: "Chess Vision: chessboard position reconstruction",
    tech: ["MATLAB", "PyTorch", "Computer Vision"],
  },
  {
    year: 2025,
    title: "EEG alpha artifact removal (UROP)",
    madeAt: "University of Minnesota",
    tech: ["Python", "Autoencoders"],
  },
  {
    year: 2024,
    title: "Vibesit Insight: lower-limb therapy iOS app",
    madeAt: "VibeTech",
    tech: ["SwiftUI", "iOS"],
  },
  {
    year: 2024,
    title: "ASL Digit Tracker glove",
    tech: ["Embedded C", "Sensors"],
  },
  {
    year: 2024,
    title: "Jira rollout and First-in-Human test method ownership",
    madeAt: "Abbott",
    tech: ["IEC 60601", "HALT", "Python"],
  },
  {
    year: 2024,
    title: "CubeSat electrical power subsystem",
    madeAt: "UMN Small Satellite Research Lab",
    tech: ["Altium", "Power electronics", "Embedded"],
  },
  {
    year: 2023,
    title: "BreatheBuddy smart inhaler",
    tech: ["IoT", "Embedded C"],
  },
  {
    year: 2023,
    title: "Inspection fixtures for injection-moulded components",
    madeAt: "Velosity",
    tech: ["SolidWorks", "GD&T"],
  },
  {
    year: 2023,
    title: "Logic RPS: Rock Paper Scissors from logic gates",
    tech: ["Logisim", "Digital Logic", "Multiplexers"],
  },
];

export interface Degree {
  title: string;
  school: string;
  logo: string;
  status: string;
  gpa?: string;
  honors?: string;
}

export const education: Degree[] = [
  {
    title: "Master of Science in Electrical & Computer Engineering",
    school: "University of Minnesota",
    logo: "/logos/umn.png",
    status: "Expected December 2026",
  },
  {
    title: "Bachelor of Electrical Engineering",
    school: "University of Minnesota",
    logo: "/logos/umn.png",
    status: "Conferred May 2026",
    gpa: "3.66",
    honors: "Dean's List",
  },
];

export interface CourseGroup {
  label: string;
  courses: string[];
}

export const coursework: CourseGroup[] = [
  {
    label: "Electronics & Devices",
    courses: [
      "Analog and Digital Electronics",
      "Analog Electronics",
      "Semiconductor Devices",
      "VLSI Design I",
      "Microsystem Technology",
      "Intro BioMEMS/Med Microdevices",
    ],
  },
  {
    label: "Signals, Fields & Wireless",
    courses: [
      "Signals Circuits Electronics",
      "Signals and Systems",
      "Signals, Circuits & Electronics Lab",
      "Transmission Lines, Fields & Waves",
      "Wireless Hardware Systems Design",
    ],
  },
  {
    label: "Power Electronics",
    courses: [
      "Power Electronics",
      "Switch-Mode Power Electronics Lab",
    ],
  },
  {
    label: "Computing & Machine Learning",
    courses: [
      "Intro to Computing Systems",
      "Intro to Microcontrollers",
      "Intro to Deep Learning",
      "Robot Vision",
      "ML/DataSci for ECE/Roboticists",
      "Data Modeling Using R",
    ],
  },
  {
    label: "Biomedical Engineering",
    courses: [
      "Neural Engineering",
      "Intro Biomedical Optics",
      "Biomedical Data Science",
      "Circuits, Computation & Biology",
      "Clin Fndns of Med Device Innovation",
      "Intro to Med Dev Cybersecurity",
    ],
  },
  {
    label: "Design & Systems",
    courses: [
      "Junior Design Project",
      "Senior Design Project",
      "Systems Engineering I",
      "Lean Tools",
      "CSE Linear Algebra & Differential Equations III",
      "Intro Physics: Science & Engineering III",
    ],
  },
];

/**
 * The hero's one-paragraph answer to "who is this and what do they do."
 * Structure mirrors Wajih Habrah's intro — two sentences, background +
 * degree, no bullet-list energy.
 */
export const heroSummary = `Most engineers ask "can we build it?" I start with
  "should we, and for whom?" I'm an electrical engineer who thinks like a
  product manager, with R&D experience at Medtronic and Abbott, and I founded
  STRIVE Medical, a student medical device club. I graduate this winter and
  I'm looking for an electrical or systems engineering role starting
  January 2027.`;

export const heroStats = [
  "R&D engineering since 2022",
  "UMN MSE · 2026",
] as const;

export const skills = {
  modeling: [
    "Cadence Allegro",
    "Altium",
    "Git",
    "LabVIEW",
    "LT-Spice",
    "RF",
    "Minitab",
    "Python",
    "Matlab",
    "C/C++",
    "Linux",
    "Swift",
    "PyTorch",
    "R",
  ],
  core: [
    "Experimental Design",
    "Six Sigma Green Belt",
    "SolidWorks",
    "DFM",
    "GD&T",
    "Technical Writing",
    "V&V Testing",
  ],
} as const;

export const contact = {
  title: "Get In Touch",
  body: `I finish my master's in December 2026 and I'm looking for full-time
   roles in R&D, product development, electrical, or systems engineering.
   I love connecting with new people and am happy to discuss my
   qualifications in greater detail. Feel free to connect!`,
} as const;
