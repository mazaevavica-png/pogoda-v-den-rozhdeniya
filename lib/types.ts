export interface CertificatePreview {
  date: string
  city: string
  name?: string
}

export interface PricingTier {
  id: string
  name: string
  nameRu: string
  price: number
  priceLabel: string
  description: string
  features: string[]
  badge?: string
  highlighted?: boolean
  cta: string
}

export interface Testimonial {
  id: string
  name: string
  city: string
  occasion: string
  text: string
  rating: number
  date: string
  initials: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface GalleryItem {
  id: string
  city: string
  date: string
  season: string
  description: string
  temp: string
  weather: string
}

export interface OrderFormData {
  name: string
  email: string
  phone: string
  date: string
  city: string
  occasion: string
  customOccasion: string
  comment: string
}

export interface OrderFormPrefill {
  city: string
  date: string
}

export interface OrderProcessStep {
  title: string
  desc: string
}
