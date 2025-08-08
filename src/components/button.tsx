'use client'

type props = {
  label: string
  scrollTo?: string
}
export function Button({ label, scrollTo }: props) {
  const handleScrollTo = () => {
    const sectionScroll = document.getElementById(`${scrollTo}`)
    if (scrollTo) {
      sectionScroll?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <button className="button text-white" onClick={handleScrollTo}>
      {label}
    </button>
  )
}
