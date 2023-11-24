"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const feachAlumnos=()=>{
    return fetch('http://localhost:3000/api/alumno',{ cache: 'no-store'})
    .then(res=>res.json());
 }

function HomePage ({params}){
    const [newUsuario,setUsuario]=useState({
            nombre:"",
            contraseña:"",
            activo:"",
            alumno:""
           
    });

    const [alumnos, setAlumnos]=useState([]);


    const getAlumnos = async ()=>{
        const res = await fetch(`/api/alumno`);
        const {alumnos} = await res.json();
        console.log(alumnos);
        setAlumnos(alumnos);
    }



    const router = useRouter();
 

    const getUsuario = async ()=>{
        const res = await fetch(`/api/usuario/${params.id}`);
        const {usuarios} = await res.json();
        console.log(usuarios);
        setUsuario({
            nombre:usuarios.nombre,
            logo:usuarios.logo,
            color_hexa:usuarios.color_hexa,
            costo_personalizado:usuarios.costo_personalizado,
            costo_referencial:usuarios.costo_referencial,
            eslogan:usuarios.eslogan,
            descripcion:usuarios.descripcion,
            horas_academicas:usuarios.horas_academicas,
            horas_reales:usuarios.horas_reales,
            
            alumno:usuarios.alumno,
            dificultad:usuarios.dificultad
        })
    }
    const handlerSubmit=async(e)=>{
        e.preventDefault();
        console.log(newUsuario);

        const res = await fetch(`/api/usuario/${params.id}`,{
            method:'PUT',
            body:JSON.stringify(newUsuario)
        })

        const data = await res.json();
        console.log(data);
        router.push('/usuario');
        router.refresh();
    }

    const handleSelect=(e)=>{
        console.log(e.target.value)
        setUsuario({...newUsuario,[e.target.name]:e.target.value})
    }

   
    const handlerChangeToggle=(e)=>{
        console.log(e.target.checked)
        setUsuario({...newUsuario,[e.target.name]:e.target.checked})
    }
    const handlerChange=(e)=>{
        //console.log(e.target.value)
        setUsuario({...newUsuario,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        getUsuario()
    },[])

    useEffect(()=>{
        getAlumnos()
     },[])

return(
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">

<form onSubmit={handlerSubmit}>
        <input type="text" name="nombre" placeholder="Ingrese Nombre del usuario"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
             onChange={handlerChange} value={newUsuario.nombre}/>
        <input type="password" name="contraseña" placeholder="Contraseña"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
             onChange={handlerChange} value={newUsuario.contraseña}/>        

        <select
  name="activo"
  className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg"
  onChange={handlerChange}
  required
>
  <option value="">Seleccione la Opción Activo o Inactivo</option>
  <option value="true">Sí</option>
  <option value="false">No</option>
</select>
        
        <select name="alumno" onChange={handleSelect} value={newUsuario.alumno} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {
                alumnos.map(alumno=>(
                    <option value={alumno._id}>{alumno._id}</option>
                ))
            }
        </select>

        
        
        <button type="submit"
        className="mt-3 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >Modificar Usuario</button>
    </form>
    </div>
    
)
}
export default HomePage