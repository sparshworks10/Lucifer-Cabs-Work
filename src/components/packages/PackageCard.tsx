import { Package } from "@/data/mockData"
import Image from "next/image"
import { Phone, MessageCircle } from "lucide-react"
import { getPackageWhatsAppUrl } from "@/lib/whatsapp"

interface PackageCardProps {
  pkg: Package
}

export default function PackageCard({ pkg }: PackageCardProps) {
  const whatsappUrl = getPackageWhatsAppUrl(pkg.title, pkg.description)
  const callUrl = "tel:917069300605"

  return (
    <article className="group flex flex-col justify-between rounded-3xl border border-slate-100 bg-white p-4 sm:p-5 text-center shadow-lg shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-300 hover:shadow-2xl">
      <div>
        {/* Destination Image Container */}
        {pkg.image && (
          <div className="relative mx-auto mb-3.5 h-44 sm:h-48 w-full overflow-hidden rounded-2xl bg-slate-100 shadow-inner">
            <Image
              src={pkg.image}
              alt={pkg.title}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-60" />
          </div>
        )}

        {/* Title Yellow/Amber Pill Badge */}
        <div className="mb-2.5 w-full rounded-full bg-[#FFB800] px-3 py-1.5 text-center text-xs font-black uppercase tracking-wider text-slate-950 shadow-xs truncate">
          {pkg.title}
        </div>

        {/* Description */}
        {pkg.description && (
          <p className="text-[11px] sm:text-xs font-semibold text-slate-500 leading-snug min-h-[32px] px-1">
            {pkg.description}
          </p>
        )}
      </div>

      {/* Action Buttons: Call & WhatsApp Only */}
      <div className="mt-4 border-t border-slate-100 pt-3 grid grid-cols-2 gap-2.5 w-full">
        <a
          href={callUrl}
          className="flex items-center justify-center gap-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white py-2.5 px-2.5 text-xs font-extrabold transition-all shadow-md shadow-blue-500/20 hover:scale-[1.02] cursor-pointer"
        >
          <Phone className="h-3.5 w-3.5 stroke-[2.5]" />
          <span>Call</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white py-2.5 px-2.5 text-xs font-extrabold transition-all shadow-md shadow-emerald-500/20 hover:scale-[1.02] cursor-pointer"
        >
          <MessageCircle className="h-3.5 w-3.5 stroke-[2.5]" />
          <span>WhatsApp</span>
        </a>
      </div>
    </article>
  )
}


