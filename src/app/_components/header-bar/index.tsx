'use client'

import Image from 'next/image'
import { FC, useState } from 'react'

import { COMPANY_NAME } from '@/constants/metadata'

import { MobileNav } from '@/components/mobileNav'

const NAVIGATION_BEFORE = [
  { name: 'Início', href: '#home' },
  { name: 'Sobre', href: '#about' },
  { name: 'Serviços', href: '#services' },
]

const NAVIGATION_AFTER = [
  { name: 'Espaço', href: '#space' },
  { name: 'Equipe', href: '#team' },
  { name: 'Contato', href: '#contact' },
]

export const HeaderBar: FC = () => {
  const [isMobileNav, setIsMobileNav] = useState(false)

  const handleMenuMobileClick = () => {
    setIsMobileNav((isOpen) => !isOpen)
  }

  return (
    <>
      <header className="header">
        <nav className="header-nav" aria-label="Navegação principal">
          <ul className="header-list">
            {NAVIGATION_BEFORE.map((item) => (
              <li key={item.name}>
                <a href={item.href} className="linksHeader">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <Image
            src="/images/logo.webp"
            alt={`Logo da ${COMPANY_NAME}`}
            width={100}
            height={100}
            className="logo"
          />
          <ul className="header-list">
            {NAVIGATION_AFTER.map((item) => (
              <li key={item.name}>
                <a href={item.href} className="linksHeader">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          type="button"
          className={`mobile-burger ${isMobileNav ? 'burger-active' : ''}`}
          onClick={handleMenuMobileClick}
          aria-label={isMobileNav ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMobileNav}
          aria-controls="mobile-navigation"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </header>
      <MobileNav
        isMobileNav={isMobileNav}
        handleMenuMobileClick={handleMenuMobileClick}
      />
    </>
  )
}
