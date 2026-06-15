'use client'

interface OrnamentDividerProps {
  className?: string
  variant?: 'full' | 'short' | 'simple'
  color?: 'gold' | 'sepia'
}

export default function OrnamentDivider({
  className = '',
  variant = 'full',
  color = 'gold',
}: OrnamentDividerProps) {
  const c = color === 'gold' ? '#B8922A' : '#8B6948'

  if (variant === 'simple') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, transparent, ${c})` }} />
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M7 0L8.5 5.5L14 7L8.5 8.5L7 14L5.5 8.5L0 7L5.5 5.5L7 0Z" fill={c} />
        </svg>
        <div className="flex-1 h-px" style={{ background: `linear-gradient(to left, transparent, ${c})` }} />
      </div>
    )
  }

  if (variant === 'short') {
    return (
      <div className={`flex items-center justify-center gap-2 ${className}`}>
        <div className="w-8 h-px" style={{ background: c }} />
        <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
          <path d="M10 1L11.5 4.5L15 5L11.5 5.5L10 9L8.5 5.5L5 5L8.5 4.5L10 1Z" fill={c} opacity=".9" />
          <path d="M1 5H5M15 5H19" stroke={c} strokeWidth="0.75" />
        </svg>
        <div className="w-8 h-px" style={{ background: c }} />
      </div>
    )
  }

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div className="absolute inset-0 flex items-center">
        <div className="w-full h-px" style={{ background: `linear-gradient(to right, transparent, ${c}60, ${c}, ${c}60, transparent)` }} />
      </div>
      <div className="relative flex items-center gap-2 px-4 bg-transparent">
        <svg width="40" height="16" viewBox="0 0 40 16" fill="none">
          <path d="M20 2L22 7L27 8L22 9L20 14L18 9L13 8L18 7L20 2Z" fill={c} />
          <path d="M1 8H12M28 8H39" stroke={c} strokeWidth="0.75" />
          <circle cx="5" cy="8" r="1.5" fill={c} opacity=".5" />
          <circle cx="35" cy="8" r="1.5" fill={c} opacity=".5" />
        </svg>
      </div>
    </div>
  )
}
