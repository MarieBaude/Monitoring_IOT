import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

type typeDetail = {
    id : number;             
    value : number;
    duration : number;              
    number : number;                
    state: boolean;
    moduleId: number;   
}

type typeModule = {
    id: number;
    name: string;              
    type: string;                  
    city: string;
    detail: typeDetail[];
}


const TableBody = () => {
    const [modules, setModules] = useState<typeModule[]>([])
    const [details, setDetails] = useState<typeDetail[]>([])
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch("https://alleluia.herokuapp.com/module")
            .then((res) => res.json())
            .then(
                (data) => {setModules(data); setDetails(data.detail)}, 
                (error) => {setError(error)}
            )
    }, []);

    if (error) {
        return <div>Error: {JSON.stringify(error)}</div>;
    } else {
        return (
            <tbody>
                    {modules.map((module) => (
                        <tr key={module.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            
                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <Link to={`/details/${module.id}`}>
                                        {module.name}
                                </Link>
                            </td>

                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                {module.detail[0].value}
                            </td>

                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                {module.detail[0].duration}
                            </td>

                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                {module.detail[0].number}
                            </td>

                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                {module.detail[0].state ? 'OK' : 'KO'}
                            </td>
                        </tr>
                    ))}
            </tbody>
        )
    }
}

export default TableBody