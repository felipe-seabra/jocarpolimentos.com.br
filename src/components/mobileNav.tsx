'use client'

type Props = {
  isMobileNav: boolean
  handleMenuMobileClick: () => void
}

export const MobileNav = ({
  isMobileNav,
  handleMenuMobileClick,
}: Props) => {
  return (
    <nav
      id="mobile-navigation"
      className={`mobile-nav ${isMobileNav ? 'show-mobile-nav' : ''}`}
      aria-label="Navegação mobile"
      aria-hidden={!isMobileNav}
    >
      <a href="#home" onClick={handleMenuMobileClick}>
        Início
      </a>
      <a href="#about" onClick={handleMenuMobileClick}>
        Sobre
      </a>
      <a href="#services" onClick={handleMenuMobileClick}>
        Serviços
      </a>
      <a href="#space" onClick={handleMenuMobileClick}>
        Espaço
      </a>
      <a href="#team" onClick={handleMenuMobileClick}>
        Equipe
      </a>
      <a href="#contact" onClick={handleMenuMobileClick}>
        Contato
      </a>
    </nav>
  )
}
