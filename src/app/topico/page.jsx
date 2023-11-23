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




export const feachTopicos=()=>{
   return fetch('http://localhost:3000/api/topico',{ cache: 'no-store'} )
   //return fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res=>res.json());
}

export default async function Topicos(){
    const {topicos}= await feachTopicos();
    console.log(topicos);
    return(
        <div>
            <h1>Topicos</h1>
            <Link href='/topico/new'>Nueva Topico</Link>
            <div className="grid grid-cols-3 gap-2">
                {
                    topicos.map(topico=>(
                        <Card>
                            <CardHeader>
                                <CardTitle>Subtitulo: {topico.subtitulo}</CardTitle>
                                <CardTitle>Archivo URL: {topico.archivo_url}</CardTitle>
                               {/**<CardTitle>Capitulo: {topico.capitulo}</CardTitle> */} 
                                
                                
                            </CardHeader>
                            <CardFooter>
                            <div className="space-between">
                                <Link href={`/topico/${topico._id}/delete`}>
                                <FontAwesomeIcon icon={faTrashCan} />
                                </Link>
                                <Link href={`/topico/${topico._id}/update`}>
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