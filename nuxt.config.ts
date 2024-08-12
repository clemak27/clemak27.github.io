// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@pinia/nuxt',
    // ["@nuxtjs/eslint-module", { lintOnStart: false }],
    '@nuxtjs/tailwindcss',
  ],

  app: {
    head: {
      title: 'clemak27',
      // link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  compatibilityDate: '2024-08-12',
})