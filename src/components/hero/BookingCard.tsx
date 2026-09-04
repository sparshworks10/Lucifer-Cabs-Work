"use client"

import { useState } from "react"
import { MapPin, Calendar, Clock, Users, ArrowRight, ShieldCheck, User, Plane, CalendarDays } from "lucide-react"
import { generateWhatsAppQuoteUrl } from "@/lib/whatsapp"

const TABS = ["One Way", "Round Trip", "Outstation", "Airport"]

export default function BookingCard() {
  const [activeTab, setActiveTab] = useState("One Way")

  // Form State
  const [name, setName] = useState("")
  const [pickup, setPickup] = useState("")
  const [drop, setDrop] = useState("")
  const [pickupDate, setPickupDate] = useState("")
  const [pickupTime, setPickupTime] = useState("")
  const [dropDate, setDropDate] = useState("")
  const [journeyDays, setJourneyDays] = useState("1 Days")
  const [passengers, setPassengers] = useState("1 Passenger")

  // Airport Specific State
  const [airportTransferType, setAirportTransferType] = useState("Airport Drop")
  const [airportName, setAirportName] = useState("Surat Airport (STV)")

  // Today's date string for min date picker
  const todayStr = new Date().toISOString().split("T")[0]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const quoteUrl = generateWhatsAppQuoteUrl({
      name,
      tripType: activeTab,
      pickup,
      drop,
      pickupDate,
      pickupTime,
      dropDate,
      journeyDays,
      airportTransferType,
      airportName,
      passengers,
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

        {/* Dynamic Fields based on activeTab */}
        {activeTab === "Airport" ? (
          <>
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 w-full">
              <div className="min-w-0 w-full">
                <label className="mb-1 block text-xs font-bold text-slate-700 truncate">Transfer Type</label>
                <select
                  value={airportTransferType}
                  onChange={(e) => setAirportTransferType(e.target.value)}
                  className="h-10.5 w-full min-w-0 appearance-none rounded-xl border border-slate-200 bg-slate-50/50 px-2.5 text-xs font-semibold text-slate-900 outline-none focus:border-amber-400 focus:bg-white truncate"
                >
                  <option>Airport Drop</option>
                  <option>Airport Pickup</option>
                </select>
              </div>

              <div className="min-w-0 w-full">
                <label className="mb-1 block text-xs font-bold text-slate-700 truncate">Select Airport</label>
                <div className="relative w-full min-w-0">
                  <select
                    value={airportName}
                    onChange={(e) => setAirportName(e.target.value)}
                    className="h-10.5 w-full min-w-0 appearance-none rounded-xl border border-slate-200 bg-slate-50/50 px-2.5 pr-7 text-[11px] sm:text-xs font-semibold text-slate-900 outline-none focus:border-amber-400 focus:bg-white truncate"
                  >
                    <option>Surat Airport (STV)</option>
                    <option>Ahmedabad Airport (AMD)</option>
                    <option>Mumbai Airport (BOM)</option>
                  </select>
                  <Plane className="pointer-events-none absolute right-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-amber-500" />
                </div>
              </div>
            </div>

            <div className="w-full">
              <label className="mb-1 block text-xs font-bold text-slate-700">
                {airportTransferType === "Airport Drop" ? "Pickup Address" : "Drop Address"}
              </label>
              <div className="relative w-full">
                <input
                  type="text"
                  required
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  placeholder="Enter location or area"
                  className="h-10.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 pr-10 text-xs sm:text-sm font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-amber-400 focus:bg-white"
                />
                <MapPin className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-amber-500" />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="w-full">
              <label className="mb-1 block text-xs font-bold text-slate-700">Select Pickup City</label>
              <div className="relative w-full">
                <input
                  type="text"
                  required
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  placeholder="Click or type city name..."
                  className="h-10.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 pr-10 text-xs sm:text-sm font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-amber-400 focus:bg-white"
                />
                <MapPin className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-amber-500" />
              </div>
            </div>

            <div className="w-full">
              <label className="mb-1 block text-xs font-bold text-slate-700">Select Drop City</label>
              <div className="relative w-full">
                <input
                  type="text"
                  required
                  value={drop}
                  onChange={(e) => setDrop(e.target.value)}
                  placeholder="Enter drop city / address"
                  className="h-10.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 pr-10 text-xs sm:text-sm font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-amber-400 focus:bg-white"
                />
                <MapPin className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-amber-500" />
              </div>
            </div>
          </>
        )}

        {/* Date & Time Picker Container - Fully Responsive Grid with min-w-0 for iOS */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3 w-full">
          <div className="min-w-0 w-full">
            <label className="mb-1 block text-xs font-bold text-slate-700 truncate">Pickup Date</label>
            <div className="relative w-full min-w-0">
              <input
                type="date"
                required
                min={todayStr}
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                onClick={(e) => e.currentTarget.showPicker && e.currentTarget.showPicker()}
                className="h-10.5 w-full min-w-0 appearance-none rounded-xl border border-slate-200 bg-slate-50/50 px-2.5 pr-8 text-xs font-semibold text-slate-900 outline-none transition-all focus:border-amber-400 focus:bg-white cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-date-and-time-value]:text-left [&::-webkit-date-and-time-value]:text-slate-900"
              />
              <Calendar className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-amber-500" />
            </div>
          </div>

          <div className="min-w-0 w-full">
            <label className="mb-1 block text-xs font-bold text-slate-700 truncate">Pickup Time</label>
            <div className="relative w-full min-w-0">
              <input
                type="time"
                required
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                onClick={(e) => e.currentTarget.showPicker && e.currentTarget.showPicker()}
                className="h-10.5 w-full min-w-0 appearance-none rounded-xl border border-slate-200 bg-slate-50/50 px-2.5 pr-8 text-xs font-semibold text-slate-900 outline-none transition-all focus:border-amber-400 focus:bg-white cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-date-and-time-value]:text-left [&::-webkit-date-and-time-value]:text-slate-900"
              />
              <Clock className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-amber-500" />
            </div>
          </div>
        </div>

        {/* Additional Field for Round Trip / Outstation */}
        {activeTab === "Round Trip" && (
          <div className="w-full">
            <label className="mb-1 block text-xs font-bold text-slate-700">Return Date</label>
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
        )}

        {activeTab === "Outstation" && (
          <div className="w-full">
            <label className="mb-1 block text-xs font-bold text-slate-700">Journey Days</label>
            <div className="relative w-full min-w-0">
              <select
                value={journeyDays}
                onChange={(e) => setJourneyDays(e.target.value)}
                className="h-10.5 w-full min-w-0 appearance-none rounded-xl border border-slate-200 bg-slate-50/50 px-3 text-xs sm:text-sm font-medium text-slate-900 outline-none focus:border-amber-400 focus:bg-white"
              >
                <option>1 Days</option>
                <option>2 Days</option>
                <option>3 Days</option>
                <option>4 Days</option>
                <option>5+ Days</option>
              </select>
              <CalendarDays className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-amber-500" />
            </div>
          </div>
        )}

        {/* Passengers Selection */}
        {activeTab !== "Airport" && (
          <div className="w-full">
            <label className="mb-1 block text-xs font-bold text-slate-700">Passengers</label>
            <div className="relative w-full min-w-0">
              <select
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                className="h-10.5 w-full min-w-0 appearance-none rounded-xl border border-slate-200 bg-slate-50/50 px-3 pr-8 text-xs sm:text-sm font-medium text-slate-900 outline-none transition-all focus:border-amber-400 focus:bg-white truncate"
              >
                <option>1 Passenger</option>
                <option>2 Passengers</option>
                <option>3 Passengers</option>
                <option>4 Passengers (Sedan)</option>
                <option>6 Passengers (Ertiga / SUV)</option>
                <option>7 Passengers (Innova Crysta)</option>
                <option>12 Passengers (Tempo Traveller / Urbania)</option>
              </select>
              <Users className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-amber-500" />
            </div>
          </div>
        )}

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
