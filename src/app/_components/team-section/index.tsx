'use client'

import { FC, useState } from 'react'

import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import { Slider } from '@/components/slider'
import { slideData } from '@/data/slideData'

const startIndex =
  slideData.length % 2 === 1 ? Math.floor(slideData.length / 2) : 0

export const TeamSection: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(startIndex)

  const handleSlidePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slideData.length - 1 : prev - 1))
  }

  const handleSlideNext = () => {
    setCurrentSlide((prev) => (prev === slideData.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="teams-section" id="team">
      <h2 className="teams-title">
        Equipe de <span>estética automotiva</span>
      </h2>
      <Slider currentSlide={currentSlide} />
      <div className="slide-btn-area">
        <button
          type="button"
          onClick={handleSlidePrev}
          aria-label="Ver equipe anterior"
        >
          <GrFormPrevious className="slide-btn" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={handleSlideNext}
          aria-label="Ver próxima equipe"
        >
          <GrFormNext className="slide-btn" aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}
