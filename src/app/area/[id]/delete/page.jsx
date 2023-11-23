"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function HomePage ({params}){
    const [newArea,setNewArea]=useState({
        nombre:"",
        
    });

    const router = useRouter();
    //const params = useParams();

    const getArea = async ()=>{
        const res = await fetch(`/api/area/${params.id}`);
        const {areas} = await res.json();
        console.log(areas);
        setNewArea({
            nombre:areas.nombre
           
        })
    }
    const handleDelete=async()=>{
        //console.log();
        if(window.confirm(`Esta seguro de eliminar la area ${newArea.nombre}`)){
            try {
                const res=await fetch(`/api/area/${params.id}`,{
                    method:"DELETE"
                })
                router.push('/area');
                router.refresh(); 
            } catch (error) {
                console.log(error)
            }
        }
    }



    useEffect(()=>{
        getArea()
    },[])

return(
    <div>
        <h1>{params.id}</h1>
            <h1>Eliminar: {newArea.nombre}</h1>
            <button type="button" className="bg-red-500 px-3 py-1 rounded-md" 
                onClick={handleDelete}>
                    Eliminar Area
            </button>
    </div>
)
}
export default HomePage
