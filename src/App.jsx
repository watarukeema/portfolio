import { useCallback, useEffect, useState } from "react";
import {
  archiveProjects,
  featuredProjects,
  navigationLinks,
  signals,
  skillGroups,
  socialLinks,
} from "./data/portfolio.js";
import {
  ActionLink,
  Arrow,
  Modal,
  OrbitalMark,
  ProjectDetail,
  ProjectOrbit,
  SectionIntro,
} from "./components/PortfolioUi.jsx";

const resumeHref = "/General-Resume-Jansen.pdf";
const email = "jansen.jans.wk@gmail.com";

export default function App() {
  const [activeProjectId, setActiveProjectId] = useState(featuredProjects[0].id);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [previewNoticeProject, setPreviewNoticeProject] = useState(null);
  const [imagePreviewProject, setImagePreviewProject] = useState(null);
  const [emailCopied, setEmailCopied] = useState(false);

  const activeProject =
    featuredProjects.find((project) => project.id === activeProjectId) ||
    featuredProjects[0];

  const closeModals = useCallback(() => {
    setPreviewNoticeProject(null);
    setImagePreviewProject(null);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("main section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -55%", threshold: [0, 0.2, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );
    reveals.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!previewNoticeProject && !imagePreviewProject) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") closeModals();
    };
    document.body.classList.add("modal-open");
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("modal-open");
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [closeModals, imagePreviewProject, previewNoticeProject]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <div className="site-shell">
      <div className="ambient-orbit ambient-orbit--one" aria-hidden="true" />
      <div className="ambient-orbit ambient-orbit--two" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#home" aria-label="Jansen, back to top">
          <OrbitalMark />
          <span>
            <strong>Jansen</strong>
            <small>Software engineer</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={activeSection === link.href.slice(1) ? "active" : ""}
            >
              {link.label}
            </a>
          ))}
          <a href={resumeHref} target="_blank" rel="noreferrer">
            Resume
          </a>
        </nav>
        <button
          type="button"
          className="menu-button"
          aria-expanded={isMobileNavOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsMobileNavOpen((open) => !open)}
        >
          {isMobileNavOpen ? "Close" : "Menu"}
        </button>
        {isMobileNavOpen ? (
          <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileNavOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href={resumeHref} target="_blank" rel="noreferrer">
              Resume
            </a>
          </nav>
        ) : null}
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero__copy">
            <p className="hero__availability reveal">
              <span />
              Open to 2026 graduate roles · Open to relocate
            </p>
            <h1 className="reveal">
              <span>Hi, I’m</span>
              <strong>Jansen.</strong>
              <em>Software engineer building useful systems.</em>
            </h1>
            <p className="hero__lead reveal">
              I build backend systems, interactive tools, and data-informed
              products. I enjoy finding structure in unclear problems and
              turning it into software people can actually use.
            </p>
            <div className="hero__facts reveal">
              <span>UNSW Computer Science Graduate</span>
              <span>Full Australian work rights</span>
              <span>Open to relocate</span>
              <span>Software + data</span>
            </div>
            <div className="hero__actions reveal">
              <ActionLink href="#work" primary>
                Explore projects
              </ActionLink>
              <ActionLink href={resumeHref} external>
                View resume
              </ActionLink>
            </div>
          </div>

          <div className="hero__visual reveal" aria-hidden="true">
            <div className="hero-orbit">
              <span className="hero-orbit__ring hero-orbit__ring--one" />
              <span className="hero-orbit__ring hero-orbit__ring--two" />
              <span className="hero-orbit__ring hero-orbit__ring--three" />
              <span className="hero-orbit__core">
                <strong>Jansen</strong>
                <small>
                  <span>Software</span>
                  <span>Engineer</span>
                </small>
              </span>
              <span className="hero-orbit__label hero-orbit__label--one">backend systems</span>
              <span className="hero-orbit__label hero-orbit__label--two">product</span>
              <span className="hero-orbit__label hero-orbit__label--three">data analysis</span>
              <span className="hero-orbit__dot hero-orbit__dot--one" />
              <span className="hero-orbit__dot hero-orbit__dot--two" />
              <span className="hero-orbit__dot hero-orbit__dot--three" />
            </div>
          </div>

          <div className="hero__current reveal">
            <span>Now</span>
            <p>
              Google Data Analytics Professional Certificate holder, building
              new software and looking for a 2026 graduate role.
            </p>
          </div>
        </section>

        <section id="work" className="section section--work">
          <SectionIntro
            label="Selected projects"
            title="Selected projects, viewed from different angles."
            description="Choose a project to see the problem, the decisions I made, and what the final system needed to do."
          />
          <div className="project-workspace reveal">
            <ProjectOrbit activeProject={activeProject} onSelect={setActiveProjectId} />
            <ProjectDetail
              project={activeProject}
              onImagePreview={setImagePreviewProject}
              onUnavailableDemo={setPreviewNoticeProject}
            />
          </div>

          <div className="archive reveal">
            <div className="archive__intro">
              <p className="section-label">More work</p>
              <h3>Smaller builds and technical explorations.</h3>
            </div>
            <div className="archive__list">
              {archiveProjects.map((project) => (
                <a
                  key={project.title}
                  href={project.demo || project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="archive-row"
                >
                  <div>
                    <small>{project.type}</small>
                    <strong>{project.title}</strong>
                  </div>
                  <p>{project.desc}</p>
                  <span>{project.tags.join(" · ")}</span>
                  <Arrow />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section section--about">
          <SectionIntro
            label="About"
            title="Curious across the stack, grounded in the outcome."
          />
          <div className="about-layout">
            <div className="about-main reveal">
              <div className="about-photo">
                <img
                  src="/profile1.jpg"
                  alt="Jansen standing near the waterfront"
                  loading="lazy"
                />
              </div>
              <div className="about-copy">
                <p className="about-copy__lead">
                  I’m a UNSW Computer Science graduate who likes turning unclear
                  problems into systems people can actually use.
                </p>
                <p>
                  That has taken me through API design, authentication,
                  databases, mobile product flows, networking, interactive
                  canvas tools, and machine learning experiments. The
                  technologies change, but my approach stays consistent:
                  understand the real problem, make the structure clear, then
                  ship something useful.
                </p>
                <p>
                  I recently earned the Google Data Analytics Professional
                  Certificate and am applying that workflow alongside software
                  engineering, with the goal of building products that help
                  people make clearer decisions.
                </p>
                <div className="skills">
                  {skillGroups.map((group) => (
                    <div key={group.title}>
                      <h3>{group.title}</h3>
                      <p>{group.items.join(" · ")}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="signals reveal">
              <div className="signals__heading">
                <p className="section-label">Signals</p>
                <h3>What I am learning and exploring now.</h3>
              </div>
              <div className="signals__list">
                {signals.map((signal) => {
                  const SignalTag = signal.href ? "a" : "article";
                  return (
                    <SignalTag
                      key={signal.title}
                      className="signal"
                      {...(signal.href
                        ? { href: signal.href, target: "_blank", rel: "noreferrer" }
                        : {})}
                    >
                      <span>{signal.status}</span>
                      <h4>{signal.title}</h4>
                      <p>{signal.description}</p>
                      {signal.href ? <Arrow /> : null}
                    </SignalTag>
                  );
                })}
              </div>
            </aside>
          </div>
        </section>

        <section id="contact" className="section section--contact">
          <div className="contact-copy reveal">
            <p className="section-label">Contact</p>
            <h2>Have a useful problem to work on?</h2>
            <p>
              I’m open to graduate software engineering roles, collaborations,
              and conversations about products that need both technical
              structure and curiosity.
            </p>
            <button type="button" className="action-link action-link--primary" onClick={copyEmail}>
              {emailCopied ? "Email copied" : "Copy my email"}
              <Arrow />
            </button>
          </div>
          <div className="contact-links reveal">
            <a href={`mailto:${email}`}>
              <span>Email</span>
              <strong>{email}</strong>
              <Arrow />
            </a>
            {socialLinks.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                <span>{link.label}</span>
                <strong>Open profile</strong>
                <Arrow />
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand" href="#home">
          <OrbitalMark />
          <span><strong>Jansen</strong></span>
        </a>
        <p>Software, systems, and signals.</p>
        <span>© {new Date().getFullYear()} · Sydney, Australia</span>
      </footer>

      {previewNoticeProject ? (
        <Modal label={`${previewNoticeProject.title} demo status`} onClose={closeModals}>
          <p className="section-label">Demo status</p>
          <h2>{previewNoticeProject.title} is not live yet.</h2>
          <p>
            The public demo is still in progress, but the code and project
            details are available on GitHub.
          </p>
          <ActionLink href={previewNoticeProject.github} external primary>
            View GitHub
          </ActionLink>
        </Modal>
      ) : null}

      {imagePreviewProject ? (
        <Modal label={`${imagePreviewProject.title} screenshot`} onClose={closeModals} wide>
          <p className="section-label">{imagePreviewProject.type}</p>
          <h2>{imagePreviewProject.title}</h2>
          <img
            className="modal__image"
            src={imagePreviewProject.image}
            alt={imagePreviewProject.imageAlt}
          />
        </Modal>
      ) : null}
    </div>
  );
}
