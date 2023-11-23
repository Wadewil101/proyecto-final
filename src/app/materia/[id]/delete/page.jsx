"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function HomePage ({params}){
    const [newMateria,setNewMateria]=useState({
        titulo:"",
        imagen:"",
        visible:true,
        orden:'1'
    });

    const router = useRouter();
    //const params = useParams();

    const getMateria = async ()=>{
        const res = await fetch(`/api/materia/${params.id}`);
        const {materias} = await res.json();
        console.log(materias);
        setNewMateria({
            titulo:materias.titulo,
            imagen:materias.imagen,
            visible:materias.visible,
            orden:materias.orden
        })
    }
    const handleDelete=async()=>{
        //console.log();
        if(window.confirm(`Esta seguro de eliminar la materia ${newMateria.titulo}`)){
            try {
                const res=await fetch(`/api/materia/${params.id}`,{
                    method:"DELETE"
                })
                router.push('/materia');
                router.refresh(); 
            } catch (error) {
                console.log(error)
            }
        }
    }



    useEffect(()=>{
        getMateria()
    },[])

return(
    <div>
        <h1>{params.id}</h1>
            <h1>Eliminar: {newMateria.titulo}</h1>
            <button type="button" className="bg-red-500 px-3 py-1 rounded-md" 
                onClick={handleDelete}>
                    Eliminar Materia
            </button>
    </div>
)
}
export default HomePage