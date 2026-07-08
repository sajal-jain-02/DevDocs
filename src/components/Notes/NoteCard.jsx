import { useNavigate } from 'react-router-dom'

const NoteCard = ({id, title, description, tags, searchTerm}) => {
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
      <div className='line-clamp-2'>
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
      </div>
    </div>
  )
}

export default NoteCard