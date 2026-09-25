'use client'

import Image from 'next/image'
import { FC } from 'react'

import { COMPANY_NAME } from '@/constants/metadata'

interface Props {
  isMobileNav: boolean
  handleMenuMobileClick: () => void
}

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

export const HeaderBar: FC<Props> = ({
  isMobileNav,
  handleMenuMobileClick,
}) => (
  <header className="header">
    <nav className="header-nav">
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
    <div
      className={`mobile-burger ${isMobileNav ? 'burger-active' : ''}`}
      onClick={handleMenuMobileClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  </header>
)
