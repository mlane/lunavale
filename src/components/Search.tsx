import { useState } from 'react'
import type { Note } from '../content/types'
import { NoteCard } from './NoteCard'

type SearchProps = {
  notes: Note[]
}

export function Search({ notes }: SearchProps) {
  const [value, setValue] = useState('')
  const filtered = value
    ? notes.filter(
        note =>
          note?.id?.toLowerCase()?.includes(value?.toLowerCase()) ||
          note?.tags?.some(tag =>
            tag?.toLowerCase()?.includes(value?.toLowerCase())
          ) ||
          note?.body?.toLowerCase()?.includes(value?.toLowerCase())
      )
    : []

  console.log('filterded', filtered, value)

  return (
    <div className='search'>
      <input
        type='text'
        placeholder='Search notes...'
        value={value}
        onChange={event => setValue(event.target.value)}
        className='mb-4 w-full rounded border px-3 py-2'
      />
      <div className='grid gap-4'>
        {filtered?.map(note => <NoteCard key={note.id} note={note} />)}
      </div>
    </div>
  )
}
