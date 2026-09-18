"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"

const WhatsAppIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2003/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.67-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.488-8.413z" />
  </svg>
)

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

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeHash, setActiveHash] = useState("")
  const pathname = usePathname()
  const isClickingRef = useRef(false)
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Routes", href: "/routes" },
    { name: "Fleet", href: "/#fleet" },
    { name: "Packages", href: "/#packages" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/#contact" },
  ]

  useEffect(() => {
    if (typeof window === "undefined") return

    const handleScroll = () => {
      if (isClickingRef.current || pathname !== "/") return

      const sections = ["services", "fleet", "packages", "contact"]
      let currentSection = ""

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 250 && rect.bottom >= 150) {
            currentSection = `/#${sectionId}`
            break
          }
        }
      }

      if (currentSection) {
        setActiveHash(currentSection)
      } else if (window.scrollY < 300) {
        setActiveHash("")
      }
    }

    if (window.location.hash && pathname === "/") {
      const hash = window.location.hash
      setActiveHash(`/${hash}`)
      const targetId = hash.replace("#", "")
      setTimeout(() => {
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          const navOffset = 80
          const elementPosition = targetElement.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - navOffset
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          })
        }
      }, 150)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  const isLinkActive = (href: string) => {
    if (pathname === "/about") return href === "/about"
    if (pathname === "/routes") return href === "/routes"
    if (pathname === "/") {
      if (href === "/") return activeHash === "" || activeHash === "/#hero"
      return activeHash === href
    }
    return false
  }

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false)

    if (href.includes("#")) {
      const hashPart = href.substring(href.indexOf("#"))
      const targetId = hashPart.replace("#", "")

      setActiveHash(`/${hashPart}`)
      isClickingRef.current = true

      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current)
      clickTimeoutRef.current = setTimeout(() => {
        isClickingRef.current = false
      }, 1000)

      if (pathname === "/") {
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          e.preventDefault()
          const navOffset = 80
          const elementPosition = targetElement.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - navOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          })
          window.history.pushState(null, "", hashPart)
        }
      }
    } else if (href === "/") {
      setActiveHash("")
      isClickingRef.current = true
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current)
      clickTimeoutRef.current = setTimeout(() => {
        isClickingRef.current = false
      }, 1000)

      if (pathname === "/") {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: "smooth" })
        window.history.pushState(null, "", "/")
      }
    }
  }

  return (
    <nav className="h-20 border-b border-slate-100 bg-white sticky top-0 z-50 transition-all">
      <div className="mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-full items-center justify-between">

          {/* Brand Logo */}
          <Link href="/" className="flex shrink-0 items-center gap-2.5 group">
            <TaxiLogoIcon />
            <div className="flex flex-col leading-tight">
              <div className="flex items-center text-xl font-extrabold tracking-tight">
                <span className="text-slate-900">Lucifer</span>
                <span className="text-[#FFB800] ml-1">Cabs</span>
              </div>
              <span className="text-[11px] font-normal text-slate-400 tracking-normal -mt-0.5">
                Travel with Comfort
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => {
              const active = isLinkActive(link.href)
              return (
                <div key={link.name} className="relative group py-6">
                  <Link
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`relative text-sm font-semibold py-2 transition-colors duration-150 ${
                      active ? "text-[#FFB800]" : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    {link.name}
                    {active && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-[3px] bg-[#FFB800] rounded-full" />
                    )}
                  </Link>
                </div>
              )
            })}
          </div>

          {/* Desktop CTA Action Buttons */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:7069300605"
              className="flex h-10 items-center justify-center gap-2 rounded-xl border border-amber-300 bg-white px-4 text-xs sm:text-sm font-medium text-slate-700 hover:border-amber-400 hover:bg-amber-50/30 transition-all shadow-2xs"
            >
              <Phone className="h-4 w-4 text-amber-500 fill-amber-500" strokeWidth={1.5} />
              Call Now
            </a>
            <a
              href={`https://wa.me/917069300605?text=${encodeURIComponent(
                "Hi, I'm looking for a cab service with Lucifer Cabs. Can you please help me with quotes and availability?"
              )}`}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 items-center justify-center gap-2 rounded-xl bg-[#FFB800] px-4.5 text-xs sm:text-sm font-medium text-slate-900 hover:bg-amber-400 transition-all shadow-xs hover:shadow-md"
            >
              <WhatsAppIcon className="h-4 w-4 text-slate-900" />
              WhatsApp Us
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="absolute left-0 top-20 w-full border-b border-slate-200 bg-white px-6 pb-6 pt-4 shadow-xl lg:hidden transition-all z-50">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const active = isLinkActive(link.href)
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`py-2 text-base font-semibold border-b border-slate-50 transition-colors ${
                    active ? "text-[#FFB800]" : "text-slate-700 hover:text-[#FFB800]"
                  }`}
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.name}
                </Link>
              )
            })}
          </div>
          <div className="pt-5 flex flex-col gap-3">
            <a
              href="tel:7069300605"
              className="flex items-center justify-center gap-2 rounded-xl border border-amber-300 py-3 text-center text-sm font-medium text-slate-800"
            >
              <Phone className="h-4 w-4 text-amber-500 fill-amber-500" />
              Call Now
            </a>
            <a
              href={`https://wa.me/917069300605?text=${encodeURIComponent(
                "Hi, I'm looking for a cab service with Lucifer Cabs. Can you please help me with quotes and availability?"
              )}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#FFB800] py-3 text-center text-sm font-medium text-slate-900 shadow-sm"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}



