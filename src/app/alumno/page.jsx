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
    faPenToSquare
  } from "@fortawesome/free-solid-svg-icons";




export const feachAlumnos=()=>{
   return fetch('http://localhost:3000/api/alumno',{ cache: 'no-store'} )
   //return fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res=>res.json());
}

export default async function Alumnos(){
    const {alumnos}= await feachAlumnos();
    console.log(alumnos);
    return(
        <div>
            <h1>Alumnos</h1>
            <Link href='/alumno/new'>Nueva Alumno</Link>
            <div className="grid grid-cols-3 gap-2">
                {
                    alumnos.map(alumno=>(
                        <Card>
                            <CardHeader>
                                <CardTitle>Preinscripciones incompletas: {alumno.preinscripciones_incompletas}</CardTitle>
                                <CardTitle>Nombres: {alumno.persona.nombres} {alumno.persona.primer_apellido}</CardTitle>
                                
                                 {/* 
                                <CardTitle>{alumno.area}</CardTitle>
                                <CardTitle>{alumno.dificultad}</CardTitle>
                                */}
                                
                            </CardHeader>
                            <CardFooter>
                            <div className="space-between">
                                <Link href={`/alumno/${alumno._id}/delete`}>
                                <FontAwesomeIcon icon={faTrashCan} />
                                </Link>
                                <Link href={`/alumno/${alumno._id}/update`}>
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