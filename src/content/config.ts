import { defineCollection, z } from 'astro:content'

export const collections = {
  notes: defineCollection({
    schema: z.object({
      id: z.string(),
      tags: z.array(z.string()),
    }),
    type: 'content',
  }),
}
