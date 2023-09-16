export default {
  server: {
      port: 3000,
      host: '0.0.0.0'
    },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'COPCEF - %s',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'keywords', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/fav.jpg' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/custom.scss',
    '@/assets/scss/bulmachanges.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/gtag',
    { src: '@/plugins/v-select', ssr: false},
    { src: '@/plugins/vcountry', ssr: false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/image',
    // '@nuxtjs/google-analytics'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    '@nuxt/image',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://localhost:4000/rest/',
  },
  image: {
    cloudinary: {
      baseURL: "",
    },
  },
  auth: {
    redirect: {
      login: '/welcome',
      // callback: '/user/login',
      home: '/'
    },
    strategies: {
      local: {
        scheme: 'refresh',
        token: {
          property: 'token',
          required: true,
          name: 'Authorization',
          type: 'Bearer',
          maxAge: 60 * 60 
        },
        refreshToken: {
          property: 'refresh_token',
          data: 'refresh_token',
          maxAge: 60 * 60 * 24
        },
        user: {
          property: 'user',
          // autoFetch: true
        },
        endpoints: {
          login: { url: '/user/login', method: 'post' },
          refresh: { url: '/user/refresh', method: 'post' },
          logout: { url: '/user/logout', method: 'post' },
          user: { url: '/user/profile', method: 'get' },
          files: { url: '/user/files', method: 'get' },
          payments: { url: '/user/payments', method: 'get' },
        }
      }
    }

  },
  // Google Analytics 
  googleAnalytics: {
    id: 'G-'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // extend(config, ctx) {
    //   config.output.globalObject = 'this'
    //   config.module.rules.push(
    //     {
    //       test: /\.pdf$/,
    //       loader: 'url-loader'
    //     }
    //   )
    // },
    // optimization: {
    //   splitChunks: {
    //     maxSize: 300000
    //   }
    // }
  }
}
