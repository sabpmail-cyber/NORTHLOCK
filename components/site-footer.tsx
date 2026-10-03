export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-14">
        <div>
          <p className="text-3xl font-bold tracking-[0.22em] md:text-5xl">NORTHLOCK</p>
          <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.24em] text-muted">
            Clothes &amp; Essential Objects
          </p>
        </div>

        <div className="flex flex-col gap-4 border-t border-border pt-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p className="uppercase tracking-[0.18em]">
            <span className="text-foreground">NORTHLOCK</span>
            <span className="mx-2" aria-hidden="true">
              |
            </span>
            FERRIC
            <span className="mx-2" aria-hidden="true">
              |
            </span>
            MERCERDIGITAL
          </p>
          <p>A MERCER business</p>
        </div>
      </div>
    </footer>
  )
}
