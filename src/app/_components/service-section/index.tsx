import { FC } from 'react'

import Link from 'next/link'

import { FaPaintBrush, FaSprayCan, FaShieldAlt, FaSun } from 'react-icons/fa'
import { ScrollReveal } from '@/components/ScrollReveal'
import { Button } from '@/components/button'

export const ServicesSection: FC = () => (
  <section className="services-section" id="services">
    <div className="services-title">
      <h2>Serviços de estética automotiva</h2>
      <h3>o que fazemos na Jocar</h3>
    </div>

    <div className="skill-area">
      <ScrollReveal XorY="Y" minusplus="-" transition="0.8s">
        <div className="skill">
          <FaPaintBrush className="skill-icon" />
          <p className="skill-title">Polimento Técnico & Espelhamento</p>
          <p className="skill-text mb-2">
            Correção de riscos leves e marcas de lavagem, realçando profundidade
            e brilho com acabamento de vitrine.
          </p>
          <Link href="https://whatsapp.jocarpolimentos.com.br">
            <Button label="Fazer orçamento" />
          </Link>
        </div>
      </ScrollReveal>

      <ScrollReveal XorY="Y" minusplus="-" transition="1s">
        <div className="skill">
          <FaShieldAlt className="skill-icon" />
          <p className="skill-title">Vitrificação / Cerâmica</p>
          <p className="skill-text mb-2">
            Proteção de longa duração contra raios UV, chuva ácida e sujeiras,
            com hidro-repelência e fácil manutenção.
          </p>
          <Link href="https://whatsapp.jocarpolimentos.com.br">
            <Button label="Fazer orçamento" />
          </Link>
        </div>
      </ScrollReveal>

      <ScrollReveal XorY="Y" minusplus="-" transition="1.2s">
        <div className="skill">
          <FaSprayCan className="skill-icon" />
          <p className="skill-title">Higienização Interna</p>
          <p className="skill-text mb-10">
            Limpeza técnica de estofados, plásticos e dutos de ar, eliminando
            odores e devolvendo o aspecto de carro novo.
          </p>
          <Link href="https://whatsapp.jocarpolimentos.com.br">
            <Button label="Fazer orçamento" />
          </Link>
        </div>
      </ScrollReveal>

      <ScrollReveal XorY="Y" minusplus="-" transition="1.4s">
        <div className="skill">
          <FaSun className="skill-icon" />
          <p className="font-semibold mb-4 text-[#071120]">
            Revitalização de Faróis
          </p>
          <p className="skill-text mb-10">
            Remoção de amarelado e opacidade com proteção UV para melhorar a
            estética e a visibilidade noturna.
          </p>
          <Link href="https://whatsapp.jocarpolimentos.com.br">
            <Button label="Fazer orçamento" />
          </Link>
        </div>
      </ScrollReveal>
    </div>
  </section>
)
