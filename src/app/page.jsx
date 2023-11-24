
{/**  import Link from "next/link";

export default function Home() {
  return (
        <div>
          <h1>Home</h1>
          <Link href="/convocatoria">Convocatoria</Link>
          <Link href="/materia">Materia</Link>
          <Link href="/test">Test de Conocimientos</Link>
          <Link href="/simulacion">Simulacion de Examen</Link>
        </div>
      )
} */}



import Link from "next/link";
export default function LoginForm(){
  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-a border-green-400">
        <h1 className="text-xl font-bold my-4"> Ingresa detalles
        </h1>

        <form className="flex flex-col gap-3">
          <input type="text" placeholder="Email"></input>
          <input type="password" placeholder="Password"></input> 
          <button >Login</button>
          <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">Error

          </div>
          <Link className="text-sm mt-3 text-right" href={"/register"}>Sin cuenta?
          <span className="underline">Registrar
            </span>
            </Link>

          </form>

      </div>

    </div>
  );
}
