export type TeeArtwork = "outline" | "index" | "gate" | "assembly" | "ten-lines"

export type Tee = {
  slug: TeeArtwork
  name: string
  role: string
  garmentColour: { name: string; hex: string }
  inks: { name: string; hex: string }[]
  material: string
  placement: string
  meaning: string
  firstRelease?: boolean
}

export const tees: Tee[] = [
  {
    slug: "outline",
    name: "OUTLINE",
    role: "Brand name artwork",
    garmentColour: { name: "North Black", hex: "#111212" },
    inks: [{ name: "Graphite", hex: "#2B2C2C" }],
    material: "280 GSM carded-cotton jersey",
    placement: "Back centre. Front blank.",
    meaning:
      "The NORTHLOCK letters as featured artwork, printed tonal on the back so the front stays calm.",
  },
  {
    slug: "index",
    name: "INDEX",
    role: "Catalogue system",
    garmentColour: { name: "Ecru", hex: "#D6CBB8" },
    inks: [{ name: "North Black", hex: "#111212" }],
    material: "280 GSM carded-cotton jersey",
    placement: "Lower front, wearer-left. Back blank.",
    meaning:
      "An open grid that records the brand, the collection, its three priorities and the descriptor. Order, not ornament.",
  },
  {
    slug: "gate",
    name: "GATE",
    role: "Secondary symbol",
    garmentColour: { name: "Graphite", hex: "#2B2C2C" },
    inks: [
      { name: "North Black", hex: "#111212" },
      { name: "Lock Bronze", hex: "#7D6945" },
    ],
    material: "300 GSM compact-cotton jersey",
    placement: "Back centre. Front blank.",
    meaning:
      "Four structural bands, interrupted once and joined by a small bronze bridge. Strength through the act of joining.",
    firstRelease: true,
  },
  {
    slug: "assembly",
    name: "ASSEMBLY",
    role: "Construction drawing",
    garmentColour: { name: "Mineral", hex: "#E8E4DB" },
    inks: [{ name: "North Black", hex: "#111212" }],
    material: "260 GSM combed-cotton jersey",
    placement: "Front centre. Back blank.",
    meaning:
      "A section drawing of the rib neck, shoulder tape, side seam and double-needle hem. Construction is the subject.",
  },
  {
    slug: "ten-lines",
    name: "TEN LINES",
    role: "Collection hero",
    garmentColour: { name: "Deep Navy", hex: "#111A24" },
    inks: [
      { name: "Slate", hex: "#565B59" },
      { name: "Lock Bronze", hex: "#7D6945" },
    ],
    material: "280 GSM carded-cotton jersey",
    placement: "Back centre. Front blank.",
    meaning:
      "Ten open enclosures for the ten garments in one collection. A single bronze segment on line seven holds the structure.",
    firstRelease: true,
  },
]

export type Garment = {
  name: string
  category: "Woven" | "Knit" | "Jacket"
  role: string
  material: string
  colours: string
  detail: string
  stage: 2 | 3
}

export const garments: Garment[] = [
  {
    name: "High-Twist Shirt",
    category: "Woven",
    role: "Refined core shirt",
    material: "170 GSM high-twist cotton poplin",
    colours: "Bone / North Black",
    detail:
      "Concealed placket, a pocket hidden in the front seam, and one bronze bartack inside the left cuff placket.",
    stage: 2,
  },
  {
    name: "Compact Twill Overshirt",
    category: "Woven",
    role: "Layering utility",
    material: "320 GSM compact cotton twill",
    colours: "Boreal / North Black",
    detail:
      "Concealed side-entry chest pocket and hidden hand pockets. A bronze bartack reinforces the chest entry.",
    stage: 3,
  },
  {
    name: "Saddle Crew",
    category: "Knit",
    role: "Warm substantial layer",
    material: "5-gauge lambswool, half-cardigan stitch",
    colours: "Charcoal / Ecru",
    detail:
      "Fully-fashioned saddle shoulder. A knit-in four-line bar at the hem, its third line interrupted by one bronze yarn segment.",
    stage: 3,
  },
  {
    name: "Milano Zip Knit",
    category: "Knit",
    role: "Clean modular mid-layer",
    material: "7-gauge merino / cotton Milano",
    colours: "Deep Navy / North Black",
    detail:
      "Stand collar that folds once, two-way gunmetal zipper, and a concealed bronze tack at the lower stop.",
    stage: 3,
  },
  {
    name: "Frame Jacket",
    category: "Jacket",
    role: "Flagship outer layer",
    material: "Dry-wax cotton shell",
    colours: "North Black / Boreal",
    detail:
      "Hip-length box with two welt pockets. The wearer-left panel seam stops short and is bridged by one bronze bartack.",
    stage: 2,
  },
]

export const palette = [
  { name: "North Black", hex: "#111212" },
  { name: "Washed Black", hex: "#242626" },
  { name: "Graphite", hex: "#2B2C2C" },
  { name: "Slate", hex: "#565B59" },
  { name: "Mineral", hex: "#E8E4DB" },
  { name: "Ecru", hex: "#D6CBB8" },
  { name: "Deep Navy", hex: "#111A24" },
  { name: "Boreal", hex: "#18241F" },
  { name: "Lock Bronze", hex: "#7D6945" },
]

export const systems = [
  {
    number: "01",
    title: "Weight",
    body: "Dense jersey, compact twill, substantial knit and a dry-wax shell. Material must read before decoration.",
  },
  {
    number: "02",
    title: "Enclosure",
    body: "Straight, controlled silhouettes with room to layer. Volume is deliberate, never exaggerated.",
  },
  {
    number: "03",
    title: "Lock Line",
    body: "A useful seam, opening or knit line is interrupted and resolved by a short bronze reinforcement. Never added without function.",
  },
  {
    number: "04",
    title: "Record",
    body: "Each garment carries its artwork title as its name. Every approved form is documented, worn and kept.",
  },
]
