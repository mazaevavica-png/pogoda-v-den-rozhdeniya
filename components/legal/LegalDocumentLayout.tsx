import Link from 'next/link'
import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/sections/Footer'
import OrnamentDivider from '@/components/ui/OrnamentDivider'
import { LEGAL_CONFIG } from '@/lib/legal'

interface LegalDocumentLayoutProps {
  title: string
  children: React.ReactNode
}

const sectionTitleStyle = {
  color: '#1C1810',
  fontFamily: 'Georgia, serif',
} as const

const bodyStyle = {
  color: '#4A4438',
  fontFamily: 'Georgia, serif',
} as const

export function LegalSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mb-8">
      <h2 className="text-lg md:text-xl font-bold mb-3" style={sectionTitleStyle}>
        {title}
      </h2>
      <div className="space-y-3 text-sm leading-relaxed md:text-base" style={bodyStyle}>
        {children}
      </div>
    </section>
  )
}

export function LegalList({ items }: { items: readonly string[] }) {
  return (
    <ul className="list-disc pl-5 space-y-1.5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export default function LegalDocumentLayout({ title, children }: LegalDocumentLayoutProps) {
  return (
    <main>
      <Navigation />

      <section
        className="pt-28 pb-24 relative overflow-hidden min-h-[60vh]"
        style={{ background: 'linear-gradient(180deg, #FAF6E8 0%, #F5EDD4 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative max-w-3xl mx-auto px-5 md:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase mb-8 transition-colors hover:text-gold-600"
            style={{ color: '#7A5E16', fontFamily: 'Georgia, serif' }}
          >
            ← На главную
          </Link>

          <p
            className="text-xs tracking-widest uppercase mb-3"
            style={{ color: '#B8922A', fontFamily: 'Georgia, serif' }}
          >
            Правовая информация
          </p>
          <h1
            className="text-3xl md:text-4xl font-bold mb-4 leading-snug"
            style={{ color: '#1C1810', fontFamily: 'Georgia, serif' }}
          >
            {title}
          </h1>
          <OrnamentDivider className="max-w-xs mb-3" />
          <p className="text-xs mb-10" style={{ color: '#7A5E16', fontFamily: 'Georgia, serif' }}>
            Дата вступления в силу: {LEGAL_CONFIG.effectiveDate}
          </p>

          <article
            className="relative p-7 md:p-9 rounded-sm"
            style={{
              background: 'linear-gradient(145deg, rgba(250,246,232,0.92), rgba(237,224,190,0.55))',
              border: '1px solid rgba(184,146,42,0.3)',
              boxShadow: '0 4px 32px rgba(28,24,16,0.08)',
            }}
          >
            {children}
          </article>
        </div>
      </section>

      <Footer />
    </main>
  )
}
