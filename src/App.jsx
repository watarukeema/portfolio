export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* HERO */}
        <header className="space-y-4">
          <p className="text-sm text-zinc-400">Software Engineer</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Jansen Wataru
          </h1>
          <p className="max-w-2xl text-zinc-300">
            Backend-focused developer who builds scalable systems and clean
            user-facing products.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              className="rounded-xl bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-950 hover:bg-white"
              href="#projects"
            >
              View Projects
            </a>
            <a
              className="rounded-xl border border-zinc-800 px-4 py-2 text-sm font-medium text-zinc-100 hover:border-zinc-600"
              href="https://github.com/watarukeema"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="rounded-xl border border-zinc-800 px-4 py-2 text-sm font-medium text-zinc-100 hover:border-zinc-600"
              href="https://linkedin.com/in/jansen-536150366"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </header>

        {/* PROJECTS */}
        <section id="projects" className="mt-16">
          <h2 className="text-xl font-semibold">Projects</h2>
          <p className="mt-2 text-sm text-zinc-400">
            A few things I’ve built recently.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <ProjectCard
              title="HTTP/1.1 Proxy Server"
              tags="Python • Sockets • HTTP • Caching"
              desc="Implemented GET/POST/HEAD/CONNECT, persistent connections, logging, and caching."
              github="https://github.com/watarukeema/py-mini-http-proxy"
            />
            <ProjectCard
              title="Music Genre Classification"
              tags="Python • ML • Audio Features"
              desc="Trained and evaluated models on GTZAN using extracted audio features."
              github="https://github.com/watarukeema/EtherealEcho"
            />
            <ProjectCard
              title="AutoSpot Smart Parking"
              tags="Flutter • API • Product"
              desc="Built payment flows, wallet top-up, and parking session UX for a smart parking system."
              github="https://github.com/watarukeema/Capstone-Project--Autospot---Smart-vehicle-Parking-Management-System"
            />
            <ProjectCard
              title="Ignite Networking Platform"
              tags="TypeScript • Express • Supabase"
              desc="Designed backend APIs, auth flows, and database structure for a student networking platform."
              github="https://github.com/watarukeema/ignite"
            />
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-20 border-t border-zinc-900 pt-8 text-sm text-zinc-500">
          © {new Date().getFullYear()} Jansen Wataru
        </footer>
      </div>
    </div>
  );
}

function ProjectCard({ title, tags, desc, github }) {
  return (
    <div className="rounded-2xl border border-zinc-900 bg-zinc-950/50 p-5 hover:border-zinc-700">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold">{title}</h3>
        <a
          className="text-sm text-zinc-300 hover:text-white"
          href={github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub →
        </a>
      </div>
      <p className="mt-2 text-xs text-zinc-400">{tags}</p>
      <p className="mt-3 text-sm text-zinc-300">{desc}</p>
    </div>
  );
}