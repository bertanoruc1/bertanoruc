// content.config.ts
import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      // Hata: 'content' türü beklenmiyor.
      // Düzeltme: Markdown içeriği (dosya tabanlı) için 'page' kullanın.
      type: 'page', 
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.string().optional()
      })
    })
  }
})