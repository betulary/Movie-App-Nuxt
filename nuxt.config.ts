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
});
