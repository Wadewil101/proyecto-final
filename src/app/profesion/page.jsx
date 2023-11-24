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




export const feachProfesiones=()=>{
   return fetch('http://localhost:3000/api/profesion',{ cache: 'no-store'} )
   //return fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res=>res.json());
}

export default async function Profesiones(){
    const {profesiones}= await feachProfesiones();
    console.log(profesiones);
    return(
        <div>
            <h1>Profesiones</h1>
            <Link href='/profesion/new'>Nueva Profesion</Link>
            <div className="grid grid-cols-3 gap-2">
                {
                    profesiones.map(profesion=>(
                        <Card>
                            <CardHeader>
                                <CardTitle>Nombre: {profesion.nombre}</CardTitle>
                                <CardTitle>Grado: {profesion.grado.nombre}</CardTitle>
                            
                                
                            </CardHeader>
                            <CardFooter>
                            <div className="space-between">
                                <Link href={`/profesion/${profesion._id}/delete`}>
                                <FontAwesomeIcon icon={faTrashCan} />
                                </Link>
                                <Link href={`/profesion/${profesion._id}/update`}>
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