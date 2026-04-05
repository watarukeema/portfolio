export const navigationLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
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

export const projects = [
  {
    title: "Formation Studio",
    tags: ["JavaScript", "Canvas", "Timeline UI", "Product Design"],
    desc: "Built a choreography planning tool for mapping dance formations against video or audio, with draggable stage positions, timed keyframes, hold-or-morph transitions, JSON import/export, autosave, and keyboard-based editing controls.",
    github: "https://github.com/watarukeema/formation-studio",
    demo: "https://watarukeema.github.io/formation-studio/",
    image: "/formation-studio-ui.png",
    imageAlt: "Formation Studio interface showing a dancer formation editor and synced timeline",
    featured: true,
  },
  {
    title: "AutoSpot Smart Parking",
    tags: ["Flutter", "API", "Product"],
    desc: "Built mobile flows for wallet top-ups, payments, and parking sessions in a smart parking system, with attention to usability, transactional clarity, and end-to-end product behavior.",
    github: "https://github.com/watarukeema/Capstone-Project--Autospot---Smart-vehicle-Parking-Management-System",
    featured: true,
  },
  {
    title: "Ignite Networking Platform",
    tags: ["TypeScript", "Express", "Supabase", "PostgreSQL"],
    desc: "Designed backend APIs, authentication flows, and relational data models for a student networking platform focused on scalable profile, account, and user-management workflows.",
    github: "https://github.com/watarukeema/ignite",
    featured: true,
  },
  {
    title: "Portfolio",
    tags: ["React", "Vite", "TailwindCSS", "Vercel"],
    desc: "Designed and built a personal portfolio in React and TailwindCSS to present projects, skills, and technical interests with a responsive layout and lightweight deployment workflow.",
    github: "https://github.com/watarukeema/portfolio",
  },
  {
    title: "Music Genre Classification",
    tags: ["Python", "Machine Learning", "Audio Features"],
    desc: "Trained and evaluated genre classification models on the GTZAN dataset using extracted audio features, comparing model performance for practical music-tagging tasks.",
    github: "https://github.com/watarukeema/EtherealEcho",
  },
  {
    title: "HTTP/1.1 Proxy Server",
    tags: ["Python", "Sockets", "HTTP", "Threads"],
    desc: "Built an educational multi-threaded HTTP/1.1 forward proxy that parses client requests, sanitizes headers, resolves upstream targets, and relays HTTP traffic over raw sockets.",
    github: "https://github.com/watarukeema/py-mini-http-proxy",
  },
];

export const skills = {
  Languages: ["Python", "TypeScript", "Java", "SQL", "Rust"],
  Frameworks: ["React", "Flutter", "Express.js", "Supabase"],
  Tools: ["Git", "Docker", "PostgreSQL", "Linux", "Vercel"],
};
