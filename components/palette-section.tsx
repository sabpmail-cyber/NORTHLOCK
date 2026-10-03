import { palette } from "@/lib/collection"
import { SectionHeading } from "@/components/section-heading"

export function PaletteSection() {
  return (
    <section id="colour" aria-labelledby="colour-title" className="border-t border-border py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          id="colour-title"
          eyebrow="Colour and material"
          title="Dark colour, varied by material."
          description="Cotton, wool, wax, ink and metal never match automatically, so every dark is approved together. Lock Bronze is an accent, not a metallic brand colour."
        />

        <ul className="mt-10 grid grid-cols-3 gap-3 md:grid-cols-9">
          {palette.map((colour) => (
            <li key={colour.hex} className="flex flex-col">
              <span
                className="aspect-[3/4] w-full border border-border"
                style={{ backgroundColor: colour.hex }}
                aria-hidden="true"
              />
              <span className="mt-2 text-xs font-medium leading-tight">{colour.name}</span>
              <span className="tabular mt-0.5 text-[11px] text-muted">{colour.hex}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
