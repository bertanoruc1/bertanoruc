// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-02-12",
  devtools: { enabled: true },

  modules: [
    '@unocss/nuxt',  // UnoCSS artık modül olarak eklendi
    '@nuxt/icon',
    '@nuxt/content', // Content modülü burada
  ],

  css: [
    // UnoCSS 65.x sürümü için reset artık modül içinden import ediliyor
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
  },

  // Ek: UnoCSS 65.x için global config
  unocss: {
    // optionları buraya ekleyebilirsin, örnek:
    preflight: true, // tailwind reset benzeri
    theme: {
      colors: {
        primary: '#7e22ce'
      }
    }
  }
});