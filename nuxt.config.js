export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'server',
  router: {
    base: '/',
  },
  head: {
    title: 'Gapter & Franz Law firm',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Gapter & Franz Law Firm',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Alexander Pavlik | Your choice, my priority!',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: process.env.baseUrl + 'preview.png',
      },

      // twitter card
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Gapter & Franz Law Firm',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Alexander Pavlik | Your choice, my priority!',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: process.env.baseUrl + 'preview.png',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        type: 'image/x-icon',
        href: '/favicon/apple-touch-icon.png',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/reset.css', '~/assets/css/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', 'nuxt-i18n'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  publicRuntimeConfig: { baseURL: process.env.NUXT_BASE_URL },
  i18n: {
    locales: [
      { code: 'ua', iso: 'ua-UA', name: 'Ураїнська', file: 'ua.json' },
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' },
    ],
    defaultLocale: 'ua',
    strategy: 'prefix',
    lazy: true,
    langDir: 'locales/',
    vueI18n: {
      fallbackLocale: 'ua',
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: false,
      fallbackLocale: 'ua',
    },
  },
}
