import { CUSTOM_OCCASION } from './constants'
import type { OrderFormData } from './types'

export const TELEGRAM_ORDER_USERNAME = 'ale_denis1991'

function formatOrderDate(isoDate: string): string {
  if (!isoDate.trim()) return ''

  const [year, month, day] = isoDate.split('-').map(Number)
  if (!year || !month || !day) return isoDate.trim()

  return new Date(year, month - 1, day).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function getCategory(data: OrderFormData): string {
  if (data.occasion === CUSTOM_OCCASION) {
    return data.customOccasion.trim()
  }
  return data.occasion.trim()
}

export function buildTelegramOrderMessage(data: OrderFormData): string {
  const lines = ['Новый заказ сертификата', '']

  const category = getCategory(data)
  if (category) lines.push(`Категория: ${category}`)

  const date = formatOrderDate(data.date)
  if (date) lines.push(`Дата: ${date}`)

  if (data.city.trim()) lines.push(`Город: ${data.city.trim()}`)
  if (data.name.trim()) lines.push(`Имя: ${data.name.trim()}`)
  if (data.phone.trim()) lines.push(`Телефон: ${data.phone.trim()}`)
  if (data.email.trim()) lines.push(`Email: ${data.email.trim()}`)
  if (data.comment.trim()) lines.push(`Комментарий: ${data.comment.trim()}`)

  return lines.join('\n')
}

export function getTelegramOrderUrl(data: OrderFormData): string {
  const text = buildTelegramOrderMessage(data)
  return `https://t.me/${TELEGRAM_ORDER_USERNAME}?text=${encodeURIComponent(text)}`
}

export function openTelegramOrderChat(data: OrderFormData): void {
  const url = getTelegramOrderUrl(data)
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

  if (isMobile) {
    window.location.assign(url)
    return
  }

  window.open(url, '_blank', 'noopener,noreferrer')
}
