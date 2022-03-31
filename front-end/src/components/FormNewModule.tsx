import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";
  
interface IFormInput {
    name: String;
    city: String;
    type: String;
    duration: Number;
    number: Number;
    state: Boolean;
    value: Number;
}

const NewModule = () => {
    const { register, handleSubmit } = useForm<IFormInput>();
    const [error, setError] = useState(null)
    const onSubmit: SubmitHandler<IFormInput> = async data => { 

        await fetch("http://localhost:8000/module", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then(
            (result) => {handleSubmit(result);}, 
            (error) => {setError(error)}
        )
    };
  
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative z-0 mb-6 w-full group">
                <label>Name</label>
                <input 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=" " 
                    required
                    {...register("name")} 
                />

                <label>City</label>
                <input 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=" " 
                    required
                    {...register("city")} 
                />

                <br />
                <label>Type</label>
                <input 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=" " 
                    required
                    {...register("type")} 
                />
                <br />

                <label>Duration</label>
                <input 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=" " 
                    required
                    {...register("duration")} 
                />

                <label>Number</label>
                <input 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=" " 
                    required
                    {...register("number")} 
                />

                <br />
                <select 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    {...register("state")} 
                >
                    <option value={1}>On</option>
                    <option value={0}>Off</option>
                </select>
                <br />

                <label>Value</label>
                <input 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=" " 
                    required
                    {...register("value")} 
                />

                <br /><br />

                <button 
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="submit"
                >
                    Add
                </button>
            </div>
        </form>
  )
}

export default NewModule