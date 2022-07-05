export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'ja',
    },
    title: 'NuxtSandbox',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxtプロジェクトのサンプル広場' },
      { hid: 'keywords', name: 'keywords', content: ',,,' },
      { hid: 'og:title', property: 'og:title', content: 'NuxtSandbox' },
      { hid: 'og:description', property: 'og:description', content: 'Nuxtプロジェクトのサンプル広場' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'RerykA Builder' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:image', property: 'og:image', content: 'https://hasegawatakatune.github.io/NuxtSandbox/reryka_logo_plane.png' },
      { hid: 'og:url', property: 'og:url', content: 'https://hasegawatakatune.github.io/NuxtSandbox/' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://hasegawatakatune.github.io/NuxtSandbox/reryka_logo_plane.png' },
      { rel: 'stylesheet', href: 'https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/components/Style/css/style.scss', '@/assets/css/main.css', '@/assets/scss/style.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/tailwindcss'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  router: {
    base: '/NuxtSandbox/',
  },

  generate: {
    dir: 'docs',
  },
};
