'use client'

import { useState } from 'react'
import OrnamentDivider from '../ui/OrnamentDivider'
import OrderSuccessModal from '../ui/OrderSuccessModal'
import { ORDER_PROCESS_STEPS } from '@/lib/constants'
import type { OrderFormData } from '@/lib/types'

const INITIAL_FORM_DATA: OrderFormData = {
  name: '',
  email: '',
  date: '',
  city: '',
  occasion: '',
  comment: '',
}

const OCCASIONS = [
  'День рождения','Юбилей (50, 60, 70 лет)','Рождение ребёнка',
  'Годовщина свадьбы','День первой встречи','Переезд в город',
  'Корпоративный подарок','Другой особый день',
]

export default function OrderForm() {
  const [formData, setFormData] = useState<OrderFormData>(INITIAL_FORM_DATA)
  const [successModalOpen, setSuccessModalOpen] = useState(false)
  const [submittedName, setSubmittedName] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1800))
    setLoading(false)
    setSubmittedName(formData.name)
    setSuccessModalOpen(true)
  }

  const handleCloseModal = () => {
    setSuccessModalOpen(false)
  }

  const handleCreateAnother = () => {
    setSuccessModalOpen(false)
    setFormData(INITIAL_FORM_DATA)
  }

  const inputStyle = {
    background: 'rgba(250,246,232,0.7)',
    border: '1px solid rgba(184,146,42,0.35)',
    color: '#1C1810',
    fontFamily: 'Georgia, serif',
    borderRadius: '2px',
    outline: 'none',
  }

  const labelStyle = {
    color: '#7A5E16',
    fontFamily: 'Georgia, serif',
  }

  return (
    <>
      <OrderSuccessModal
        open={successModalOpen}
        name={submittedName}
        onClose={handleCloseModal}
        onCreateAnother={handleCreateAnother}
      />

      <section
      id="order"
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #F5EDD4 0%, #FAF6E8 100%)' }}
    >
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-5xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest uppercase mb-3" style={{ color: '#B8922A', fontFamily: 'Georgia, serif' }}>
            Оформление заказа
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1C1810', fontFamily: 'Georgia, serif' }}>
            Закажите персональный сертификат
          </h2>
          <OrnamentDivider className="max-w-xs mx-auto" />
          <p className="text-sm mt-5 max-w-lg mx-auto" style={{ color: '#4A4438', fontFamily: 'Georgia, serif' }}>
            Заполните форму с датой и городом — мы вручную найдём архивные данные,
            создадим персональный сертификат и отправим его в рамке. Оплата после согласования деталей.
          </p>
          <p
            className="text-sm mt-3 font-medium"
            style={{ color: '#7A5E16', fontFamily: 'Georgia, serif' }}
          >
            Сертификат в рамке — 5 990 ₽
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 relative p-7 md:p-9 rounded-sm"
            style={{
              background: 'linear-gradient(145deg, rgba(250,246,232,0.9), rgba(237,224,190,0.5))',
              border: '1.5px solid rgba(184,146,42,0.4)',
              boxShadow: '0 8px 48px rgba(28,24,16,0.1)',
            }}
          >
            {/* Certificate border corners */}
            {['top-0 left-0','top-0 right-0 rotate-90','bottom-0 right-0 rotate-180','bottom-0 left-0 -rotate-90'].map((pos, i) => (
              <svg key={i} className={`absolute w-10 h-10 ${pos} pointer-events-none`} viewBox="0 0 40 40" fill="none">
                <path d="M2 20V2H20" stroke="#B8922A" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
                <circle cx="5" cy="5" r="1.5" fill="#B8922A" opacity="0.35"/>
              </svg>
            ))}

            <div className="space-y-5">
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-[10px] tracking-archive uppercase mb-1.5" style={labelStyle}>
                    Ваше имя *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Александр"
                    required
                    className="w-full h-11 px-3 text-sm transition-all duration-200 focus:ring-1 focus:ring-gold-500"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[10px] tracking-archive uppercase mb-1.5" style={labelStyle}>
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="mail@example.ru"
                    required
                    className="w-full h-11 px-3 text-sm transition-all duration-200 focus:ring-1 focus:ring-gold-500"
                    style={inputStyle}
                  />
                </div>
              </div>

              {/* Date + City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-[10px] tracking-archive uppercase mb-1.5" style={labelStyle}>
                    Дата рождения *
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    min="1936-01-01"
                    max={new Date().toISOString().split('T')[0]}
                    required
                    className="w-full h-11 px-3 text-sm transition-all duration-200 focus:ring-1 focus:ring-gold-500"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-[10px] tracking-archive uppercase mb-1.5" style={labelStyle}>
                    Город *
                  </label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Введите город"
                    required
                    className="w-full h-11 px-3 text-sm transition-all duration-200 focus:ring-1 focus:ring-gold-500"
                    style={inputStyle}
                  />
                </div>
              </div>

              {/* Occasion */}
              <div>
                <label htmlFor="occasion" className="block text-[10px] tracking-archive uppercase mb-1.5" style={labelStyle}>
                  Особый случай <span style={{ color: '#8B6948' }}>(необязательно)</span>
                </label>
                <select
                  id="occasion"
                  name="occasion"
                  value={formData.occasion}
                  onChange={handleChange}
                  className="w-full h-11 px-3 text-sm appearance-none cursor-pointer"
                  style={inputStyle}
                >
                  <option value="">Выберите повод...</option>
                  {OCCASIONS.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>

              {/* Comment */}
              <div>
                <label htmlFor="comment" className="block text-[10px] tracking-archive uppercase mb-1.5" style={labelStyle}>
                  Комментарий к заказу <span style={{ color: '#8B6948' }}>(необязательно)</span>
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Пожелания по оформлению, имя получателя, особые детали..."
                  className="w-full px-3 py-2.5 text-sm resize-none"
                  style={inputStyle}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full h-13 py-3.5 text-sm tracking-archive uppercase transition-all duration-300 hover:brightness-105 hover:shadow-gold-glow disabled:opacity-60 disabled:cursor-not-allowed rounded-sm"
                style={{
                  background: 'linear-gradient(135deg, #D4A843 0%, #B8922A 50%, #D4A843 100%)',
                  color: '#FAF6E8',
                  fontFamily: 'Georgia, serif',
                }}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                    </svg>
                    Отправляем заявку...
                  </span>
                ) : (
                  'Оформить заказ →'
                )}
              </button>

              <p className="text-xs text-center" style={{ color: '#8B6948', fontFamily: 'Georgia, serif' }}>
                Нажимая кнопку, вы соглашаетесь с{' '}
                <a href="#" className="underline underline-offset-2 hover:text-gold-600 transition-colors">
                  политикой конфиденциальности
                </a>.
                Оплата после подтверждения заказа.
              </p>
            </div>
          </form>

          {/* Side panel */}
          <div className="lg:col-span-2 space-y-5">
            {/* What you get */}
            <div
              className="p-6 rounded-sm"
              style={{
                background: 'rgba(250,246,232,0.7)',
                border: '1px solid rgba(184,146,42,0.25)',
              }}
            >
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#B8922A', fontFamily: 'Georgia, serif' }}>
                Что входит в заказ
              </p>
              <ul className="space-y-3">
                {[
                  'Точные архивные данные о погоде',
                  'Авторский литературный нарратив',
                  'Акварельная иллюстрация города',
                  'Архивный дизайн и орнаменты',
                  'Поэтическое завершение',
                  'Печать, рамка и подарочная упаковка',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <svg className="flex-shrink-0 mt-0.5" width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <circle cx="6.5" cy="6.5" r="5.5" stroke="#B8922A" strokeWidth="0.75"/>
                      <path d="M3.5 6.5L5.5 8.5L9.5 4.5" stroke="#B8922A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-sm" style={{ color: '#4A4438', fontFamily: 'Georgia, serif' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Process */}
            <div
              className="p-6 rounded-sm"
              style={{
                background: 'rgba(250,246,232,0.7)',
                border: '1px solid rgba(184,146,42,0.25)',
              }}
            >
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#B8922A', fontFamily: 'Georgia, serif' }}>
                Как это работает
              </p>
              <ol className="space-y-3">
                {ORDER_PROCESS_STEPS.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full text-xs font-bold mt-0.5"
                      style={{
                        background: 'linear-gradient(135deg, #D4A843, #B8922A)',
                        color: '#FAF6E8',
                        fontFamily: 'Georgia, serif',
                      }}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <p className="text-sm font-medium" style={{ color: '#1C1810', fontFamily: 'Georgia, serif' }}>{step.title}</p>
                      <p className="text-xs" style={{ color: '#7A5E16', fontFamily: 'Georgia, serif' }}>{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Trust */}
            <div className="flex flex-col gap-2">
              {[
                '🔒 Безопасная оплата · Сбербанк / ЮKassa',
                '📦 Производство и доставка: обычно 3–7 дней',
                '↩ Возврат в течение 14 дней',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-xs" style={{ color: '#7A5E16', fontFamily: 'Georgia, serif' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
