"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const feachCursos=()=>{
    return fetch('http://localhost:3000/api/curso',{ cache: 'no-store'})
    .then(res=>res.json());
 }

function HomePage ({params}){
    const [newCarrera,setCarrera]=useState({
        nombre:"",
        logo:"",
        color_hexa:"",
        costo_mensual:"",
        curso:""
    });

    const [cursos, setCursos]=useState([]);

    const getCursos = async ()=>{
        const res = await fetch(`/api/curso`);
        const {cursos} = await res.json();
        console.log(cursos);
        setCursos(cursos);
    }

    const router = useRouter();
 

    const getCarrera = async ()=>{
        const res = await fetch(`/api/carrera/${params.id}`);
        const {carreras} = await res.json();
        console.log(carreras);
        setCarrera({
            nombre:carreras.nombre,
            logo:carreras.logo,
            color_hexa:carreras.color_hexa,
            costo_mensual:carreras.costo_mensual,
            curso:carreras.curso
        })
    }
    const handlerSubmit=async(e)=>{
        e.preventDefault();
        console.log(newCarrera);

        const res = await fetch(`/api/carrera/${params.id}`,{
            method:'PUT',
            body:JSON.stringify(newCarrera)
        })

        const data = await res.json();
        console.log(data);
        router.push('/carrera');
        router.refresh();
    }

    const handleSelect=(e)=>{
        console.log(e.target.value)
        setCarrera({...newCarrera,[e.target.name]:e.target.value})
    }

   
    const handlerChangeToggle=(e)=>{
        console.log(e.target.checked)
        setCarrera({...newCarrera,[e.target.name]:e.target.checked})
    }
    const handlerChange=(e)=>{
        //console.log(e.target.value)
        setCarrera({...newCarrera,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        getCarrera()
    },[])

    useEffect(()=>{
        getCursos()
     },[])

return(
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">

        <form onSubmit={handlerSubmit}>
        <input type="text" name="nombre" placeholder="Ingrese nombre"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newCarrera.nombre}/>

        <input type="text" name="logo" placeholder=""
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newCarrera.logo}/>

        <input type="color" name="color_hexa" placeholder="Ingrese direccion "
            
        onChange={handlerChange} value={newCarrera.color_hexa}/>

        <input type="text" name="costo_mensual" placeholder="Ingrese direccion "
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newCarrera.costo_mensual}/>
        
        <select name="curso" onChange={handleSelect} value={newCarrera.curso} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {
                cursos.map(curso=>(
                    <option  value={curso._id}>{curso.nombre}</option>
                ))
            }
        </select>

        <button type="submit"
        className="mt-3 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >Modificar Carrera</button>
    </form>
    </div>
    
)
}
export default HomePage