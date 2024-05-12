const Dotenv = require('dotenv-webpack');

export default defineNuxtConfig({
  devtools: { enabled: true },
  buildModules: ['@nuxtjs/tailwindcss'],
  modules: ['nuxt-swiper', '@pinia/nuxt'],
  swiper: {
    prefix: 'Swiper',
    styleLang: 'css',
    modules: ['navigation', 'pagination'],
  },
  pages: true,
  css: [
    '@/assets/css/tailwind.css',
    'swiper/swiper-bundle.css'
  ],
  build: {
    transpile: ['swiper'],
    postcss: {
      preset: {
        autoprefixer: {}
      }
    }
  },
  components: true,
  runtimeConfig: {
    apiSecret: process.env.NUXT_API_SECRET,
  },
});
