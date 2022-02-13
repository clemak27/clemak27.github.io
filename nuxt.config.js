import pkg from './package'

const { CI_PAGES_URL } = process.env
const base = CI_PAGES_URL && new URL(CI_PAGES_URL).pathname
const ESLintPlugin = require('eslint-webpack-plugin')

export default {
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  target: 'static',

  /*
  ** Customize the progress-bar color
  */
  loading: false,

  /*
  ** Customize the generated output folder
  */
  generate: {
    dir: 'public'
  },

  /*
  ** Customize the base url
  */
  router: {
    base
  },

  /*
  ** Global CSS
  */
  css: [
    // '@/assets/scss/custom.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Auto-import components
  */
  components: true,

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['@nuxtjs/vuetify', {theme: { dark: true }}],

    '@nuxtjs/axios',
    // 'bootstrap-vue/nuxt'
  ],

  /*
  ** Use custom bootstrap classes
  */
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false
  },

  /*
  ** Use custom scss
  */
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.plugins.push(
          new ESLintPlugin()
        )
      }
    }
  }
}
