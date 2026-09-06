"use client"

import React, { useState, useEffect, useRef, useMemo } from "react"
import { Clock, Check, X, RotateCcw } from "lucide-react"

interface Clock24PickerProps {
  label: string
  value: string // 24h format string, e.g. "14:02"
  onChange: (time: string) => void
  pickupDate?: string // "2026-09-06"
  required?: boolean
}

export default function Clock24Picker({
  label,
  value,
  onChange,
  pickupDate,
  required = false
}: Clock24PickerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const hourContainerRef = useRef<HTMLDivElement>(null)
  const minContainerRef = useRef<HTMLDivElement>(null)

  // Current local time helper
  const getNow = () => {
    const d = new Date()
    const h24 = d.getHours()
    const m = d.getMinutes()
    return {
      h24,
      m,
      todayStr: d.toISOString().split("T")[0]
    }
  }

  // Convert 24h string "14:05" to { hour12: 2, min: 5, period: "PM" }
  const parse24hTo12h = (time24: string) => {
    const parts = (time24 || "").split(":")
    let h24 = parseInt(parts[0], 10)
    let m = parseInt(parts[1], 10)
    
    if (isNaN(h24)) h24 = new Date().getHours()
    if (isNaN(m)) m = new Date().getMinutes()

    const period: "AM" | "PM" = h24 >= 12 ? "PM" : "AM"
    let hour12 = h24 % 12
    if (hour12 === 0) hour12 = 12

    return { hour12, min: m, period, h24 }
  }

  // Convert { hour12, min, period } to 24h string "14:05"
  const format12hTo24h = (hour12: number, min: number, period: "AM" | "PM") => {
    let h24 = hour12
    if (period === "PM" && hour12 < 12) h24 += 12
    if (period === "AM" && hour12 === 12) h24 = 0
    return `${String(h24).padStart(2, "0")}:${String(min).padStart(2, "0")}`
  }

  const initial12h = useMemo(() => parse24hTo12h(value), [value])

  const [selectedHour, setSelectedHour] = useState(initial12h.hour12)
  const [selectedMin, setSelectedMin] = useState(initial12h.min)
  const [selectedPeriod, setSelectedPeriod] = useState<"AM" | "PM">(initial12h.period)

  useEffect(() => {
    const parsed = parse24hTo12h(value)
    setSelectedHour(parsed.hour12)
    setSelectedMin(parsed.min)
    setSelectedPeriod(parsed.period)
  }, [value])

  // Close when clicking outside on desktop
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  // Scroll active item into center view when opening
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        if (hourContainerRef.current) {
          const activeEl = hourContainerRef.current.querySelector('[data-selected="true"]') as HTMLElement
          if (activeEl) {
            hourContainerRef.current.scrollTop = activeEl.offsetTop - hourContainerRef.current.clientHeight / 2 + activeEl.clientHeight / 2
          }
        }
        if (minContainerRef.current) {
          const activeEl = minContainerRef.current.querySelector('[data-selected="true"]') as HTMLElement
          if (activeEl) {
            minContainerRef.current.scrollTop = activeEl.offsetTop - minContainerRef.current.clientHeight / 2 + activeEl.clientHeight / 2
          }
        }
      }, 50)
    }
  }, [isOpen])

  const nowInfo = getNow()
  const isToday = !pickupDate || pickupDate <= nowInfo.todayStr

  // Helper to check if candidate (hour12, min, period) is in the past
  const isTimeInPast = (h12: number, m: number, period: "AM" | "PM") => {
    if (!isToday) return false
    let h24 = h12
    if (period === "PM" && h12 < 12) h24 += 12
    if (period === "AM" && h12 === 12) h24 = 0

    if (h24 < nowInfo.h24) return true
    if (h24 === nowInfo.h24 && m < nowInfo.m) return true
    return false
  }

  // Is a specific hour (1..12) in period disabled?
  const isHourDisabled = (h12: number, period: "AM" | "PM") => {
    if (!isToday) return false
    let h24 = h12
    if (period === "PM" && h12 < 12) h24 += 12
    if (period === "AM" && h12 === 12) h24 = 0
    return h24 < nowInfo.h24
  }

  // Is a specific minute (0..59) disabled?
  const isMinuteDisabled = (m: number) => {
    if (!isToday) return false
    return isTimeInPast(selectedHour, m, selectedPeriod)
  }

  // Is AM or PM disabled?
  const isPeriodDisabled = (period: "AM" | "PM") => {
    if (!isToday) return false
    if (period === "AM") {
      return nowInfo.h24 >= 12
    }
    return false
  }

  const handleSelectHour = (h12: number) => {
    if (isHourDisabled(h12, selectedPeriod)) return
    setSelectedHour(h12)
    if (isTimeInPast(h12, selectedMin, selectedPeriod)) {
      setSelectedMin(nowInfo.m)
    }
  }

  const handleSelectMin = (m: number) => {
    if (isMinuteDisabled(m)) return
    setSelectedMin(m)
  }

  const handleSelectPeriod = (period: "AM" | "PM") => {
    if (isPeriodDisabled(period)) return
    setSelectedPeriod(period)
    if (isTimeInPast(selectedHour, selectedMin, period)) {
      const now12 = parse24hTo12h(`${nowInfo.h24}:${nowInfo.m}`)
      setSelectedHour(now12.hour12)
      setSelectedMin(now12.min)
    }
  }

  const handleSetNow = () => {
    const now12 = parse24hTo12h(`${nowInfo.h24}:${nowInfo.m}`)
    setSelectedHour(now12.hour12)
    setSelectedMin(now12.min)
    setSelectedPeriod(now12.period)

    const val24 = format12hTo24h(now12.hour12, now12.min, now12.period)
    onChange(val24)
    setIsOpen(false)
  }

  const handleConfirm = () => {
    let finalH12 = selectedHour
    let finalM = selectedMin
    let finalPeriod = selectedPeriod

    if (isToday && isTimeInPast(finalH12, finalM, finalPeriod)) {
      const now12 = parse24hTo12h(`${nowInfo.h24}:${nowInfo.m}`)
      finalH12 = now12.hour12
      finalM = now12.min
      finalPeriod = now12.period
      setSelectedHour(finalH12)
      setSelectedMin(finalM)
      setSelectedPeriod(finalPeriod)
    }

    const val24 = format12hTo24h(finalH12, finalM, finalPeriod)
    onChange(val24)
    setIsOpen(false)
  }

  const displayString = `${String(selectedHour).padStart(2, "0")}:${String(selectedMin).padStart(2, "0")} ${selectedPeriod}`

  const HOURS_12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const MINUTES_60 = Array.from({ length: 60 }, (_, i) => i)

  return (
    <div className="relative w-full min-w-0" ref={containerRef}>
      <label className="mb-1 block text-xs font-bold text-slate-700 truncate">
        {label}
      </label>

      {/* Input Display Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="h-10.5 w-full min-w-0 flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50/50 px-3 text-xs font-bold text-slate-900 outline-none transition-all hover:bg-white focus:border-amber-400 focus:bg-white cursor-pointer"
      >
        <span className="text-xs sm:text-sm font-extrabold tracking-wide text-slate-900">
          {displayString}
        </span>
        <Clock className="h-4 w-4 text-amber-500 shrink-0" />
      </button>

      {/* 3-Column Scroll Wheel Time Picker Modal / Popover */}
      {isOpen && (
        <>
          {/* Mobile Overlay Backdrop (Mobile Screens) */}
          <div
            className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-xs sm:hidden"
            onClick={() => setIsOpen(false)}
          />

          {/* Time Picker Card (Bottom Sheet on Mobile, Dropdown on Desktop) */}
          <div className="fixed bottom-0 left-0 right-0 sm:absolute sm:bottom-auto sm:top-full sm:left-auto sm:right-0 z-50 p-4 sm:p-3.5 w-full sm:w-[310px] sm:min-w-[310px] sm:max-w-[320px] rounded-t-3xl sm:rounded-2xl bg-white text-slate-900 shadow-2xl border-t sm:border border-slate-200/90 box-border animate-in slide-in-from-bottom-5 sm:animate-in sm:fade-in sm:zoom-in-95 duration-150">
            
            {/* Mobile Sheet Handle */}
            <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-slate-200 sm:hidden" />

            {/* Header Bar */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-2.5">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Time:</span>
                <span className="text-base sm:text-lg font-black text-slate-900 font-mono tracking-tight">{displayString}</span>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handleSetNow}
                  title="Set Current Time"
                  className="flex items-center gap-1 text-[11px] font-extrabold text-amber-950 bg-amber-400/20 hover:bg-amber-400/30 px-2.5 py-1 rounded-lg transition-all cursor-pointer"
                >
                  <RotateCcw className="h-3 w-3 text-amber-600" />
                  <span>Now</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all cursor-pointer"
                >
                  <X className="h-4.5 w-4.5 sm:h-4 sm:w-4" />
                </button>
              </div>
            </div>

            {/* 3 Vertical Scroll Columns Layout */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2 bg-slate-50/80 p-2 rounded-xl border border-slate-200/60">
              
              {/* Column 1: Hours (01 - 12) */}
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-extrabold text-slate-400 uppercase mb-1">Hour</span>
                <div
                  ref={hourContainerRef}
                  className="h-[150px] sm:h-[170px] w-full overflow-y-auto space-y-1 px-0.5 custom-scrollbar text-center scroll-smooth"
                >
                  {HOURS_12.map((h12) => {
                    const disabled = isHourDisabled(h12, selectedPeriod)
                    const isSelected = selectedHour === h12
                    const hStr = String(h12).padStart(2, "0")

                    return (
                      <button
                        key={h12}
                        type="button"
                        disabled={disabled}
                        data-selected={isSelected}
                        onClick={() => handleSelectHour(h12)}
                        className={`h-9 w-full rounded-lg text-sm font-extrabold transition-all flex items-center justify-center cursor-pointer ${
                          isSelected
                            ? "bg-[#FFB800] text-slate-950 shadow-md ring-2 ring-amber-400/40 scale-105"
                            : disabled
                            ? "text-slate-300 opacity-30 cursor-not-allowed line-through"
                            : "text-slate-700 hover:bg-slate-200/70"
                        }`}
                      >
                        {hStr}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Column 2: Minutes (00 - 59) */}
              <div className="flex flex-col items-center border-x border-slate-200/60 px-0.5 sm:px-1">
                <span className="text-[10px] font-extrabold text-slate-400 uppercase mb-1">Minute</span>
                <div
                  ref={minContainerRef}
                  className="h-[150px] sm:h-[170px] w-full overflow-y-auto space-y-1 px-0.5 custom-scrollbar text-center scroll-smooth"
                >
                  {MINUTES_60.map((m) => {
                    const disabled = isMinuteDisabled(m)
                    const isSelected = selectedMin === m
                    const mStr = String(m).padStart(2, "0")

                    return (
                      <button
                        key={m}
                        type="button"
                        disabled={disabled}
                        data-selected={isSelected}
                        onClick={() => handleSelectMin(m)}
                        className={`h-9 w-full rounded-lg text-sm font-extrabold transition-all flex items-center justify-center cursor-pointer ${
                          isSelected
                            ? "bg-[#FFB800] text-slate-950 shadow-md ring-2 ring-amber-400/40 scale-105"
                            : disabled
                            ? "text-slate-300 opacity-30 cursor-not-allowed line-through"
                            : "text-slate-700 hover:bg-slate-200/70"
                        }`}
                      >
                        {mStr}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Column 3: AM / PM */}
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-extrabold text-slate-400 uppercase mb-1">Period</span>
                <div className="h-[150px] sm:h-[170px] w-full flex flex-col items-center justify-center space-y-2">
                  {(["AM", "PM"] as const).map((period) => {
                    const disabled = isPeriodDisabled(period)
                    const isSelected = selectedPeriod === period

                    return (
                      <button
                        key={period}
                        type="button"
                        disabled={disabled}
                        data-selected={isSelected}
                        onClick={() => handleSelectPeriod(period)}
                        className={`h-10 w-full rounded-lg text-sm font-black transition-all flex items-center justify-center cursor-pointer ${
                          isSelected
                            ? "bg-[#FFB800] text-slate-950 shadow-md ring-2 ring-amber-400/40 scale-105"
                            : disabled
                            ? "text-slate-300 opacity-30 cursor-not-allowed line-through"
                            : "text-slate-700 hover:bg-slate-200/70"
                        }`}
                      >
                        {period}
                      </button>
                    )
                  })}
                </div>
              </div>

            </div>

            {/* Confirm Button */}
            <button
              type="button"
              onClick={handleConfirm}
              className="mt-3 flex h-11 sm:h-10 w-full items-center justify-center gap-1.5 rounded-xl bg-[#FFB800] text-xs sm:text-sm font-extrabold text-slate-950 transition-all hover:bg-amber-500 shadow-md shadow-amber-500/20 cursor-pointer"
            >
              <Check className="h-4 w-4 stroke-[3]" />
              <span>Set Time ({displayString})</span>
            </button>
          </div>
        </>
      )}
    </div>
  )
}
