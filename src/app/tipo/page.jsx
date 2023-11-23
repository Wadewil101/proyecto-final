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




export const feachTipos=()=>{
   return fetch('http://localhost:3000/api/tipo',{ cache: 'no-store'} )
   //return fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res=>res.json());
}

export default async function Tipos(){
    const {tipos}= await feachTipos();
    console.log(tipos);
    return(
        <div>
            <h1>Tipos</h1>
            <Link href='/tipo/new'>Nueva Tipo</Link>
            <div className="grid grid-cols-3 gap-2">
                {
                    tipos.map(tipo=>(
                        <Card>
                            <CardHeader>
                                <CardTitle>{tipo.nombre}</CardTitle>
                                <CardTitle>{tipo.horas_reales}</CardTitle>
                            </CardHeader>
                            <CardFooter>
                            <div className="space-between">
                                <Link href={`/tipo/${tipo._id}/delete`}>
                                <FontAwesomeIcon icon={faTrashCan} />
                                </Link>
                                <Link href={`/tipo/${tipo._id}/update`}>
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