import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Profesiones from '@/models/profesion';

export async function GET(){
    try {
        await connectDB();
        const profesiones= await Profesiones.find();
        return NextResponse.json({
            profesiones
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
        const newProfesion = new Profesiones(data); 
        const respuesta = await newProfesion.save();
        console.log(data);
        return NextResponse.json({
        respuesta
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}