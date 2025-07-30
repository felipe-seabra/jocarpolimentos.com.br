'use client'

import { useEffect, useState } from 'react'

export function NoticeOperationComponent() {
  const [statusText, setStatusText] = useState('')
  const [textColor, setTextColor] = useState('text-red-400')
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    const now = new Date()
    const dayOfWeek = now.getDay()
    const hours = now.getHours()

    const openHour = 8
    const closeHourWeekdays = 18
    const closeHourSaturday = 12

    // Lista manual de feriados (no formato YYYY-MM-DD)
    const holidays = [
      '2025-04-21', // Tiradentes
      '2025-05-01', // Dia do Trabalho
      // Adicione outros feriados conforme necessário
    ]

    const todayStr = now.toISOString().split('T')[0] // pega só a parte da data YYYY-MM-DD

    let newStatusText = ''
    let newTextColor = 'text-red-400'

    const isHoliday = holidays.includes(todayStr)

    if (isHoliday) {
      newStatusText = `FECHADO - ABRE ÀS ${openHour}H NA TERÇA`
    } else if (dayOfWeek === 0) {
      newStatusText = `FECHADO - ABRE ÀS ${openHour}H NA SEGUNDA`
    } else if (dayOfWeek === 6) {
      if (hours >= openHour && hours < closeHourSaturday) {
        newStatusText = `ABERTO - FECHA ÀS ${closeHourSaturday}H`
        newTextColor = 'text-green-400'
      } else {
        newStatusText = `FECHADO - ABRE ÀS ${openHour}H NA SEGUNDA`
      }
    } else if (dayOfWeek >= 1 && dayOfWeek <= 5) {
      if (hours < openHour) {
        newStatusText = `FECHADO - ABRE ÀS ${openHour}H`
      } else if (hours >= closeHourWeekdays) {
        newStatusText = `FECHADO - ABRE NO DIA SEGUINTE ÀS ${openHour}H`
      } else {
        newStatusText = `ABERTO - FECHA ÀS ${closeHourWeekdays}H`
        newTextColor = 'text-green-400'
      }
    }

    setStatusText(newStatusText)
    setTextColor(newTextColor)
  }, [])

  if (!isClient) return null

  return (
    <div
      className={`top-auto z-30 m-auto mt-3 flex h-7 w-max translate-x-0 transform items-center justify-center rounded-lg bg-real-background-400 px-4 py-1 text-xs font-bold uppercase shadow-lg lg:relative lg:left-0 ${textColor}`}
    >
      <span>{statusText}</span>
    </div>
  )
}