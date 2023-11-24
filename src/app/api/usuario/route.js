import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Usuarios from '@/models/usuario';
import Alumnos from '@/models/alumno';
import Personas from '@/models/persona';


export async function GET(){
    try {
        await connectDB();
        const usuarios= await Usuarios.find().populate("alumno");
        return NextResponse.json({
            usuarios
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}
export async function POST(request){
    try {
        await connectDB();
        const data = await request.json();
        const newUsuario = new Usuarios(data); 
        const respuesta = await newUsuario.save();
        console.log(data);
        return NextResponse.json({
        respuesta
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}