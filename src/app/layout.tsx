import type { Metadata } from "next";
import "./globals.css";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://lucifercabs.com"),
  title: {
    default: "Lucifer Cabs | Best Outstation Taxi & Cab Rental Service Gujarat",
    template: "%s | Lucifer Cabs",
  },
  description:
    "Book 24/7 outstation cabs, one-way taxi rentals, and airport transfers across Ahmedabad, Surat, Vadodara, Mumbai, Udaipur, and Rajkot. Best per-km rates on Sedans, SUVs, Innova Crysta, and Urbania. Call 7069300605.",
  keywords: [
    "Lucifer Cabs",
    "Cab Service in Ahmedabad",
    "Outstation Taxi Ahmedabad",
    "Ahmedabad to Mumbai Cab",
    "Ahmedabad to Udaipur Taxi Service",
    "Surat Outstation Cab Rental",
    "Innova Crysta Rental Ahmedabad",
    "Airport Taxi Transfer Gujarat",
    "One Way Cab Booking Gujarat",
    "Tempo Traveller Hire Ahmedabad",
    "Force Urbania Cab Rental",
    "24/7 Taxi Booking Ahmedabad 7069300605"
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
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://lucifercabs.com",
    siteName: "Lucifer Cabs",
    title: "Lucifer Cabs | Best Outstation Taxi & Cab Rental Service Gujarat",
    description:
      "Book 24/7 outstation cabs, one-way taxi rentals, and airport transfers across Ahmedabad, Surat, Vadodara, Mumbai, Udaipur, and Rajkot. Best rates on Innova Crysta & SUVs.",
    images: [
      {
        url: "/images/about-hero-new.jpg",
        width: 1200,
        height: 630,
        alt: "Lucifer Cabs Outstation Taxi & Airport Transfers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucifer Cabs | Premium Outstation Taxi & Cab Booking",
    description:
      "Book 24/7 outstation cabs, one-way taxi rentals, and airport transfers across Gujarat, Maharashtra & Rajasthan.",
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
