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




export const feachPersonas=()=>{
   return fetch('http://localhost:3000/api/persona',{ cache: 'no-store'} )
   //return fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res=>res.json());
}

export default async function Personas(){
    const {personas}= await feachPersonas();
    console.log(personas);
    return(
        <div>
            <h1 class="text-center m-2 font-semibold italic  text-4xl"><span class=" text-dark px-2 ...">
                Personas
            </span></h1>
            <Link href='/persona/new'>
            <button class="bg-[#2563eb] text-white p-4 m-4 rounded-lg hover:bg-[#1e40af]">
           Nueva Persona  <FontAwesomeIcon icon={faSquarePlus} /></button>
            </Link>
            <div className="grid grid-cols-3 gap-2">
                {
                    personas.map(persona=>(
                        <Card>
                            <CardHeader>
                            <CardTitle>Apellidos: {persona.primer_apellido} {persona.segundo_apellido}</CardTitle>
                                <CardTitle>Nombres: {persona.nombres}</CardTitle>
                                <CardTitle>Email: {persona.email}</CardTitle>
                                <CardTitle>Fecha Nac.: {persona.fecha_nacimiento}</CardTitle>
                                <CardTitle>CI: {persona.numero_ci}</CardTitle>
                                <CardTitle>Expedido CI: {persona.expedido_ci}</CardTitle>
                                <CardTitle>Género: {persona.genero}</CardTitle>
                                <CardTitle>Direccion: {persona.direccion}</CardTitle>
                                <CardTitle>Telefono: {persona.telefono_1}</CardTitle>
                                <CardTitle>Telefono Aux: {persona.telefono_2}</CardTitle>
                                <CardTitle>Profesion: {persona.profesion.nombre}</CardTitle>
                                 {/* 
                                <CardTitle>{persona.area}</CardTitle>
                                <CardTitle>{persona.dificultad}</CardTitle>
                                */}
                                
                            </CardHeader>
                            <CardFooter>
                            <div className="space-x-4">
                                <Link href={`/persona/${persona._id}/delete`}>
                                <FontAwesomeIcon icon={faTrashCan} />
                                </Link>
                                <Link href={`/persona/${persona._id}/update`}>
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