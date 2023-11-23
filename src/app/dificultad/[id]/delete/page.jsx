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
            nombre:dificultades.nombre
           
        })
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



    useEffect(()=>{
        getDificultad()
    },[])

return(
    <div>
        <h1>{params.id}</h1>
            <h1>Eliminar: {newDificultad.nombre}</h1>
            <button type="button" className="bg-red-500 px-3 py-1 rounded-md" 
                onClick={handleDelete}>
                    Eliminar Dificultad
            </button>
    </div>
)
}
export default HomePage
