import { SectionHeading } from "@/components/section-heading"

const stages = [
  {
    stage: "Stage 1",
    title: "GATE and TEN LINES",
    body: "The first release: the strongest visual distinction across one shared heavyweight blank. Each piece is sampled before it goes on sale.",
  },
  {
    stage: "Stage 2",
    title: "High-Twist Shirt and Frame Jacket",
    body: "A refined woven base layer, and a first prototype of the jacket that will become the collection's signature silhouette.",
  },
  {
    stage: "Stage 3",
    title: "Overshirt and knitwear",
    body: "The Compact Twill Overshirt, Saddle Crew and Milano Zip Knit follow with a capable cut-and-sew and fully-fashioned partner.",
  },
]

export function SequenceSection() {
  return (
    <section id="sequence" aria-labelledby="sequence-title" className="border-t border-border py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          id="sequence-title"
          eyebrow="Release sequence"
          title="Launch the proof, preserve the collection."
          description="Tees arrive first; wovens follow; knitwear and the jacket are developed properly rather than approximated on decorated blanks."
        />

        <ol className="mt-10 flex flex-col gap-px border border-border bg-border md:flex-row">
          {stages.map((item, index) => (
            <li key={item.stage} className="flex flex-1 flex-col bg-background p-6">
              <div className="flex items-center gap-3">
                <span
                  className={`size-2 ${index === 0 ? "bg-bronze" : "border border-border-strong"}`}
                  aria-hidden="true"
                />
                <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">{item.stage}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted text-pretty">{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
