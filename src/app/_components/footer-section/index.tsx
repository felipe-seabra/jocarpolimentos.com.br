import { FC } from 'react'

import { FaInstagram } from 'react-icons/fa'
import { FaHouse, FaFacebookF, FaWhatsapp } from 'react-icons/fa6'
import { BsFillTelephoneFill } from 'react-icons/bs'

import { ChatPopUpComponent } from '../chat-pop-up'
import Link from 'next/link'
import {
  LINK_FACEBOOK,
  LINK_INSTAGRAM,
  LINK_LOCATION,
  LINK_PHONE,
  LINK_WHATSAPP_CONTACT,
} from '@/constants/social-links'

import { COMPANY_NAME } from '@/constants/metadata'

const currentDate = new Date()
const currentYear = currentDate.getFullYear()

const footer = {
  date: currentYear.toString(),
  COMPANY_NAME,
  description: 'Todos os direitos reservados.',
}

export const FooterSection: FC = () => (
  <footer id="contact">
    <div className="footer-container">
      <div className="footer-div">
        <h2>Links</h2>
        <ul className="link-list">
          <li>
            <a href="#home">Início</a>
          </li>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#services">Serviços</a>
          </li>
          <li>
            <a href="#space">Espaço</a>
          </li>
          <li>
            <a href="#team">Equipe</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </div>
      <div className="footer-div">
        <h2>Horários</h2>
        <div className="horary-footer-area">
          <div className="horary-footer">
            <p>Seg a Sex</p>
            <span>08:00 - 18:00</span>
          </div>
        </div>
      </div>
      <div className="footer-div">
        <h2>Redes Sociais</h2>
        <div className="social-media">
          <Link href={LINK_FACEBOOK} target="_blank" className="flex gap-3">
            <FaFacebookF className="footer-icon" />
            <p>Facebook</p>
          </Link>
        </div>
        <div className="social-media">
          <Link href={LINK_INSTAGRAM} target="_blank" className="flex gap-3">
            <FaInstagram className="footer-icon" />
            <p>Instagram</p>
          </Link>
        </div>
      </div>
      <div className="footer-div">
        <h2>Contatos</h2>
        <div className="contact">
          <Link href={LINK_PHONE} target="_blank" className="flex gap-3">
            <BsFillTelephoneFill className="footer-icon" />
            <p>(18) 99646-6353</p>
          </Link>
        </div>
        <div className="contact">
          <Link
            href={LINK_WHATSAPP_CONTACT}
            target="_blank"
            className="flex gap-3"
          >
            <FaWhatsapp className="footer-icon" />
            <p>(18) 99646-6353</p>
          </Link>
        </div>
        <div className="contact">
          <Link href={LINK_LOCATION} target="_blank" className="flex gap-3">
            <FaHouse className="footer-icon" />
            <address className="not-italic">
              Av. José Libânio Filho, 454
              <br />
              Parque Cedral - Presidente Prudente
            </address>
          </Link>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <p>
        © {footer.date}{' '}
        <Link href="/" className="hover:underline">
          {footer.COMPANY_NAME}
        </Link>{' '}
        - {footer.description}
      </p>
    </div>
    <ChatPopUpComponent />
  </footer>
)
