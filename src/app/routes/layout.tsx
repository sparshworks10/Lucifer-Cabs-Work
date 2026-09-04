import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Outstation Taxi Routes & One-Way Cab Hire | Lucifer Cabs",
  description:
    "Explore outstation cab routes from Ahmedabad, Surat, Mumbai, Vadodara, Rajkot & Udaipur. Instant booking for one-way taxi & Innova Crysta rentals.",
  keywords: [
    "Outstation Cab Routes",
    "Ahmedabad to Mumbai Cab",
    "Ahmedabad to Udaipur Taxi",
    "Surat to Mumbai Taxi Service",
    "One Way Taxi Gujarat",
    "Ahmedabad to Vadodara Cab",
    "Innova Crysta Rental Routes",
    "Outstation Taxi Rates Gujarat"
  ],
  alternates: {
    canonical: "/routes",
  },
}

export default function RoutesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
