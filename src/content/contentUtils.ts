import { getCollection, type CollectionEntry } from 'astro:content'
import type { Note } from './types'

export const getNotes = async (): Promise<Note[]> => {
  const notes: CollectionEntry<'notes'>[] = (await getCollection('notes')) ?? []

  return (
    notes?.map(note => ({
      body: note.body,
      id: note.data.id,
      tags: note.data.tags,
    })) ?? []
  )
}
