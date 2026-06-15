import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Погода в День Рождения — Персональный метеосертификат из исторических архивов',
  description:
    'Получите официальный архивный сертификат о погоде в день вашего рождения. Данные из исторических метеорологических архивов с 1936 года. Уникальный подарок для близких — точный, красивый, незабываемый.',
  keywords: [
    'погода в день рождения',
    'метеосертификат',
    'исторические архивы погоды',
    'необычный подарок',
    'подарок на юбилей',
    'погода в дату рождения',
    'часовой погоды',
  ],
  authors: [{ name: 'Часовой Погоды' }],
  creator: 'Часовой Погоды',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    title: 'Погода в День Рождения — Персональный метеосертификат',
    description:
      'Узнайте, какой была погода в день вашего рождения. Архивные данные с 1936 года. Уникальный подарок, который невозможно повторить.',
    siteName: 'Часовой Погоды',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Погода в День Рождения',
    description: 'Персональный метеосертификат из исторических архивов',
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
