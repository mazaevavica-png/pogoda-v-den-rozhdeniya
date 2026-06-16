import { SITE_CONFIG } from './constants'

export const LEGAL_CONFIG = {
  websiteUrl: 'https://pogoda-v-den-rozhdeniya.vercel.app',
  ownerName: 'Алексеев Денис Сергеевич',
  ownerStatus: 'Самозанятый',
  serviceName: SITE_CONFIG.name,
  projectName: 'Погода в День Рождения',
  email: SITE_CONFIG.email,
  phone: SITE_CONFIG.phone,
  phoneTel: SITE_CONFIG.phoneTel,
  effectiveDate: '15 июня 2025 г.',
} as const

export const COLLECTED_PERSONAL_DATA = [
  'имя',
  'номер телефона',
  'адрес электронной почты (email)',
  'город',
  'дата события (дата рождения или иная значимая дата)',
  'комментарии к заказу',
  'выбранная категория сертификата',
] as const

export const DATA_PROCESSING_PURPOSES = [
  'обработка и исполнение заказов',
  'связь с клиентами по вопросам заказа',
  'изготовление и доставка персонализированных сертификатов',
] as const
