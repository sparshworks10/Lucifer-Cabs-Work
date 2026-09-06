export const DEFAULT_PHONE = "917069300605"

export const DEFAULT_WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi, I'm looking for a cab service with Lucifer Cabs. Can you please help me with quotes and availability?"
)

export const DEFAULT_WHATSAPP_URL = `https://wa.me/${DEFAULT_PHONE}?text=${DEFAULT_WHATSAPP_MESSAGE}`

export interface WhatsAppQuoteData {
  name?: string
  tripType: string
  pickup: string
  drop?: string
  pickupLat?: string
  pickupLng?: string
  dropLat?: string
  dropLng?: string
  pickupDate?: string
  pickupTime?: string
  dropDate?: string
  returnTime?: string
  localPackage?: string
  journeyDays?: string
  airportTransferType?: string
  airportName?: string
  adults?: string
  children?: string
  luggage?: string
  vehicle?: string
  passengers?: string
}

export const createGoogleMapsUrl = (location: string, lat?: string, lng?: string) => {
  if (lat && lng) {
    return `https://maps.google.com/?q=${lat},${lng}`
  }
  if (!location) return ""
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`
}

export const generateWhatsAppQuoteUrl = (data: WhatsAppQuoteData) => {
  const phone = DEFAULT_PHONE
  const nameStr = data.name ? data.name.trim() : ""

  let message = `Hi Lucifer Cabs! 🚕\n\n`
  if (nameStr) {
    message += `My name is *${nameStr}*. `
  }
  message += `I would like to request a quotation for a *${data.tripType}* cab:\n\n`

  if (nameStr) {
    message += `👤 *Name:* ${nameStr}\n`
  }

  if (data.tripType === "Airport") {
    if (data.airportName) message += `🛫 *Airport Name:* ${data.airportName}\n`
    if (data.pickup) {
      message += `📍 *Pickup Address:* ${data.pickup}\n`
      message += `🗺️ *Pickup Map:* ${createGoogleMapsUrl(data.pickup, data.pickupLat, data.pickupLng)}\n`
    }
    if (data.drop) {
      message += `🏁 *Drop Address:* ${data.drop}\n`
      message += `🗺️ *Drop Map:* ${createGoogleMapsUrl(data.drop, data.dropLat, data.dropLng)}\n`
    }
  } else {
    if (data.pickup) {
      message += `📍 *Pickup Location:* ${data.pickup}\n`
      message += `🗺️ *Pickup Map:* ${createGoogleMapsUrl(data.pickup, data.pickupLat, data.pickupLng)}\n`
    }
    if (data.tripType !== "Local Packages" && data.drop) {
      message += `🏁 *Drop Location:* ${data.drop}\n`
      message += `🗺️ *Drop Map:* ${createGoogleMapsUrl(data.drop, data.dropLat, data.dropLng)}\n`
    }
  }

  if (data.localPackage) {
    message += `⏱️ *Package:* ${data.localPackage}\n`
  }

  if (data.pickupDate) message += `📅 *Pickup Date:* ${data.pickupDate}\n`
  if (data.pickupTime) message += `⏰ *Pickup Time:* ${data.pickupTime}\n`

  if (data.tripType === "Round Trip") {
    if (data.dropDate) message += `🗓️ *Return Date:* ${data.dropDate}\n`
    if (data.returnTime) message += `⏰ *Return Time:* ${data.returnTime}\n`
  }

  if (data.vehicle) {
    message += `🚘 *Selected Vehicle:* ${data.vehicle}\n`
  }

  const adultsNum = data.adults || "1"
  const childNum = data.children || "0"
  const luggageNum = data.luggage || "0"
  message += `👥 *Adults:* ${adultsNum} | 👧 *Children:* ${childNum}\n`
  message += `🧳 *Luggage:* ${luggageNum} Bags\n`

  message += `\nPlease share available vehicle options and the best price quote. Thank you!`

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

export const getServiceWhatsAppUrl = (serviceTitle: string) => {
  const message = `Hi Lucifer Cabs! 🚕\n\nI want to book a *${serviceTitle}*. Please share available cabs, rates, and booking options with me.`
  return `https://wa.me/${DEFAULT_PHONE}?text=${encodeURIComponent(message)}`
}

export const getRouteWhatsAppUrl = (from: string, to: string) => {
  const message = `Hi Lucifer Cabs! 🚕\n\nI want to book a cab from *${from}* to *${to}*. Please share availability and best price quotes.`
  return `https://wa.me/${DEFAULT_PHONE}?text=${encodeURIComponent(message)}`
}

export const getFleetWhatsAppUrl = (vehicleName: string) => {
  const message = `Hi Lucifer Cabs! 🚕\n\nI am interested in hiring a *${vehicleName}*. Please share availability and rental quotes.`
  return `https://wa.me/${DEFAULT_PHONE}?text=${encodeURIComponent(message)}`
}

export const getPackageWhatsAppUrl = (packageTitle: string, description: string) => {
  const message = `Hi Lucifer Cabs! 🚕\n\nI am interested in the *${packageTitle}* package (${description}). Please share package details and best custom quote.`
  return `https://wa.me/${DEFAULT_PHONE}?text=${encodeURIComponent(message)}`
}

