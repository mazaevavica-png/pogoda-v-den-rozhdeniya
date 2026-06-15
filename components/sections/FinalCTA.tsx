'use client'

import { useState } from 'react'
import OrnamentDivider from '../ui/OrnamentDivider'

interface FinalCTAProps {
  onPreview?: (city: string, date: string) => void
}

export default function FinalCTA({ onPreview }: FinalCTAProps) {
  const [city, setCity] = useState('')
  const [date, setDate] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (city && date) {
      onPreview?.(city, date)
      document.getElementById('order')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #1C1810 0%, #2C2820 100%)' }}
    >
      {/* Ornamental background lines */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <svg width="600" height="600" viewBox="0 0 600 600" fill="none">
          <circle cx="300" cy="300" r="250" stroke="#B8922A" strokeWidth="1"/>
          <circle cx="300" cy="300" r="200" stroke="#B8922A" strokeWidth="0.5"/>
          <circle cx="300" cy="300" r="150" stroke="#B8922A" strokeWidth="1"/>
          <line x1="0" y1="300" x2="600" y2="300" stroke="#B8922A" strokeWidth="0.5"/>
          <line x1="300" y1="0" x2="300" y2="600" stroke="#B8922A" strokeWidth="0.5"/>
        </svg>
      </div>

      <div className="relative max-w-2xl mx-auto px-5 md:px-8 text-center">
        {/* Sun ornament */}
        <div className="flex justify-center mb-6">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="7" fill="#B8922A" opacity="0.6"/>
            {[0,30,60,90,120,150,180,210,240,270,300,330].map((angle, i) => (
              <line
                key={i}
                x1="20" y1="20"
                x2={20 + 17 * Math.cos((angle * Math.PI) / 180)}
                y2={20 + 17 * Math.sin((angle * Math.PI) / 180)}
                stroke="#B8922A"
                strokeWidth={i % 2 === 0 ? "1.5" : "0.75"}
                strokeLinecap="round"
                opacity="0.5"
              />
            ))}
          </svg>
        </div>

        <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#D4A843', fontFamily: 'Georgia, serif' }}>
          Оформите заявку
        </p>

        <h2
          className="text-3xl md:text-4xl font-bold mb-4 leading-snug"
          style={{ color: '#FAF6E8', fontFamily: 'Georgia, serif' }}
        >
          Ваша история уже ждёт,
          <span className="block italic" style={{ color: '#D4A843' }}>
            записанная в архивах
          </span>
        </h2>

        <OrnamentDivider color="gold" className="max-w-xs mx-auto mb-6" />

        <p
          className="text-base leading-relaxed mb-10"
          style={{ color: '#D8D4C8', fontFamily: 'Georgia, serif' }}
        >
          Укажите дату и город — мы вручную найдём архивные погодные данные,
          создадим персональный сертификат и отправим его в рамке.
        </p>

        {/* Repeat form */}
        <form
          onSubmit={handleSubmit}
          className="relative p-7 rounded-sm mb-8"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(184,146,42,0.3)',
          }}
        >
          <div
            className="absolute inset-[6px] pointer-events-none"
            style={{ border: '0.5px solid rgba(184,146,42,0.15)', borderRadius: '1px' }}
          />
          <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Введите город"
              required
              className="w-full h-11 px-3 text-sm"
              style={{
                background: 'rgba(250,246,232,0.08)',
                border: '1px solid rgba(184,146,42,0.3)',
                color: '#FAF6E8',
                fontFamily: 'Georgia, serif',
                borderRadius: '2px',
              }}
            />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min="1936-01-01"
              max={new Date().toISOString().split('T')[0]}
              required
              className="w-full h-11 px-3 text-sm"
              style={{
                background: 'rgba(250,246,232,0.08)',
                border: '1px solid rgba(184,146,42,0.3)',
                color: '#FAF6E8',
                fontFamily: 'Georgia, serif',
                borderRadius: '2px',
              }}
            />
          </div>
          <button
            type="submit"
            className="w-full h-12 text-sm tracking-archive uppercase rounded-sm transition-all duration-300 hover:brightness-110 hover:shadow-gold-glow"
            style={{
              background: 'linear-gradient(135deg, #D4A843 0%, #B8922A 50%, #D4A843 100%)',
              color: '#FAF6E8',
              fontFamily: 'Georgia, serif',
            }}
          >
            Заказать сертификат →
          </button>
        </form>

        <p className="text-xs italic" style={{ color: '#6A5830', fontFamily: 'Georgia, serif' }}>
          Данные из официальных метеоархивов · каждый сертификат создаётся вручную
        </p>
      </div>
    </section>
  )
}
