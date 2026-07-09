import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiLayout, FiFileText, FiCode, FiTag } from 'react-icons/fi'
import logo from '../assets/devdocs-logo.png'
import profile from '../assets/robin-pfp.jpg'

const Sidebar = () => {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Dashboard', icon: FiLayout },
    { path: '/notes', label: 'Notes', icon: FiFileText },
    { path: '/snippets', label: 'Snippets', icon: FiCode },
    { path: '/tags', label: 'Tags', icon: FiTag },
  ]

  return (
    <div className='sticky top-0 h-screen w-64 bg-gray-950 border-r border-gray-800 flex flex-col'>
      <div className='p-6 border-b border-gray-800'>
        <div className='flex items-center gap-3'>
          <img src={logo} alt='DevDocs Logo' className='w-10 h-10 rounded-lg' />
          <div className='flex flex-col'>
            <h1 className='text-lg font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
              DevDocs
            </h1>
            <p className='text-xs text-gray-500'>Developer Workspace</p>
          </div>
        </div>
      </div>
      <nav className='flex-1 p-4'>
        <ul className='space-y-1'>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'bg-purple-500/10 border-l-2 border-purple-500 text-white'
                      : 'text-gray-400 hover:bg-gray-900 hover:text-white'
                  }`}
                >
                  <item.icon className='text-lg' />
                  <span className='font-medium text-sm'>{item.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <div className='p-4 border-t border-gray-800'>
        <div className='flex items-center gap-3 p-3 rounded-xl hover:bg-gray-900 transition-all duration-200 cursor-pointer'>
          <img src={profile} alt='Profile' className='w-10 h-10 rounded-full object-cover' />
          <div className='flex flex-col'>
            <p className='text-white font-medium text-sm'>Sajal Jain</p>
            <p className='text-purple-400 text-xs'>Developer</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar