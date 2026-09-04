"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle, Phone } from "lucide-react"

const WhatsAppIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2003/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.67-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.488-8.413z" />
  </svg>
)

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

        {/* Bottom CTA Box */}
        <div className="mt-12 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-1">Still have questions?</h3>
            <p className="text-xs sm:text-sm text-slate-300 font-medium">
              Call our 24/7 Surat & Ahmedabad dispatch team for instant assistance.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:7069300605"
              className="flex items-center gap-2 bg-[#FFB800] text-slate-950 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm hover:bg-amber-400 transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4 fill-slate-950" />
              <span>7069300605</span>
            </a>
            <a
              href="https://wa.me/917069300605?text=Hi%2C%20I%20have%20a%20question%20regarding%20Lucifer%20Cabs."
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm hover:bg-emerald-500 transition-colors shadow-sm"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
