'use client'

import OrnamentDivider from '../ui/OrnamentDivider'

const TRUST_POINTS = [
  {
    title: 'Индивидуальное создание',
    text: 'Каждый сертификат готовится вручную — для конкретной даты, города и человека.',
  },
  {
    title: 'Архивные данные',
    text: 'Основа — реальные метеорологические записи, а не реконструкция и не оценка.',
  },
  {
    title: 'Авторский нарратив',
    text: 'Сухие показания превращаются в живую историю того дня — написанную специально для вас.',
  },
  {
    title: 'Персональный дизайн',
    text: 'Документ оформлен как историческая грамота — готов к печати и обрамлению.',
  },
]

export default function SocialProof() {
  return (
    <section
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#FAF6E8', fontFamily: 'Georgia, serif' }}>
            Документ, созданный для одного человека
          </h2>
          <OrnamentDivider color="gold" className="max-w-xs mx-auto" />
          <p
            className="text-sm leading-relaxed max-w-2xl mx-auto mt-6"
            style={{ color: '#A8A090', fontFamily: 'Georgia, serif' }}
          >
            Мы не генерируем сертификаты автоматически. Сначала находим архивную запись,
            затем превращаем её в персональный документ — с авторским текстом и оформлением.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {TRUST_POINTS.map((point, i) => (
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
              <h3
                className="text-base font-bold mb-2"
                style={{ color: '#FAF6E8', fontFamily: 'Georgia, serif' }}
              >
                {point.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: '#A8A090', fontFamily: 'Georgia, serif' }}
              >
                {point.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
