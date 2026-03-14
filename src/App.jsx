import { useState } from "react";
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
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleMobileNavClick = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <div className="fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
          <nav className="mx-auto flex min-h-16 max-w-6xl items-center justify-between py-3">
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

            <button
              type="button"
              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 transition hover:border-white/20 hover:bg-white/10 md:hidden"
              aria-expanded={isMobileNavOpen}
              aria-controls="mobile-navigation"
              aria-label="Toggle navigation menu"
              onClick={() => setIsMobileNavOpen((open) => !open)}
            >
              Menu
            </button>
          </nav>

          {isMobileNavOpen ? (
            <div
              id="mobile-navigation"
              className="border-t border-white/10 pb-4 md:hidden"
            >
              <div className="flex flex-col gap-2 pt-4 text-sm text-zinc-300">
                {navigationLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                    onClick={handleMobileNavClick}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ) : null}
        </header>

        <main>
          <section
            id="home"
            className="flex min-h-[calc(100vh-4rem)] items-center py-20"
          >
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(18rem,24rem)] lg:items-end">
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
                  I build backend-heavy products with a strong bias for clear
                  APIs, reliable systems, and interfaces that do not get in the
                  user's way.
                </p>

                <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
                  My work spans networking, student platforms, mobile product
                  flows, and machine learning projects. I like messy technical
                  problems that need both engineering discipline and product
                  judgment.
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

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-500">
                  What I care about
                </p>
                <div className="mt-5 space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                    <p className="text-sm text-zinc-500">Systems</p>
                    <p className="mt-2 text-base leading-7 text-zinc-200">
                      Building dependable backend flows, data models, and
                      service logic that scale without turning brittle.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                    <p className="text-sm text-zinc-500">Product</p>
                    <p className="mt-2 text-base leading-7 text-zinc-200">
                      Keeping user experience in view so technical decisions
                      improve the product instead of fighting it.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                    <p className="text-sm text-zinc-500">Growth</p>
                    <p className="mt-2 text-base leading-7 text-zinc-200">
                      Looking for a graduate role with strong engineering
                      mentorship, meaningful ownership, and real product work.
                    </p>
                  </div>
                </div>
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

              <div className="space-y-6">
                <div className="space-y-5 text-zinc-300 leading-8">
                  <p>
                    I’m Jansen, a software engineer drawn to backend systems,
                    application architecture, and the practical decisions that
                    make software hold up outside the classroom.
                  </p>
                  <p>
                    I have worked across API design, authentication flows,
                    database-backed products, mobile feature development, and
                    networking projects. That range has made me comfortable
                    moving between low-level technical detail and the broader
                    product shape of a project.
                  </p>
                  <p>
                    The kind of work I enjoy most is turning an unclear problem
                    into something structured: defining the data model, shaping
                    the service boundaries, and making sure the final experience
                    feels simple for the person using it.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-sm text-zinc-500">Interested in</p>
                    <p className="mt-2 text-base font-medium text-white">
                      Backend & Frontend engineering
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-sm text-zinc-500">Comfortable with</p>
                    <p className="mt-2 text-base font-medium text-white">
                      Backend delivery
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-sm text-zinc-500">Looking for</p>
                    <p className="mt-2 text-base font-medium text-white">
                      Graduate roles with impact
                    </p>
                  </div>
                </div>
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
