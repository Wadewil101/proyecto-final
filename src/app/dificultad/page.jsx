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




export const feachDificultades=()=>{
   return fetch('http://localhost:3000/api/dificultad',{ cache: 'no-store'} )
   //return fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res=>res.json());
}

export default async function Dificultades(){
    const {dificultades}= await feachDificultades();
    console.log(dificultades);
    return(
        <div>
            <h1 class="text-center m-2 font-semibold italic  text-4xl"><span class=" text-dark px-2">
  Dificultades
</span></h1>
            <Link href='/dificultad/new'>
            <button class="bg-[#2563eb] text-white p-4 m-4 rounded-lg">
           Nueva Dificultad  <FontAwesomeIcon icon={faSquarePlus} /></button>
            </Link>
            <div className="grid grid-cols-4 gap-2">
                {
                    dificultades.map(dificultad=>(
                        <Card>
                            <CardHeader>
                                <CardTitle>{dificultad.nombre}</CardTitle>
                            </CardHeader>
                            <CardFooter>
                            <div className="space-x-4">
                                <Link href={`/dificultad/${dificultad._id}/delete`}>
                                <FontAwesomeIcon icon={faTrashCan} />
                                </Link>
                                <Link href={`/dificultad/${dificultad._id}/update`}>
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