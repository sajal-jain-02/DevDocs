import { useState } from "react"
import { getAllTags } from "../../services/tagsService.js"
import TagsCard from "../../components/Tags/TagsCard.jsx"


const Tags = () => {
  const [tags] = useState(getAllTags())
  return (
    <>
    <div className='flex items-center justify-between mb-6 py-4 px-4 border-b border-gray-800'>
      <h1 className="text-3xl font-bold text-white">Tags</h1>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-5">
      {tags.map((tag) => (
        <TagsCard 
          key={tag.name}
          tag={tag}
        />
      ))}
    </div>

    </>
  )
}

export default Tags