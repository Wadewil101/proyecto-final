import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Dificultades from '@/models/dificultad';

export async function GET(){
    try {
        await connectDB();
        const dificultades= await Dificultades.find();
        return NextResponse.json({
        dificultades
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
        const newDificultad = new Dificultades(data); 
        const respuesta = await newDificultad.save();
        console.log(data);
        return NextResponse.json({
        respuesta
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}