import { useNavigate } from "react-router-dom"
import { IoPricetag } from "react-icons/io5";


const TagsCard = ({ tag }) => {
    const navigate = useNavigate()
    const handleCardClick = () => {
        navigate(`/tags/${tag.name}`)
    }
  return (

    <div className='flex flex-col place-content-around border-2 border-gray-800 justify-between rounded-lg p-4 bg-gray-900  active:scale-95 cursor-pointer hover:border-purple-500/50 hover:-translate-y-1 hover:shadow-lg transition-all duration-200 '
        onClick={handleCardClick}>
        <div className="flex justify-between items-center gap-2 border-b border-gray-800 pb-4 ">
          <div className="flex items-center gap-2 whitespace-nowrap overflow-hidden text-ellipsis ">
            <IoPricetag className="text-purple-400 text-xl" />
            <h1 className="text-2xl font-bold text-white">{tag.name}</h1>
          </div>
          <p className="px-3 py-1 rounded-full bg-purple-500/15 text-purple-300 text-xs font-semibold border border-purple-500/30">
            {tag.count} {tag.count === 1 ? 'Use' : 'Uses'}
          </p>
        </div>
        <div className="flex justify-center items-center gap-2 pt-4">
          <p className="text-gray-400 text-sm font-semibold group-hover:text-purple-200 transition-colors duration-200">
            View notes & snippets <span>→</span>
          </p>
        </div>
    </div>
  )
}

export default TagsCard