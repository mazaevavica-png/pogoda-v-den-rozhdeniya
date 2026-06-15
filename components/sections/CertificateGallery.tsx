'use client'

import { useState } from 'react'
import OrnamentDivider from '../ui/OrnamentDivider'
import { GALLERY_ITEMS } from '@/lib/constants'

const SEASON_COLORS = {
  'Зима':  { bg: 'linear-gradient(145deg, #E8F0F8, #D0E0F0)', accent: '#4A7080', text: '#1C2E3E' },
  'Весна': { bg: 'linear-gradient(145deg, #F0F8E8, #D8ECC8)', accent: '#4A6040', text: '#1C2E1C' },
  'Лето':  { bg: 'linear-gradient(145deg, #F8F0D8, #F0E0A8)', accent: '#806040', text: '#2E1C00' },
  'Осень': { bg: 'linear-gradient(145deg, #F8ECD8, #E8D0A8)', accent: '#7A5020', text: '#2E1800' },
}

export default function CertificateGallery() {
  const [active, setActive] = useState(0)
  const item = GALLERY_ITEMS[active]
  const colors = SEASON_COLORS[item.season as keyof typeof SEASON_COLORS]

  return (
    <section
      id="gallery"
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FAF6E8 0%, #F5EDD4 100%)' }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest uppercase mb-3" style={{ color: '#B8922A', fontFamily: 'Georgia, serif' }}>
            Примеры сертификатов
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1C1810', fontFamily: 'Georgia, serif' }}>
            Каждый день — своя история
          </h2>
          <OrnamentDivider className="max-w-xs mx-auto" />
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {GALLERY_ITEMS.map((g, i) => (
            <button
              key={g.id}
              onClick={() => setActive(i)}
              className="px-4 py-2 text-xs tracking-archive uppercase rounded-sm transition-all duration-300"
              style={
                active === i
                  ? {
                      background: 'linear-gradient(135deg, #D4A843 0%, #B8922A 100%)',
                      color: '#FAF6E8',
                      fontFamily: 'Georgia, serif',
                    }
                  : {
                      background: 'transparent',
                      border: '1px solid rgba(184,146,42,0.35)',
                      color: '#7A5E16',
                      fontFamily: 'Georgia, serif',
                    }
              }
            >
              {g.city} · {g.season}
            </button>
          ))}
        </div>

        {/* Main display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Certificate mock */}
          <div
            className="relative p-6 md:p-8 rounded-sm transition-all duration-700"
            style={{
              background: item.season === 'Зима'
                ? 'linear-gradient(145deg, #F0F6FA 0%, #E8F0F5 100%)'
                : item.season === 'Лето'
                ? 'linear-gradient(145deg, #FBF6E8 0%, #F5EDD0 100%)'
                : 'linear-gradient(145deg, #FAF6E8 0%, #F5EDD4 100%)',
              boxShadow: '0 8px 48px rgba(28,24,16,0.15)',
              border: '1.5px solid rgba(184,146,42,0.45)',
            }}
          >
            {/* Corner ornaments */}
            {['top-0 left-0','top-0 right-0 rotate-90','bottom-0 right-0 rotate-180','bottom-0 left-0 -rotate-90'].map((pos, i) => (
              <svg key={i} className={`absolute w-10 h-10 ${pos} pointer-events-none`} viewBox="0 0 40 40" fill="none">
                <path d="M2 20V2H20" stroke="#B8922A" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
                <circle cx="5" cy="5" r="1.5" fill="#B8922A" opacity="0.4" />
              </svg>
            ))}

            <div className="relative">
              {/* Header */}
              <div className="text-center mb-4">
                <p className="text-[9px] tracking-widest uppercase mb-1" style={{ color: '#7A5E16', fontFamily: 'Georgia, serif' }}>Погода в</p>
                <h3 className="text-2xl font-bold tracking-wide uppercase" style={{ color: '#1C1810', fontFamily: 'Georgia, serif' }}>День Рождения</h3>
                <div className="inline-flex items-center mt-2 px-4 py-1 border border-gold-500/40 rounded-sm">
                  <span className="text-xs" style={{ color: '#2C2820', fontFamily: 'Georgia, serif' }}>{item.date}</span>
                </div>
              </div>

              <div className="h-px bg-gold-500/30 mb-4" />

              {/* Illustrated placeholder */}
              <div
                className="w-full rounded-sm mb-4 flex items-center justify-center"
                style={{
                  background: colors.bg,
                  height: '120px',
                  border: '1px solid rgba(184,146,42,0.2)',
                }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-2">
                    {item.season === 'Зима' ? '❄️' : item.season === 'Весна' ? '🌸' : item.season === 'Лето' ? '☀️' : '🍂'}
                  </div>
                  <p className="text-xs italic" style={{ color: colors.accent, fontFamily: 'Georgia, serif' }}>
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Data rows */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                {[
                  { label: 'Температура', value: item.temp },
                  { label: 'Погода', value: item.weather },
                  { label: 'Город', value: item.city },
                  { label: 'Сезон', value: item.season },
                ].map((row, i) => (
                  <div key={i}>
                    <p className="text-[9px] uppercase tracking-wide" style={{ color: '#7A5E16', fontFamily: 'Georgia, serif' }}>{row.label}</p>
                    <p className="text-xs font-medium" style={{ color: '#1C1810', fontFamily: 'Georgia, serif' }}>{row.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-gold-500/20">
                <p className="text-xs italic text-center" style={{ color: '#7A5E16', fontFamily: 'Georgia, serif' }}>
                  Именно в этот день началась Ваша история.
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span
                className="text-[10px] tracking-widest uppercase px-3 py-1 rounded-sm"
                style={{
                  background: colors.bg,
                  color: colors.accent,
                  fontFamily: 'Georgia, serif',
                  border: `1px solid ${colors.accent}30`,
                }}
              >
                {item.season}
              </span>
            </div>
            <h3
              className="text-2xl font-bold mb-2"
              style={{ color: '#1C1810', fontFamily: 'Georgia, serif' }}
            >
              {item.city}
            </h3>
            <p
              className="text-sm tracking-wide mb-4"
              style={{ color: '#7A5E16', fontFamily: 'Georgia, serif' }}
            >
              {item.date}
            </p>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: '#4A4438', fontFamily: 'Georgia, serif' }}
            >
              {item.description} Температура воздуха составила {item.temp}. Именно таким выдался
              этот особенный день, который стал отправной точкой чьей-то истории.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="p-3 rounded-sm" style={{ background: 'rgba(250,246,232,0.8)', border: '1px solid rgba(184,146,42,0.2)' }}>
                <p className="text-[9px] uppercase tracking-wide mb-1" style={{ color: '#7A5E16' }}>Температура</p>
                <p className="text-sm font-bold" style={{ color: '#1C1810', fontFamily: 'Georgia, serif' }}>{item.temp}</p>
              </div>
              <div className="p-3 rounded-sm" style={{ background: 'rgba(250,246,232,0.8)', border: '1px solid rgba(184,146,42,0.2)' }}>
                <p className="text-[9px] uppercase tracking-wide mb-1" style={{ color: '#7A5E16' }}>Явление</p>
                <p className="text-sm font-bold" style={{ color: '#1C1810', fontFamily: 'Georgia, serif' }}>{item.weather}</p>
              </div>
            </div>

            <a
              href="#order"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm tracking-archive uppercase rounded-sm transition-all duration-300 hover:brightness-105 hover:shadow-gold-glow"
              style={{
                background: 'linear-gradient(135deg, #D4A843 0%, #B8922A 100%)',
                color: '#FAF6E8',
                fontFamily: 'Georgia, serif',
              }}
            >
              Создать свой сертификат →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
