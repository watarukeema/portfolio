const baseClassName =
  "rounded-xl px-5 py-3 text-sm font-medium transition";

const variants = {
  primary: "bg-white text-black hover:bg-zinc-200",
  secondary:
    "border border-white/10 bg-white/5 text-white hover:border-white/20 hover:bg-white/10",
};

export default function ActionLink({
  href,
  children,
  variant = "secondary",
  external = false,
}) {
  const externalProps = external
    ? { target: "_blank", rel: "noreferrer" }
    : {};

  return (
    <a
      href={href}
      className={`${baseClassName} ${variants[variant]}`}
      {...externalProps}
    >
      {children}
    </a>
  );
}
