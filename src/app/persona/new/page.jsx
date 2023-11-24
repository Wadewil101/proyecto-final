"use client"
import { useEffect, useState } from "react";
import { useRouter,useParams } from "next/navigation";

export const feachProfesiones=()=>{
    return fetch('http://localhost:3000/api/profesion',{ cache: 'no-store'})
    .then(res=>res.json());
 }

 

function page() {
    const [persona,setCurso] = useState(
        {
            primer_apellido:"",
            segundo_apellido:"",
            nombres:"",
            email:"",
            fecha_nacimiento:"",
            numero_ci:"",
            expedido_ci:"",
            genero:"",
            direccion:"",
            telefono_1:"",
            telefono_2:"",
            profesion:""
        }
    );

    const [profesiones, setProfesiones]=useState([]);


    const getProfesiones = async ()=>{
        const res = await fetch(`/api/profesion`);
        const {profesiones} = await res.json();
        console.log(profesiones);
        setProfesiones(profesiones);
    }


    const router = useRouter();
    const params = useParams();

    const handlerSubmit=async(e)=>{
        e.preventDefault();
        console.log(persona);

        const res = await fetch('/api/persona',{
            method:'POST',
            body:JSON.stringify(persona)
        })

        const data = await res.json();
        console.log(data);
        router.push('/persona');
        router.refresh();
    }

    const handleSelect=(e)=>{
        console.log(e.target.value)
        setCurso({...persona,[e.target.name]:e.target.value})
    }

    const handlerChangeToggle=(e)=>{
        console.log(e.target.checked)
        setCurso({...persona,[e.target.name]:e.target.checked})
    }
    const handlerChange=(e)=>{
        console.log(e.target.value)
        setCurso({...persona,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        getProfesiones()
     },[])


  return (
    <div className="">
<h1 class="text-center  p-10 font-semibold italic  text-4xl"><span class=" text-dark px-2 ...">
  Nueva persona
</span></h1>
<div className="h-[calc(80vh-7rem)] flex justify-center items-center">
<form onSubmit={handlerSubmit}>
    <div className="grid grid-flow-row sm:grid-flow-col gap-2">
    <input type="text" name="primer_apellido" placeholder="Ingrese Primer Apellido"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange}/>
        <input type="text" name="segundo_apellido" placeholder="Ingrese Segundo Apellido"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange}/>
        <input type="text" name="nombres" placeholder="Ingrese Nombres:"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange}/>
    </div>
        
        <div className="grid grid-flow-row sm:grid-flow-col gap-2">
        <input type="text" name="fecha_nacimiento" placeholder="Fecha Nacimiento (dd/mm/aaaa)"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange}/>
     
        <input type="number" name="numero_ci" placeholder="CI"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange}/>
        <input type="text" name="expedido_ci" placeholder="Expedido"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange}/>
        <input type="text" name="genero" placeholder="Genero"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange}/>
        </div>
        <div className="grid grid-flow-row sm:grid-flow-col gap-2">
        <input type="text" name="email" placeholder="Email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange}/>
        
        <input type="text" name="direccion" placeholder="Direccion"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange}/>
        </div>
        <div className="grid grid-flow-row sm:grid-flow-col gap-2">
        <input type="number" name="telefono_1" placeholder="Telefono"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange}/>
         <input type="number" name="telefono_2" placeholder="Telefono Auxiliar"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange}/>

        <select name="profesion" onChange={handleSelect} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {
                profesiones.map(profesion=>(
                    <option value={profesion._id}>{profesion.nombre}</option>
                ))
            }
        </select>
        </div>
        
         

        
        <button type="submit"
        className="bg-[#2563eb] text-white p-6 mt-4 rounded-lg hover:bg-[#1e40af]"
        >Registrar Persona</button>
    </form>
</div>

    </div>
    
  )
}

export default page