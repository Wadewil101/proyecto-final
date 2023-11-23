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




export const feachCarreras=()=>{
   return fetch('http://localhost:3000/api/carrera',{ cache: 'no-store'} )
   //return fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res=>res.json());
}

export default async function Carreras(){
    const {carreras}= await feachCarreras();
    console.log(carreras);
    return(
        <div>
            <h1>Carreras</h1>
            <Link href='/carrera/new'>Nueva Carrera</Link>
            <div className="grid grid-cols-3 gap-2">
                {
                    carreras.map(carrera=>(
                        <Card>
                            <CardHeader>
                                <CardTitle>Nombre: {carrera.nombre}</CardTitle>
                                <CardTitle>Logo: {carrera.logo}</CardTitle>
                                <CardTitle>Color: {carrera.color_hexa}</CardTitle>
                                
                                <CardTitle>Costo Mensual:{carrera.costo_mensual}</CardTitle>
                                 {/* 
                                <CardTitle>{carrera.area}</CardTitle>
                                <CardTitle>{carrera.dificultad}</CardTitle>
                                */}
                                
                            </CardHeader>
                            <CardFooter>
                            <div className="space-between">
                                <Link href={`/carrera/${carrera._id}/delete`}>
                                <FontAwesomeIcon icon={faTrashCan} />
                                </Link>
                                <Link href={`/carrera/${carrera._id}/update`}>
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