'use client'

import { useState } from 'react'
import OrnamentDivider from '../ui/OrnamentDivider'
import CertificateCard from '../ui/CertificateCard'

interface HeroProps {
  onPreview?: (city: string, date: string) => void
}

export default function Hero({ onPreview }: HeroProps) {
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
      className="relative min-h-[70vh] lg:h-svh lg:max-h-[900px] flex flex-col pt-20 lg:pt-[4.5rem] pb-6 lg:pb-4 overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #FAF6E8 0%, #F5EDD4 40%, #EDE0BE 100%)',
      }}
    >
      {/* Background paper texture */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Subtle vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 50%, rgba(184,146,42,0.04) 100%)',
        }}
      />

      <div className="relative flex-1 flex flex-col justify-center max-w-7xl mx-auto px-5 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">

          {/* Left — text + form */}
          <div className="text-center lg:text-left">
            {/* Archive badge */}
            <div className="inline-flex items-center gap-2 mb-4 lg:mb-3">
              <div className="h-px w-8" style={{ background: '#B8922A' }} />
              <span
                className="text-[10px] tracking-widest uppercase"
                style={{ color: '#B8922A', fontFamily: 'Georgia, serif' }}
              >
                Исторические метеоархивы с {new Date().getFullYear() > 2024 ? '1936' : '1936'} года
              </span>
              <div className="h-px w-8" style={{ background: '#B8922A' }} />
            </div>

            {/* Headline */}
            <h1
              className="mb-3 lg:mb-2 leading-[1.15] text-3xl md:text-4xl lg:text-[2.5rem] xl:text-[3.25rem] font-bold"
              style={{ color: '#1C1810', fontFamily: 'Georgia, serif' }}
            >
              А какая погода была
              <span className="block">
                в день, когда{' '}
                <span style={{ color: '#B8922A' }}>началась ваша история?</span>
              </span>
            </h1>

            <OrnamentDivider variant="simple" className="my-3 lg:my-2.5 max-w-xs mx-auto lg:mx-0" />

            <p
              className="text-base lg:text-[0.9375rem] leading-relaxed lg:leading-snug mb-5 lg:mb-4 max-w-xl mx-auto lg:mx-0"
              style={{ color: '#4A4438', fontFamily: 'Georgia, serif' }}
            >
              Персональный сертификат о погоде в день вашего рождения — напечатан, оформлен в рамку
              и готов стать памятным подарком. Точные архивные данные, авторский нарратив,
              акварельная иллюстрация — память о важном дне.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-2.5 lg:space-y-2 max-w-md mx-auto lg:mx-0">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="hero-city"
                    className="block text-[10px] tracking-archive uppercase mb-1.5"
                    style={{ color: '#7A5E16', fontFamily: 'Georgia, serif' }}
                  >
                    Город
                  </label>
                  <input
                    id="hero-city"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Введите город"
                    required
                    className="w-full h-11 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-gold-500 rounded-sm"
                    style={{
                      background: 'rgba(250,246,232,0.8)',
                      border: '1px solid rgba(184,146,42,0.4)',
                      color: '#1C1810',
                      fontFamily: 'Georgia, serif',
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="hero-date"
                    className="block text-[10px] tracking-archive uppercase mb-1.5"
                    style={{ color: '#7A5E16', fontFamily: 'Georgia, serif' }}
                  >
                    Дата рождения
                  </label>
                  <input
                    id="hero-date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min="1936-01-01"
                    max={new Date().toISOString().split('T')[0]}
                    className="w-full h-11 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-gold-500 rounded-sm"
                    style={{
                      background: 'rgba(250,246,232,0.8)',
                      border: '1px solid rgba(184,146,42,0.4)',
                      color: '#1C1810',
                      fontFamily: 'Georgia, serif',
                    }}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full h-11 lg:h-10 text-sm tracking-archive uppercase transition-all duration-300 hover:brightness-105 hover:shadow-gold-glow active:brightness-95 rounded-sm"
                style={{
                  background: 'linear-gradient(135deg, #D4A843 0%, #B8922A 50%, #D4A843 100%)',
                  color: '#FAF6E8',
                  fontFamily: 'Georgia, serif',
                }}
              >
                Заказать сертификат →
              </button>

              <p className="text-xs text-center" style={{ color: '#8B6948', fontFamily: 'Georgia, serif' }}>
                Данные из архивов за 1936–{new Date().getFullYear()} гг. · {' '}
                <a href="#order" className="underline underline-offset-2 hover:text-gold-600 transition-colors">
                  Дарите кому-то особенному? →
                </a>
              </p>
            </form>

            <p
              className="text-xs leading-relaxed mt-4 lg:mt-3 max-w-md mx-auto lg:mx-0 text-center lg:text-left"
              style={{ color: '#7A5E16', fontFamily: 'Georgia, serif' }}
            >
              Каждый сертификат создаётся вручную — на основе архивных метеоданных за вашу дату и город.
            </p>
          </div>

          {/* Certificate preview — desktop only */}
          <div className="relative hidden lg:flex lg:items-center lg:justify-end">
            <div className="relative transform rotate-1 hover:rotate-0 transition-transform duration-700">
              <CertificateCard />
            </div>
            <div
              className="absolute -bottom-4 -right-4 -left-4 h-12 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse, rgba(184,146,42,0.2) 0%, transparent 70%)',
                filter: 'blur(12px)',
              }}
            />
          </div>
        </div>

        {/* Scroll hint — absolute so it doesn't expand section height */}
        <div className="absolute bottom-3 lg:bottom-4 left-0 right-0 flex justify-center pointer-events-none">
          <div className="flex flex-col items-center gap-1.5 animate-bounce" style={{ color: '#B8922A' }}>
            <span className="text-[9px] tracking-widest uppercase" style={{ fontFamily: 'Georgia, serif' }}>
              Листайте
            </span>
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
              <path d="M1 1L8 8L15 1" stroke="#B8922A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
