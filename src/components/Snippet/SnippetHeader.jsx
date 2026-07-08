import { useNavigate } from 'react-router-dom'
import { IoSearch , IoClose } from 'react-icons/io5'

const SnippetHeader = ({ searchTerm, setSearchTerm }) => {

  const navigate = useNavigate()

  const handleAddNote = () => {
    navigate('/snippets/new')
  }

  return (
    <div className='flex items-center justify-between mb-6 py-4 px-4 border-b border-gray-800'>

      <h1 className='text-3xl font-bold text-white'>
        Snippets
      </h1>

      <div className='flex items-center gap-4'>

        <div className="relative">
          <IoSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />

          <input
            type="text"
            placeholder="Search snippets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-80 h-11 pl-11 pr-11 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
          />

          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors cursor-pointer"
            >
              <IoClose size={18} />
            </button>
          )}
        </div>

        <button
          onClick={handleAddNote}
          className='h-11 px-5 bg-purple-600 rounded-xl font-medium text-white hover:bg-purple-700 active:scale-95 transition-all duration-200 cursor-pointer'
        >
          + Add Snippet
        </button>

      </div>
    </div>
  )
}

export default SnippetHeader