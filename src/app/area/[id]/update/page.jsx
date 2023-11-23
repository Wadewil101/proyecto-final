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
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">

        <form onSubmit={handlerSubmit}>
        <input type="text" name="nombre" placeholder="Ingrese Nombre area"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newArea.nombre}/>
        
        
       
        
        
        <button type="submit"
        className="mt-3 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >Modificar Area</button>
    </form>
    </div>
    
)
}
export default HomePage