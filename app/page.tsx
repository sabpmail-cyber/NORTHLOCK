import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { TeesSection } from "@/components/tees-section"
import { CollectionSection } from "@/components/collection-section"
import { SystemSection } from "@/components/system-section"
import { PaletteSection } from "@/components/palette-section"
import { SequenceSection } from "@/components/sequence-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TeesSection />
        <CollectionSection />
        <SystemSection />
        <PaletteSection />
        <SequenceSection />
      </main>
      <SiteFooter />
    </>
  )
}
