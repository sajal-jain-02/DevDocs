import { useState } from "react"
import { IoArrowBack } from "react-icons/io5"
import { useNavigate } from "react-router-dom"
import { saveNote } from "../../services/noteService"
import NotesForm from "../../components/NotesForm"
import toast from "react-hot-toast"
import { Toaster } from "react-hot-toast"

const CreateNotes = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [tags, setTags] = useState([])
  const [tagInput, setTagInput] = useState('')
  const [content, setContent] = useState('')
  const [error , setError] = useState({})
  const [success, setSuccess] = useState(false)

  const navigate = useNavigate()

  const handleAddTag = () => {
    if(tagInput.trim() === '') return;
    if(tags.includes(tagInput)) return;
    setTags([...tags, tagInput])
    setTagInput('')
  }

  const handleDeleteTag = (index) => {
    setTags(tags.filter((_, i) => i !== index))
  }

  const handleCancel = () => {
    navigate('/notes')
  }

  const handleBack = () => {
    navigate(-1)
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
      const newNote = {
        id: Date.now().toString(),
        title,
        description,
        tags,
        content
      }
      saveNote(newNote)
      toast.success('Note saved successfully')
      setTimeout(() => {
        navigate(`/notes/${newNote.id}`)
      }, 2000)
    }
  }

  return (
    <div>
      <div className='pt-6 mb-8 border-b border-white'>
        <button
         onClick={handleBack}
         className='flex items-center gap-2 text-xl font-bold cursor-pointer'>
         < IoArrowBack />
         Back
        </button>
      </div>
      <div>
        <h1 className='text-3xl font-bold mb-4'>Create Notes</h1>
      </div>


      <div className='h-auto flex flex-col items-start justify-center p-4 rounded-lg'>
        <NotesForm 
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        tags={tags}
        setTags={setTags}
        tagInput={tagInput}
        setTagInput={setTagInput}
        content={content}
        setContent={setContent}
        error={error}
        handleSubmit={handleSubmit}
        handleAddTag={handleAddTag}
        handleDeleteTag={handleDeleteTag}
        handleCancel={handleCancel}
        />
      </div>
    </div>
  )
}

export default CreateNotes