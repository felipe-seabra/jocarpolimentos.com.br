'use client'

import { slideData } from '../data/slideData'
import { useEffect, useState } from 'react'

const slideWidth = 800

export const Slider = ({ currentSlide }: { currentSlide: number }) => {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const totalSlides = slideData.length

    if (totalSlides <= 1) {
      // Só um slide: centraliza
      setOffset(0)
      return
    }

    if (totalSlides % 2 === 1) {
      // Ímpar: centraliza no item do meio
      const centerIndex = Math.floor(totalSlides / 2)
      const calcOffset = (currentSlide - centerIndex) * slideWidth * -1
      setOffset(calcOffset)
    } else {
      // Par: centraliza no meio exato (entre os dois centrais)
      // Ex.: total=4 → meio é 1.5 (entre índices 1 e 2)
      const centerPoint = totalSlides / 2 - 0.5
      const calcOffset = (currentSlide - centerPoint) * slideWidth * -1
      setOffset(calcOffset)
    }
  }, [currentSlide])

  return (
    <div className="slider-area" style={{ marginLeft: `${offset}px` }}>
      {slideData.map((item, index) => (
        <div
          className={`slide-card ${index === currentSlide ? 'active' : 'inactive'}`}
          key={index}
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
