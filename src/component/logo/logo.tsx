import type { SVGProps } from "react";

export interface MustakshifLogoProps extends SVGProps<SVGSVGElement> {
  /** Main brand color (mountains, Arabic wordmark, baseline). Default: #087a4b */
  primaryColor?: string;
  /** Accent brand color (ring, sun, tagline, back ridge). Default: #d6a996 */
  secondaryColor?: string;
}

export default function MustakshifLogo({
  primaryColor = "#087a4b",
  secondaryColor = "#d6a996",
  width,
  height,
  ...props
}: MustakshifLogoProps) {
  const gradientId = "mustakshifPeakGrad";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="30 0 715 240"
      width={width}
      height={height}
      role="img"
      aria-label="مستكشف - Mustakshif"
      {...props}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#065c39" />
          <stop offset="1" stopColor="#0a9a5f" />
        </linearGradient>
      </defs>

      {/* ===================== ICON — emblem badge ===================== */}
      <g transform="translate(540,20)">
        {/* outer decorative ring */}
        <circle cx="100" cy="100" r="96" fill="none" stroke={secondaryColor} strokeWidth={3} />
        <circle cx="100" cy="100" r="86" fill="none" stroke={secondaryColor} strokeWidth={1.5} opacity={0.6} />

        {/* small orbit dots for a premium, finished frame */}
        <circle cx="100" cy="4" r="4" fill={secondaryColor} />
        <circle cx="100" cy="196" r="4" fill={secondaryColor} />
        <circle cx="4" cy="100" r="4" fill={secondaryColor} />
        <circle cx="196" cy="100" r="4" fill={secondaryColor} />

        {/* sun with rays, top right */}
        <g transform="translate(132,58)">
          <circle r="16" fill={secondaryColor} />
          <g stroke={secondaryColor} strokeWidth={4} strokeLinecap="round">
            <line x1="0" y1="-26" x2="0" y2="-34" />
            <line x1="18" y1="-18" x2="24" y2="-24" />
            <line x1="26" y1="0" x2="34" y2="0" />
            <line x1="-18" y1="-18" x2="-24" y2="-24" />
          </g>
        </g>

        {/* layered mountain range: back ridge */}
        <path
          fill={secondaryColor}
          opacity={0.55}
          d="M18,150 L58,104 L84,128 L100,112 L120,132 L150,100 L182,150 Z"
        />

        {/* front ridge, bold gradient peaks */}
        <path fill={`url(#${gradientId})`} d="M28,152 L64,96 L88,122 L108,90 L134,122 L172,152 Z" />

        {/* snow / highlight caps */}
        <path fill="#ffffff" d="M64,96 L72,106 L58,110 Z" />
        <path fill="#ffffff" d="M108,90 L118,102 L100,106 Z" />

        {/* ascending path / trail dots climbing the front peak */}
        <g fill="#ffffff">
          <circle cx="44" cy="140" r="2.6" />
          <circle cx="54" cy="126" r="2.6" />
          <circle cx="64" cy="112" r="2.6" />
          <circle cx="74" cy="100" r="2.6" />
        </g>

        {/* baseline / horizon */}
        <path d="M20,152 L180,152" stroke={primaryColor} strokeWidth={3} strokeLinecap="round" />
      </g>

      {/* ===================== ARABIC WORDMARK ===================== */}
      <text
        x="450"
        y="112"
        direction="rtl"
        textAnchor="start"
        fontFamily="Tahoma, 'Segoe UI', 'Noto Sans Arabic', Arial, sans-serif"
        fontSize={68}
        fontWeight={700}
        fill={primaryColor}
      >
        مستكشف
      </text>

      {/* decorative divider */}
      <g transform="translate(450,128)">
        <line x1="-220" y1="0" x2="0" y2="0" stroke={secondaryColor} strokeWidth={2.5} />
        <circle cx="-220" cy="0" r="4" fill={secondaryColor} />
      </g>

      {/* Tagline */}
      <text
        x="450"
        y="164"
        direction="rtl"
        textAnchor="start"
        fontFamily="Tahoma, 'Segoe UI', 'Noto Sans Arabic', Arial, sans-serif"
        fontSize={22}
        fontWeight={600}
        fill={secondaryColor}
      >
        تقدّم .. مغامرة .. رفاهية
      </text>
    </svg>
  );
}