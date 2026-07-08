import { useState } from "react"
import { IoArrowBack } from "react-icons/io5"
import SnippetForm from "../../components/Snippet/SnippetForm.jsx"
import { saveSnippet } from "../../services/snippetService.js"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const CreateSnippets = () => {
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [tags, setTags] = useState([])
  const [tagInput, setTagInput] = useState('')
  const [language, setLanguage] = useState('')
  const [code, setCode] = useState('')
  const [error , setError] = useState({})

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
    navigate('/snippets')
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

    if (language.trim() === "") {
      newError.language = "Select the language";
    }

    if (code.trim() === "") {
      newError.code = "Code is required";
    }
    setError(newError)
    if(Object.keys(newError).length === 0){
      const newSnippet = {
        id: Date.now().toString(),
        title,
        description,
        tags,
        language,
        code
      }
      saveSnippet(newSnippet)
      toast.success('Snippet saved successfully')
      setTimeout(() => {
        navigate(`/snippets/${newSnippet.id}`)
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
        <h1 className='text-3xl font-bold mb-4'>Create Snippet</h1>
      </div>
      <div className='h-auto flex flex-col items-start justify-center p-4 rounded-lg'>
        <SnippetForm
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          tags={tags}
          tagInput={tagInput}
          setTagInput={setTagInput}
          language={language}
          setLanguage={setLanguage}
          code={code}
          setCode={setCode}
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

export default CreateSnippets