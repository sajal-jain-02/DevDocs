import { FiFileText, FiCode, FiTag, FiPlus } from 'react-icons/fi'
import WelcomeSection from '../components/Dashboard/WelcomeSection'
import StatCard from '../components/Dashboard/StatCard'
import QuickAction from '../components/Dashboard/QuickAction'
import NoteCard from '../components/Notes/NoteCard'
import SnippetCard from '../components/Snippet/SnippetCard'
import TagsCard from '../components/Tags/TagsCard'
import { getAllNotes } from '../services/noteService.js'
import { getAllSnippets } from '../services/snippetService.js'
import { getAllTags } from '../services/tagsService.js'

const Dashboard = () => {
  const notes = getAllNotes()
  const snippets = getAllSnippets()
  const tags = getAllTags()

  return (
    <div className="space-y-8">
      <WelcomeSection />

      <section>
        <h2 className="text-xl font-semibold text-white mb-4">Statistics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <StatCard title="Total Notes" count={notes.length} icon={FiFileText} color="blue" />
          <StatCard title="Total Snippets" count={snippets.length} icon={FiCode} color="purple" />
          <StatCard title="Total Tags" count={tags.length} icon={FiTag} color="green" />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <QuickAction
            title="Create Note"
            description="Add a new note to your collection"
            icon={FiPlus}
            to="/notes/new"
            color="blue"
          />
          <QuickAction
            title="Create Snippet"
            description="Save a code snippet for later"
            icon={FiCode}
            to="/snippets/new"
            color="purple"
          />
          <QuickAction
            title="Browse Tags"
            description="Explore tags and related notes & snippets"
            icon={FiTag}
            to="/tags"
            color="green"
          />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-4">Recent Notes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {notes.length === 0 ? (
            <div className="border border-gray-800 rounded-xl p-8 bg-gray-900/50 text-center text-gray-500">
              No notes yet
            </div>
          ) : (
           [...notes].slice(-3).reverse().map((note) => (
              <NoteCard
                key={note.id}
                id={note.id}
                title={note.title}
                description={note.description}
                tags={note.tags}
                searchTerm=""
              />
            ))
          )}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-4">Recent Snippets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {snippets.length === 0 ? (
            <div className="border border-gray-800 rounded-xl p-8 bg-gray-900/50 text-center text-gray-500">
              No snippets yet
            </div>
          ) : (
            [...snippets].slice(-3).reverse().map((snippet) => (
              <SnippetCard
                key={snippet.id}
                id={snippet.id}
                title={snippet.title}
                description={snippet.description}
                language={snippet.language}
                tags={snippet.tags}
                searchTerm=""
              />
            ))
          )}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-4">Most Used Tags</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tags.length === 0 ? (
            <div className="border border-gray-800 rounded-xl p-8 bg-gray-900/50 text-center text-gray-500">
              No tags yet
            </div>
          ) : (
            tags.slice(0, 5).map((tag) => (
              <TagsCard key={tag.name} tag={tag} />
            ))
          )}
        </div>
      </section>
    </div>
  )
}

export default Dashboard