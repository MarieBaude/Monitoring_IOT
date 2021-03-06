import { Link } from "react-router-dom";

import NavBar from '../components/NavBar'
import TableBody from '../components/DashboardTableBody';
import TableHead from "../components/DashboardTableHead";


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
                    <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                                <div className="overflow-hidden shadow-md sm:rounded-lg">
                                    <table className="min-w-full">
                                        <TableHead />
                                        <TableBody />
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    </div>
  )
}

export default Dashboard