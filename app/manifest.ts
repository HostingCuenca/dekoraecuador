import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'DEKORA - Profesionales en Pinturas y Revestimientos',
    short_name: 'DEKORA',
    description: 'Empresa especializada en servicios de pintura y revestimientos de alta calidad en Ecuador. Acreditados por PDCA.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0B4DA2',
    icons: [
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/favicon.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  }
}
