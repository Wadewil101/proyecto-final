"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function HomePage ({params}){
    const [newCarrera,setNewCarrera]=useState({
        nombre:"",
        logo:"",
        color:"",
        costo_mensual:""
        
    });

    const router = useRouter();
    //const params = useParams();

    const getCarrera = async ()=>{
        const res = await fetch(`/api/carrera/${params.id}`);
        const {carreras} = await res.json();
        console.log(carreras);
        setNewCarrera({
            nombre:carreras.nombre
           
        })
    }
    const handleDelete=async()=>{
        //console.log();
        if(window.confirm(`Esta seguro de eliminar la carrera ${newCarrera.nombre}`)){
            try {
                const res=await fetch(`/api/carrera/${params.id}`,{
                    method:"DELETE"
                })
                router.push('/carrera');
                router.refresh(); 
            } catch (error) {
                console.log(error)
            }
        }
    }



    useEffect(()=>{
        getCarrera()
    },[])

return(
    <div>
        <h1>{params.id}</h1>
            <h1>Eliminar: {newCarrera.nombre}</h1>
            <button type="button" className="bg-red-500 px-3 py-1 rounded-md" 
                onClick={handleDelete}>
                    Eliminar Carrera
            </button>
    </div>
)
}
export default HomePage
