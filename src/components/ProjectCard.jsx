export default function ProjectCard({
  project,
  onImagePreview,
  onUnavailableDemo,
}) {
  const liveButtonClassName = "transition hover:text-white";

  return (
    <div
      className={`group rounded-3xl border p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05] ${
        project.featured
          ? "border-white/15 bg-white/[0.04]"
          : "border-white/10 bg-white/[0.02]"
      }`}
    >
      {project.image ? (
        <button
          type="button"
          className="mb-5 block w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40 text-left focus:outline-none focus:ring-2 focus:ring-white/40"
          onClick={() => onImagePreview(project)}
          aria-label={`View full ${project.title} screenshot`}
        >
          <img
            src={project.image}
            alt={project.imageAlt || `${project.title} screenshot`}
            className="h-52 w-full object-cover object-top transition duration-300 group-hover:scale-[1.02]"
            loading="lazy"
          />
        </button>
      ) : null}

      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          {project.featured && (
            <span className="mb-3 inline-flex rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-300">
              Featured
            </span>
          )}
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        </div>

        <div className="flex shrink-0 gap-4 text-sm text-zinc-400">
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className={liveButtonClassName}
            >
              Live →
            </a>
          ) : (
            <button
              type="button"
              className={liveButtonClassName}
              onClick={() => onUnavailableDemo(project)}
            >
              Live →
            </button>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="transition group-hover:text-white"
          >
            GitHub →
          </a>
        </div>
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
