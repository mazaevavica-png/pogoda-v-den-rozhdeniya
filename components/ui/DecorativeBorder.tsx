'use client'

interface DecorativeBorderProps {
  children: React.ReactNode
  className?: string
  variant?: 'certificate' | 'section' | 'card' | 'stamp'
}

export default function DecorativeBorder({
  children,
  className = '',
  variant = 'certificate',
}: DecorativeBorderProps) {
  if (variant === 'stamp') {
    return (
      <div className={`relative inline-block ${className}`}>
        <div className="absolute inset-0 border border-gold-500/40 rounded" />
        <div className="absolute inset-1 border border-gold-500/20 rounded" />
        {children}
      </div>
    )
  }

  if (variant === 'card') {
    return (
      <div className={`relative ${className}`}>
        <div className="absolute inset-0 border border-gold-500/30 rounded" />
        {/* Corner accents */}
        <svg className="absolute top-0 left-0 w-5 h-5" viewBox="0 0 20 20" fill="none">
          <path d="M1 10V1H10" stroke="#B8922A" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <svg className="absolute top-0 right-0 w-5 h-5" viewBox="0 0 20 20" fill="none">
          <path d="M19 10V1H10" stroke="#B8922A" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <svg className="absolute bottom-0 left-0 w-5 h-5" viewBox="0 0 20 20" fill="none">
          <path d="M1 10V19H10" stroke="#B8922A" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <svg className="absolute bottom-0 right-0 w-5 h-5" viewBox="0 0 20 20" fill="none">
          <path d="M19 10V19H10" stroke="#B8922A" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        {children}
      </div>
    )
  }

  if (variant === 'section') {
    return (
      <div className={`relative ${className}`}>
        <div
          className="absolute inset-0 rounded-sm"
          style={{
            background: 'transparent',
            boxShadow: 'inset 0 0 0 1px rgba(184,146,42,0.25)',
          }}
        />
        {children}
      </div>
    )
  }

  // Certificate variant — ornate double border
  return (
    <div className={`relative ${className}`}>
      {/* Outer border */}
      <div
        className="absolute inset-0"
        style={{
          border: '1.5px solid rgba(184,146,42,0.5)',
          borderRadius: '2px',
        }}
      />
      {/* Inner border */}
      <div
        className="absolute inset-[6px]"
        style={{
          border: '0.75px solid rgba(184,146,42,0.3)',
          borderRadius: '1px',
        }}
      />
      {/* Corner ornaments */}
      {['top-0 left-0', 'top-0 right-0 rotate-90', 'bottom-0 right-0 rotate-180', 'bottom-0 left-0 -rotate-90'].map(
        (pos, i) => (
          <svg
            key={i}
            className={`absolute w-10 h-10 ${pos}`}
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M2 20V2H20"
              stroke="#B8922A"
              strokeWidth="1"
              strokeLinecap="round"
              opacity="0.6"
            />
            <path
              d="M5 20V5H20"
              stroke="#B8922A"
              strokeWidth="0.5"
              strokeLinecap="round"
              opacity="0.4"
            />
            <circle cx="5" cy="5" r="1.5" fill="#B8922A" opacity="0.5" />
            <path
              d="M8 5H5V8"
              stroke="#B8922A"
              strokeWidth="0.75"
              strokeLinecap="round"
              opacity="0.4"
            />
          </svg>
        )
      )}
      {children}
    </div>
  )
}
