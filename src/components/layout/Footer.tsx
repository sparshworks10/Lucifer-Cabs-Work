import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"

const TaxiLogoIcon = () => (
  <svg width="40" height="32" viewBox="0 0 48 38" fill="none" xmlns="http://www.w3.org/2003/svg" className="shrink-0">
    <rect x="18" y="1" width="12" height="5" rx="1.5" fill="#FFB800" stroke="#D97706" strokeWidth="1"/>
    <text x="24" y="4.8" fontSize="3.2" fontWeight="800" fill="#0F172A" textAnchor="middle">TAXI</text>
    <path d="M12 12C12 8.5 15 6 18 6H30C33 6 36 8.5 36 12L39 19V30C39 31.5 37.8 32.5 36.5 32.5H35.5C34.2 32.5 33 31.5 33 30V29H15V30C15 31.5 13.8 32.5 12.5 32.5H11.5C10.2 32.5 9 31.5 9 30V19L12 12Z" fill="#FFB800"/>
    <path d="M14 13.5C14.5 11 16.5 9.5 19 9.5H29C31.5 9.5 33.5 11 34 13.5L35.2 18H12.8L14 13.5Z" fill="#1E293B"/>
    <rect x="6" y="17" width="3" height="4" rx="1" fill="#D97706"/>
    <rect x="39" y="17" width="3" height="4" rx="1" fill="#D97706"/>
    <rect x="12" y="21" width="24" height="6" rx="2" fill="#D97706"/>
    <rect x="18" y="22.5" width="12" height="3" rx="1" fill="#1E293B"/>
    <circle cx="13.5" cy="21" r="2.5" fill="#FFF" stroke="#E2E8F0" strokeWidth="0.5"/>
    <circle cx="34.5" cy="21" r="2.5" fill="#FFF" stroke="#E2E8F0" strokeWidth="0.5"/>
    <rect x="11" y="29" width="4" height="6" rx="1.5" fill="#0F172A"/>
    <rect x="33" y="29" width="4" height="6" rx="1.5" fill="#0F172A"/>
  </svg>
)

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
)

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Col 1: Brand Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-4 flex items-center gap-2.5 group">
              <TaxiLogoIcon />
              <div className="flex flex-col leading-tight">
                <div className="flex items-center text-xl font-extrabold tracking-tight">
                  <span className="text-white">Lucifer</span>
                  <span className="text-[#FFB800] ml-1">Cabs</span>
                </div>
                <span className="text-[11px] font-normal text-slate-400 tracking-normal -mt-0.5">
                  Travel with Comfort
                </span>
              </div>
            </Link>
            <p className="mb-5 text-sm leading-relaxed text-slate-400 font-medium">
              Reliable taxi service in Surat for one-way, round-trip, local and airport travel. Your journey, our responsibility.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Facebook" className="rounded-lg bg-slate-900 p-2 text-slate-400 transition-colors hover:bg-amber-400 hover:text-slate-950">
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Instagram" className="rounded-lg bg-slate-900 p-2 text-slate-400 transition-colors hover:bg-amber-400 hover:text-slate-950">
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a href="https://wa.me/917069300605" aria-label="WhatsApp" className="rounded-lg bg-slate-900 p-2 text-slate-400 transition-colors hover:bg-emerald-500 hover:text-white">
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li><Link href="/" className="hover:text-[#FFB800] transition-colors">Home</Link></li>
              <li><Link href="/#services" className="hover:text-[#FFB800] transition-colors">Services</Link></li>
              <li><Link href="/routes" className="hover:text-[#FFB800] transition-colors">Routes</Link></li>
              <li><Link href="/#fleet" className="hover:text-[#FFB800] transition-colors">Fleet</Link></li>
              <li><Link href="/#packages" className="hover:text-[#FFB800] transition-colors">Packages</Link></li>
              <li><Link href="/about" className="hover:text-[#FFB800] transition-colors">About Us</Link></li>
              <li><Link href="/#contact" className="hover:text-[#FFB800] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 3: Our Services */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">Our Services</h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li><a href="#" className="hover:text-[#FFB800] transition-colors">One Way Taxi</a></li>
              <li><a href="#" className="hover:text-[#FFB800] transition-colors">Round Trip Taxi</a></li>
              <li><a href="#" className="hover:text-[#FFB800] transition-colors">Local Taxi</a></li>
              <li><a href="#" className="hover:text-[#FFB800] transition-colors">Airport Pickup</a></li>
              <li><a href="#" className="hover:text-[#FFB800] transition-colors">Airport Drop</a></li>
              <li><a href="#" className="hover:text-[#FFB800] transition-colors">Outstation Taxi</a></li>
            </ul>
          </div>

          {/* Col 4: Popular Routes */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">Popular Routes</h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>Surat to Mumbai</li>
              <li>Surat to Ahmedabad</li>
              <li>Ahmedabad to Surat</li>
              <li>Mumbai to Surat</li>
              <li>Surat to Udaipur</li>
              <li>Surat to Ujjain</li>
            </ul>
          </div>

          {/* Col 5: Contact Us */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">Contact Us</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-amber-400 mt-0.5" />
                <span className="leading-snug">406, Creation Plaza 1, Sitanagar to Bombay Market Road, Surat - 395010</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-amber-400" />
                <a href="tel:7069300605" className="hover:text-amber-400 transition-colors">+91 7069300605</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-amber-400" />
                <a href="mailto:lucifercab7@gmail.com" className="hover:text-amber-400 transition-colors">lucifercab7@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-amber-400" />
                <span>24x7 Customer Support</span>
              </li>
            </ul>
          </div>

        </div>

        {/* SEO Keyword & Regional Coverage Cloud for Search Engines */}
        <div className="mt-12 pt-8 border-t border-slate-900/80">
          <h5 className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500 mb-3">
            Lucifer Cabs Popular Search Keywords &amp; Regional Services
          </h5>
          <p className="text-[11px] text-slate-400 font-normal leading-relaxed space-x-2">
            <span>Lucifer Cabs</span> •
            <span>Lucifer Cabs Service</span> •
            <span>Lucifer Service in Surat</span> •
            <span>Lucifer Cabs Surat</span> •
            <span>Lucifer Cab Booking 7069300605</span> •
            <span>Lucifer Cabs Ahmedabad</span> •
            <span>Outstation Cab Rental Surat</span> •
            <span>One Way Taxi Surat to Mumbai</span> •
            <span>Surat to Ahmedabad Cab</span> •
            <span>Ahmedabad to Mumbai Cab Service</span> •
            <span>Innova Crysta Rental Surat</span> •
            <span>Surat Airport Taxi Drop (STV)</span> •
            <span>Ahmedabad Airport Cab Pick-up (AMD)</span> •
            <span>Mumbai Airport Outstation Taxi</span> •
            <span>Tempo Traveller Hire Surat</span> •
            <span>Force Urbania Rental Gujarat</span>
          </p>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center text-xs font-medium text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Lucifer Cabs. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons Stacked on Right Side */}
      <div className="fixed bottom-5 right-5 sm:right-6 z-50 flex flex-col gap-3 items-center">
        {/* Floating Call Button */}
        <a
          href="tel:7069300605"
          className="flex h-13 w-13 items-center justify-center rounded-full bg-[#FFB800] text-slate-950 shadow-2xl transition-all hover:scale-110 hover:bg-amber-400 shadow-amber-500/40 cursor-pointer"
          aria-label="Call Lucifer Cabs"
          title="Call Now: 7069300605"
        >
          <Phone className="h-6 w-6 fill-slate-950 text-slate-950" />
        </a>

        {/* Floating WhatsApp Button */}
        <a
          href={`https://wa.me/917069300605?text=${encodeURIComponent(
            "Hi, I'm looking for a cab service with Lucifer Cabs. Can you please help me with quotes and availability?"
          )}`}
          target="_blank"
          rel="noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl transition-all hover:scale-110 hover:bg-emerald-600 shadow-emerald-500/40 cursor-pointer"
          aria-label="Contact on WhatsApp"
          title="WhatsApp Us"
        >
          <svg className="h-7 w-7 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2003/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.67-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.488-8.413z" />
          </svg>
        </a>
      </div>
    </footer>
  )
}

