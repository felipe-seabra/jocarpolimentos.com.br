import { Suspense } from 'react'

import LoadingHomePage from './loading'
import LinksPageComponent from './_components/links-page'

export default function Home() {
  return (
    <main>
      <Suspense fallback={<LoadingHomePage />}>
        <LinksPageComponent />
      </Suspense>
    </main>
  )
}
