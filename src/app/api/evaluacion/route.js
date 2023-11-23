import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Evaluaciones from '@/models/evaluacion';

export async function GET(){
    try {
        await connectDB();
        const evaluaciones= await Evaluaciones.find();
        return NextResponse.json({
            evaluaciones
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
        const newDodente= new Evaluaciones(data); 
        const respuesta = await newDodente.save();
        console.log(data);
        return NextResponse.json({
        respuesta
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}