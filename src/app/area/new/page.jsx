"use client"
import { useEffect, useState } from "react";
import { useRouter,useParams } from "next/navigation";

function page() {
    const [area,setArea] = useState(
        {
            nombre:"",
            
        }
    );

    const router = useRouter();
    const params = useParams();

    const handlerSubmit=async(e)=>{
        e.preventDefault();
        console.log(area);

        const res = await fetch('/api/area',{
            method:'POST',
            body:JSON.stringify(area)
        })

        const data = await res.json();
        console.log(data);
        router.push('/area');
        router.refresh();
    }
    const handlerChange=(e)=>{
        //console.log(e.target.value)
        setArea({...area,[e.target.name]:e.target.value})
    }
  return (
    
    <div>
        <h1 class="text-center mt-10 p-10 font-semibold italic  text-4xl"><span class=" text-dark px-2 ...">
  Nueva Area
</span></h1>
        <div className="h-[calc(30vh-7rem)] flex justify-center items-center ">
        
        <form onSubmit={handlerSubmit} class="flex items-center space-x-4">
            <div><input type="text" name="nombre" placeholder="Ingrese Titulo materia"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1 focus:outline-none focus:border-sky-500"
        onChange={handlerChange}/></div>
        
        <div><button type="submit"
        className="mt-3 focus:outline-none text-white bg-[#2563eb] hover:bg-[#1e40af] focus:ring-4 focus:ring-[#60a5fa] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#3b82f6] dark:hover:bg-[#1e40af] dark:focus:ring-[#1e3a8a]"
        >Registrar Area</button></div>
        
         </form>
    </div>
    </div>
    
  )
}

export default page