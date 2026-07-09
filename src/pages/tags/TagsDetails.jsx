import { getAllNotes } from "../../services/noteService.js"
import { getAllSnippets } from "../../services/snippetService.js"
import { useParams, useNavigate } from "react-router-dom"
import { IoPricetag } from "react-icons/io5";
import NoteCard from "../../components/Notes/NoteCard.jsx";
import SnippetCard from "../../components/Snippet/SnippetCard.jsx";


const TagsDetails = () => {
  const { name } = useParams()
  const navigate = useNavigate()
  const notes = getAllNotes()
  const snippets = getAllSnippets()
  const selectedTag = name.toLowerCase()
  const filteredNotes = notes.filter(note => note.tags.some(tag => tag.toLowerCase() === selectedTag))
  const filteredSnippets = snippets.filter(snippet => snippet.tags.some(tag => tag.toLowerCase() === selectedTag))

  const handleBack = () => {
    navigate("/tags")
  }
  
  return (
    <>
      <div className="flex items-center gap-2 mb-6 pt-4">
        <button className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer" onClick={handleBack}> ← Back to tags</button>
      </div>

      <div className="mb-8 pb-4 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <IoPricetag />
          <h1 className="text-2xl font-semibold text-purple-400">{selectedTag}</h1>
        </div>
        <div className="mt-2">
          <h1 className="text-sm text-gray-400">
            Found in: {filteredNotes.length} notes and {filteredSnippets.length} snippets
          </h1>
        </div>
      </div>
      <div className="space-y-4 pb-4 border-b border-gray-700 mb-8">
        <h1 className="text-2xl font-bold text-gray-300 ">Notes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" >
        {
          filteredNotes.map((note) => (
            <NoteCard 
            key={note.id} 
            id={note.id} 
            description={note.description}
            title={note.title} 
            tags={note.tags} 
            searchTerm={""}
          />
          ))
        }
        </div>
      </div>

      <div className="space-y-4 pb-4 border-b border-gray-700 mb-8">
        <h1 className="text-2xl font-bold text-gray-300 ">Snippets</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" >
        {
          filteredSnippets.map((snippet) => (
            <SnippetCard 
            key={snippet.id} 
            id={snippet.id} 
            description={snippet.description}
            title={snippet.title} 
            tags={snippet.tags} 
            searchTerm={""}
          />
          ))
        }
        </div>
      </div>
    </>
  )
}

export default TagsDetails