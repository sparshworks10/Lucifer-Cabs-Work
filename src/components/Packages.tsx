import { MapPin, Navigation, Plane, Umbrella, Briefcase, Car, ArrowRight } from "lucide-react";
import { getPackageWhatsAppUrl } from "@/lib/whatsapp";

const packages = [
  {
    title: "Local 8 Hours / 80 KM",
    description: "Perfect for local travel",
    icon: <Car className="w-6 h-6 text-amber-500" />,
  },
  {
    title: "Outstation",
    description: "One way or round trip",
    icon: <Navigation className="w-6 h-6 text-amber-500" />,
  },
  {
    title: "Airport Transfer",
    description: "Pickup & drop service",
    icon: <Plane className="w-6 h-6 text-amber-500" />,
  },
  {
    title: "Weekend Trip",
    description: "2N/3D comfortable trip",
    icon: <Umbrella className="w-6 h-6 text-amber-500" />,
  },
  {
    title: "Corporate Travel",
    description: "Business travel solution",
    icon: <Briefcase className="w-6 h-6 text-amber-500" />,
  }
];

export function Packages() {
  return (
    <section id="packages" className="py-16 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 lg:px-12 max-w-[1400px]">

        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div className="text-center md:text-left">
            <p className="text-amber-500 font-extrabold text-xs tracking-widest uppercase mb-2">Travel Packages</p>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Best Packages For You</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {packages.map((pkg, index) => {
            const whatsappUrl = getPackageWhatsAppUrl(pkg.title, pkg.description)

            return (
              <div key={index} className="group flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-xl">
                <div>
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-500 transition-colors group-hover:bg-[#FFB800] group-hover:text-slate-950">
                    {pkg.icon}
                  </div>
                  <h3 className="mb-1 text-sm font-extrabold text-slate-900">{pkg.title}</h3>
                  <p className="text-xs font-medium text-slate-500 leading-relaxed min-h-[32px]">{pkg.description}</p>
                </div>

                <div className="mt-4 border-t border-slate-100 pt-3">
                  <div>
                    <span className="text-xs font-extrabold text-amber-600 bg-amber-50/80 px-2.5 py-1 rounded-full border border-amber-200/60 inline-block">Custom Quote</span>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1">Best Fare Guaranteed</span>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-xl border border-amber-300/80 bg-amber-50/60 py-2 text-xs font-bold text-amber-700 transition-all group-hover:bg-[#FFB800] group-hover:text-slate-950"
                  >
                    <span>Get Instant Quote</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}

