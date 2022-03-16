import React from 'react'
import NavBar from '../components/NavBar'
import NewModule from '../components/NewModule'

const Form = () => {
  return (
    <div className="min-h-full">
        <NavBar />
        
        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900">
                    Adding new module
                </h1>
            </div>
        </header>

        <main>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <NewModule />
                </div>
            </div>
        </main>
    </div>
  )
}

export default Form