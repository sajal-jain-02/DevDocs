import React from 'react'

const WelcomeSection = () => {
  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good morning'
    if (hour < 18) return 'Good afternoon'
    return 'Good evening'
  }

  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-white mb-2">
        {getGreeting()}, Developer
      </h1>
      <p className="text-gray-400">
        Welcome back to your documentation hub
      </p>
    </div>
  )
}

export default WelcomeSection
