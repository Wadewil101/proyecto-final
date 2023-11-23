import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import {FontAwesomeIcon} from "@fo"
import {
  faTrashCan,
  faPenToSquare
} from "@fortawesome/free-solid-svg-icons";

import Link from "next/link"
function CursoCard({curso}) {
  return (
          <div className="bg-gray-700 p-10 mt-5 text-white rounded-xl hover:bg-gray-500" >
              <h1>{curso.nombre}</h1>
              <div className="space-between">
                <Link href={`/curso/${curso._id}/delete`}>
                  <FontAwesomeIcon  width={"1em"} icon={faTrashCan} />
                </Link>
                <Link href={`/curso/${curso._id}/update`}>
                  <FontAwesomeIcon width={"1em"} icon={faPenToSquare} />
                </Link>
              </div>
                            
          </div>

  )
}

export default CursoCard