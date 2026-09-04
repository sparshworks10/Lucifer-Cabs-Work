"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react"

const faqs = [
  {
    number: "01",
    question: "How do I book an outstation cab with Lucifer Cabs?",
    answer: "Booking is effortless. You can call us directly at +91 7069300605 or send a message on WhatsApp with your travel details (pickup city, destination, date, vehicle choice). Our team provides instant, transparent quotes with zero hidden charges."
  },
  {
    number: "02",
    question: "What are the per kilometer rates for Innova Crysta & SUVs?",
    answer: "Our rates are 100% transparent: Dzire / Etios Sedans start at ₹11/km, Ertiga SUVs at ₹14/km, Toyota Innova Crysta at ₹18/km, and Force Urbania at ₹30/km. All fares include driver allowances and vehicle toll estimates upfront."
  },
  {
    number: "03",
    question: "Do you provide One-Way outstation rentals across Gujarat & Maharashtra?",
    answer: "Yes, we specialize in guaranteed One-Way outstation trips between major hubs like Ahmedabad, Surat, Mumbai, Vadodara, Rajkot, and Udaipur. You only pay for the one-sided journey distance without double return fares."
  },
  {
    number: "04",
    question: "Are 24/7 Airport Pickups available for Ahmedabad & Surat airports?",
    answer: "Yes! Our round-the-clock airport transfer team monitors live flight statuses for Ahmedabad Airport (AMD), Surat Airport (STV), and Mumbai Airport (BOM) to ensure punctual, zero-delay pickups anytime."
  },
  {
    number: "05",
    question: "What safety protocols are followed for vehicles & drivers?",
    answer: "Every driver undergoes rigorous background verification and possesses 8+ years of highway experience. Our vehicles undergo weekly mechanical audits, thorough sanitization, and safety checks before every journey."
  },
  {
    number: "06",
    question: "Can I customize multi-city tour packages or corporate rides?",
    answer: "Absolutely. We offer customized multi-day tour itineraries for Rajasthan, Gujarat temples (Somnath, Dwarka, Statue of Unity), and corporate contracts tailored to your exact schedule and fleet requirements."
  }
]

export default function FaqSection() {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1])

  const toggleFaq = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index))
    } else {
      setOpenIndices([...openIndices, index])
    }
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50/60 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-amber-700 bg-amber-100/90 px-3.5 py-1.5 rounded-full border border-amber-300/60 mb-4 shadow-2xs">
            <HelpCircle className="w-4 h-4 text-amber-600" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Everything You Need To Know
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
            Clear, transparent answers regarding our outstation cab rentals, Innova Crysta pricing, one-way tariffs, and 24/7 airport transfers.
          </p>
        </div>

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndices.includes(index)
            return (
              <div
                key={index}
                className={`bg-white border rounded-2xl p-5 sm:p-6 transition-all duration-200 ${
                  isOpen
                    ? "border-amber-300 shadow-md ring-1 ring-amber-300/30"
                    : "border-slate-200/90 shadow-2xs hover:border-amber-300 hover:shadow-xs"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left flex items-start justify-between gap-4 focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3.5">
                    <span className="shrink-0 w-7 h-7 rounded-lg bg-amber-100/80 text-amber-900 font-black text-xs flex items-center justify-center border border-amber-200">
                      {faq.number}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-amber-700 transition-colors pt-0.5">
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-100 group-hover:bg-amber-100 flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isOpen ? "rotate-180 bg-amber-100 text-amber-900" : "text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-4 pt-3.5 border-t border-slate-100 text-slate-600 text-xs sm:text-sm font-medium leading-relaxed pl-10">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
