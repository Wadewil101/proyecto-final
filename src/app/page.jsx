import Link from "next/link";

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
}
