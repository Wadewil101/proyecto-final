"use client"
import { useEffect, useState } from "react";
import { useRouter,useParams } from "next/navigation";

export const feachAreas=()=>{
    return fetch('http://localhost:3000/api/area',{ cache: 'no-store'})
    .then(res=>res.json());
 }

 export const feachDificultades=()=>{
    return fetch('http://localhost:3000/api/dificultad',{ cache: 'no-store'})
    .then(res=>res.json());
 }

function page() {
    const [curso,setCurso] = useState(
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
            area:"",
            dificultad:""
        }
    );

    const [areas, setAreas]=useState([]);
    const [dificultades, setDificultades]=useState([]);


    const getAreas = async ()=>{
        const res = await fetch(`/api/area`);
        const areas = await res.json();
        console.log(areas);
        setAreas(areas);
    }

    const getDificultades = async ()=>{
        const res = await fetch(`/api/dificultad`);
        const {dificultades} = await res.json();
        console.log(dificultades);
        setDificultades(dificultades);
    }

    const router = useRouter();
    const params = useParams();

    const handlerSubmit=async(e)=>{
        e.preventDefault();
        console.log(curso);

        const res = await fetch('/api/curso',{
            method:'POST',
            body:JSON.stringify(curso)
        })

        const data = await res.json();
        console.log(data);
        router.push('/curso');
        router.refresh();
    }

    const handleSelect=(e)=>{
        console.log(e.target.value)
        setCurso({...curso,[e.target.name]:e.target.value})
    }

    const handlerChangeToggle=(e)=>{
        console.log(e.target.checked)
        setCurso({...curso,[e.target.name]:e.target.checked})
    }
    const handlerChange=(e)=>{
        console.log(e.target.value)
        setCurso({...curso,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        getAreas()
     },[])

     useEffect(()=>{
        getDificultades()
     },[])

  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">

<form onSubmit={handlerSubmit}>
        <input type="text" name="nombre" placeholder="Ingrese Nombre del curso"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange}/>
        Ingrese el logo del Curso:
        <input type="file" name="logo" placeholder=""
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange}/>
        <input type="color" name="color_hexa" placeholder=""
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg "
        onChange={handlerChange}/>
        <input type="number" name="costo_personalizado" placeholder="Ingrese el Costo Personalizado"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange}/>
        <input type="number" name="costo_referencial" placeholder="Ingrese el Costo Referencial"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange}/>
        Eslogan:
        <input type="file" name="eslogan" placeholder=""
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange}/>
        <input type="text" name="descripcion" placeholder="Ingrese la Descripcion del curso"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange}/>
        <input type="number" name="horas_academicas" placeholder="Horas Academicas"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange}/>
        <input type="number" name="horas_reales" placeholder="Horas Reales"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange}/>

        <select name="area" onChange={handleSelect} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {
                areas.map(area=>(
                    <option value={area._id}>{area.nombre}</option>
                ))
            }
        </select>

        <select name="dificultad" onChange={handleSelect} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {
                dificultades.map(dificultad=>(
                    <option value={dificultad._id}>{dificultad.nombre}</option>
                ))
            }
        </select>
        
        <button type="submit"
        className="mt-3 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >Registrar Curso</button>
    </form>
    </div>
    
  )
}

export default page