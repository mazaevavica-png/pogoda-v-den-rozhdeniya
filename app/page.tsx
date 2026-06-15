'use client'

import Navigation from '@/components/ui/Navigation'
import Hero from '@/components/sections/Hero'
import AboutProduct from '@/components/sections/AboutProduct'
import CertificateGallery from '@/components/sections/CertificateGallery'
import Pricing from '@/components/sections/Pricing'
import SocialProof from '@/components/sections/SocialProof'
import CertificateAnatomy from '@/components/sections/CertificateAnatomy'
import OrderForm from '@/components/sections/OrderForm'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import FinalCTA from '@/components/sections/FinalCTA'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />

      {/* 1. Hero */}
      <Hero />

      {/* 2. About the product */}
      <AboutProduct />

      {/* 4. Certificate gallery */}
      <CertificateGallery />

      {/* 5. Pricing */}
      <Pricing />

      {/* 6. Social proof / stats */}
      <SocialProof />

      {/* 7. Certificate anatomy */}
      <CertificateAnatomy />

      {/* 8. Order form */}
      <OrderForm />

      {/* 9. Testimonials */}
      <Testimonials />

      {/* 10. FAQ */}
      <FAQ />

      {/* 11. Final CTA */}
      <FinalCTA />

      {/* 12. Footer */}
      <Footer />
    </main>
  )
}
