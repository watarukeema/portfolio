import ActionLink from "./components/ActionLink.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import SectionHeading from "./components/SectionHeading.jsx";
import {
  navigationLinks,
  projects,
  skills,
  socialLinks,
} from "./data/portfolio.js";

export default function App() {
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
              {navigationLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
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
                <ActionLink href="#projects" variant="primary">
                  View Projects
                </ActionLink>
                {socialLinks.map((link) => (
                  <ActionLink key={link.href} href={link.href} external>
                    {link.label}
                  </ActionLink>
                ))}
              </div>
            </div>
          </section>

          <section id="projects" className="scroll-mt-24 py-20">
            <SectionHeading
              eyebrow="Projects"
              title="Selected work"
              description="A few projects that reflect my interests across backend engineering, systems, and product-focused development."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </section>

          <section id="skills" className="scroll-mt-24 py-20">
            <SectionHeading eyebrow="Skills" title="Tools I work with" />

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
              <SectionHeading eyebrow="About" title="A little about me" />

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
              <SectionHeading
                eyebrow="Contact"
                title="Let’s connect"
                description="I’m currently open to graduate software engineering opportunities, collaborations, and conversations about building thoughtful products and systems."
              />

              <div className="mt-8 flex flex-wrap gap-3">
                <ActionLink
                  href="mailto:jansen.jans.wk@gmail.com"
                  variant="primary"
                >
                  Email Me
                </ActionLink>
                {socialLinks.map((link) => (
                  <ActionLink key={link.href} href={link.href} external>
                    {link.label}
                  </ActionLink>
                ))}
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
