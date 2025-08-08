import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

import {
  COMPANY_DESCRIPTION,
  COMPANY_NAME,
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

const PAGE_TITLE = COMPANY_DESCRIPTION

export const metadata: Metadata = {
  title: `${COMPANY_NAME} | ${PAGE_TITLE}`,
  description: `${COMPANY_DESCRIPTION}`,
  openGraph: {
    type: 'website',
    locale: 'pt-BR',
    url: `${SITE_URL}`,
    title: `${COMPANY_NAME} | ${PAGE_TITLE}`,
    description: `${COMPANY_DESCRIPTION}`,
    siteName: `${COMPANY_NAME} | ${PAGE_TITLE}`,
    images: [
      {
        url: `${OG_IMAGE}`,
        alt: `${COMPANY_NAME} | ${PAGE_TITLE}`,
      },
    ],
  },
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
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
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
