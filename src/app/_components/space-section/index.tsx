import Image from 'next/image'
import { FC } from 'react'

import { ScrollReveal } from '@/components/ScrollReveal'

export const SpaceSection: FC = () => (
  <section className="kids-section" id="space">
    <div className="kids-section-aside">
      <div className="kids-price-area">
        <p className="kids-price-title">Acompanhamento online</p>
        <p className="kids-price">atualizações pelo WhatsApp</p>
      </div>
      <div className="kids-price-area">
        <p className="kids-price-title">Horário combinado</p>
        <p className="kids-price">retire sem esperar</p>
      </div>
      <div className="kids-price-area">
        <p className="kids-price-title">Serviço rápido</p>
        <p className="kids-price">agilidade com qualidade</p>
      </div>
      <div className="kids-price-area">
        <p className="kids-price-title">Próximo ao comércio</p>
        <p className="kids-price">opções para aproveitar o tempo</p>
      </div>
      <div className="kids-price-area">
        <p className="kids-price-title">Flexibilidade</p>
        <p className="kids-price">você escolhe onde ficar</p>
      </div>
    </div>

    <div className="kids-area">
      <ScrollReveal XorY="X" minusplus="-" transition="0.8s">
        <div className="kids-text-area">
          <div className="kids-title">
            <h2>Mais praticidade para você</h2>
            <span>acompanhe de onde estiver</span>
          </div>
          <p className="kids-text">
            Na Jocar Polimentos, você não precisa ficar esperando no local.
            Enviamos atualizações pelo WhatsApp e avisamos quando o serviço
            estiver pronto para retirada.
          </p>
          <p className="kids-text">
            Nosso espaço está próximo a comércios e serviços, para que você
            aproveite o seu tempo como preferir enquanto cuidamos do seu carro
            com toda atenção.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal XorY="X" minusplus="-" transition="0.8s">
        <div className="kids-image-area">
          <Image
            src="/images/space.webp"
            alt="Acompanhamento e conveniência"
            width={500}
            height={500}
          />
          <div className="bg-img">
            <Image
              src="/images/logo-background-black.webp"
              alt="Logo Jocar Polimentos"
              width={100}
              height={100}
            />
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
)
