import { tees } from "@/lib/collection"
import { TeeArtworkField } from "@/components/artwork"
import { SectionHeading } from "@/components/section-heading"

export function TeesSection() {
  return (
    <section id="tees" aria-labelledby="tees-title" className="border-t border-border py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          id="tees-title"
          eyebrow="Five graphic tees"
          title="One dominant field per tee."
          description="Each artwork title is the garment's name. Graphics behave like records, not decoration: two ink colours at most, and no invented coordinates or dates."
        />

        <ul className="mt-10 flex flex-col gap-12 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-3">
          {tees.map((tee) => (
            <li key={tee.slug}>
              <article aria-labelledby={`tee-${tee.slug}`} className="flex flex-col">
                <div className="relative">
                  <TeeArtworkField slug={tee.slug} background={tee.garmentColour.hex} />
                  {tee.firstRelease && (
                    <span className="absolute top-3 left-3 bg-background/85 px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground">
                      First release
                    </span>
                  )}
                </div>

                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <h3 id={`tee-${tee.slug}`} className="text-xl font-semibold tracking-[0.08em]">
                    {tee.name}
                  </h3>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-muted">{tee.role}</p>
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-muted text-pretty">{tee.meaning}</p>

                <dl className="mt-5 flex flex-col border-t border-border text-[13px]">
                  <div className="flex justify-between gap-4 border-b border-border py-3">
                    <dt className="text-muted">Garment</dt>
                    <dd className="flex items-center gap-2 text-right">
                      <span
                        className="size-3 shrink-0 border border-border-strong"
                        style={{ backgroundColor: tee.garmentColour.hex }}
                        aria-hidden="true"
                      />
                      {tee.garmentColour.name}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-border py-3">
                    <dt className="text-muted">Print</dt>
                    <dd className="text-right">{tee.inks.map((ink) => ink.name).join(" + ")}</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-border py-3">
                    <dt className="text-muted">Jersey</dt>
                    <dd className="text-right">{tee.material}</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-border py-3">
                    <dt className="text-muted">Placement</dt>
                    <dd className="text-right">{tee.placement}</dd>
                  </div>
                </dl>
              </article>
            </li>
          ))}
        </ul>

        <p className="mt-12 max-w-2xl text-xs leading-relaxed text-muted">
          Artwork fields are shown as colour previews, not at garment scale. Fabric weights are target specifications
          pending physical samples.
        </p>
      </div>
    </section>
  )
}
