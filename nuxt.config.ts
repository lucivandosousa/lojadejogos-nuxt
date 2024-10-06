// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: '@/assets/css/tailwind.css',
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-br',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Loja de Jogos - NUXT.js',
      meta: [
        { name: 'description', content: 'Loja de Jogos - NUXT.js' },
      ],
    },
  }
})