import type { TeeArtwork } from "@/lib/collection"

type MarkProps = { className?: string; barColor?: string; bridgeColor?: string }

export function GateMark({ className, barColor = "currentColor", bridgeColor = "#7D6945" }: MarkProps) {
  return (
    <svg viewBox="0 0 180 108" className={className} aria-hidden="true" focusable="false">
      <g fill={barColor}>
        <rect x="0" y="0" width="180" height="18" />
        <rect x="0" y="30" width="180" height="18" />
        <rect x="0" y="60" width="83" height="18" />
        <rect x="97" y="60" width="83" height="18" />
        <rect x="0" y="90" width="180" height="18" />
      </g>
      <rect x="88" y="60" width="4" height="18" fill={bridgeColor} />
    </svg>
  )
}

const tenLinesOpenings = [8, 62, 30, 84, 46, 18, 72, 38, 92, 54]

export function TenLinesMark({ className, barColor = "#565B59", bridgeColor = "#7D6945" }: MarkProps) {
  return (
    <svg viewBox="0 0 285 345" className={className} aria-hidden="true" focusable="false">
      {tenLinesOpenings.map((opening, i) => {
        const inset = 4 + i * 13
        const width = 285 - inset * 2
        const height = 345 - inset * 2
        const rx = Math.max(10, 70 - i * 6)
        return (
          <g key={i}>
            <rect
              x={inset}
              y={inset}
              width={width}
              height={height}
              rx={rx}
              fill="none"
              stroke={barColor}
              strokeWidth="2.4"
              pathLength={100}
              strokeDasharray="95 5"
              strokeDashoffset={-opening}
            />
            {i === 6 && (
              <rect
                x={inset}
                y={inset}
                width={width}
                height={height}
                rx={rx}
                fill="none"
                stroke={bridgeColor}
                strokeWidth="2.4"
                pathLength={100}
                strokeDasharray="3 97"
                strokeDashoffset={-28}
              />
            )}
          </g>
        )
      })}
    </svg>
  )
}

function AssemblyMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 245 185" className={className} aria-hidden="true" focusable="false">
      <g fill="none" stroke="#111212" strokeWidth="1.4" strokeLinejoin="round">
        <path d="M92 22 L60 30 L28 58 L44 80 L64 68 L64 168 L181 168 L181 68 L201 80 L217 58 L185 30 L153 22 C146 36 99 36 92 22 Z" />
        <path d="M96 23 C104 33 141 33 149 23" />
        <path d="M64 160 L181 160" />
        <path d="M64 163 L181 163" />
      </g>
      <g stroke="#111212" strokeWidth="0.8">
        <line x1="122" y1="32" x2="122" y2="8" />
        <line x1="74" y1="26" x2="40" y2="12" />
        <line x1="181" y1="110" x2="200" y2="110" />
        <line x1="122" y1="162" x2="122" y2="178" />
      </g>
      <g fill="#111212" fontFamily="var(--font-inter)" fontWeight="500" fontSize="7" letterSpacing="0.6">
        <text x="127" y="10">RIB</text>
        <text x="16" y="10">TAPE</text>
        <text x="186" y="104">SIDE SEAM</text>
        <text x="128" y="181">DOUBLE-NEEDLE HEM</text>
      </g>
    </svg>
  )
}

function IndexMark() {
  const rows = ["FIRST FORMS", "FORM · MATERIAL · PROCESS", "CLOTHES & ESSENTIAL OBJECTS"]
  return (
    <div className="w-[64%] border border-north-black text-north-black" aria-hidden="true">
      <div className="border-b border-north-black px-2 py-2 text-[13px] font-bold tracking-[0.18em]">NORTHLOCK</div>
      {rows.map((row) => (
        <div
          key={row}
          className="border-b border-north-black px-2 py-1.5 text-[8px] font-medium tracking-[0.12em] last:border-b-0"
        >
          {row}
        </div>
      ))}
    </div>
  )
}

export function TeeArtworkField({ slug, background }: { slug: TeeArtwork; background: string }) {
  return (
    <div
      className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden border border-border"
      style={{ backgroundColor: background }}
    >
      {slug === "outline" && (
        <span
          className="text-[clamp(1.6rem,8vw,2.6rem)] font-normal tracking-[0.2em] text-graphite"
          aria-hidden="true"
        >
          NORTHLOCK
        </span>
      )}
      {slug === "index" && (
        <div className="flex h-full w-full items-end justify-start p-[10%]">
          <IndexMark />
        </div>
      )}
      {slug === "gate" && <GateMark className="w-[58%]" barColor="#111212" />}
      {slug === "assembly" && <AssemblyMark className="w-[90%]" />}
      {slug === "ten-lines" && <TenLinesMark className="h-[78%]" />}
    </div>
  )
}
