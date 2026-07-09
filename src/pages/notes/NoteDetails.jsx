import { useParams, useNavigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { getAllNotes, deleteNote } from '../../services/noteService.js'
import { PiPushPinFill } from "react-icons/pi";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Fill } from "react-icons/ri";

const NoteDetails = () => {
  const { id } = useParams()
  const notes =getAllNotes()
  const note = notes.find(note => note.id === id)
  const navigate = useNavigate()

  const handleEdit = () => {
    navigate(`/notes/edit/${id}`)
  }

  const handleDelete = () => {
    deleteNote(id)
    navigate('/notes')
  }

  const handleBack = () => {
    navigate(window.history.back())
  }
  if (!note) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-4xl font-bold text-red-500 mb-6">
          Note not found !!!
        </h1>

        <button
          onClick={handleBack}
          className="flex items-center gap-2 px-4 py-2 mt-4 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors cursor-pointer"
        >
          ← Back to Notes
        </button>
      </div>
    )
  }
  return (
  <>

    <div className="mb-6 pt-4 flex justify-between ">
      <button
        onClick={handleBack}
        className="text-gray-400 hover:text-white transition-all duration-200 cursor-pointer"
      >
        ← Back to Notes
      </button>
      <div className='flex gap-3 mx-12 '>
        <button
         className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-semibold transition-all duration-200 hover:scale-105 active:scale-95">
          <PiPushPinFill />
          Pin
        </button>
        <button
         className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
         onClick={handleEdit}>
          <FiEdit />
          Edit
        </button>
        <button 
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
        onClick={handleDelete}>
          <RiDeleteBin6Fill />
          Delete
        </button>
      </div>
    </div>

    <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 mx-12">
      
      <h1 className="text-3xl font-bold text-white mb-4">
        {note.title}
      </h1>

      <div className="border-gray-800 mb-4">
        <p className="text-gray-400 text-lg font-medium leading-relaxed">{note.description}</p>
      </div>


      <div className="flex flex-wrap gap-2 mb-8 border-b-2 border-gray-700 pb-6">
        {note.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-purple-900/30 border border-purple-700 text-purple-300 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="prose prose-invert max-w-none 
        prose-headings:text-white
        prose-p:text-gray-300
        prose-strong:text-white
        prose-code:text-purple-300
        prose-pre:bg-gray-950
        prose-pre:border
        prose-pre:border-gray-800
        prose-blockquote:border-purple-500
        prose-blockquote:text-gray-300
        prose-blockquote:bg-purple-950/20
        prose-blockquote:px-4
        prose-blockquote:py-2
        prose-blockquote:rounded-r-lg
        prose-blockquote:not-italic">
        
        <ReactMarkdown>
          {note.content}
        </ReactMarkdown>

      </div>
    </div>
  </>
  )}

export default NoteDetails