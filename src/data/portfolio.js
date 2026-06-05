export const navigationLinks = [
  { href: "#work", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const socialLinks = [
  { href: "https://github.com/watarukeema", label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/jansen-536150366/",
    label: "LinkedIn",
  },
];

export const featuredProjects = [
  {
    id: "job-fit",
    title: "Job Fit Agent",
    type: "AI product · Full-stack",
    summary:
      "A job application assistant that turns an overwhelming job description into a clear, structured plan.",
    challenge:
      "LLM responses are useful only when they are consistent enough for a real interface. I needed to turn uncertain text generation into dependable product behavior.",
    contribution:
      "Designed the analysis flow and React experience, then built three core Express APIs for resume extraction, job analysis, and tailored cover-letter generation.",
    outcome:
      "Delivered an end-to-end workflow with Zod-validated AI outputs, Swagger/OpenAPI documentation, browser persistence, and ten API tests using mocked OpenAI responses.",
    tags: ["TypeScript", "Express", "OpenAI API", "React", "Zod"],
    github: "https://github.com/watarukeema/job-fit-agent",
    image: "/job fit agent page .png",
    imageAlt: "Job Fit Agent showing a structured analysis of a software role",
    displayType: "image",
    position: "node--job-fit",
    technicalNotes: [
      ["API", "3 core workflows"],
      ["Validation", "Zod structured output"],
      ["Quality", "10 API tests"],
    ],
  },
  {
    id: "formation",
    title: "Formation Studio",
    type: "Creative tool · Frontend",
    summary:
      "A choreography planning workspace for mapping movement, timing transitions, and keeping formations in sync with media.",
    challenge:
      "Choreography is spatial and time-based. The interface needed to make both dimensions editable without becoming difficult to understand.",
    contribution:
      "Built the live browser tool from scratch using Canvas 2D and JavaScript modules, including stage editing, media synchronisation, and the complete keyframe workflow.",
    outcome:
      "Shipped a live planning tool with configurable grids, hold-or-morph interpolation, autosave, undo, keyboard editing, and versioned JSON import/export.",
    tags: ["JavaScript", "Canvas", "Timeline UI", "Product Design"],
    github: "https://github.com/watarukeema/formation-studio",
    demo: "https://watarukeema.github.io/formation-studio/",
    image: "/formation-studio-ui.png",
    imageAlt: "Formation Studio dancer formation editor and timeline",
    displayType: "image",
    position: "node--formation",
    technicalNotes: [
      ["Timeline", "Synced media + keyframes"],
      ["Editing", "Undo + keyboard controls"],
      ["Storage", "Autosave + JSON v2"],
    ],
  },
  {
    id: "ignite",
    title: "Ignite",
    type: "Backend system · Platform",
    summary:
      "The backend foundation for a student networking platform built around reliable profiles, accounts, and connections.",
    challenge:
      "Social products quickly create complicated ownership and relationship rules. The API and data model needed clear boundaries from the start.",
    contribution:
      "Designed the relational data model and implemented working authentication, profile, account, and user-management APIs using Express and Supabase.",
    outcome:
      "Delivered a functioning PostgreSQL-backed service layer with clear API boundaries for the platform’s core identity and account workflows.",
    tags: ["TypeScript", "Express", "Supabase", "PostgreSQL"],
    github: "https://github.com/watarukeema/ignite",
    displayType: "architecture",
    position: "node--ignite",
    technicalNotes: [
      ["Identity", "Auth flows"],
      ["Data", "Relational model"],
      ["Access", "API boundaries"],
    ],
  },
];

export const archiveProjects = [
  {
    title: "AutoSpot Smart Parking",
    type: "Mobile product",
    desc: "Wallet top-ups, payments, and parking-session flows for a smart parking system.",
    tags: ["Flutter", "API", "Product"],
    github:
      "https://github.com/watarukeema/Capstone-Project--Autospot---Smart-vehicle-Parking-Management-System",
  },
  {
    title: "HTTP/1.1 Proxy Server",
    type: "Systems",
    desc: "A multithreaded forward proxy built over raw sockets to understand HTTP from the wire up.",
    tags: ["Python", "Sockets", "HTTP"],
    github: "https://github.com/watarukeema/py-mini-http-proxy",
  },
  {
    title: "Music Genre Classification",
    type: "Machine learning",
    desc: "Genre classification experiments using extracted audio features from the GTZAN dataset.",
    tags: ["Python", "ML", "Audio"],
    github: "https://github.com/watarukeema/EtherealEcho",
  },
  {
    title: "Portfolio",
    type: "Design engineering",
    desc: "This evolving space for explaining what I build, how I think, and what I am learning.",
    tags: ["React", "Vite", "CSS"],
    github: "https://github.com/watarukeema/portfolio",
    demo: "https://watarukema.dev/",
  },
];

export const skillGroups = [
  {
    title: "Product",
    items: ["React", "TypeScript", "Flutter", "Product Design"],
  },
  {
    title: "Systems",
    items: ["Python", "Express.js", "Node.js", "Docker", "Rust"],
  },
  {
    title: "Data",
    items: ["PostgreSQL", "Supabase", "SQL", "OpenAI API"],
  },
];

export const signals = [
  {
    status: "In progress",
    title: "Google Data Analytics Certificate",
    description:
      "Developing a stronger workflow for cleaning, analysing, and communicating data.",
  },
  {
    status: "Experiment",
    title: "Music Genre Classification",
    description:
      "Comparing models on audio features and learning where the data limits the result.",
    href: "https://github.com/watarukeema/EtherealEcho",
  },
  {
    status: "Next",
    title: "Software + data product",
    description:
      "Planning a useful product where real analysis directly supports a clearer decision.",
  },
];
