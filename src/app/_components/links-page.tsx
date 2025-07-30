'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { Button } from '@/components/ui/button'
import { Facebook, Instagram, MapPin } from 'lucide-react'
import { FaPhone, FaWhatsapp } from 'react-icons/fa'

import {
  COMPANY_NAME,
  LINK_FACEBOOK,
  LINK_INSTAGRAM,
  LINK_LOCATION,
  LINK_PHONE,
  LINK_WHATSAPP,
} from '@/constants/constants'

import { ILink } from '@/interfaces'
import { logo } from '@/images'

import { NoticeOperationComponent } from '.'

const links: ILink[] = [
  {
    href: LINK_INSTAGRAM,
    label: 'Instagram',
    icon: <Instagram size={20} />,
  },
  {
    href: LINK_FACEBOOK,
    label: 'Facebook',
    icon: <Facebook size={20} />,
  },
  {
    href: LINK_WHATSAPP,
    label: '(18) 99646-6353',
    icon: <FaWhatsapp size={20} />,
  },
  {
    href: LINK_PHONE,
    label: '(18) 99646-6353',
    icon: <FaPhone size={20} />,
  },
  {
    href: LINK_LOCATION,
    label: 'Localização',
    icon: <MapPin size={20} />,
  },
]

export default function LinksPageComponent() {
  return (
    <div className="text-real flex min-h-screen flex-col items-center justify-center bg-real-background p-6">
      <motion.div
        className="mb-3 w-full max-w-md text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src={logo}
          alt="Logo"
          width={160}
          height={160}
          className="shadow-real mx-auto mb-4 rounded-full shadow-md"
          priority
        />
        <h1 className="text-3xl font-bold uppercase text-real-primary sm:text-4xl">
          {COMPANY_NAME}
        </h1>
        <p className="mt-2 text-sm text-real-text-600">
          Cuidamos do seu carro, como se fosse nosso! <br />
          Lavagem detalhada | Polimentos | Restaurações <br />
          Seg a Sex: 8h às 17h
        </p>
        <NoticeOperationComponent />
        <p className="mt-6 uppercase text-real-text-800">
          Nossos links oficiais
        </p>
      </motion.div>

      <motion.div
        className="w-full max-w-xs space-y-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15, delayChildren: 0.3 },
          },
        }}
        role="navigation"
        aria-label="Links oficiais da Jocar Polimentos"
      >
        {links.map((link, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Link
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                asChild
                className="group mb-2 flex w-full items-center bg-real-background-400 text-real-primary transition-all hover:bg-real-primary hover:text-real-background" // Adicionando a classe 'group'
              >
                <div className="grid w-full grid-cols-[auto_1fr] items-center gap-5 p-3">
                  <motion.span
                    whileHover={{ scale: 1.2 }}
                    className="ml-[4.5rem] flex flex-col items-start"
                  >
                    {link.icon}
                  </motion.span>
                  <span className="flex flex-col items-start text-left text-sm text-real-text transition-colors group-hover:text-real-background">
                    {link.label}
                  </span>
                </div>
              </Button>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
