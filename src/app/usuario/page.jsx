import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import {
    faTrashCan,
    faPenToSquare,
    faSquarePlus

  } from "@fortawesome/free-solid-svg-icons";




export const feachUsuarios=()=>{
   return fetch('http://localhost:3000/api/usuario',{ cache: 'no-store'} )
   //return fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res=>res.json());
}

export default async function Usuarios(){
    const {usuarios}= await feachUsuarios();
    console.log(usuarios);
    return(
        <div>
            <h1 class="text-center m-2 font-semibold italic  text-4xl"><span class=" text-dark px-2 ...">
            Usuarios
            </span></h1>
            <Link href='/usuario/new'>
            <button class="bg-[#2563eb] text-white p-4 m-4 rounded-lg hover:bg-[#1e40af]">
           Nuevo Usuario  <FontAwesomeIcon icon={faSquarePlus} /></button> 
            </Link>
            <div className="grid grid-cols-3 gap-2">
                {
                    usuarios.map(usuario=>(
                        <Card>
                            <CardHeader>
                                <CardTitle>Nombre: {usuario.nombre}</CardTitle>
                                <CardTitle>Contraseña: {usuario.contraseña}</CardTitle>
                                <CardTitle>Activo: {usuario.activo ? "Sí" : "No"}</CardTitle>

                                <CardTitle>Nombre: {usuario.alumno.persona }</CardTitle> 
                                
                                
                                
                                  
                            
                                
                            </CardHeader>
                            <CardFooter>
                            <div className="space-between">
                                <Link href={`/usuario/${usuario._id}/delete`}>
                                <FontAwesomeIcon icon={faTrashCan} />
                                </Link>
                                <Link href={`/usuario/${usuario._id}/update`}>
                                <FontAwesomeIcon icon={faPenToSquare} />
                                </Link>
                            </div>
                            </CardFooter>
                        </Card>
                    ))
                }
            </div> 
        </div>
    )

}