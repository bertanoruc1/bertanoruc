// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-02-12",
  devtools: { enabled: true },

  modules: [
    '@unocss/nuxt',
    '@nuxt/icon',
    '@nuxt/content',
  ],

  css: [
    '@unocss/reset/tailwind.css',
    // 'assets/css/animations.css' <-- animasyon dosyası eklenebilir
  ],

  plugins: [
    '~/plugins/email.js'
  ],

  app: {
    head: {
      link: [
        { rel: "icon", type: "image/x-icon", href: "/b.png" },
        { rel: "icon", type: "image/png", href: "/b.png" }
      ]
    }
  },

  runtimeConfig: {
    gmailUser: process.env.GMAIL_USER,
    gmailPass: process.env.GMAIL_PASS,
  }
});