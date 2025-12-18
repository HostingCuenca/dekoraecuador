import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'DEKORA - Profesionales en Pinturas y Revestimientos',
    short_name: 'DEKORA',
    description: 'Empresa especializada en servicios de pintura y revestimientos de alta calidad en Ecuador. Acreditados por PDCA.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#D4AF37',
    icons: [
      {
        src: '/icon.png',
        sizes: 'any',
        type: 'image/png',
      },
      {
        src: '/favicon.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
  }
}
