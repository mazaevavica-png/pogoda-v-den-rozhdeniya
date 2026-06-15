'use client'

import OrnamentDivider from '../ui/OrnamentDivider'
import { CERTIFICATE_ANATOMY } from '@/lib/constants'

export default function CertificateAnatomy() {
  return (
    <section
      id="anatomy"
      className="py-24 relative"
      style={{ background: 'linear-gradient(180deg, #F5EDD4 0%, #FAF6E8 100%)' }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs tracking-widest uppercase mb-3" style={{ color: '#B8922A', fontFamily: 'Georgia, serif' }}>
            Анатомия сертификата
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1C1810', fontFamily: 'Georgia, serif' }}>
            Из чего состоит ваш документ
          </h2>
          <OrnamentDivider className="max-w-xs mx-auto" />
          <p className="text-sm leading-relaxed max-w-xl mx-auto mt-5" style={{ color: '#4A4438', fontFamily: 'Georgia, serif' }}>
            Каждый сертификат — это шесть слоёв смысла и мастерства, объединённых в одном документе
          </p>
        </div>

        {/* Anatomy grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTIFICATE_ANATOMY.map((item, i) => (
            <div
              key={i}
              className="relative p-6 rounded-sm group hover:shadow-certificate transition-all duration-500 cursor-default"
              style={{
                background: 'rgba(250,246,232,0.8)',
                border: '1px solid rgba(184,146,42,0.2)',
              }}
            >
              {/* Number */}
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-sm"
                  style={{
                    background: 'linear-gradient(135deg, #D4A843 0%, #B8922A 100%)',
                  }}
                >
                  <span
                    className="text-xs font-bold"
                    style={{ color: '#FAF6E8', fontFamily: 'Georgia, serif' }}
                  >
                    {item.num}
                  </span>
                </div>
                <div className="text-2xl mt-1">{item.icon}</div>
              </div>
              <h3
                className="text-base font-bold mb-2"
                style={{ color: '#1C1810', fontFamily: 'Georgia, serif' }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: '#4A4438', fontFamily: 'Georgia, serif' }}
              >
                {item.description}
              </p>

              {/* Hover accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-sm"
                style={{ background: 'linear-gradient(90deg, transparent, #B8922A, transparent)' }}
              />
            </div>
          ))}
        </div>

        {/* Certificate format info */}
        <div
          className="mt-12 p-8 rounded-sm text-center"
          style={{
            background: 'linear-gradient(145deg, rgba(250,246,232,0.9), rgba(237,224,190,0.6))',
            border: '1px solid rgba(184,146,42,0.3)',
          }}
        >
          <p
            className="text-xs tracking-widest uppercase mb-3"
            style={{ color: '#B8922A', fontFamily: 'Georgia, serif' }}
          >
            Технические характеристики
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: 'A3', label: 'Формат сертификата' },
              { value: 'Рамка', label: 'Деревянное обрамление' },
              { value: '3–7 дней', label: 'Производство и доставка' },
              { value: 'Подарок', label: 'Упаковка и открытка' },
            ].map((spec, i) => (
              <div key={i} className="text-center">
                <div className="text-xl font-bold mb-1" style={{ color: '#1C1810', fontFamily: 'Georgia, serif' }}>
                  {spec.value}
                </div>
                <div className="text-xs" style={{ color: '#7A5E16', fontFamily: 'Georgia, serif' }}>
                  {spec.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
