import Image from 'next/image'
import { FC, FormEvent } from 'react'

import { EmailModal } from '@/components/EmailModal'
import { COMPANY_NAME } from '@/constants/metadata'

interface Props {
  email: string
  modalProps: { isValid: boolean } | null
  handleSubmitEmail: (e: FormEvent) => void
  handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleCloseModal: () => void
}

export const SubscribeSection: FC<Props> = ({
  email,
  modalProps,
  handleSubmitEmail,
  handleEmailChange,
  handleCloseModal,
}) => (
  <section className="subscribe-section">
    <Image
      src="/images/logo.webp"
      alt={`Logo da ${COMPANY_NAME}`}
      width={100}
      height={100}
    />
    <div className="subscribe-area">
      <h2>Inscreva-se na nossa Newsletter</h2>
      <h3>
        Receba <span>conteúdos exclusivos</span> e fique por dentro das
        novidades
      </h3>
      <p>
        Assine nossa newsletter para receber as principais notícias do mundo da
        estética automotiva. Mantenha-se sempre atualizado!
      </p>
      <form className="subscribe-input" onSubmit={handleSubmitEmail}>
        <input
          type="text"
          placeholder="Digite seu email"
          data-rules="email"
          value={email}
          onChange={handleEmailChange}
        />
        <button type="submit">ENVIAR</button>
        {modalProps && (
          <EmailModal isValid={modalProps.isValid} onClose={handleCloseModal} />
        )}
      </form>
    </div>
  </section>
)
