import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Lucifer Cabs Outstation Taxi & Rental Service",
  description:
    "Learn about Lucifer Cabs, Gujarat's premier outstation cab rental partner. 100% verified drivers, 24/7 airport transfers, and transparent Innova Crysta pricing.",
  keywords: [
    "About Lucifer Cabs",
    "Best Cab Agency Gujarat",
    "Surat Outstation Taxi Company",
    "Verified Cab Drivers Gujarat",
    "Lucifer Cabs Contact Number 7069300605"
  ],
  alternates: {
    canonical: "/about",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
