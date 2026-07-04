import { useNavigate } from 'react-router-dom'
import { RiDeleteBin7Fill } from 'react-icons/ri'

const NoteCard = ({id, title, description, tags, onDelete, searchTerm}) => {
  const navigate = useNavigate()

  const handleCardClick = () => {
    navigate(`/notes/${id}`)
  }

  const highlight = (text, searchTerm) => {
    if (!searchTerm) return text
    const regex = new RegExp(`(${searchTerm})`, 'gi')
    return text.split(regex).map((part, index) => 
      regex.test(part) ? (
        <span key={index} className="bg-purple-600/30 text-purple-300 px-1 rounded">{part}</span>
      ) : (
        part
      )
    )
  }

  return (
    <div className='flex flex-col place-content-around border-2 border-gray-800 gap-5 rounded-lg p-4 bg-gray-900 cursor-pointer' onClick={handleCardClick}>
      <div>
        <h2 className='text-2xl font-bold'>{highlight(title, searchTerm)}</h2>
      </div>
      <div>
        <p>{highlight(description, searchTerm)}</p>
      </div>
      <div className='flex flex-wrap justify-between items-center'>
        <p>
          {
            tags.map((tag, index) => (
              <span key={index} className={`px-2 py-1 text-gray-300 rounded-lg mr-2 mb-2 inline-block text-sm font-medium
                ${
                  searchTerm !== "" && 
                  tag.toLowerCase().includes(searchTerm.toLowerCase()) 
                  ? "bg-purple-600 text-white"
                  : "bg-gray-700 text-gray-300"
                }`}>
                {tag}
              </span>
            ))
          }
        </p>
        <button
          className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-500/10 transition-all duration-200 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation()
            onDelete(id)
          }}
        >
          <RiDeleteBin7Fill className="text-lg" />
        </button>
      </div>
    </div>
  )
}

export default NoteCard