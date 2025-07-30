/* eslint-disable @next/next/no-page-custom-font */
import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from '@/components/ui/toaster'

import Provider from '@/utils/providers'
import { TooltipProvider } from '@/components/ui/tooltip'

import {
  COMPANY_NAME,
  SITE_URL,
  COMPANY_DESCRIPTION,
  OG_IMAGE,
} from '@/constants/constants'

import {
  AnalyticsComponent,
  ScrollUpButton,
  CookieConsentComponent,
  Footer,
} from './_components'

const inter = Inter({ subsets: ['latin'] })

const PAGE_TITLE = 'Links Oficiais'

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
    <html lang="pt">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#191919" />
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <Provider>
          <TooltipProvider>
            {children}
            <Footer />
            <ScrollUpButton />
            <CookieConsentComponent />
            <Toaster />
            <AnalyticsComponent />
          </TooltipProvider>
        </Provider>
      </body>
    </html>
  )
}
