'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { HIDDEN_PATHS } from '../../../constants/constants'

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
    silktideCookieBannerManager: {
      updateCookieBannerConfig: (config: Record<string, unknown>) => void
    }
    silktideBannerLoaded?: boolean
  }
}

const gtag = (...args: unknown[]) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag(...args)
  }
}

export function CookieConsentComponent() {
  const pathname = usePathname()

  const shouldHide = HIDDEN_PATHS.some((path) => pathname.startsWith(path))

  useEffect(() => {
    if (shouldHide || window.silktideBannerLoaded) return

    window.silktideBannerLoaded = true

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.id = 'silktide-consent-manager-css'
    link.href = '/silktide/silktide-consent-manager.css'
    document.head.appendChild(link)

    const script = document.createElement('script')
    script.src = '/silktide/silktide-consent-manager.js'
    script.async = true
    script.onload = () => {
      window.silktideCookieBannerManager?.updateCookieBannerConfig({
        background: { showBackground: false },
        cookieIcon: { position: 'bottomLeft' },
        cookieTypes: [
          {
            id: 'necessarios',
            name: 'Necessários',
            description:
              '<p>Esses cookies são essenciais para que o site funcione do jeito certo e não podem ser desativados. Eles cuidam de coisas importantes, como login e suas preferências de privacidade.</p>',
            required: true,
            onAccept: () => console.log('Cookies necessários sempre ativos'),
          },
          {
            id: 'analiticos',
            name: 'Analíticos',
            description:
              '<p>Esses cookies nos ajudam a entender como o site está sendo usado — quais páginas são mais visitadas, como as pessoas navegam por aqui — tudo isso pra gente melhorar sua experiência cada vez mais.</p>',
            required: false,
            onAccept: () => {
              gtag('consent', 'update', { analytics_storage: 'granted' })
              window.dataLayer?.push({ event: 'consent_accepted_analiticos' })
            },
            onReject: () =>
              gtag('consent', 'update', { analytics_storage: 'denied' }),
          },
          {
            id: 'publicidade',
            name: 'Publicidade',
            description:
              '<p>Esses cookies ativam recursos extras e ajudam a personalizar sua experiência. Podem ser definidos por nós ou por parceiros que oferecem serviços no site — tudo pra deixar sua navegação mais relevante e interessante.</p>',
            required: false,
            onAccept: () => {
              gtag('consent', 'update', {
                ad_storage: 'granted',
                ad_user_data: 'granted',
                ad_personalization: 'granted',
              })
              window.dataLayer?.push({ event: 'consent_accepted_publicidade' })
            },
            onReject: () => {
              gtag('consent', 'update', {
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
              })
            },
          },
        ],
        text: {
          banner: {
            description:
              '<p><strong>Nós usamos cookies</strong><br> Eles são usados para aprimorar a sua experiência. Ao fechar este banner ou continuar na página, você concorda com o uso de cookies e com os termos da nossa Política de Cookies.</p>',
            acceptAllButtonText: 'Aceitar tudo',
            acceptAllButtonAccessibleLabel: 'Aceitar todos os cookies',
            rejectNonEssentialButtonText: 'Rejeitar não essenciais',
            rejectNonEssentialButtonAccessibleLabel:
              'Recusar cookies que não são necessários para o funcionamento do site',
            preferencesButtonText: 'Preferências',
            preferencesButtonAccessibleLabel: 'Ajustar preferências',
          },
          preferences: {
            title: 'Personalize seus cookies',
            description:
              '<p>A gente respeita sua privacidade. Você pode escolher quais tipos de cookies autoriza usar — suas preferências vão valer em todo o nosso site.</p>',
            creditLinkText: 'Feito com Silktide',
            creditLinkAccessibleLabel: 'Feito com Silktide',
          },
        },
        position: { banner: 'bottomCenter' },
      })
    }
    document.body.appendChild(script)
  }, [shouldHide])

  return null
}
