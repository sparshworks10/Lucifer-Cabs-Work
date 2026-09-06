import { Users, Briefcase, Snowflake } from "lucide-react";

const fleet = [
  { name: "Sedan", seats: "4 Seater", luggage: "2 Bags" },
  { name: "SUV", seats: "6 Seater", luggage: "3 Bags" },
  { name: "Ertiga", seats: "6 Seater", luggage: "3 Bags" },
  { name: "Innova", seats: "7 Seater", luggage: "4 Bags" },
  { name: "Innova Crysta", seats: "7 Seater", luggage: "4 Bags" },
  { name: "Tempo Traveller", seats: "9-12-15-20 Seater", luggage: "6 Bags" },
  { name: "Urbania", seats: "16 Seater", luggage: "4 Bags" },
  { name: "Kia Carens", seats: "6 Seater", luggage: "3 Bags" },
];

export function Fleet() {
  return (
    <section id="fleet" className="py-16 bg-surface">
      <div className="container mx-auto px-4 lg:px-12 max-w-[1400px]">
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div className="text-center md:text-left">
            <p className="text-primary font-bold text-sm tracking-widest uppercase mb-2">Our Fleet</p>
            <h2 className="text-3xl font-black text-dark tracking-tight">Choose Your Comfortable Ride</h2>
          </div>
          <button className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full border border-border font-bold text-sm text-dark hover:border-primary transition-colors bg-white">
            View All Vehicles <span className="text-muted">&rarr;</span>
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-2">
          {fleet.map((car, index) => (
            <div key={index} className="flex flex-col items-center text-center p-2 group hover:-translate-y-1 transition-transform cursor-pointer">
              {/* Image Placeholder */}
              <div className="w-full h-24 sm:h-28 bg-white border border-border rounded-lg shadow-sm flex items-center justify-center mb-4 relative overflow-hidden group-hover:border-primary/50 group-hover:shadow-md transition-all">
                <span className="text-[10px] font-bold text-muted uppercase tracking-wider">{car.name}</span>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5"></div>
              </div>
              
              <h3 className="font-bold text-dark text-[15px] mb-3">{car.name}</h3>
              
              <div className="flex flex-wrap justify-center gap-2 text-[11px] text-body font-medium mb-2">
                <div className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-muted" /> {car.seats}
                </div>
                <div className="flex items-center gap-1">
                  <Briefcase className="w-3.5 h-3.5 text-muted" /> {car.luggage}
                </div>
              </div>
              <div className="flex items-center gap-1 text-[11px] text-body font-medium mb-3">
                <Snowflake className="w-3.5 h-3.5 text-muted" /> AC
              </div>

              <span className="text-primary font-bold text-xs inline-flex items-center gap-1">
                Get Quote <span className="text-primary/70">&rarr;</span>
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
