// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css',
          crossorigin: 'anonymous',
          referrerpolicy: 'no-referrer'
        }
      ]
    },
  },
  routeRules: {
    
  },
  modules: [
    '@pinia/nuxt'
  ],
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL || 'http://localhost:8000'
    }
  },
  vite: {
    css: {
     preprocessorOptions: {
      scss: {
       additionalData: `
            @use "@/assets/scss/_variables.scss" as *;
            `,
      },
     },
    }
  },
  css: [
    'bootstrap/dist/css/bootstrap.css'
  ],
  devtools: { enabled: true }
})
