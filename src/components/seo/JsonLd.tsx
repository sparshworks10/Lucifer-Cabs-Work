export default function JsonLd() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "@id": "https://lucifercabs.antideploy.com/#taxiservice",
    "name": "Lucifer Cabs",
    "alternateName": [
      "Lucifer Cabs Service",
      "Lucifer Service in Surat",
      "Lucifer Cab Rental Surat",
      "Lucifer Cabs Outstation Taxi"
    ],
    "image": "https://lucifercabs.antideploy.com/images/about-hero-new.jpg",
    "url": "https://lucifercabs.antideploy.com",
    "telephone": "+917069300605",
    "email": "lucifercab7@gmail.com",
    "priceRange": "₹₹",
    "brand": {
      "@type": "Brand",
      "name": "Lucifer Cabs",
      "logo": "https://lucifercabs.antideploy.com/images/about-hero-new.jpg"
    },
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
      { "@type": "City", "name": "Surat" },
      { "@type": "City", "name": "Ahmedabad" },
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
      "name": "Lucifer Cabs Service Catalog",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lucifer Cabs Surat - One Way Outstation Taxi",
            "description": "Affordable one way cab rentals between Surat, Ahmedabad, Mumbai, Vadodara, and Udaipur."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lucifer Cabs Innova Crysta & SUV Rental",
            "description": "Premium 7-seater Innova Crysta and Ertiga SUV cab hiring for luxury family travel in Surat."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lucifer Cabs 24/7 Airport Transfer",
            "description": "Punctual airport taxis for Surat Airport (STV), Ahmedabad Airport (AMD), and Mumbai Airport (BOM)."
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
        "name": "What is Lucifer Cabs service contact number in Surat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can contact Lucifer Cabs service 24/7 at +91 7069300605 or via WhatsApp for instant outstation cab quotes and airport taxi bookings."
        }
      },
      {
        "@type": "Question",
        "name": "How do I book Lucifer Cabs service in Surat & Ahmedabad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Booking Lucifer Cabs service in Surat is simple. Call +91 7069300605 or submit your pickup, drop, date, and vehicle choice on https://lucifercabs.antideploy.com for an instant transparent quote."
        }
      },
      {
        "@type": "Question",
        "name": "What are the per km rates for Innova Crysta with Lucifer Cabs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Lucifer Cabs offers Toyota Innova Crysta starting at ₹18/km, Ertiga SUVs at ₹14/km, and Dzire Sedans at ₹11/km with zero hidden charges."
        }
      },
      {
        "@type": "Question",
        "name": "Does Lucifer Cabs offer One-Way outstation rentals from Surat to Mumbai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Lucifer Cabs provides guaranteed one-way outstation cabs from Surat to Mumbai, Ahmedabad, Vadodara, Udaipur, and Rajkot so you only pay for one-sided travel."
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
