import { useParams, useNavigate } from 'react-router-dom'
import { deleteSnippet, getSnippetById } from '../../services/snippetService.js'
import { PiPushPinFill } from "react-icons/pi";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { toast } from 'react-hot-toast';
import { IoCopyOutline } from "react-icons/io5";

const SnippetDetails = () => {
  const { id } = useParams()
  const snippet = getSnippetById(id)
  const navigate = useNavigate()

  const handleEdit = () => {
    navigate(`/snippets/edit/${id}`)
  }

  const handleDelete = () => {
    deleteSnippet(id)
    navigate('/snippets')
  }

  const handleCopy = async () => {
    try{
      await navigator.clipboard.writeText(snippet.code)
      toast.success('Code copied to clipboard!')
    } catch (error) {
      toast.error('Failed to copy code')
    }
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
  return (
  <>
    <div className="mb-6 pt-4 flex justify-between ">
      <button
        onClick={() => navigate('/snippets')}
        className="text-gray-400 hover:text-white transition-all duration-200 cursor-pointer"
      >
        ← Back to Snippets
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
        {snippet.title}
      </h1>

      <div className="border-gray-800 mb-4">
        <p className="text-gray-400 text-lg font-medium leading-relaxed">
          {snippet.description}
        </p>
      </div>


      <div className="flex flex-wrap gap-2 mb-8 border-b-2 border-gray-700 pb-6">
        {snippet.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-purple-900/30 border border-purple-700 text-purple-300 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className='flex items-center gap-2'>
        <span className="inline-block px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm font-semibold mb-6">
          {snippet.language}
        </span>
      </div>

      <div className="mt-8">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-semibold">Code</h2>

          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <IoCopyOutline />
            Copy
          </button>
        </div>

        <SyntaxHighlighter
          language={snippet.language}
          style={atomDark}
          showLineNumbers
          customStyle={{
            borderRadius: "12px",
            padding: "20px",
            fontSize: "14px",
            margin: 0,
          }}
        >
          {snippet.code}
        </SyntaxHighlighter>
      </div>
    </div>
  </>
  )}

export default SnippetDetails