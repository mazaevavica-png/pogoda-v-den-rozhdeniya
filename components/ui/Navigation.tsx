'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { href: '#about', label: 'О проекте' },
    { href: '#gallery', label: 'Примеры' },
    { href: '#pricing', label: 'Цены' },
    { href: '#faq', label: 'Ответы на вопросы' },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 border-b border-gold-500/20'
            : 'py-5'
        }`}
        style={{
          background: scrolled
            ? 'rgba(250,246,232,0.96)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="flex-shrink-0">
              <circle cx="14" cy="14" r="12" stroke="#B8922A" strokeWidth="1" opacity="0.6" />
              <circle cx="14" cy="14" r="8" stroke="#B8922A" strokeWidth="0.5" opacity="0.4" />
              {[0,45,90,135,180,225,270,315].map((angle, i) => (
                <line
                  key={i}
                  x1="14" y1={i % 2 === 0 ? "3" : "5"}
                  x2="14" y2={i % 2 === 0 ? "7" : "8"}
                  stroke="#B8922A"
                  strokeWidth="1"
                  strokeLinecap="round"
                  opacity="0.6"
                  transform={`rotate(${angle} 14 14)`}
                />
              ))}
              <path d="M14 8V14L17 17" stroke="#B8922A" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div>
              <p
                className="text-sm font-medium tracking-archive leading-none"
                style={{ color: '#1C1810', fontFamily: 'Georgia, serif' }}
              >
                Часовой Погоды
              </p>
              <p
                className="text-[9px] tracking-widest uppercase leading-none mt-0.5"
                style={{ color: '#B8922A' }}
              >
                Точность в каждом моменте
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs tracking-archive uppercase transition-colors duration-200 hover:text-gold-600"
                style={{ color: '#4A4438', fontFamily: 'Georgia, serif' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <a
              href="#order"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-xs tracking-archive uppercase transition-all duration-300 hover:shadow-gold-glow"
              style={{
                background: 'linear-gradient(135deg, #D4A843 0%, #B8922A 50%, #D4A843 100%)',
                color: '#FAF6E8',
                fontFamily: 'Georgia, serif',
                borderRadius: '2px',
              }}
            >
              Заказать сертификат
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 flex flex-col gap-1.5"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Открыть меню"
            >
              <span
                className={`block w-5 h-0.5 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
                style={{ background: '#1C1810' }}
              />
              <span
                className={`block w-5 h-0.5 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
                style={{ background: '#1C1810' }}
              />
              <span
                className={`block w-5 h-0.5 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
                style={{ background: '#1C1810' }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col pt-24 px-5 pb-8 md:hidden"
          style={{ background: 'rgba(250,246,232,0.98)' }}
        >
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg tracking-archive uppercase border-b border-gold-500/20 pb-4"
                style={{ color: '#2C2820', fontFamily: 'Georgia, serif' }}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#order"
            onClick={() => setMenuOpen(false)}
            className="mt-auto flex items-center justify-center h-14 text-sm tracking-archive uppercase"
            style={{
              background: 'linear-gradient(135deg, #D4A843 0%, #B8922A 50%, #D4A843 100%)',
              color: '#FAF6E8',
              fontFamily: 'Georgia, serif',
              borderRadius: '2px',
            }}
          >
            Заказать сертификат
          </a>
        </div>
      )}

      {/* Mobile sticky bottom CTA */}
      {scrolled && (
        <div
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden p-4"
          style={{ background: 'rgba(250,246,232,0.97)', borderTop: '1px solid rgba(184,146,42,0.2)' }}
        >
          <a
            href="#order"
            className="flex items-center justify-center w-full h-12 text-sm tracking-archive uppercase"
            style={{
              background: 'linear-gradient(135deg, #D4A843 0%, #B8922A 50%, #D4A843 100%)',
              color: '#FAF6E8',
              fontFamily: 'Georgia, serif',
              borderRadius: '2px',
            }}
          >
            Заказать сертификат
          </a>
        </div>
      )}
    </>
  )
}
