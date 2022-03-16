import { Link } from "react-router-dom";

import Table from '../components/Table'
import NavBar from '../components/NavBar'

const Dashboard = () => {
  return (
    <div className="min-h-full">
        <NavBar />
        
        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900">
                    Dashboard
                </h1>
            </div>
        </header>

        <main>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            
                <Link to="Form">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add module
                    </button>
                </Link>
                
                <div className="px-4 py-6 sm:px-0">
                    <Table />
                </div>

            </div>
        </main>
    </div>
  )
}

export default Dashboard