import ReactMarkdown from 'react-markdown'
import type { Note } from '../content/types'

type NoteCardProps = {
  note: Note
}

export const NoteCard = ({ note }: NoteCardProps) => {
  const { id, tags, body } = note ?? {}

  if (!id) return

  return (
    <article className='m-auto w-100 max-w-full rounded-md bg-gray-100 p-2'>
      <h2>{id}</h2>
      <div className='flex flex-row gap-11'>
        {tags.map(tag => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <ReactMarkdown>{body}</ReactMarkdown>
    </article>
  )
}
