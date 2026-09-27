import Image from 'next/image'
import { FC } from 'react'

import { Button } from '@/components/button'
import Link from 'next/link'

export const HeroSection: FC = () => (
  <section className="hero-section" id="home">
    <div className="hero-background" aria-hidden="true">
      <Image
        src="/images/hero_background.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="hero-background-image"
      />
    </div>

    <div className="hero-content">
      <p className="local-hero">Presidente Prudente - São Paulo</p>
      <h1 className="hero-h1">Seu veículo em boas mãos!</h1>

      <h2 className="hero-h2">
        Polimento automotivo, vitrificação, higienização interna e revitalização
        de faróis em Presidente Prudente, com atendimento de qualidade para o
        seu veículo.
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
    </div>
  </section>
)
