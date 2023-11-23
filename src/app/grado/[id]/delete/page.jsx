"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function HomePage ({params}){
    const [newGrado,setNewGrado]=useState({
        nombre:"",
        
    });

    const router = useRouter();
    //const params = useParams();

    const getGrado = async ()=>{
        const res = await fetch(`/api/grado/${params.id}`);
        const {grados} = await res.json();
        console.log(grados);
        setNewGrado({
            nombre:grados.nombre
           
        })
    }
    const handleDelete=async()=>{
        //console.log();
        if(window.confirm(`Esta seguro de eliminar la grado ${newGrado.nombre}`)){
            try {
                const res=await fetch(`/api/grado/${params.id}`,{
                    method:"DELETE"
                })
                router.push('/grado');
                router.refresh(); 
            } catch (error) {
                console.log(error)
            }
        }
    }



    useEffect(()=>{
        getGrado()
    },[])

return(
    <div>
        <h1>{params.id}</h1>
            <h1>Eliminar: {newGrado.nombre}</h1>
            <button type="button" className="bg-red-500 px-3 py-1 rounded-md" 
                onClick={handleDelete}>
                    Eliminar Grado
            </button>
    </div>
)
}
export default HomePage
