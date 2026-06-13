import React from 'react'
import { useParams } from 'react-router-dom'
import notes from '../../data/notes.jsx'
import NotesHeader from '../../components/NotesHeader.jsx'
import ReactMarkdown from 'react-markdown'

const NoteDetails = () => {
  const { id } = useParams()
  const note = notes.find(note => note.id === id)
  
  return (
  <>
    <NotesHeader />

    <div className="mb-6 pt-4">
      <button
        onClick={() => window.history.back()}
        className="text-gray-400 hover:text-white transition-colors cursor-pointer"
      >
        ← Back to Notes
      </button>
    </div>

    <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
      
      <h1 className="text-4xl font-bold text-white mb-4">
        {note.title}
      </h1>

      <div className="flex flex-wrap gap-2 mb-8">
        {note.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-purple-900/30 border border-purple-700 text-purple-300 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="border-b border-gray-800 mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Description</h2>
        <p className="text-gray-400 text-lg font-medium">{note.description}</p>
      </div>

      <div className="prose prose-invert max-w-none
        prose-headings:text-white
        prose-p:text-gray-300
        prose-strong:text-white
        prose-code:text-purple-300
        prose-pre:bg-gray-950
        prose-pre:border
        prose-pre:border-gray-800
        prose-blockquote:border-purple-500
        prose-blockquote:text-gray-300
        prose-blockquote:bg-purple-950/20
        prose-blockquote:px-4
        prose-blockquote:py-2
        prose-blockquote:rounded-r-lg
        prose-blockquote:not-italic">
        
        <ReactMarkdown>
          {note.content}
        </ReactMarkdown>

      </div>
    </div>
  </>
  )}

export default NoteDetails