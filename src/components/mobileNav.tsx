'use client'

type props = {
  isMobileNav: boolean
  handleMenuMobileClick: () => void
}
export const MobileNav = ({ isMobileNav, handleMenuMobileClick }: props) => {
  return (
    <div
      className={`mobile-nav
         ${isMobileNav ? 'show-mobile-nav' : ''}`}
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
    </div>
  )
}
