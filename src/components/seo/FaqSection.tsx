"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "How do I book an outstation cab with Lucifer Cabs?",
    answer: "Booking an outstation cab is fast and simple. You can call us directly at 7069300605 or message us on WhatsApp with your pickup city, destination, travel date, and preferred vehicle (Sedan, SUV, Innova Crysta, Tempo Traveller). We will provide an instant, all-inclusive fare estimate."
  },
  {
    question: "What are the per km rates for Innova Crysta & SUV rentals?",
    answer: "Lucifer Cabs offers transparent per-kilometer pricing: Dzire/Etios Sedans start at ₹11/km, Ertiga SUVs at ₹14/km, Toyota Innova Crysta at ₹18/km, and Force Urbania at ₹30/km. All quotes include driver allowance with zero hidden fees."
  },
  {
    question: "Do you offer One-Way outstation cab services across Gujarat & Maharashtra?",
    answer: "Yes! We specialize in One-Way outstation taxi rentals for popular routes like Ahmedabad to Mumbai, Ahmedabad to Surat, Vadodara, Udaipur, and Rajkot. You only pay for one-sided travel distance rather than double round-trip charges."
  },
  {
    question: "Are 24/7 Airport Cab Pickups available for Ahmedabad and Surat airports?",
    answer: "Absolutely. Our 24/7 airport transfer fleet tracks your flight status in real time to ensure guaranteed, punctual pickups and drops at Ahmedabad Airport (AMD), Surat Airport (STV), and Mumbai Airport (BOM)."
  },
  {
    question: "What safety precautions do your drivers and vehicles take?",
    answer: "All Lucifer Cabs drivers undergo background checks and possess a minimum of 8+ years of highway driving experience. Every vehicle in our fleet is sanitized before every trip and undergoes weekly mechanical safety checks."
  }
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-amber-700 bg-amber-100/80 px-3.5 py-1.5 rounded-full border border-amber-300/60 mb-4">
            <HelpCircle className="w-4 h-4 text-amber-600" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Got Questions? We&apos;ve Got Answers
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium max-w-2xl mx-auto">
            Everything you need to know about outstation taxi bookings, Innova Crysta rentals, one-way tariffs, and airport transfers with Lucifer Cabs.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="border border-slate-200/90 rounded-2xl overflow-hidden transition-all duration-200 bg-slate-50/50 hover:border-amber-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 sm:p-6 font-bold text-slate-900 text-base sm:text-lg flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-amber-100 border-amber-300 text-amber-900" : "text-slate-600"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 text-slate-600 text-sm sm:text-base font-medium leading-relaxed border-t border-slate-100 bg-white">
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

