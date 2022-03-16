import { Link } from "react-router-dom";

const TableBody = () => {
  return (
    <tbody>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <Link to="/details">
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Module bidule
                </td>
            </Link>

            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                OIY687GHJ
            </td>

            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                500
            </td>

            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                1 days
            </td>

            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                1111
            </td>

            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                OK
            </td>
            
            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                Graph
            </td>
        </tr>
    </tbody>
  )
}

export default TableBody