import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kuldeep Sharma',
    short_name: 'Kuldeep Sharma',
    description: 'Kuldeep Sharma',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/assets/seo/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}