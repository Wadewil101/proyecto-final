"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function HomePage ({params}){
    const [newCurso,setNewCurso]=useState({
        nombre:"",
        
    });

    const router = useRouter();
    //const params = useParams();

    const getCurso = async ()=>{
        const res = await fetch(`/api/curso/${params.id}`);
        const {cursos} = await res.json();
        console.log(cursos);
        setNewCurso({
            nombre:cursos.nombre
           
        })
    }
    const handleDelete=async()=>{
        //console.log();
        if(window.confirm(`Esta seguro de eliminar la curso ${newCurso.nombre}`)){
            try {
                const res=await fetch(`/api/curso/${params.id}`,{
                    method:"DELETE"
                })
                router.push('/curso');
                router.refresh(); 
            } catch (error) {
                console.log(error)
            }
        }
    }



    useEffect(()=>{
        getCurso()
    },[])

return(
    <div>
        <h1>{params.id}</h1>
            <h1>Eliminar: {newCurso.nombre}</h1>
            <button type="button" className="bg-red-500 px-3 py-1 rounded-md" 
                onClick={handleDelete}>
                    Eliminar Curso
            </button>
    </div>
)
}
export default HomePage
