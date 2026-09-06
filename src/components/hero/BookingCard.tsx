"use client"

import { useState, useMemo } from "react"
import { Calendar, ArrowRight, ShieldCheck, User, Plane, CalendarDays, Car, Briefcase, Users, Baby, MapPin, Clock } from "lucide-react"
import { generateWhatsAppQuoteUrl } from "@/lib/whatsapp"
import LocationAutocomplete from "@/components/shared/LocationAutocomplete"
import Clock24Picker from "@/components/shared/Clock24Picker"

const TABS = ["One Way", "Round Trip", "Local Packages", "Airport"]

const LOCAL_PACKAGES = [
  "4 Hour / 40 KM",
  "6 Hour / 60 KM",
  "8 Hour / 80 KM",
  "10 Hour / 100 KM",
  "12 Hour / 120 KM"
]

const VEHICLE_OPTIONS = [
  "Sedan (Dzire / Etios)",
  "SUV (Ertiga / Carens)",
  "Innova Crysta",
  "Tempo Traveller (9 / 12 / 15 / 20 Seater)",
  "Force Urbania (16 Seater)"
]

const getCurrentTime24h = () => {
  const now = new Date()
  const hours = String(now.getHours()).padStart(2, "0")
  const minutes = String(now.getMinutes()).padStart(2, "0")
  return `${hours}:${minutes}`
}

export default function BookingCard() {
  const [activeTab, setActiveTab] = useState("One Way")

  // Date and Time Helpers
  const todayStr = useMemo(() => new Date().toISOString().split("T")[0], [])

  // Core Form State - Pre-populated with today's date & current 24-hour time
  const [name, setName] = useState("")
  const [pickup, setPickup] = useState("")
  const [pickupCoords, setPickupCoords] = useState<{ lat: string; lng: string } | undefined>()
  
  const [drop, setDrop] = useState("")
  const [dropCoords, setDropCoords] = useState<{ lat: string; lng: string } | undefined>()
  
  const [pickupDate, setPickupDate] = useState(todayStr)
  const [pickupTime, setPickupTime] = useState(getCurrentTime24h())
  
  // Airport Specific State (Pure Text Input)
  const [airportName, setAirportName] = useState("")

  // Vehicle Selection State
  const [vehicle, setVehicle] = useState(VEHICLE_OPTIONS[0])

  // Local Package Specific State
  const [localPackage, setLocalPackage] = useState(LOCAL_PACKAGES[2])

  // Round Trip Specific State
  const [dropDate, setDropDate] = useState(todayStr)
  const [returnTime, setReturnTime] = useState(getCurrentTime24h())

  // Passengers & Luggage Numeric Input States
  const [adults, setAdults] = useState("1")
  const [children, setChildren] = useState("0")
  const [luggage, setLuggage] = useState("0")

  const isToday = !pickupDate || pickupDate <= todayStr
  const currentNowTime = getCurrentTime24h()

  // Dynamic 24h Time Options Generator
  const pickupTimeOptions = useMemo(() => {
    const options: string[] = []
    const nowTime = getCurrentTime24h()

    if (isToday) {
      options.push(nowTime)
    }

    for (let h = 0; h < 24; h++) {
      for (let m = 0; m < 60; m += 15) {
        const slot = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`
        if (!isToday || slot >= nowTime) {
          options.push(slot)
        }
      }
    }

    return Array.from(new Set(options)).sort()
  }, [isToday])

  const returnTimeOptions = useMemo(() => {
    const options: string[] = []
    for (let h = 0; h < 24; h++) {
      for (let m = 0; m < 60; m += 15) {
        options.push(`${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`)
      }
    }
    return options
  }, [])

  // Helper for strictly numeric inputs
  const handleNumericInput = (setter: (val: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9]/g, "")
    setter(val)
  }

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value
    if (selectedDate < todayStr) {
      setPickupDate(todayStr)
      return
    }
    setPickupDate(selectedDate)
    
    const nowTime = getCurrentTime24h()
    if (selectedDate === todayStr && pickupTime < nowTime) {
      setPickupTime(nowTime)
    }
  }

  const handleTimeChange = (selectedTime: string) => {
    const nowTime = getCurrentTime24h()
    const checkIsToday = !pickupDate || pickupDate <= todayStr

    if (checkIsToday && selectedTime && selectedTime < nowTime) {
      setPickupTime(nowTime)
      return
    }
    setPickupTime(selectedTime)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const nowTime = getCurrentTime24h()

    // Validate past time & date silently before submission
    let finalDate = pickupDate
    if (!pickupDate || pickupDate < todayStr) {
      finalDate = todayStr
      setPickupDate(todayStr)
    }

    let finalTime = pickupTime
    if (finalDate === todayStr && pickupTime < nowTime) {
      finalTime = nowTime
      setPickupTime(nowTime)
    }

    const quoteUrl = generateWhatsAppQuoteUrl({
      name,
      tripType: activeTab,
      pickup,
      pickupLat: pickupCoords?.lat,
      pickupLng: pickupCoords?.lng,
      drop,
      dropLat: dropCoords?.lat,
      dropLng: dropCoords?.lng,
      pickupDate: finalDate,
      pickupTime: finalTime,
      dropDate,
      returnTime,
      localPackage: activeTab === "Local Packages" ? localPackage : undefined,
      airportName: activeTab === "Airport" ? airportName : undefined,
      vehicle,
      adults,
      children,
      luggage
    })

    window.open(quoteUrl, "_blank")
  }

  return (
    <div className="relative z-20 w-full max-w-md rounded-3xl bg-white p-4.5 sm:p-7 shadow-2xl border border-slate-100/90 box-border overflow-hidden">
      <h2 className="mb-4 text-center text-xl font-extrabold text-slate-900 tracking-tight">
        Book Your Taxi
      </h2>

      {/* Trip Tabs */}
      <div className="mb-5 grid grid-cols-4 gap-1 p-1 bg-slate-100 rounded-2xl w-full">
        {TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`h-9 w-full rounded-xl text-[10px] sm:text-xs font-extrabold transition-all cursor-pointer truncate px-0.5 ${
              activeTab === tab
                ? "bg-[#FFB800] text-slate-950 shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <form className="space-y-3.5 w-full" onSubmit={handleSubmit}>

        {/* User Name Field */}
        <div className="w-full">
          <label className="mb-1 block text-xs font-bold text-slate-700">Enter Your Name</label>
          <div className="relative w-full">
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Full Name"
              className="h-10.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 pr-10 text-xs sm:text-sm font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-amber-400 focus:bg-white"
            />
            <User className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-amber-500" />
          </div>
        </div>

        {/* Dynamic Location / Airport Fields */}
        {activeTab === "Airport" ? (
          <>
            {/* Airport Name - Simple Pure Text Field */}
            <div className="w-full">
              <label className="mb-1 block text-xs font-bold text-slate-700">Airport Name</label>
              <div className="relative w-full">
                <input
                  type="text"
                  required
                  value={airportName}
                  onChange={(e) => setAirportName(e.target.value)}
                  placeholder="e.g. Surat Airport, Mumbai Airport"
                  className="h-10.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 pr-10 text-xs sm:text-sm font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-amber-400 focus:bg-white"
                />
                <Plane className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-amber-500" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 w-full">
              <LocationAutocomplete
                label="Pickup Address"
                required
                value={pickup}
                onChange={(val, coords) => {
                  setPickup(val)
                  setPickupCoords(coords)
                }}
                placeholder="Pickup location"
                icon={MapPin}
              />

              <LocationAutocomplete
                label="Drop Address"
                required
                value={drop}
                onChange={(val, coords) => {
                  setDrop(val)
                  setDropCoords(coords)
                }}
                placeholder="Drop location"
                icon={MapPin}
              />
            </div>
          </>
        ) : activeTab === "Local Packages" ? (
          <>
            <LocationAutocomplete
              label="Pickup City / Address"
              required
              value={pickup}
              onChange={(val, coords) => {
                setPickup(val)
                setPickupCoords(coords)
              }}
              placeholder="Enter pickup city or location..."
              icon={MapPin}
            />

            <div className="w-full">
              <label className="mb-1 block text-xs font-bold text-slate-700">Select Local Package</label>
              <div className="relative w-full">
                <select
                  value={localPackage}
                  onChange={(e) => setLocalPackage(e.target.value)}
                  className="h-10.5 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/50 px-3 text-xs sm:text-sm font-semibold text-slate-900 outline-none focus:border-amber-400 focus:bg-white cursor-pointer"
                >
                  {LOCAL_PACKAGES.map((pkg) => (
                    <option key={pkg} value={pkg}>{pkg}</option>
                  ))}
                </select>
                <Clock className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-amber-500" />
              </div>
            </div>
          </>
        ) : (
          <>
            <LocationAutocomplete
              label="Pickup City / Address"
              required
              value={pickup}
              onChange={(val, coords) => {
                setPickup(val)
                setPickupCoords(coords)
              }}
              placeholder="Enter pickup city or address..."
              icon={MapPin}
            />

            <LocationAutocomplete
              label="Drop City / Address"
              required
              value={drop}
              onChange={(val, coords) => {
                setDrop(val)
                setDropCoords(coords)
              }}
              placeholder="Enter drop city or destination..."
              icon={MapPin}
            />
          </>
        )}

        {/* Pickup Date & Pickup Time (24-Hour Input with Strict Past Time Restriction) */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3 w-full">
          <div className="min-w-0 w-full">
            <label className="mb-1 block text-xs font-bold text-slate-700 truncate">Pickup Date</label>
            <div className="relative w-full min-w-0">
              <input
                type="date"
                required
                min={todayStr}
                value={pickupDate}
                onChange={handleDateChange}
                onClick={(e) => e.currentTarget.showPicker && e.currentTarget.showPicker()}
                className="h-10.5 w-full min-w-0 appearance-none rounded-xl border border-slate-200 bg-slate-50/50 px-2.5 pr-8 text-xs font-semibold text-slate-900 outline-none transition-all focus:border-amber-400 focus:bg-white cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-date-and-time-value]:text-left [&::-webkit-date-and-time-value]:text-slate-900"
              />
              <Calendar className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-amber-500" />
            </div>
          </div>

          <Clock24Picker
            label="Pickup Time"
            value={pickupTime}
            onChange={handleTimeChange}
            pickupDate={pickupDate}
            required
          />
        </div>

        {/* Round Trip Return Date & Return Time Fields */}
        {activeTab === "Round Trip" && (
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3 w-full">
            <div className="min-w-0 w-full">
              <label className="mb-1 block text-xs font-bold text-slate-700 truncate">Return Date</label>
              <div className="relative w-full min-w-0">
                <input
                  type="date"
                  required
                  min={pickupDate || todayStr}
                  value={dropDate}
                  onChange={(e) => setDropDate(e.target.value)}
                  onClick={(e) => e.currentTarget.showPicker && e.currentTarget.showPicker()}
                  className="h-10.5 w-full min-w-0 appearance-none rounded-xl border border-slate-200 bg-slate-50/50 px-2.5 pr-8 text-xs font-semibold text-slate-900 outline-none transition-all focus:border-amber-400 focus:bg-white cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-date-and-time-value]:text-left [&::-webkit-date-and-time-value]:text-slate-900"
                />
                <CalendarDays className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-amber-500" />
              </div>
            </div>

            <Clock24Picker
              label="Return Time"
              value={returnTime}
              onChange={(val) => setReturnTime(val)}
              pickupDate={dropDate}
              required
            />
          </div>
        )}

        {/* Vehicle Selection Dropdown */}
        <div className="w-full">
          <label className="mb-1 block text-xs font-bold text-slate-700">Select Vehicle</label>
          <div className="relative w-full">
            <select
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
              className="h-10.5 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/50 px-3 pr-8 text-xs sm:text-sm font-semibold text-slate-900 outline-none transition-all focus:border-amber-400 focus:bg-white truncate cursor-pointer"
            >
              {VEHICLE_OPTIONS.map((v) => (
                <option key={v} value={v}>{v}</option>
              ))}
            </select>
            <Car className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-amber-500" />
          </div>
        </div>

        {/* Numeric Fields for Adults, Children, and Luggage (3 Columns) */}
        <div className="grid grid-cols-3 gap-2 w-full">
          <div>
            <label className="mb-1 block text-[11px] font-bold text-slate-700 truncate">Adults</label>
            <div className="relative w-full">
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                required
                value={adults}
                onChange={handleNumericInput(setAdults)}
                placeholder="1"
                className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-3 pr-6 text-xs sm:text-sm font-bold text-slate-900 outline-none transition-all focus:border-amber-400 focus:bg-white text-center"
              />
              <Users className="pointer-events-none absolute right-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-amber-500 opacity-60" />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-[11px] font-bold text-slate-700 truncate">Children</label>
            <div className="relative w-full">
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                value={children}
                onChange={handleNumericInput(setChildren)}
                placeholder="0"
                className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-3 pr-6 text-xs sm:text-sm font-bold text-slate-900 outline-none transition-all focus:border-amber-400 focus:bg-white text-center"
              />
              <Baby className="pointer-events-none absolute right-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-amber-500 opacity-60" />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-[11px] font-bold text-slate-700 truncate">Luggage</label>
            <div className="relative w-full">
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                value={luggage}
                onChange={handleNumericInput(setLuggage)}
                placeholder="0"
                className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-3 pr-6 text-xs sm:text-sm font-bold text-slate-900 outline-none transition-all focus:border-amber-400 focus:bg-white text-center"
              />
              <Briefcase className="pointer-events-none absolute right-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-amber-500 opacity-60" />
            </div>
          </div>
        </div>

        {/* Submit Button -> Redirection to WhatsApp */}
        <button
          type="submit"
          className="mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#FFB800] text-sm sm:text-base font-extrabold text-slate-950 transition-all hover:bg-amber-500 shadow-lg shadow-amber-500/20 hover:scale-[1.01] cursor-pointer"
        >
          <span>Get Quotation</span>
          <ArrowRight className="h-4 w-4 stroke-[3]" />
        </button>

        {/* Guarantee Notes */}
        <div className="flex items-center justify-center gap-1.5 pt-1 text-xs font-semibold text-slate-500">
          <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />
          <span>No hidden charges • Best price guarantee</span>
        </div>

      </form>
    </div>
  )
}
