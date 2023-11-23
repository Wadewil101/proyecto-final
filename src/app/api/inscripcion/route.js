import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Inscripciones from '@/models/inscripcion';

export async function GET(){
    try {
        await connectDB();
        const inscripciones= await Inscripciones.find();
        return NextResponse.json({
            inscripciones
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
        const newInscripcion = new Inscripciones(data); 
        const respuesta = await newInscripcion.save();
        console.log(data);
        return NextResponse.json({
        respuesta
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}