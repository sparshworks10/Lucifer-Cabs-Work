import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Lucifer Cabs Service Surat & Outstation Rental",
  description:
    "Learn about Lucifer Cabs Service in Surat. Gujarat's premier outstation cab rental partner offering 100% verified local drivers, 24/7 airport transfers, and transparent Innova Crysta pricing.",
  keywords: [
    "About Lucifer Cabs",
    "Lucifer Cabs Service",
    "Lucifer Service in Surat",
    "Best Cab Agency Surat",
    "Surat Outstation Taxi Company",
    "Verified Cab Drivers Surat",
    "Lucifer Cabs Contact Number 7069300605"
  ],
  alternates: {
    canonical: "https://lucifercabs.com/about",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
