'use client'

interface CertificateCardProps {
  city?: string
  date?: string
  blurred?: boolean
  compact?: boolean
  data?: {
    tempMin: string
    tempMax: string
    wind: string
    humidity: string
    pressure: string
    precipitation: string
    clouds: string
    visibility: string
  }
}

const defaultData = {
  tempMin: '−9,3°C',
  tempMax: '+0,5°C',
  wind: '230° (юго-зап.), 1–5 м/с',
  humidity: '76%',
  pressure: '994,7 гПа',
  precipitation: '0 мм',
  clouds: '10 баллов (сплошные)',
  visibility: 'Дымка — 6 км',
}

export default function CertificateCard({
  city = 'Москва',
  date = '13 января 1989 года',
  blurred = false,
  compact = false,
  data = defaultData,
}: CertificateCardProps) {
  return (
    <div
      className={`relative bg-ivory-200 ${compact ? 'p-5' : 'p-6 md:p-8'} rounded-sm overflow-hidden`}
      style={{
        background: 'linear-gradient(145deg, #FAF6E8 0%, #F5EDD4 60%, #EDE0BE 100%)',
        boxShadow: '0 8px 48px rgba(28,24,16,0.18), 0 2px 8px rgba(28,24,16,0.10)',
      }}
    >
      {/* Paper texture overlay */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Outer border */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ border: '1.5px solid rgba(184,146,42,0.45)', borderRadius: '2px' }}
      />
      <div
        className="absolute inset-[6px] pointer-events-none"
        style={{ border: '0.75px solid rgba(184,146,42,0.25)', borderRadius: '1px' }}
      />

      {/* Corner ornaments */}
      {[
        'top-0 left-0',
        'top-0 right-0 rotate-90',
        'bottom-0 right-0 rotate-180',
        'bottom-0 left-0 -rotate-90',
      ].map((pos, i) => (
        <svg key={i} className={`absolute w-12 h-12 ${pos} pointer-events-none`} viewBox="0 0 48 48" fill="none">
          <path d="M2 24V2H24" stroke="#B8922A" strokeWidth="1" strokeLinecap="round" opacity="0.55" />
          <path d="M6 24V6H24" stroke="#B8922A" strokeWidth="0.5" strokeLinecap="round" opacity="0.3" />
          <circle cx="6" cy="6" r="2" fill="#B8922A" opacity="0.45" />
          <path d="M10 6H6V10" stroke="#B8922A" strokeWidth="0.75" strokeLinecap="round" opacity="0.35" />
          <circle cx="2" cy="2" r="1" fill="#B8922A" opacity="0.3" />
        </svg>
      ))}

      <div className={`relative z-10 ${blurred ? '' : ''}`}>
        {/* Header */}
        <div className="text-center mb-4">
          {/* Sun ornament */}
          <div className="flex justify-center mb-2">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="5" fill="#B8922A" opacity="0.7" />
              {[0,30,60,90,120,150,180,210,240,270,300,330].map((angle, i) => (
                <line
                  key={i}
                  x1="14" y1="14"
                  x2={14 + 11 * Math.cos((angle * Math.PI) / 180)}
                  y2={14 + 11 * Math.sin((angle * Math.PI) / 180)}
                  stroke="#B8922A"
                  strokeWidth={i % 2 === 0 ? "1.2" : "0.7"}
                  strokeLinecap="round"
                  opacity="0.6"
                />
              ))}
            </svg>
          </div>
          <p
            className="text-xs tracking-widest uppercase mb-1"
            style={{ color: '#7A5E16', fontFamily: 'Georgia, serif' }}
          >
            Погода в
          </p>
          <h1
            className={`${compact ? 'text-2xl' : 'text-3xl md:text-4xl'} font-bold tracking-wide uppercase`}
            style={{ color: '#1C1810', fontFamily: 'Georgia, serif', letterSpacing: '0.06em' }}
          >
            День Рождения
          </h1>
          {/* Date badge */}
          <div className="inline-flex items-center mt-3 px-5 py-1.5 border border-gold-500/50 rounded-sm">
            <span
              className="text-xs tracking-archive uppercase"
              style={{ color: '#2C2820', fontFamily: 'Georgia, serif' }}
            >
              {date}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex-1 h-px bg-gold-500/30" />
          <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
            <path d="M8 0.5L9.5 3.5L13 4L9.5 4.5L8 7.5L6.5 4.5L3 4L6.5 3.5L8 0.5Z" fill="#B8922A" opacity="0.6" />
          </svg>
          <div className="flex-1 h-px bg-gold-500/30" />
        </div>

        {/* Body */}
        <div className={`${compact ? 'grid grid-cols-1 gap-3' : 'grid grid-cols-1 md:grid-cols-2 gap-4'}`}>
          {/* Narrative text */}
          <div className={blurred ? 'blur-[3px] select-none' : ''}>
            <p className="text-xs leading-relaxed mb-3" style={{ color: '#4A4438', fontFamily: 'Georgia, serif' }}>
              То январское утро в {city} началось по всем законам зимы. Ночью над Центральной Россией господствовал
              гребень погожего антициклона, и к рассвету подморозило почти до климатической нормы — минимальная
              температура опустилась до{' '}
              <strong style={{ color: '#1C1810' }}>{data.tempMin}</strong>.
            </p>
            <p
              className="text-xs leading-relaxed italic mb-3"
              style={{ color: '#7A5E16', fontFamily: 'Georgia, serif' }}
            >
              Город стоял тихий, заснеженный и спокойный.
            </p>
            <p className="text-xs leading-relaxed" style={{ color: '#4A4438', fontFamily: 'Georgia, serif' }}>
              Но днём <em style={{ color: '#8B3A2A' }}>погода резко изменила настроение</em>. По региону скользнул
              тёплый атмосферный фронт и установился западно-восточный перенос влажных воздушных масс. Максимальный
              термометр показал <strong style={{ color: '#1C1810' }}>{data.tempMax}</strong> при климатической норме
              −6,3°C.
            </p>
          </div>

          {/* Data panel */}
          <div className={blurred ? 'blur-[3px] select-none' : ''}>
            {[
              { icon: '🌡', label: 'Мин. температура (ночь)', value: data.tempMin },
              { icon: '🌡', label: 'Макс. температура (день)', value: data.tempMax },
              { icon: '☁', label: 'Облачность', value: data.clouds },
              { icon: '💧', label: 'Осадки', value: data.precipitation },
              { icon: '👁', label: 'Видимость', value: data.visibility },
              { icon: '💨', label: 'Ветер', value: data.wind },
              { icon: '💧', label: 'Влажность воздуха', value: data.humidity },
              { icon: '⊕', label: 'Давление', value: data.pressure },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 mb-1.5">
                <span className="text-xs mt-0.5 flex-shrink-0">{item.icon}</span>
                <div className="flex-1 min-w-0">
                  <p
                    className="text-[9px] tracking-wide uppercase"
                    style={{ color: '#7A5E16', fontFamily: 'Georgia, serif' }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-xs font-medium"
                    style={{ color: '#1C1810', fontFamily: 'Georgia, serif' }}
                  >
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing line */}
        <div className={`mt-4 pt-4 border-t border-gold-500/20 text-center ${blurred ? 'blur-[3px] select-none' : ''}`}>
          <p
            className="text-xs italic leading-relaxed"
            style={{ color: '#7A5E16', fontFamily: 'Georgia, serif' }}
          >
            Именно в этот необычный день — между морозом и оттепелью, между тишиной зимы и дыханием
            приближающейся весны — началась Ваша история.
          </p>
          <div className="flex items-center justify-center gap-3 mt-3">
            <div className="h-px w-12 bg-gold-500/30" />
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 0.5C6 0.5 6.5 4 10 5C10 5 6.5 6 6 9.5C6 9.5 5.5 6 2 5C2 5 5.5 4 6 0.5Z" fill="#B8922A" opacity="0.5" />
            </svg>
            <div className="h-px w-12 bg-gold-500/30" />
          </div>
          <div className="flex items-center justify-center gap-2 mt-3">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="7" stroke="#B8922A" strokeWidth="0.75" opacity="0.5" />
              <path d="M5 9C5 9 6 7 9 7C12 7 13 9 13 9C13 9 12 11 9 11C6 11 5 9 5 9Z" stroke="#B8922A" strokeWidth="0.5" opacity="0.5" />
              <path d="M9 5V7M9 11V13M5 9H3M15 9H13" stroke="#B8922A" strokeWidth="0.5" strokeLinecap="round" opacity="0.5" />
            </svg>
            <div>
              <p className="text-[9px] tracking-widest uppercase" style={{ color: '#7A5E16' }}>
                Часовой Погоды
              </p>
              <p className="text-[8px] tracking-wider" style={{ color: '#8B6948' }}>
                Точность в каждом моменте
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Blur overlay for preview gate */}
      {blurred && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center"
          style={{ background: 'rgba(250,246,232,0.55)', backdropFilter: 'blur(2px)' }}>
          <div
            className="text-center px-6 py-6 rounded-sm"
            style={{ background: 'rgba(250,246,232,0.92)', border: '1px solid rgba(184,146,42,0.35)' }}
          >
            <div className="text-3xl mb-2">🔒</div>
            <p className="text-sm font-medium mb-1" style={{ color: '#1C1810', fontFamily: 'Georgia, serif' }}>
              Ваш сертификат готов
            </p>
            <p className="text-xs" style={{ color: '#7A5E16', fontFamily: 'Georgia, serif' }}>
              Откройте полную версию
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
