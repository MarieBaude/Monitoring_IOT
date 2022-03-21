import { useEffect, useState } from "react";

type typeLog = {
    id: number;
    date: Date;
    valueSave: number;
    detailId: number;
}

const DetailsTableBody = () => {
    const [logs, setLogs] = useState<typeLog[]>([])
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch("http://localhost:8000/log")
            .then((res) => res.json())
            .then(
                (data) => {console.log(data); setLogs(data);}, 
                (error) => {setError(error)}
            )
    }, []);

    if (error) {
        return <div>Error: {JSON.stringify(error)}</div>;
    } else {
        return (
            <tbody>
                {logs.map((log) => (
                    <tr key={log.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {log.date}
                        </td>

                        <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                            {log.valueSave}
                        </td>
                    </tr>
                ))}
            </tbody>
        )
    }
}

export default DetailsTableBody