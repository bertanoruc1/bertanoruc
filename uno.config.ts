// uno.config.ts
import { defineConfig, presetIcons, presetUno, presetTypography } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      collections: {
        lucide: () => import('@iconify-json/lucide/icons.json').then(i => i.default),
        mdi: () => import('@iconify-json/mdi/icons.json').then(i => i.default),
        ic: () => import('@iconify-json/ic/icons.json').then(i => i.default),
      }
    }),
    presetTypography(),
  ],
})