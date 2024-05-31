const isProd = process.env.NODE_ENV === 'production'

export default defineNuxtConfig({
  target: 'static',
  router: {
    base: '/<repository-name>/'
  },

  runtimeConfig: {
    apiSecret: '123',
    public: {
      apiBase: '/api'
    }
  },

  app: {
    head: {
      __dangerouslyDisableSanitizers: ['script'],
      htmlAttrs: {
        lang: 'ru'
      },
      meta: [
        {
          charset: 'utf-8'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'Агентство недвижимости "Ключ"'
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        }
      ]
    }
  },

  pages: true,

  css: ['@/assets/scss/app.scss'],

  modules: ['@pinia/nuxt', 'nuxt-icons', 'vue-yandex-maps/nuxt'],

  pinia: {
    autoImports: ['defineStore', ['defineStore', 'definePiniaStore'], 'storeToRefs']
  },

  postcss: {
    plugins: {
      autoprefixer: {}
    }
  },

  yandexMaps: {
    apikey: 'c8bff1a1-301f-42a6-a85e-0543b6bf01d6'
  },

  imports: {
    dirs: ['store']
  },

  build: {
    analyze: false,
    extractCSS: true
  }
})
