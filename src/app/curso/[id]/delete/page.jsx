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
    const [newCurso,setNewCurso]=useState({
        nombre:"",
        
    });

    const router = useRouter();
    //const params = useParams();

    const getCurso = async ()=>{
        const res = await fetch(`/api/curso/${params.id}`);
        const {cursos} = await res.json();
        console.log(cursos);
        setNewCurso({
            nombre:cursos.nombre
           
        })
    }
    {/** */}
    const handleDelete=async()=>{
                const res=await fetch(`/api/curso/${params.id}`,{
                    method:"DELETE"
                })
                router.push('/curso');
                router.refresh(); 
           
        }
    



    useEffect(()=>{
        getCurso()
    },[])

return(
    <div>
        

            <AlertDialog>
  <AlertDialogTrigger className={buttonVariants()} >Eliminando el Curso: {newCurso.nombre} </ AlertDialogTrigger>
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
