"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import CTA from "@/components/cta/CTA"
import { ALL_ROUTE_CATEGORIES } from "@/data/allRoutesData"
import { getRouteWhatsAppUrl } from "@/lib/whatsapp"
import { Search, MapPin, Navigation, Car, ArrowRight, ShieldCheck } from "lucide-react"

export default function RoutesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("All")

  const tabs = [
    "All",
    "Surat",
    "Ahmedabad",
    "Mumbai",
    "Rajkot",
    "Airport",
    "Innova",
  ]

  const filteredCategories = useMemo(() => {
    let result = ALL_ROUTE_CATEGORIES

    // Filter by tab if selected
    if (activeTab !== "All") {
      result = result.filter((cat) =>
        cat.title.toLowerCase().includes(activeTab.toLowerCase())
      )
    }

    // Filter by search query if typed (with alias support for SUR, AHE, UJJ, IND, MUM, DEL, etc.)
    if (searchQuery.trim()) {
      const rawQuery = searchQuery.toLowerCase().trim()
      const clean = rawQuery.replace(/[^a-z0-9]/g, "")

      // Alias mapping
      let expandedQueries = [rawQuery]
      if (clean === "sur" || clean === "stv") expandedQueries.push("surat")
      if (clean === "ahe" || clean === "ahem" || clean === "amd") expandedQueries.push("ahmedabad")
      if (clean === "ujj" || clean === "ujn") expandedQueries.push("ujjain")
      if (clean === "ind" || clean === "in" || clean === "idr") expandedQueries.push("indore")
      if (clean === "mum" || clean === "bom") expandedQueries.push("mumbai")
      if (clean === "del" || clean === "igi") expandedQueries.push("delhi")
      if (clean === "raj" || clean === "hsr") expandedQueries.push("rajkot")
      if (clean === "vad" || clean === "bdq") expandedQueries.push("vadodara")
      if (clean === "uda" || clean === "udr") expandedQueries.push("udaipur")
      if (clean === "pun" || clean === "pnq") expandedQueries.push("pune")

      result = result
        .map((cat) => {
          const matchingRoutes = cat.routes.filter((r) => {
            const nameLower = r.name.toLowerCase()
            const fromLower = r.from.toLowerCase()
            const toLower = r.to.toLowerCase()
            return expandedQueries.some(
              (q) => nameLower.includes(q) || fromLower.includes(q) || toLower.includes(q)
            )
          })
          return {
            ...cat,
            routes: matchingRoutes,
          }
        })
        .filter((cat) => cat.routes.length > 0)
    }

    return result
  }, [searchQuery, activeTab])

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800">
      <Header />

      {/* Routes Banner Header matching reference screenshot 2 */}
      <section className="bg-white border-b border-slate-200/80 py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#D97706] tracking-tight mb-3">
                Routes <span className="text-slate-400 font-normal">|</span> Lucifer Cabs
              </h1>
              <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed max-w-2xl">
                Lucifer Cabs provides one side taxi from one city to another across Surat, Gujarat, Maharashtra, and Rajasthan. We provide <strong className="text-slate-900 font-bold">Instant Confirmation</strong> on below mentioned routes. Why pay for return fare if you are traveling one side only?
              </p>

              {/* Live Search Bar */}
              <div className="mt-6 relative max-w-lg">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search city or route e.g., Surat, Mumbai, Ahmedabad..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-4 py-3.5 text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-amber-400 focus:outline-none focus:ring-4 focus:ring-amber-400/10 transition-all shadow-2xs"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-700 bg-slate-200/60 px-2 py-1 rounded-md"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Banner Graphic Illustration */}
            <div className="lg:col-span-5 relative h-[220px] sm:h-[280px] w-full rounded-2xl overflow-hidden shadow-xs border border-slate-100">
              <Image
                src="/images/routes-banner.jpg"
                alt="Lucifer Cabs Routes Banner"
                fill
                className="object-cover"
                priority
              />
            </div>

          </div>

          {/* Quick Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center gap-2 pt-6 border-t border-slate-100">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2">Filter By:</span>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                  activeTab === tab
                    ? "bg-[#FFB800] text-slate-950 shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900"
                }`}
              >
                {tab === "All" ? "All Routes" : `From ${tab}`}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Categorized Routes Grid matching reference screenshot 1 & 2 */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {filteredCategories.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 max-w-lg mx-auto">
              <Navigation className="w-12 h-12 text-amber-500 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-900 mb-1">No routes found matching "{searchQuery}"</h3>
              <p className="text-xs text-slate-500 mb-4">Try searching for another city like Surat, Mumbai, Ahmedabad, or Rajkot.</p>
              <button
                onClick={() => {
                  setSearchQuery("")
                  setActiveTab("All")
                }}
                className="bg-[#FFB800] text-slate-900 font-bold text-xs px-5 py-2.5 rounded-xl hover:bg-amber-400 transition-colors"
              >
                Reset Search
              </button>
            </div>
          ) : (
            filteredCategories.map((category, catIdx) => (
              <div key={catIdx} className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-2xs">
                
                {/* Category Header with Orange Underline Bar */}
                <div className="mb-6 pb-3 border-b-2 border-amber-500/80 flex items-center justify-between">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-amber-500" />
                    <span>{category.title}</span>
                  </h2>
                  <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200/70 px-3 py-1 rounded-full">
                    {category.routes.length} Available Routes
                  </span>
                </div>

                {/* Route Cards Pill Grid matching reference screenshot 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
                  {category.routes.map((route, routeIdx) => {
                    const waUrl = getRouteWhatsAppUrl(route.from, route.to)

                    return (
                      <a
                        key={routeIdx}
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-slate-50/80 hover:bg-amber-50/70 border border-slate-200/90 hover:border-amber-300 rounded-xl p-3.5 transition-all duration-200 flex items-center justify-between shadow-2xs hover:shadow-sm"
                      >
                        <div className="truncate pr-2">
                          <span className="block text-xs sm:text-sm font-bold text-slate-900 group-hover:text-amber-800 truncate">
                            {route.name}
                          </span>
                          {route.vehicle && (
                            <span className="inline-block text-[10px] font-semibold text-amber-700 bg-amber-100/70 px-2 py-0.5 rounded-md mt-1">
                              {route.vehicle}
                            </span>
                          )}
                        </div>

                        <div className="w-7 h-7 rounded-lg bg-white group-hover:bg-[#FFB800] text-slate-400 group-hover:text-slate-950 flex items-center justify-center shrink-0 border border-slate-200/80 group-hover:border-amber-400 transition-colors">
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                        </div>
                      </a>
                    )
                  })}
                </div>

              </div>
            ))
          )}

        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  )
}
