import React from "react";
import ReactDOM from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";

enum TypeEnum {
    speed = "speed",
    temperature = "temperature",
    counting = "counting"
  }
  
  interface IFormInput {
    nameModule: String;
    nameCity: String;
    type: TypeEnum;
    duration: Number;
    moduleState: Boolean;
    moduleValue: Number;
  }

const NewModule = () => {
    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);
  
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative z-0 mb-6 w-full group">
                <label>Name</label>
                <input 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=" " 
                    required
                    {...register("nameModule")} 
                />

                <label>City</label>
                <input 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=" " 
                    required
                    {...register("nameCity")} 
                />

                <br />
                <select 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    {...register("type")} 
                >
                    <option value="speed">speed</option>
                    <option value="temperature">temperature</option>
                    <option value="counting">counting</option>
                </select>
                <br />

                <label>Duration</label>
                <input 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=" " 
                    required
                    {...register("duration")} 
                />

                <label>State</label>
                <input 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=" " 
                    required
                    {...register("moduleState")} 
                />

                <label>Value</label>
                <input 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=" " 
                    required
                    {...register("moduleValue")} 
                />

                <br /><br />
                <button 
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="submit"
                >Add</button>
            </div>
        </form>
  )
}

export default NewModule