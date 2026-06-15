'use client'

import OrnamentDivider from '../ui/OrnamentDivider'

export default function Testimonials() {
  return (
    <section
      id="reviews"
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FAF6E8 0%, #F5EDD4 100%)' }}
    >
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-2xl mx-auto px-5 md:px-8 text-center">
        <p className="text-xs tracking-widest uppercase mb-3" style={{ color: '#B8922A', fontFamily: 'Georgia, serif' }}>
          Отзывы
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#1C1810', fontFamily: 'Georgia, serif' }}>
          Мы только запускаем проект
        </h2>
        <OrnamentDivider className="max-w-xs mx-auto mb-10" />

        <div
          className="relative p-10 md:p-12 rounded-sm"
          style={{
            background: 'rgba(250,246,232,0.8)',
            border: '1px solid rgba(184,146,42,0.25)',
            boxShadow: '0 4px 24px rgba(28,24,16,0.06)',
          }}
        >
          <svg className="absolute top-0 left-0 w-6 h-6" viewBox="0 0 24 24" fill="none">
            <path d="M1 12V1H12" stroke="#B8922A" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
          </svg>
          <svg className="absolute bottom-0 right-0 w-6 h-6 rotate-180" viewBox="0 0 24 24" fill="none">
            <path d="M1 12V1H12" stroke="#B8922A" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
          </svg>

          <div className="flex justify-center mb-6">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="12" stroke="#B8922A" strokeWidth="0.75" opacity="0.4" />
              <path d="M16 10V16L20 18" stroke="#B8922A" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
            </svg>
          </div>

          <p
            className="text-base leading-relaxed mb-4"
            style={{ color: '#4A4438', fontFamily: 'Georgia, serif' }}
          >
            Первые сертификаты уже создаются.
          </p>
          <p
            className="text-sm italic leading-relaxed"
            style={{ color: '#7A5E16', fontFamily: 'Georgia, serif' }}
          >
            Скоро здесь появятся реальные истории наших клиентов.
          </p>

          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="h-px w-12 bg-gold-500/30" />
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M5 0.5L6 3.5L9 4L6 4.5L5 7.5L4 4.5L1 4L4 3.5L5 0.5Z" fill="#B8922A" opacity="0.5" />
            </svg>
            <div className="h-px w-12 bg-gold-500/30" />
          </div>
        </div>
      </div>
    </section>
  )
}
