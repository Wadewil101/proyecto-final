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
    const [newPersona,setNewPersona]=useState({
        nombres:"",
        primer_apellido:""
        
    });

    const router = useRouter();
    //const params = useParams();

    const getPersona = async ()=>{
        const res = await fetch(`/api/persona/${params.id}`);
        const {personas} = await res.json();
        console.log(personas);
        setNewPersona({
            nombres:personas.nombres,
            primer_apellido:personas.primer_apellido
           
        })
    }
    const handleDelete=async()=>{
        const res=await fetch(`/api/persona/${params.id}`,{
            method:"DELETE"
        })
        router.push('/persona');
        router.refresh(); 
   
}



    useEffect(()=>{
        getPersona()
    },[])

return(
    <div>
        <AlertDialog>
  <AlertDialogTrigger className={buttonVariants()} >Eliminando la Persona: {newPersona.nombres} {newPersona.primer_apellido} </ AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Estas completamente seguro de borrar?</AlertDialogTitle>
      <AlertDialogDescription>
        Esta acción no se puede deshacer. Esto eliminará permanentemente tu persona.
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
