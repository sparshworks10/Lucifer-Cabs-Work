import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: 'https://lucifercabs.antideploy.com/sitemap.xml',
    host: 'https://lucifercabs.antideploy.com',
  }
}
