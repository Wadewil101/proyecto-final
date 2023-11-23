"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function HomePage ({params}){
    const [newDificultad,setNewDificultad]=useState({
        nombre:"",
    });

    const router = useRouter();
    //const params = useParams();

    const getDificultad = async ()=>{
        const res = await fetch(`/api/dificultad/${params.id}`);
        const {dificultades} = await res.json();
        console.log(dificultades);
        setNewDificultad({
            nombre:dificultades.nombre,
        })
    }
    const handlerSubmit=async(e)=>{
        e.preventDefault();
        console.log(newDificultad);

        const res = await fetch(`/api/dificultad/${params.id}`,{
            method:'PUT',
            body:JSON.stringify(newDificultad)
        })

        const data = await res.json();
        console.log(data);
        router.push('/dificultad');
        router.refresh();
    }

    const handleDelete=async()=>{
        //console.log();
        if(window.confirm(`Esta seguro de eliminar la dificultad ${newDificultad.nombre}`)){
            try {
                const res=await fetch(`/api/dificultad/${params.id}`,{
                    method:"DELETE"
                })
                router.push('/dificultad');
                router.refresh(); 
            } catch (error) {
                console.log(error)
            }
        }
    }
    const handlerChangeToggle=(e)=>{
        console.log(e.target.checked)
        setNewDificultad({...newDificultad,[e.target.name]:e.target.checked})
    }
    const handlerChange=(e)=>{
        //console.log(e.target.value)
        setNewDificultad({...newDificultad,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        getDificultad()
    },[])

return(
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">

        <form onSubmit={handlerSubmit}>
        <input type="text" name="nombre" placeholder="Ingrese Nombre dificultad"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newDificultad.nombre}/>
        
        
       
        
        
        <button type="submit"
        className="mt-3 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >Modificar Dificultad</button>
    </form>
    </div>
    
)
}
export default HomePage