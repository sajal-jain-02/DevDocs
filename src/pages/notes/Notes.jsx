import { useState } from 'react'
import NoteCard from "../../components/NoteCard.jsx"
import NotesHeader from '../../components/NotesHeader.jsx'
import { getAllNotes, deleteNote } from '../../services/noteService.js'


const Notes = () => {
  const [notes, setNotes] = useState(getAllNotes())
  const handleDelete = (id) => {
    deleteNote(id)
    setNotes(notes.filter(note => note.id !== id))
  }

  return (
    <>
    <NotesHeader /> 
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5'>
      {
        notes.map((note) => (
          <NoteCard 
            key={note.id} 
            id={note.id} 
            description={note.description}
            title={note.title} 
            tags={note.tags} 
            onDelete={handleDelete}
          />
        ))
      }
      </div>
    </>
  )
}

export default Notes