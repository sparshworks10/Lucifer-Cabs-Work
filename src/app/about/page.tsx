import Image from "next/image"
import Link from "next/link"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import CTA from "@/components/cta/CTA"
import { ShieldCheck, Clock, Award, Users, Car, CheckCircle2, Phone, Plane, Briefcase, MapPin, Sparkles, ArrowRight, Mail, Star, Map } from "lucide-react"

export const metadata = {
  title: "About Us | Lucifer Cabs Surat",
  description: "Learn about Lucifer Cabs, Surat's trusted travel partner for premium cab rentals, one-way outstation taxi, and 24/7 airport transfers.",
}

const WhatsAppIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2003/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.67-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.488-8.413z" />
  </svg>
)

export default function AboutPage() {
  const rentalServices = [
    {
      title: "Airport Transfers",
      description: "Reliable pick-up and drop services for Surat, Mumbai, & Gujarat airports with 24/7 flight tracking.",
      icon: Plane,
      features: ["Meet & greet airport service", "Live flight delay monitoring", "24/7 round-the-clock availability"],
    },
    {
      title: "Corporate Travel",
      description: "Professional chauffeur services for corporate executive travelers, business trips, and delegates.",
      icon: Briefcase,
      features: ["Monthly corporate contracts", "Executive vehicle fleet", "Clean & comfortable rides"],
    },
    {
      title: "Special Occasions",
      description: "Luxury transportation for weddings, family functions, and VIP guests across Surat & Gujarat.",
      icon: Sparkles,
      features: ["Decorated vehicle options", "Wedding & event packages", "Multi-vehicle fleet coordination"],
    },
    {
      title: "City Tours & Outstation",
      description: "Explore Surat, Gujarat, Rajasthan, and Maharashtra with experienced local highway drivers.",
      icon: MapPin,
      features: ["Half-day & full-day packages", "Experienced highway drivers", "100% customizable itineraries"],
    },
  ]

  const whyChooseUsPoints = [
    {
      title: "No Hidden Costs",
      description: "All-inclusive transparent pricing with no surprise charges. Detailed upfront quotes including tolls and driver allowances.",
      icon: ShieldCheck,
    },
    {
      title: "Experienced Drivers",
      description: "Our drivers average 8+ years of driving experience across Surat, Gujarat, and interstate highways.",
      icon: Award,
    },
    {
      title: "Customized Rides",
      description: "From child seats to special trip requests, we tailor every aspect of your trip to meet your family's exact needs.",
      icon: Users,
    },
    {
      title: "98% On-Time Record",
      description: "Punctual pickups with real-time GPS tracking and proactive communication for zero delays.",
      icon: Clock,
    },
    {
      title: "Well-Maintained Fleet",
      description: "All vehicles undergo regular safety inspections. Pristine fleet of Sedans, SUVs, Innova Crysta, and Urbania.",
      icon: Car,
    },
    {
      title: "24/7 Dedicated Support",
      description: "Our Surat dispatch team is available round-the-clock via Phone and WhatsApp for immediate trip updates.",
      icon: Phone,
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50/40 text-slate-800">
      <Header />

      {/* Bright & User-Friendly Hero Section */}
      <section className="relative bg-gradient-to-b from-amber-50/80 via-slate-50/60 to-white py-12 sm:py-16 lg:py-20 text-slate-900 overflow-hidden border-b border-amber-100/80">
        {/* Soft Ambient Background Accent */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Copy & Quick Stats */}
            <div className="lg:col-span-7 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-semibold text-slate-500 mb-4">
                <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
                <span>/</span>
                <span className="text-amber-600 font-bold">About Us</span>
              </div>

              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-amber-700 bg-amber-100 px-3.5 py-1.5 rounded-full border border-amber-300/60 mb-5">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Reliable • Safe • Affordable</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4 text-slate-900">
                About <span className="text-amber-500">Lucifer Cabs</span>
              </h1>

              <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed mb-8 max-w-2xl">
                Surat&apos;s premier cab rental service providing safe, comfortable, and pocket-friendly travel. Specializing in One-Way Outstation Cabs, Airport Transfers, and Custom Family Tours across Gujarat, Maharashtra & Rajasthan.
              </p>

              {/* Quick Trust Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
                <div className="bg-white border border-slate-200/90 shadow-2xs rounded-xl p-3 text-center">
                  <div className="text-xl sm:text-2xl font-black text-slate-950">10K+</div>
                  <div className="text-[11px] font-bold text-slate-700">Happy Trips</div>
                </div>
                <div className="bg-white border border-slate-200/90 shadow-2xs rounded-xl p-3 text-center">
                  <div className="text-xl sm:text-2xl font-black text-slate-950">500+</div>
                  <div className="text-[11px] font-bold text-slate-700">Verified Cabs</div>
                </div>
                <div className="bg-white border border-slate-200/90 shadow-2xs rounded-xl p-3 text-center">
                  <div className="text-xl sm:text-2xl font-black text-slate-950">4.9★</div>
                  <div className="text-[11px] font-bold text-slate-700">User Rating</div>
                </div>
                <div className="bg-white border border-slate-200/90 shadow-2xs rounded-xl p-3 text-center">
                  <div className="text-xl sm:text-2xl font-black text-slate-950">24/7</div>
                  <div className="text-[11px] font-bold text-slate-700">Surat Helpline</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3.5">
                <a
                  href="tel:7069300605"
                  className="inline-flex items-center gap-2 bg-[#FFB800] hover:bg-amber-400 text-slate-950 px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-lg"
                >
                  <Phone className="w-4 h-4 fill-slate-950" />
                  <span>Call 7069300605</span>
                </a>
                <a
                  href="https://wa.me/917069300605?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Lucifer%20Cabs%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-md"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white fill-current shrink-0" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Column: Showcase Photo */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto h-[300px] sm:h-[380px] w-full rounded-3xl overflow-hidden shadow-xl border-2 border-slate-200/80">
                <Image
                  src="/images/about-hero-new.jpg"
                  alt="Lucifer Cabs Surat Airport Service"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                
                {/* Floating Humanized Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200/80 text-slate-900 shadow-lg flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 border border-amber-300">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                      100% Verified Local Drivers in Surat
                    </h4>
                    <p className="text-[11px] text-slate-600 font-medium mt-0.5">
                      Punctual pickups & clean, sanitized vehicles guaranteed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Story Showcase Image */}
            <div className="lg:col-span-5 relative h-[320px] sm:h-[420px] w-full rounded-3xl overflow-hidden shadow-lg border border-slate-200/80">
              <Image
                src="/images/about-story-fleet.jpg"
                alt="Lucifer Cabs Team & Fleet"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-white">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-xs mb-1">
                  <Star className="w-3.5 h-3.5 fill-amber-300" />
                  <span>Ethical & Transparent Service</span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-200 leading-snug italic">
                  &ldquo;Our commitment to transparent pricing and verified professional drivers has made us Surat&apos;s #1 choice.&rdquo;
                </p>
              </div>
            </div>

            {/* Story Copy */}
            <div className="lg:col-span-7">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#FFB800] block mb-2">
                OUR STORY & MISSION
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
                Your Trusted Travel Partner in Surat
              </h2>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                <p>
                  <strong className="text-slate-900 font-bold">Lucifer Cabs</strong> is one of the most esteemed travel organizations headquartered in Surat, dedicated to providing a wide range of Cab Rental Services across Gujarat, Maharashtra, and Rajasthan. Our offerings include Car Hiring Services, One Way Taxi, Outstation Cabs, and 24/7 Airport Transfers—all meticulously maintained by our automotive professionals.
                </p>
                <p>
                  We place paramount emphasis on ensuring clients reach their destinations safely and punctually. Our reputation in the Travel and Tourism Industry is built on efficient, reliable services and maximum client satisfaction. We customize services to meet every client requirement with transparent, all-inclusive pricing.
                </p>
              </div>

              {/* Office & Contact Box */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-2xl flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 border border-amber-200">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">Office Address</h4>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=406+Creation+Plaza+1+Sitanagar+to+Bombay+Market+Road+Surat+395010"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-amber-600 hover:underline transition-colors cursor-pointer"
                        title="Open location on Google Maps"
                      >
                        406, Creation Plaza 1, Sitanagar to Bombay Market Road, Surat - 395010
                      </a>
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-2xl flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 border border-amber-200">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">Direct Contact</h4>
                    <p className="text-xs text-slate-600 font-medium">
                      Phone: <a href="tel:7069300605" className="text-slate-900 font-bold hover:text-amber-600">7069300605</a>
                    </p>
                    <p className="text-xs text-slate-600 font-medium">
                      Email: <a href="mailto:lucifercab7@gmail.com" className="text-slate-900 font-bold hover:text-amber-600">lucifercab7@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-slate-50/60 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#FFB800] block mb-2">
              OUR CAB RENTAL SERVICES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Tailored Travel Solutions For Every Need
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {rentalServices.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-amber-100/70 text-amber-800 flex items-center justify-center mb-5 border border-amber-300/60">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900 mb-2">{service.title}</h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                      {service.description}
                    </p>
                  </div>
                  <ul className="space-y-2.5 pt-4 border-t border-slate-100">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#FFB800] block mb-2">
              WHY CHOOSE US
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              The Gold Standard in Cab Rentals
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUsPoints.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-6 hover:border-amber-300 transition-colors shadow-2xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-100/70 text-amber-800 flex items-center justify-center mb-4 border border-amber-300/50">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  )
}

