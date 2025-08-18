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
    <button
      className="px-5 py-4 rounded-xl bg-red-600 text-white transition-all duration-200 hover:brightness-110"
      onClick={handleScrollTo}
    >
      {label}
    </button>
  )
}
