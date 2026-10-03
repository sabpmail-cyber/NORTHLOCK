import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NORTHLOCK — Clothes & Essential Objects",
    short_name: "NORTHLOCK",
    description: "NORTHLOCK menswear. FIRST FORMS collection.",
    start_url: "/",
    display: "standalone",
    background_color: "#111212",
    theme_color: "#111212",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  }
}
