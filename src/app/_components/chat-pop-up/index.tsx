'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { logo } from '@/images'
import { Input } from '../../../components/ui/input'
import { Button } from '../../../components/ui/button'
import { COMPANY_NAME, HIDDEN_PATHS } from '@/constants/constants'
import { motion, AnimatePresence } from 'framer-motion'

export function ChatPopUpComponent() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [showButton, setShowButton] = useState(true)
  const [message, setMessage] = useState('')

  const handleTogglePopup = () => {
    setShowButton(false)
    setIsOpen(true)
  }
  const handleClosePopup = () => {
    setIsOpen(false)
    setTimeout(() => setShowButton(true), 400)
  }

  const handleSendMessage = () => {
    const encodedMessage = encodeURIComponent(message)
    window.open(
      `https://api.whatsapp.com/send?phone=5518996466353&text=${encodedMessage}`,
      '_blank',
    )
    handleClosePopup()
    setMessage('')
  }

  const handleKeyPress = (e: { key: string }) => {
    if (e.key === 'Enter') handleSendMessage()
  }

  const containerStyle = {
    bottom: showButton ? '35px' : '80px',
    cursor: showButton ? 'pointer' : 'auto',
  }

  const shouldHide = HIDDEN_PATHS.some((path) => pathname.startsWith(path))

  if (shouldHide) return null

  return (
    <div
      style={containerStyle}
      className="fixed right-4 z-10 flex items-center transition-all duration-300 ease-in-out md:right-8"
      role="complementary"
      aria-label="Botão flutuante para conversar pelo WhatsApp"
    >
      {/* Ícone principal */}
      <AnimatePresence>
        {showButton && !isOpen && (
          <motion.div
            key="whatsapp-button"
            onClick={handleTogglePopup}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0 }}
            className="flex items-center rounded-full bg-green-600 p-3 shadow-lg hover:bg-green-500 md:p-4"
            aria-label="Abrir chat do WhatsApp"
          >
            <i
              className="bx bxl-whatsapp text-2xl text-white md:text-3xl"
              aria-hidden="true"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-popup"
            className="flex items-end gap-3"
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95, x: 30 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-10 mr-3 h-12 w-12 rounded-full shadow-md">
              <Image
                src={logo}
                alt={COMPANY_NAME}
                className="h-auto w-14 rounded-full border-2 border-green-500 bg-real-primary"
                loading="lazy"
              />
            </div>

            <div className="relative mb-3 max-w-60 rounded-xl bg-green-500 p-5 shadow-md">
              <p className="my-2 text-sm text-gray-50">
                Conte com nossa equipe para atender sua necessidade com
                dedicação e agilidade.
              </p>

              <div className="absolute -bottom-12 left-0 w-60">
                <Input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Fale conosco!"
                  className="h-10 w-full rounded-xl border-green-500 bg-gray-100 text-gray-700 shadow-md outline-none placeholder:text-gray-500"
                  aria-label="Digite sua mensagem"
                />
                <Button
                  type="button"
                  onClick={handleSendMessage}
                  className="absolute right-2 top-2 h-6 w-12 bg-green-500 text-xs text-gray-100 hover:bg-green-400"
                  aria-label="Enviar mensagem pelo WhatsApp"
                >
                  Enviar
                </Button>
              </div>

              <motion.button
                onClick={handleClosePopup}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 1.2 }}
                className="absolute -top-9 right-0 flex h-7 w-7 items-center justify-center rounded-full bg-green-500 shadow-sm hover:bg-green-400"
                aria-label="Fechar chat do WhatsApp"
              >
                <i className="bx bx-x text-2xl text-white" aria-hidden="true" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
