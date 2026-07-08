import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getSnippetById, updateSnippet } from '../../services/snippetService.js'
import SnippetForm from '../../components/Snippet/SnippetForm.jsx'
import toast from 'react-hot-toast'

const EditSnippet = () => {
  const { id } = useParams()
  const snippet = getSnippetById(id)
  const [title, setTitle] = useState(snippet.title)
  const [description, setDescription] = useState(snippet.description)
  const [tags, setTags] = useState(snippet.tags)
  const [language, setLanguage] = useState(snippet.language)
  const [code, setCode] = useState(snippet.code)
  const [error , setError] = useState({})
  const [tagInput, setTagInput] = useState('')
  const navigate = useNavigate()


  const handleCancel = () => {
    navigate(-1)
  }

  const handleAddTag = () => {
    if(tagInput.trim() === '') return;
    if(tags.includes(tagInput)) return;
    setTags([...tags, tagInput])
    setTagInput('')
  }

  const handleDeleteTag = (index) => {
    setTags(tags.filter((_, i) => i !== index))
  }

  if (!snippet) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-4xl font-bold text-red-500 mb-6">
          Snippet not found !!!
        </h1>

        <button
        onClick={() => navigate('/snippets')}
        className="flex items-center gap-2 px-4 py-2 mt-4 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors cursor-pointer"
        >
          ← Back to Snippets
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
    if(language.trim() === ''){
      newError.language = 'Language is required'
    }
    if(code.trim() === ''){
      newError.code = 'Code is required'
    }
    setError(newError)
    if(Object.keys(newError).length === 0){
      const updatedSnippet = {
        ...snippet,
        title,
        description,
        tags,
        language,
        code
      }
      updateSnippet(updatedSnippet)
      toast.success('Snippet updated successfully')
      setTimeout(() => {
        navigate(`/snippets/${id}`)
      }, 2000)
    }
  }
  return (
    <div>
      <div>
        <h1 className='text-3xl font-bold mb-4'>Edit Snippet</h1>
      </div>

      <div className='h-auto flex flex-col items-start justify-center p-4 rounded-lg'>
        <SnippetForm
         title={title}
         setTitle={setTitle}
         description={description}
         setDescription={setDescription}
         tags={tags}
         language={language}
         setLanguage={setLanguage}
         code={code}
         setCode={setCode}
         tagInput={tagInput}
         setTagInput={setTagInput}
         handleAddTag={handleAddTag}
         handleDeleteTag={handleDeleteTag}
         error={error}
         handleCancel={handleCancel}
         handleSubmit={handleSubmit}
        />
      </div>
    </div>
  )
}

export default EditSnippet