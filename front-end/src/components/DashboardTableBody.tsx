import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

type typeModule = {
    id: number;
    name: string;              
    type: string;                  
    city: string;
}

type typeDetail = {
    id : number;             
    value : number;
    duration : number;              
    number : number;                
    state: boolean;   
}

const TableBody = () => {

    const [modules, setModules] = useState<typeModule[]>([])
    const [details, setDetails] = useState<typeDetail[]>([])

    useEffect(() => {
        fetch("http://localhost:8000/module")
            .then((res) => res.json())
            .then((data) => {setModules(data)})
        fetch("http://localhost:8000/details")
            .then((res) => res.json())
            .then((data) => {setDetails(data)})
    }, []);


  return (
    <tbody>
        {modules.map((module) => (
            <tr key={module.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <Link to="/details">
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {module.name}
                    </td>
                </Link>

                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                    
                </td>

                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                    
                </td>

                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                    
                </td>

                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                    
                </td>
            </tr>

        ))}
        
    </tbody>
  )
}

export default TableBody