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




export const feachAreas=()=>{
   return fetch('http://localhost:3000/api/area',{ cache: 'no-store'} )
   //return fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res=>res.json());
}

export default async function Areas(){
    const areas= await feachAreas();
    console.log(areas);
    return(
        <div>
            <h1 class="text-center m-2 font-semibold italic  text-4xl"><span class=" text-dark px-2 ...">
  Nuestras Areas
</span></h1>
            <Link href='/area/new'>
            <button class="bg-[#2563eb] text-white p-4 m-4 rounded-lg hover:bg-[#1e40af]">
           Nueva Area  <FontAwesomeIcon icon={faSquarePlus} /></button>
            </Link>
            <div className="grid grid-cols-5 gap-2">
                {
                    areas.map(area=>(
                        <Card>
                            <CardHeader>
                                <CardTitle>{area.nombre}</CardTitle>
                            </CardHeader>
                            <CardFooter>
                            <div  class=" space-x-4 ">
                                <Link href={`/area/${area._id}/delete`}>
                                <FontAwesomeIcon icon={faTrashCan} />
                                </Link>
                                <Link href={`/area/${area._id}/update`}>
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