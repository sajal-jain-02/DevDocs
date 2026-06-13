import React from 'react'
import notes from '../../data/notes.jsx'
import NoteCard from "../../components/NoteCard.jsx"
import NotesHeader from '../../components/NotesHeader.jsx'


const Notes = () => {

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
          />
        ))
      }
      </div>
    </>
  )
}

export default Notes