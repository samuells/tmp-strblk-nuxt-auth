
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/auth'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  auth: {
    strategies: {
      storyblok: {
        _scheme: 'oauth2',
        authorization_endpoint: 'https://app-beta.storyblok.com/oauth/authorize',
        userinfo_endpoint: false,
        scope: ['read_content'],
        access_type: 'offline',
        access_token_endpoint: 'https://app-beta.storyblok.com/oauth/token',
        response_type: 'code',
        token_type: 'Bearer',
        redirect_uri: 'http://localhost:3000/',
        client_id: 'LyYe+IRf/si+dNRRS5/hGQ==',
        client_secret: 'l1MF7ww6WL8+/nQjoxm4fUfhZApZ6QzbRMq5P3DMN8X/q4d7QryzSNSHdG+UZcSxVpAcvGm6ZxYEHnMUPtoYQQ==',
        token_key: 'access_token',
        state: 'UNIQUE_AND_NON_GUESSABLE',
        code_chalenge_method: 'S256'
      }
    }
  },
  // router: {
  //   middleware: ['auth']
  // },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
