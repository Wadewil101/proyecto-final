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
            nombre:areas.nombre
           
        })
    }
    {/** */}
    const handleDelete=async()=>{
                const res=await fetch(`/api/area/${params.id}`,{
                    method:"DELETE"
                })
                router.push('/area');
                router.refresh(); 
           
        }
    



    useEffect(()=>{
        getArea()
    },[])

return(
    <div>
        

            <AlertDialog>
  <AlertDialogTrigger className={buttonVariants()} >Eliminando el Area: {newArea.nombre} </ AlertDialogTrigger>
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
