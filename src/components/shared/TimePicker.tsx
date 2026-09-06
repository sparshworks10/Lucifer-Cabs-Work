"use client"

import { useState, useMemo, useRef, useEffect } from "react"
import { Clock, ChevronDown } from "lucide-react"

interface TimePickerProps {
  label?: string
  value: string // 24h format "HH:mm" e.g. "13:40"
  onChange: (time: string) => void
  date?: string // e.g. "2026-09-06"
  todayStr?: string
  required?: boolean
}

// Convert 24h "HH:mm" to 12h "hh:mm AM/PM"
export const formatTime12h = (time24: string) => {
  if (!time24) return ""
  const [hStr, mStr] = time24.split(":")
  let hours = parseInt(hStr, 10)
  const minutes = mStr || "00"
  const period = hours >= 12 ? "PM" : "AM"
  hours = hours % 12 || 12
  const formattedHours = String(hours).padStart(2, "0")
  return `${formattedHours}:${minutes} ${period}`
}

export default function TimePicker({
  label,
  value,
  onChange,
  date,
  todayStr = new Date().toISOString().split("T")[0],
  required = false
}: TimePickerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const isToday = !date || date <= todayStr

  const currentNow = useMemo(() => new Date(), [])
  const currentHour = currentNow.getHours()
  const currentMinute = currentNow.getMinutes()

  // Generate 24-hour time slots at 30-minute intervals
  const timeSlots = useMemo(() => {
    const slots: Array<{ value24: string; label12: string; isPast: boolean }> = []
    
    for (let h = 0; h < 24; h++) {
      for (let m of [0, 30]) {
        const value24 = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`
        const label12 = formatTime12h(value24)
        
        let isPast = false
        if (isToday) {
          if (h < currentHour) {
            isPast = true
          } else if (h === currentHour && m < currentMinute) {
            isPast = true
          }
        }

        slots.push({ value24, label12, isPast })
      }
    }
    return slots
  }, [isToday, currentHour, currentMinute])

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div ref={wrapperRef} className="relative w-full">
      {label && <label className="mb-1 block text-xs font-bold text-slate-700 truncate">{label}</label>}
      
      <div className="relative w-full">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="h-10.5 w-full flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50/50 px-3 text-xs sm:text-sm font-semibold text-slate-900 outline-none transition-all focus:border-amber-400 focus:bg-white cursor-pointer"
        >
          <span>{formatTime12h(value) || "Select Time"}</span>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-amber-500" />
            <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
          </div>
        </button>
      </div>

      {/* Time Picker Dropdown */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full z-50 mt-1 max-h-60 overflow-y-auto rounded-2xl border border-slate-200 bg-white p-1.5 shadow-2xl">
          <div className="px-2 py-1 text-[10px] font-extrabold uppercase tracking-wider text-amber-600 border-b border-slate-100 mb-1 flex items-center justify-between">
            <span>Available Time Slots</span>
            <span className="text-slate-400 font-medium">12-Hour / 24-Hour</span>
          </div>

          <div className="grid grid-cols-2 gap-1 p-0.5">
            {timeSlots.map((slot) => (
              <button
                key={slot.value24}
                type="button"
                disabled={slot.isPast}
                onClick={() => {
                  onChange(slot.value24)
                  setIsOpen(false)
                }}
                className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all text-center flex items-center justify-between cursor-pointer ${
                  value === slot.value24
                    ? "bg-[#FFB800] text-slate-950 shadow-xs"
                    : slot.isPast
                    ? "bg-slate-100 text-slate-300 cursor-not-allowed line-through opacity-50"
                    : "bg-slate-50 hover:bg-amber-50 hover:text-amber-700 text-slate-800"
                }`}
              >
                <span>{slot.label12}</span>
                <span className="text-[10px] text-slate-400 font-normal">{slot.value24}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
