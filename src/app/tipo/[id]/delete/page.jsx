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
            horas_reales:tipos.horas_reales
           
        })
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



    useEffect(()=>{
        getTipo()
    },[])

return(
    <div>
        <h1>{params.id}</h1>
            <h1>Eliminar: {newTipo.nombre}</h1>
            <button type="button" className="bg-red-500 px-3 py-1 rounded-md" 
                onClick={handleDelete}>
                    Eliminar Tipo
            </button>
    </div>
)
}
export default HomePage
