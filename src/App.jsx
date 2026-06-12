import React from 'react'
import Dashboard from "./pages/Dashboard.jsx";
import Notes from "./pages/Notes.jsx";
import Snippets from "./pages/Snippets.jsx";
import Tags from "./pages/Tags.jsx";
import CreateNotes from "./pages/CreateNotes.jsx";
import CreateSnippets from "./pages/CreateSnippets.jsx";
import TagsView from "./pages/TagsView.jsx"
import SearchResult from "./pages/SearchResult.jsx"
import NoteDetails from "./pages/NoteDetails.jsx"
import SnippetDetails from "./pages/SnippetDetails.jsx"
import Layout from './components/Layout.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes >
        <Route element={<Layout />} >
          <Route path='/' element={<Dashboard />} />
          <Route path='/notes' element={<Notes />} />
          <Route path='/notes/new' element={<CreateNotes />} />
          <Route path='/notes/:id' element={<NoteDetails />} />
          <Route path='/snippets' element={<Snippets />} />
          <Route path='/snippets/new' element={<CreateSnippets />} />
          <Route path='/snippets/:id' element={<SnippetDetails />} />
          <Route path='/tags' element={<Tags />} />
          <Route path='/tags/:name' element={<TagsView />} />
          <Route path='/search' element={<SearchResult />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App