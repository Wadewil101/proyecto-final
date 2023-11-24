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
    <div className=" h-[calc(vh-7rem)]  px-20 mt-1">
        <h1 class="text-center  p-10 font-semibold italic  text-4xl"><span class=" text-dark px-2 ...">
  Nuevo curso
</span></h1>
        <form onSubmit={handlerSubmit} className="">
        
                <div className="grid grid-flow-row sm:grid-flow-col gap-2">
                    <input type="text" name="nombre" placeholder="Ingrese Nombre del curso"
                        className="mt-1 block  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm  focus:outline-none focus:border-sky-500"
                    onChange={handlerChange}/>
                   
                    <input type="number" name="costo_personalizado" placeholder="Ingrese el Costo Personalizado"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
                        rounded-lg w-full p-4 my-1 focus:outline-none focus:border-sky-500"
                    onChange={handlerChange}/>
                    <input type="number" name="costo_referencial" placeholder="Ingrese el Costo Referencial"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
                    rounded-lg w-full p-4 my-1 "
                    onChange={handlerChange}/>
                     <input type="color" name="color_hexa" placeholder=""
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
                            rounded-lg "
                    onChange={handlerChange}/>
                 
                   
                </div>
                <div className="grid grid-flow-row sm:grid-flow-col gap-2 p-4">
                <div >
                    Ingrese el logo del Curso:
                    <input type="file" name="logo" placeholder=""
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
                        rounded-lg w-full p-4 my-1"
                    onChange={handlerChange}/>
                    </div>
                    <div>
                    slogan:
                        <input type="file" name="eslogan" placeholder=""
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
                            rounded-lg w-full p-4 my-1"
                        onChange={handlerChange}/>
                    </div>
                    
                </div>
                <input type="text" name="descripcion" placeholder="Ingrese la Descripcion del curso"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
                    rounded-lg w-full p-4 my-1"
                    onChange={handlerChange}/>
                <div className="grid grid-flow-row sm:grid-flow-col gap-2 p-2">
                    
                    
                    
                    
                </div>
                
                <div className="grid grid-flow-row sm:grid-flow-col gap-2">
                <input type="number" name="horas_academicas" placeholder="Horas Academicas"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
                    rounded-lg w-full p-4 my-1"
                    onChange={handlerChange}/>
                <input type="number" name="horas_reales" placeholder="Horas Reales"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
                        rounded-lg w-full p-4 my-1"
                    onChange={handlerChange}/>
                

                <select name="area" onChange={handleSelect} className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
                        rounded-lg w-full p-4 my-1">
                    {
                        areas.map(area=>(
                            <option value={area._id}>{area.nombre}</option>
                        ))
                    }
                </select>

                <select name="dificultad" onChange={handleSelect} className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
                        rounded-lg w-full p-4 my-1">
                    {
                        dificultades.map(dificultad=>(
                            <option value={dificultad._id}>{dificultad.nombre}</option>
                        ))
                    }
                </select>
                </div>
                
                
                <button class="bg-[#2563eb] text-white p-6 m-4 rounded-lg hover:bg-[#1e40af]">
           reguistar curso  </button>
            </form>
            </div>
    
  )
}

export default page