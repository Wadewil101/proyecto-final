"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function HomePage ({params}){
    const [newArea,setNewArea]=useState({
        nombre:"",
    });

    const router = useRouter();
    //const params = useParams();

    const getArea = async ()=>{
        const res = await fetch(`/api/area/${params.id}`);
        const {areas} = await res.json();
        console.log(areas);
        setNewArea({
            nombre:areas.nombre,
        })
    }
    const handlerSubmit=async(e)=>{
        e.preventDefault();
        console.log(newArea);

        const res = await fetch(`/api/area/${params.id}`,{
            method:'PUT',
            body:JSON.stringify(newArea)
        })

        const data = await res.json();
        console.log(data);
        router.push('/area');
        router.refresh();
    }

    const handleDelete=async()=>{
        //console.log();
        if(window.confirm(`Esta seguro de eliminar la area ${newArea.nombre}`)){
            try {
                const res=await fetch(`/api/area/${params.id}`,{
                    method:"DELETE"
                })
                router.push('/area');
                router.refresh(); 
            } catch (error) {
                console.log(error)
            }
        }
    }
    const handlerChangeToggle=(e)=>{
        console.log(e.target.checked)
        setNewArea({...newArea,[e.target.name]:e.target.checked})
    }
    const handlerChange=(e)=>{
        //console.log(e.target.value)
        setNewArea({...newArea,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        getArea()
    },[])

return(
            <div >
                <h1 class="text-center mt-10 p-10 font-semibold italic  text-4xl"><span class=" text-dark px-2 ...">
        Modificar Area
        </span></h1>
        <div className="h-[calc(50-7rem)] flex justify-center items-center">
        <form onSubmit={handlerSubmit} class="flex items-center space-x-4">
        <input type="text" name="nombre" placeholder="Ingrese Nombre area"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newArea.nombre}/>
        
        
       
        
        
        <button type="submit"
        className="mt-3 focus:outline-none text-white bg-[#2563eb] hover:bg-[#1e40af] focus:ring-4 focus:ring-[#60a5fa] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#3b82f6] dark:hover:bg-[#1e40af] dark:focus:ring-[#1e3a8a]"
        >Modificar Area</button>
    </form>
        </div>
                
            </div>
    
)
}
export default HomePage