// KPL Lion logo — extracted from handbook, rendered as SVG component
export default function KPLLion({ size = 80, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer glow ring */}
      <circle cx="100" cy="100" r="96" stroke="#F0A500" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />

      {/* Lion silhouette — simplified geometric version */}
      {/* Mane */}
      <ellipse cx="100" cy="108" rx="52" ry="58" fill="#1B2A4A" />
      <ellipse cx="100" cy="108" rx="44" ry="50" fill="#F0A500" opacity="0.15" />

      {/* Mane flame shapes */}
      <path d="M60 80 Q50 60 65 45 Q62 65 75 72Z" fill="#F0A500" opacity="0.7" />
      <path d="M140 80 Q150 60 135 45 Q138 65 125 72Z" fill="#F0A500" opacity="0.7" />
      <path d="M72 65 Q65 40 80 30 Q78 52 90 60Z" fill="#F0A500" opacity="0.8" />
      <path d="M128 65 Q135 40 120 30 Q122 52 110 60Z" fill="#F0A500" opacity="0.8" />
      <path d="M88 58 Q85 32 100 22 Q115 32 112 58Z" fill="#F0A500" opacity="0.9" />

      {/* Face base */}
      <ellipse cx="100" cy="105" rx="35" ry="38" fill="#E8C47A" />

      {/* Forehead / top of head */}
      <ellipse cx="100" cy="82" rx="28" ry="20" fill="#D4A855" />

      {/* Eyes */}
      <ellipse cx="88" cy="97" rx="6" ry="5" fill="#1B2A4A" />
      <ellipse cx="112" cy="97" rx="6" ry="5" fill="#1B2A4A" />
      <circle cx="90" cy="96" r="2" fill="#F0A500" />
      <circle cx="114" cy="96" r="2" fill="#F0A500" />

      {/* Nose */}
      <path d="M95 108 Q100 112 105 108 Q100 106 95 108Z" fill="#8B5A2B" />

      {/* Mouth */}
      <path d="M92 115 Q100 122 108 115" stroke="#8B5A2B" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Ears */}
      <path d="M72 75 Q68 58 80 55 Q82 68 78 78Z" fill="#E8C47A" />
      <path d="M128 75 Q132 58 120 55 Q118 68 122 78Z" fill="#E8C47A" />

      {/* Chin / lower face */}
      <ellipse cx="100" cy="128" rx="22" ry="14" fill="#E8C47A" />

      {/* Whisker dots */}
      <circle cx="80" cy="113" r="1.5" fill="#8B5A2B" opacity="0.6" />
      <circle cx="75" cy="116" r="1.5" fill="#8B5A2B" opacity="0.6" />
      <circle cx="120" cy="113" r="1.5" fill="#8B5A2B" opacity="0.6" />
      <circle cx="125" cy="116" r="1.5" fill="#8B5A2B" opacity="0.6" />
    </svg>
  )
}
