import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

const QuickAction = ({ title, description, icon: Icon, to, color }) => {
  const colorClasses = {
    blue: 'hover:border-blue-500/40 hover:bg-blue-500/5',
    purple: 'hover:border-purple-500/40 hover:bg-purple-500/5',
    green: 'hover:border-green-500/40 hover:bg-green-500/5',
    orange: 'hover:border-orange-500/40 hover:bg-orange-500/5',
  }

  return (
    <Link
      to={to}
      className={`group flex items-center gap-5 p-5 border border-gray-800 rounded-xl bg-gray-900 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl ${colorClasses[color] || colorClasses.blue}`}
    >
      <div className="p-3 rounded-lg border border-gray-700 bg-gray-800">
        {Icon && <Icon className="text-xl text-gray-400 group-hover:text-white transition-colors duration-300" />}
      </div>
      <div className="flex-1">
        <h3 className="text-white font-semibold text-base mb-1">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
      <FiArrowRight className="w-5 h-5 text-gray-500 group-hover:text-gray-300 transition-colors duration-300" />
    </Link>
  )
}

export default QuickAction
