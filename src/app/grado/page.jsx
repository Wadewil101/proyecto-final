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




export const feachGrados=()=>{
   return fetch('http://localhost:3000/api/grado',{ cache: 'no-store'} )
   //return fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res=>res.json());
}

export default async function Grados(){
    const {grados}= await feachGrados();
    console.log(grados);
    return(
        <div>
            <h1>Grados</h1>
            <Link href='/grado/new'>Nueva Grado</Link>
            <div className="grid grid-cols-3 gap-2">
                {
                    grados.map(grado=>(
                        <Card>
                            <CardHeader>
                                <CardTitle>{grado.nombre}</CardTitle>
                            </CardHeader>
                            <CardFooter>
                            <div className="space-between">
                                <Link href={`/grado/${grado._id}/delete`}>
                                <FontAwesomeIcon icon={faTrashCan} />
                                </Link>
                                <Link href={`/grado/${grado._id}/update`}>
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