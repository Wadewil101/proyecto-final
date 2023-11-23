"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function HomePage ({params}){
    const [newTopico,setNewTopico]=useState({
        subtitulo:"",
        archivo_url:"",
        capitulo:""
        
    });

    const router = useRouter();
    //const params = useParams();

    const getTopico = async ()=>{
        const res = await fetch(`/api/topico/${params.id}`);
        const {topicos} = await res.json();
        console.log(topicos);
        setNewTopico({
            subtitulo:topicos.subtitulo
           
        })
    }
    const handleDelete=async()=>{
        //console.log();
        if(window.confirm(`Esta seguro de eliminar el topico ${newTopico.subtitulo}`)){
            try {
                const res=await fetch(`/api/topico/${params.id}`,{
                    method:"DELETE"
                })
                router.push('/topico');
                router.refresh(); 
            } catch (error) {
                console.log(error)
            }
        }
    }



    useEffect(()=>{
        getTopico()
    },[])

return(
    <div>
        <h1>{params.id}</h1>
            <h1>Eliminar: {newTopico.subtitulo}</h1>
            <button type="button" className="bg-red-500 px-3 py-1 rounded-md" 
                onClick={handleDelete}>
                    Eliminar Topico
            </button>
    </div>
)
}
export default HomePage
