"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import { MapPin, Plane, Loader2, Navigation, Train, Building2, Map } from "lucide-react"
import { searchLocalIndianLocations } from "@/data/indianLocations"

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
  mode?: "all" | "city" | "airport"
}

interface MergedSuggestion {
  id: string
  title: string
  subtitle: string
  type: "city" | "airport" | "landmark" | "area" | "station" | "remote" | "coords"
  lat?: string
  lon?: string
}

// Regex to detect coordinate patterns like "21.1702, 72.8311" or "21.1702,72.8311" or Google maps URLs with coordinates
const COORD_REGEX = /(-?\d{1,2}\.\d+)\s*,\s*(-?\d{1,3}\.\d+)/
const MAPS_URL_REGEX = /(?:q=|loc:)(-?\d{1,2}\.\d+),(-?\d{1,3}\.\d+)/

export default function LocationAutocomplete({
  label,
  value,
  onChange,
  placeholder = "Search city, airport, area, address or paste lat/long...",
  icon: CustomIcon,
  required = false,
  mode = "all"
}: LocationAutocompleteProps) {
  const [remoteSuggestions, setRemoteSuggestions] = useState<MergedSuggestion[]>([])
  const [coordSuggestion, setCoordSuggestion] = useState<MergedSuggestion | null>(null)
  const [loading, setLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const wrapperRef = useRef<HTMLDivElement>(null)
  const isSelectingRef = useRef(false)

  // Detect Lat/Long coordinates or Google Maps link pasted into input (disabled for airport mode)
  useEffect(() => {
    if (mode === "airport") {
      setCoordSuggestion(null)
      return
    }

    const trimmed = value.trim()
    const coordMatch = trimmed.match(COORD_REGEX) || trimmed.match(MAPS_URL_REGEX)

    if (coordMatch) {
      const lat = parseFloat(coordMatch[1]).toFixed(6)
      const lng = parseFloat(coordMatch[2]).toFixed(6)
      setCoordSuggestion({
        id: `coords-${lat}-${lng}`,
        title: `Pin Location (${lat}, ${lng})`,
        subtitle: "Google Maps Coordinates • Tap to select pin",
        type: "coords",
        lat,
        lon: lng
      })
    } else {
      setCoordSuggestion(null)
    }
  }, [value, mode])

  // 1. Instant 0ms local predictive search computed synchronously on every render
  const localResults = useMemo(() => {
    const limit = mode === "airport" ? 12 : 8
    const items = searchLocalIndianLocations(value, mode, limit)
    return items.map((item) => ({
      id: item.id,
      title: item.name,
      subtitle: item.subtitle,
      type: item.type
    }))
  }, [value, mode])

  // 2. Real-time Pelias / Photon Autocomplete API restricted strictly to India (bbox=68.1,6.7,97.4,35.5)
  useEffect(() => {
    if (isSelectingRef.current) {
      isSelectingRef.current = false
      setIsOpen(false)
      setRemoteSuggestions([])
      return
    }

    const query = value.trim()
    if (!query || query.length < 1 || COORD_REGEX.test(query)) {
      setRemoteSuggestions([])
      setLoading(false)
      return
    }

    const timer = setTimeout(async () => {
      try {
        setLoading(true)

        // For airport mode, ensure query includes "airport" to force airport geocoding
        const searchQuery = mode === "airport" && !query.toLowerCase().includes("airport")
          ? `${query} airport`
          : query

        const photonUrl = `https://photon.komoot.io/api/?q=${encodeURIComponent(searchQuery)}&bbox=68.1,6.7,97.4,35.5&limit=8&lang=en`
        const response = await fetch(photonUrl)

        if (response.ok) {
          const data = await response.json()
          if (data && data.features && data.features.length > 0) {
            let mapped: MergedSuggestion[] = data.features.map((feat: any, idx: number) => {
              const props = feat.properties || {}
              const coords = feat.geometry?.coordinates || []
              const lon = coords[0] ? String(coords[0]) : undefined
              const lat = coords[1] ? String(coords[1]) : undefined

              const name = props.name || props.street || props.locality || props.city || "Location"
              const isAirport =
                props.osm_value === "airport" ||
                props.osm_key === "aeroway" ||
                name.toLowerCase().includes("airport") ||
                name.toLowerCase().includes("aerodrome") ||
                name.toLowerCase().includes("airfield") ||
                name.toLowerCase().includes("terminal")

              const subtitleParts = [
                props.district || props.suburb || props.locality,
                props.city || props.county,
                props.state,
                "India"
              ].filter(Boolean)

              const cleanSub = Array.from(new Set(subtitleParts)).join(", ")

              return {
                id: `pelias-${idx}-${name}`,
                title: name,
                subtitle: cleanSub,
                type: isAirport ? "airport" : "remote",
                lat,
                lon
              }
            })

            // Strict filtering for Airport Mode: ONLY allow airports
            if (mode === "airport") {
              mapped = mapped.filter((item) => item.type === "airport")
            }

            setRemoteSuggestions(mapped)
          }
        }
      } catch (err) {
        console.error("Pelias/Photon autocomplete error", err)
      } finally {
        setLoading(false)
      }
    }, 120)

    return () => clearTimeout(timer)
  }, [value, mode])

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

  const handleSelect = (title: string, subtitle?: string, lat?: string, lng?: string) => {
    isSelectingRef.current = true
    setIsOpen(false)
    setRemoteSuggestions([])

    let fullAddress = title
    if (subtitle && !title.toLowerCase().includes(subtitle.split(",")[0].toLowerCase())) {
      fullAddress = `${title}, ${subtitle}`
    }

    onChange(fullAddress, lat && lng ? { lat, lng } : undefined)
  }

  // Combined suggestions strictly scoped by mode
  const combinedSuggestions = useMemo(() => {
    const list: MergedSuggestion[] = []

    if (coordSuggestion && mode !== "airport") {
      list.push(coordSuggestion)
    }

    const seenTitles = new Set<string>()

    for (const l of localResults) {
      if (mode === "airport" && l.type !== "airport") continue
      seenTitles.add(l.title.toLowerCase())
      list.push(l)
    }

    for (const r of remoteSuggestions) {
      if (mode === "airport" && r.type !== "airport") continue
      if (!seenTitles.has(r.title.toLowerCase())) {
        list.push(r)
      }
    }

    return list.slice(0, 10)
  }, [coordSuggestion, localResults, remoteSuggestions, mode])

  const MainIcon = CustomIcon || (mode === "airport" ? Plane : MapPin)

  return (
    <div ref={wrapperRef} className="relative w-full">
      {label && <label className="mb-1 block text-xs font-bold text-slate-700 truncate">{label}</label>}

      <div className="relative w-full">
        <input
          type="text"
          required={required}
          value={value}
          onFocus={() => setIsOpen(true)}
          onChange={(e) => {
            isSelectingRef.current = false
            setIsOpen(true)
            onChange(e.target.value)
          }}
          placeholder={placeholder}
          className="h-10.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 pr-10 text-xs sm:text-sm font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-amber-400 focus:bg-white truncate shadow-2xs"
        />
        {loading ? (
          <Loader2 className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-amber-500 animate-spin" />
        ) : (
          <MainIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-amber-500" />
        )}
      </div>

      {/* Dynamic Predictive Autocomplete Dropdown */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full z-50 mt-1 max-h-72 overflow-y-auto rounded-2xl border border-slate-200 bg-white p-1.5 shadow-2xl space-y-0.5">
          {mode === "airport" ? (
            <div className="px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-amber-700 bg-amber-50 rounded-xl mb-1 flex items-center gap-1.5 border border-amber-200/60">
              <Plane className="h-3 w-3 text-amber-600" />
              <span>Select Airport in India</span>
            </div>
          ) : !value.trim() ? (
            <div className="px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-amber-700 bg-amber-50 rounded-xl mb-1 flex items-center gap-1.5 border border-amber-200/60">
              <MapPin className="h-3 w-3 text-amber-600" />
              <span>Popular Cities & Destinations</span>
            </div>
          ) : null}

          {combinedSuggestions.length > 0 ? (
            combinedSuggestions.map((item) => (
              <button
                key={item.id}
                type="button"
                onMouseDown={(e) => {
                  e.preventDefault()
                  handleSelect(item.title, item.subtitle, item.lat, item.lon)
                }}
                onTouchEnd={(e) => {
                  e.preventDefault()
                  handleSelect(item.title, item.subtitle, item.lat, item.lon)
                }}
                className={`flex w-full items-start gap-2.5 rounded-xl px-3 py-2.5 text-left transition-colors group cursor-pointer ${
                  item.type === "coords"
                    ? "bg-amber-500/10 border border-amber-400/50 hover:bg-amber-500/20"
                    : "hover:bg-amber-50/80 active:bg-amber-100"
                }`}
              >
                {/* Dynamic Icon */}
                <div className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-xl transition-colors ${
                  item.type === "coords"
                    ? "bg-amber-500 text-slate-950 font-bold"
                    : "bg-amber-100/70 text-amber-700 group-hover:bg-[#FFB800] group-hover:text-slate-950"
                }`}>
                  {item.type === "coords" ? (
                    <Map className="h-3.5 w-3.5" />
                  ) : item.type === "airport" ? (
                    <Plane className="h-3.5 w-3.5" />
                  ) : item.type === "station" ? (
                    <Train className="h-3.5 w-3.5" />
                  ) : item.type === "area" ? (
                    <Building2 className="h-3.5 w-3.5" />
                  ) : item.type === "remote" ? (
                    <Navigation className="h-3.5 w-3.5" />
                  ) : (
                    <MapPin className="h-3.5 w-3.5" />
                  )}
                </div>

                {/* Title & Subtitle */}
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-extrabold text-slate-900 truncate group-hover:text-amber-800">
                    {item.title}
                  </div>
                  {item.subtitle && (
                    <div className="text-[11px] font-medium text-slate-500 truncate leading-tight mt-0.5">
                      {item.subtitle}
                    </div>
                  )}
                </div>
              </button>
            ))
          ) : (
            <div className="p-3 text-center text-xs font-semibold text-slate-400">
              No matching airports found
            </div>
          )}
        </div>
      )}
    </div>
  )
}
