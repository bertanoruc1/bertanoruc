// https://nuxt.com/docs/api/configuration/nuxt-config
import UnoCSS from '@unocss/nuxt'
import { presetIcons } from 'unocss/preset-icons'

export default defineNuxtConfig({
  modules: [
    UnoCSS,
    '@nuxt/content',
    'nuxt-icon'
  ],

  unocss: {
    presets: [
      presetIcons()
    ]
  },

  nitro: {
    prerender: {
      ignore: [
        '/__nuxt_content'  // Nuxt Content dosyalarını prerender etme
      ]
    }
  },

  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/css/main.css'  // Eğer varsa kendi global CSS dosyan
  ],

  app: {
    head: {
      link: [
        { rel: "icon", type: "image/x-icon", href: "/logo.png" },
        { rel: "icon", type: "image/png", href: "/logo.png" }
      ]
    }
  },

  runtimeConfig: {
    gmailUser: process.env.GMAIL_USER,
    gmailPass: process.env.GMAIL_PASS
  }
})