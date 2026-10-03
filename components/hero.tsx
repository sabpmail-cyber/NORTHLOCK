import Image from "next/image"
import { GateMark } from "@/components/artwork"

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-5 pt-8 pb-16 md:grid md:grid-cols-2 md:items-end md:gap-12 md:pt-16 md:pb-24">
      <div className="flex flex-col">
        <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-muted">
          Clothes &amp; Essential Objects
        </p>
        <h1 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-tight text-balance md:text-7xl">
          FIRST FORMS
        </h1>
        <p className="mt-5 max-w-md text-[17px] leading-relaxed text-muted text-pretty">
          Ten garments built to establish NORTHLOCK through weight, line, join and restraint — then earn
          permanence through use.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#tees"
            className="flex min-h-12 items-center justify-center bg-foreground px-6 text-xs font-semibold uppercase tracking-[0.18em] text-background transition-opacity hover:opacity-90"
          >
            View the collection
          </a>
          <a
            href="#system"
            className="flex min-h-12 items-center justify-center border border-border-strong px-6 text-xs font-semibold uppercase tracking-[0.18em] transition-colors hover:bg-surface-raised"
          >
            The design system
          </a>
        </div>

        <div className="mt-10 flex items-center gap-4 border-t border-border pt-6">
          <GateMark className="h-6 w-10 text-foreground" />
          <p className="text-xs leading-relaxed text-muted">
            In development. Pieces are not yet available to purchase.
          </p>
        </div>
      </div>

      <figure className="relative mt-10 md:mt-0">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface">
          <Image
            src="/images/hero-jersey.png"
            alt="A folded heavyweight cotton tee in near-black on a slate surface"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <figcaption className="mt-3 text-[11px] uppercase tracking-[0.16em] text-muted">
          Concept visual / Heavyweight jersey
        </figcaption>
      </figure>
    </section>
  )
}
