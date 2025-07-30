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
    const closeHourWeekdays = 17

    const holidays = [
      '2025-04-21', // Tiradentes
      '2025-05-01', // Dia do Trabalho
    ]

    const todayStr = now.toISOString().split('T')[0]
    const isHoliday = holidays.includes(todayStr)

    // Função para encontrar o próximo dia útil
    function getNextBusinessDay(date: Date): string {
      const options: Intl.DateTimeFormatOptions = { weekday: 'long' }
      const newDate = new Date(date)
      do {
        newDate.setDate(newDate.getDate() + 1)
      } while (
        newDate.getDay() === 0 || // domingo
        newDate.getDay() === 6 || // sábado
        holidays.includes(newDate.toISOString().split('T')[0])
      )
      const weekday = newDate.toLocaleDateString('pt-BR', options)
      return weekday.charAt(0).toUpperCase() + weekday.slice(1) // capitaliza
    }

    let newStatusText = ''
    let newTextColor = 'text-red-400'

    if (isHoliday) {
      const nextDay = getNextBusinessDay(now)
      newStatusText = `FECHADO - VOLTAMOS NA ${nextDay.toUpperCase()} ÀS ${openHour}H`
    } else if (dayOfWeek === 0) {
      newStatusText = `FECHADO - VOLTAMOS NA SEGUNDA ÀS ${openHour}H`
    } else if (dayOfWeek === 6) {
      newStatusText = `FECHADO - VOLTAMOS NA SEGUNDA ÀS ${openHour}H`
    } else if (dayOfWeek >= 1 && dayOfWeek <= 5) {
      if (hours < openHour) {
        newStatusText = `FECHADO - ABRE ÀS ${openHour}H`
      } else if (hours >= closeHourWeekdays) {
        const nextDay = getNextBusinessDay(now)
        newStatusText = `FECHADO - ABRE NA ${nextDay.toUpperCase()} ÀS ${openHour}H`
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
