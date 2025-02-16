import type { MetaObject } from '@nuxt/schema'

export function useMetaTags(config: {
  title: string
  description: string
  keywords: string
  image: string
}) {
  const route = useRoute()
  const baseUrl = 'https://top4all.pl' // Replace with your actual domain

  const meta: MetaObject = {
    title: `${config.title} | TOP4ALL`,
    meta: [
      { name: 'description', content: config.description },
      { name: 'keywords', content: config.keywords },
      
      // Open Graph
      { property: 'og:title', content: config.title },
      { property: 'og:description', content: config.description },
      { property: 'og:image', content: `${baseUrl}${config.image}` },
      { property: 'og:url', content: `${baseUrl}${route.path}` },
      { property: 'og:type', content: 'website' },
      
      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: config.title },
      { name: 'twitter:description', content: config.description },
      { name: 'twitter:image', content: `${baseUrl}${config.image}` }
    ]
  }

  return meta
}