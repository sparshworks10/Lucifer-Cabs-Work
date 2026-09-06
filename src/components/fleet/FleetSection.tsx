import { FLEET } from "@/data/mockData"
import Image from "next/image"
import { Users, Briefcase, Snowflake, ArrowRight } from "lucide-react"

export default function FleetSection() {
  return (
    <section id="fleet" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-amber-600 font-bold text-xs tracking-widest uppercase block mb-2">OUR FLEET</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Choose Your Comfortable Ride</h2>
          </div>
          <button className="hidden sm:flex items-center gap-1.5 border border-gray-200 bg-white hover:bg-gray-50 text-slate-700 px-4 py-2 rounded-lg text-sm font-bold transition-colors shadow-sm">
            View All Vehicles <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FLEET.map((vehicle) => (
            <div key={vehicle.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group p-5 text-center flex flex-col justify-between">
              <div>
                <div className="relative h-36 w-full mb-4 flex items-center justify-center">
                  <Image 
                    src={vehicle.image} 
                    alt={vehicle.name} 
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300 mix-blend-multiply"
                  />
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 mb-3">{vehicle.name}</h3>
                
                <div className="flex justify-center items-center gap-4 mb-5 text-xs text-slate-500 font-medium">
                  <div className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-amber-500" />
                    <span>{String(vehicle.seats).includes("Seater") ? vehicle.seats : `${vehicle.seats} Seater`}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Briefcase className="w-3.5 h-3.5 text-amber-500" />
                    <span>{vehicle.bags} Bags</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Snowflake className="w-3.5 h-3.5 text-amber-500" />
                    <span>{vehicle.ac ? 'AC' : 'Non AC'}</span>
                  </div>
                </div>
              </div>
              
              <button className="w-full flex items-center justify-center gap-1 text-amber-600 font-bold text-sm hover:text-amber-700 transition-colors pt-3 border-t border-gray-100">
                Get Quote <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
