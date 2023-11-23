"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const feachAreas=()=>{
    return fetch('http://localhost:3000/api/area',{ cache: 'no-store'})
    .then(res=>res.json());
 }

function HomePage ({params}){
    const [newCurso,setCurso]=useState({
            nombre:"",
            logo:"",
            color_hexa:"",
            costo_personalizado:"",
            costo_referencial:"",
            eslogan:"",
            descripcion:"",
            horas_academicas:"",
            horas_reales:"",
            area:"",
            dificultad:""
    });

    const [areas, setAreas]=useState([]);

    const getAreas = async ()=>{
        const res = await fetch(`/api/area`);
        const areas = await res.json();
        console.log(areas);
        setAreas(areas);
    }

    const router = useRouter();
 

    const getCurso = async ()=>{
        const res = await fetch(`/api/curso/${params.id}`);
        const {cursos} = await res.json();
        console.log(cursos);
        setCurso({
            nombre:cursos.nombre,
            logo:cursos.logo,
            color_hexa:cursos.color_hexa,
            costo_personalizado:cursos.costo_personalizado,
            costo_referencial:cursos.costo_referencial,
            eslogan:cursos.eslogan,
            descripcion:cursos.descripcion,
            horas_academicas:cursos.horas_academicas,
            horas_reales:cursos.horas_reales,
            
            area:cursos.area
        })
    }
    const handlerSubmit=async(e)=>{
        e.preventDefault();
        console.log(newCurso);

        const res = await fetch(`/api/curso/${params.id}`,{
            method:'PUT',
            body:JSON.stringify(newCurso)
        })

        const data = await res.json();
        console.log(data);
        router.push('/curso');
        router.refresh();
    }

    const handleSelect=(e)=>{
        console.log(e.target.value)
        setCurso({...newCurso,[e.target.name]:e.target.value})
    }

   
    const handlerChangeToggle=(e)=>{
        console.log(e.target.checked)
        setCurso({...newCurso,[e.target.name]:e.target.checked})
    }
    const handlerChange=(e)=>{
        //console.log(e.target.value)
        setCurso({...newCurso,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        getCurso()
    },[])

    useEffect(()=>{
        getAreas()
     },[])

return(
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">

        <form onSubmit={handlerSubmit}>
        <input type="text" name="nombre" placeholder="Ingrese nombre"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newCurso.nombre}/>

        <input type="text" name="logo" placeholder=""
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newCurso.logo}/>

        <input type="color" name="color_hexa" placeholder=""
            
        onChange={handlerChange} value={newCurso.color_hexa}/>

        <input type="text" name="costo_personalizado" placeholder="Ingrese direccion "
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newCurso.costo_personalizado}/>

        <input type="text" name="costo_referencial" placeholder="Ingrese direccion "
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newCurso.costo_referencial}/>

        <input type="text" name="eslogan" placeholder="Ingrese direccion "
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newCurso.eslogan}/>

        <input type="text" name="descripcion" placeholder="Ingrese direccion "
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newCurso.descripcion}/>

        <input type="text" name="horas_academicas" placeholder="Ingrese direccion "
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newCurso.horas_academicas}/>

        <input type="text" name="horas_reales" placeholder="Ingrese direccion "
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newCurso.horas_reales}/>

        
        <select name="area" onChange={handleSelect} value={newCurso.area} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {
                areas.map(area=>(
                    <option  value={area._id}>{area.nombre}</option>
                ))
            }
        </select>

        <button type="submit"
        className="mt-3 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >Modificar Curso</button>
    </form>
    </div>
    
)
}
export default HomePage