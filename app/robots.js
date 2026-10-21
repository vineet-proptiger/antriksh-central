import { SITE_URL } from '../lib/config'

const BASE_URL = SITE_URL || 'https://antriksh-central-avenue.com'

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
