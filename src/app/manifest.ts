import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Lucifer Cabs - Outstation & Airport Taxi Service',
    short_name: 'Lucifer Cabs',
    description: 'Book 24/7 outstation cabs, local rentals, and airport taxis in Gujarat, Maharashtra & Rajasthan.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFFFFF',
    theme_color: '#FFB800',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
