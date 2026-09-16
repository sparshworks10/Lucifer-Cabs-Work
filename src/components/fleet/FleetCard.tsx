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

  const isBusOrTraveller =
    vehicle.name.toLowerCase().includes("tempo") ||
    vehicle.name.toLowerCase().includes("urbania") ||
    vehicle.name.toLowerCase().includes("bus")

  return (
    <article className="group flex flex-col justify-between rounded-2xl bg-white p-4 sm:p-5 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl border border-slate-100/90 shadow-sm hover:border-amber-300/90">
      <div>
        {/* Vehicle Image Container */}
        <div className="relative mx-auto mb-3 h-28 sm:h-32 w-full overflow-hidden flex items-center justify-center bg-slate-50/40 rounded-xl p-2 group-hover:bg-amber-50/20 transition-colors">
          <Image
            src={vehicle.image}
            alt={vehicle.name}
            fill
            sizes="(min-width: 1280px) 18vw, (min-width: 768px) 30vw, 50vw"
            className="object-contain p-1 group-hover:scale-105 transition-transform duration-300 mix-blend-multiply"
          />
        </div>

        {/* Vehicle Title */}
        <h3 className="mb-2 text-center text-sm sm:text-base font-extrabold text-slate-900 tracking-tight leading-snug min-h-[40px] flex items-center justify-center">
          {vehicle.name}
        </h3>

        {/* Clean badge stack for seating & luggage */}
        <div className="mb-4 flex flex-col items-center gap-2 w-full">
          {/* Seating Capacity Pill Badge */}
          <span className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-xs font-extrabold text-amber-900 w-full whitespace-normal text-center">
            <Users className="h-3.5 w-3.5 shrink-0 text-amber-500" />
            <span>{seatingLabel}</span>
          </span>

          {/* Specs Sub-line: Luggage & AC */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-500">
            {isBusOrTraveller ? (
              <span className="flex items-center gap-1 text-slate-700 font-bold">
                <Snowflake className="h-3.5 w-3.5 text-amber-500 shrink-0" />
                <span>{vehicle.name.toLowerCase().includes("bus") ? "AC / Sitting & Sleeper" : "AC / Non AC"}</span>
              </span>
            ) : (
              <>
                <span className="flex items-center gap-1">
                  <Briefcase className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                  {vehicle.bags} Bags
                </span>
                <span className="text-slate-300">•</span>
                <span className="flex items-center gap-1">
                  <Snowflake className="h-3.5 w-3.5 text-amber-500 shrink-0" />
                  {vehicle.ac ? "AC" : "Non AC"}
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Action CTA Link to WhatsApp Quote */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 flex w-full items-center justify-center gap-1.5 py-2.5 rounded-xl bg-amber-50 text-xs sm:text-sm font-extrabold text-amber-700 hover:bg-[#FFB800] hover:text-slate-950 transition-all cursor-pointer group-hover:shadow-xs border border-amber-200/60"
      >
        <span>Get Quote</span>
        <ArrowRight className="h-4 w-4 stroke-[2.5]" />
      </a>
    </article>
  )
}
