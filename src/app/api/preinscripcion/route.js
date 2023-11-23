import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Preinscripciones from '@/models/preinscripcion';

export async function GET(){
    try {
        await connectDB();
        const preinscripciones= await Preinscripciones.find();
        return NextResponse.json({
            preinscripciones
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
        const newPreinscripcion = new Inscripciones(data); 
        const respuesta = await newPreinscripcion.save();
        console.log(data);
        return NextResponse.json({
        respuesta
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}