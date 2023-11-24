import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Alumnos from '@/models/alumno';
import Personas from '@/models/persona';



export async function GET(){
    try {
        await connectDB();
        const alumnos= await Alumnos.find().populate("persona");
        return NextResponse.json({
        alumnos
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
        const newAlumno = new Alumnos(data); 
        const respuesta = await newAlumno.save();
        console.log(data);
        return NextResponse.json({
        respuesta
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}