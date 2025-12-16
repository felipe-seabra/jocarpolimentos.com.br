'use client'

import { slideData } from '../data/slideData'
import { useEffect, useRef, createRef, RefObject } from 'react'

interface SliderProps {
  currentSlide: number
}

export const Slider = ({ currentSlide }: SliderProps) => {
  const sliderContainerRef = useRef<HTMLDivElement | null>(null)

  // Cria um array de referências, uma para cada slide.
  // Isso nos permite acessar cada elemento de slide individualmente.
  const slideRefs = useRef<RefObject<HTMLDivElement>[]>(
    Array(slideData.length)
      .fill(null)
      .map(() => createRef<HTMLDivElement>()),
  )

  // Efeito para rolar suavemente até o slide ativo sempre que `currentSlide` mudar.
  useEffect(() => {
    const activeSlideRef = slideRefs.current[currentSlide]
    if (activeSlideRef?.current) {
      activeSlideRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      })
    }
  }, [currentSlide])

  return (
    <div className="slider-container" ref={sliderContainerRef}>
      <div className="slider-area">
        {slideData.map((item, index) => (
          <div
            className={`slide-card ${
              index === currentSlide ? 'active' : 'inactive'
            }`}
            key={index}
            ref={slideRefs.current[index]} // Associa a ref correta ao slide
          >
            <div
              className="team-image"
              style={{
                background: `url('/images/team/${item.img}') center/cover no-repeat`,
              }}
            >
              <div
                className={`team-medias ${
                  index === currentSlide ? 'mediasActive' : ''
                }`}
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
    </div>
  )
}
