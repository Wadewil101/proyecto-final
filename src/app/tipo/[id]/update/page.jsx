"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function HomePage ({params}){
    const [newTipo,setNewTipo]=useState({
        nombre:"",
        horas_reales:"",
    });

    const router = useRouter();
    //const params = useParams();

    const getTipo = async ()=>{
        const res = await fetch(`/api/tipo/${params.id}`);
        const {tipos} = await res.json();
        console.log(tipos);
        setNewTipo({
            nombre:tipos.nombre,
            horas_reales:tipos.horas_reales,
        })
    }
    const handlerSubmit=async(e)=>{
        e.preventDefault();
        console.log(newTipo);

        const res = await fetch(`/api/tipo/${params.id}`,{
            method:'PUT',
            body:JSON.stringify(newTipo)
        })

        const data = await res.json();
        console.log(data);
        router.push('/tipo');
        router.refresh();
    }

    const handleDelete=async()=>{
        //console.log();
        if(window.confirm(`Esta seguro de eliminar la tipo ${newTipo.nombre}`)){
            try {
                const res=await fetch(`/api/tipo/${params.id}`,{
                    method:"DELETE"
                })
                router.push('/tipo');
                router.refresh(); 
            } catch (error) {
                console.log(error)
            }
        }
    }
    const handlerChangeToggle=(e)=>{
        console.log(e.target.checked)
        setNewTipo({...newTipo,[e.target.name]:e.target.checked})
    }
    const handlerChange=(e)=>{
        //console.log(e.target.value)
        setNewTipo({...newTipo,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        getTipo()
    },[])

return(
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">

        <form onSubmit={handlerSubmit}>
        <input type="text" name="nombre" placeholder="Ingrese Nombre tipo"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newTipo.nombre}/>
        <input type="text" name="horas_reales" placeholder="Ingrese las horas reales"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newTipo.horas_reales}/>
        
        
       
        
        
        <button type="submit"
        className="mt-3 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >Modificar Tipo</button>
    </form>
    </div>
    
)
}
export default HomePage