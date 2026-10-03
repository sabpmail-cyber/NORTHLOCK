export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
}: {
  eyebrow: string
  title: string
  description?: string
  id: string
}) {
  return (
    <div className="max-w-2xl">
      <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.24em] text-muted">
        <span className="h-px w-6 bg-bronze" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 id={id} className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-balance md:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-base leading-relaxed text-muted text-pretty">{description}</p>}
    </div>
  )
}
