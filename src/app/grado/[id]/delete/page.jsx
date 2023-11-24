"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import {
    Button, buttonVariants} from "@/components/ui/button"





function HomePage ({params}){
    const [newGrado,setNewGrado]=useState({
        nombre:"",
        
    });

    const router = useRouter();
    //const params = useParams();

    const getGrado = async ()=>{
        const res = await fetch(`/api/grado/${params.id}`);
        const {grados} = await res.json();
        console.log(grados);
        setNewGrado({
            nombre:grados.nombre
           
        })
    }
    {/** */}
    const handleDelete=async()=>{
                const res=await fetch(`/api/grado/${params.id}`,{
                    method:"DELETE"
                })
                router.push('/grado');
                router.refresh(); 
           
        }
    



    useEffect(()=>{
        getGrado()
    },[])

return(
    <div>
        

            <AlertDialog>
  <AlertDialogTrigger className={buttonVariants()} >Eliminando el Grado: {newGrado.nombre} </ AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Estas completamente seguro de borrar?</AlertDialogTitle>
      <AlertDialogDescription>
        Esta acción no se puede deshacer. Esto eliminará permanentemente tu curso.
        y eliminar sus datos del sistema.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancelar</AlertDialogCancel>
      <AlertDialogAction onClick={handleDelete}>Continuar</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
    </div>

    




)
}
export default HomePage
