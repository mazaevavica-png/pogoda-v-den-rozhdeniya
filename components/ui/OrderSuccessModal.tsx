'use client'

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import OrnamentDivider from './OrnamentDivider'

interface OrderSuccessModalProps {
  open: boolean
  name: string
  onClose: () => void
  onCreateAnother: () => void
}

export default function OrderSuccessModal({
  open,
  name,
  onClose,
  onCreateAnother,
}: OrderSuccessModalProps) {
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(false)
  const [closing, setClosing] = useState(false)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (open) {
      setClosing(false)
      setVisible(true)
      document.body.style.overflow = 'hidden'
      return
    }

    if (!visible) {
      document.body.style.overflow = ''
      return
    }

    setClosing(true)
    const timer = setTimeout(() => {
      setVisible(false)
      setClosing(false)
      document.body.style.overflow = ''
    }, 300)

    return () => clearTimeout(timer)
  }, [open, visible])

  useEffect(() => {
    if (!open || !visible) return

    const frame = requestAnimationFrame(() => {
      closeButtonRef.current?.focus()
    })
    return () => cancelAnimationFrame(frame)
  }, [open, visible])

  useEffect(() => {
    if (!visible) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [visible, onClose])

  if (!mounted || !visible) return null

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="presentation"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Закрыть окно"
        className={`absolute inset-0 bg-[#1C1810]/55 backdrop-blur-[2px] border-0 cursor-default ${
          closing ? 'animate-modal-backdrop-out' : 'animate-modal-backdrop-in'
        }`}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-success-title"
        aria-describedby="order-success-description"
        className={`relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-sm p-8 md:p-10 text-center ${
          closing ? 'animate-modal-content-out' : 'animate-modal-content-in'
        }`}
        style={{
          background: 'linear-gradient(145deg, #FAF6E8 0%, #F5EDD4 60%, #EDE0BE 100%)',
          border: '1.5px solid rgba(184,146,42,0.45)',
          boxShadow: '0 16px 64px rgba(28,24,16,0.28), 0 2px 8px rgba(28,24,16,0.12)',
        }}
      >
        {/* Inner border */}
        <div
          className="absolute inset-[8px] pointer-events-none rounded-sm"
          style={{ border: '0.5px solid rgba(184,146,42,0.25)' }}
        />

        {/* Corner accents */}
        {['top-0 left-0', 'top-0 right-0 rotate-90', 'bottom-0 right-0 rotate-180', 'bottom-0 left-0 -rotate-90'].map(
          (pos, i) => (
            <svg
              key={i}
              className={`absolute w-8 h-8 ${pos} pointer-events-none`}
              viewBox="0 0 32 32"
              fill="none"
              aria-hidden="true"
            >
              <path d="M2 16V2H16" stroke="#B8922A" strokeWidth="1" strokeLinecap="round" opacity="0.45" />
              <circle cx="4" cy="4" r="1.5" fill="#B8922A" opacity="0.35" />
            </svg>
          )
        )}

        <div className="relative z-10">
          <div className="text-4xl mb-5" aria-hidden="true">
            ✦
          </div>

          <h2
            id="order-success-title"
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ color: '#1C1810', fontFamily: 'Georgia, serif' }}
          >
            Заявка получена
          </h2>

          <OrnamentDivider className="max-w-xs mx-auto mb-6" />

          <div
            id="order-success-description"
            className="space-y-4 text-left mb-8"
            style={{ color: '#4A4438', fontFamily: 'Georgia, serif' }}
          >
            <p className="text-base leading-relaxed">
              Спасибо, <strong style={{ color: '#1C1810' }}>{name}</strong>.
            </p>
            <p className="text-sm leading-relaxed">
              Открылся Telegram с вашей заявкой — проверьте текст сообщения и нажмите «Отправить».
            </p>
            <p className="text-sm leading-relaxed">
              После получения заявки мы приступим к поиску архивных погодных данных и свяжемся с вами
              для согласования деталей заказа.
            </p>
            <p className="text-sm italic leading-relaxed" style={{ color: '#7A5E16' }}>
              Благодарим за интерес к проекту «Погода в день рождения».
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="flex-1 h-11 text-sm tracking-archive uppercase rounded-sm transition-all duration-300 hover:brightness-105 hover:shadow-gold-glow"
              style={{
                background: 'linear-gradient(135deg, #D4A843 0%, #B8922A 50%, #D4A843 100%)',
                color: '#FAF6E8',
                fontFamily: 'Georgia, serif',
              }}
            >
              Закрыть
            </button>
            <button
              type="button"
              onClick={onCreateAnother}
              className="flex-1 h-11 text-sm tracking-archive uppercase rounded-sm transition-all duration-300 hover:border-gold-500 hover:text-gold-600"
              style={{
                background: 'transparent',
                border: '1px solid rgba(184,146,42,0.4)',
                color: '#7A5E16',
                fontFamily: 'Georgia, serif',
              }}
            >
              Создать ещё один сертификат
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}
