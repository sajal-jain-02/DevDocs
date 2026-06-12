import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='sticky flex min-h-screen bg-linear-to-br from-zinc-950 via-slate-950 to-indigo-950 text-white'>
        <Sidebar />
        <main className='flex-1 p-4'>
            <Outlet />
        </main>
    </div>
  )
}

export default Layout