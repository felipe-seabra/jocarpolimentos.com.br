import Image from 'next/image'

import { logo } from '@/images'

export default function LoadingHomePage() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-real-background text-real-text">
      <div className="animate-pulse rounded-md">
        <Image
          src={logo}
          alt="Logo"
          width={72}
          height={72}
          className="flex w-full animate-bounce items-center justify-center rounded-full"
        />
      </div>
      <div className="w-20 rounded-lg border-2 border-real-primary-900 shadow-lg blur-sm" />
    </div>
  )
}
