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
    const [newUsuario,setNewUsuario]=useState({
        nombre:"",

        
    });

    const router = useRouter();
    //const params = useParams();

    const getUsuario = async ()=>{
        const res = await fetch(`/api/usuario/${params.id}`);
        const {usuarios} = await res.json();
        console.log(usuarios);
        setNewUsuario({
            nombre:usuarios.nombre
           
        })
    }
    const handleDelete=async()=>{
        const res=await fetch(`/api/usuario/${params.id}`,{
            method:"DELETE"
        })
        router.push('/usuario');
        router.refresh(); 
   
}



    useEffect(()=>{
        getUsuario()
    },[])

return(
    <div>
        <AlertDialog>
  <AlertDialogTrigger className={buttonVariants()} >Eliminando el Usuario: {newUsuario.nombre}  </ AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Estas completamente seguro de borrar?</AlertDialogTitle>
      <AlertDialogDescription>
        Esta acción no se puede deshacer. Esto eliminará permanentemente tu usuario.
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
