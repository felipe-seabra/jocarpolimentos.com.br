import { Righteous } from 'next/font/google'

import {
  AboutSection,
  FooterSection,
  HeroSection,
  ServicesSection,
  SpaceSection,
} from './_components'

import { TeamSection } from './_components/team-section'
import { HeaderBar } from './_components/header-bar'

const righteous = Righteous({ weight: '400', subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`text-white ${righteous.className}`}>
      <main>
        <HeaderBar />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SpaceSection />
        <TeamSection />
        <FooterSection />
      </main>
    </div>
  )
}
