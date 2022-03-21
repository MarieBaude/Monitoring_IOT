import NavBar from '../components/NavBar'
import DetailsTableHead from '../components/DetailsTableHead'
import DetailsTableBody from '../components/DetailsTableBody';
import Graph from '../components/Graph';

const Details = () => {
  return (
    <div className="min-h-full">
        <NavBar />
        
        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900">
                    History
                </h1>
            </div>
        </header>

        <main>
            <Graph />
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                                <div className="overflow-hidden shadow-md sm:rounded-lg">
                                    <table className="min-w-full">
                                        <DetailsTableHead />
                                        <DetailsTableBody />
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

export default Details