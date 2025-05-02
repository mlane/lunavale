import type { CollectionEntry } from 'astro:content'

export type Note = {
  body: string
  id: CollectionEntry<'notes'>['data']['id']
  tags: CollectionEntry<'notes'>['data']['tags']
}
