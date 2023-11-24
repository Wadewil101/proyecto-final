"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const feachGrados=()=>{
    return fetch('http://localhost:3000/api/grado',{ cache: 'no-store'})
    .then(res=>res.json());
 }
 

function HomePage ({params}){
    const [newProfesion,setProfesion]=useState({
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
    });

    const [grados, setGrados]=useState([]);


    const getGrados = async ()=>{
        const res = await fetch(`/api/grado`);
        const {grados} = await res.json();
        console.log(grados);
        setGrados(grados);
    }

    


    const router = useRouter();
 

    const getProfesion = async ()=>{
        const res = await fetch(`/api/profesion/${params.id}`);
        const {profesiones} = await res.json();
        console.log(profesiones);
        setProfesion({
            nombre:profesiones.nombre,
            logo:profesiones.logo,
            color_hexa:profesiones.color_hexa,
            costo_personalizado:profesiones.costo_personalizado,
            costo_referencial:profesiones.costo_referencial,
            eslogan:profesiones.eslogan,
            descripcion:profesiones.descripcion,
            horas_academicas:profesiones.horas_academicas,
            horas_reales:profesiones.horas_reales,
            
            grado:profesiones.grado,
            dificultad:profesiones.dificultad
        })
    }
    const handlerSubmit=async(e)=>{
        e.preventDefault();
        console.log(newProfesion);

        const res = await fetch(`/api/profesion/${params.id}`,{
            method:'PUT',
            body:JSON.stringify(newProfesion)
        })

        const data = await res.json();
        console.log(data);
        router.push('/profesion');
        router.refresh();
    }

    const handleSelect=(e)=>{
        console.log(e.target.value)
        setProfesion({...newProfesion,[e.target.name]:e.target.value})
    }

   
    const handlerChangeToggle=(e)=>{
        console.log(e.target.checked)
        setProfesion({...newProfesion,[e.target.name]:e.target.checked})
    }
    const handlerChange=(e)=>{
        //console.log(e.target.value)
        setProfesion({...newProfesion,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        getProfesion()
    },[])

    useEffect(()=>{
        getGrados()
     },[])
     

return(
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">

        <form onSubmit={handlerSubmit}>
        <input type="text" name="nombre" placeholder="Ingrese nombre Profesion"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newProfesion.nombre}/>

        

        
        <select name="grado" onChange={handleSelect} value={newProfesion.grado} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {
                grados.map(grado=>(
                    <option  value={grado._id}>{grado.nombre}</option>
                ))
            }
        </select>

        

        <button type="submit"
        className="mt-3 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >Modificar Profesion</button>
    </form>
    </div>
    
)
}
export default HomePage