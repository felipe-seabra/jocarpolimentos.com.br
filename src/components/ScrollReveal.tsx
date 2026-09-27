'use client'

import React, { useEffect, useRef, useState } from 'react'

type Props = {
  children: React.ReactNode
  transition: string
  XorY: string
  minusplus: string
}

export const ScrollReveal = ({
  children,
  transition,
  XorY,
  minusplus,
}: Props) => {
  const revealRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = revealRef.current

    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={revealRef}
      style={{
        opacity: isVisible ? '1' : '0',
        transform: isVisible
          ? `translate${XorY}(0px)`
          : `translate${XorY}(${minusplus}200px)`,
        transition: `all ${transition} ease-out`,
      }}
    >
      {children}
    </div>
  )
}
