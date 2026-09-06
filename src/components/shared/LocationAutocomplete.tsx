"use client"

import { useState, useEffect, useRef } from "react"
import { MapPin, Loader2, Navigation } from "lucide-react"

export interface LocationResult {
  address: string
  lat?: string
  lng?: string
}

interface LocationAutocompleteProps {
  label?: string
  value: string
  onChange: (value: string, coords?: { lat: string; lng: string }) => void
  placeholder?: string
  icon?: React.ElementType
  required?: boolean
}

export default function LocationAutocomplete({
  label,
  value,
  onChange,
  placeholder = "Search city, area or landmark...",
  icon: Icon = MapPin,
  required = false
}: LocationAutocompleteProps) {
  const [suggestions, setSuggestions] = useState<Array<{ display_name: string; lat: string; lon: string }>>([])
  const [loading, setLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  
  const wrapperRef = useRef<HTMLDivElement>(null)
  const isSelectingRef = useRef(false)

  // Dynamic live search as user types
  useEffect(() => {
    // If we just clicked/tapped a suggestion, suppress searching and re-opening dropdown
    if (isSelectingRef.current) {
      isSelectingRef.current = false
      setIsOpen(false)
      setSuggestions([])
      return
    }

    const query = value.trim()
    if (!query || query.length < 1) {
      setSuggestions([])
      setLoading(false)
      setIsOpen(false)
      return
    }

    setIsOpen(true)

    const timer = setTimeout(async () => {
      try {
        setLoading(true)
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&countrycodes=in&limit=6`,
          {
            headers: {
              "Accept-Language": "en"
            }
          }
        )
        if (response.ok) {
          const data = await response.json()
          setSuggestions(data)
        }
      } catch (err) {
        console.error("Failed to fetch location suggestions", err)
      } finally {
        setLoading(false)
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [value])

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSelectSuggestion = (displayName: string, lat?: string, lng?: string) => {
    isSelectingRef.current = true
    setIsOpen(false)
    setSuggestions([])

    const parts = displayName.split(",")
    const mainTitle = parts[0].trim()
    const secondaryAddress = parts.slice(1, 3).map(p => p.trim()).join(", ")
    const cleanName = secondaryAddress ? `${mainTitle}, ${secondaryAddress}` : mainTitle

    onChange(cleanName, lat && lng ? { lat, lng } : undefined)
  }

  return (
    <div ref={wrapperRef} className="relative w-full">
      {label && <label className="mb-1 block text-xs font-bold text-slate-700 truncate">{label}</label>}
      <div className="relative w-full">
        <input
          type="text"
          required={required}
          value={value}
          onChange={(e) => {
            isSelectingRef.current = false
            onChange(e.target.value)
          }}
          placeholder={placeholder}
          className="h-10.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 pr-10 text-xs sm:text-sm font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-amber-400 focus:bg-white truncate"
        />
        {loading ? (
          <Loader2 className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-amber-500 animate-spin" />
        ) : (
          <Icon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-amber-500" />
        )}
      </div>

      {/* Uber / Google Maps style dynamic search results dropdown */}
      {isOpen && value.trim().length >= 1 && (
        <div className="absolute left-0 right-0 top-full z-50 mt-1 max-h-60 overflow-y-auto rounded-2xl border border-slate-100 bg-white p-1.5 shadow-2xl">
          {loading && suggestions.length === 0 ? (
            <div className="p-3 text-center text-xs font-semibold text-slate-400 flex items-center justify-center gap-2">
              <Loader2 className="h-3.5 w-3.5 animate-spin text-amber-500" />
              <span>Searching locations...</span>
            </div>
          ) : suggestions.length > 0 ? (
            <div className="space-y-1">
              {suggestions.map((item, idx) => {
                const parts = item.display_name.split(",")
                const title = parts[0].trim()
                const subtitle = parts.slice(1, 4).map(p => p.trim()).join(", ")

                return (
                  <button
                    key={idx}
                    type="button"
                    onMouseDown={(e) => {
                      e.preventDefault()
                      handleSelectSuggestion(item.display_name, item.lat, item.lon)
                    }}
                    onTouchEnd={(e) => {
                      e.preventDefault()
                      handleSelectSuggestion(item.display_name, item.lat, item.lon)
                    }}
                    className="flex w-full items-start gap-2.5 rounded-xl px-3 py-2 text-left hover:bg-amber-50/80 active:bg-amber-100 transition-colors group cursor-pointer"
                  >
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-100/60 text-amber-600 group-hover:bg-[#FFB800] group-hover:text-slate-950 transition-colors">
                      <Navigation className="h-3.5 w-3.5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-extrabold text-slate-900 truncate group-hover:text-amber-700">
                        {title}
                      </div>
                      {subtitle && (
                        <div className="text-[11px] font-medium text-slate-400 truncate leading-tight mt-0.5">
                          {subtitle}
                        </div>
                      )}
                    </div>
                  </button>
                )
              })}
            </div>
          ) : (
            <div className="p-3 text-center text-xs font-semibold text-slate-400">
              No matching locations found
            </div>
          )}
        </div>
      )}
    </div>
  )
}
