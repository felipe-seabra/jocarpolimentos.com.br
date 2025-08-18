import Image from 'next/image'
import { FC } from 'react'

import { ScrollReveal } from '@/components/ScrollReveal'

export const AboutSection: FC = () => (
  <section className="about-section" id="about">
    <div className="about-section-top">
      <div className="about-section-text">
        <ScrollReveal transition="1s" XorY="x" minusplus="-">
          <h2 className="about-section-h2">
            Nós temos <span className="yearsExp">paixão</span> por{' '}
            <span className="experience">Detalhes</span>
          </h2>
        </ScrollReveal>

        <p className="about-text">
          A <strong>Jocar Polimentos</strong> é especialista em estética
          automotiva: polimento técnico, cristalização/cerâmica, espelhamento,
          proteção de pintura, higienização interna e revitalização de faróis.
          Cuidamos de cada detalhe para devolver o brilho, a proteção e a
          sensação de carro novo — do capô ao acabamento.
        </p>

        <p className="about-text">
          Nosso processo é artesanal e criterioso, com produtos de alta
          performance e equipe apaixonada por resultados. Seja para valorizar o
          seu veículo, corrigir marcas do tempo ou elevar o padrão de
          apresentação da sua frota, a Jocar Polimentos entrega acabamento de
          vitrine e proteção duradoura.
        </p>

        <span className="line"></span>

        <div className="hours-container">
          <span>Horários</span>
          <div className="hours-area">
            <ScrollReveal XorY="Y" minusplus="-" transition="1s">
              <div>
                <p className="hours-week">Seg a Sex</p>
                <p>08:00 - 17:00</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <Image
        src="/images/vitrification.webp"
        id="about-img"
        alt="Jocar Polimentos - vitrificação de pintura"
        width={500} // TODO: update width
        height={500} // TODO: update height
      />
    </div>
  </section>
)
