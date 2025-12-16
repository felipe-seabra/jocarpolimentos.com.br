'use client'

import { FC } from 'react'

import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import { Slider } from '@/components/slider'

interface Props {
  currentSlide: number
  handleSlidePrev: () => void
  handleSlideNext: () => void
}

export const TeamSection: FC<Props> = ({
  currentSlide,
  handleSlidePrev,
  handleSlideNext,
}) => {
  return (
    <section className="teams-section" id="team">
      <h2 className="teams-title">
        Nossa <span>equipe</span>
      </h2>
      <Slider currentSlide={currentSlide} />
      <div className="slide-btn-area">
        <button onClick={handleSlidePrev}>
          <GrFormPrevious className="slide-btn" />
        </button>
        <button onClick={handleSlideNext}>
          <GrFormNext className="slide-btn" />
        </button>
      </div>
    </section>
  )
}
