import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Cursos from '@/models/curso';

export async function GET(){
    try {
        await connectDB();
        const cursos= await Cursos.find();
        return NextResponse.json({
            cursos
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
        const newCurso = new Cursos(data); 
        const respuesta = await newCurso.save();
        console.log(data);
        return NextResponse.json({
        respuesta
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}