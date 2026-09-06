export interface Service {
  id: string
  title: string
  description: string
  icon: string
  linkText: string
}

export interface Route {
  id: string
  from: string
  to: string
  linkText: string
}

export interface Vehicle {
  id: string
  name: string
  image: string
  seats: number | string
  bags: number
  ac: boolean
  linkText: string
  acIcon: string
  arrowIcon: string
}

export interface Package {
  id: string
  title: string
  description: string
  price: string
  icon: string
  linkText: string
}

export interface Testimonial {
  id: string
  name: string
  location: string
  avatar: string
  quote: string
  rating: number
}

export interface Stat {
  id: string
  value: string
  label: string
}

export const SERVICES: Service[] = [
  {
    id: "1",
    title: "One Way Taxi",
    description: "Travel one side without paying for return journey.",
    icon: "Car",
    linkText: "Book One Way",
  },
  {
    id: "2",
    title: "Round Trip Taxi",
    description: "Book round trip cabs for convenient return travel.",
    icon: "RefreshCw",
    linkText: "Book Round Trip",
  },
  {
    id: "3",
    title: "Airport Taxi",
    description: "Airport pickup & drop services on time.",
    icon: "Plane",
    linkText: "Book Airport Taxi",
  },
  {
    id: "4",
    title: "Local Taxi",
    description: "Hourly & local taxi services in Surat and nearby.",
    icon: "MapPin",
    linkText: "Book Local Taxi",
  },
]

export const ROUTES: Route[] = [
  { id: "1", from: "Surat", to: "Ahmedabad", linkText: "Get Quote" },
  { id: "2", from: "Ahmedabad", to: "Surat", linkText: "Get Quote" },
  { id: "3", from: "Surat", to: "Mumbai", linkText: "Get Quote" },
  { id: "4", from: "Mumbai", to: "Surat", linkText: "Get Quote" },
  { id: "5", from: "Ahmedabad", to: "Mumbai", linkText: "Get Quote" },
  { id: "6", from: "Mumbai", to: "Ahmedabad", linkText: "Get Quote" },
  { id: "7", from: "Surat", to: "Udaipur", linkText: "Get Quote" },
  { id: "8", from: "Surat", to: "Ujjain", linkText: "Get Quote" },
]

export const FLEET: Vehicle[] = [
  {
    id: "1",
    name: "Sedan",
    image: "/images/fleet/sedan.jpg",
    seats: "4 Seater",
    bags: 2,
    ac: true,
    linkText: "Get Quote",
    acIcon: "/assets/fleet/sedan-node-1-286-03.png",
    arrowIcon: "/assets/fleet/sedan-node-1-286-01.png",
  },
  {
    id: "2",
    name: "SUV",
    image: "/images/fleet/suv.jpg",
    seats: "6 Seater",
    bags: 3,
    ac: true,
    linkText: "Get Quote",
    acIcon: "/assets/fleet/suv-node-1-276-02.png",
    arrowIcon: "/assets/fleet/suv-node-1-276-01.png",
  },
  {
    id: "3",
    name: "Ertiga",
    image: "/images/fleet/ertiga.jpg",
    seats: "6 Seater",
    bags: 3,
    ac: true,
    linkText: "Get Quote",
    acIcon: "/assets/fleet/ertiga-node-1-266-03.png",
    arrowIcon: "/assets/fleet/ertiga-node-1-266-01.png",
  },
  {
    id: "4",
    name: "Innova",
    image: "/images/fleet/innova.jpg",
    seats: "7 Seater",
    bags: 4,
    ac: true,
    linkText: "Get Quote",
    acIcon: "/assets/fleet/innova-node-1-256-02.png",
    arrowIcon: "/assets/fleet/innova-node-1-256-01.png",
  },
  {
    id: "5",
    name: "Innova Crysta",
    image: "/images/fleet/innova-crysta.png",
    seats: "7 Seater",
    bags: 4,
    ac: true,
    linkText: "Get Quote",
    acIcon: "/assets/fleet/innova-crysta-node-1-246-02.png",
    arrowIcon: "/assets/fleet/innova-crysta-node-1-246-01.png",
  },
  {
    id: "6",
    name: "Tempo Traveller",
    image: "/images/fleet/tempo-traveller.jpg",
    seats: "9-12-15-20 Seater",
    bags: 6,
    ac: true,
    linkText: "Get Quote",
    acIcon: "/assets/fleet/tempo-traveller-node-1-236-02.png",
    arrowIcon: "/assets/fleet/tempo-traveller-node-1-236-01.png",
  },
  {
    id: "7",
    name: "Urbania",
    image: "/images/fleet/urbania.jpg",
    seats: "16 Seater",
    bags: 4,
    ac: true,
    linkText: "Get Quote",
    acIcon: "/assets/fleet/urbania-node-1-226-02.png",
    arrowIcon: "/assets/fleet/urbania-node-1-226-01.png",
  },
  {
    id: "8",
    name: "Kia Carens",
    image: "/images/fleet/kia-carens.jpg",
    seats: "6 Seater",
    bags: 3,
    ac: true,
    linkText: "Get Quote",
    acIcon: "/assets/fleet/kia-carens-node-1-216-03.png",
    arrowIcon: "/assets/fleet/kia-carens-node-1-216-01.png",
  },
]

export const PACKAGES: Package[] = [
  {
    id: "1",
    title: "Local 8 Hours / 80 KM",
    description: "Perfect for local travel",
    price: "2,499",
    icon: "MapPin",
    linkText: "Book Now",
  },
  {
    id: "2",
    title: "Outstation",
    description: "One way or round trip",
    price: "6,499",
    icon: "Car",
    linkText: "Book Now",
  },
  {
    id: "3",
    title: "Airport Transfer",
    description: "Pickup & drop service",
    price: "999",
    icon: "Plane",
    linkText: "Book Now",
  },
  {
    id: "4",
    title: "Weekend Trip",
    description: "2N/3D comfortable trip",
    price: "9,999",
    icon: "Calendar",
    linkText: "Book Now",
  },
  {
    id: "5",
    title: "Family Trip",
    description: "Safe & comfortable",
    price: "12,999",
    icon: "Users",
    linkText: "Book Now",
  },
  {
    id: "6",
    title: "Corporate Travel",
    description: "Business travel solution",
    price: "8,999",
    icon: "Briefcase",
    linkText: "Book Now",
  },
]

export const STATS: Stat[] = [
  { id: "1", value: "10K+", label: "Happy Customers" },
  { id: "2", value: "500+", label: "Cars On Road" },
  { id: "3", value: "50+", label: "Routes Covered" },
  { id: "4", value: "24/7", label: "Customer Support" },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Ravi Patel",
    location: "Surat",
    avatar: "/images/testimonials/avatar-1.jpg",
    quote: "Booked an Innova from Surat to Mumbai airport for my family. Driver Ramesh was on time at 4 AM, driving was super smooth, and the car was clean & fresh.",
    rating: 5,
  },
  {
    id: "2",
    name: "Neha Shah",
    location: "Ahmedabad",
    avatar: "/images/testimonials/avatar-2.jpg",
    quote: "Really good cab service. The ride from Ahmedabad to Vadodara was comfortable with great AC. Driver was polite—took a small 10-min tea break, but overall top rating!",
    rating: 4.5,
  },
  {
    id: "3",
    name: "Ketan Mehta",
    location: "Mumbai",
    avatar: "/images/testimonials/avatar-3.jpg",
    quote: "We hired a round trip cab for Udaipur family trip. Vehicle condition was top notch and billing was 100% transparent with no hidden tolls or extra charges.",
    rating: 5,
  },
  {
    id: "4",
    name: "Priya Desai",
    location: "Surat",
    avatar: "/images/testimonials/avatar-4.jpg",
    quote: "Needed an urgent midnight airport drop in Surat. Lucifer Cabs arrived within 15 minutes. Super reliable service, would definitely book again!",
    rating: 4.5,
  },
]
