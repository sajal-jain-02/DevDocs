import { useNavigate } from 'react-router-dom'

const NoteCard = ({id, title, description, tags}) => {
  const navigate = useNavigate()

  const handleCardClick = () => {
    navigate(`/notes/${id}`)
  }

  return (
    <div className='flex flex-col place-content-around border-2 border-gray-800 gap-5 rounded-lg p-4 bg-gray-900 cursor-pointer' onClick={handleCardClick}>
      <div>
        <h2 className='text-2xl font-bold'>{title}</h2>
      </div>
      <div>
        <p>{description}</p>
      </div>
      <div >
        <p>
          {
            tags.map((tag, index) => (
              <span key={index} className='px-2 py-1 bg-gray-700 text-gray-300 rounded-lg mr-2 mb-2 inline-block text-sm font-medium'>
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