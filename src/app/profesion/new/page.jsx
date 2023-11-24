"use client"
import { useEffect, useState } from "react";
import { useRouter,useParams } from "next/navigation";

export const feachGrados=()=>{
    return fetch('http://localhost:3000/api/grado',{ cache: 'no-store'})
    .then(res=>res.json());
 }


function page() {
    const [profesion,setProfesion] = useState(
        {
            nombre:"",
            logo:"",
            color_hexa:"",
            costo_personalizado:"",
            costo_referencial:"",
            eslogan:"",
            descripcion:"",
            horas_academicas:"",
            horas_reales:"",
            grado:"",
            dificultad:""
        }
    );

    const [grados, setGrados]=useState([]);


    const getGrados = async ()=>{
        const res = await fetch(`/api/grado`);
        const {grados} = await res.json();
        console.log(grados);
        setGrados(grados);
    }


    const router = useRouter();
    const params = useParams();

    const handlerSubmit=async(e)=>{
        e.preventDefault();
        console.log(profesion);

        const res = await fetch('/api/profesion',{
            method:'POST',
            body:JSON.stringify(profesion)
        })

        const data = await res.json();
        console.log(data);
        router.push('/profesion');
        router.refresh();
    }

    const handleSelect=(e)=>{
        console.log(e.target.value)
        setProfesion({...profesion,[e.target.name]:e.target.value})
    }

    const handlerChangeToggle=(e)=>{
        console.log(e.target.checked)
        setProfesion({...profesion,[e.target.name]:e.target.checked})
    }
    const handlerChange=(e)=>{
        console.log(e.target.value)
        setProfesion({...profesion,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        getGrados()
     },[])


  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">

<form onSubmit={handlerSubmit}>
        <input type="text" name="nombre" placeholder="Ingrese Nombre del profesion"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange}/>
        
        

        <select name="grado" onChange={handleSelect} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {
                grados.map(grado=>(
                    <option value={grado._id}>{grado.nombre}</option>
                ))
            }
        </select>

        
        
        <button type="submit"
        className="mt-3 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >Registrar Profesion</button>
    </form>
    </div>
    
  )
}

export default page