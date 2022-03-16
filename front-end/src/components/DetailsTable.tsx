import React from 'react'

const DetailsTable = () => {
  return (
    <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow-md sm:rounded-lg">
            
                    <table className="min-w-full">
                    
                        <thead className="bg-gray-50 dark:bg-gray-700">
                            <tr>
                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                    Date
                                </th>

                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                    Value
                                </th>

                            </tr>
                        </thead>

                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    16/03/2022
                                </td>

                                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                    1111
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    15/03/2022
                                </td>

                                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                    0001
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailsTable