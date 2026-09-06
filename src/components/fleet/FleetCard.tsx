import { Vehicle } from "@/data/mockData"
import Image from "next/image"
import { ArrowRight, Snowflake, Users, Briefcase } from "lucide-react"
import { getFleetWhatsAppUrl } from "@/lib/whatsapp"

interface FleetCardProps {
  vehicle: Vehicle
}

export default function FleetCard({ vehicle }: FleetCardProps) {
  const whatsappUrl = getFleetWhatsAppUrl(vehicle.name)

  const seatingLabel = String(vehicle.seats).includes("Seater")
    ? vehicle.seats
    : `${vehicle.seats} Seater`

  return (
    <article className="group flex flex-col justify-between rounded-2xl bg-white p-3 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-slate-100 shadow-xs hover:border-amber-300">
      <div>
        {/* Vehicle Image Container */}
        <div className="relative mx-auto mb-2 h-20 sm:h-24 w-full overflow-hidden flex items-center justify-center bg-white rounded-xl">
          <Image
            src={vehicle.image}
            alt={vehicle.name}
            fill
            sizes="(min-width: 1024px) 12vw, (min-width: 640px) 25vw, 50vw"
            className="object-contain p-1 group-hover:scale-105 transition-transform duration-300 mix-blend-multiply"
          />
        </div>

        {/* Vehicle Title */}
        <h3 className="mb-2 text-center text-xs sm:text-sm font-extrabold text-slate-900 tracking-tight leading-tight min-h-[32px] flex items-center justify-center">
          {vehicle.name}
        </h3>

        {/* Clean minimal badge stack for seating & luggage */}
        <div className="mb-3 flex flex-col items-center gap-1.5 w-full">
          {/* Seating Capacity Pill Badge */}
          <span className="inline-flex items-center justify-center gap-1 px-2 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-[10px] sm:text-[11px] font-extrabold text-amber-800 w-full truncate">
            <Users className="h-3 w-3 shrink-0 text-amber-500" />
            <span className="truncate">{seatingLabel}</span>
          </span>

          {/* Specs Sub-line: Luggage & AC */}
          <div className="flex items-center justify-center gap-1.5 text-[10px] sm:text-[11px] font-semibold text-slate-400">
            <span className="flex items-center gap-1">
              <Briefcase className="h-3 w-3 text-slate-400 shrink-0" />
              {vehicle.bags} Bags
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1">
              <Snowflake className="h-3 w-3 text-slate-400 shrink-0" />
              {vehicle.ac ? "AC" : "Non AC"}
            </span>
          </div>
        </div>
      </div>

      {/* Action CTA Link to WhatsApp Quote */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-1 flex w-full items-center justify-center gap-1 py-1.5 text-xs font-bold text-[#FFB800] hover:text-amber-600 transition-colors cursor-pointer group-hover:translate-x-0.5 border-t border-slate-100"
      >
        <span>Get Quote</span>
        <ArrowRight className="h-3 w-3 text-[#FFB800]" strokeWidth={2.5} />
      </a>
    </article>
  )
}
