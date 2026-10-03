import Image from "next/image"
import { garments } from "@/lib/collection"
import { SectionHeading } from "@/components/section-heading"

export function CollectionSection() {
  return (
    <section id="collection" aria-labelledby="collection-title" className="border-t border-border py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          id="collection-title"
          eyebrow="Ten forms"
          title="Heritage is the result, not the premise."
          description="Five graphic tees, two woven shirts, two fully-fashioned knits and one signature jacket. Nothing claims a past: every approved form is documented, tested in wear, and the strongest pieces remain."
        />

        <figure className="mt-10">
          <div className="relative aspect-[3/2] w-full overflow-hidden bg-surface">
            <Image
              src="/images/layering.png"
              alt="Bone poplin shirt, forest green twill overshirt and black waxed-cotton jacket laid flat in layers"
              fill
              sizes="(min-width: 1152px) 1152px, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3 text-[11px] uppercase tracking-[0.16em] text-muted">
            Concept visual / Layered by function, not costume
          </figcaption>
        </figure>

        <ol className="mt-12 flex flex-col border-t border-border">
          {garments.map((garment) => (
            <li key={garment.name} className="border-b border-border py-6 md:grid md:grid-cols-12 md:gap-6">
              <div className="flex items-center gap-3 md:col-span-2">
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">{garment.category}</span>
              </div>
              <div className="mt-2 md:col-span-4 md:mt-0">
                <h3 className="text-lg font-semibold">{garment.name}</h3>
                <p className="mt-1 text-sm text-muted">{garment.role}</p>
              </div>
              <div className="mt-3 md:col-span-6 md:mt-0">
                <p className="text-[15px] leading-relaxed text-pretty">{garment.detail}</p>
                <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs uppercase tracking-[0.14em] text-muted">
                  <span>{garment.material}</span>
                  <span>{garment.colours}</span>
                  <span className="text-bronze-light">Stage {garment.stage}</span>
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
