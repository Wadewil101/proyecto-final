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
    const [newDificultad,setNewDificultad]=useState({
        nombre:"",
        
    });

    const router = useRouter();
    //const params = useParams();

    const getDificultad = async ()=>{
        const res = await fetch(`/api/dificultad/${params.id}`);
        const {dificultades} = await res.json();
        console.log(dificultades);
        setNewDificultad({
            nombre:dificultades.nombre
           
        })
    }
    {/** */}
    const handleDelete=async()=>{
                const res=await fetch(`/api/dificultad/${params.id}`,{
                    method:"DELETE"
                })
                router.push('/dificultad');
                router.refresh(); 
           
        }
    



    useEffect(()=>{
        getDificultad()
    },[])

return(
    <div>
        

            <AlertDialog>
  <AlertDialogTrigger className={buttonVariants()} >Eliminando el Dificultad: {newDificultad.nombre} </ AlertDialogTrigger>
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
