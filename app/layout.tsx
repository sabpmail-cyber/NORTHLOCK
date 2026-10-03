import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000",
  ),
  title: "NORTHLOCK — Clothes & Essential Objects",
  description:
    "NORTHLOCK menswear. FIRST FORMS: ten garments built to establish the brand through weight, line, join and restraint.",
  applicationName: "NORTHLOCK",
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "NORTHLOCK — FIRST FORMS",
    description: "Ten garments built through weight, line, join and restraint.",
    images: ["/images/hero-jersey.png"],
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#111212",
  colorScheme: "dark",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
