import Link from 'next/link'

import { ChatPopUpComponent } from '../chat-pop-up'
import { COMPANY_NAME } from '../../../constants/constants'

const currentDate = new Date()
const currentYear = currentDate.getFullYear()

const footer = {
  date: currentYear.toString(),
  COMPANY_NAME,
  description: 'Todos os direitos reservados.',
}

export function Footer() {
  return (
    <footer className="relative bottom-0 z-30 w-full bg-real-background pb-2">
      <span className="block text-center text-sm text-real-text-700">
        © {footer.date}{' '}
        <Link href="/" className="hover:underline">
          {footer.COMPANY_NAME}
        </Link>{' '}
        - {footer.description}
      </span>
      <span className="mt-1 block text-center text-xs text-real-text-700">
        Av. José Libânio Filho, 454 - Parque Cedral
        <br />
        Pres. Prudente -SP
      </span>
      <ChatPopUpComponent />
    </footer>
  )
}
