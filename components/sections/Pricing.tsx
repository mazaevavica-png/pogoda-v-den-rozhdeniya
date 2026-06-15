'use client'

import OrnamentDivider from '../ui/OrnamentDivider'
import { PRICING_TIERS } from '@/lib/constants'

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #F5EDD4 0%, #1C1810 30%, #1C1810 100%)' }}
    >
      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, #F5EDD4, transparent)' }} />

      {/* Paper texture on dark */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-5xl mx-auto px-5 md:px-8 pt-16">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs tracking-widest uppercase mb-3" style={{ color: '#D4A843', fontFamily: 'Georgia, serif' }}>
            Стоимость
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#FAF6E8', fontFamily: 'Georgia, serif' }}>
            Сертификат в рамке
          </h2>
          <OrnamentDivider color="gold" className="max-w-xs mx-auto" />
          <p className="text-sm leading-relaxed mt-5 max-w-lg mx-auto" style={{ color: '#D8D4C8', fontFamily: 'Georgia, serif' }}>
            Памятный подарок и семейная реликвия — персональный сертификат о погоде в важный день,
            напечатанный и оформленный в рамку.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 gap-6 max-w-md mx-auto">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.id}
              className="relative rounded-sm overflow-hidden transition-all duration-500 hover:-translate-y-1"
              style={{
                background: tier.highlighted
                  ? 'linear-gradient(145deg, #FAF6E8 0%, #F5EDD4 100%)'
                  : 'rgba(255,255,255,0.04)',
                border: tier.highlighted
                  ? '2px solid rgba(184,146,42,0.6)'
                  : '1px solid rgba(184,146,42,0.25)',
                boxShadow: tier.highlighted
                  ? '0 8px 48px rgba(184,146,42,0.2), 0 2px 8px rgba(28,24,16,0.2)'
                  : '0 4px 24px rgba(28,24,16,0.2)',
              }}
            >
              {/* Badge */}
              {tier.badge && (
                <div
                  className="absolute top-4 right-4 px-3 py-1 text-[10px] tracking-archive uppercase rounded-sm"
                  style={
                    tier.highlighted
                      ? {
                          background: 'linear-gradient(135deg, #D4A843, #B8922A)',
                          color: '#FAF6E8',
                          fontFamily: 'Georgia, serif',
                        }
                      : {
                          background: 'rgba(184,146,42,0.15)',
                          color: '#D4A843',
                          border: '1px solid rgba(184,146,42,0.3)',
                          fontFamily: 'Georgia, serif',
                        }
                  }
                >
                  {tier.badge}
                </div>
              )}

              <div className="p-7">
                {/* Name */}
                <p
                  className="text-xs tracking-widest uppercase mb-1"
                  style={{
                    color: tier.highlighted ? '#7A5E16' : '#A8A090',
                    fontFamily: 'Georgia, serif',
                  }}
                >
                  {tier.nameRu}
                </p>
                <div className="flex items-end gap-2 mb-4">
                  <span
                    className="text-4xl font-bold"
                    style={{
                      color: tier.highlighted ? '#1C1810' : '#FAF6E8',
                      fontFamily: 'Georgia, serif',
                    }}
                  >
                    {tier.priceLabel}
                  </span>
                </div>

                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{
                    color: tier.highlighted ? '#4A4438' : '#A8A090',
                    fontFamily: 'Georgia, serif',
                  }}
                >
                  {tier.description}
                </p>

                {/* Features */}
                <ul className="space-y-2.5 mb-7">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <circle
                          cx="7" cy="7" r="6"
                          stroke={tier.highlighted ? '#B8922A' : '#6A5830'}
                          strokeWidth="0.75"
                        />
                        <path
                          d="M4 7L6 9L10 5"
                          stroke={tier.highlighted ? '#B8922A' : '#6A5830'}
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span
                        className="text-sm"
                        style={{
                          color: tier.highlighted ? '#4A4438' : '#A8A090',
                          fontFamily: 'Georgia, serif',
                        }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#order"
                  className="flex items-center justify-center w-full h-12 text-sm tracking-archive uppercase rounded-sm transition-all duration-300"
                  style={
                    tier.highlighted
                      ? {
                          background: 'linear-gradient(135deg, #D4A843 0%, #B8922A 50%, #D4A843 100%)',
                          color: '#FAF6E8',
                          fontFamily: 'Georgia, serif',
                        }
                      : {
                          background: 'transparent',
                          border: '1px solid rgba(184,146,42,0.4)',
                          color: '#D4A843',
                          fontFamily: 'Georgia, serif',
                        }
                  }
                  onMouseEnter={(e) => {
                    if (!tier.highlighted) {
                      (e.target as HTMLElement).style.background = 'rgba(184,146,42,0.1)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!tier.highlighted) {
                      (e.target as HTMLElement).style.background = 'transparent'
                    }
                  }}
                >
                  {tier.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantees */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-10">
          {[
            '🔒 Безопасная оплата',
            '📦 Производство и доставка: обычно 3–7 дней',
            '↩ Возврат в течение 14 дней',
            '📞 Поддержка 7 дней в неделю',
          ].map((g, i) => (
            <span
              key={i}
              className="text-xs"
              style={{ color: '#A8A090', fontFamily: 'Georgia, serif' }}
            >
              {g}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
