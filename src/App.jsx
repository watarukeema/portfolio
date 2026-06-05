import { useCallback, useEffect, useState } from "react";
import {
  archiveProjects,
  featuredProjects,
  navigationLinks,
  signals,
  skillGroups,
  socialLinks,
} from "./data/portfolio.js";

const resumeHref = "/Resume-Jansen.pdf";
const email = "jansen.jans.wk@gmail.com";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function ActionLink({ href, children, external = false, primary = false }) {
  return (
    <a
      href={href}
      className={`action-link ${primary ? "action-link--primary" : ""}`}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
      <Arrow />
    </a>
  );
}

function SectionIntro({ label, title, description }) {
  return (
    <div className="section-intro reveal">
      <p className="section-label">{label}</p>
      <h2>{title}</h2>
      {description ? <p className="section-intro__description">{description}</p> : null}
    </div>
  );
}

function OrbitalMark() {
  return (
    <div className="orbital-mark" aria-hidden="true">
      <span className="orbital-mark__core" />
      <span className="orbital-mark__ring orbital-mark__ring--one" />
      <span className="orbital-mark__ring orbital-mark__ring--two" />
      <span className="orbital-mark__point orbital-mark__point--one" />
      <span className="orbital-mark__point orbital-mark__point--two" />
      <span className="orbital-mark__point orbital-mark__point--three" />
    </div>
  );
}

function ProjectOrbit({ activeProject, onSelect }) {
  return (
    <div
      className={`project-orbit project-orbit--${activeProject.id}`}
      aria-label="Featured project selector"
    >
      <div key={activeProject.id} className="project-orbit__canvas" aria-hidden="true">
        <span className="orbit-ring orbit-ring--one" />
        <span className="orbit-ring orbit-ring--two" />
        <span className="orbit-ring orbit-ring--three" />
        <span className={`orbit-center planet--${activeProject.id}`}>
          <small>selected</small>
          <span className="orbit-center__planet">
            <span className="planet-surface" />
          </span>
          <strong>{activeProject.title}</strong>
        </span>
      </div>
      <div className="project-orbit__nodes" role="tablist" aria-label="Select a project">
        {featuredProjects.map((project) => (
          <button
            key={project.id}
            type="button"
            role="tab"
            aria-selected={activeProject.id === project.id}
            aria-controls="project-detail"
            className={`orbit-node planet--${project.id} ${project.position} ${
              activeProject.id === project.id ? "is-active" : ""
            }`}
            onClick={() => onSelect(project.id)}
          >
            <span className="orbit-node__point">
              <span className="planet-surface" />
            </span>
            <span className="orbit-node__copy">
              <strong>{project.title}</strong>
              <small>{project.type}</small>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function ArchitectureVisual() {
  return (
    <div className="architecture-visual" aria-label="Ignite service architecture diagram">
      <div className="architecture-node architecture-node--profile">
        <small>client</small>
        <strong>Profile UI</strong>
      </div>
      <div className="architecture-node architecture-node--api">
        <small>service</small>
        <strong>Express API</strong>
      </div>
      <div className="architecture-node architecture-node--auth">
        <small>access</small>
        <strong>Auth</strong>
      </div>
      <div className="architecture-node architecture-node--data">
        <small>storage</small>
        <strong>Postgres</strong>
      </div>
      <svg viewBox="0 0 700 440" aria-hidden="true">
        <path d="M155 120 C245 120 255 220 350 220" />
        <path d="M350 220 C455 220 465 105 560 105" />
        <path d="M350 220 C455 220 465 335 560 335" />
      </svg>
    </div>
  );
}

function ProjectDetail({ project, onImagePreview, onUnavailableDemo }) {
  return (
    <article
      id="project-detail"
      key={project.id}
      className="project-detail"
      role="tabpanel"
      aria-label={`${project.title} project details`}
    >
      <div className="project-detail__visual">
        {project.displayType === "image" ? (
          <button
            type="button"
            className="project-image"
            onClick={() => onImagePreview(project)}
            aria-label={`View full ${project.title} screenshot`}
          >
            <img src={project.image} alt={project.imageAlt} />
            <span>Open full image <Arrow /></span>
          </button>
        ) : (
          <ArchitectureVisual />
        )}
        <div className="technical-notes">
          {project.technicalNotes.map(([label, value]) => (
            <div key={label}>
              <small>{label}</small>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="project-detail__copy">
        <p className="project-type">{project.type}</p>
        <h3>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>
        <dl className="project-decisions">
          <div>
            <dt>Problem</dt>
            <dd>{project.challenge}</dd>
          </div>
          <div>
            <dt>My contribution</dt>
            <dd>{project.contribution}</dd>
          </div>
          <div>
            <dt>Result</dt>
            <dd>{project.outcome}</dd>
          </div>
        </dl>
        <div className="tag-list">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="project-actions">
          <ActionLink href={project.github} external primary>
            View code
          </ActionLink>
          {project.demo ? (
            <ActionLink href={project.demo} external>
              Live project
            </ActionLink>
          ) : (
            <button
              type="button"
              className="action-link"
              onClick={() => onUnavailableDemo(project)}
            >
              Demo status
              <Arrow />
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

function Modal({ children, label, onClose, wide = false }) {
  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <div
        className={`modal ${wide ? "modal--wide" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label={label}
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="modal__close" onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
}

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
              Completing the Google Data Analytics Certificate while building
              new software and looking for a 2026 graduate role.
            </p>
          </div>
        </section>

        <section id="work" className="section section--work">
          <SectionIntro
            label="Selected projects"
            title="Three projects, viewed from different angles."
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
                  I am currently developing a stronger data-analysis practice
                  alongside software engineering, with the goal of building
                  products that help people make clearer decisions.
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
