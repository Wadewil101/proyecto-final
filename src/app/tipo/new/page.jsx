"use client"
import { useEffect, useState } from "react";
import { useRouter,useParams } from "next/navigation";

function page() {
    const [tipo,setTipo] = useState(
        {
            nombre:"",
            
        }
    );

    const router = useRouter();
    const params = useParams();

    const handlerSubmit=async(e)=>{
        e.preventDefault();
        console.log(tipo);

        const res = await fetch('/api/tipo',{
            method:'POST',
            body:JSON.stringify(tipo)
        })

        const data = await res.json();
        console.log(data);
        router.push('/tipo');
        router.refresh();
    }
    const handlerChange=(e)=>{
        //console.log(e.target.value)
        setTipo({...tipo,[e.target.name]:e.target.value})
    }
  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">

        <form onSubmit={handlerSubmit}>
        <input type="text" name="nombre" placeholder="Ingrese Titulo materia"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange}/>
        <input type="number" name="horas_reales" placeholder="Ingrese las horas reales"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange}/>
        
        <button type="submit"
        className="mt-3 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >Registrar Tipo</button>
    </form>
    </div>
    
  )
}

export default page