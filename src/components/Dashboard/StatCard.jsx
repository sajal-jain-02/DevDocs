import React from 'react'

const StatCard = ({ title, count, icon: Icon, color }) => {
  const colorClasses = {
    blue: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    green: 'bg-green-500/10 text-green-400 border-green-500/30',
    orange: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
  }

  return (
    <div className="border border-gray-800 rounded-xl p-6 bg-gray-900/50 hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-gray-400 text-sm font-medium mb-1">{title}</p>
          <p className="text-4xl font-bold text-white">{count}</p>
        </div>
        <div className={`p-3 rounded-lg border ${colorClasses[color] || colorClasses.blue}`}>
          {Icon && <Icon className="text-xl" />}
        </div>
      </div>
    </div>
  )
}

export default StatCard
