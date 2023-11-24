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
    const [newProfesion,setNewProfesion]=useState({
        nombre:"",
        
    });

    const router = useRouter();
    //const params = useParams();

    const getProfesion = async ()=>{
        const res = await fetch(`/api/profesion/${params.id}`);
        const {profesions} = await res.json();
        console.log(profesions);
        setNewProfesion({
            nombre:profesions.nombre
           
        })
    }
    {/** */}
    const handleDelete=async()=>{
                const res=await fetch(`/api/profesion/${params.id}`,{
                    method:"DELETE"
                })
                router.push('/profesion');
                router.refresh(); 
           
        }
    



    useEffect(()=>{
        getProfesion()
    },[])

return(
    <div>
        

            <AlertDialog>
  <AlertDialogTrigger className={buttonVariants()} >Eliminando el Profesion: {newProfesion.nombre} </ AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Estas completamente seguro de borrar?</AlertDialogTitle>
      <AlertDialogDescription>
        Esta acción no se puede deshacer. Esto eliminará permanentemente tu profesion.
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
