import { useState } from 'react'
import NoteCard from "../../components/Notes/NoteCard.jsx"
import NotesHeader from '../../components/Notes/NotesHeader.jsx'
import { getAllNotes, deleteNote } from '../../services/noteService.js'


const Notes = () => {
  const [notes, setNotes] = useState(getAllNotes())
  const [searchTerm, setSearchTerm] = useState('')

  const filteredNotes = notes.filter(note => 
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <>
    <NotesHeader
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}  
    /> 
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5'>
      {
        filteredNotes.map((note) => (
          <NoteCard 
            key={note.id} 
            id={note.id} 
            description={note.description}
            title={note.title} 
            tags={note.tags} 
            searchTerm={searchTerm}
          />
        ))
      }
      </div>
    </>
  )
}

export default Notes