import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";
  
interface IFormInput {
    nameModule: String;
    nameCity: String;
    type: String;
    duration: Number;
    moduleState: Boolean;
    moduleValue: Number;
}

const NewModule = () => {
    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);
    const [error, setError] = useState(null)

    // const inputNewModule {
    //     name: nameInput;
    //     city: cityInput;
    //     type: typeInput;
    //     duration: durationInput;
    //     state: stateInput;
    //     value: valueInput;
    // }


    // fetch("http://localhost:8000/module", {
    //     method: 'POST',
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(inputNewModule),
    // })
    //     .then((res) => res.json())
    //     .then(
    //         (data) => {handleSubmit(data);}, 
    //         (error) => {setError(error)}
    //     )
  
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative z-0 mb-6 w-full group">
                <label>Name</label>
                <input 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=" " 
                    required
                    //value={nameInput}
                    {...register("nameModule")} 
                />

                <label>City</label>
                <input 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=" " 
                    required
                    //value={cityInput}
                    {...register("nameCity")} 
                />

                <br />
                <label>Type</label>
                <input 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=" " 
                    required
                    //value={typeInput}
                    {...register("type")} 
                />
                <br />

                <label>Duration</label>
                <input 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=" " 
                    required
                    //value={durationInput}
                    {...register("duration")} 
                />

                <br />
                <select 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    {...register("moduleState")} 
                >
                    <option value="true">On</option>
                    <option value="false">Off</option>
                </select>
                <br />

                <label>Value</label>
                <input 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=" " 
                    required
                    //value={valueInput}
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



// import { useEffect, useState, FormEvent } from "react";

// type typeModule = {
//     id: number;
//     name: string;              
//     // type: string;                  
//     city: string;
// }

// const NewModule = () => {
//     const [modules, setModules] = useState<typeModule[]>([])
//     const [error, setError] = useState(null)

//     function createModule(e:FormEvent<Element>) {
//         let form = e.target as Element
//         let input = form.childNodes[0] as HTMLInputElement

//           useEffect(() => {
//             const newListElement = {
//                 method: 'POST',
//                 name: input.value,
//                 // type: select.value,
//                 city: input.value,
//             };
//             fetch("http://localhost:8000/form", newListElement)
//                 .then((res) => res.json())
//                 .then(
//                     (data) => {console.log(data); setModules(data);}, 
//                     (error) => {setError(error)}
//                 )
//         }, []);
//     }

//     return (
//     <form 
//         onSubmit={createModule}
//     >
//         <div className="relative z-0 mb-6 w-full group">
//             <input type="text" name="floating_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//             <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
//                 Name
//             </label>
//         </div>

//         <div className="relative z-0 mb-6 w-full group">
//             <input type="text" name="floating_city" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//             <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
//                 City
//             </label>
//         </div>
        
//         {/* <div className="relative z-0 mb-6 w-full group">
//             <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
//                 Select your type
//             </label>

//             <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
//                 <option>Counting</option>
//                 <option>Temperature</option>
//                 <option>Speed</option>
//             </select>
//         </div> */}

//         <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
//     </form>
//   )
// }

// export default NewModule