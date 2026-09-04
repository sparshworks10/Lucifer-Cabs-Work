export default function JsonLd() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "@id": "https://lucifercabs.com/#taxiservice",
    "name": "Lucifer Cabs",
    "alternateName": "Lucifer Outstation Cabs & Taxi Services",
    "image": "https://lucifercabs.com/images/about-hero-new.jpg",
    "url": "https://lucifercabs.com",
    "telephone": "+917069300605",
    "email": "lucifercab7@gmail.com",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "406, Creation Plaza 1, Sitanagar to Bombay Market Road",
      "addressLocality": "Surat",
      "addressRegion": "Gujarat",
      "postalCode": "395010",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.2035,
      "longitude": 72.8533
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "areaServed": [
      { "@type": "City", "name": "Ahmedabad" },
      { "@type": "City", "name": "Surat" },
      { "@type": "City", "name": "Vadodara" },
      { "@type": "City", "name": "Mumbai" },
      { "@type": "City", "name": "Udaipur" },
      { "@type": "City", "name": "Rajkot" },
      { "@type": "State", "name": "Gujarat" },
      { "@type": "State", "name": "Maharashtra" },
      { "@type": "State", "name": "Rajasthan" }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1250",
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Cab Rental Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "One Way Outstation Taxi Booking",
            "description": "Affordable one way cab rentals between Ahmedabad, Surat, Mumbai, Udaipur, and major cities."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Innova Crysta & SUV Car Rental",
            "description": "Premium 7-seater Innova Crysta and SUV cab hiring for family vacations & luxury travel."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "24/7 Airport Taxi Pick-Up & Drop",
            "description": "Punctual airport transfers for Ahmedabad Airport (AMD), Surat Airport (STV), and Mumbai Airport (BOM)."
          }
        }
      ]
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I book an outstation cab with Lucifer Cabs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can book directly by calling +91 7069300605 or messaging us on WhatsApp. Simply provide your pickup location, destination, date, and preferred vehicle type for an instant quote."
        }
      },
      {
        "@type": "Question",
        "name": "What is the per kilometer rate for Innova Crysta outstation taxi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Lucifer Cabs offers Toyota Innova Crysta starting at ₹18/km with transparent billing, experienced highway drivers, and dual-zone AC comfort."
        }
      },
      {
        "@type": "Question",
        "name": "Is One-Way cab booking available from Ahmedabad to Mumbai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer guaranteed one-way cab services from Ahmedabad to Mumbai, Surat, Vadodara, Udaipur, and Rajkot so you only pay for one-sided distance."
        }
      },
      {
        "@type": "Question",
        "name": "Are airport taxi pick-up services available 24/7?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Lucifer Cabs operates 24/7 airport transfer services with live flight tracking to guarantee zero wait times at Ahmedabad, Surat, and Mumbai airports."
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
