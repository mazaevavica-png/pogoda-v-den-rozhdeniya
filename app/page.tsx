'use client'

import { useState } from 'react'
import Navigation from '@/components/ui/Navigation'
import Hero from '@/components/sections/Hero'
import AboutProduct from '@/components/sections/AboutProduct'
import CertificateGallery from '@/components/sections/CertificateGallery'
import Pricing from '@/components/sections/Pricing'
import CertificateAnatomy from '@/components/sections/CertificateAnatomy'
import OrderForm from '@/components/sections/OrderForm'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import FinalCTA from '@/components/sections/FinalCTA'
import Footer from '@/components/sections/Footer'
import type { OrderFormPrefill } from '@/lib/types'

export default function Home() {
  const [orderPrefill, setOrderPrefill] = useState<OrderFormPrefill>({ city: '', date: '' })

  const handleOrderPrefill = (city: string, date: string) => {
    setOrderPrefill({ city, date })
  }

  return (
    <main>
      <Navigation />

      {/* 1. Hero */}
      <Hero onPreview={handleOrderPrefill} />

      {/* 2. About the product */}
      <AboutProduct />

      {/* 4. Certificate gallery */}
      <CertificateGallery />

      {/* 5. Pricing */}
      <Pricing />

      {/* 7. Certificate anatomy */}
      <CertificateAnatomy />

      {/* 8. Order form */}
      <OrderForm prefill={orderPrefill} />

      {/* 9. Testimonials */}
      <Testimonials />

      {/* 10. FAQ */}
      <FAQ />

      {/* 11. Final CTA */}
      <FinalCTA onPreview={handleOrderPrefill} />

      {/* 12. Footer */}
      <Footer />
    </main>
  )
}
