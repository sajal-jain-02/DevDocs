import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex min-h-screen bg-gray-950 text-white relative '>
      <div className='absolute top-0 right-0 w-150 h-150 bg-violet-900/3 rounded-full blur-[150px] pointer-events-none' />
      <div className='absolute bottom-0 left-0 w-150 h-150 bg-indigo-900/2 rounded-full blur-[150px] pointer-events-none' />
      <Sidebar />
      <main className='flex-1 p-4 relative z-10'>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout