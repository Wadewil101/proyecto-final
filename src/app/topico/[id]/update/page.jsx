"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const feachCapitulos=()=>{
    return fetch('http://localhost:3000/api/capitulo',{ cache: 'no-store'})
    .then(res=>res.json());
 }

function HomePage ({params}){
    const [newTopico,setTopico]=useState({
        subtitulo:"",
        archivo_url:"",
        capitulo:"",
       
    });

    const [capitulos, setCapitulos]=useState([]);

    const getCapitulos = async ()=>{
        const res = await fetch(`/api/capitulo`);
        const {capitulos} = await res.json();
        console.log(capitulos);
        setCapitulos(capitulos);
    }

    const router = useRouter();
 

    const getTopico = async ()=>{
        const res = await fetch(`/api/topico/${params.id}`);
        const {topicos} = await res.json();
        console.log(topicos);
        setTopico({
            subtitulo:topicos.subtitulo,
            archivo_url:topicos.archivo_url,
            capitulo:topicos.capitulo,
           
        })
    }
    const handlerSubmit=async(e)=>{
        e.preventDefault();
        console.log(newTopico);

        const res = await fetch(`/api/topico/${params.id}`,{
            method:'PUT',
            body:JSON.stringify(newTopico)
        })

        const data = await res.json();
        console.log(data);
        router.push('/topico');
        router.refresh();
    }

    const handleSelect=(e)=>{
        console.log(e.target.value)
        setTopico({...newTopico,[e.target.name]:e.target.value})
    }

   
    const handlerChangeToggle=(e)=>{
        console.log(e.target.checked)
        setTopico({...newTopico,[e.target.name]:e.target.checked})
    }
    const handlerChange=(e)=>{
        //console.log(e.target.value)
        setTopico({...newTopico,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        getTopico()
    },[])

    useEffect(()=>{
        getCapitulos()
     },[])

return(
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">

        <form onSubmit={handlerSubmit}>
        <input type="text" name="subtitulo" placeholder="Ingrese subtitulo"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newTopico.subtitulo}/>

        <input type="text" name="archivo_url" placeholder=""
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newTopico.archivo_url}/>

        
        <select name="capitulo" onChange={handleSelect} value={newTopico.capitulo} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {
                capitulos.map(capitulo=>(
                    <option  value={capitulo._id}>{capitulo.titulo}</option>
                ))
            }
        </select>

        <button type="submit"
        className="mt-3 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >Modificar Topico</button>
    </form>
    </div>
    
)
}
export default HomePage