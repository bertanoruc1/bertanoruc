// Tip genişletmesi: nuxt.config.ts içinde `unocss` anahtarını kabul etmesini sağlar
import type { UserConfig as UnocssConfig } from 'unocss'

declare module '@nuxt/schema' {
  interface NuxtConfig {
    unocss?: UnocssConfig
  }
}
