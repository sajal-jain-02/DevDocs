import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sticky flex flex-col gap-4 p-4 top-0 h-screen w-48 bg-zinc-900/60 backdrop-blur-md'>
        <Link to="/">Dashboard</Link>
        <Link to="/notes">Notes</Link>
        <Link to="/snippets">Snippets</Link>
        <Link to="/tags">Tags</Link>
    </div>
  )
}

export default Sidebar