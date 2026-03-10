export default function ProjectCard({ project }) {
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
