// uno.config.ts
import { defineConfig, presetIcons, presetUno, presetTypography } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      // Kullanılan ikon setlerini buraya ekleyebilirsiniz,
      // ancak Lucide ve Material Design genelde varsayılan olarak çalışır.
      // Yine de bazen açıkça belirtmek gerekebilir.
      collections: {
         // Sizin Lucide ikonlarınız için
         lucide: () => import('@iconify-json/lucide/icons.json').then(i => i.default), 
         // Sizin WhatsApp ikonunuz için (Material Design Ikonları)
         ic: () => import('@iconify-json/ic/icons.json').then(i => i.default), 
      }
    }),
    presetTypography(),
  ],
})