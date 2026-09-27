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
        Polimento, vitrificação, higienização interna e revitalização de faróis,
        com atendimento de qualidade para o seu veículo.
        <br />
        Entre em contato conosco para agendar um horário.
      </h2>
      <Link
        href="https://whatsapp.jocarpolimentos.com.br"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button label="AGENDAR" />
      </Link>
    </ScrollReveal>
  </section>
)
