"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const feachAreas=()=>{
    return fetch('http://localhost:3000/api/area',{ cache: 'no-store'})
    .then(res=>res.json());
 }
 export const feachDificultades=()=>{
    return fetch('http://localhost:3000/api/dificultad',{ cache: 'no-store'})
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
            
            area:cursos.area,
            dificultad:cursos.dificultad
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
     useEffect(()=>{
        getDificultades()
     },[])

return(
    <div className="  px-20 mt-1">
                <h1 class="text-center  p-10 font-semibold italic  text-4xl"><span class=" text-dark px-2 ...">
  Modificar curso
</span></h1>
        <form onSubmit={handlerSubmit}>
            <div className="grid grid-flow-row sm:grid-flow-col gap-2">
                <input type="text" name="nombre" placeholder="Ingrese nombre"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
                rounded-lg w-full p-4 my-1"
                onChange={handlerChange} value={newCurso.nombre}/>
                <input type="text" name="costo_personalizado" placeholder="Ingrese direccion "
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
                rounded-lg w-full p-4 my-1"
                    onChange={handlerChange} value={newCurso.costo_personalizado}/>
                     <input type="text" name="costo_referencial" placeholder="Ingrese direccion "
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
                      rounded-lg w-full p-4 my-1"
                     onChange={handlerChange} value={newCurso.costo_referencial}/>
                      <input type="color" name="color_hexa" placeholder=""
            
            onChange={handlerChange} value={newCurso.color_hexa}/>
            </div>
            <div>

            </div>
            <div className="grid grid-flow-row sm:grid-flow-col gap-2">
            <input type="text" name="logo" placeholder=""
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
                 rounded-lg w-full p-4 my-1"
                onChange={handlerChange} value={newCurso.logo}/>


                <input type="text" name="eslogan" placeholder="Ingrese direccion "
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
                    rounded-lg w-full p-4 my-1"
                onChange={handlerChange} value={newCurso.eslogan}/>
            </div>
       

        <input type="text" name="descripcion" placeholder="Ingrese direccion "
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newCurso.descripcion}/>

        <div className="grid grid-flow-row sm:grid-flow-col gap-2">
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

        <select name="dificultad" onChange={handleSelect} value={newCurso.dificultad} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {
                dificultades.map(dificultad=>(
                    <option  value={dificultad._id}>{dificultad.nombre}</option>
                ))
            }
        </select>
            </div>
       

        <button type="submit"
        className="bg-[#2563eb] text-white p-6 m-4 rounded-lg hover:bg-[#1e40af]"
        >Modificar Curso</button>
    </form>
    </div>
    
)
}
export default HomePage