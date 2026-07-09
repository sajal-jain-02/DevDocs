import React from 'react'
import { getAllNotes } from '../../services/noteService.js'
import { getAllSnippets } from '../../services/snippetService.js'
import { getAllTags } from '../../services/tagsService.js'

const WelcomeSection = () => {
  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good morning'
    if (hour < 18) return 'Good afternoon'
    return 'Good evening'
  }

  const notes = getAllNotes()
  const snippets = getAllSnippets()
  const tags = getAllTags()

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-4">
      <div className="flex-1">
        <h1 className="text-3xl font-bold text-white mb-2">
          {getGreeting()},
        </h1>
        <h2 className="text-5xl font-extrabold bg-linear-to-r from-purple-400 via-violet-400 to-pink-400 bg-clip-text text-transparent mb-4">
          Developer
        </h2>
        <p className="text-gray-400 text-sm max-w-lg">
          Organize your notes and code snippets in one beautiful workspace.
        </p>
      </div>
      <div className="w-full lg:w-80">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 shadow-lg">
          <h3 className="text-lg font-semibold text-white mb-6">Today's Overview</h3>
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">📄 Total Notes</span>
              <span className="text-white font-semibold">{notes.length}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">💻 Total Snippets</span>
              <span className="text-white font-semibold">{snippets.length}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">🏷 Total Tags</span>
              <span className="text-white font-semibold">{tags.length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomeSection
