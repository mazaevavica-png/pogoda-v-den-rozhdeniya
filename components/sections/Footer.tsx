import OrnamentDivider from '../ui/OrnamentDivider'
import { SITE_CONFIG } from '@/lib/constants'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{ background: '#100E08', borderTop: '1px solid rgba(184,146,42,0.15)' }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 pt-14 pb-10">

        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="12" stroke="#B8922A" strokeWidth="1" opacity="0.5"/>
                <path d="M14 7V14L17 17" stroke="#B8922A" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div>
                <p className="text-sm font-medium" style={{ color: '#FAF6E8', fontFamily: 'Georgia, serif' }}>
                  Часовой Погоды
                </p>
                <p className="text-[9px] tracking-widest uppercase" style={{ color: '#B8922A' }}>
                  Точность в каждом моменте
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: '#787060', fontFamily: 'Georgia, serif' }}>
              Персональные метеосертификаты в рамке из исторических архивов. Памятный подарок
              о погоде в самый важный день вашей жизни.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] tracking-widest uppercase mb-4" style={{ color: '#B8922A', fontFamily: 'Georgia, serif' }}>
              Навигация
            </p>
            <ul className="space-y-2.5">
              {[
                ['#about', 'О проекте'],
                ['#gallery', 'Примеры'],
                ['#pricing', 'Цены'],
                ['#order', 'Заказать'],
                ['#faq', 'Вопросы'],
                ['#reviews', 'Отзывы'],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm transition-colors duration-200 hover:text-gold-400"
                    style={{ color: '#787060', fontFamily: 'Georgia, serif' }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <p className="text-[10px] tracking-widest uppercase mb-4" style={{ color: '#B8922A', fontFamily: 'Georgia, serif' }}>
              Контакты
            </p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-sm transition-colors duration-200 hover:text-gold-400"
                  style={{ color: '#787060', fontFamily: 'Georgia, serif' }}
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phoneTel}`}
                  className="text-sm transition-colors duration-200 hover:text-gold-400"
                  style={{ color: '#787060', fontFamily: 'Georgia, serif' }}
                >
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="pt-2">
                <p className="text-xs" style={{ color: '#4A4438', fontFamily: 'Georgia, serif' }}>
                  Пн–Пт: 9:00–20:00 МСК
                </p>
                <p className="text-xs" style={{ color: '#4A4438', fontFamily: 'Georgia, serif' }}>
                  Сб–Вс: 10:00–18:00 МСК
                </p>
              </li>
            </ul>
            <div className="mt-5">
              <p className="text-[10px] tracking-widest uppercase mb-3" style={{ color: '#4A4438', fontFamily: 'Georgia, serif' }}>
                Принимаем оплату
              </p>
              <div className="flex flex-wrap gap-2">
                {['Visa', 'MC', 'МИР', 'СБП'].map((p) => (
                  <span
                    key={p}
                    className="px-2 py-0.5 text-xs rounded-sm"
                    style={{
                      border: '1px solid rgba(184,146,42,0.2)',
                      color: '#4A4438',
                      fontFamily: 'Georgia, serif',
                    }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <OrnamentDivider color="gold" className="opacity-30 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: '#4A4438', fontFamily: 'Georgia, serif' }}>
            © {year} Часовой Погоды. Все права защищены.
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-2">
            {[
              ['/privacy', 'Политика конфиденциальности'],
              ['/consent', 'Согласие на обработку ПД'],
              ['/agreement', 'Пользовательское соглашение'],
            ].map(([href, label]) => (
              <a
                key={label}
                href={href}
                className="text-xs transition-colors duration-200 hover:text-gold-500"
                style={{ color: '#4A4438', fontFamily: 'Georgia, serif' }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Closing line */}
        <div className="mt-8 text-center">
          <p className="text-xs italic" style={{ color: '#2C2820', fontFamily: 'Georgia, serif' }}>
            Каждый день оставляет след. Мы помогаем его найти.
          </p>
        </div>
      </div>
    </footer>
  )
}
