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
            <h1>Areas</h1>
            <Link href='/area/new'>Nueva Area</Link>
            <div className="grid grid-cols-3 gap-2">
                {
                    areas.map(area=>(
                        <Card>
                            <CardHeader>
                                <CardTitle>{area.nombre}</CardTitle>
                            </CardHeader>
                            <CardFooter>
                            <div className="space-between">
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