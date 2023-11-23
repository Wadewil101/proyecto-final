"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function HomePage ({params}){
    const [newMateria,setNewMateria]=useState({
        titulo:"",
        imagen:"",
        visible:true,
        orden:'1'
    });

    const router = useRouter();
    //const params = useParams();

    const getMateria = async ()=>{
        const res = await fetch(`/api/materia/${params.id}`);
        const {materias} = await res.json();
        console.log(materias);
        setNewMateria({
            titulo:materias.titulo,
            imagen:materias.imagen,
            visible:materias.visible,
            orden:materias.orden
        })
    }
    const handlerSubmit=async(e)=>{
        e.preventDefault();
        console.log(newMateria);

        const res = await fetch(`/api/materia/${params.id}`,{
            method:'PUT',
            body:JSON.stringify(newMateria)
        })

        const data = await res.json();
        console.log(data);
        router.push('/materia');
        router.refresh();
    }

    const handleDelete=async()=>{
        //console.log();
        if(window.confirm(`Esta seguro de eliminar la materia ${newMateria.titulo}`)){
            try {
                const res=await fetch(`/api/materia/${params.id}`,{
                    method:"DELETE"
                })
                router.push('/materia');
                router.refresh(); 
            } catch (error) {
                console.log(error)
            }
        }
    }
    const handlerChangeToggle=(e)=>{
        console.log(e.target.checked)
        setNewMateria({...newMateria,[e.target.name]:e.target.checked})
    }
    const handlerChange=(e)=>{
        //console.log(e.target.value)
        setNewMateria({...newMateria,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        getMateria()
    },[])

return(
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">

        <form onSubmit={handlerSubmit}>
        <input type="text" name="titulo" placeholder="Ingrese Titulo materia"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newMateria.titulo}/>
        <input type="file" name="imagen" placeholder="seleccione una imagen"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg  w-full  p-4  my-1"
        onChange={handlerChange} />
        
        <label className="relative inline-flex items-center cursor-pointer my-1">
        <input name="visible" type="checkbox" checked={newMateria.visible} class="sr-only peer"
        onChange={handlerChangeToggle}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Visible</span>
        </label>
        
        <input type="text" name="orden" placeholder="asignar un orden 1,2,3,4"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg  w-full  p-4  my-1"
        onChange={handlerChange} value={newMateria.orden}/>
        <button type="submit"
        className="mt-3 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >Modificar Materia</button>
    </form>
    </div>
    
)
}
export default HomePage