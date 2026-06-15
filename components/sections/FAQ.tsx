'use client'

import { useState } from 'react'
import OrnamentDivider from '../ui/OrnamentDivider'
import { FAQ_ITEMS } from '@/lib/constants'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section
      id="faq"
      className="py-24 relative"
      style={{ background: 'linear-gradient(180deg, #FAF6E8 0%, #F5EDD4 100%)' }}
    >
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest uppercase mb-3" style={{ color: '#B8922A', fontFamily: 'Georgia, serif' }}>
            Часто задаваемые вопросы
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1C1810', fontFamily: 'Georgia, serif' }}>
            Ответы на ваши вопросы
          </h2>
          <OrnamentDivider className="max-w-xs mx-auto" />
        </div>

        <div className="space-y-2">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className="rounded-sm overflow-hidden transition-all duration-300"
              style={{
                background: open === i ? 'rgba(250,246,232,0.9)' : 'rgba(250,246,232,0.5)',
                border: open === i ? '1px solid rgba(184,146,42,0.4)' : '1px solid rgba(184,146,42,0.2)',
              }}
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span
                  className="text-sm font-medium leading-snug"
                  style={{ color: '#1C1810', fontFamily: 'Georgia, serif' }}
                >
                  {item.question}
                </span>
                <svg
                  width="16" height="16" viewBox="0 0 16 16" fill="none"
                  className={`flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
                >
                  <path d="M3 6L8 11L13 6" stroke="#B8922A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {open === i && (
                <div className="px-6 pb-5">
                  <div className="h-px mb-4" style={{ background: 'rgba(184,146,42,0.2)' }} />
                  <p className="text-sm leading-relaxed" style={{ color: '#4A4438', fontFamily: 'Georgia, serif' }}>
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm" style={{ color: '#7A5E16', fontFamily: 'Georgia, serif' }}>
            Не нашли ответ?{' '}
            <a
              href="mailto:hello@chasovoy-pogody.ru"
              className="underline underline-offset-2 hover:text-gold-600 transition-colors"
              style={{ color: '#B8922A' }}
            >
              Напишите нам
            </a>{' '}
            — ответим в течение нескольких часов.
          </p>
        </div>
      </div>
    </section>
  )
}
