import { systems } from "@/lib/collection"
import { SectionHeading } from "@/components/section-heading"
import { GateMark } from "@/components/artwork"

export function SystemSection() {
  return (
    <section id="system" aria-labelledby="system-title" className="border-t border-border bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          id="system-title"
          eyebrow="Design system"
          title="Four systems keep ten garments connected."
        />

        <ul className="mt-10 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {systems.map((system) => (
            <li key={system.number} className="flex flex-col bg-surface p-6">
              <span className="tabular text-sm font-medium text-muted">{system.number}</span>
              <h3 className="mt-6 text-xl font-semibold uppercase tracking-[0.1em]">{system.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted text-pretty">{system.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col gap-6 border border-border p-6 md:flex-row md:items-center md:gap-10 md:p-10">
          <GateMark className="w-28 shrink-0 text-foreground md:w-40" />
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em]">The Lock Line rule</h3>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted text-pretty">
              The bronze interruption appears no more than once on a garment and occupies less than one percent of
              its visible surface. If a detail does not reinforce, close, join, identify or document, it is removed.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
