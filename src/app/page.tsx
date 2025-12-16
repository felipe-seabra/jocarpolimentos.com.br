'use client'

import {
  useState,
  useEffect,
  // FormEvent
} from 'react'
import { Righteous } from 'next/font/google'

import { MobileNav } from '../components/mobileNav'
import { slideData } from '../data/slideData'
import {
  AboutSection,
  TeamSection,
  FooterSection,
  HeaderBar,
  HeroSection,
  SpaceSection,
  ServicesSection,
  // SubscribeSection,
} from './_components'

const righteous = Righteous({ weight: '400', subsets: ['latin'] })

const startIndex =
  slideData.length % 2 === 1
    ? Math.floor(slideData.length / 2) // ímpar: meio
    : 0 // par: primeiro

export default function Home() {
  const [isMobileNav, setIsMobileNav] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(startIndex)

  useEffect(() => {
    // Adiciona um pequeno atraso para garantir que a rolagem do navegador para a âncora (se houver) ocorra primeiro.
    // Em seguida, força a rolagem para o topo da página.
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 1)
  }, [])

  // const [email, setEmail] = useState('')
  // const [modalProps, setModalProps] = useState<{ isValid: boolean } | null>(
  //   null,
  // )

  const handleMenuMobileClick = () => {
    setIsMobileNav(!isMobileNav)
  }

  const handleSlidePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slideData.length - 1 : prev - 1))
  }

  const handleSlideNext = () => {
    setCurrentSlide((prev) => (prev === slideData.length - 1 ? 0 : prev + 1))
  }

  // const handleSubmitEmail = (evt: FormEvent) => {
  //   evt.preventDefault()
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  //   if (email.trim() === '') {
  //     setModalProps({ isValid: false })
  //   } else if (!emailRegex.test(email)) {
  //     alert('erro na validação do email')
  //   } else {
  //     setModalProps({ isValid: true })
  //   }
  // }

  // const handleCloseModal = () => {
  //   setModalProps(null)
  //   setEmail('')
  // }

  return (
    <div className={`text-white ${righteous.className}`}>
      <main>
        <HeaderBar
          isMobileNav={isMobileNav}
          handleMenuMobileClick={handleMenuMobileClick}
        />
        <MobileNav
          isMobileNav={isMobileNav}
          handleMenuMobileClick={handleMenuMobileClick}
        />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SpaceSection />
        <TeamSection
          currentSlide={currentSlide}
          handleSlidePrev={handleSlidePrev}
          handleSlideNext={handleSlideNext}
        />
        {/* <SubscribeSection
          email={email}
          modalProps={modalProps}
          handleSubmitEmail={handleSubmitEmail}
          handleEmailChange={(e) => setEmail(e.target.value)}
          handleCloseModal={handleCloseModal}
        /> */}
        <FooterSection />
      </main>
    </div>
  )
}
