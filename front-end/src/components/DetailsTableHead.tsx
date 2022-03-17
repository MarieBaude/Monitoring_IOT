import React from 'react'

const DetailsTableHead = () => {
  return (
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
  )
}

export default DetailsTableHead