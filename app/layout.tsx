import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-jost',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Isabel Borgen | Digital Marketing & Analytics',
  description:
    'Norwegian-born, Barcelona-based digital marketer specializing in AI-Driven Digital Marketing & Analytics. MSc candidate at Toulouse Business School.',
  keywords: [
    'Isabel Borgen',
    'Digital Marketing',
    'Analytics',
    'AI Marketing',
    'Barcelona',
    'TBS',
    'Toulouse Business School',
    'SEO',
    'Google Ads',
    'Portfolio',
  ],
  authors: [{ name: 'Isabel Borgen' }],
  creator: 'Isabel Borgen',
  openGraph: {
    title: 'Isabel Borgen | Digital Marketing & Analytics',
    description:
      'Where Data Meets Creativity — AI-Driven Marketing for the Next Era',
    type: 'website',
    locale: 'en_US',
    siteName: 'Isabel Borgen Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Isabel Borgen | Digital Marketing & Analytics',
    description: 'Where Data Meets Creativity — AI-Driven Marketing for the Next Era',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        style={{
          fontFamily: 'var(--font-jost), system-ui, sans-serif',
        }}
      >
        {children}
      </body>
    </html>
  )
}
