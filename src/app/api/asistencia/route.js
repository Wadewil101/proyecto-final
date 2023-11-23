import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Asistencias from '@/models/asistencia';

export async function GET(){
    try {
        await connectDB();
        const asistencias= await Asistencias.find();
        return NextResponse.json({
            asistencias
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
        const newasistencia = new Asistencias(data); 
        const respuesta = await newasistencia.save();
        console.log(data);
        return NextResponse.json({
        respuesta
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}