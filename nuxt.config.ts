export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],

  css: [
    '~/assets/css/main.css',
    'swiper/css',
    'swiper/css/pagination'
  ],

  ssr: true,

  app: {
    head: {
      title: 'TOP4ALL - Digital Marketing Agency',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
        { 
          rel: 'preconnect', 
          href: 'https://cdnjs.cloudflare.com'
        },
        { 
          rel: 'stylesheet', 
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
        }
      ]
    }
  },

  compatibilityDate: '2025-02-21'
})