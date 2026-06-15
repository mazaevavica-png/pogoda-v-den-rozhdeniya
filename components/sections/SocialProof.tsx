'use client'

import OrnamentDivider from '../ui/OrnamentDivider'
import { APPROACH_PILLARS } from '@/lib/constants'

export default function SocialProof() {
  return (
    <section
      id="approach"
      className="py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #1C1810 0%, #2C2820 100%)' }}
    >
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='0.07'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest uppercase mb-3" style={{ color: '#D4A843', fontFamily: 'Georgia, serif' }}>
            Наш подход
          </p>
          <OrnamentDivider color="gold" className="max-w-xs mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {APPROACH_PILLARS.map((pillar, i) => (
            <div
              key={i}
              className="relative p-6 md:p-7 rounded-sm text-left"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(184,146,42,0.2)',
              }}
            >
              <svg className="absolute top-0 left-0 w-5 h-5" viewBox="0 0 20 20" fill="none">
                <path d="M1 10V1H10" stroke="#B8922A" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
              </svg>
              <svg className="absolute bottom-0 right-0 w-5 h-5 rotate-180" viewBox="0 0 20 20" fill="none">
                <path d="M1 10V1H10" stroke="#B8922A" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
              </svg>
              <div className="text-3xl mb-4">{pillar.icon}</div>
              <h3
                className="text-base font-bold mb-2"
                style={{ color: '#FAF6E8', fontFamily: 'Georgia, serif' }}
              >
                {pillar.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: '#A8A090', fontFamily: 'Georgia, serif' }}
              >
                {pillar.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
