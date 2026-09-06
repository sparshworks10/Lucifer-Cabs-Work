import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Outstation Taxi Routes & One-Way Cab Hire | Lucifer Cabs Surat",
  description:
    "Lucifer Cabs Service Routes. Explore one-way outstation cab routes from Surat, Ahmedabad, Mumbai, Vadodara, Rajkot & Udaipur. Instant booking for Innova Crysta & SUV rentals.",
  keywords: [
    "Lucifer Cabs Routes",
    "Lucifer Cabs Service Surat",
    "Surat to Mumbai Cab",
    "Ahmedabad to Mumbai Cab",
    "Surat to Udaipur Taxi",
    "One Way Taxi Gujarat",
    "Ahmedabad to Vadodara Cab",
    "Innova Crysta Rental Routes Surat",
    "Outstation Taxi Rates Gujarat 7069300605"
  ],
  alternates: {
    canonical: "https://lucifercabs.com/routes",
  },
}

export default function RoutesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
