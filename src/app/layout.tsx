import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

import {
  COMPANY_ADDRESS,
  COMPANY_DESCRIPTION,
  COMPANY_NAME,
  COMPANY_PHONE,
  COMPANY_SOCIALS,
  OG_IMAGE,
  SITE_URL,
} from '@/constants/metadata'

import { AnalyticsComponent, CookieConsentComponent } from './_components'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${COMPANY_NAME} | Estética Automotiva em Presidente Prudente`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description: COMPANY_DESCRIPTION,
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    title: `${COMPANY_NAME} | Estética Automotiva em Presidente Prudente`,
    description: COMPANY_DESCRIPTION,
    siteName: COMPANY_NAME,
    images: [
      {
        url: OG_IMAGE,
        alt: `${COMPANY_NAME} - Estética Automotiva em Presidente Prudente`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY_NAME} | Estética Automotiva em Presidente Prudente`,
    description: COMPANY_DESCRIPTION,
    images: [OG_IMAGE],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: COMPANY_NAME,
  description: COMPANY_DESCRIPTION,
  url: SITE_URL,
  telephone: COMPANY_PHONE,
  image: OG_IMAGE,
  address: {
    '@type': 'PostalAddress',
    ...COMPANY_ADDRESS,
  },
  areaServed: {
    '@type': 'City',
    name: 'Presidente Prudente',
  },
  sameAs: [COMPANY_SOCIALS[0]],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#191919" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <CookieConsentComponent />
        <AnalyticsComponent />
      </body>
    </html>
  )
}
