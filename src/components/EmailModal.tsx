'use client'

type Props = {
  isValid: boolean
  onClose: () => void
}
export const EmailModal = ({ isValid, onClose }: Props) => {
  return (
    <div className={`email-modal-container`}>
      <div className={`email-modal ${isValid ? '' : 'email-modal-false'}`}>
        <h1 className={isValid ? 'modalValidTitle' : 'modalInvalidTitle'}>
          {isValid ? 'Inscrição confirmada!' : 'Erro ao enviar.'}
        </h1>
        <p className="email-modal-body">
          {!isValid && 'Erro: Campo de email vazio.'}
          {isValid &&
            'Agradecemos por se inscrever para receber nossos e-mails. A partir de agora, você ficará por dentro das últimas tendências e atualizações do mundo manutenção automotiva.'}
        </p>
        <button className="button" onClick={onClose}>
          Confirmar
        </button>
      </div>
    </div>
  )
}
