import { FC } from 'react'

import { Button } from '@/components/button'
import { ScrollReveal } from '@/components/ScrollReveal'
import Link from 'next/link'

export const HeroSection: FC = () => (
  <section className="hero-section" id="home">
    <ScrollReveal XorY="Y" minusplus="+" transition="0.8s">
      <p className="local-hero">Presidente Prudente - São Paulo</p>
      <h1 className="hero-h1">Seu veículo em boas mãos!</h1>
    </ScrollReveal>
    <ScrollReveal XorY="Y" minusplus="-" transition="0.8s">
      <h2 className="hero-h2">
        Trazemos soluções para seu veículo e atendimento de qualidade para você!
        <br />
        Entre em contato conosco para agendar um horário.
      </h2>
      <Link href="https://whatsapp.jocarpolimentos.com.br">
        <Button label="AGENDAR" />
      </Link>
    </ScrollReveal>
  </section>
)
