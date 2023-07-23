// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: [
    '~/plugins/firebase.client.ts'
  ],
    css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@pinia/nuxt',],
  pinia: {
    autoImports: [
      'defineStore', // import { defineStore } from 'pinia'
      'storeToRefs',
      ['defineStore', 'definePiniaStore',], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  }
})
