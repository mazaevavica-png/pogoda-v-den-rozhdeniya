'use client'

import OrnamentDivider from '../ui/OrnamentDivider'

export default function AboutProduct() {
  const pillars = [
    {
      icon: '📜',
      title: 'Исторически достоверно',
      text: 'В основе каждого сертификата — архивные метеорологические данные. Мы работаем с реальными историческими наблюдениями, а не с реконструкциями или приблизительными оценками.',
    },
    {
      icon: '✍',
      title: 'Авторский нарратив',
      text: 'Каждый сертификат сопровождается художественным описанием дня, основанным на архивных погодных данных. Цифры превращаются в историю, которую интересно читать спустя годы.',
    },
    {
      icon: '🎨',
      title: 'Иллюстрация города',
      text: 'Сертификат дополняется атмосферной иллюстрацией, отражающей характер места, сезона и настроения дня, в который началась ваша история.',
    },
    {
      icon: '🎁',
      title: 'Подарок без аналогов',
      text: 'Сертификат в рамке — подарок без аналогов. Он создаётся для одного человека и одного важного дня, чтобы сохранить память о моменте, с которого началась история.',
    },
  ]

  const dataSources = [
    {
      icon: '📅',
      title: 'Архивные наблюдения',
      text: 'Исторические погодные данные с 1936 года.',
    },
    {
      icon: '🌦',
      title: 'Реальные метеорологические сведения',
      text: 'Температура, осадки, давление, ветер и другие параметры дня.',
    },
    {
      icon: '📍',
      title: 'Поиск по дате и городу',
      text: 'Каждый сертификат создаётся на основе конкретной даты рождения и указанного места.',
    },
  ]

  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FAF6E8 0%, #F5EDD4 100%)' }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-widest uppercase mb-4"
            style={{ color: '#B8922A', fontFamily: 'Georgia, serif' }}
          >
            О проекте
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-5 max-w-2xl mx-auto leading-snug"
            style={{ color: '#1C1810', fontFamily: 'Georgia, serif' }}
          >
            Каждый день в истории оставил след. Мы его нашли.
          </h2>
          <OrnamentDivider className="max-w-xs mx-auto" />
          <p
            className="text-base leading-relaxed max-w-2xl mx-auto mt-6"
            style={{ color: '#4A4438', fontFamily: 'Georgia, serif' }}
          >
            С 1936 года метеорологические станции фиксируют температуру, осадки, ветер, давление
            и другие погодные условия каждого дня. Эти архивы сохранили погоду вашего рождения —
            именно такой, какой она была тогда.
          </p>
          <p
            className="text-base leading-relaxed max-w-2xl mx-auto mt-4"
            style={{ color: '#4A4438', fontFamily: 'Georgia, serif' }}
          >
            Мы превращаем исторические данные в персональный сертификат, который помогает
            взглянуть на день рождения как на часть большой истории.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="relative p-6 rounded-sm group hover:shadow-certificate transition-all duration-500"
              style={{
                background: 'linear-gradient(145deg, rgba(250,246,232,0.9), rgba(237,224,190,0.5))',
                border: '1px solid rgba(184,146,42,0.2)',
              }}
            >
              {/* Corner accents */}
              <svg className="absolute top-0 left-0 w-5 h-5" viewBox="0 0 20 20" fill="none">
                <path d="M1 10V1H10" stroke="#B8922A" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
              </svg>
              <svg className="absolute bottom-0 right-0 w-5 h-5 rotate-180" viewBox="0 0 20 20" fill="none">
                <path d="M1 10V1H10" stroke="#B8922A" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
              </svg>

              <div className="text-3xl mb-4">{pillar.icon}</div>
              <h3
                className="text-base font-bold mb-2"
                style={{ color: '#1C1810', fontFamily: 'Georgia, serif' }}
              >
                {pillar.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: '#4A4438', fontFamily: 'Georgia, serif' }}
              >
                {pillar.text}
              </p>
            </div>
          ))}
        </div>

        {/* Archive authority */}
        <div
          className="relative p-8 md:p-10 rounded-sm text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(28,24,16,0.96), rgba(44,40,32,0.98))',
            border: '1px solid rgba(184,146,42,0.3)',
          }}
        >
          {/* Border inner */}
          <div
            className="absolute inset-[8px] pointer-events-none"
            style={{ border: '0.5px solid rgba(184,146,42,0.2)', borderRadius: '1px' }}
          />

          <p
            className="text-xs tracking-widest uppercase mb-4"
            style={{ color: '#B8922A', fontFamily: 'Georgia, serif' }}
          >
            Источники данных
          </p>
          <h3
            className="text-2xl font-bold mb-4"
            style={{ color: '#FAF6E8', fontFamily: 'Georgia, serif' }}
          >
            Откуда берётся точность
          </h3>
          <p
            className="text-sm leading-relaxed max-w-2xl mx-auto mb-8"
            style={{ color: '#D8D4C8', fontFamily: 'Georgia, serif' }}
          >
            Каждый сертификат основан на исторических метеорологических наблюдениях,
            зафиксированных в официальных архивах. Для каждой даты мы ищем реальные данные
            о погоде в конкретном городе и восстанавливаем атмосферу того дня на основе
            сохранившихся записей.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-3xl mx-auto">
            {dataSources.map((item, i) => (
              <div
                key={i}
                className="relative p-6 rounded-sm text-left"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(184,146,42,0.2)',
                }}
              >
                <svg className="absolute top-0 left-0 w-5 h-5" viewBox="0 0 20 20" fill="none">
                  <path d="M1 10V1H10" stroke="#B8922A" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
                </svg>
                <div className="text-2xl mb-3">{item.icon}</div>
                <h4
                  className="text-sm font-bold mb-2"
                  style={{ color: '#FAF6E8', fontFamily: 'Georgia, serif' }}
                >
                  {item.title}
                </h4>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: '#A8A090', fontFamily: 'Georgia, serif' }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
