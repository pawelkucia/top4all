export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/image'
  ],
  image: { dir: 'public' },

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
      script: [
        {
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-P6TFC4R');`,
          tagPosition: 'head'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/png-icon', href: '/favicon.png' },
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