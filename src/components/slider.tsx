'use client'

import { slideData } from '../data/slideData'
import { useEffect, useRef, useState, RefObject } from 'react'

interface SliderProps {
  // Nova interface para as props
  currentSlide: number
  sliderContainerRef: RefObject<HTMLDivElement> // Receber o ref do container
}

export const Slider = ({ currentSlide, sliderContainerRef }: SliderProps) => {
  // Usar a nova interface
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
    const cardTotalWidth = cardWidth + 100 // 250px (width) + 50px (left margin) + 50px (right margin) = 350px. cardWidth is 250px, so add 100px for margins.

    if (total <= 1) {
      setOffset(0)
      return
    }

    // Obter a largura do container do slider
    const containerWidth = sliderContainerRef.current?.offsetWidth || 0

    // Calcular o offset para centralizar o card
    const targetCardCenter = currentSlide * cardTotalWidth + cardTotalWidth / 2
    const newOffset = containerWidth / 2 - targetCardCenter

    setOffset(newOffset)
  }, [currentSlide, cardWidth, sliderContainerRef]) // Adicionar sliderContainerRef às dependências

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
