import { Package } from "@/data/mockData"
import { MapPin, Car, Plane, Calendar, Users, Briefcase, ArrowRight } from "lucide-react"
import { getPackageWhatsAppUrl } from "@/lib/whatsapp"

const ICONS: Record<string, React.ElementType> = {
  MapPin,
  Car,
  Plane,
  Calendar,
  Users,
  Briefcase,
}

interface PackageCardProps {
  pkg: Package
}

export default function PackageCard({ pkg }: PackageCardProps) {
  const Icon = ICONS[pkg.icon] || MapPin
  const whatsappUrl = getPackageWhatsAppUrl(pkg.title, pkg.description)

  return (
    <article className="group flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-xl">
      <div>
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-500 transition-colors group-hover:bg-[#FFB800] group-hover:text-slate-950">
          <Icon className="h-6 w-6" strokeWidth={2} />
        </div>

        <h3 className="mb-1 text-sm font-extrabold text-slate-900">{pkg.title}</h3>
        <p className="text-xs font-medium text-slate-500 leading-relaxed min-h-[32px]">{pkg.description}</p>
      </div>

      <div className="mt-4 border-t border-slate-100 pt-3">
        <div>
          <span className="text-sm font-extrabold text-amber-600 bg-amber-50/80 px-2.5 py-1 rounded-full border border-amber-200/60 inline-block">
            Custom Quote
          </span>
          <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1">
            Best Fare Guaranteed
          </span>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-xl border border-amber-300/80 bg-amber-50/60 py-2 text-xs font-bold text-amber-700 transition-all group-hover:bg-[#FFB800] group-hover:text-slate-950"
        >
          <span>Get Instant Quote</span>
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
        </a>
      </div>
    </article>
  )
}


