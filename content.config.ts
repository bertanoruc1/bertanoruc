// content.config.ts
import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'data', // veya 'data' seçebilirsin
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.string().optional()
      })
    })
  }
})