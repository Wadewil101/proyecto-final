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
            <h1 class="text-center m-2 font-semibold italic  text-4xl"><span class=" text-dark px-2 ...">
  Grados
</span></h1>
            <Link href='/grado/new'><button class="bg-[#2563eb] text-white p-4 m-4 rounded-lg">
                Nuevo Grado <FontAwesomeIcon icon={faSquarePlus} /></button></Link>
            <div className="grid grid-cols-4 gap-2">
                {
                    grados.map(grado=>(
                        <Card>
                            <CardHeader>
                                <CardTitle>{grado.nombre}</CardTitle>
                            </CardHeader>
                            <CardFooter>
                            <div className="space-x-4">
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