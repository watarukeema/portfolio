import { useEffect, useState } from "react";
import { featuredProjects } from "../data/portfolio.js";

export function Arrow() {
  return (
    <svg
      className="arrow-icon"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M4 12 12 4M6 4h6v6" />
    </svg>
  );
}

export function ActionLink({ href, children, external = false, primary = false }) {
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

export function SectionIntro({ label, title, description }) {
  return (
    <div className="section-intro reveal">
      <p className="section-label">{label}</p>
      <h2>{title}</h2>
      {description ? <p className="section-intro__description">{description}</p> : null}
    </div>
  );
}

export function OrbitalMark() {
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

export function ProjectOrbit({ activeProject, onSelect }) {
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
            {project.isNew ? <span className="orbit-node__badge">New</span> : null}
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

function DataStoryVisual({ onImagePreview }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const bars = [
    ["Story", 42],
    ["Focus", 68],
    ["Taste", 52],
    ["Peak", 88],
    ["Routine", 61],
    ["Sample", 76],
    ["Public", 47],
    ["Upload", 72],
  ];
  const screenshots = [
    {
      src: "/listening-landing.png",
      label: "Landing",
      title: "Listening Pattern Lab landing",
      type: "Listening Pattern Lab",
      alt: "Listening Pattern Lab landing page",
    },
    {
      src: "/listening-sample.png",
      label: "Sample report",
      title: "Sample visitor report",
      type: "Listening Pattern Lab",
      alt: "Listening Pattern Lab sample visitor report with filters and patterns",
    },
    {
      src: "/listening-public-lab.png",
      label: "Public lab",
      title: "Public evidence lab",
      type: "Listening Pattern Lab",
      alt: "Listening Pattern Lab public music dataset section",
    },
  ];
  const slides = [{ kind: "signals", label: "Signals" }, ...screenshots];
  const slideCount = slides.length;
  const currentSlide = slides[activeSlide];
  const showPreviousSlide = () => {
    setActiveSlide((slide) => (slide === 0 ? slideCount - 1 : slide - 1));
  };
  const showNextSlide = () => {
    setActiveSlide((slide) => (slide + 1) % slideCount);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((slide) => (slide + 1) % slideCount);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [slideCount]);

  return (
    <div className="data-story-visual" aria-label="Listening Pattern Lab data story preview">
      {currentSlide.kind === "signals" ? (
        <div key="signals" className="data-story-visual__slide data-story-visual__slide--signals">
          <div className="data-story-visual__header">
            <span>visitor path</span>
            <strong>Know me through data</strong>
          </div>
          <div className="data-story-visual__metrics">
            <div>
              <small>mode</small>
              <strong>My story</strong>
            </div>
            <div>
              <small>upload</small>
              <strong>Local only</strong>
            </div>
            <div>
              <small>dataset</small>
              <strong>Public sample</strong>
            </div>
          </div>
          <div className="data-story-visual__chart" aria-label="Interactive listening insight bars">
            {bars.map(([label, height]) => (
              <button
                key={label}
                type="button"
                style={{ "--bar-height": `${height}%` }}
                aria-label={`${label} signal, ${height} percent`}
              >
                <span>{label}</span>
              </button>
            ))}
          </div>
          <div className="data-story-visual__flow">
            <span>Portfolio</span>
            <span>Listening story</span>
            <span>Try your data</span>
          </div>
        </div>
      ) : (
        <button
          key={currentSlide.src}
          type="button"
          className="data-story-visual__slide data-story-visual__slide--screen"
          onClick={() =>
            onImagePreview({
              title: currentSlide.title,
              type: currentSlide.type,
              image: currentSlide.src,
              imageAlt: currentSlide.alt,
            })
          }
          aria-label={`View full ${currentSlide.label} screenshot`}
        >
          <img src={currentSlide.src} alt={currentSlide.alt} loading="lazy" />
          <span>Open full image <Arrow /></span>
        </button>
      )}
      <div className="data-story-visual__screen-controls">
        <button type="button" onClick={showPreviousSlide} aria-label="Show previous slide">
          Previous
        </button>
        <div role="tablist" aria-label="Select Listening Pattern Lab preview">
          {slides.map((slide, index) => (
            <button
              key={slide.label}
              type="button"
              role="tab"
              aria-selected={activeSlide === index}
              aria-label={`Show ${slide.label} preview`}
              onClick={() => setActiveSlide(index)}
            >
              <span>{slide.label}</span>
            </button>
          ))}
        </div>
        <button type="button" onClick={showNextSlide} aria-label="Show next slide">
          Next
        </button>
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

export function ProjectDetail({ project, onImagePreview, onUnavailableDemo }) {
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
        ) : project.displayType === "data-story" ? (
          <DataStoryVisual onImagePreview={onImagePreview} />
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
            {project.githubLabel || "View code"}
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

export function Modal({ children, label, onClose, wide = false }) {
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
