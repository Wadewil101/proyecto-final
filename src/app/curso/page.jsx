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




export const feachCursos=()=>{
   return fetch('http://localhost:3000/api/curso',{ cache: 'no-store'} )
   //return fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res=>res.json());
}

export default async function Cursos(){
    const {cursos}= await feachCursos();
    console.log(cursos);
    return(
        <div>
             <h1 class="text-center m-2 font-semibold italic  text-4xl"><span class=" text-dark px-2 ...">
   Cursos
</span></h1>
            <Link href='/curso/new'> <button class="bg-[#2563eb] text-white p-4 m-4 rounded-lg hover:bg-[#1e40af]">
           Nuevo Curso  <FontAwesomeIcon icon={faSquarePlus} /></button></Link>
            <div className="grid grid-cols-3 gap-2">
                {
                    cursos.map(curso=>(
                        <Card>
                            <CardHeader>
                                <CardTitle>Nombre: {curso.nombre}</CardTitle>
                                <CardTitle>Costo: {curso.costo_personalizado}</CardTitle>
                                <CardTitle>Costo Ref: {curso.costo_referencial}</CardTitle>
                                <CardTitle style={{color: curso.color_hexa}}>Color: {curso.color_hexa}</CardTitle>                                <CardTitle>Logo: {curso.logo}</CardTitle>
                                <CardTitle>Eslogan: {curso.eslogan}</CardTitle>
                                <CardTitle>Descripcion: {curso.descripcion}</CardTitle>
                                <CardTitle>Horas: {curso.horas_academicas}</CardTitle>
                                <CardTitle>Horas reales:{curso.horas_reales}</CardTitle>
                                <CardTitle>Area:{curso.area.nombre}</CardTitle>
                                <CardTitle>Dificultad:{curso.dificultad.nombre}</CardTitle>
                                 {/* 
                                <CardTitle>{curso.area}</CardTitle>
                                <CardTitle>{curso.dificultad}</CardTitle>
                                */}
                                
                            </CardHeader>
                            <CardFooter>
                            <div className="space-x-4">
                                <Link href={`/curso/${curso._id}/delete`}>
                                <FontAwesomeIcon icon={faTrashCan} />
                                </Link>
                                <Link href={`/curso/${curso._id}/update`}>
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