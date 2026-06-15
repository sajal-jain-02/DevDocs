import { useNavigate } from 'react-router-dom'

const NotesHeader = () => {

  const navigate = useNavigate()
  const handleAddNote = () => {
    navigate('/notes/new')
  }
  
  return (
    <div className='flex items-center justify-between mb-6 py-4 px-4  border-b-2 border-gray-800'>
        <div className='text-2xl font-bold'>Notes</div>
        <div className='flex gap-3 items-center'>
            <input type="text" placeholder="Search notes..." className='w-72 h-8 px-1 border-none outline-none bg-white text-gray-800 border-gray-300 rounded-sm'/>
            <button onClick={handleAddNote} className='px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-900 cursor-pointer transition duration-200 ease-in-out' >
                Add Note
            </button>
        </div>
    </div>
  )
}

export default NotesHeader