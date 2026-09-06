import type { Metadata } from "next";
import "./globals.css";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://lucifercabs.com"),
  title: {
    default: "Lucifer Cabs | #1 Outstation Taxi & Cab Rental Service Surat & Ahmedabad",
    template: "%s | Lucifer Cabs",
  },
  description:
    "Lucifer Cabs Service in Surat & Ahmedabad. Book 24/7 outstation cabs, one-way taxi rentals, Innova Crysta hire, and airport transfers across Surat, Ahmedabad, Mumbai, Vadodara, Udaipur, and Rajkot. Best rates guaranteed. Call 7069300605.",
  keywords: [
    "Lucifer Cabs",
    "Lucifer Cabs service",
    "Lucifer service in Surat",
    "Lucifer Cabs Surat",
    "Cab Service in Ahmedabad",
    "Outstation Taxi Ahmedabad",
    "Ahmedabad to Udaipur Taxi Service",
    "Surat Outstation Cab Rental",
    "Innova Crysta Rental Ahmedabad",
    "Airport Taxi Transfer Gujarat",
    "Lucifer Cab booking",
    "Lucifer Cabs Ahmedabad",
    "Lucifer Cab contact number 7069300605",
    "Cab Service in Surat",
    "Outstation Taxi Surat",
    "One Way Cab Surat to Mumbai",
    "Ahmedabad to Mumbai Cab",
    "Innova Crysta Rental Surat",
    "Surat Airport Taxi Transfer",
    "Ahmedabad Airport Cab Drop",
    "One Way Cab Booking Gujarat",
    "Tempo Traveller Hire Surat",
    "Force Urbania Cab Rental",
    "24/7 Taxi Booking Surat 7069300605"
  ],
  authors: [{ name: "Lucifer Cabs Team", url: "https://lucifercabs.com" }],
  creator: "Lucifer Cabs",
  publisher: "Lucifer Cabs",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: "https://lucifercabs.com",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://lucifercabs.com",
    siteName: "Lucifer Cabs",
    title: "Lucifer Cabs | #1 Outstation Taxi & Cab Rental Service Surat & Ahmedabad",
    description:
      "Lucifer Cabs Service in Surat & Ahmedabad. Book 24/7 outstation cabs, one-way taxi rentals, and airport transfers across Surat, Ahmedabad, Vadodara, Mumbai, Udaipur, and Rajkot. Call 7069300605.",
    images: [
      {
        url: "/images/about-hero-new.jpg",
        width: 1200,
        height: 630,
        alt: "Lucifer Cabs Outstation Taxi & Airport Transfer Service Surat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucifer Cabs | Premium Outstation Taxi & Cab Booking Surat",
    description:
      "Lucifer Cabs Service in Surat & Ahmedabad. Book 24/7 outstation cabs, one-way taxi rentals, and airport transfers across Gujarat, Maharashtra & Rajasthan.",
    images: ["/images/about-hero-new.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "IN-GJ",
    "geo.placename": "Surat, Ahmedabad",
    "geo.position": "21.2035;72.8533",
    "ICBM": "21.2035, 72.8533",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                window.addEventListener('unhandledrejection', function(event) {
                  if (event.reason && (
                    (event.reason.stack && event.reason.stack.includes('chrome-extension:')) ||
                    (event.reason.message && event.reason.message.includes('M_ID'))
                  )) {
                    event.preventDefault();
                  }
                });
              }
            `,
          }}
        />
      </head>
      <body
        className="font-sans antialiased bg-white text-slate-900 flex min-h-screen flex-col"
      >
        {children}
      </body>
    </html>
  );
}
