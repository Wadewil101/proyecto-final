import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Docentes from '@/models/docente';

export async function GET(){
    try {
        await connectDB();
        const docentes= await Docentes.find();
        return NextResponse.json({
            docentes
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
        const newDocente= new Docentes(data); 
        const respuesta = await newDocente.save();
        console.log(data);
        return NextResponse.json({
        respuesta
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}