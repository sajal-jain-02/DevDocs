import { useState } from 'react'
import { getAllSnippets , deleteSnippet } from '../../services/snippetService.js'
import SnippetHeader from '../../components/Snippet/SnippetHeader.jsx'
import SnippetCard from '../../components/Snippet/SnippetCard.jsx'

const Snippets = () => {
  const [snippets, setSnippets] = useState(getAllSnippets())
  const [searchTerm, setSearchTerm] = useState('')

  const handleDelete = (id) => {
    deleteSnippet(id)
    setSnippets(snippets.filter(snippet => snippet.id !== id))
  }

  const filteredSnippets = snippets.filter((snippet) =>
    snippet.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    snippet.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    snippet.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()) || 
    snippet.language.toLowerCase().includes(searchTerm.toLowerCase()))
  )
  return (
    <>
      <SnippetHeader
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5'>
        {
          filteredSnippets.map((snippet) => (
            <SnippetCard 
              key={snippet.id}
              id={snippet.id}
              title={snippet.title}
              description={snippet.description}
              language={snippet.language}
              tags={snippet.tags}
              onDelete={handleDelete}
              searchTerm={searchTerm}
            />
          ))
        }
      </div>
    </>
  )
}

export default Snippets