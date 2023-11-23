"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const feachProfesiones=()=>{
    return fetch('http://localhost:3000/api/profesion',{ cache: 'no-store'})
    .then(res=>res.json());
 }

function HomePage ({params}){
    const [newPersona,setPersona]=useState({
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
    });

    const [profesiones, setProfesiones]=useState([]);

    const getProfesiones = async ()=>{
        const res = await fetch(`/api/profesion`);
        const {profesiones} = await res.json();
        console.log(profesiones);
        setProfesiones(profesiones);
    }

    const router = useRouter();
 

    const getPersona = async ()=>{
        const res = await fetch(`/api/persona/${params.id}`);
        const {personas} = await res.json();
        console.log(personas);
        setPersona({
            nombre:personas.nombre,
            primer_apellido:personas.primer_apellido,
            segundo_apellido:personas.segundo_apellido,
            nombres:personas.nombres,
            email:personas.email,
            fecha_nacimiento:personas.fecha_nacimiento,
            numero_ci:personas.numero_ci,
            expedido_ci:personas.expedido_ci,
            genero:personas.genero,
            direccion:personas.direccion,
            telefono_1:personas.telefono_1,
            telefono_2:personas.telefono_2,
            profesion:personas.profesion
        })
    }
    const handlerSubmit=async(e)=>{
        e.preventDefault();
        console.log(newPersona);

        const res = await fetch(`/api/persona/${params.id}`,{
            method:'PUT',
            body:JSON.stringify(newPersona)
        })

        const data = await res.json();
        console.log(data);
        router.push('/persona');
        router.refresh();
    }

    const handleSelect=(e)=>{
        console.log(e.target.value)
        setPersona({...newPersona,[e.target.name]:e.target.value})
    }

   
    const handlerChangeToggle=(e)=>{
        console.log(e.target.checked)
        setPersona({...newPersona,[e.target.name]:e.target.checked})
    }
    const handlerChange=(e)=>{
        //console.log(e.target.value)
        setPersona({...newPersona,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        getPersona()
    },[])

    useEffect(()=>{
        getProfesiones()
     },[])

return(
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">

<form onSubmit={handlerSubmit}>
        <input type="text" name="primer_apellido" placeholder="Ingrese Primer Apellido"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
             onChange={handlerChange} value={newPersona.primer_apellido}/>    
        <input type="text" name="segundo_apellido" placeholder="Ingrese Segundo Apellido"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
             onChange={handlerChange} value={newPersona.segundo_apellido}/>        <input type="text" name="nombres" placeholder="Ingrese Nombres:"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
             onChange={handlerChange} value={newPersona.nombres}/>        <input type="text" name="email" placeholder="Email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
             onChange={handlerChange} value={newPersona.email}/>        <input type="text" name="fecha_nacimiento" placeholder="Fecha Nacimiento (dd/mm/aaaa)"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
             onChange={handlerChange} value={newPersona.fecha_nacimiento}/>     
        <input type="number" name="numero_ci" placeholder="CI"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
             onChange={handlerChange} value={newPersona.numero_ci}/>        <input type="text" name="expedido_ci" placeholder="Expedido"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
             onChange={handlerChange} value={newPersona.expedido_ci}/>
        
        <input type="text" name="genero" placeholder="Genero"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
             onChange={handlerChange} value={newPersona.genero}/>        <input type="text" name="direccion" placeholder="Direccion"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
             onChange={handlerChange} value={newPersona.direccion}/>         
             <input type="number" name="telefono_1" placeholder="Telefono"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
             onChange={handlerChange} value={newPersona.telefono_1}/>         <input type="number" name="telefono_2" placeholder="Telefono Auxiliar"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
             onChange={handlerChange} value={newPersona.telefono_2}/>
        

        <select name="profesion" onChange={handleSelect} value={newPersona.profesion} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {
                profesiones.map(profesion=>(
                    <option value={profesion._id}>{profesion.nombre}</option>
                ))
            }
        </select>
       

        
        <button type="submit"
        className="mt-3 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >Modificar Persona</button>
    </form>
    </div>
    
)
}
export default HomePage