import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Погода в День Рождения — Персональный метеосертификат в рамке',
  description:
    'Персональный сертификат о погоде в важный день — напечатан, оформлен в рамку и готов стать памятным подарком. Данные из исторических метеорологических архивов с 1936 года.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48' },
      { url: '/favicon.svg', type: 'image/svg+xml', sizes: 'any' },
    ],
    apple: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
  keywords: [
    'погода в день рождения',
    'метеосертификат',
    'исторические архивы погоды',
    'подарок в рамке',
    'подарок на юбилей',
    'погода в дату рождения',
    'часовой погоды',
  ],
  authors: [{ name: 'Часовой Погоды' }],
  creator: 'Часовой Погоды',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    title: 'Погода в День Рождения — Персональный метеосертификат в рамке',
    description:
      'Узнайте, какой была погода в день вашего рождения. Сертификат в рамке — памятный подарок на основе архивных данных с 1936 года.',
    siteName: 'Часовой Погоды',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Погода в День Рождения',
    description: 'Персональный метеосертификат в рамке — памятный подарок из исторических архивов',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FAF6E8',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
