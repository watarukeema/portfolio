export default function App() {
  const projects = [
    {
      title: "AutoSpot Smart Parking",
      tags: ["Flutter", "API", "Product"],
      desc: "Built wallet, payment, and parking session flows for a smart parking system with a focus on smooth user experience and app usability.",
      github: "https://github.com/watarukeema/Capstone-Project--Autospot---Smart-vehicle-Parking-Management-System",
      featured: true,
    },
    {
      title: "Ignite Networking Platform",
      tags: ["TypeScript", "Express", "Supabase", "PostgreSQL"],
      desc: "Designed backend APIs, authentication flows, and database structures for a student networking platform focused on scalable user and profile workflows.",
      github: "https://github.com/watarukeema/ignite",
      featured: true,
    },
    {
      title: "Portfolio",
      tags: ["React", "Vite", "TailwindCSS", "Vercel"],
      desc: "Designed and built a personal developer portfolio to showcase projects, skills, and technical work. Built with React and TailwindCSS with a focus on clean UI, responsive design, and fast deployment using Vercel.",
      github: "https://github.com/watarukeema/portfolio",
    },
    {
      title: "Music Genre Classification",
      tags: ["Python", "Machine Learning", "Audio Features"],
      desc: "Trained and evaluated classification models on the GTZAN dataset using extracted audio features for music genre prediction.",
      github: "https://github.com/watarukeema/EtherealEcho",
    },
    {
      title: "HTTP/1.1 Proxy Server",
      tags: ["Python", "Sockets", "HTTP", "Caching"],
      desc: "Built a multi-threaded HTTP/1.1 proxy server supporting GET, POST, HEAD, and CONNECT with persistent connections, structured logging, and caching.",
      github: "https://github.com/watarukeema/py-mini-http-proxy",
    },
  ];

  const skills = {
    Languages: ["Python", "TypeScript", "Java", "SQL", "Rust"],
    Frameworks: ["React", "Flutter", "Express.js", "Supabase"],
    Tools: ["Git", "Docker", "PostgreSQL", "Linux", "Vercel"],
  };

  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <div className="fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
          <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between">
            <a href="#home" className="text-sm font-semibold tracking-wide text-white">
              Jansen
            </a>

            <div className="hidden items-center gap-6 text-sm text-zinc-400 md:flex">
              <a href="#projects" className="transition hover:text-white">
                Projects
              </a>
              <a href="#skills" className="transition hover:text-white">
                Skills
              </a>
              <a href="#about" className="transition hover:text-white">
                About
              </a>
              <a href="#contact" className="transition hover:text-white">
                Contact
              </a>
            </div>
          </nav>
        </header>

        <main>
          <section
            id="home"
            className="flex min-h-[calc(100vh-4rem)] items-center py-20"
          >
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-300">
                Open to Graduate Software Engineer Opportunities
              </div>

              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
                Software Engineer
              </p>

              <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl">
                Jansen
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
                Backend-focused software engineer building scalable systems and
                clean user-facing products.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
                >
                  View Projects
                </a>
                <a
                  href="https://github.com/watarukeema"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/10"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/10"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </section>

          <section id="projects" className="scroll-mt-24 py-20">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
                Projects
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Selected work
              </h2>
              <p className="mt-4 text-zinc-400">
                A few projects that reflect my interests across backend
                engineering, systems, and product-focused development.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </section>

          <section id="skills" className="scroll-mt-24 py-20">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
                Skills
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Tools I work with
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {Object.entries(skills).map(([category, items]) => (
                <div
                  key={category}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <h3 className="text-lg font-semibold text-white">{category}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="about" className="scroll-mt-24 py-20">
            <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-start">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
                  About
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  A little about me
                </h2>
              </div>

              <div className="space-y-5 text-zinc-300 leading-8">
                <p>
                  I’m Jansen, a software engineer with a strong interest in
                  backend systems, scalable application design, and building
                  products that are both technically sound and pleasant to use.
                </p>
                <p>
                  My work spans projects in networking, machine learning,
                  full-stack development, and mobile application workflows. I
                  enjoy turning technical ideas into practical, well-structured
                  solutions.
                </p>
                <p>
                  Right now, I’m especially interested in graduate software
                  engineering opportunities where I can grow as an engineer and
                  contribute to meaningful products.
                </p>
              </div>
            </div>
          </section>

          <section id="contact" className="scroll-mt-24 py-20">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Let’s connect
              </h2>
              <p className="mt-4 max-w-2xl text-zinc-400">
                I’m currently open to graduate software engineering
                opportunities, collaborations, and conversations about building
                thoughtful products and systems.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:jansen.jans.wk@gmail.com"
                  className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
                >
                  Email Me
                </a>
                <a
                  href="https://github.com/watarukeema"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/10"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/jansen-536150366/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/10"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/10 py-8 text-sm text-zinc-500">
          © {new Date().getFullYear()} Jansen. Built with React, Vite, Tailwind,
          and deployed on Vercel.
        </footer>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <div
      className={`group rounded-3xl border p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05] ${
        project.featured
          ? "border-white/15 bg-white/[0.04]"
          : "border-white/10 bg-white/[0.02]"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          {project.featured && (
            <span className="mb-3 inline-flex rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-300">
              Featured
            </span>
          )}
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 text-sm text-zinc-400 transition group-hover:text-white"
        >
          GitHub →
        </a>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="mt-5 leading-7 text-zinc-300">{project.desc}</p>
    </div>
  );
}