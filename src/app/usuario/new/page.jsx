"use client"
import { useEffect, useState } from "react";
import { useRouter,useParams } from "next/navigation";

export const feachAlumnos=()=>{
    return fetch('http://localhost:3000/api/alumno',{ cache: 'no-store'})
    .then(res=>res.json());
 }

function page() {
    const [usuario,setUsuario] = useState(
        {
            nombre:"",
            contraseña:"",
            activo:"",
            alumno:""
        }
    );

    const [alumnos, setAlumnos]=useState([]);

    const getAlumnos = async ()=>{
        const res = await fetch(`/api/alumno`);
        const {alumnos} = await res.json();
        console.log(alumnos);
        setAlumnos(alumnos);
    }

    const router = useRouter();
    const params = useParams();

    const handlerSubmit=async(e)=>{
        e.preventDefault();
        console.log(usuario);

        const res = await fetch('/api/usuario',{
            method:'POST',
            body:JSON.stringify(usuario)
        })

        const data = await res.json();
        console.log(data);
        router.push('/usuario');
        router.refresh();
    }

    const handleSelect=(e)=>{
        console.log(e.target.value)
        setUsuario({...usuario,[e.target.name]:e.target.value})
    }

    const handlerChangeToggle=(e)=>{
        console.log(e.target.checked)
        setUsuario({...usuario,[e.target.name]:e.target.checked})
    }
    const handlerChange=(e)=>{
        console.log(e.target.value)
        setUsuario({...usuario,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        getAlumnos()
     },[])

  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">

        <form onSubmit={handlerSubmit}>
        <input type="text" name="nombre" placeholder="Ingrese nombre de Usuario"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange}/>
        <input type="text" name="contraseña" placeholder="contraseña"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange}/>

        <input type="text" name="activo" placeholder=""
            
        onChange={handlerChange}/>

         

        <select name="alumno" onChange={handleSelect} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {
                alumnos.map(alumno=>(
                    <option value={alumno._id}>{alumno._id}</option>
                ))
            }
        </select>

        <button type="submit"
        className="mt-3 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >Registrar Alumno</button>
    </form>
    </div>
    
  )
}

export default page