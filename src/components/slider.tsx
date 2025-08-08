'use client'

import { slideData } from '../data/slideData'
import { useEffect, useRef, useState } from 'react'

export const Slider = ({ currentSlide }: { currentSlide: number }) => {
  const [cardWidth, setCardWidth] = useState(800)
  const [offset, setOffset] = useState(0)
  const firstCardRef = useRef<HTMLDivElement | null>(null)

  // mede a largura real do 1º card
  useEffect(() => {
    if (!firstCardRef.current) return
    const ro = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect?.width
      if (w) setCardWidth(w)
    })
    ro.observe(firstCardRef.current)
    return () => ro.disconnect()
  }, [])

  // calcula o deslocamento correto
  useEffect(() => {
    const total = slideData.length

    if (total <= 1) {
      setOffset(0)
      return
    }

    if (total % 2 === 1) {
      // Ímpar: centraliza no item do meio
      const centerIndex = Math.floor(total / 2)
      const calc = -(currentSlide - centerIndex) * cardWidth
      setOffset(calc)
    } else {
      // Par: começa no primeiro
      const calc = -(currentSlide * cardWidth)
      setOffset(calc)
    }
  }, [currentSlide, cardWidth])

  return (
    <div
      className="slider-area"
      style={{
        transform: `translateX(${offset}px)`,
        transition: 'transform 300ms ease',
      }}
    >
      {slideData.map((item, index) => (
        <div
          className={`slide-card ${index === currentSlide ? 'active' : 'inactive'}`}
          key={index}
          ref={index === 0 ? firstCardRef : null}
        >
          <div
            className="team-image"
            style={{
              background: `url('/images/team/${item.img}') center/cover no-repeat`,
            }}
          >
            <div
              className={`team-medias ${index === currentSlide ? 'mediasActive' : ''}`}
            >
              <p>{item.description}</p>
            </div>
          </div>
          <div className="slide-card-info">
            <p className="team-name">{item.name}</p>
            <p className="team-exp">{item.exp}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
