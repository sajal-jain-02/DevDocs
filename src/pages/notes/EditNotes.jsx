import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getNoteById, updateNote } from '../../services/noteService.js'
import NotesForm from '../../components/Notes/NotesForm.jsx'
import toast from 'react-hot-toast'

const EditNotes = () => {
  const { id } = useParams()
  const note = getNoteById(id)
  const [title, setTitle] = useState(note.title)
  const [description, setDescription] = useState(note.description)
  const [tags, setTags] = useState(note.tags)
  const [content, setContent] = useState(note.content)
  const [error , setError] = useState({})
  const navigate = useNavigate()


  const handleCancel = () => {
    navigate(-1)
  }

  if (!note) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-4xl font-bold text-red-500 mb-6">
          Note not found !!!
        </h1>

        <button
        onClick={() => navigate('/notes')}
        className="flex items-center gap-2 px-4 py-2 mt-4 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors cursor-pointer"
        >
          ← Back to Notes
        </button>
      </div>
      )
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newError ={}

    if(title.trim() === ''){
      newError.title = 'Title is required'
    }

    if(description.trim() === ''){
      newError.description = 'Description is required'
    }

    if(tags.length === 0){
      newError.tags = 'Tag is required'
    }
    setError(newError)
    if(Object.keys(newError).length === 0){
      const updatedNote = {
        id: note.id,
        title,
        description,
        tags,
        content
      }
      updateNote(updatedNote)
      toast.success('Note updated successfully')
      setTimeout(() => {
        navigate(`/notes/${note.id}`)
      }, 2000)
    }
  }
  return (
    <div>
      <div>
        <h1 className='text-3xl font-bold mb-4'>Edit Notes</h1>
      </div>


      <div className='h-auto flex flex-col items-start justify-center p-4 rounded-lg'>
        <NotesForm
         title={title}
         setTitle={setTitle}
         description={description}
         setDescription={setDescription}
         tags={tags}
         setTags={setTags}
         content={content}
         setContent={setContent}
         error={error}
         setError={setError}
         handleCancel={handleCancel}
         handleSubmit={handleSubmit}
        />
      </div>
    </div>
  )
}

export default EditNotes