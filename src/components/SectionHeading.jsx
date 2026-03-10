export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-zinc-400">{description}</p>
      ) : null}
    </div>
  );
}
