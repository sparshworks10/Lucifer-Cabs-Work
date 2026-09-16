"use client"

import { useState } from "react"
import { FLEET } from "@/data/mockData"
import FleetCard from "./FleetCard"

const CATEGORIES = ["All Vehicles", "Sedans", "SUVs & MPVs", "Premium", "Buses & Travellers"]

export default function FleetGrid() {
  const [activeCategory, setActiveCategory] = useState("All Vehicles")

  const filteredFleet = FLEET.filter((vehicle) => {
    if (activeCategory === "All Vehicles") return true
    const name = vehicle.name.toLowerCase()
    if (activeCategory === "Sedans") return name.includes("sedan")
    if (activeCategory === "SUVs & MPVs")
      return name.includes("suv") || name.includes("ertiga") || name.includes("carens") || name.includes("innova")
    if (activeCategory === "Premium") return name.includes("premium") || name.includes("luxury")
    if (activeCategory === "Buses & Travellers")
      return name.includes("tempo") || name.includes("urbania") || name.includes("bus")
    return true
  })

  return (
    <div className="space-y-8">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-extrabold transition-all cursor-pointer border ${
              activeCategory === category
                ? "bg-slate-900 text-amber-400 border-slate-900 shadow-md scale-105"
                : "bg-white text-slate-600 border-slate-200 hover:border-amber-300 hover:text-slate-900"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Spacious 5-Column Grid Layout (2 Rows of 5 Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
        {filteredFleet.map((vehicle) => (
          <FleetCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </div>
  )
}

